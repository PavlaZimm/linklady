import Navigation from '@/components/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import siteMetadata from '@/app/metadata.json'
import JsonLd from '@/components/json-ld'

export const metadata: Metadata = siteMetadata['/vibecoding']

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://linklady.cz/vibecoding/#webpage",
      url: "https://linklady.cz/vibecoding",
      name: "Vibecoding – Co je to a jak s ním začít | Linklady.cz",
      description: "Vibecoding je nový způsob tvorby softwaru pomocí AI. Místo psaní kódu říkáte AI, co chcete – a ona to naprogramuje za vás. Školení vibecoding pro firmy i jednotlivce.",
      isPartOf: { "@id": "https://linklady.cz/#website" },
      about: {
        "@type": "Thing",
        name: "Vibecoding",
        description: "Programování pomocí AI – nový přístup k tvorbě softwaru, kde místo psaní kódu popisujete, co chcete, a AI vytvoří funkční aplikaci.",
      },
      inLanguage: "cs",
    },
    {
      "@type": "Course",
      "@id": "https://linklady.cz/vibecoding/#course",
      name: "Školení vibecoding – Tvorba aplikací pomocí AI",
      description: "Praktické školení vibecoding pro firmy a jednotlivce. Naučte se vytvářet weby, aplikace a automatizace pomocí AI nástrojů jako Claude Code, Cursor, Bolt a dalších.",
      provider: { "@id": "https://linklady.cz/#business" },
      educationalLevel: "Beginner to Intermediate",
      teaches: "Vytváření aplikací pomocí AI nástrojů (vibecoding)",
      inLanguage: "cs",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        description: "Individuální i skupinové školení vibecoding",
        areaServed: {
          "@type": "Country",
          name: "Česká republika",
        },
      },
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
          name: "Vibecoding",
          item: "https://linklady.cz/vibecoding",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Co je vibecoding?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vibecoding (vibe coding) je způsob tvorby softwaru, kde místo ručního psaní kódu popisujete v běžném jazyce, co chcete vytvořit, a AI nástroj to naprogramuje za vás. Termín zavedl Andrej Karpathy (spoluzakladatel OpenAI) v roce 2025.",
          },
        },
        {
          "@type": "Question",
          name: "Jaké nástroje se používají na vibecoding?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mezi nejpopulárnější vibecoding nástroje patří Claude Code (Anthropic), Cursor, Bolt.new, Windsurf, Replit Agent, GitHub Copilot a Lovable. Každý se hodí na jiný typ projektu – od webů po komplexní aplikace.",
          },
        },
        {
          "@type": "Question",
          name: "Musím umět programovat, abych mohl dělat vibecoding?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ne, to je hlavní výhoda vibecoding. Stačí umět popsat, co chcete vytvořit. Základní znalost webových technologií (HTML, CSS) je výhodou, ale není nutná. Na školení vás naučím pracovat s AI nástroji bez předchozích zkušeností s programováním.",
          },
        },
        {
          "@type": "Question",
          name: "Co se dá vytvořit pomocí vibecoding?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pomocí vibecoding lze vytvořit webové stránky, webové aplikace, landing pages, interní firemní nástroje, automatizace, chatboty, dashboardy i jednoduché mobilní aplikace. Limity se posouvají každý měsíc – AI nástroje se zlepšují extrémně rychle.",
          },
        },
        {
          "@type": "Question",
          name: "Nabízíte školení vibecoding?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ano, nabízím individuální i skupinová školení vibecoding pro firmy i jednotlivce. Školení probíhá online nebo osobně. Naučíte se pracovat s nejlepšími AI nástroji, správně promptovat a vytvářet funkční aplikace. Kontaktujte mě pro více informací.",
          },
        },
      ],
    },
  ],
}

