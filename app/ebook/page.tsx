import Navigation from '@/components/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import siteMetadata from '@/app/metadata.json'

export const metadata: Metadata = siteMetadata['/ebook']

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://linklady.cz/ebook/#webpage",
      url: "https://linklady.cz/ebook",
      name: "E-book: Jak správně promptovat AI",
      description: "Praktický e-book o promptování AI – od základů po pokročilé techniky.",
      isPartOf: { "@id": "https://linklady.cz/#website" },
      inLanguage: "cs",
    },
    {
      "@type": "Product",
      "@id": "https://linklady.cz/ebook/#product",
      name: "Jak správně promptovat AI",
      description: "Praktický e-book o promptování AI. Naučte se psát efektivní prompty a získejte lepší výsledky z ChatGPT, Claude a dalších AI nástrojů.",
      image: "https://linklady.cz/profile.jpg",
      brand: {
        "@type": "Brand",
        name: "Linklady.cz",
      },
      author: { "@id": "https://linklady.cz/#person" },
      category: "E-book",
      offers: {
        "@type": "Offer",
        url: "https://linklady.cz/ebook",
        availability: "https://schema.org/InStock",
        priceCurrency: "CZK",
        price: "0",
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
          name: "E-book",
          item: "https://linklady.cz/ebook",
        },
      ],
    },
  ],
}

