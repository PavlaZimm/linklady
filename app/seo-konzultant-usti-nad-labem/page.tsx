import Navigation from '@/components/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import JsonLd from '@/components/json-ld'
import SiteFooter from '@/components/site-footer'
import { getPageMetadata } from '@/lib/page-metadata'

export const metadata: Metadata = getPageMetadata('/seo-konzultant-usti-nad-labem')

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.linklady.cz/seo-konzultant-usti-nad-labem/#service",
      name: "SEO optimalizace Ústí nad Labem",
      description: "SEO konzultace pro firmy v Ústí nad Labem a Ústeckém kraji. Audit s prioritami oprav, technické a lokální SEO i pravidelná správa podle domluveného rozsahu.",
      provider: { "@id": "https://www.linklady.cz/#business" },
      areaServed: [
        {
          "@type": "City",
          name: "Ústí nad Labem",
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: "Ústecký kraj",
          },
        },
        {
          "@type": "City",
          name: "Teplice",
        },
        {
          "@type": "City",
          name: "Děčín",
        },
        {
          "@type": "City",
          name: "Most",
        },
        {
          "@type": "City",
          name: "Litoměřice",
        },
        {
          "@type": "City",
          name: "Chomutov",
        },
      ],
      serviceType: "SEO optimalizace",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        description: "SEO konzultace a optimalizace pro firmy v Ústeckém kraji",
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
          name: "SEO optimalizace Ústí nad Labem",
          item: "https://www.linklady.cz/seo-konzultant-usti-nad-labem",
        },
      ],
    },
  ],
}