export default function VibecodingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* JSON-LD */}
      <JsonLd data={jsonLd} />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full yellow-gradient opacity-80 rounded-l-full transform translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm opacity-80">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="hover:text-yellow-400">Úvod</Link></li>
                <li><span>/</span></li>
                <li className="text-yellow-400">Vibecoding</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Vibecoding<br />
              <span className="text-yellow-400">Programování pomocí AI</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 opacity-90 leading-relaxed">
              Nový způsob tvorby webů a aplikací. Místo psaní kódu říkáte AI, co chcete – a ona to naprogramuje za vás.
            </p>
            <p className="text-lg mb-10 opacity-80 leading-relaxed">
              Školení vibecoding pro firmy i jednotlivce. Naučte se vytvářet funkční aplikace bez jediného řádku kódu.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/kontakt"
                className="inline-block bg-yellow-400 text-purple-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-center"
              >
                Chci školení vibecoding
              </Link>
              <a
                href="#co-je-vibecoding"
                className="inline-block border-2 border-white/80 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 backdrop-blur-sm text-center"
              >
                Co je vibecoding?
              </a>
            </div>
            {/* Trust signály */}
            <div className="flex flex-wrap gap-6 mt-10 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <span>Praktické školení</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <span>Bez předchozích znalostí</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <span>Online i osobně</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <span>Pro firmy i jednotlivce</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Co je vibecoding */}
      <section id="co-je-vibecoding" className="py-24 bg-gradient-to-br from-gray-50 to-purple-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Co je <span className="text-purple-600">vibecoding</span>?
            </h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong>Vibecoding</strong> (anglicky <em>vibe coding</em>) je nový způsob tvorby softwaru, kde místo ručního psaní kódu <strong>popisujete v běžném jazyce</strong>, co chcete vytvořit – a AI nástroj to naprogramuje za vás.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Termín zavedl <strong>Andrej Karpathy</strong>, spoluzakladatel OpenAI a bývalý šéf AI v Tesle, v roce 2025. Popsal to jednoduše: <em>&bdquo;Plně se odevzdáte vibám, přijmete exponenciálu a zapomenete, že kód vůbec existuje.&ldquo;</em>
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              V praxi to znamená, že řeknete AI něco jako <strong>&bdquo;Vytvoř mi landing page pro kavárnu s kontaktním formulářem a galerií fotek&ldquo;</strong> – a AI vytvoří funkční web. Vy pak upřesňujete, ladíte a iterujete. Žádné učení programovacích jazyků, žádné hledání chyb v kódu.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Vibecoding <strong>demokratizuje tvorbu softwaru</strong>. Už nemusíte být programátor, abyste vytvořili web, aplikaci nebo automatizaci. Stačí umět jasně popsat, co chcete.
            </p>
          </div>
        </div>
      </section>

      {/* Můj hlavní nástroj – Claude Code */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Můj vibecoding nástroj: <span className="text-purple-600">Claude Code</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Existují desítky vibecoding nástrojů. Já používám Claude Code od Anthropic – a mám k tomu dobrý důvod.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-10 md:p-14 rounded-3xl shadow-2xl mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full yellow-gradient opacity-30 rounded-l-full transform translate-x-1/4"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-yellow-400 rounded-2xl flex items-center justify-center">
                    <svg className="w-7 h-7 text-purple-900" fill="currentColor" viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">Claude Code</h3>
                    <p className="text-yellow-400 font-semibold">od Anthropic – můj hlavní nástroj</p>
                  </div>
                </div>
                <p className="text-lg opacity-90 leading-relaxed mb-6">
                  Claude Code je <strong>profesionální vibecoding nástroj</strong>, který pracuje přímo ve vašem terminálu. Rozumí celému projektu, upravuje desítky souborů najednou, řeší složité problémy a dokáže vytvořit kompletní produkční aplikaci.
                </p>
                <p className="text-lg opacity-90 leading-relaxed">
                  Na rozdíl od webových nástrojů jako Bolt nebo Lovable, Claude Code dává <strong>plnou kontrolu nad kódem</strong>. Výsledek je čistý, profesionální a připravený na produkci. Tento web – linklady.cz – je kompletně vytvořen pomocí Claude Code.
                </p>
              </div>
              <div>
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <h4 className="font-bold text-yellow-400 mb-1">Rozumí celému projektu</h4>
                    <p className="text-sm opacity-80">Vidí všechny soubory, chápe architekturu a dělá změny konzistentně napříč celou aplikací.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <h4 className="font-bold text-yellow-400 mb-1">Produkční kvalita</h4>
                    <p className="text-sm opacity-80">Generuje čistý, typově bezpečný kód s SEO, strukturovanými daty a best practices.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <h4 className="font-bold text-yellow-400 mb-1">Plná kontrola</h4>
                    <p className="text-sm opacity-80">Kód je váš. Žádný vendor lock-in, žádné limity. Nasadíte kamkoliv – Vercel, vlastní server, cokoliv.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <h4 className="font-bold text-yellow-400 mb-1">Nejchytřejší AI model</h4>
                    <p className="text-sm opacity-80">Claude Opus 4 je nejschopnější AI model pro programování. Řeší i problémy, kde jiné nástroje selhávají.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Srovnání nástrojů */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Přehled vibecoding <span className="text-purple-600">nástrojů</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Každý nástroj má své místo. Tady je přehled těch nejlepších – seřazený podle toho, pro koho se hodí.
            </p>
          </div>

          {/* Pro začátečníky */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full">Pro začátečníky</span>
              Začínáte? Tyhle nástroje nepotřebují žádné technické znalosti
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Bolt.new */}
              <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-2xl border border-yellow-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-900" fill="currentColor" viewBox="0 0 24 24"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Bolt.new</h4>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  Webový nástroj pro rychlou tvorbu aplikací. Popíšete, co chcete, a Bolt vytvoří funkční web přímo v prohlížeči. Ideální pro prototypy, landing pages a MVP.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2 text-green-700">
                    <span className="font-bold">+</span> Bez instalace, vše v prohlížeči
                  </div>
                  <div className="flex items-start gap-2 text-green-700">
                    <span className="font-bold">+</span> Rychlé výsledky za minuty
                  </div>
                  <div className="flex items-start gap-2 text-gray-400">
                    <span className="font-bold">−</span> Omezená kontrola nad kódem
                  </div>
                </div>
              </div>

              {/* Lovable */}
              <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-2xl border border-pink-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Lovable</h4>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  AI platforma zaměřená na tvorbu krásných webových aplikací. Skvělý design, Supabase integrace pro databáze a rychlé prototypování s vizuálním výstupem.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2 text-green-700">
                    <span className="font-bold">+</span> Krásný design out-of-the-box
                  </div>
                  <div className="flex items-start gap-2 text-green-700">
                    <span className="font-bold">+</span> Snadná práce s databází
                  </div>
                  <div className="flex items-start gap-2 text-gray-400">
                    <span className="font-bold">−</span> Méně flexibility pro vlastní řešení
                  </div>
                </div>
              </div>

              {/* Replit Agent */}
              <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border border-orange-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/></svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Replit Agent</h4>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  Celé vývojové prostředí v prohlížeči. Popíšete, co chcete, a Agent vytvoří, nasadí a spustí aplikaci. Vše online, včetně hostingu.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2 text-green-700">
                    <span className="font-bold">+</span> Vše v jednom – kód, hosting, databáze
                  </div>
                  <div className="flex items-start gap-2 text-green-700">
                    <span className="font-bold">+</span> Okamžité nasazení
                  </div>
                  <div className="flex items-start gap-2 text-gray-400">
                    <span className="font-bold">−</span> Závislost na platformě
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pro pokročilé */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">Pro pokročilé</span>
              Chcete plnou kontrolu? Profesionální nástroje pro seriózní projekty
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Claude Code */}
              <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl border-2 border-purple-300 hover:shadow-lg transition-shadow duration-300 relative">
                <div className="absolute -top-3 right-4">
                  <span className="bg-yellow-400 text-purple-900 text-xs font-bold px-3 py-1 rounded-full">Doporučuji</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Claude Code</h4>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  Profesionální CLI nástroj od Anthropic. Pracuje v terminálu, rozumí celému projektu a generuje produkční kód. Můj hlavní nástroj – tímhle jsem vytvořila linklady.cz.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2 text-green-700">
                    <span className="font-bold">+</span> Nejchytřejší AI pro kódování
                  </div>
                  <div className="flex items-start gap-2 text-green-700">
                    <span className="font-bold">+</span> Plná kontrola, žádný lock-in
                  </div>
                  <div className="flex items-start gap-2 text-gray-400">
                    <span className="font-bold">−</span> Vyžaduje terminál (CLI)
                  </div>
                </div>
              </div>

              {/* Cursor */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Cursor</h4>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  AI-powered editor kódu postavený na VS Code. Autocomplete, inline chat, editace celých souborů. Skvělý pro vývojáře, kteří chtějí AI přímo v editoru.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2 text-green-700">
                    <span className="font-bold">+</span> Známé prostředí (VS Code)
                  </div>
                  <div className="flex items-start gap-2 text-green-700">
                    <span className="font-bold">+</span> Inline editace a autocomplete
                  </div>
                  <div className="flex items-start gap-2 text-gray-400">
                    <span className="font-bold">−</span> Placený (po free trialu)
                  </div>
                </div>
              </div>

              {/* Windsurf */}
              <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border border-green-100 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zm-9.79 6.84a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z"/></svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Windsurf</h4>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  AI editor od Codeium. Flows funkce umožňuje AI autonomně provádět rozsáhlé změny napříč projektem. Dobrá alternativa ke Cursoru.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2 text-green-700">
                    <span className="font-bold">+</span> Autonomní editace celých projektů
                  </div>
                  <div className="flex items-start gap-2 text-green-700">
                    <span className="font-bold">+</span> Štědrý free tier
                  </div>
                  <div className="flex items-start gap-2 text-gray-400">
                    <span className="font-bold">−</span> Menší komunita než Cursor
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8 výhod profesionálních nástrojů */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="bg-purple-100 text-purple-700 text-sm font-bold px-4 py-2 rounded-full inline-block mb-6">Proč profesionální nástroje</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              8 důvodů, proč zvolit <span className="text-purple-600">profi nástroje</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Bolt.new a Lovable jsou skvělé na start. Ale pokud to myslíte vážně, profesionální nástroje jako Claude Code vám dají něco úplně jiného.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Plná kontrola */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h4v4H7V7zm6 0h4v2h-4V7zm0 4h4v2h-4v-2zm-6 4h10v2H7v-2z"/></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Vaše soubory, vaše pravidla</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pracujete přímo ve svých složkách a se svými soubory. Žádná cizí platforma, žádná závislost. Kód je váš od první chvíle.
              </p>
            </div>

            {/* 2. Jakákoliv komplexita */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Bez limitu složitosti</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Jakkoliv složité projekty, jakýkoliv programovací jazyk. Webová appka, Python skript nebo mobilní aplikace – vše z jednoho nástroje.
              </p>
            </div>

            {/* 3. Agent od tvůrce modelu */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Od tvůrce AI modelu</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Claude Code pochází přímo od Anthropic – firmy, která vytvořila samotný AI model. Agent a model jsou laděné k sobě jako celek.
              </p>
            </div>

            {/* 4. Žádný prostředník */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Přímo u zdroje</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Žádný prostředník, který přeprodává tokeny s přirážkou. Komunikujete přímo s API od tvůrce modelu – transparentní cena, plný výkon.
              </p>
            </div>

            {/* 5. Opus 4 bez omezení */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Nejlepší model bez omezení</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Přímý přístup ke Claude Opus – nejmocnějšímu modelu pro programování. Žádné uměle snížené limity, žádná degradace kvality.
              </p>
            </div>

            {/* 6. Práce s kontextem */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Chytré řízení kontextu</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pomocí .md souborů elegantně řídíte, co AI ví o vašem projektu. Pravidla, styl kódu, architektura – vše na jednom místě.
              </p>
            </div>

            {/* 7. Ekosystém */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Obrovský ekosystém</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Skills, pluginy, MCP servery – aktivní komunita neustále rozšiřuje možnosti. Co dnes nejde, zítra může být hotové díky komunitě.
              </p>
            </div>

            {/* 8. Nejen weby */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Daleko víc než jen weby</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Desktopové aplikace, webové scrapery, hlasové nástroje, CLI skripty, automatizace – profi nástroje neznají hranice jednoho typu projektu.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              Webové nástroje (Bolt, Lovable) jsou ideální na rychlé prototypy. Pro reálné, škálovatelné projekty ale potřebujete profesionální nástroj.
            </p>
          </div>
        </div>
      </section>

      {/* Co se dá vytvořit */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Co se dá vytvořit <span className="text-purple-600">vibecoding</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Vibecoding není jen hračka. Lidi s ním tvoří reálné produkty, které vydělávají peníze.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Webové stránky</h3>
              <p className="text-gray-600 leading-relaxed">
                Landing pages, firemní weby, portfolia, blogy. Kompletní weby s responzivním designem a SEO – vytvořené za hodiny místo týdnů.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Webové aplikace</h3>
              <p className="text-gray-600 leading-relaxed">
                SaaS produkty, interní firemní nástroje, dashboardy, CRM systémy. Funkční aplikace s databází a uživatelským rozhraním.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automatizace</h3>
              <p className="text-gray-600 leading-relaxed">
                Automatické skripty, API integrace, datové pipeline, chatboty. Propojení systémů, které vám ušetří hodiny rutinní práce.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Prototypy a MVP</h3>
              <p className="text-gray-600 leading-relaxed">
                Rychlé prototypování nápadů. Místo měsíců čekání na vývojáře máte funkční prototyp za den. Ideální pro validaci byznys nápadů.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Chatboti a AI nástroje</h3>
              <p className="text-gray-600 leading-relaxed">
                Vlastní chatboty pro zákaznickou podporu, interní knowledge base, AI asistenty pro specifické úkoly. Vše na míru vašim potřebám.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hry a kreativní projekty</h3>
              <p className="text-gray-600 leading-relaxed">
                Jednoduché webové hry, interaktivní vizualizace, generativní umění. Vibecoding je skvělý na kreativní experimentování.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Školení vibecoding */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Školení <span className="text-purple-600">vibecoding</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Naučte se vytvářet weby a aplikace pomocí AI. Praktické školení s reálnými projekty – ne jen teorie.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pro jednotlivce */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-10 rounded-2xl border-2 border-purple-200 relative">
              <div className="absolute -top-4 left-8">
                <span className="bg-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full">Pro jednotlivce</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-4">Individuální školení</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Školení na míru vašim potřebám. Chcete si vytvořit web? Automatizaci? Aplikaci? Naučím vás pracovat s AI nástroji tak, abyste byli samostatní.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Výběr správného nástroje pro váš projekt
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Jak správně promptovat AI pro nejlepší výsledky
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Praktická tvorba reálného projektu
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Nasazení a publikování výsledku
                </li>
              </ul>
              <Link
                href="/kontakt"
                className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full font-bold hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Domluvit individuální školení
              </Link>
            </div>

            {/* Pro firmy */}
            <div className="bg-gradient-to-br from-yellow-50 to-white p-10 rounded-2xl border-2 border-yellow-300 relative">
              <div className="absolute -top-4 left-8">
                <span className="bg-yellow-400 text-purple-900 text-sm font-bold px-4 py-1 rounded-full">Pro firmy</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-4">Firemní školení</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Školení pro váš tým. Marketéři, produktoví manažeři, HR – naučte své lidi vytvářet interní nástroje a automatizace pomocí AI.
              </p>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Přehled vibecoding nástrojů a jejich využití
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Hands-on workshop s reálnými projekty
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Identifikace procesů vhodných pro vibecoding
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Follow-up podpora po školení
                </li>
              </ul>
              <Link
                href="/kontakt"
                className="inline-block bg-yellow-400 text-purple-900 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
              >
                Domluvit firemní školení
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proč se učit vibecoding */}
      <section className="py-16 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proč se naučit vibecoding právě teď?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Vibecoding je nejrychleji rostoucí trend v tech světě. Firmy, které ho adoptují první, získají obrovskou konkurenční výhodu – rychlejší prototypování, nižší náklady na vývoj a větší autonomii týmů.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-block bg-yellow-400 text-purple-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-xl text-center"
            >
              Začít s vibecoding
            </Link>
            <Link
              href="/ebook"
              className="inline-block border-2 border-white/80 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 text-center"
            >
              E-book o promptování AI
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Časté otázky o vibecoding
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Co je vibecoding?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Vibecoding (vibe coding) je způsob tvorby softwaru, kde místo ručního psaní kódu popisujete v běžném jazyce, co chcete vytvořit, a AI nástroj to naprogramuje za vás. Termín zavedl Andrej Karpathy (spoluzakladatel OpenAI) v roce 2025.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Jaké nástroje se používají na vibecoding?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Mezi nejpopulárnější vibecoding nástroje patří Claude Code (Anthropic), Cursor, Bolt.new, Windsurf, Replit Agent, GitHub Copilot a Lovable. Každý se hodí na jiný typ projektu – od webů po komplexní aplikace.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Musím umět programovat, abych mohl dělat vibecoding?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ne, to je hlavní výhoda vibecoding. Stačí umět popsat, co chcete vytvořit. Základní znalost webových technologií je výhodou, ale není nutná. Na školení vás naučím pracovat s AI nástroji bez předchozích zkušeností s programováním.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Co se dá vytvořit pomocí vibecoding?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Pomocí vibecoding lze vytvořit webové stránky, webové aplikace, landing pages, interní firemní nástroje, automatizace, chatboty, dashboardy i jednoduché mobilní aplikace. Limity se posouvají každý měsíc – AI nástroje se zlepšují extrémně rychle.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Nabízíte školení vibecoding?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ano, nabízím individuální i skupinová školení vibecoding pro firmy i jednotlivce. Školení probíhá online nebo osobně. Naučíte se pracovat s nejlepšími AI nástroji, správně promptovat a vytvářet funkční aplikace. Kontaktujte mě pro více informací.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 hero-gradient text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full yellow-gradient opacity-60 rounded-l-full transform translate-x-1/4"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Začněte s vibecoding ještě dnes
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed mb-4">
              Napište mi a domluvíme se na školení. Ukážu vám, jak vytvořit první projekt pomocí AI – rychle, prakticky a bez zbytečné teorie.
            </p>
            <p className="text-lg opacity-80 mb-10">
              Odpovídám do 24 hodin. Úvodní konzultace je zdarma.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/kontakt"
                className="inline-block bg-yellow-400 text-purple-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-center"
              >
                Chci školení vibecoding
              </Link>
              <a
                href="mailto:zimmermannovap@gmail.com"
                className="inline-block border-2 border-white/80 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 text-center"
              >
                zimmermannovap@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Linklady.cz</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                SEO optimalizace, tvorba webů, AI automatizace a vibecoding školení.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/pavla-zimmermannov%C3%A1-750112ab/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Rychlé odkazy</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors">Úvod</Link></li>
                <li><Link href="/o-mne" className="text-gray-300 hover:text-yellow-400 transition-colors">O mně</Link></li>
                <li><Link href="/seo-konzultant-usti-nad-labem" className="text-gray-300 hover:text-yellow-400 transition-colors">SEO Ústí nad Labem</Link></li>
                <li><Link href="/tvorba-webu-bilina" className="text-gray-300 hover:text-yellow-400 transition-colors">Tvorba webů</Link></li>
                <li><Link href="/ebook" className="text-gray-300 hover:text-yellow-400 transition-colors">E-book</Link></li>
                <li><Link href="/kontakt" className="text-gray-300 hover:text-yellow-400 transition-colors">Kontakt</Link></li>
              </ul>
            </div>

            <div className="bg-purple-800/50 p-8 rounded-2xl border border-purple-700/50">
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Pavla Zimmermannová</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Vibecoding školení & SEO</p>
                <p>IČO: 04352041</p>
                <p>
                  E-mail:{' '}
                  <a href="mailto:zimmermannovap@gmail.com" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                    zimmermannovap@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2026 Linklady.cz – Všechna práva vyhrazena
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
