import { NextResponse } from 'next/server'

/**
 * Příjem poptávky z kontaktního formuláře.
 *
 * Proč tahle cesta existuje: formulář se do teď odesílal přes `mailto:`,
 * což otevře e-mailový program návštěvníka a nechá ho odeslat zprávu
 * podruhé. Na mobilu bez nastavené pošty se často nestane vůbec nic
 * a poptávka je pryč.
 *
 * Odesílá se přes Google Apps Script, který zprávu pošle z Pavlina
 * vlastního Gmailu. Zdarma, bez účtu u třetí strany a bez nové
 * závislosti v projektu. Gmail zvládne 100 zpráv denně, což je pro
 * tenhle web násobně víc, než bude kdy potřeba.
 *
 * Nastavení na Vercelu (Settings → Environment Variables):
 *   POPTAVKA_SCRIPT_URL   adresa nasazeného skriptu (.../exec)
 *   POPTAVKA_TAJEMSTVI    heslo, které skript očekává
 *
 * Celý postup je v dokumenty/formular-postup.md.
 *
 * ⚠️ Dokud nastavené není, vrací tahle cesta 501 a formulář si sám
 * spadne zpátky na mailto. Web se tím pádem nechová hůř než dřív.
 */

type Telo = {
  name?: string
  email?: string
  phone?: string
  service?: string
  message?: string
  subject?: string
  web?: string // honeypot
}

function ocisti(s: unknown, max = 2000): string {
  return typeof s === 'string' ? s.trim().slice(0, max) : ''
}

export async function POST(req: Request) {
  const cil = process.env.POPTAVKA_SCRIPT_URL
  if (!cil) {
    // Není chyba, jen to zatím není nastavené. Formulář použije mailto.
    return NextResponse.json({ ok: false, duvod: 'nenastaveno' }, { status: 501 })
  }

  let d: Telo
  try {
    d = await req.json()
  } catch {
    return NextResponse.json({ ok: false, duvod: 'necitelne' }, { status: 400 })
  }

  // Roboti vyplňují i skrytá pole. Tváříme se, že se odeslalo.
  if (ocisti(d.web)) {
    return NextResponse.json({ ok: true })
  }

  const jmeno = ocisti(d.name, 200)
  const email = ocisti(d.email, 200)
  const zprava = ocisti(d.message)
  if (!jmeno || !email || !zprava) {
    return NextResponse.json({ ok: false, duvod: 'chybi-udaje' }, { status: 400 })
  }
  if (!/^[^@\s]+@[^@\s.]+\.[^@\s]+$/.test(email)) {
    return NextResponse.json({ ok: false, duvod: 'email' }, { status: 400 })
  }

  try {
    const r = await fetch(cil, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        tajemstvi: process.env.POPTAVKA_TAJEMSTVI || '',
        name: jmeno,
        email,
        phone: ocisti(d.phone, 60),
        service: ocisti(d.service, 200),
        message: zprava,
        subject: ocisti(d.subject, 200),
      }),
      // Apps Script odpovídá přesměrováním na googleusercontent
      redirect: 'follow',
    })
    if (!r.ok) {
      return NextResponse.json({ ok: false, duvod: 'odeslani' }, { status: 502 })
    }
    const vysledek = await r.json().catch(() => ({ ok: true }))
    if (vysledek?.ok === false) {
      return NextResponse.json({ ok: false, duvod: 'skript' }, { status: 502 })
    }
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, duvod: 'sit' }, { status: 502 })
  }
}
