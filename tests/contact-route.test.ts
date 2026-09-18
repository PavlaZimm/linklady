import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ConvexError } from 'convex/values'
const { mutation, mail } = vi.hoisted(() => ({ mutation: vi.fn(), mail: vi.fn() }))
vi.mock('../lib/contact-resend', () => ({ sendContactEmail: mail }))
vi.mock('convex/browser', () => ({ ConvexHttpClient: vi.fn(() => ({ mutation })) }))
import { POST } from '../app/api/poptavka/route'
import { contactSchema } from '../lib/contact-validation'

const valid = { name: 'Jana', email: 'Jana@Example.com', subject: 'Web', message: 'Potřebuji nový web.', requestId: 'e6e77fba-8e0c-4daf-9f6c-6925c555d000' }
const send = (body: unknown, origin?: string) => POST(new Request('https://www.linklady.cz/api/poptavka', {
  method: 'POST', headers: { 'Content-Type': 'application/json', ...(origin ? { origin } : {}) }, body: JSON.stringify(body),
}))
beforeEach(() => {
  vi.stubEnv('CONVEX_URL', ''); vi.stubEnv('NEXT_PUBLIC_CONVEX_URL', '')
  vi.stubEnv('POPTAVKA_SCRIPT_URL', ''); vi.stubEnv('POPTAVKA_TAJEMSTVI', '')
  vi.stubEnv('RESEND_API_KEY', '')
  mutation.mockReset(); mail.mockReset()
})
afterEach(() => { vi.unstubAllEnvs(); vi.unstubAllGlobals() })

describe('contact receipt', () => {
  it('rejects malformed or null input instead of throwing', async () => {
    expect((await send(null)).status).toBe(400)
    const bad = await POST(new Request('https://www.linklady.cz/api/poptavka', {method:'POST',body:'{'}))
    expect(bad.status).toBe(400)
  })
  it('rejects a foreign browser origin', async () => expect((await send(valid, 'https://other.example')).status).toBe(403))
  it('rejects large input before forwarding', async () => expect((await send({...valid,message:'a'.repeat(16001)})).status).toBe(413))
  it('does not silently truncate messages over 5000 characters', async () => expect((await send({...valid,message:'a'.repeat(5001)})).status).toBe(400))
  it('reports unavailable configuration without claiming success', async () => {
    const response=await send(valid);expect(response.status).toBe(503);expect(await response.json()).toMatchObject({ok:false,duvod:'nenastaveno'})
  })
  it('does not count honeypot submissions as leads', async () => {
    const response=await send({...valid,web:'spam'});expect(await response.json()).toEqual({ok:true,accepted:false});expect(mutation).not.toHaveBeenCalled()
  })
  it('normalizes email before persistent rate limiting and preserves the whole message', async () => {
    vi.stubEnv('CONVEX_URL','https://example.convex.cloud');mutation.mockResolvedValue('id')
    const message='x'.repeat(5000), response=await send({...valid,message})
    expect(mutation.mock.calls[0][1]).toMatchObject({email:'jana@example.com',message,requestId:valid.requestId})
    expect(await response.json()).toMatchObject({ok:true,receipt:'stored'})
  })
  it('does not use a second writer after an uncertain database error', async () => {
    vi.stubEnv('CONVEX_URL','https://example.convex.cloud');vi.stubEnv('POPTAVKA_SCRIPT_URL','https://script.google.com/example');vi.stubEnv('POPTAVKA_TAJEMSTVI','test-secret')
    mutation.mockRejectedValue(new Error('timeout'));const fetch=vi.fn();vi.stubGlobal('fetch',fetch)
    expect((await send(valid)).status).toBe(503);expect(fetch).not.toHaveBeenCalled()
  })
  it('maps the durable rate limit to 429', async () => {
    vi.stubEnv('CONVEX_URL','https://example.convex.cloud');mutation.mockRejectedValue(new ConvexError('RATE_LIMIT'))
    expect((await send(valid)).status).toBe(429)
  })
  it.each([{}, {ok:false}, {ok:'true'}])('requires explicit successful upstream acknowledgement: %j', async body => {
    vi.stubEnv('POPTAVKA_SCRIPT_URL','https://script.google.com/example');vi.stubEnv('POPTAVKA_TAJEMSTVI','test-secret');vi.stubGlobal('fetch',vi.fn().mockResolvedValue(Response.json(body)))
    expect((await send(valid)).status).toBe(502)
  })
  it('does not treat an HTML error page as success', async () => {
    vi.stubEnv('POPTAVKA_SCRIPT_URL','https://script.google.com/example');vi.stubEnv('POPTAVKA_TAJEMSTVI','test-secret');vi.stubGlobal('fetch',vi.fn().mockResolvedValue(new Response('<html>Error</html>')))
    expect((await send(valid)).status).toBe(502)
  })
  it('accepts an explicit successful Apps Script receipt', async () => {
    vi.stubEnv('POPTAVKA_SCRIPT_URL','https://script.google.com/example');vi.stubEnv('POPTAVKA_TAJEMSTVI','test-secret');vi.stubGlobal('fetch',vi.fn().mockResolvedValue(Response.json({ok:true})))
    expect(await (await send(valid)).json()).toEqual({ok:true,accepted:true,receipt:'sent'})
  })
  it('preserves stored receipts and maps Apps Script throttling', async () => {
    vi.stubEnv('POPTAVKA_SCRIPT_URL','https://script.google.com/example');vi.stubEnv('POPTAVKA_TAJEMSTVI','test-secret')
    const fetch = vi.fn().mockResolvedValueOnce(Response.json({ok:true,receipt:'stored'})).mockResolvedValueOnce(Response.json({ok:false,duvod:'limit'}))
    vi.stubGlobal('fetch',fetch)
    expect(await (await send(valid)).json()).toEqual({ok:true,accepted:true,receipt:'stored'})
    expect((await send(valid)).status).toBe(429)
  })
  it('rejects whitespace-only required fields', () => expect(contactSchema.safeParse({...valid,message:'   '}).success).toBe(false))
})


describe('Resend production route', () => {
  it('prefers Resend and acknowledges only an accepted message', async () => {
    vi.stubEnv('RESEND_API_KEY', 'test-key'); vi.stubEnv('CONVEX_URL', 'https://example.convex.cloud')
    mail.mockResolvedValue('accepted')
    expect(await (await send(valid, 'https://www.linklady.cz')).json()).toEqual({ok:true,accepted:true,receipt:'queued'})
    expect(mail.mock.calls[0][0]).toMatchObject({email:'jana@example.com',requestId:valid.requestId})
    expect(mutation).not.toHaveBeenCalled()
  })
  it.each([['limited',429], ['unavailable',503]])('maps %s without a second writer', async (outcome,status) => {
    vi.stubEnv('RESEND_API_KEY', 'test-key'); vi.stubEnv('CONVEX_URL', 'https://example.convex.cloud')
    mail.mockResolvedValue(outcome)
    expect((await send(valid)).status).toBe(status); expect(mutation).not.toHaveBeenCalled()
  })
})
