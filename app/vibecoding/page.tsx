import Navigation from '@/components/navigation'
import ContactForm from '@/components/contact-form'
import Link from 'next/link'
import type { Metadata } from 'next'
import siteMetadata from '@/app/metadata.json'
import JsonLd from '@/components/json-ld'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = siteMetadata['/vibecoding']

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.linklady.cz/vibecoding/#webpage",
      url: "https://www.linklady.cz/vibecoding",
      name: "Vibecoding – Co je to a jak s ním začít | Linklady.cz",
      description: "Vibecoding je nový způsob tvorby softwaru pomocí AI. Místo psaní kódu říkáte AI, co chcete – a ona to naprogramuje za vás. Školení vibecodingu pro firmy i jednotlivce.",
      isPartOf: { "@id": "https://www.linklady.cz/#website" },
      about: {
        "@type": "Thing",
        name: "Vibecoding",
        description: "Programování pomocí AI – nový přístup k tvorbě softwaru, kde místo psaní kódu popisujete, co chcete, a AI vytvoří funkční aplikaci.",
      },
      inLanguage: "cs",
    },
    {
      "@type": "Course",
      "@id": "https://www.linklady.cz/vibecoding/#course",
      name: "Školení vibecodingu – Tvorba aplikací pomocí AI",
      description: "Praktické školení vibecodingu pro firmy a jednotlivce. Naučte se vytvářet weby, aplikace a automatizace pomocí AI nástrojů jako Claude Code, Cursor, Bolt a dalších.",
      provider: { "@id": "https://www.linklady.cz/#business" },
      educationalLevel: "Beginner to Intermediate",
      teaches: "Vytváření aplikací pomocí AI nástrojů (vibecoding)",
      inLanguage: "cs",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        description: "Individuální i skupinové školení vibecodingu",
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
          item: "https://www.linklady.cz",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Vibecoding",
          item: "https://www.linklady.cz/vibecoding",
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
              Nejrychlejší způsob, jak dnes vytvořit funkční web nebo aplikaci. Místo psaní kódu říkáte AI, co chcete – a ona to naprogramuje za vás.
            </p>
            <p className="text-lg mb-10 opacity-80 leading-relaxed">
              Praktické školení vibecodingu pro firmy i jednotlivce. Od nuly k prvnímu funkčnímu projektu s Claude Code, Cursor nebo Bolt – bez nutnosti umět programovat.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="#poptavka"
                className="inline-block bg-yellow-400 text-purple-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-center"
              >
                Chci školení vibecodingu
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
                  <h4 className="text-lg font-bold text-gray-900"><a href="https://bolt.new/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">Bolt.new</a></h4>
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
                  <h4 className="text-lg font-bold text-gray-900"><a href="https://lovable.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">Lovable</a></h4>
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
                  <h4 className="text-lg font-bold text-gray-900"><a href="https://replit.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">Replit Agent</a></h4>
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
                  <h4 className="text-lg font-bold text-gray-900"><a href="https://claude.ai/code" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">Claude Code</a></h4>
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
                  <h4 className="text-lg font-bold text-gray-900"><a href="https://cursor.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">Cursor</a></h4>
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
                  <h4 className="text-lg font-bold text-gray-900"><a href="https://windsurf.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">Windsurf</a></h4>
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
              Co se dá vytvořit <span className="text-purple-600">vibecodingem</span>
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
              <div className="flex flex-col gap-2 mt-4">
                <a href="https://kastrup.cz/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium text-sm transition-colors">
                  Ukázka: Magazín kastrup.cz →
                </a>
                <a href="https://zdemardoprava-cz-kamionov-doprava.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium text-sm transition-colors">
                  Ukázka: Poptávkový formulář pro dopravu →
                </a>
              </div>
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
              <a href="https://popelnice.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-purple-600 hover:text-purple-800 font-medium text-sm transition-colors">
                Ukázka: Vzdělávací aplikace třídění odpadu →
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3"><Link href="/automatizace" className="hover:text-primary">Automatizace</Link></h3>
              <p className="text-gray-600 leading-relaxed">
                Automatické skripty, API integrace, datové pipeline, chatboty. Propojení systémů, které vám ušetří hodiny rutinní práce. <Link href="/automatizace" className="text-primary font-semibold hover:underline">Více o automatizaci →</Link>
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
              <a href="https://guineapig-peach.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-purple-600 hover:text-purple-800 font-medium text-sm transition-colors">
                Ukázka: Hra vytvořená vibecodingem →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Školení vibecodingu */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Školení <span className="text-purple-600">vibecodingu</span>
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

      {/* Rizika a limity vibecodingu */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="bg-red-100 text-red-700 text-sm font-bold px-4 py-2 rounded-full inline-block mb-6">Buďte realisti</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Rizika a limity <span className="text-purple-600">vibecodingu</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Vibecoding není kouzelná hůlka. Abyste ho využili správně, musíte znát i jeho slabiny.
            </p>
          </div>

          {/* [OBRÁZEK 1: Schéma/infografika - "Vibecoding: výhody vs. rizika"] */}
          {/* Rozměr: cca 800×450px, formát: WebP nebo PNG */}
          {/* Umístění: public/images/vibecoding-rizika.webp */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Technický dluh</h3>
              <p className="text-gray-600 leading-relaxed">
                AI generuje kód, který funguje – ale ne vždy je čistý a udržitelný. Bez kontroly se snadno nahromadí technický dluh, který vás později stojí víc času, než jste ušetřili.
              </p>
            </div>

            <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Bezpečnostní díry</h3>
              <p className="text-gray-600 leading-relaxed">
                AI neřeší bezpečnost automaticky. Může vygenerovat kód zranitelný vůči SQL injection, XSS nebo úniku dat. Bez bezpečnostní kontroly nasazujete časovanou bombu.
              </p>
            </div>

            <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 9h-2V7h2v4zm0 4h-2v-2h2v2z"/></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Licenční rizika</h3>
              <p className="text-gray-600 leading-relaxed">
                AI modely se učí na existujícím kódu. Občas vygenerují úryvky, které mohou pocházet z licenčně chráněných zdrojů. U komerčních projektů je tohle potenciální právní problém.
              </p>
            </div>

            <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Falešný pocit jistoty</h3>
              <p className="text-gray-600 leading-relaxed">
                &bdquo;Funguje to, tak je to hotové&ldquo; – nejčastější past vibecodingu. Kód může fungovat na první pohled, ale skrývat chyby, které se projeví až v produkci. Testování je nutnost, ne luxus.
              </p>
            </div>
          </div>

          <div className="bg-purple-50 border-l-4 border-primary rounded-lg p-8 mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Jak to řeším já?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Právě proto používám profesionální nástroje jako Claude Code a důsledně kontroluji vygenerovaný kód. Na školení vás naučím, jak se těmto rizikům vyhnout – jak testovat, jak psát bezpečný kód a jak poznat, kdy AI udělala chybu. Vibecoding v rukou zkušeného člověka je silný nástroj. Bez kontroly je to rychlá jízdenka do technického dluhu.
            </p>
          </div>
        </div>
      </section>

      {/* Web a aplikace na míru vibecodingem */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Web a aplikace <span className="text-purple-600">na míru</span> vibecodingem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Co se tím doopravdy mění pro cenu a pro termín. A co se nemění, i&nbsp;když se to slibuje.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nejčastější otázka zní, jestli vibecodingem vznikne levnější web. Odpověď je: mění se to, za co platíte, ne nutně kolik.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Zkracuje se cesta od nápadu k&nbsp;něčemu, na co se dá kliknout.</strong> První použitelná verze vzniká v&nbsp;řádu hodin, ne týdnů. To je ta skutečná změna, protože o&nbsp;většině rozhodnutí se dřív dohadovalo nad obrázkem v&nbsp;prezentaci. Teď se dohadujeme nad věcí, která běží.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Nezkracuje se to, co přijde potom.</strong> Nasazení, rychlost, přístupnost, bezpečnost, měření, obsah. Tady vibecoding neušetří skoro nic a je poctivé to říct dopředu. Kdo tvrdí, že hotový web vznikne za odpoledne, mluví o&nbsp;prototypu, ne o&nbsp;webu, který má vydělávat.
            </p>

            <div className="bg-purple-50 border-l-4 border-purple-600 rounded-r-lg p-6 my-8">
              <p className="text-gray-800 leading-relaxed">
                <strong>Kde to dává největší smysl:</strong> vnitřní nástroje a věci, které si firma nikdy nenechala udělat, protože se to nevyplatilo. Kalkulačka, přehled, formulář, který někam zapisuje. Dřív to nestálo za projekt. Teď stojí.
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Kde bych do toho nešla:</strong> tam, kde jde o&nbsp;peníze zákazníků, citlivá data nebo o&nbsp;věc, na které stojí provoz firmy. Ne že by to nešlo. Ale kontrola a odpovědnost tam stojí víc než samotné napsání, takže úspora zmizí a riziko zůstane.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Na co se ptát, než si někoho najmete
            </h3>
            <ul className="space-y-3 text-lg text-gray-700 mb-8">
              <li><strong>Kdo bude umět ten kód změnit za rok?</strong> Když odpověď zní &bdquo;zase AI&ldquo;, zeptejte se, kdo pozná, že to udělala špatně.</li>
              <li><strong>Co se stane, když to spadne v&nbsp;neděli večer?</strong></li>
              <li><strong>Dostanu to celé, nebo to poběží u&nbsp;někoho, kdo mi to může vypnout?</strong></li>
              <li><strong>Je v&nbsp;ceně měření?</strong> Web bez měření je hezký obrázek, ne nástroj.</li>
            </ul>

            <p className="text-lg text-gray-700 leading-relaxed">
              Napište mi, co potřebujete. Když bude na váš případ lepší hotové řešení za pár stovek měsíčně, řeknu vám to, i&nbsp;když si tím zakážu zakázku.
            </p>
          </div>
        </div>
      </section>

      {/* Pro koho je vibecoding */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pro koho vibecoding <span className="text-purple-600">je a není</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Vibecoding má obrovský potenciál, ale není pro každého stejně. Tady je upřímné zhodnocení.
            </p>
          </div>

          {/* [OBRÁZEK 2: Fotka ze školení / workshop s lidmi u počítačů] */}
          {/* Rozměr: cca 1200×600px, formát: WebP nebo JPG */}
          {/* Umístění: public/images/vibecoding-skoleni.webp */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-green-200">
              <h3 className="text-2xl font-bold text-green-700 mb-6 flex items-center gap-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                Vibecoding je pro vás, pokud:
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-0.5">+</span>
                  <span><strong className="text-gray-900">Máte nápad a chcete ho rychle otestovat</strong> – prototyp za hodiny místo týdnů</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-0.5">+</span>
                  <span><strong className="text-gray-900">Jste podnikatel nebo marketér</strong> – potřebujete landing page, interní nástroj nebo automatizaci, ale nechcete čekat na vývojáře</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-0.5">+</span>
                  <span><strong className="text-gray-900">Chcete se naučit tvořit</strong> – vibecoding je nejpřístupnější vstup do světa tvorby softwaru</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 font-bold mt-0.5">+</span>
                  <span><strong className="text-gray-900">Jste vývojář a chcete zrychlit</strong> – AI jako asistent pro rutinní úkoly, boilerplate a prototypy</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg border border-red-200">
              <h3 className="text-2xl font-bold text-red-700 mb-6 flex items-center gap-3">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>
                Vibecoding nestačí, pokud:
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-0.5">−</span>
                  <span><strong className="text-gray-900">Stavíte kritickou aplikaci</strong> – bankovnictví, zdravotnictví nebo bezpečnostní systémy vyžadují ruční kontrolu každého řádku</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-0.5">−</span>
                  <span><strong className="text-gray-900">Nechcete rozumět výsledku</strong> – slepé kopírování AI kódu bez kontroly vede k problémům</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-0.5">−</span>
                  <span><strong className="text-gray-900">Očekáváte dokonalost na první pokus</strong> – vibecoding je iterativní proces, ne jednorázové kouzlo</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-0.5">−</span>
                  <span><strong className="text-gray-900">Chcete nahradit celý vývojový tým</strong> – AI agent je skvělý spolupracovník, ale zatím ne náhrada za zkušeného <Link href="/ai-agent" className="text-primary hover:underline">AI agenta</Link> s lidským dohledem</span>
                </li>
              </ul>
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
              Začít s vibecodingem
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
            Časté otázky o vibecodingu
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
                Ne, to je hlavní výhoda vibecodingu. Stačí umět popsat, co chcete vytvořit. Základní znalost webových technologií je výhodou, ale není nutná. Na školení vás naučím pracovat s AI nástroji bez předchozích zkušeností s programováním.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Co se dá vytvořit pomocí vibecodingu?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Pomocí vibecodingu lze vytvořit webové stránky, webové aplikace, landing pages, interní firemní nástroje, automatizace, chatboty, dashboardy i jednoduché mobilní aplikace. Limity se posouvají každý měsíc – AI nástroje se zlepšují extrémně rychle.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Nabízíte školení vibecodingu?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ano, nabízím individuální i skupinová školení vibecodingu pro firmy i jednotlivce. Školení probíhá online nebo osobně. Naučíte se pracovat s nejlepšími AI nástroji, správně promptovat a vytvářet funkční aplikace. Kontaktujte mě pro více informací.
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
              Začněte s vibecodingem ještě dnes
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
                Chci školení vibecodingu
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

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Poptávka */}
          <div id="poptavka" className="mt-12 scroll-mt-24">
            <ContactForm
              service="Školení vibecodingu"
              title="Napište, co chcete postavit"
              subtitle="Stačí pár vět o tom, co potřebujete. Odpovím do 24 hodin a řeknu, jestli se to naučíte sami, nebo je rychlejší, když to udělám."
            />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
