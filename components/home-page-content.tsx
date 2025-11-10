














'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import AnalyticsChart from '@/components/analytics-chart';
import Footer from '@/components/footer';

export default function HomePageContent() {
  const servicesRef = useScrollAnimation();
  const aboutRef = useScrollAnimation();
  const contactRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full yellow-gradient opacity-80 rounded-l-full transform translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Pomáhám firmám<br />
                <span className="text-yellow-400">růst online</span>
              </h1>
              <p className="text-xl md:text-2xl mb-6 opacity-90 leading-relaxed">
                SEO, AI asistenti, automatizace, data
              </p>
              <p className="text-lg mb-10 opacity-80 leading-relaxed">
                Vše co potřebujete pro chytrý marketing a růst vašeho byznysu
              </p>
              <p className="mb-10 opacity-70 text-base bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <span className="font-medium">Webové stránky procházejí úpravami</span><br />
                Kontaktujte mne na e-mailu:{' '}
                <a href="mailto:zimmermannovap@gmail.com" className="underline hover:no-underline font-medium text-yellow-300">
                  zimmermannovap@gmail.com
                </a>
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  href="/kontakt"
                  className="inline-block bg-yellow-400 text-purple-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-center"
                >
                  Získat konzultaci zdarma
                </Link>
                <Link
                  href="/o-mne"
                  className="inline-block border-2 border-white/80 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 backdrop-blur-sm text-center"
                >
                  Více o mně
                </Link>
              </div>
            </div>
            <div className="flex justify-center fade-in-up animate-delay-1">
              <AnalyticsChart />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50/30" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Moje <span className="text-purple-600">služby</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Komplexní online marketing řešení pro růst vašeho byznysu
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* SEO */}
            <div className="group service-card text-white p-8 rounded-2xl fade-in-up relative overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <div className="absolute inset-0">
                <Image
                  src="https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="SEO analýza a grafy"
                  fill
                  className="object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/95 to-purple-800/95"></div>
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform duration-300">
                  <svg className="w-10 h-10 text-purple-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-6">SEO</h3>
                <p className="text-base opacity-90 leading-relaxed">
                  Strategické SEO zahrnuje analýzu klíčových slov, optimalizaci meta tagů, strukturovaný obsah a chytré interní prolinkování. Zaměřuji se i na lokální SEO – zajišťuji firemní zápisy, lokální klíčová slova a mapové služby.
                </p>
              </div>
            </div>

            {/* PPC */}
            <div className="group service-card text-white p-8 rounded-2xl fade-in-up animate-delay-1 relative overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <div className="absolute inset-0">
                <Image
                  src="https://images.pexels.com/photos/6476563/pexels-photo-6476563.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="PPC kampaně a reklama"
                  fill
                  className="object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/95 to-purple-800/95"></div>
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform duration-300">
                  <svg className="w-10 h-10 text-purple-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-6">PPC</h3>
                <p className="text-base opacity-90 leading-relaxed">
                  Spravuji výkonné PPC kampaně v Google Ads, Skliku. Cílím na relevantní publikum, optimalizuji rozpočty a reklamy tak, aby přinášely maximální konverze a návratnost investic. Od strategie po reporting.
                </p>
              </div>
            </div>

            {/* AI agenti */}
            <div className="group service-card text-white p-8 rounded-2xl fade-in-up animate-delay-2 relative overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <div className="absolute inset-0">
                <Image
                  src="https://images.pexels.com/photos/8294566/pexels-photo-8294566.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="AI technologie a automatizace"
                  fill
                  className="object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/95 to-purple-800/95"></div>
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform duration-300">
                  <svg className="w-10 h-10 text-purple-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-6">AI agenti</h3>
                <p className="text-base opacity-90 leading-relaxed">
                  Nasazuji chytré AI nástroje pro analýzu webu, struktury a rychlosti. Vytvářím automatické sitemap soubory a zajišťuji, aby se váš web co nejlépe indexoval a zobrazoval ve vyhledávání.
                </p>
              </div>
            </div>

            {/* Automatizace */}
            <div className="group service-card text-white p-8 rounded-2xl fade-in-up animate-delay-3 relative overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <div className="absolute inset-0">
                <Image
                  src="https://images.pexels.com/photos/7279706/pexels-photo-7279706.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Automatizace marketingových procesů"
                  fill
                  className="object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/95 to-purple-800/95"></div>
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform duration-300">
                  <svg className="w-10 h-10 text-purple-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-6">Automatizace</h3>
                <p className="text-base opacity-90 leading-relaxed">
                  Automatizuji rutinní úkoly – od správy firemních zápisů po generování obsahu. Využívám chytré nástroje a skripty, které šetří čas, snižují náklady a zvyšují online dosah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white" ref={aboutRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-up order-2 lg:order-1">
              <div className="relative">
                <Image
                  src="https://www.linklady.cz/wp-content/uploads/2025/04/WhatsApp-Image-2024-09-29-at-12.39.08.jpeg"
                  alt="Pavla Zimmermannová"
                  width={500}
                  height={600}
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full opacity-20"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-600 rounded-full opacity-20"></div>
              </div>
            </div>
            <div className="fade-in-up animate-delay-1 order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                O <span className="text-purple-600">mně</span>
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p className="text-xl leading-relaxed">
                  Online marketingu a webovému prostředí se věnuji od roku <strong className="text-purple-600">2015</strong>. 
                  Začínala jsem s tvorbou webů a postupně se ponořila do <strong className="text-purple-600">SEO, PPC reklamy, 
                  content marketingu a technických úprav webů</strong>.
                </p>
                <p className="text-lg leading-relaxed">
                  Baví mě propojovat <strong className="text-purple-600">data, strategii a kreativitu</strong>, ať už při 
                  optimalizaci webů, nastavování kampaní nebo zavádění automatizací.
                </p>
                <p className="text-lg leading-relaxed mb-8">
                  Dnes pracuji s klienty, kteří chtějí růst – ať už lokálně, nebo na širším trhu. 
                  Využívám také moderní nástroje a <strong className="text-purple-600">umělou inteligenci</strong>, díky kterým 
                  jsou procesy efektivnější a výsledky měřitelnější.
                </p>
                <Link
                  href="/o-mne"
                  className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Více o mně →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-yellow-50/30" ref={contactRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
              Napište <span className="text-yellow-600">mi</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Pojďme si promluvit o vašem projektu a najít nejlepší řešení pro váš růst
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 fade-in-up animate-delay-1">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Jméno</label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 border-2 border-purple-100 rounded-2xl focus:border-purple-500 focus:outline-none transition-colors text-lg"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Příjmení</label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 border-2 border-purple-100 rounded-2xl focus:border-purple-500 focus:outline-none transition-colors text-lg"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">E-mail</label>
                <input
                  type="email"
                  className="w-full px-6 py-4 border-2 border-purple-100 rounded-2xl focus:border-purple-500 focus:outline-none transition-colors text-lg"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Telefon (nepovinné)</label>
                <input
                  type="tel"
                  className="w-full px-6 py-4 border-2 border-purple-100 rounded-2xl focus:border-purple-500 focus:outline-none transition-colors text-lg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">Zpráva</label>
                <textarea
                  rows={5}
                  className="w-full px-6 py-4 border-2 border-purple-100 rounded-2xl focus:border-purple-500 focus:outline-none transition-colors text-lg resize-none"
                  placeholder="Popište váš projekt nebo co potřebujete..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-yellow-400 text-purple-900 px-12 py-5 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  Odeslat zprávu
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}























