import Navigation from '@/components/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import siteMetadata from '@/app/metadata.json'

export const metadata: Metadata = siteMetadata['/tvorba-webu-bilina']

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://linklady.cz/tvorba-webu-bilina/#service",
      name: "Tvorba webových stránek Bílina",
      description: "Profesionální tvorba webových stránek v Bílině a okolí. Moderní weby optimalizované pro vyhledávače, rychlé a responzivní. SEO od prvního řádku kódu.",
      provider: { "@id": "https://linklady.cz/#business" },
      areaServed: [
        {
          "@type": "City",
          name: "Bílina",
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
          name: "Most",
        },
        {
          "@type": "City",
          name: "Ústí nad Labem",
        },
      ],
      serviceType: "Tvorba webových stránek",
      offers: {
        "@type": "Offer",
        price: "9000",
        priceCurrency: "CZK",
        availability: "https://schema.org/InStock",
        description: "Cena od 9 000 Kč za jednoduchý web",
        areaServed: {
          "@type": "Country",
          name: "Česká republika",
        },
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://linklady.cz/#localbusiness",
      name: "Linklady.cz – Tvorba webových stránek Bílina",
      url: "https://linklady.cz/tvorba-webu-bilina",
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
        latitude: "50.5483",
        longitude: "13.7756",
      },
      areaServed: [
        { "@type": "City", name: "Bílina" },
        { "@type": "City", name: "Teplice" },
        { "@type": "City", name: "Most" },
        { "@type": "City", name: "Ústí nad Labem" },
        { "@type": "City", name: "Duchcov" },
        { "@type": "City", name: "Litvínov" },
      ],
      priceRange: "$$",
      knowsAbout: [
        "Tvorba webových stránek",
        "SEO optimalizace",
        "Webdesign",
        "Responzivní weby",
        "E-shopy",
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
          name: "Tvorba webových stránek Bílina",
          item: "https://linklady.cz/tvorba-webu-bilina",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Kolik stojí tvorba webových stránek v Bílině?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cena závisí na rozsahu projektu. Jednoduchý web (vizitka) začíná od 9 000 Kč, firemní web s více stránkami od 25 000 Kč a e-shop od 40 000 Kč. Každý projekt oceňuji individuálně po úvodní konzultaci zdarma.",
          },
        },
        {
          "@type": "Question",
          name: "Jak dlouho trvá vytvoření webových stránek?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jednoduchý web (vizitka) je hotový za 1–2 týdny. Firemní web s více stránkami trvá 2–4 týdny. E-shop nebo složitější projekt 4–8 týdnů. Záleží na rozsahu a rychlosti dodání podkladů.",
          },
        },
        {
          "@type": "Question",
          name: "Budou moje webové stránky optimalizované pro mobily?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ano, každý web stavím jako responzivní – perfektně se zobrazí na mobilu, tabletu i počítači. Responzivní design je dnes základ a Google ho vyžaduje pro dobré pozice ve vyhledávání.",
          },
        },
        {
          "@type": "Question",
          name: "Zahrnuje tvorba webu i SEO optimalizaci?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ano. SEO je součástí každého webu, který vytvořím. Optimalizuji rychlost načítání, strukturu URL, meta tagy, nadpisy, obrázky i strukturovaná data. Web bude připravený na to, aby ho Google indexoval a zobrazoval ve výsledcích vyhledávání.",
          },
        },
        {
          "@type": "Question",
          name: "Děláte weby i pro firmy mimo Bílinu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Samozřejmě. Sídlím v Bílině, ale pracuji s klienty z celého Ústeckého kraje i celé České republiky. Většinu komunikace řešíme online, takže vzdálenost není překážka.",
          },
        },
      ],
    },
  ],
}