export default function SeoKonzultantUstiPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* JSON-LD */}
      <JsonLd data={jsonLd} />

      <main>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 relative overflow-hidden">
        <div aria-hidden="true" className="hidden lg:block absolute top-0 right-0 w-1/4 h-full yellow-gradient opacity-30 rounded-l-full transform translate-x-1/2 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm opacity-80">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="hover:text-yellow-400">Úvod</Link></li>
                <li><span>/</span></li>
                <li className="text-yellow-400">SEO optimalizace Ústí nad Labem</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              SEO konzultantka<br />
              <span className="text-yellow-400">Ústí nad Labem</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 opacity-90 leading-relaxed">
              Máte web, ale z vyhledávání přichází málo poptávek? Projdu jeho technický stav, obsah a dostupná data. Dostanete konkrétní doporučení, co opravit nejdřív a jak změny vyhodnotit.
            </p>
            <p className="text-lg mb-10 opacity-80 leading-relaxed">
              Jsem Pavla Zimmermannová, SEO konzultantka z Bíliny. Pomáhám firmám v Ústí nad Labem a celém Ústeckém kraji s SEO optimalizací i lokální viditelností. Úvodní konzultace je zdarma; rozsah další práce a cenu si domluvíme předem.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/kontakt"
                className="inline-block bg-yellow-400 text-purple-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-center"
              >
                Probrat můj web
              </Link>
              <a
                href="mailto:zimmermannovap@gmail.com"
                className="inline-block border-2 border-white/80 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 backdrop-blur-sm text-center"
              >
                zimmermannovap@gmail.com
              </a>
            </div>
            {/* Trust signály */}
            <div className="flex flex-wrap gap-6 mt-10 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <span>10+ let zkušeností</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <span>Konzultace zdarma</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <span>Audit od 5 000 Kč</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <span>Ústecký kraj</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <nav aria-label="Na této stránce" className="border-b border-purple-100 bg-purple-50">
        <div className="max-w-7xl mx-auto px-5 py-5 flex flex-wrap gap-x-6 gap-y-3 text-purple-900 font-medium">
          <a href="#cena" className="underline underline-offset-4">Cena a rozsah</a>
          <a href="#vystup" className="underline underline-offset-4">Co dostanete</a>
          <a href="#jak-probiha-spoluprace" className="underline underline-offset-4">Průběh spolupráce</a>
          <a href="#ukazka" className="underline underline-offset-4">Ukázka práce</a>
          <a href="#faq" className="underline underline-offset-4">Časté otázky</a>
        </div>
      </nav>

      <section id="cena" className="py-14 sm:py-20 scroll-mt-6">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">Kolik stojí spolupráce a co zahrnuje</h2>
          <p className="text-lg text-gray-700 max-w-3xl mb-9">Začneme tím, co váš web potřebuje. Audit si můžete objednat samostatně. Opravy a pravidelnou péči domluvíme podle jeho výsledků a vašeho rozpočtu.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Úvodní konzultace', price: 'Zdarma', text: 'Probereme adresu webu, vaše služby a problém, který chcete vyřešit. Doporučím, zda začít auditem, konkrétní opravou, nebo jiným krokem.', detail: 'Slouží k domluvě dalšího postupu. Podrobný audit je samostatná služba.' },
              { title: 'Jednorázový SEO audit', price: 'Od 5 000 Kč', text: 'Prověřím technický stav, obsah, vyhledávací dotazy a konkurenci v dohodnutém rozsahu. Dostanete zprávu s konkrétními doporučeními a prioritami.', detail: 'Realizaci doporučených oprav nacením zvlášť podle domluveného rozsahu.' },
              { title: 'Pravidelná SEO správa', price: 'Od 8 000 Kč / měsíc', text: 'Navážeme dohodnutými úpravami webu a obsahu. Každý měsíc projdeme provedenou práci, dostupné výsledky a plán dalších kroků.', detail: 'Rozsah úprav a obsahu si stanovíme v nabídce podle potřeb webu.' },
            ].map(item => <div key={item.title} className="rounded-2xl border border-purple-100 bg-purple-50/50 p-6 sm:p-7">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-2xl font-bold text-purple-800 mb-5">{item.price}</p>
              <p className="text-gray-700 leading-relaxed mb-4">{item.text}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
            </div>)}
          </div>
          <p className="text-gray-700 mt-6">Konečnou cenu, rozsah a termín potvrdíme před zahájením práce. Záleží na velikosti webu, dostupných datech a náročnosti úprav.</p>
          <Link href="/kontakt" className="inline-block mt-7 rounded-full bg-purple-800 px-7 py-4 font-semibold text-white hover:bg-purple-900">Poslat web k domluvě</Link>
        </div>
      </section>

      <section id="vystup" className="bg-purple-50 py-14 sm:py-20 scroll-mt-6">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Co si odnesete z auditu</h2>
          <ul className="list-disc pl-6 space-y-4 text-lg text-gray-700">
            <li><strong>Konkrétní nálezy:</strong> které stránky mají problém a jak se projevuje.</li>
            <li><strong>Pořadí oprav:</strong> co řešit nejdřív a co může počkat.</li>
            <li><strong>Doporučený postup:</strong> co změnit v textu, nastavení nebo technickém řešení webu.</li>
            <li><strong>Způsob ověření:</strong> jak poznat, že je chyba opravená, a které údaje potom sledovat.</li>
          </ul>
          <p className="mt-7 text-gray-700 leading-relaxed">Při vyhodnocení oddělíme zobrazení ve vyhledávání, návštěvy a skutečné poptávky. Pokud měření chybí nebo máme málo dat, uvedu to ve výstupu.</p>
        </div>
      </section>

      {/* Proč SEO */}
      <section id="proc-seo" className="py-24 bg-gradient-to-br from-gray-50 to-purple-50/30 scroll-mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Proč investovat do <span className="text-purple-600">SEO optimalizace</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Kdo shání účetní, instalatéra nebo autoservis, často začne v Googlu nebo na Seznamu. Když tam váš web není, zákazník zavolá jinam.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Organická návštěvnost */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Více organické návštěvnosti</h3>
              <p className="text-gray-600 leading-relaxed">
                SEO optimalizace přivádí na váš web návštěvníky, kteří aktivně hledají vaše služby. Na rozdíl od reklam neplatíte za každý klik.
              </p>
            </div>

            {/* Lokální viditelnost */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lokální viditelnost v Ústí</h3>
              <p className="text-gray-600 leading-relaxed">
                Lokální SEO pomáhá, aby se vaše firma ukázala v mapách a ve výsledcích ve chvíli, kdy lidé hledají služby ve svém okolí.
              </p>
            </div>

            {/* Dlouhodobý efekt */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dlouhodobý efekt</h3>
              <p className="text-gray-600 leading-relaxed">
                Reklama přestane fungovat ve chvíli, kdy ji vypnete. Dobře nastavený web přivádí zákazníky i dlouho po úpravách. Počítejte ale s tím, že první změny bývají vidět až za několik měsíců.
              </p>
            </div>

            {/* Důvěryhodnost */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Důvěryhodnost značky</h3>
              <p className="text-gray-600 leading-relaxed">
                Firmu, kterou lidé ve výsledcích vidí opakovaně, si zapamatují. Pomáhá k tomu i vyplněný firemní profil s recenzemi.
              </p>
            </div>

            {/* Lepší konverze */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Návštěvníci, kteří už hledají</h3>
              <p className="text-gray-600 leading-relaxed">
                Kdo napíše do Googlu &bdquo;instalatér Ústí nad Labem&ldquo;, už řeší, komu zavolat. Stačí mu rychle ukázat, co děláte, kolik to stojí a jak vás kontaktovat.
              </p>
            </div>

            {/* Konkurenční výhoda */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Soupeříte jen s okolím</h3>
              <p className="text-gray-600 leading-relaxed">
                V lokálním vyhledávání se neměříte s celou republikou, jen s firmami ze svého okolí. Když mají slabé weby, dají se dohnat rychleji.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Co nabízím */}
      <section id="seo-sluzby" className="py-24 bg-white scroll-mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Co pro váš web <span className="text-purple-600">udělám</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Můžete si objednat jen audit, nebo i opravy a pravidelnou péči. Při dlouhodobé spolupráci dostanete každý měsíc report, co jsem udělala a co se změnilo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* SEO Audit */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-purple-600 text-white rounded-2xl flex items-center justify-center">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">SEO audit</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Projdu technický stav webu, texty, zpětné odkazy a konkurenci. Dostanete seznam, co opravit a v jakém pořadí.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Technický audit (rychlost, indexace, chyby)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Analýza klíčových slov a obsahu
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Analýza konkurence v Ústí nad Labem
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Podrobná zpráva s prioritami
                </li>
              </ul>
            </div>

            {/* On-page SEO */}
            <div className="bg-gradient-to-br from-yellow-50 to-white p-8 rounded-2xl border border-yellow-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-yellow-400 text-purple-900 rounded-2xl flex items-center justify-center">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">On-page SEO</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Upravím titulky, popisky, nadpisy, obrázky a odkazy mezi stránkami. Tedy všechno, co ovlivňuje pozice přímo na vašem webu.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Optimalizace title tagů a meta popisů
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Struktura nadpisů (H1–H6)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Interní prolinkování a URL struktura
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Optimalizace obrázků a alt textů
                </li>
              </ul>
            </div>

            {/* Technické SEO */}
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-green-600 text-white rounded-2xl flex items-center justify-center">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Technické SEO</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Když se web pomalu načítá nebo ho Google nemůže správně projít, dobré texty samy nepomůžou. Hlídám rychlost, indexaci, strukturovaná data a zobrazení na mobilu.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Optimalizace rychlosti (Core Web Vitals)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Strukturovaná data (Schema.org)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Sitemap, robots.txt, canonical tagy
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Řešení duplicit a crawl chyb
                </li>
              </ul>
            </div>

            {/* Lokální SEO */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center">
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Lokální SEO Ústí nad Labem</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Aby vás lidé z Ústí a okolí našli v mapách i v místních výsledcích. Nastavím firemní profil na Googlu, zápisy v katalozích (například Firmy.cz) a postup, jak sbírat recenze.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Optimalizace firemního profilu na Googlu
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Lokální citace a katalogy
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Strategie pro získávání recenzí
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Lokální obsah a landing pages
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Jak SEO funguje */}
      <section id="jak-probiha-spoluprace" className="py-24 bg-gradient-to-br from-gray-50 to-purple-50/30 scroll-mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Jak probíhá <span className="text-purple-600">SEO spolupráce</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              U každého kroku víte, co dělám a proč.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Krok 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Úvodní konzultace zdarma</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pošlete adresu webu, popis služby a co vám dnes nefunguje. Probereme cíle a domluvíme rozsah, cenu i termín případné placené práce. Konzultace může proběhnout online nebo osobně v Ústeckém kraji.
                </p>
              </div>
            </div>

            {/* Krok 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">SEO audit a analýza</h3>
                <p className="text-gray-600 leading-relaxed">
                  Projdu technický stav webu, obsah, konkurenci a klíčová slova. Dostanete zprávu s doporučeními seřazenými podle toho, co vašemu webu pomůže nejvíc.
                </p>
              </div>
            </div>

            {/* Krok 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Implementace a optimalizace</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pokud se domluvíme i na realizaci, provedu schválené úpravy nebo připravím zadání pro vašeho správce webu. Změny zaznamenám a zkontroluji jejich funkčnost.
                </p>
              </div>
            </div>

            {/* Krok 4 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">4</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Obsahová strategie</h3>
                <p className="text-gray-600 leading-relaxed">
                  Připravím plán obsahu podle toho, co lidé ve vašem oboru opravdu hledají: články na blog, samostatné stránky služeb nebo případové studie.
                </p>
              </div>
            </div>

            {/* Krok 5 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">5</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Monitoring a reporting</h3>
                <p className="text-gray-600 leading-relaxed">
                  Při pravidelné správě sleduji pozice, návštěvnost a evidované poptávky. Každý měsíc dostanete přehled provedených změn, dostupných výsledků a dalších kroků.
                </p>
              </div>
            </div>

            {/* Krok 6 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-yellow-400 text-purple-900 rounded-full flex items-center justify-center text-xl font-bold">6</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Průběžná optimalizace</h3>
                <p className="text-gray-600 leading-relaxed">
                  U průběžné spolupráce podle dat upravujeme priority. Samostatný audit končí předáním doporučení; další péče záleží na naší domluvě. Konkrétní pozice ani počet poptávek neslibuji.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-16 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Chcete vědět, jak si stojí váš web v SEO?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Napište mi a připravím vám základní zhodnocení vašeho webu zdarma. Ukážu vám, kde jsou největší příležitosti ke zlepšení.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-block bg-yellow-400 text-purple-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-xl text-center"
            >
              Získat zhodnocení webu zdarma
            </Link>
            <a
              href="mailto:zimmermannovap@gmail.com"
              className="inline-block border-2 border-white/80 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 text-center"
            >
              Napsat e-mail
            </a>
          </div>
        </div>
      </section>

      {/* Pro koho je SEO */}
      <section id="pro-koho" className="py-24 bg-gradient-to-br from-purple-50 to-yellow-50/30 scroll-mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pro koho je <span className="text-purple-600">SEO optimalizace</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              SEO dává smysl, když vaši zákazníci hledají vaše služby na internetu.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lokální firmy v Ústí</h3>
              <p className="text-gray-600 leading-relaxed">
                Restaurace, řemeslníci, lékaři nebo autoservisy. Každý, koho mají místní zákazníci najít na Googlu. Lokální SEO pomáhá dostat se do map i do běžných výsledků.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">E-shopy</h3>
              <p className="text-gray-600 leading-relaxed">
                Upravím kategorie, produkty a blog tak, aby na ně z vyhledávačů chodili lidé, kteří chtějí nakoupit.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Služby a B2B</h3>
              <p className="text-gray-600 leading-relaxed">
                Účetní, advokáti, IT firmy nebo agentury. Když vaši klienti hledají dodavatele na Googlu, SEO pomůže, aby našli právě vás.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO pro Ústecký kraj */}
      <section id="ustecky-kraj" className="py-24 bg-white scroll-mt-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            SEO optimalizace v <span className="text-purple-600">Ústeckém kraji</span>
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Sídlím v Bílině a <strong>Ústecký kraj znám z vlastní zkušenosti</strong>. Vím, jak tu lidé hledají místní služby, a když je potřeba, sejdeme se osobně.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              SEO nabízím firmám v <strong>Ústí nad Labem, Teplicích, Mostě, Děčíně, Litoměřicích, Chomutově</strong> i v dalších městech kraje. Ať máte kamenný obchod, službu nebo e-shop.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Každý projekt začínám <strong>úvodní konzultací zdarma</strong>. Podívám se na váš web a konkurenci v oboru a navrhnu, jak postupovat. Nic vám nebudu slibovat, dokud neuvidím data.
            </p>
          </div>

          {/* Města */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-purple-50 p-4 rounded-xl text-center">
              <span className="font-semibold text-gray-900">Ústí nad Labem</span>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl text-center">
              <span className="font-semibold text-gray-900">Teplice</span>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl text-center">
              <span className="font-semibold text-gray-900">Most</span>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl text-center">
              <span className="font-semibold text-gray-900">Děčín</span>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl text-center">
              <span className="font-semibold text-gray-900">Litoměřice</span>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl text-center">
              <span className="font-semibold text-gray-900">Chomutov</span>
            </div>
          </div>
        </div>
      </section>

      <section id="ukazka" className="py-14 sm:py-20 bg-purple-50 scroll-mt-6">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <p className="text-sm font-semibold text-purple-800 mb-3">Ukázka z vlastního webu</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Obnova čtyř původních článků na Linklady</h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p><strong>Problém:</strong> původní adresy článků vedly na obecný blog nebo stránku služby. Návštěvník na nich nenašel text, který hledal.</p>
            <p><strong>Úprava:</strong> články jsme aktualizovali a vrátili na původní adresy. Doplnili jsme titulky, popisky, související odkazy a položky v sitemap.</p>
            <p><strong>Ověření:</strong> při nasazení 19. 9. 2026 jsme zkontrolovali dostupnost článků, správné adresy a interní odkazy. To dokládá provedenou opravu; přínos pro návštěvnost a poptávky je potřeba vyhodnotit samostatně.</p>
          </div>
          <Link href="/barterova-spoluprace-idealni-marketingovy-tah/" className="inline-block mt-6 text-purple-800 font-semibold underline underline-offset-4">Prohlédnout obnovený článek o barterové spolupráci</Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gradient-to-br from-gray-50 to-purple-50/30 scroll-mt-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Často kladené otázky o SEO v Ústí nad Labem
          </h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Kolik stojí SEO optimalizace v Ústí nad Labem?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Cena SEO optimalizace závisí na rozsahu projektu, konkurenci ve vašem oboru a aktuálním stavu webu. Jednorázový SEO audit začíná od 5 000 Kč, měsíční SEO správa od 8 000 Kč. Po úvodní analýze vám připravím nabídku na míru.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Jak dlouho trvá, než se SEO projeví ve výsledcích?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Opravenou chybu můžeme ověřit po nasazení. Změny ve vyhledávání a poptávkách vyhodnocujeme v delším období podle dostupných dat. Termín růstu slíbit nemohu; záleží na stavu webu, konkurenci i provedených změnách.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Děláte SEO i pro firmy mimo Ústí nad Labem?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ano. Sídlím v Bílině a pracuji s klienty z celého Ústeckého kraje – Teplice, Most, Děčín, Litoměřice, Chomutov i dalších měst. Většinu práce řeším online, ale ráda se setkám i osobně.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Co zahrnuje SEO audit?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                SEO audit zahrnuje kontrolu technického stavu webu (rychlost, indexace, chyby), on-page faktorů (titulky, meta popisy, nadpisy, obsah), off-page faktorů (zpětné odkazy) a analýzu konkurence. Výstupem je podrobná zpráva s konkrétními doporučeními a prioritami.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Jaký je rozdíl mezi lokálním a celostátním SEO?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Lokální SEO se zaměřuje na zobrazení ve výsledcích pro vyhledávání s lokálním záměrem – například &bdquo;instalatér Ústí nad Labem&ldquo;. Zahrnuje optimalizaci Google Business profilu, lokálních citací a recenzí. Celostátní SEO cílí na obecnější klíčová slova bez lokálního omezení a vyžaduje silnější obsahovou strategii.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 hero-gradient text-white relative overflow-hidden">
        <div aria-hidden="true" className="hidden lg:block absolute top-0 right-0 w-1/4 h-full yellow-gradient opacity-20 rounded-l-full transform translate-x-1/2 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Zjistěme, co vašemu webu chybí
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed mb-4">
              Do zprávy přidejte adresu webu, co nabízíte a kde chcete získávat zákazníky. Napište také, zda vám chybí návštěvnost, nebo lidé přicházejí a neozývají se. Podle toho navrhnu další postup.
            </p>
            <p className="text-lg opacity-80 mb-10">
              Odpovídám do 24 hodin. Konzultace je zdarma a k ničemu vás nezavazuje.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/kontakt"
                className="inline-block bg-yellow-400 text-purple-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-center"
              >
                Probrat můj web
              </Link>
              <a
                href="mailto:zimmermannovap@gmail.com"
                className="inline-block border-2 border-white/80 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 text-center"
              >
                zimmermannovap@gmail.com
              </a>
            </div>
            <div className="flex flex-wrap gap-6 justify-center mt-10 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <span>Bez závazků</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <span>Odpověď do 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <span>Z Ústeckého kraje</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-purple-50 py-12" aria-labelledby="seo-guides-heading">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h2 id="seo-guides-heading" className="text-2xl font-bold text-gray-900 mb-5">Než začnete se zpětnými odkazy</h2>
          <p className="text-gray-700 mb-5">Projděte si, jak vybrat vhodné odkazy a posoudit jejich přínos pro váš web.</p>
          <ul className="space-y-4">
            <li><Link href="/3-typy-zpetnych-odkazu-ktery-je-ten-spravny/" className="text-purple-800 underline">Tři typy zpětných odkazů a jejich přínos</Link></li>
            <li><Link href="/11-tipu-jak-ziskat-validni-zpetny-odkaz/" className="text-purple-800 underline">Jak získat zpětné odkazy: jedenáct postupů</Link></li>
            <li><Link href="/linkbuilding-outreach-jak-budovat-zpetne-odkazy-a-posilit-autoritu-webu/" className="text-purple-800 underline">Jak vybírat a oslovovat weby pro linkbuilding</Link></li>
          </ul>
        </div>
      </section>

      </main>
      <SiteFooter />
    </div>
  )
}
