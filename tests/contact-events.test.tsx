// @vitest-environment jsdom
import React from 'react'
import { afterEach, expect, it, vi } from 'vitest'
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import ContactForm from '../components/contact-form'
import { trackEvent } from '../lib/analytics'
vi.mock('../lib/analytics', () => ({trackEvent:vi.fn()}))
vi.mock('next/link', () => ({default: ({children,href,...props}: React.ComponentProps<'a'>) => <a href={href} {...props}>{children}</a>}))
afterEach(() => { cleanup(); vi.restoreAllMocks(); vi.clearAllMocks(); vi.unstubAllGlobals() })
function fillAndSubmit() {
 render(<ContactForm />)
 fireEvent.change(screen.getByLabelText('Jméno *'),{target:{value:'Test'}})
 fireEvent.change(screen.getByLabelText('E-mail *'),{target:{value:'test@example.com'}})
 fireEvent.change(screen.getByLabelText('Co řešíte *'),{target:{value:'Soukromá zpráva'}})
 fireEvent.submit(screen.getByRole('button',{name:'Odeslat nezávaznou poptávku'}).closest('form')!)
}
it('sends exactly one lead event without personal data only after server acceptance', async () => {
 vi.stubGlobal('fetch',vi.fn().mockResolvedValue({ok:true,status:200,json:async()=>({ok:true,accepted:true})}))
 fillAndSubmit()
 await screen.findByRole('heading',{name:'Poptávka je přijatá, děkuji'})
 expect(trackEvent).toHaveBeenCalledExactlyOnceWith('generate_lead',{form_id:'contact',form_location:'kontakt',page_path:'/'})
})
it('does not count a honeypot response as a lead', async () => {
 vi.stubGlobal('fetch',vi.fn().mockResolvedValue({ok:true,status:200,json:async()=>({ok:true,accepted:false})}))
 fillAndSubmit()
 await screen.findByRole('heading',{name:'Poptávka je přijatá, děkuji'})
 expect(trackEvent).not.toHaveBeenCalledWith('generate_lead',expect.anything())
})
it('does not count mail fallback or a server rejection as a lead', async () => {
 vi.stubGlobal('fetch',vi.fn().mockResolvedValue({ok:false,status:503,json:async()=>({ok:false})}))
 fillAndSubmit()
 await waitFor(()=>expect(trackEvent).toHaveBeenCalledWith('form_error',{form_id:'contact',form_location:'kontakt',page_path:'/',reason:'delivery'}))
 expect(trackEvent).not.toHaveBeenCalledWith('generate_lead',expect.anything())
})

it('does not show success for an incomplete server acknowledgement', async () => {
 vi.stubGlobal('fetch',vi.fn().mockResolvedValue({ok:true,status:200,json:async()=>({ok:true})}))
 fillAndSubmit()
 await screen.findByRole('alert')
 expect(screen.queryByRole('heading',{name:'Poptávka je přijatá, děkuji'})).toBeNull()
 expect(screen.getByLabelText('Co řešíte *')).toHaveProperty('value','Soukromá zpráva')
})
