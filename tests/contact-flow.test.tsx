// @vitest-environment jsdom
// @vitest-environment-options {"url":"https://www.linklady.cz/sluzby/seo?email=private%40example.com#poptavka"}
import React from 'react'
import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import ContactForm from '../components/contact-form'
import { POST } from '../app/api/poptavka/route'
import { ANALYTICS_CONSENT_KEY } from '../lib/analytics-consent'

// The only external boundaries are mocked. The component, route, validation,
// rate-limit request, Resend adapter and event/consent helper are real code.
vi.mock('convex/browser', () => ({ ConvexHttpClient: vi.fn(() => { throw new Error('Unexpected database access') }) }))
vi.mock('next/link', () => ({ default: ({children, ...props}: React.ComponentProps<'a'>) => <a {...props}>{children}</a> }))
const gtag = vi.fn()
let provider: () => Promise<Response>
let limit: number
let requests: {url: string; options?: RequestInit}[]
function consent(accepted: boolean) {
 localStorage.setItem(ANALYTICS_CONSENT_KEY,JSON.stringify({accepted,savedAt:Date.now()}))
}
beforeEach(() => {
 requests=[];limit=1;provider=async()=>Response.json({id:'simulated-provider-receipt'})
 vi.stubEnv('RESEND_API_KEY','test-only');vi.stubEnv('UPSTASH_REDIS_REST_URL','https://redis.example');vi.stubEnv('UPSTASH_REDIS_REST_TOKEN','test-only');vi.stubEnv('VERCEL','1')
 Object.assign(window,{gtag});consent(true)
 vi.stubGlobal('fetch',vi.fn(async (url: string, options?: RequestInit) => {
  requests.push({url,options})
  // jsdom's AbortSignal is not accepted by Node's Request. The browser timeout
  // belongs to the client boundary; the simulated server request has its own.
  if(url==='/api/poptavka') {
   const {signal: _clientSignal, ...serverOptions}=options ?? {}
   return POST(new Request('https://www.linklady.cz/api/poptavka',{...serverOptions,headers:{'Content-Type':'application/json',origin:'https://www.linklady.cz','x-vercel-forwarded-for':'192.0.2.1'}}))
  }
  if(url==='https://redis.example') return Response.json({result:limit})
  if(url==='https://api.resend.com/emails') return provider()
  throw new Error('Unexpected network access')
 }))
})
afterEach(()=>{cleanup();localStorage.clear();vi.restoreAllMocks();vi.clearAllMocks();vi.unstubAllGlobals();vi.unstubAllEnvs();delete (window as Window & {gtag?:unknown}).gtag})
function fill(message='Simulovaná zpráva',website='') {
 render(<ContactForm service="SEO pro váš web a podnikání" />)
 fireEvent.change(screen.getByLabelText('Jméno *'),{target:{value:'Test'}})
 fireEvent.change(screen.getByLabelText('E-mail *'),{target:{value:'test@example.com'}})
 fireEvent.change(screen.getByLabelText('Co řešíte *'),{target:{value:message}})
 if(website)fireEvent.change(screen.getByLabelText(/Adresa současného webu/),{target:{value:website}})
 return screen.getByRole('button',{name:'Odeslat nezávaznou poptávku'}).closest('form')!
}
const leads=()=>gtag.mock.calls.filter(c=>c[1]==='generate_lead')
it('accepts one submission after the provider receipt, blocks double submit and emits only safe context',async()=>{
 let resolve!: (r:Response)=>void
 provider=()=>new Promise(r=>{resolve=r})
 const form=fill();fireEvent.submit(form);fireEvent.submit(form)
 await waitFor(()=>expect(requests.filter(r=>r.url.includes('resend.com'))).toHaveLength(1))
 expect(screen.getByRole('button',{name:'Odesílám…'})).toHaveProperty('disabled',true)
 expect(form.getAttribute('aria-busy')).toBe('true');expect(leads()).toHaveLength(0)
 resolve(Response.json({id:'simulated-provider-receipt'}))
 const heading=await screen.findByRole('heading',{name:'Poptávka je přijatá, děkuji'})
 expect(document.activeElement).toBe(heading)
 expect(requests.filter(r=>r.url==='/api/poptavka')).toHaveLength(1)
 expect(leads()).toEqual([['event','generate_lead',{form_id:'contact',form_location:'SEO pro váš web a podnikání',page_path:'/sluzby/seo'}]])
 expect(JSON.stringify(gtag.mock.calls)).not.toMatch(/test@example|Simulovaná zpráva|private|\?email/)
})
it('preserves data on provider failure and reuses the provider idempotency key on retry',async()=>{
 provider=async()=>{throw new TypeError('simulated network failure')}
 const form=fill();fireEvent.submit(form)
 await screen.findByRole('alert')
 expect(leads()).toHaveLength(0)
 expect(screen.getByLabelText('Co řešíte *')).toHaveProperty('value','Simulovaná zpráva')
 expect(screen.getByRole('button',{name:'Odeslat nezávaznou poptávku'})).toHaveProperty('disabled',false)
 provider=async()=>Response.json({id:'simulated-provider-receipt'});fireEvent.submit(form)
 await screen.findByRole('heading',{name:'Poptávka je přijatá, děkuji'})
 const keys=requests.filter(r=>r.url.includes('resend.com')).map(r=>(r.options?.headers as Record<string,string>)['Idempotency-Key'])
 expect(keys).toHaveLength(2);expect(keys[0]).toBe(keys[1]);expect(leads()).toHaveLength(1)
})
it.each([Response.json({id:'ignored'},{status:503}),Response.json({ok:true})])('rejects an invalid provider response without losing inputs',async(response)=>{
 provider=async()=>response
 fireEvent.submit(fill())
 await screen.findByRole('alert');expect(leads()).toHaveLength(0)
 expect(screen.getByLabelText('E-mail *')).toHaveProperty('value','test@example.com')
})
it('rejects exhausted limits without sending and preserves the form',async()=>{
 limit=0;fireEvent.submit(fill());await screen.findByRole('alert')
 expect(screen.getByRole('alert').textContent).toContain('limitu')
 expect(requests.some(r=>r.url.includes('resend.com'))).toBe(false);expect(leads()).toHaveLength(0)
})
it.each([['   ',''],['Text','https://user:password@example.com']])('validates before making a request',async(message,website)=>{
 fireEvent.submit(fill(message,website));await screen.findByRole('alert')
 expect(requests).toHaveLength(0);expect(leads()).toHaveLength(0)
})
it('honors refused consent even after provider acceptance',async()=>{
 consent(false);fireEvent.submit(fill())
 await screen.findByRole('heading',{name:'Poptávka je přijatá, děkuji'})
 expect(gtag).not.toHaveBeenCalled()
})
it('keeps confirmed success when analytics throws',async()=>{
 gtag.mockImplementation(()=>{throw new Error('simulated analytics failure')})
 fireEvent.submit(fill());await screen.findByRole('heading',{name:'Poptávka je přijatá, děkuji'})
 expect(screen.queryByRole('alert')).toBeNull();expect(requests.filter(r=>r.url==='/api/poptavka')).toHaveLength(1)
})
