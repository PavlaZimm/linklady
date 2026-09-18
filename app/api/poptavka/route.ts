import { NextResponse } from 'next/server'
import { randomUUID } from 'node:crypto'
import { ConvexHttpClient } from 'convex/browser'
import { ConvexError } from 'convex/values'
import { api } from '@/convex/_generated/api'
import { contactSchema } from '@/lib/contact-validation'
import { sendContactEmail } from '@/lib/contact-resend'

export const runtime = 'nodejs'

export async function POST(req: Request) {
  const origin = req.headers.get('origin')
  if (origin && origin !== new URL(req.url).origin) {
    return NextResponse.json({ ok: false, duvod: 'puvod' }, { status: 403 })
  }
  let raw: unknown
  try {
    const body = await req.text()
    if (body.length > 16000) return NextResponse.json({ ok: false, duvod: 'velikost' }, { status: 413 })
    raw = JSON.parse(body)
  } catch {
    return NextResponse.json({ ok: false, duvod: 'necitelne' }, { status: 400 })
  }
  const parsed = contactSchema.safeParse(raw)
  if (!parsed.success) {
    return NextResponse.json({ ok: false, duvod: 'udaje', message: 'Zkontrolujte povinná pole, e-mail a délku zprávy (nejvýše 5 000 znaků).' }, { status: 400 })
  }
  const { web, ...data } = parsed.data
  if (web) return NextResponse.json({ ok: true, accepted: false })
  if (process.env.RESEND_API_KEY) {
    const outcome = await sendContactEmail({ ...data, requestId: data.requestId || randomUUID() }, req)
    if (outcome === 'limited') return NextResponse.json({ ok: false, duvod: 'limit', message: 'Dosáhli jsme limitu odesílání. Zkuste to prosím později nebo napište e-mailem.' }, { status: 429 })
    if (outcome !== 'accepted') return NextResponse.json({ ok: false, duvod: 'odeslani' }, { status: 503 })
    return NextResponse.json({ ok: true, accepted: true, receipt: 'queued' })
  }
  const convexUrl = process.env.CONVEX_URL || process.env.NEXT_PUBLIC_CONVEX_URL
  if (convexUrl) {
    try {
      const client = new ConvexHttpClient(convexUrl)
      await client.mutation(api.contacts.submitContactForm, data)
      return NextResponse.json({ ok: true, accepted: true, receipt: 'stored' })
    } catch (error) {
      if (error instanceof ConvexError && error.data === 'RATE_LIMIT') {
        return NextResponse.json({ ok: false, duvod: 'limit', message: 'Příliš mnoho zpráv. Zkuste to prosím za hodinu.' }, { status: 429 })
      }
      // No second writer after an ambiguous database failure.
      return NextResponse.json({ ok: false, duvod: 'ulozeni' }, { status: 503 })
    }
  }
  const target = process.env.POPTAVKA_SCRIPT_URL
  const secret = process.env.POPTAVKA_TAJEMSTVI
  if (!target || !secret) return NextResponse.json({ ok: false, duvod: 'nenastaveno' }, { status: 503 })
  try {
    const response = await fetch(target, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, requestId: data.requestId || randomUUID(), tajemstvi: secret }),
      redirect: 'follow', signal: AbortSignal.timeout(12000),
    })
    const result: unknown = await response.json()
    if (response.ok && typeof result === 'object' && result !== null && 'duvod' in result && result.duvod === 'limit') {
      return NextResponse.json({ ok: false, duvod: 'limit', message: 'Příliš mnoho zpráv. Zkuste to prosím za hodinu.' }, { status: 429 })
    }
    if (!response.ok || typeof result !== 'object' || result === null || !('ok' in result) || result.ok !== true) {
      return NextResponse.json({ ok: false, duvod: 'odeslani' }, { status: 502 })
    }
    return NextResponse.json({ ok: true, accepted: true, receipt: 'receipt' in result && result.receipt === 'stored' ? 'stored' : 'sent' })
  } catch {
    return NextResponse.json({ ok: false, duvod: 'sit' }, { status: 502 })
  }
}
