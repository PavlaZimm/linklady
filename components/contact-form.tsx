'use client'

import { useEffect, useRef, useState } from 'react'
import { trackEvent } from '@/lib/analytics'

type Props = {
  /** Předvyplněná služba, ať se pozná, ze které stránky poptávka přišla. */
  service?: string
  /** Nadpis nad formulářem. */
  title?: string
  /** Věta pod nadpisem. */
  subtitle?: string
}

type Poptavka = {
  name: string
  email: string
  subject: string
  message: string
  phone?: string
  service?: string
  web?: string
  requestId?: string
}

const SLUZBY = [
  'Tvorba webu',
  'Webová aplikace na míru',
  'SEO a konzultace',
  'AI asistent nebo agent',
  'Automatizace procesů',
  'Něco jiného',
]

const EMAIL = 'zimmermannovap@gmail.com'

type VysledekOdeslani =
  | { ok: true; accepted: boolean }
  | { ok: false; mailto: string }

/** Poptávky posíláme vždy přes vlastní serverovou cestu. */
export default function ContactForm(props: Props) {
  return (
    <Formular
      {...props}
      odeslatData={async (d) => {
        // Když serverové odesílání není dostupné, nabídneme návštěvníkovi
        // připravený e-mail. Nikdy ale netvrdíme, že se zpráva odeslala.
        try {
          const r = await fetch('/api/poptavka', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(d),
            signal: AbortSignal.timeout(15000),
          })
          const result = await r.json().catch(() => null)
          if (r.ok && result?.ok === true) return { ok: true, accepted: result.accepted === true }
          if (r.status === 400 || r.status === 429) throw new Error(result?.message || 'Zkontrolujte vyplněné údaje.')
        } catch (error) {
          if (error instanceof Error && !['TimeoutError', 'AbortError', 'TypeError', 'SyntaxError'].includes(error.name)) throw error
        }

        const telo = [
          `Jméno: ${d.name}`,
          `E-mail: ${d.email}`,
          d.phone ? `Telefon: ${d.phone}` : null,
          d.service ? `Co potřebuje: ${d.service}` : null,
          '',
          d.message,
        ]
          .filter(Boolean)
          .join('\n')
        return {
          ok: false,
          mailto:
            `mailto:${EMAIL}?subject=${encodeURIComponent(d.subject)}` +
            `&body=${encodeURIComponent(telo)}`,
        }
      }}
    />
  )
}

