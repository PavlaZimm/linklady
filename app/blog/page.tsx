import Navigation from '@/components/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import siteMetadata from '@/app/metadata.json'
import JsonLd from '@/components/json-ld'

export const metadata: Metadata = siteMetadata['/blog']

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://linklady.cz/blog/#webpage",
      url: "https://linklady.cz/blog",
      name: "Blog – Marketing tipy, SEO trendy a AI nástroje",
      description: "Aktuální články o SEO strategiích, automatizaci a AI nástrojích pro online marketing.",
      isPartOf: { "@id": "https://linklady.cz/#website" },
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
          item: "https://linklady.cz",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://linklady.cz/blog",
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

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nechte si poslat novinky
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Buďte první, kdo se dozví o nových článcích a tipech z online marketingu.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Váš e-mail"
              className="flex-1 px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-primary focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Odebírat
            </button>
          </form>
        </div>
      </section>

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
                <li><Link href="/ebook" className="text-gray-300 hover:text-yellow-400">E-book</Link></li>
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
