import { createHmac, createHash } from 'node:crypto'
import type { ContactInput } from './contact-validation'

// Atomic sliding windows shared by all function instances. No contact text or raw
// email/IP is stored; Redis removes the counters after their window expires.
const LIMIT_SCRIPT = `
local now = tonumber(ARGV[1])
local member = ARGV[2]
local windows = {3600000,3600000,86400000}
local limits = {5,5,90}
for i,key in ipairs(KEYS) do
  redis.call('ZREMRANGEBYSCORE',key,'-inf',now-windows[i])
  if not redis.call('ZSCORE',key,member) and redis.call('ZCARD',key)>=limits[i] then return 0 end
end
for i,key in ipairs(KEYS) do
  redis.call('ZADD',key,'NX',now,member)
  redis.call('PEXPIRE',key,windows[i])
end
return 1`

export async function sendContactEmail(data: ContactInput, request: Request): Promise<'accepted' | 'limited' | 'unavailable'> {
  const apiKey = process.env.RESEND_API_KEY
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN
  if (!apiKey || !redisUrl || !redisToken || !data.requestId) return 'unavailable'
  const sender = 'Linklady – formulář <formular@linklady.cz>'
  const recipient = 'zimmermannovap@gmail.com'
  const text = [`Jméno: ${data.name}`, `E-mail: ${data.email}`, `Telefon: ${data.phone || ''}`, `Služba: ${data.service || ''}`, '', data.message].join('\n')
  const payload = { from: sender, to: [recipient], reply_to: data.email, subject: `Poptávka z Linklady: ${data.subject.replace(/[\r\n]/g, ' ')}`, text }
  const fingerprint = createHash('sha256').update(JSON.stringify(payload)).digest('hex')
  const member = `${data.requestId}-${fingerprint}`
  const hash = (value: string) => createHmac('sha256', apiKey).update(value).digest('hex')
  // Vercel overwrites this header; never use an arbitrary client-supplied IP header.
  const ip = request.headers.get('x-vercel-forwarded-for')?.split(',')[0]?.trim()
  if (process.env.VERCEL && !ip) return 'unavailable'
  try {
    const limitResponse = await fetch(redisUrl, {
      method: 'POST', headers: { Authorization: `Bearer ${redisToken}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(['EVAL', LIMIT_SCRIPT, '3', `contact:{form}:email:${hash(data.email)}`, `contact:{form}:ip:${hash(ip || 'local')}`, 'contact:{form}:daily', String(Date.now()), member]),
      signal: AbortSignal.timeout(3000), cache: 'no-store',
    })
    const limit: unknown = await limitResponse.json()
    if (!limitResponse.ok || typeof limit !== 'object' || limit === null || !('result' in limit)) return 'unavailable'
    if (limit.result === 0) return 'limited'
    if (limit.result !== 1) return 'unavailable'
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST', headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json', 'Idempotency-Key': `contact-${member}` },
      body: JSON.stringify(payload), signal: AbortSignal.timeout(8000),
    })
    const result: unknown = await response.json()
    return response.ok && typeof result === 'object' && result !== null && 'id' in result && typeof result.id === 'string' && result.id.length > 0 ? 'accepted' : 'unavailable'
  } catch { return 'unavailable' }
}