function Formular({
  service,
  title = 'Napište mi',
  subtitle = 'Odpovím do 24 hodin. Konzultace je zdarma a nezávazná.',
  odeslatData,
}: Props & { odeslatData: (d: Poptavka) => Promise<VysledekOdeslani> }) {
  const [stav, setStav] = useState<'klid' | 'posilam' | 'hotovo' | 'zaloha' | 'chyba'>('klid')
  const [chyba, setChyba] = useState<string>('')
  const [mailto, setMailto] = useState<string>(`mailto:${EMAIL}`)
  const successRef = useRef<HTMLHeadingElement>(null)
  const requestRef = useRef({ fingerprint: '', id: '' })
  const started = useRef(false)
  const sending = useRef(false)
  useEffect(() => { if (stav === 'hotovo') successRef.current?.focus() }, [stav])

  async function odeslat(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)

    if (sending.current) return
    sending.current = true
    setStav('posilam')
    setChyba('')
    try {
      const payload = {
        name: (f.get('name') as string).trim(),
        email: (f.get('email') as string).trim(),
        subject: ((f.get('service') as string) || service || 'Poptávka z webu').trim(),
        message: (f.get('message') as string).trim(),
        phone: ((f.get('phone') as string) || '').trim() || undefined,
        service: service || ((f.get('service') as string) || undefined),
        web: ((f.get('web') as string) || '').trim(),
      }
      const fingerprint = JSON.stringify(payload)
      if (requestRef.current.fingerprint !== fingerprint) requestRef.current = { fingerprint, id: crypto.randomUUID() }
      const vysledek = await odeslatData({ ...payload, requestId: requestRef.current.id })
      if (!vysledek.ok) {
        setMailto(vysledek.mailto)
        setStav('zaloha')
        trackEvent('form_error', { form_location: service ?? 'kontakt', reason: 'delivery' })
        return
      }
      setStav('hotovo')
      if (vysledek.accepted) trackEvent('generate_lead', { form_location: service ?? 'kontakt' })
    } catch (err) {
      setStav('chyba')
      trackEvent('form_error', { form_location: service ?? 'kontakt', reason: 'validation_or_limit' })
      setChyba(err instanceof Error ? err.message : 'Zprávu se nepodařilo odeslat.')
    } finally {
      sending.current = false
    }
  }

  if (stav === 'hotovo') {
    return (
      <div className="bg-purple-50 rounded-lg p-8 md:p-12 text-center">
        <h2 ref={successRef} tabIndex={-1} className="text-3xl font-bold text-primary mb-4">Poptávka je přijatá, děkuji</h2>
        <p className="text-gray-700 text-lg">
          Ozvu se do 24 hodin na uvedený e-mail.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-purple-50 rounded-lg p-6 sm:p-8 md:p-12">
      <h2 className="text-3xl font-bold text-primary mb-3">{title}</h2>
      <p className="text-gray-600 mb-8 text-lg">{subtitle}</p>

      <form onSubmit={odeslat} aria-busy={stav === 'posilam'} className="space-y-5" onFocus={() => {
        if (!started.current) { started.current = true; trackEvent('form_start', { form_location: service ?? 'kontakt' }) }
      }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="cf-name" className="block text-sm font-medium text-gray-800 mb-1.5">
              Jméno <span className="text-purple-700">*</span>
            </label>
            <input
              id="cf-name"
              name="name"
              type="text"
              required
              maxLength={100}
              autoComplete="name"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label htmlFor="cf-email" className="block text-sm font-medium text-gray-800 mb-1.5">
              E-mail <span className="text-purple-700">*</span>
            </label>
            <input
              id="cf-email"
              name="email"
              type="email"
              required
              maxLength={254}
              autoComplete="email"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="cf-phone" className="block text-sm font-medium text-gray-800 mb-1.5">
              Telefon <span className="text-gray-500 font-normal">(nepovinné)</span>
            </label>
            <input
              id="cf-phone"
              name="phone"
              type="tel"
              maxLength={20}
              autoComplete="tel"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          {!service && (
            <div>
              <label htmlFor="cf-service" className="block text-sm font-medium text-gray-800 mb-1.5">
                Co potřebujete
              </label>
              <select
                id="cf-service"
                name="service"
                defaultValue=""
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <option value="">Vyberte, pokud víte</option>
                {SLUZBY.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="cf-message" className="block text-sm font-medium text-gray-800 mb-1.5">
            Co řešíte <span className="text-purple-700">*</span>
          </label>
          <textarea
            id="cf-message"
            name="message"
            required
            rows={5}
            maxLength={5000}
            placeholder="Stačí pár vět. Čím konkrétnější zadání, tím přesnější odpověď."
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        {/* Honeypot proti robotům, pro člověka neviditelné */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="cf-web">Web</label>
          <input id="cf-web" name="web" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        {stav === 'chyba' && (
          <p role="alert" className="text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
            {chyba} Kdyby to nešlo, napište mi prosím na{' '}
            <a href={`mailto:${EMAIL}`} className="underline font-medium">
              {EMAIL}
            </a>
            .
          </p>
        )}

        {stav === 'zaloha' && (
          <div role="alert" className="bg-amber-50 border border-amber-300 rounded-lg px-4 py-4">
            <p className="font-semibold text-amber-950">Automatické odeslání se nepodařilo.</p>
            <p className="mt-1 text-amber-900">
              Přijetí zprávy se nepodařilo potvrdit. Zkuste odeslání znovu nebo pokračujte přes připravený e-mail.
            </p>
            <a
              href={mailto}
              onClick={() => trackEvent('contact_email_click', { form_location: service ?? 'kontakt' })}
              className="inline-flex mt-3 items-center justify-center bg-yellow-400 text-purple-900 px-5 py-2.5 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
            >
              Odeslat e-mailem
            </a>
          </div>
        )}

        <button
          type="submit"
          disabled={stav === 'posilam'}
          className="inline-flex items-center justify-center bg-yellow-400 text-purple-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors text-lg disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto"
        >
          {stav === 'posilam' ? 'Odesílám…' : 'Odeslat nezávaznou poptávku'}
        </button>

        <p className="text-sm text-gray-500">
          Údaje použiju k vyřízení vaší poptávky. Formulář technicky zpracovává Vercel a e-mail odesílá Resend.
        </p>
      </form>
    </div>
  )
}
