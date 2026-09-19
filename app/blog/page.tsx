import { restoredArticles } from '@/lib/restored-articles'
import Navigation from '@/components/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import JsonLd from '@/components/json-ld'
import SiteFooter from '@/components/site-footer'
import { getPageMetadata } from '@/lib/page-metadata'

export const metadata: Metadata = getPageMetadata('/blog')

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.linklady.cz/blog/#webpage",
      url: "https://www.linklady.cz/blog",
      name: "Blog – Marketing tipy, SEO trendy a AI nástroje",
      description: "Aktuální články o SEO strategiích, automatizaci a AI nástrojích pro online marketing.",
      isPartOf: { "@id": "https://www.linklady.cz/#website" },
      keywords: "SEO strategie, AI nástroje, automatizace procesů, lokální SEO",
      inLanguage: "cs",
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
          name: "Blog",
          item: "https://www.linklady.cz/blog",
        },
      ],
    },
  ],
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={jsonLd} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative">
            {/* Decorative circles */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-300 rounded-full opacity-30"></div>
            <div className="absolute top-1/2 -left-8 w-16 h-16 bg-yellow-300 rounded-full opacity-25"></div>
            <div className="absolute -top-8 right-4 w-20 h-20 bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Blog</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto relative z-10">
              Aktuální články o SEO, automatizaci a AI nástrojích pro online marketing
            </p>
          </div>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {restoredArticles.map(article => (
              <Link key={article.slug} href={`/${article.slug}/`} className="group block">
                <article className="rounded-2xl border border-purple-100 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-sm text-purple-700 font-semibold mb-3">{article.category}</p>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary">{article.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{article.description}</p>
                  <p className="text-sm text-gray-500">Pavla Zimmermannová · Aktualizováno <time dateTime="2026-09-19">19. 9. 2026</time></p>
                </article>
              </Link>
            ))}


            <Link href="/blog/webove-aplikace-priklady" className="group block">
              <article className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">Webové aplikace</span>
                    <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">Příklady z praxe</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    Webové aplikace: příklady a využití ve firmách
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Poptávkový systém, živá data, správa obsahu, e-shop i další nápady, kde aplikace nahrazuje ruční práci.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <time dateTime="2026-09-14">14. září 2026</time>
                    <span className="mx-2">|</span>
                    <span>Pavla Zimmermannová</span>
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/blog/jak-vytvorit-webovou-aplikaci" className="group block">
              <article className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">Webové aplikace</span>
                    <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">Praktický návod</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    Jak vytvořit webovou aplikaci krok za krokem
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Od prvního zadání přes prototyp a testování až po spuštění. Co musí být v zadání, jak vybrat způsob vývoje a čemu se vyhnout.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <time dateTime="2026-09-13">13. září 2026</time>
                    <span className="mx-2">|</span>
                    <span>Pavla Zimmermannová</span>
                  </div>
                </div>
              </article>
            </Link>

            {/* Article Card */}
            <Link href="/blog/prodej-firmy-strategicky-krok" className="group block">
              <article className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">Business</span>
                    <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">M&amp;A</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    Prodej firmy jako strategický krok: Jak zajistit kontinuitu a získat odpovídající cenu
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Prodej vybudovaného podniku je pro většinu majitelů jedním z nejdůležitějších životních rozhodnutí. Jak probíhá proces M&amp;A a na co si dát pozor?
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <time dateTime="2026-02-27">27. února 2026</time>
                    <span className="mx-2">|</span>
                    <span>Pavla Zimmermannová</span>
                  </div>
                </div>
              </article>
            </Link>

          </div>
        </div>
      </section>

      {/* Další krok pro čtenáře. Skutečný newsletter zatím není napojený,
          proto tu není formulář, který by e-mail nikam neodeslal. */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Chcete další praktické návody?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Začněte e-bookem o práci s AI, nebo mi napište, co chcete zlepšit na svém webu či ve firmě.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/ebook"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-primary px-7 py-3.5 font-semibold text-white transition-colors hover:bg-purple-800"
            >
              Prohlédnout e-book
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border-2 border-primary px-7 py-3 font-semibold text-primary transition-colors hover:bg-purple-50"
            >
              Probrat vlastní projekt
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
