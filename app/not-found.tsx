import Navigation from '@/components/navigation'
import Link from 'next/link'
import SiteFooter from '@/components/site-footer'
import type { Metadata } from 'next'

// Bez tohohle dědila 404 titulek celého webu a v Analytics nešlo poznat,
// kolik lidí na ni spadlo.
export const metadata: Metadata = {
  // Bez suffixu, ten přidává šablona v layoutu („%s | Linklady.cz").
  title: 'Stránka nenalezena (404)',
  description:
    'Tahle stránka neexistuje nebo se přesunula. Zkuste úvod, nebo mi napište, co jste hledali.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main id="main-content">

      <header className="cf-page-hero">
        <div className="cf-wrap">
          <p className="cf-eyebrow">LINKLADY / SEO · WEBY · AI</p>
          <h1>404</h1>
          <p>
            Stránka nenalezena
          </p>
          <div className="cf-buttons"><Link href="/" className="cf-button">
              Zpět na úvod
            </Link><Link href="/kontakt" className="cf-button">
              Kontaktujte mě
            </Link></div>
        </div>
      </header>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Mohlo by vás zajímat</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/vibecoding" className="bg-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Vibecoding</h3>
              <p className="text-gray-600 text-sm">Tvorba webů a aplikací pomocí AI</p>
            </Link>
            <Link href="/automatizace" className="bg-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Automatizace</h3>
              <p className="text-gray-600 text-sm">Ušetřete hodiny práce každý týden</p>
            </Link>
            <Link href="/ai-agent" className="bg-blue-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">AI Agent</h3>
              <p className="text-gray-600 text-sm">Co to je a jak ho využít</p>
            </Link>
          </div>
        </div>
      </section>

      </main>
      <SiteFooter />
    </div>
  )
}
