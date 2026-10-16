'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ANALYTICS_CONSENT_KEY, readAnalyticsConsent } from '@/lib/analytics-consent'

export default function AnalyticsConsent() {
  const [open, setOpen] = useState(false)
  const heading = useRef<HTMLHeadingElement>(null)
  const openedByUser = useRef(false)
  useEffect(() => {
    setOpen(readAnalyticsConsent() === null)
    const show = () => { openedByUser.current = true; setOpen(true) }
    window.addEventListener('linklady:consent-settings', show)
    return () => window.removeEventListener('linklady:consent-settings', show)
  }, [])
  useEffect(() => { if (open && openedByUser.current) heading.current?.focus() }, [open])
  function choose(accepted: boolean) {
    try { localStorage.setItem(ANALYTICS_CONSENT_KEY, JSON.stringify({ accepted, savedAt: Date.now() })) } catch { /* Choice still applies to this page. */ }
    window.dispatchEvent(new CustomEvent('linklady:analytics-choice', { detail: accepted }))
    setOpen(false)
    if (openedByUser.current) document.getElementById('analytics-settings')?.focus()
  }
  if (!open) return null
  return <section aria-labelledby="analytics-heading" className="border-t border-slate-300 bg-white px-5 py-6">
    <div className="mx-auto max-w-5xl">
      <h2 ref={heading} tabIndex={-1} id="analytics-heading" className="text-xl font-bold">Pomůžete mi zlepšovat web?</h2>
      <p className="mt-2 max-w-3xl">S vaším souhlasem použiju Google Analytics a Ahrefs Analytics k měření návštěvnosti a používání webu. Bez souhlasu tyto nástroje nenačítám. Volbu můžete změnit v patičce. <Link href="/soukromi" className="underline">Informace o údajích a měření</Link></p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={() => choose(false)} className="rounded-full border-2 border-[#151D32] px-5 py-3 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">Bez analytiky</button>
        <button type="button" onClick={() => choose(true)} className="rounded-full border-2 border-[#151D32] bg-[#151D32] px-5 py-3 font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">Povolit analytiku</button>
      </div>
    </div>
  </section>
}
export function AnalyticsSettings() {
  return <button id="analytics-settings" type="button" className="text-left underline underline-offset-4" onClick={() => window.dispatchEvent(new Event('linklady:consent-settings'))}>Nastavení analytiky</button>
}
