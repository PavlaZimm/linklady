import Navigation from '@/components/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import JsonLd from '@/components/json-ld'

export const metadata: Metadata = {
  title: "Webová aplikace – co to je, jak funguje a kdy ji potřebujete | Linklady.cz",
  description: "Co je webová aplikace a čím se liší od běžného webu? Srozumitelný průvodce webovými aplikacemi na míru – typy, technologie, výhody a kdy se vám vyplatí. Česky a prakticky.",
  keywords: [
    "webová aplikace",
    "webova aplikace",
    "webová aplikace na míru",
    "co je webová aplikace",
    "progresivní webová aplikace",
    "webové aplikace",
    "tvorba webových aplikací",
    "webová aplikace vs web",
    "webová aplikace pro firmy",
  ],
  alternates: {
    canonical: "https://linklady.cz/webova-aplikace",
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://linklady.cz/webova-aplikace",
    siteName: "Linklady.cz",
    title: "Webová aplikace – co to je, jak funguje a kdy ji potřebujete",
    description: "Webová aplikace není jen web. Je to interaktivní software v prohlížeči, který řeší konkrétní problémy. Zjistěte, kdy se vám vyplatí a jak ji nechat vytvořit.",
    images: [
      {
        url: "/profile.jpg",
        width: 500,
        height: 600,
        alt: "Pavla Zimmermannová – tvorba webových aplikací",
      },
    ],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://linklady.cz/webova-aplikace/#webpage",
      url: "https://linklady.cz/webova-aplikace",
      name: "Webová aplikace – co to je, jak funguje a kdy ji potřebujete",
      description: "Srozumitelný průvodce webovými aplikacemi – co to je, typy, technologie a kdy se vyplatí.",
      isPartOf: { "@id": "https://linklady.cz/#website" },
      about: {
        "@type": "Thing",
        name: "Webová aplikace",
        description: "Interaktivní softwarová aplikace běžící v prohlížeči, která umožňuje uživatelům provádět konkrétní úkoly bez nutnosti instalace.",
      },
      inLanguage: "cs",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Úvod",
          item: "https://linklady.cz",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Webová aplikace",
          item: "https://linklady.cz/webova-aplikace",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Co je webová aplikace?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Webová aplikace je interaktivní software, který běží v prohlížeči a umožňuje uživatelům provádět konkrétní úkoly – od správy objednávek přes fakturaci až po komunikaci. Na rozdíl od běžného webu, který hlavně zobrazuje informace, webová aplikace s daty aktivně pracuje.",
          },
        },
        {
          "@type": "Question",
          name: "Jaký je rozdíl mezi webem a webovou aplikací?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Web (webová stránka) primárně zobrazuje informace – text, obrázky, videa. Webová aplikace umožňuje interakci: přihlášení, zadávání dat, zpracování objednávek, generování reportů. Gmail je webová aplikace, firemní prezentace je web.",
          },
        },
        {
          "@type": "Question",
          name: "Co je progresivní webová aplikace (PWA)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Progresivní webová aplikace (PWA) je webová aplikace, která se chová jako mobilní aplikace – lze ji nainstalovat na telefon, funguje offline a posílá notifikace. Kombinuje výhody webu (žádná instalace z App Store) s výhodami nativní aplikace (rychlost, offline režim).",
          },
        },
        {
          "@type": "Question",
          name: "Kolik stojí webová aplikace na míru?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cena závisí na složitosti. Jednoduchá webová aplikace (formuláře, dashboard) začíná na tisících korun. Složitější systémy s databází, autentizací a API integrací stojí desetitisíce a více. Díky vibecodingu a AI nástrojům se ale náklady výrazně snižují.",
          },
        },
        {
          "@type": "Question",
          name: "Potřebuji programátora na tvorbu webové aplikace?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Záleží na složitosti. Jednoduché aplikace lze dnes vytvořit pomocí no-code nástrojů nebo vibecodingu bez programátorských znalostí. Pro složitější projekty s vlastní logikou a integrací je programátor nebo vibecoding s AI nástrojem jako Claude Code ideální volba.",
          },
        },
      ],
    },
  ],
}

