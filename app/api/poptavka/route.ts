import { NextResponse } from 'next/server'

/**
 * Příjem poptávky z kontaktního formuláře.
 *
 * Proč tahle cesta existuje: formulář se do teď odesílal přes `mailto:`,
 * což otevře e-mailový program návštěvníka a nechá ho odeslat zprávu
 * podruhé. Na mobilu bez nastavené pošty se často nestane vůbec nic
 * a poptávka je pryč.
 *
 * Odesílá se přes Resend, které má zdarma 3 000 e-mailů měsíčně.
 * Volá se obyčejným fetchem, aby kvůli tomu nepřibývala závislost.
 *
 * Nastavení na Vercelu (Settings → Environment Variables):
 *   RESEND_API_KEY   klíč z resend.com
 *   POPTAVKY_FROM    odesílatel na ověřené doméně, např. web@linklady.cz
 *   POPTAVKY_TO      kam poptávky chodí (výchozí je adresa níž)
 *
 * Dokud klíč nastavený není, vrací tahle cesta 501 a formulář si sám
 * spadne zpátky na mailto. Web tím pádem funguje pořád stejně jako dřív.
 */

const KAM = process.env.POPTAVKY_TO || 'zimmermannovap@gmail.com'

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
  const klic = process.env.RESEND_API_KEY
  if (!klic) {
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

  const radky = [
    `Jméno: ${jmeno}`,
    `E-mail: ${email}`,
    ocisti(d.phone, 60) ? `Telefon: ${ocisti(d.phone, 60)}` : null,
    ocisti(d.service, 200) ? `Co potřebuje: ${ocisti(d.service, 200)}` : null,
    '',
    zprava,
  ].filter(Boolean)

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${klic}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.POPTAVKY_FROM || 'Poptávka z webu <onboarding@resend.dev>',
        to: [KAM],
        reply_to: email,
        subject: ocisti(d.subject, 200) || `Poptávka z webu: ${jmeno}`,
        text: radky.join('\n'),
      }),
    })
    if (!r.ok) {
      return NextResponse.json({ ok: false, duvod: 'odeslani' }, { status: 502 })
    }
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, duvod: 'sit' }, { status: 502 })
  }
}
