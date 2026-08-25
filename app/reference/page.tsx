import Navigation from '@/components/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import siteMetadata from '@/app/metadata.json'
import JsonLd from '@/components/json-ld'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = siteMetadata['/reference']

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.linklady.cz/reference/#webpage",
      url: "https://www.linklady.cz/reference",
      name: "Reference: weby, které jsem postavila | Linklady.cz",
      description: "Weby pro výrobní firmu, autoškolu i spolek. U každého píšu, co jsem dělala a proč to tak je.",
      isPartOf: { "@id": "https://www.linklady.cz/#website" },
      inLanguage: "cs",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Úvod", item: "https://www.linklady.cz" },
        { "@type": "ListItem", position: 2, name: "Reference", item: "https://www.linklady.cz/reference" },
      ],
    },
  ],
}

type Reference = {
  nazev: string
  domena: string
  odkaz: string
  gradient: string
  textNaDlazdici: string
  barvaTextu: string
  popis: string
  co: string[]
  stitky: string[]
  barvaStitku: string
}

const reference: Reference[] = [
  {
    nazev: 'Vše pro minerály',
    domena: 'allforminerals.com',
    odkaz: 'https://allforminerals.com/',
    gradient: 'from-orange-400 to-amber-700',
    textNaDlazdici: 'allforminerals.com',
    barvaTextu: 'text-white',
    popis:
      'Česká rodinná firma vyrábí od roku 1994 vitríny, boxy a stojany pro sběratele minerálů, muzea a galerie. Web měla na Webnode a potřebovala katalog, který unese stovky produktů.',
    co: [
      'web na míru s katalogem, filtrováním a košíkem',
      'vlastní administrace, produkty si firma spravuje sama',
      'anglická verze pro zahraniční sběratele',
      'design systém odvozený z původní identity klienta',
    ],
    stitky: ['Web na míru', 'Katalog', 'Administrace'],
    barvaStitku: 'bg-orange-100 text-orange-800',
  },
  {
    nazev: 'Autoškola Jana',
    domena: 'autoskolajana.cz',
    odkaz: 'https://autoskolajana.cz/',
    gradient: 'from-purple-500 to-purple-800',
    textNaDlazdici: 'autoskolajana.cz',
    barvaTextu: 'text-white',
    popis:
      'Autoškola v Bílině s tradicí od roku 1992, skupiny A, B, C, D i E. Lokální služba, u které rozhoduje, jestli ji lidé najdou při hledání v okolí.',
    co: [
      'nový web postavený na rychlost a mobil',
      'lokální SEO na Bílinu a okolí',
      'struktura podle skupin řidičských oprávnění',
    ],
    stitky: ['Webdesign', 'Lokální SEO', 'Služby'],
    barvaStitku: 'bg-purple-100 text-purple-800',
  },
  {
    nazev: 'Český svaz žen Novosedlice',
    domena: 'ceskysvaznovosedlice.vercel.app',
    odkaz: 'https://ceskysvaznovosedlice.vercel.app/',
    gradient: 'from-yellow-400 to-yellow-600',
    textNaDlazdici: 'Svaz žen Novosedlice',
    barvaTextu: 'text-yellow-950',
    popis:
      'Spolek v Novosedlicích u Teplic pořádá akce pro obec. Původní web běžel na Webnode a nikdo z členek do něj neuměl zasáhnout, aniž by něco rozbil.',
    co: [
      'nový web na míru, texty i fotky převzaté z původního',
      'vlastní správa obsahu na adrese /sprava, bez databáze',
      'členky spolku si samy mění texty, kontakty i galerii',
      'psaný návod, aby se to zvládlo bez programátora',
    ],
    stitky: ['Web pro spolek', 'Vlastní správa', 'Bez WordPressu'],
    barvaStitku: 'bg-yellow-100 text-yellow-800',
  },
]

export default function ReferencePage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={jsonLd} />
      <Navigation />

      {/* Hero */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Weby, které jsem postavila
          </h1>
          <p className="text-xl text-purple-100 leading-relaxed">
            Výrobní firma, autoškola a spolek. Tři různá zadání, u kterých
            šlo pokaždé o něco jiného. U každého píšu, co jsem dělala.
          </p>
        </div>
      </section>

      {/* Reference */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {reference.map((r) => (
              <div
                key={r.domena}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
              >
                <div
                  className={`bg-gradient-to-br ${r.gradient} p-8 flex items-center justify-center h-40`}
                >
                  <span className={`text-2xl font-bold ${r.barvaTextu} text-center leading-tight`}>
                    {r.textNaDlazdici}
                  </span>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">{r.nazev}</h2>
                  <p className="text-gray-600 leading-relaxed mb-5">{r.popis}</p>

                  <p className="font-semibold text-gray-900 mb-2">Co jsem dělala</p>
                  <ul className="space-y-2 mb-6">
                    {r.co.map((polozka) => (
                      <li key={polozka} className="flex items-start gap-2 text-gray-600">
                        <svg
                          className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{polozka}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {r.stitky.map((s) => (
                      <span key={s} className={`${r.barvaStitku} text-sm px-3 py-1 rounded-full`}>
                        {s}
                      </span>
                    ))}
                  </div>

                  <a
                    href={r.odkaz}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                  >
                    Navštívit web
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co mají společné */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Co mají společné
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              <strong className="text-gray-900">Dva ze tří odešly z Webnode.</strong>{' '}
              Ne proto, že by to byla špatná platforma, ale proto, že na ní narazily
              na strop. Katalog se stovkami produktů se tam neudělá a spolek nechce
              platit měsíční poplatek za web, do kterého přispívá třikrát ročně.
            </p>
            <p>
              <strong className="text-gray-900">Obsah si spravují sami.</strong>{' '}
              U výrobní firmy i u spolku jsem stavěla vlastní administraci, aby se
              texty, fotky a produkty daly měnit bez programátora. U spolku dokonce
              bez databáze, aby nebylo co udržovat.
            </p>
            <p>
              <strong className="text-gray-900">Web není jen vzhled.</strong>{' '}
              U autoškoly rozhoduje, jestli ji člověk najde, když v Bílině hledá
              řidičák. U výrobce minerálů, jestli se k němu dostanou zahraniční
              sběratelé. Podle toho se web staví od začátku, ne až potom.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Chcete něco podobného?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Napište mi, o co jde. Konzultace je zdarma a nezávazná, a rovnou vám řeknu,
            jestli to má smysl dělat na míru, nebo vám stačí něco jednoduššího.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors"
            >
              Chci konzultaci zdarma
            </Link>
            <Link
              href="/tvorba-webu-bilina"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-900 transition-colors"
            >
              Jak tvorba webu probíhá
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
