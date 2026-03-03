import Navigation from '@/components/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import siteMetadata from '@/app/metadata.json'
import JsonLd from '@/components/json-ld'

export const metadata: Metadata = siteMetadata['/seo-konzultant-usti-nad-labem']

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://linklady.cz/seo-konzultant-usti-nad-labem/#service",
      name: "SEO konzultant Ústí nad Labem",
      description: "SEO optimalizace a konzultace pro firmy v Ústí nad Labem a Ústeckém kraji. Komplexní SEO strategie, technické SEO, lokální SEO a obsahový marketing s měřitelnými výsledky.",
      provider: { "@id": "https://linklady.cz/#business" },
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
      "@type": "LocalBusiness",
      "@id": "https://linklady.cz/seo-konzultant-usti-nad-labem/#localbusiness",
      name: "Linklady.cz – SEO konzultant Ústí nad Labem",
      url: "https://linklady.cz/seo-konzultant-usti-nad-labem",
      image: "https://linklady.cz/profile.jpg",
      email: "zimmermannovap@gmail.com",
      taxID: "04352041",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bílina",
        addressRegion: "Ústecký kraj",
        addressCountry: "CZ",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "50.6607",
        longitude: "14.0323",
      },
      areaServed: [
        { "@type": "City", name: "Ústí nad Labem" },
        { "@type": "City", name: "Teplice" },
        { "@type": "City", name: "Most" },
        { "@type": "City", name: "Děčín" },
        { "@type": "City", name: "Litoměřice" },
        { "@type": "City", name: "Chomutov" },
        { "@type": "City", name: "Bílina" },
      ],
      priceRange: "$$",
      knowsAbout: [
        "SEO optimalizace",
        "Lokální SEO",
        "Technické SEO",
        "Obsahový marketing",
        "SEO audit",
        "Linkbuilding",
      ],
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
          name: "SEO konzultant Ústí nad Labem",
          item: "https://linklady.cz/seo-konzultant-usti-nad-labem",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Kolik stojí SEO optimalizace v Ústí nad Labem?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cena SEO optimalizace závisí na rozsahu projektu, konkurenci ve vašem oboru a aktuálním stavu webu. Jednorázový SEO audit začíná od 5 000 Kč, měsíční SEO správa od 8 000 Kč. Po úvodní analýze vám připravím nabídku na míru.",
          },
        },
        {
          "@type": "Question",
          name: "Jak dlouho trvá, než se SEO projeví ve výsledcích?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEO je dlouhodobá strategie. První výsledky (zlepšení pozic, nárůst organické návštěvnosti) jsou viditelné typicky za 3–6 měsíců. Plný efekt se projeví za 6–12 měsíců. Záleží na konkurenci, stavu webu a zvoleném rozsahu optimalizace.",
          },
        },
        {
          "@type": "Question",
          name: "Děláte SEO i pro firmy mimo Ústí nad Labem?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ano. Sídlím v Bílině a pracuji s klienty z celého Ústeckého kraje – Teplice, Most, Děčín, Litoměřice, Chomutov i dalších měst. Většinu práce řeším online, ale ráda se setkám i osobně.",
          },
        },
        {
          "@type": "Question",
          name: "Co zahrnuje SEO audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEO audit zahrnuje kompletní analýzu technického stavu webu (rychlost, indexace, chyby), on-page faktorů (titulky, meta popisy, nadpisy, obsah), off-page faktorů (zpětné odkazy) a analýzu konkurence. Výstupem je podrobná zpráva s konkrétními doporučeními a prioritami.",
          },
        },
        {
          "@type": "Question",
          name: "Jaký je rozdíl mezi lokálním a celostátním SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Lokální SEO se zaměřuje na zobrazení ve výsledcích pro vyhledávání s lokálním záměrem – například 'instalatér Ústí nad Labem'. Zahrnuje optimalizaci Google Business profilu, lokálních citací a recenzí. Celostátní SEO cílí na obecnější klíčová slova bez lokálního omezení a vyžaduje silnější obsahovou strategii.",
          },
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

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full yellow-gradient opacity-80 rounded-l-full transform translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm opacity-80">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="hover:text-yellow-400">Úvod</Link></li>
                <li><span>/</span></li>
                <li className="text-yellow-400">SEO konzultant Ústí nad Labem</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              SEO konzultant<br />
              <span className="text-yellow-400">Ústí nad Labem</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 opacity-90 leading-relaxed">
              Dostaňte svůj web na první stránku Googlu. SEO optimalizace s měřitelnými výsledky pro firmy v Ústí nad Labem a celém Ústeckém kraji.
            </p>
            <p className="text-lg mb-10 opacity-80 leading-relaxed">
              SEO specialistka s 10 lety praxe. Pomohu vám získat více zákazníků z organického vyhledávání – bez placených reklam.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/kontakt"
                className="inline-block bg-yellow-400 text-purple-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-center"
              >
                Chci SEO konzultaci zdarma
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
                <span>Měřitelné výsledky</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <span>Ústecký kraj</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proč SEO */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Proč investovat do <span className="text-purple-600">SEO optimalizace</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              93 % online zážitků začíná vyhledávačem. Pokud váš web není na první stránce Googlu, vaši zákazníci najdou konkurenci.
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
                Lokální SEO zajistí, že vás lidé najdou, když hledají služby ve vašem okolí. Google mapy, lokální výsledky – tam potřebujete být.
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
                SEO je investice, která se násobí. Dobře optimalizovaný web přivádí zákazníky měsíce i roky – na rozdíl od reklam, které přestanou fungovat, jakmile je vypnete.
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
                Lidé důvěřují organickým výsledkům víc než reklamám. Pozice na první stránce Googlu buduje autoritu vaší firmy.
              </p>
            </div>

            {/* Lepší konverze */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vyšší konverze</h3>
              <p className="text-gray-600 leading-relaxed">
                Návštěvníci z organického vyhledávání mají jasný záměr – hledají řešení svého problému. Proto konvertují lépe než návštěvníci z jiných kanálů.
              </p>
            </div>

            {/* Konkurenční výhoda */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Předběhněte konkurenci</h3>
              <p className="text-gray-600 leading-relaxed">
                Většina firem v Ústeckém kraji SEO neřeší. To je vaše příležitost – kdo začne dřív, získá náskok, který se těžko dohání.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Co nabízím */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              SEO služby, které <span className="text-purple-600">skutečně fungují</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Kompletní SEO optimalizace na míru. Od auditu po dlouhodobou správu – vše s transparentním reportingem.
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
                Kompletní analýza vašeho webu – technický stav, on-page faktory, obsah, zpětné odkazy a konkurence. Dostanete jasný plán, co opravit a v jakém pořadí.
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
                Optimalizace obsahu a struktury vašeho webu. Titulky, meta popisy, nadpisy, interní prolinkování, obrázky – vše, co ovlivňuje pozice přímo na webu.
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
                Technický základ, na kterém stojí vše ostatní. Rychlost načítání, správná indexace, strukturovaná data, mobilní optimalizace.
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
                Zviditelněte svou firmu v lokálních výsledcích vyhledávání. Google Business profil, lokální citace, recenze – vše pro maximální viditelnost v Ústí a okolí.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                  Optimalizace Google Business profilu
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
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Jak probíhá <span className="text-purple-600">SEO spolupráce</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Žádné černé skříňky. Přesně víte, co dělám, proč to dělám a jaké výsledky přináší.
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
                  Probereme vaše cíle, aktuální stav webu a možnosti. Podívám se na váš web, zhodnotím situaci a doporučím další kroky. Schůzka online nebo osobně v Ústeckém kraji.
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
                  Kompletní audit webu – technický stav, obsah, konkurence, klíčová slova. Dostanete zprávu s konkrétními doporučeními seřazenými podle priority a dopadu.
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
                  Na základě auditu provedu optimalizace – technické opravy, úpravy obsahu, nastavení strukturovaných dat, optimalizace rychlosti. Vše systematicky a s dokumentací.
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
                  Připravím plán obsahu zaměřený na klíčová slova, která přivádí zákazníky. Blog články, landing pages, případové studie – obsah, který Google miluje.
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
                  Průběžně sleduji pozice, návštěvnost a konverze. Každý měsíc dostanete přehledný report s výsledky a dalšími kroky. Žádné tajemství.
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
                  SEO není jednorázová akce. Průběžně vyhodnocuji data, upravuji strategii a reaguji na změny algoritmů. Vaše pozice se neustále zlepšují.
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
      <section className="py-24 bg-gradient-to-br from-purple-50 to-yellow-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pro koho je <span className="text-purple-600">SEO optimalizace</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              SEO se vyplatí každé firmě, která chce stabilní přísun zákazníků z internetu.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lokální firmy v Ústí</h3>
              <p className="text-gray-600 leading-relaxed">
                Restaurace, řemeslníci, lékaři, autoservisy – každý, kdo chce, aby ho místní zákazníci našli na Googlu. Lokální SEO vás dostane do map i organických výsledků.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">E-shopy</h3>
              <p className="text-gray-600 leading-relaxed">
                Organická návštěvnost z vyhledávačů je pro e-shopy klíčová. Optimalizace kategorií, produktů a blogu přinese návštěvníky, kteří chtějí nakoupit.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Služby a B2B</h3>
              <p className="text-gray-600 leading-relaxed">
                Účetní, advokáti, IT firmy, marketingové agentury – pokud vaši klienti hledají vaše služby na Googlu, SEO je nejefektivnější způsob, jak je oslovit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO pro Ústecký kraj */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            SEO optimalizace v <span className="text-purple-600">Ústeckém kraji</span>
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Sídlím v Bílině a <strong>Ústecký kraj znám osobně</strong>. Rozumím lokálnímu trhu, vím, jak lidé v regionu hledají a jaká klíčová slova používají. To je výhoda, kterou vzdálená agentura z Prahy nemá.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Pracuji s firmami v <strong>Ústí nad Labem, Teplicích, Mostě, Děčíně, Litoměřicích, Chomutově</strong> a dalších městech kraje. Ať už máte kamenný obchod, službu nebo e-shop – pomohu vám získat více zákazníků z organického vyhledávání.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Každý projekt začínám <strong>analýzou a konzultací zdarma</strong>. Podívám se na váš web, zhodnotím konkurenci v oboru a navrhnu strategii na míru. Bez závazků, bez zbytečných slibů – jen data a reálné možnosti.
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

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50/30">
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
                SEO je dlouhodobá strategie. První výsledky (zlepšení pozic, nárůst organické návštěvnosti) jsou viditelné typicky za 3–6 měsíců. Plný efekt se projeví za 6–12 měsíců. Záleží na konkurenci, stavu webu a zvoleném rozsahu optimalizace.
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
                SEO audit zahrnuje kompletní analýzu technického stavu webu (rychlost, indexace, chyby), on-page faktorů (titulky, meta popisy, nadpisy, obsah), off-page faktorů (zpětné odkazy) a analýzu konkurence. Výstupem je podrobná zpráva s konkrétními doporučeními a prioritami.
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
        <div className="absolute top-0 right-0 w-1/3 h-full yellow-gradient opacity-60 rounded-l-full transform translate-x-1/4"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pojďme váš web dostat na první stránku
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed mb-4">
              Napište mi a do 24 hodin se ozvum. Probereme váš web a navrhnu SEO strategii na míru – zdarma a nezávazně.
            </p>
            <p className="text-lg opacity-80 mb-10">
              Odpovídám do 24 hodin. Konzultace je zdarma.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/kontakt"
                className="inline-block bg-yellow-400 text-purple-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-center"
              >
                Chci SEO konzultaci zdarma
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Linklady.cz</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                SEO optimalizace, tvorba webů a AI automatizace.
                SEO konzultant pro firmy v Ústí nad Labem a Ústeckém kraji.
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
                <li><Link href="/tvorba-webu-bilina" className="text-gray-300 hover:text-yellow-400 transition-colors">Tvorba webů</Link></li>
                <li><Link href="/automatizace" className="text-gray-300 hover:text-yellow-400 transition-colors">Automatizace</Link></li>
                <li><Link href="/blog" className="text-gray-300 hover:text-yellow-400 transition-colors">Blog</Link></li>
                <li><Link href="/kontakt" className="text-gray-300 hover:text-yellow-400 transition-colors">Kontakt</Link></li>
              </ul>
            </div>

            <div className="bg-purple-800/50 p-8 rounded-2xl border border-purple-700/50">
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Pavla Zimmermannová</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>SEO konzultant Ústí nad Labem</p>
                <p>Vedena na FÚ Bílina</p>
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
