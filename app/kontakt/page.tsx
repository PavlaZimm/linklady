import Navigation from '@/components/navigation'
import type { Metadata } from 'next'
import siteMetadata from '@/app/metadata.json'

export const metadata: Metadata = siteMetadata['/kontakt']

export default function ContactPage() {
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

            <h1 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Kontakt</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto relative z-10">
              Napište mi pro konzultaci ohledně SEO, PPC kampaní, AI asistentů nebo automatizace
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-purple-50 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Napište mi</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Ráda vám pomohu s online marketingem, SEO, PPC kampaněmi nebo automatizací.
            </p>
            <a
              href="mailto:zimmermannovap@gmail.com"
              className="inline-flex items-center bg-yellow-400 text-purple-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors text-lg"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              zimmermannovap@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">E-mail</h3>
              <p className="text-gray-600">
                <a href="mailto:zimmermannovap@gmail.com" className="hover:text-primary">
                  zimmermannovap@gmail.com
                </a>
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sídlo</h3>
              <p className="text-gray-600">
                Vedena na FÚ Bílina<br />
                IČO: 04352041
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Specializace</h3>
              <p className="text-gray-600">
                SEO, PPC, AI nástroje<br />
                a automatizace
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Často kladené otázky
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Jak dlouho trvá SEO optimalizace?
              </h3>
              <p className="text-gray-600">
                SEO je dlouhodobý proces. První výsledky jsou viditelné obvykle za 3-6 měsíců, 
                ale plný efekt se projeví za 6-12 měsíců v závislosti na konkurenci a stavu webu.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Kolik stojí PPC kampaň?
              </h3>
              <p className="text-gray-600">
                Cena závisí na rozpočtu, který chcete investovat do reklam, plus poplatek za správu. 
                Minimální doporučený rozpočet je 10 000 Kč měsíčně pro efektivní kampaň.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Jak fungují AI agenti?
              </h3>
              <p className="text-gray-600">
                AI agenti automatizují analýzu webu, sledování pozic, generování reportů a další 
                rutinní úkoly. Šetří čas a poskytují přesnější data než ruční zpracování.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <a href="/" className="text-lg font-semibold hover:text-yellow-400">
                Home
              </a>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
                  </svg>
                </a>
              </div>
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
            © 2025 – linklady.cz.
          </div>
        </div>
      </footer>
    </div>
  )
}
