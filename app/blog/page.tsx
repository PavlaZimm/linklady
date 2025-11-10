import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import type { Metadata } from 'next'
import siteMetadata from '@/app/metadata.json'

export const metadata: Metadata = siteMetadata['/blog']

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
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
              Aktuální články o SEO, PPC reklamě, automatizaci a AI nástrojích pro online marketing
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-purple-50 rounded-lg p-12">
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
              </svg>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Blog se připravuje
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
              Pracuji na zajímavých článcích o SEO, PPC reklamě, AI nástrojích a automatizaci. 
              Brzy zde najdete praktické tipy a trendy z online marketingu.
            </p>
            
            <div className="space-y-4 text-left max-w-md mx-auto">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span className="text-gray-700">SEO strategie a optimalizace</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span className="text-gray-700">PPC kampaně a jejich řízení</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span className="text-gray-700">AI nástroje v marketingu</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span className="text-gray-700">Automatizace procesů</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span className="text-gray-700">Lokální SEO tipy</span>
              </div>
            </div>
            
            <div className="mt-8">
              <Link
                href="/kontakt"
                className="inline-block bg-yellow-400 text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
              >
                Zeptejte se na konzultaci
              </Link>
            </div>
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

      <Footer />
    </div>
  )
}