export default function TvorbaWebuBilinaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full yellow-gradient opacity-80 rounded-l-full transform translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm opacity-80">
              <ol className="flex items-center space-x-2">
                <li><Link href="/" className="hover:text-yellow-400">Úvod</Link></li>
                <li><span>/</span></li>
                <li className="text-yellow-400">Tvorba webových stránek Bílina</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Tvorba webových stránek<br />
              <span className="text-yellow-400">Bílina</span> a okolí
            </h1>
            <p className="text-xl md:text-2xl mb-6 opacity-90 leading-relaxed">
              Moderní weby, které přivádí zákazníky. S SEO od prvního řádku kódu.
            </p>
            <p className="text-lg mb-10 opacity-80 leading-relaxed">
              Profesionální tvorba webových stránek pro firmy a podnikatele v Bílině, Teplicích, Mostě a celém Ústeckém kraji. Rychlé, responzivní a optimalizované pro vyhledávače.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/kontakt"
                className="inline-block bg-yellow-400 text-purple-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-center"
              >
                Chci konzultaci zdarma
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
                <span>SEO v ceně</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <span>Z Bíliny</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Co získáte */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Co získáte s <span className="text-purple-600">novým webem</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Každý web stavím tak, aby vypadal skvěle, načítal se rychle a přiváděl vám zákazníky z Googlu i Seznamu.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Responzivní design */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6h18V4H2v13H0v3h14v-3H4V6zm20 2h-8v12h8V8zm-2 9h-4v-7h4v7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Responzivní design</h3>
              <p className="text-gray-600 leading-relaxed">
                Web se perfektně zobrazí na mobilu, tabletu i počítači. Přes 70 % návštěvníků dnes přichází z mobilu – váš web na to bude připravený.
              </p>
            </div>

            {/* SEO optimalizace */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">SEO od základu</h3>
              <p className="text-gray-600 leading-relaxed">
                Každý web stavím s myšlenkou na SEO. Správná struktura, rychlost načítání, meta tagy, strukturovaná data – vše pro lepší pozice ve vyhledávačích.
              </p>
            </div>

            {/* Rychlost */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44zm-9.79 6.84a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rychlost načítání</h3>
              <p className="text-gray-600 leading-relaxed">
                Používám moderní technologie (Next.js, React) pro bleskově rychlé weby. Rychlý web = lepší pozice v Googlu a více konverzí.
              </p>
            </div>

            {/* Moderní technologie */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Moderní technologie</h3>
              <p className="text-gray-600 leading-relaxed">
                Žádné zastaralé šablony. Stavím na míru v Next.js a React – výsledek je web, který je rychlý, bezpečný a snadno rozšiřitelný.
              </p>
            </div>

            {/* Správa obsahu */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Snadná správa</h3>
              <p className="text-gray-600 leading-relaxed">
                Web navrhnu tak, abyste mohli snadno upravovat obsah. Nebo se o správu postarám za vás – jak vám to vyhovuje.
              </p>
            </div>

            {/* Osobní přístup */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Osobní přístup</h3>
              <p className="text-gray-600 leading-relaxed">
                Nejsem velká agentura – jsem jeden člověk, který se vám věnuje osobně. Komunikujeme přímo, bez prostředníků. Jsem z Bíliny, takže se můžeme potkat i osobně.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ukázky prací */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ukázky <span className="text-purple-600">mé práce</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Podívejte se na weby, které jsem vytvořila pro lokální firmy a podnikatele.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* autoskolajana.cz */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-8 flex items-center justify-center h-48">
                <span className="text-3xl font-bold text-white">autoskolajana.cz</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Autoškola Jana</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Web pro lokální autoškolu. Přehledná prezentace služeb, ceník, online přihláška a optimalizace pro lokální vyhledávání. Web přivádí nové žáky z Googlu.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">Webdesign</span>
                  <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">SEO</span>
                  <span className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">Lokální byznys</span>
                </div>
                <a
                  href="https://autoskolajana.cz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                >
                  Navštívit web
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* bilinsko.cz */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-8 flex items-center justify-center h-48">
                <span className="text-3xl font-bold text-purple-900">bilinsko.cz</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Bílinsko.cz</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Informační portál pro region Bílina a okolí. Přehled událostí, aktualit a zajímavostí z Bílinska. Web slouží místní komunitě a podporuje lokální dění.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-yellow-100 text-yellow-700 text-sm px-3 py-1 rounded-full">Portál</span>
                  <span className="bg-yellow-100 text-yellow-700 text-sm px-3 py-1 rounded-full">Bílina</span>
                  <span className="bg-yellow-100 text-yellow-700 text-sm px-3 py-1 rounded-full">Lokální SEO</span>
                </div>
                <a
                  href="https://bilinsko.cz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                >
                  Navštívit web
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-16 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Chcete web, který vám přivede zákazníky?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Napište mi a do 24 hodin se ozvum. Probereme váš projekt a navrhnu řešení na míru – zdarma a nezávazně.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-block bg-yellow-400 text-purple-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-xl text-center"
            >
              Domluvit schůzku
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

      {/* Jak to probíhá – detailní postup */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Jak probíhá <span className="text-purple-600">spolupráce</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Celý proces je jednoduchý a transparentní. Vždy víte, co se děje a co bude následovat.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Krok 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Úvodní schůzka – online nebo osobně</h3>
                <p className="text-gray-600 leading-relaxed">
                  Domluvíme se na schůzce – můžeme se sejít osobně v Bílině nebo okolí, nebo si zavoláme přes Google Meet / Zoom. Probereme vaše potřeby, představy, cíle a rozpočet. Schůzka je <strong className="text-purple-600">zdarma a nezávazná</strong>.
                </p>
              </div>
            </div>

            {/* Krok 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cenová nabídka a plán</h3>
                <p className="text-gray-600 leading-relaxed">
                  Na základě schůzky připravím cenovou nabídku a podrobný plán projektu. Dozvíte se přesně co, kdy a za kolik dostanete. Žádná skrytá překvapení.
                </p>
              </div>
            </div>

            {/* Krok 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Grafický návrh</h3>
                <p className="text-gray-600 leading-relaxed">
                  Připravím grafický návrh webu – vzhled, rozvržení, barvy, fonty. Vše konzultuji s vámi a upravuji, dokud nebudete spokojení. Odsouhlasíte finální podobu.
                </p>
              </div>
            </div>

            {/* Krok 4 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">4</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Vývoj a kódování</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nakóduji web v moderních technologiích. SEO optimalizace, rychlost načítání a responzivní design jsou součástí od začátku. Průběžně vám ukazuji postup.
                </p>
              </div>
            </div>

            {/* Krok 5 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">5</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Testování a zpětná vazba</h3>
                <p className="text-gray-600 leading-relaxed">
                  Otestujeme web na všech zařízeních. Projdeme společně každou stránku, uděláme úpravy. Vy schválíte finální verzi.
                </p>
              </div>
            </div>

            {/* Krok 6 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-yellow-400 text-purple-900 rounded-full flex items-center justify-center text-xl font-bold">6</div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Spuštění a podpora</h3>
                <p className="text-gray-600 leading-relaxed">
                  Web spustíme na vaší doméně. Nastavím Google Analytics, Search Console a sledování pozic. Po spuštění jsem vám k dispozici pro úpravy a podporu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pro koho */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-yellow-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pro koho <span className="text-purple-600">tvořím weby</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Živnostníci a OSVČ</h3>
              <p className="text-gray-600 leading-relaxed">
                Potřebujete web, který vás představí a přivede zákazníky? Vytvořím profesionální prezentaci, která vám bude dělat reklamu 24/7.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Malé a střední firmy</h3>
              <p className="text-gray-600 leading-relaxed">
                Firemní web s jasnou strukturou, představením služeb a kontaktním formulářem. Vše optimalizované pro lokální vyhledávání v Bílině a okolí.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">E-shopy a služby</h3>
              <p className="text-gray-600 leading-relaxed">
                Online prodej nebo rezervační systém? Postavím funkční řešení, které vám pomůže prodávat online a ušetří čas s administrací.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Často kladené otázky o tvorbě webů v Bílině
          </h2>

          <div className="space-y-6">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Kolik stojí tvorba webových stránek v Bílině?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Cena závisí na rozsahu projektu. Jednoduchý web (vizitka) začíná od 9 000 Kč, firemní web s více stránkami od 25 000 Kč a e-shop od 40 000 Kč. Každý projekt oceňuji individuálně po úvodní konzultaci zdarma.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Jak dlouho trvá vytvoření webových stránek?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Jednoduchý web (vizitka) je hotový za 1–2 týdny. Firemní web s více stránkami trvá 2–4 týdny. E-shop nebo složitější projekt 4–8 týdnů. Záleží na rozsahu a rychlosti dodání podkladů.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Budou moje webové stránky optimalizované pro mobily?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ano, každý web stavím jako responzivní – perfektně se zobrazí na mobilu, tabletu i počítači. Responzivní design je dnes základ a Google ho vyžaduje pro dobré pozice ve vyhledávání.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Zahrnuje tvorba webu i SEO optimalizaci?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ano. SEO je součástí každého webu, který vytvořím. Optimalizuji rychlost načítání, strukturu URL, meta tagy, nadpisy, obrázky i strukturovaná data. Web bude připravený na to, aby ho Google indexoval a zobrazoval ve výsledcích vyhledávání.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Děláte weby i pro firmy mimo Bílinu?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Samozřejmě. Sídlím v Bílině, ale pracuji s klienty z celého Ústeckého kraje i celé České republiky. Většinu komunikace řešíme online, takže vzdálenost není překážka.
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
              Připraveni na nový web?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed mb-4">
              Pojďme si nezávazně promluvit o vašem projektu. Setkáme se online nebo osobně v Bílině – jak vám to vyhovuje.
            </p>
            <p className="text-lg opacity-80 mb-10">
              Odpovídám do 24 hodin. Konzultace je zdarma.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/kontakt"
                className="inline-block bg-yellow-400 text-purple-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-center"
              >
                Chci konzultaci zdarma
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
                <span>Osobní schůzka v Bílině</span>
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
                Tvorba webových stránek, SEO, PPC kampaně a AI automatizace.
                Profesionální weby pro firmy v Bílině a okolí.
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
                <li><Link href="/blog" className="text-gray-300 hover:text-yellow-400 transition-colors">Blog</Link></li>
                <li><Link href="/kontakt" className="text-gray-300 hover:text-yellow-400 transition-colors">Kontakt</Link></li>
              </ul>
            </div>

            <div className="bg-purple-800/50 p-8 rounded-2xl border border-purple-700/50">
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Pavla Zimmermannová</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Tvorba webových stránek Bílina</p>
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
