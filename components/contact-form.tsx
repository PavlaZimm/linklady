'use client'

import { useState } from 'react'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'

type Props = {
  /** Předvyplněná služba, ať se v Convexu pozná, ze které stránky poptávka přišla. */
  service?: string
  /** Nadpis nad formulářem. */
  title?: string
  /** Věta pod nadpisem. */
  subtitle?: string
}

const SLUZBY = [
  'Tvorba webu',
  'Webová aplikace na míru',
  'SEO a konzultace',
  'AI asistent nebo agent',
  'Automatizace procesů',
  'Něco jiného',
]

export default function ContactForm({
  service,
  title = 'Napište mi',
  subtitle = 'Odpovím do 24 hodin. Konzultace je zdarma a nezávazná.',
}: Props) {
  const submit = useMutation(api.contacts.submitContactForm)
  const [stav, setStav] = useState<'klid' | 'posilam' | 'hotovo' | 'chyba'>('klid')
  const [chyba, setChyba] = useState<string>('')

  async function odeslat(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)

    // Honeypot: roboti vyplní i skryté pole, lidi ne.
    if ((f.get('web') as string)?.length) {
      setStav('hotovo')
      return
    }

    setStav('posilam')
    setChyba('')
    try {
      await submit({
        name: (f.get('name') as string).trim(),
        email: (f.get('email') as string).trim(),
        subject: ((f.get('service') as string) || service || 'Poptávka z webu').trim(),
        message: (f.get('message') as string).trim(),
        phone: ((f.get('phone') as string) || '').trim() || undefined,
        service: service || ((f.get('service') as string) || undefined),
      })
      setStav('hotovo')
      if (typeof window !== 'undefined' && (window as any).gtag) {
        ;(window as any).gtag('event', 'generate_lead', {
          form_location: service ?? 'kontakt',
        })
      }
    } catch (err) {
      setStav('chyba')
      setChyba(err instanceof Error ? err.message : 'Zprávu se nepodařilo odeslat.')
    }
  }

  if (stav === 'hotovo') {
    return (
      <div className="bg-purple-50 rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4">Mám to, díky</h2>
        <p className="text-gray-700 text-lg">
          Ozvu se do 24 hodin. Když to bude spěchat, zavolejte.
        </p>
      </div>
    )
  }

  return (
    <div className="bg-purple-50 rounded-lg p-6 sm:p-8 md:p-12">
      <h2 className="text-3xl font-bold text-primary mb-3">{title}</h2>
      <p className="text-gray-600 mb-8 text-lg">{subtitle}</p>

      <form onSubmit={odeslat} className="space-y-5" noValidate={false}>
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
                defaultValue={SLUZBY[0]}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
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
            <a href="mailto:zimmermannovap@gmail.com" className="underline font-medium">
              zimmermannovap@gmail.com
            </a>
            .
          </p>
        )}

        <button
          type="submit"
          disabled={stav === 'posilam'}
          className="inline-flex items-center justify-center bg-yellow-400 text-purple-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors text-lg disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto"
        >
          {stav === 'posilam' ? 'Odesílám…' : 'Chci nezávaznou konzultaci'}
        </button>

        <p className="text-sm text-gray-500">
          Údaje použiju jen na odpověď na vaši zprávu. Nikam je nepředávám.
        </p>
      </form>
    </div>
  )
}