export default function EbookPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full yellow-gradient opacity-80 rounded-l-full transform translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-yellow-400/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-yellow-400/30">
                E-book
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Jak správně<br />
                <span className="text-yellow-400">promptovat AI</span>
              </h1>
              <p className="text-xl md:text-2xl mb-6 opacity-90 leading-relaxed">
                Praktický průvodce od základů po pokročilé techniky
              </p>
              <p className="text-lg mb-10 opacity-80 leading-relaxed">
                Naučte se z AI dostat maximum. Žádné obecné rady – konkrétní postupy, šablony a příklady, které hned použijete.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a
                  href="#koupit"
                  className="inline-block bg-yellow-400 text-purple-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-center"
                >
                  Chci e-book
                </a>
                <a
                  href="#co-se-naucite"
                  className="inline-block border-2 border-white/80 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 backdrop-blur-sm text-center"
                >
                  Co se naučíte
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              {/* E-book visual mockup */}
              <div className="relative">
                <div className="w-64 h-80 md:w-72 md:h-96 bg-white rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg p-8 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-1 bg-yellow-400 mb-4"></div>
                      <p className="text-yellow-400 text-sm font-semibold mb-2">LINKLADY.CZ</p>
                    </div>
                    <div>
                      <h2 className="text-white text-2xl md:text-3xl font-bold leading-tight mb-3">
                        Jak správně promptovat AI
                      </h2>
                      <p className="text-purple-200 text-sm">Pavla Zimmermannová</p>
                    </div>
                    <div className="w-full h-1 bg-yellow-400/30 rounded-full">
                      <div className="w-2/3 h-1 bg-yellow-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-purple-300 rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pro koho je e-book */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pro koho je <span className="text-purple-600">e-book</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ať už s AI teprve začínáte, nebo chcete vytěžit víc z nástrojů, které už používáte.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Podnikatelé a freelanceři</h3>
              <p className="text-gray-600 leading-relaxed">
                Ušetřete hodiny práce. Naučte se AI zadat úkoly tak, aby výstup byl použitelný na první pokus.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Marketéři a copywriteři</h3>
              <p className="text-gray-600 leading-relaxed">
                Tvořte lepší obsah rychleji. Prompty pro texty, sociální sítě, e-maily i reklamy.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Každý, kdo chce umět AI</h3>
              <p className="text-gray-600 leading-relaxed">
                Žádné technické znalosti nepotřebujete. E-book je psaný srozumitelně a s praktickými příklady.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Co se naučíte */}
      <section id="co-se-naucite" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Co se <span className="text-purple-600">naučíte</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-purple-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Základy promptování</h3>
                    <p className="text-gray-600">Jak AI přemýšlí a proč na formulaci záleží víc, než si myslíte.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-purple-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Struktura efektivního promptu</h3>
                    <p className="text-gray-600">Role, kontext, instrukce, formát – osvědčený framework pro spolehlivé výsledky.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-purple-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Pokročilé techniky</h3>
                    <p className="text-gray-600">Chain-of-thought, few-shot prompting, iterativní vylepšování a další metody.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-purple-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Hotové šablony promptů</h3>
                    <p className="text-gray-600">Kopíruj a použij – připravené prompty pro marketing, texty, analýzu dat a další.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-purple-900" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Časté chyby a jak se jim vyhnout</h3>
                    <p className="text-gray-600">Proč AI dává špatné odpovědi a jak to napravit jednou změnou v promptu.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-yellow-50/50 p-10 rounded-3xl">
              <div className="space-y-6">
                <div className="bg-white p-5 rounded-xl shadow-sm">
                  <p className="text-sm text-purple-600 font-semibold mb-2">Špatný prompt:</p>
                  <p className="text-gray-700 italic">&quot;Napiš mi text o marketingu.&quot;</p>
                </div>
                <div className="flex justify-center">
                  <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  </svg>
                </div>
                <div className="bg-white p-5 rounded-xl shadow-sm border-2 border-yellow-400">
                  <p className="text-sm text-yellow-600 font-semibold mb-2">Efektivní prompt:</p>
                  <p className="text-gray-700 italic">&quot;Jsi zkušený copywriter. Napiš článek na blog (800 slov) o 5 SEO trendech pro rok 2026. Cílová skupina: majitelé malých e-shopů. Tón: profesionální, ale přístupný. Každý trend uveď s konkrétním příkladem.&quot;</p>
                </div>
                <p className="text-center text-gray-500 text-sm">
                  Rozdíl? Kontext, role, formát a konkrétní zadání.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Buy Section */}
      <section id="koupit" className="py-24 bg-gradient-to-br from-purple-600 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-400 rounded-full opacity-10"></div>
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-purple-300 rounded-full opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <span className="inline-block bg-yellow-400/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-yellow-400/30">
              E-book ke stažení
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Začněte promptovat <span className="text-yellow-400">jako profík</span>
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed mb-10">
              Praktický e-book plný konkrétních příkladů, šablon a technik.
              Žádná teorie navíc – jen to, co funguje.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-lg mx-auto border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Jak správně promptovat AI</h3>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className="opacity-90">Kompletní průvodce promptováním</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className="opacity-90">Hotové šablony k okamžitému použití</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className="opacity-90">Pokročilé techniky a tipy</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-yellow-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  <span className="opacity-90">Příklady z praxe (marketing, texty, analýza)</span>
                </li>
              </ul>

              {/* TODO: Replace href with actual sales link */}
              <a
                href="#"
                className="block w-full bg-yellow-400 text-purple-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-center"
              >
                Koupit e-book
              </a>
              <p className="text-sm opacity-60 mt-4">
                Po kliknutí budete přesměrováni na platební stránku
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Author */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              O <span className="text-purple-600">autorce</span>
            </h2>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-yellow-50/30 p-8 md:p-12 rounded-3xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
                  <img
                    src="/profile.jpg"
                    alt="Pavla Zimmermannová"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Pavla Zimmermannová</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  V online marketingu působím od roku 2015. AI nástroje používám denně v praxi –
                  pro tvorbu obsahu, analýzu dat, automatizaci i strategické plánování.
                  V tomto e-booku sdílím postupy, které mi reálně šetří hodiny práce.
                </p>
                <Link
                  href="/o-mne"
                  className="text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                >
                  Více o mně →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Časté <span className="text-purple-600">dotazy</span>
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Pro jaké AI nástroje jsou prompty v e-booku?</h3>
              <p className="text-gray-600 leading-relaxed">
                Principy fungují univerzálně – pro ChatGPT, Claude, Gemini i další. E-book se zaměřuje na techniky, které platí napříč nástroji.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Potřebuji nějaké technické znalosti?</h3>
              <p className="text-gray-600 leading-relaxed">
                Ne. E-book je psaný srozumitelně a je určený pro každého, kdo chce s AI pracovat efektivněji. Žádné programování ani technické zázemí nepotřebujete.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">V jakém formátu e-book dostanu?</h3>
              <p className="text-gray-600 leading-relaxed">
                E-book je ve formátu PDF, který si přečtete na počítači, tabletu i mobilu. Po zaplacení ho dostanete okamžitě ke stažení.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Můžu se na něco zeptat po přečtení?</h3>
              <p className="text-gray-600 leading-relaxed">
                Samozřejmě! Napište mi na{' '}
                <a href="mailto:zimmermannovap@gmail.com" className="text-purple-600 hover:text-purple-700 font-semibold transition-colors">
                  zimmermannovap@gmail.com
                </a>{' '}
                a ráda poradím.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-yellow-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
              Přestaňte hádat,<br />
              <span className="text-yellow-600">začněte promptovat</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
              Investice do dovednosti, která vám ušetří desítky hodin měsíčně.
            </p>
            {/* TODO: Replace href with actual sales link */}
            <a
              href="#"
              className="inline-block bg-yellow-400 text-purple-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-center"
            >
              Koupit e-book
            </a>
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
                Online marketing, SEO, PPC kampaně a AI automatizace.
                Měřitelné výsledky pro firmy, které chtějí růst.
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
                <li><Link href="/ebook" className="text-gray-300 hover:text-yellow-400 transition-colors">E-book</Link></li>
                <li><Link href="/blog" className="text-gray-300 hover:text-yellow-400 transition-colors">Blog</Link></li>
                <li><Link href="/kontakt" className="text-gray-300 hover:text-yellow-400 transition-colors">Kontakt</Link></li>
              </ul>
            </div>

            <div className="bg-purple-800/50 p-8 rounded-2xl border border-purple-700/50">
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Pavla Zimmermannová</h4>
              <div className="space-y-2 text-sm text-gray-300">
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
