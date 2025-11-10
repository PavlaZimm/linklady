

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import siteMetadata from '@/app/metadata.json'

export const metadata: Metadata = siteMetadata['/o-mne']

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center justify-center">
            <div className="text-center relative">
              {/* Decorative circles */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-300 rounded-full opacity-30"></div>
              <div className="absolute top-1/2 -left-8 w-16 h-16 bg-yellow-300 rounded-full opacity-25"></div>
              <div className="absolute -top-8 right-4 w-20 h-20 bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">O mně</h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto relative z-10">
                Online marketingu a webovému prostředí se věnuji od roku 2015
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-end">
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <Image
                src="https://www.linklady.cz/wp-content/uploads/2025/04/WhatsApp-Image-2024-09-29-at-12.39.08.jpeg"
                alt="Pavla Zimmermannová"
                width={400}
                height={500}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <div className="prose prose-lg">
              <p className="text-lg text-gray-700 mb-6">
                Online marketingu a webovému prostředí se věnuji od roku <strong>2015</strong>. 
                Začínala jsem s tvorbou webů a postupně se ponořila do <strong>SEO, PPC reklamy, 
                content marketingu a technických úprav webů</strong>.
              </p>
              
              <p className="text-lg text-gray-700 mb-6">
                Baví mě propojovat <strong>data, strategii a kreativitu</strong>, ať už při 
                optimalizaci webů, nastavování kampaní nebo zavádění automatizací.
              </p>
              
              <p className="text-lg text-gray-700 mb-6">
                Dnes pracuji s klienty, kteří chtějí růst – ať už lokálně, nebo na širším trhu. 
                Využívám také moderní nástroje a <strong>umělou inteligenci</strong>, díky kterým 
                jsou procesy efektivnější a výsledky měřitelnější.
              </p>
              
              <p className="text-lg text-gray-700 mb-8">
                Zakládám si na <strong>férové komunikaci</strong>, funkčních řešeních a přehlednosti. 
                Online je prostor, který se neustále mění – a to mě na něm baví nejvíc.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Development */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Vzdělávání a rozvoj
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Pravidelně se <strong>vzdělávám u <a href="https://www.czechitas.cz/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Czechitas</a></strong>, 
              inspiruji se u <strong><a href="https://www.holkyzmarketingu.cz/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Holek z marketingu</a></strong> 
              a sleduji aktuální trendy i know-how od dalších odborníků, například z <strong>agentury Luumo</strong>.
            </p>
            
            <p className="text-lg text-gray-700">
              Neustálý rozvoj je pro mne samozřejmostí.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Moje služby
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SEO</h3>
              <p className="text-gray-600">Strategické SEO a lokální optimalizace</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">PPC</h3>
              <p className="text-gray-600">Google Ads a Sklik kampaně</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI agenti</h3>
              <p className="text-gray-600">Chytré nástroje pro analýzu a optimalizaci</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Automatizace</h3>
              <p className="text-gray-600">Automatizace rutinních úkolů</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/kontakt"
              className="inline-block bg-yellow-400 text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
            >
              Získat konzultaci
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}