export default function WebovaAplikacePage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={jsonLd} />
      <Navigation />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-300 rounded-full opacity-30"></div>
            <div className="absolute top-1/2 -left-8 w-16 h-16 bg-yellow-300 rounded-full opacity-25"></div>
            <div className="absolute -top-8 right-4 w-20 h-20 bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>

            <nav aria-label="Breadcrumb" className="mb-6 text-sm opacity-80 relative z-10">
              <ol className="flex items-center justify-center space-x-2">
                <li><Link href="/" className="hover:text-yellow-400">Úvod</Link></li>
                <li><span className="mx-2">/</span></li>
                <li className="text-yellow-400">Webová aplikace</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 relative z-10 max-w-4xl mx-auto leading-tight">
              Webová aplikace: Co to je, jak funguje a&nbsp;kdy ji potřebujete
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto relative z-10">
              Všechno, co potřebujete vědět o&nbsp;webových aplikacích. Srozumitelně, bez technického žargonu.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Gmail, Google Docs, internetové bankovnictví, Fakturoid – to všechno jsou <strong>webové aplikace</strong>. Vypadají jako běžné weby, ale dělají mnohem víc. Místo pouhého zobrazování informací vám umožňují pracovat – psát, počítat, objednávat, komunikovat. A to všechno přímo v&nbsp;prohlížeči, bez instalace čehokoliv.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            V&nbsp;tomhle článku vám vysvětlím, <strong>co je webová aplikace</strong>, čím se liší od klasického webu, jaké typy existují a kdy dává smysl nechat si jednu vytvořit na míru.
          </p>

          {/* Co je webová aplikace */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Co je webová aplikace
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>Webová aplikace</strong> je interaktivní software, který běží v&nbsp;prohlížeči. Na rozdíl od klasické webové stránky, která hlavně zobrazuje informace (texty, obrázky, videa), webová aplikace s&nbsp;daty aktivně pracuje – umožňuje vám se přihlásit, zadávat údaje, zpracovávat objednávky, generovat reporty nebo komunikovat s&nbsp;ostatními.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Jednoduchý příklad: firemní web s&nbsp;nabídkou služeb je <strong>webová stránka</strong>. Ale jakmile přidáte klientskou zónu, kde se zákazník přihlásí, vidí své objednávky a stahuje faktury – máte <strong>webovou aplikaci</strong>.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Klíčový rozdíl je v&nbsp;interakci. Web čtete. Webovou aplikaci používáte.
          </p>

          {/* Rozdíl mezi webem a webovou aplikací */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Webová stránka vs. webová aplikace – jaký je rozdíl
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Hranice se dnes stírá, ale základní rozdíl je jasný:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Webová stránka</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>Zobrazuje informace</li>
                <li className="flex items-start"><div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>Stejný obsah pro všechny</li>
                <li className="flex items-start"><div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>Minimální interakce</li>
                <li className="flex items-start"><div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>Příklad: blog, portfolio, firemní web</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Webová aplikace</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start"><div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>Zpracovává data a úkoly</li>
                <li className="flex items-start"><div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>Personalizovaný obsah po přihlášení</li>
                <li className="flex items-start"><div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>Vysoká interakce (formuláře, dashboardy)</li>
                <li className="flex items-start"><div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>Příklad: Gmail, Fakturoid, Trello</li>
              </ul>
            </div>
          </div>

          {/* Typy webových aplikací */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Typy webových aplikací
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Webových aplikací existuje celá řada. Tady jsou nejčastější typy, se kterými se setkáte:
          </p>

          <div className="space-y-8 mb-8">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">SPA (Single Page Application)</h3>
              <p className="text-gray-700 leading-relaxed">
                Aplikace, která běží na jedné stránce a dynamicky mění obsah bez načítání. Gmail, Google Maps nebo Trello jsou SPA. Jsou rychlé a plynulé, protože prohlížeč nemusí pokaždé stahovat celou stránku znovu.
              </p>
            </div>

            <div className="border-l-4 border-yellow-400 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Progresivní webová aplikace (PWA)</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Progresivní webová aplikace</strong> kombinuje to nejlepší z&nbsp;webu a mobilních aplikací. Můžete si ji &bdquo;nainstalovat&ldquo; na telefon přímo z&nbsp;prohlížeče (bez App Store), funguje offline a posílá push notifikace. X (Twitter), Spotify i Starbucks používají PWA.
              </p>
            </div>

            <div className="border-l-4 border-purple-300 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Webová aplikace na míru</h3>
              <p className="text-gray-700 leading-relaxed">
                <strong>Webová aplikace na míru</strong> je řešení vytvořené přesně pro vaše potřeby. CRM systém, interní nástroj pro správu objednávek, klientský portál nebo kalkulačka služeb. Na rozdíl od krabicového softwaru dělá přesně to, co potřebujete – nic víc, nic míň.
              </p>
            </div>

            <div className="border-l-4 border-green-400 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">E-commerce aplikace</h3>
              <p className="text-gray-700 leading-relaxed">
                Internetové obchody jsou de facto webové aplikace – košík, platby, správa objednávek, uživatelské účty. Od jednoduchých Shopify obchodů po komplexní marketplace platformy.
              </p>
            </div>

            <div className="border-l-4 border-gray-300 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">SaaS (Software as a Service)</h3>
              <p className="text-gray-700 leading-relaxed">
                Webové aplikace dostupné jako předplatné – Fakturoid, Slack, Notion, Figma. Neinstalujete nic, platíte měsíčně a přistupujete odkudkoliv přes prohlížeč.
              </p>
            </div>
          </div>

          {/* Jak webová aplikace funguje */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak webová aplikace funguje
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Nemusíte rozumět technickým detailům, ale základní princip je jednoduchý:
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start bg-purple-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Frontend (co vidíte)</h3>
                <p className="text-gray-700">To, co vidíte v&nbsp;prohlížeči – tlačítka, formuláře, tabulky, grafy. Frontend je napsaný v&nbsp;technologiích jako React, Next.js nebo Vue.js a běží přímo ve&nbsp;vašem prohlížeči.</p>
              </div>
            </div>

            <div className="flex items-start bg-purple-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Backend (co nevidíte)</h3>
                <p className="text-gray-700">Server, který zpracovává požadavky, pracuje s&nbsp;databází a řídí logiku aplikace. Když se přihlásíte, backend ověří vaše heslo. Když odešlete objednávku, backend ji uloží a pošle potvrzení.</p>
              </div>
            </div>

            <div className="flex items-start bg-purple-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Databáze (kde jsou data)</h3>
                <p className="text-gray-700">Úložiště pro všechna data aplikace – uživatelské účty, objednávky, produkty, zprávy. Moderní webové aplikace používají cloudové databáze, které se automaticky škálují podle potřeby.</p>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Tento web – linklady.cz – je postavený na <strong>Next.js</strong> (frontend) a <strong>Convex</strong> (backend + databáze). Celý jsem ho vytvořila pomocí <Link href="/vibecoding" className="text-primary font-semibold hover:underline">vibecodingu</Link> s&nbsp;nástrojem Claude Code.
          </p>

          {/* Kdy potřebujete webovou aplikaci */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Kdy potřebujete webovou aplikaci
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Ne každý potřebuje webovou aplikaci – někdy stačí dobrý web. Ale jsou situace, kdy je aplikace jasná volba:
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <span className="text-gray-700"><strong className="text-gray-900">Potřebujete klientskou zónu</strong> – zákazníci se přihlašují, vidí své objednávky, stahují dokumenty</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <span className="text-gray-700"><strong className="text-gray-900">Sbíráte a zpracováváte data</strong> – formuláře, průzkumy, objednávky, kalkulačky</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <span className="text-gray-700"><strong className="text-gray-900">Chcete interní nástroj</strong> – dashboard, CRM, projektové řízení, reporting</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <span className="text-gray-700"><strong className="text-gray-900">Plánujete SaaS produkt</strong> – software jako služba s&nbsp;předplatným a uživatelskými účty</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <span className="text-gray-700"><strong className="text-gray-900">Běžný web nestačí</strong> – potřebujete real-time funkce, notifikace, platby nebo integraci s&nbsp;jinými systémy</span>
            </li>
          </ul>

          {/* Jak vzniká webová aplikace na míru */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak vytvořím webovou aplikaci na míru
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Díky <Link href="/vibecoding" className="text-primary font-semibold hover:underline">vibecodingu</Link> a <Link href="/ai-agent" className="text-primary font-semibold hover:underline">AI agentům</Link> dnes dokážu vytvořit funkční webovou aplikaci výrazně rychleji a levněji než tradiční vývojářský tým. Takhle to probíhá:
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start bg-purple-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Zmapujeme požadavky</h3>
                <p className="text-gray-700">Co má aplikace dělat? Kdo ji bude používat? Jaká data zpracovává? Společně definujeme rozsah a priority.</p>
              </div>
            </div>

            <div className="flex items-start bg-purple-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Prototyp za dny, ne měsíce</h3>
                <p className="text-gray-700">Pomocí AI nástrojů vytvořím funkční prototyp během dnů. Uvidíte reálnou aplikaci, ne jen wireframy – a můžete rovnou testovat a dávat zpětnou vazbu.</p>
              </div>
            </div>

            <div className="flex items-start bg-purple-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Iterace a vyladění</h3>
                <p className="text-gray-700">Na základě zpětné vazby aplikaci vylepšuji. Přidáváme funkce, ladíme UX, řešíme edge cases. Vše transparentně a průběžně.</p>
              </div>
            </div>

            <div className="flex items-start bg-purple-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Nasazení a předání</h3>
                <p className="text-gray-700">Aplikaci nasadím na produkci (Vercel, vlastní server), zaškolím vás a předám kompletní dokumentaci. Kód je váš – žádný vendor lock-in.</p>
              </div>
            </div>
          </div>

          {/* Technologie */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jaké technologie používám
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Stavím na moderním, prověřeném stacku. Žádné experimentální technologie – jen to, co funguje spolehlivě v&nbsp;produkci:
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start bg-purple-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Next.js + React</h3>
                <p className="text-gray-700">Framework od Vercelu pro tvorbu rychlých, SEO-optimalizovaných webových aplikací. Používají ho Netflix, TikTok i Notion.</p>
              </div>
            </div>

            <div className="flex items-start bg-purple-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Convex / Supabase</h3>
                <p className="text-gray-700">Cloudové databáze s&nbsp;real-time synchronizací, autentizací a automatickým škálováním. Žádná správa serverů – vše běží samo.</p>
              </div>
            </div>

            <div className="flex items-start bg-purple-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Vercel</h3>
                <p className="text-gray-700">Hosting a deploy platforma optimalizovaná pro Next.js. Automatické nasazení z&nbsp;Gitu, CDN po celém světě, SSL certifikát zdarma.</p>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            A hlavně – celý vývoj zrychluju pomocí <Link href="/vibecoding" className="text-primary font-semibold hover:underline">vibecodingu</Link> s&nbsp;<a href="https://claude.ai/code" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Claude Code</a>. Díky tomu dostanete výsledek rychleji a za rozumnější cenu. Zajímá vás, jak efektivně pracovat s&nbsp;AI? Podívejte se na můj <Link href="/ebook" className="text-primary font-semibold hover:underline">e-book o&nbsp;promptování</Link>.
          </p>

          {/* FAQ */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Časté otázky o&nbsp;webových aplikacích
          </h2>

          <div className="space-y-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Co je webová aplikace?</h3>
              <p className="text-gray-700">Webová aplikace je interaktivní software, který běží v&nbsp;prohlížeči a umožňuje uživatelům provádět konkrétní úkoly – od správy objednávek přes fakturaci až po komunikaci. Na rozdíl od běžného webu, který hlavně zobrazuje informace, webová aplikace s&nbsp;daty aktivně pracuje.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Jaký je rozdíl mezi webem a webovou aplikací?</h3>
              <p className="text-gray-700">Web primárně zobrazuje informace – text, obrázky, videa. Webová aplikace umožňuje interakci: přihlášení, zadávání dat, zpracování objednávek, generování reportů. Gmail je webová aplikace, firemní prezentace je web.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Co je progresivní webová aplikace (PWA)?</h3>
              <p className="text-gray-700">Progresivní webová aplikace (PWA) se chová jako mobilní aplikace – lze ji nainstalovat na telefon, funguje offline a posílá notifikace. Kombinuje výhody webu (žádná instalace z&nbsp;App Store) s&nbsp;výhodami nativní aplikace (rychlost, offline režim).</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Kolik stojí webová aplikace na míru?</h3>
              <p className="text-gray-700">Cena závisí na složitosti. Jednoduchá webová aplikace (formuláře, dashboard) začíná na tisících korun. Složitější systémy s&nbsp;databází, autentizací a API integrací stojí desetitisíce a více. Díky <Link href="/vibecoding" className="text-primary font-semibold hover:underline">vibecodingu</Link> a AI nástrojům se ale náklady výrazně snižují.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Potřebuji programátora na tvorbu webové aplikace?</h3>
              <p className="text-gray-700">Záleží na složitosti. Jednoduché aplikace lze dnes vytvořit pomocí no-code nástrojů nebo vibecodingu. Pro složitější projekty je programátor nebo vibecoding s&nbsp;AI nástrojem jako <a href="https://claude.ai/code" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Claude Code</a> ideální volba.</p>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-purple-50 border-l-4 border-primary rounded-lg p-8 mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Potřebujete webovou aplikaci na míru?
            </h3>
            <p className="text-gray-700 mb-4">
              Pomůžu vám navrhnout a vytvořit webovou aplikaci přesně podle vašich potřeb. Díky AI nástrojům dodám výsledek rychleji a za rozumnější cenu. Ozvěte se – úvodní konzultace je zdarma.
            </p>
            <Link
              href="/kontakt"
              className="inline-block bg-yellow-400 text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
            >
              Domluvit konzultaci zdarma
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Link href="/" className="text-lg font-semibold hover:text-yellow-400">
                Domů
              </Link>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/o-mne" className="text-gray-300 hover:text-yellow-400">O mně</Link></li>
                <li><Link href="/seo-konzultant-usti-nad-labem" className="text-gray-300 hover:text-yellow-400">SEO Ústí nad Labem</Link></li>
                <li><Link href="/tvorba-webu-bilina" className="text-gray-300 hover:text-yellow-400">Tvorba webů</Link></li>
                <li><Link href="/automatizace" className="text-gray-300 hover:text-yellow-400">Automatizace</Link></li>
                <li><Link href="/vibecoding" className="text-gray-300 hover:text-yellow-400">Vibecoding</Link></li>
                <li><Link href="/ai-agent" className="text-gray-300 hover:text-yellow-400">AI Agent</Link></li>
                <li><Link href="/webova-aplikace" className="text-gray-300 hover:text-yellow-400">Webová aplikace</Link></li>
                <li><Link href="/ebook" className="text-gray-300 hover:text-yellow-400">E-book</Link></li>
                <li><Link href="/blog" className="text-gray-300 hover:text-yellow-400">Blog</Link></li>
                <li><Link href="/kontakt" className="text-gray-300 hover:text-yellow-400">Kontakt</Link></li>
              </ul>
            </div>

            <div className="bg-primary p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Pavla Zimmermannová</h3>
              <p className="text-sm mb-2">Vedena na FÚ Bílina.</p>
              <p className="text-sm mb-2">IČO: 04352041</p>
              <p className="text-sm">
                E-mail:{' '}
                <a href="mailto:zimmermannovap@gmail.com" className="hover:text-yellow-400">
                  zimmermannovap@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2026 – linklady.cz.
          </div>
        </div>
      </footer>
    </div>
  )
}
