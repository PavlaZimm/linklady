import { afterEach, beforeEach, expect, it, vi } from 'vitest'
import { sendContactEmail } from '../lib/contact-resend'
const data = {name:'Jana',email:'jana@example.com',subject:'Web',message:'Nový web',requestId:'e6e77fba-8e0c-4daf-9f6c-6925c555d000'}
const req = new Request('https://www.linklady.cz/api/poptavka',{headers:{'x-vercel-forwarded-for':'192.0.2.1'}})
beforeEach(()=>{vi.stubEnv('RESEND_API_KEY','test-key');vi.stubEnv('UPSTASH_REDIS_REST_URL','https://redis.example');vi.stubEnv('UPSTASH_REDIS_REST_TOKEN','redis-test');vi.stubEnv('VERCEL','1')})
afterEach(()=>{vi.unstubAllGlobals();vi.unstubAllEnvs()})
it('requires working shared limits before sending email',async()=>{
 const f=vi.fn().mockResolvedValue(Response.json({error:'unavailable'}));vi.stubGlobal('fetch',f)
 expect(await sendContactEmail(data,req)).toBe('unavailable');expect(f).toHaveBeenCalledTimes(1)
})
it('blocks exhausted limits without calling Resend',async()=>{
 const f=vi.fn().mockResolvedValue(Response.json({result:0}));vi.stubGlobal('fetch',f)
 expect(await sendContactEmail(data,req)).toBe('limited');expect(f).toHaveBeenCalledTimes(1)
})
it('pins the recipient and never stores raw email/IP in counters',async()=>{
 const f=vi.fn().mockResolvedValueOnce(Response.json({result:1})).mockResolvedValueOnce(Response.json({id:'email-id'}));vi.stubGlobal('fetch',f)
 expect(await sendContactEmail(data,req)).toBe('accepted')
 expect(f.mock.calls[0][1].body).not.toContain(data.email);expect(f.mock.calls[0][1].body).not.toContain('192.0.2.1')
 expect(JSON.parse(f.mock.calls[1][1].body)).toMatchObject({from:'Linklady – formulář <formular@linklady.cz>',to:['zimmermannovap@gmail.com'],reply_to:data.email})
})
it('retries exactly the same content with the same idempotency key',async()=>{
 const f=vi.fn().mockImplementation((url:string)=>Promise.resolve(Response.json(url.includes('redis')?{result:1}:{id:'id'})));vi.stubGlobal('fetch',f)
 await sendContactEmail(data,req);await sendContactEmail(data,req)
 expect(f.mock.calls[1][1].headers['Idempotency-Key']).toBe(f.mock.calls[3][1].headers['Idempotency-Key'])
})
it('rejects false upstream success',async()=>{
 const f=vi.fn().mockResolvedValueOnce(Response.json({result:1})).mockResolvedValueOnce(Response.json({error:'bad'}));vi.stubGlobal('fetch',f)
 expect(await sendContactEmail(data,req)).toBe('unavailable')
})
it('does not accept missing trusted IP on Vercel',async()=>{
 const f=vi.fn();vi.stubGlobal('fetch',f)
 expect(await sendContactEmail(data,new Request('https://www.linklady.cz/api/poptavka'))).toBe('unavailable');expect(f).not.toHaveBeenCalled()
})
