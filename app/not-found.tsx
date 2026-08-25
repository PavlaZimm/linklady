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

      <section className="hero-gradient text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">404</h1>
          <p className="text-2xl md:text-3xl mb-4 opacity-90">
            Stránka nenalezena
          </p>
          <p className="text-lg opacity-80 mb-10 max-w-xl mx-auto">
            Tato stránka neexistuje nebo byla přesunuta. Zkuste se podívat na některou z&nbsp;těchto:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-block bg-yellow-400 text-purple-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300"
            >
              Zpět na úvod
            </Link>
            <Link
              href="/kontakt"
              className="inline-block border-2 border-white/80 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Kontaktujte mě
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Mohlo by vás zajímat</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/vibecoding" className="bg-purple-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Vibecoding</h3>
              <p className="text-gray-600 text-sm">Tvorba webů a aplikací pomocí AI</p>
            </Link>
            <Link href="/automatizace" className="bg-purple-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Automatizace</h3>
              <p className="text-gray-600 text-sm">Ušetřete hodiny práce každý týden</p>
            </Link>
            <Link href="/ai-agent" className="bg-purple-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-gray-900 mb-2">AI Agent</h3>
              <p className="text-gray-600 text-sm">Co to je a jak ho využít</p>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
