import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
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

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-purple-50 rounded-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-primary mb-4">Napište mi</h2>
              <p className="text-gray-600">
                Vyplňte formulář a já se vám ozvu do 24 hodin
              </p>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    Jméno *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-primary focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Příjmení *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-primary focus:outline-none"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-primary focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefonní číslo
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Jaká služba vás zajímá?
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-primary focus:outline-none"
                >
                  <option value="">Vyberte službu</option>
                  <option value="seo">SEO optimalizace</option>
                  <option value="ppc">PPC kampaně</option>
                  <option value="ai">AI agenti</option>
                  <option value="automation">Automatizace</option>
                  <option value="consultation">Konzultace</option>
                  <option value="other">Jiné</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Zpráva
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-purple-200 rounded-lg focus:border-primary focus:outline-none"
                  placeholder="Popište váš projekt nebo co potřebujete..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-yellow-400 text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
                >
                  Odeslat zprávu
                </button>
              </div>
            </form>
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

      <Footer />
    </div>
  )
}
