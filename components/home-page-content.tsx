














'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import AnalyticsChart from '@/components/analytics-chart';

export default function HomePageContent() {
  const servicesRef = useScrollAnimation();
  const aboutRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full yellow-gradient opacity-80 rounded-l-full transform translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Vaše firma na<br />
                <span className="text-yellow-400">prvních místech</span>
              </h1>
              <p className="text-xl md:text-2xl mb-6 opacity-90 leading-relaxed">
                SEO strategie, PPC kampaně, AI automatizace
              </p>
              <p className="text-lg mb-10 opacity-80 leading-relaxed">
                10 let zkušeností v online marketingu. Měřitelné výsledky, ne prázdné sliby.
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
              Co pro vás <span className="text-purple-600">udělám</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Od strategie po realizaci. Kompletní online marketing pod jednou střechou.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* SEO & PPC */}
            <div className="group service-card text-white p-8 rounded-2xl fade-in-up relative overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <div className="absolute inset-0">
                <Image
                  src="https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="SEO a PPC analýza dat"
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
                <h3 className="text-2xl font-bold mb-6">SEO & PPC</h3>
                <p className="text-base opacity-90 leading-relaxed">
                  Víc zákazníků z Googlu i Seznamu. Kompletní SEO od technického auditu přes keyword strategii po lokální viditelnost. PPC kampaně v Google Ads a Skliku stavím tak, aby každá koruna přinesla maximum.
                </p>
              </div>
            </div>

            {/* Tvorba webu */}
            <div className="group service-card text-white p-8 rounded-2xl fade-in-up animate-delay-1 relative overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <div className="absolute inset-0">
                <Image
                  src="https://images.pexels.com/photos/6476563/pexels-photo-6476563.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Tvorba moderních webových stránek"
                  fill
                  className="object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/95 to-purple-800/95"></div>
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform duration-300">
                  <svg className="w-10 h-10 text-purple-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-6">Tvorba webu</h3>
                <p className="text-base opacity-90 leading-relaxed">
                  Weby, které prodávají. Rychlé, responzivní a optimalizované pro konverze. Každý web stavím s myšlenkou na SEO od prvního řádku kódu – žádné kompromisy.
                </p>
              </div>
            </div>

            {/* Video střih */}
            <div className="group service-card text-white p-8 rounded-2xl fade-in-up animate-delay-2 relative overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <div className="absolute inset-0">
                <Image
                  src="https://images.pexels.com/photos/7279706/pexels-photo-7279706.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Profesionální video střih"
                  fill
                  className="object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/95 to-purple-800/95"></div>
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform duration-300">
                  <svg className="w-10 h-10 text-purple-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-6">Video střih</h3>
                <p className="text-base opacity-90 leading-relaxed">
                  Obsah, který zaujme na první sekundu. Reels, stories, reklamní spoty i firemní prezentace. Hotový obsah připravený k publikaci – vy řešíte byznys, já video.
                </p>
              </div>
            </div>

            {/* AI agenti */}
            <div className="group service-card text-white p-8 rounded-2xl fade-in-up animate-delay-3 relative overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <div className="absolute inset-0">
                <Image
                  src="https://images.pexels.com/photos/8294566/pexels-photo-8294566.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="AI technologie pro marketing"
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
                  AI tam, kde to dává smysl a šetří peníze. Chatboti pro zákaznickou podporu, analýza dat, generování obsahu i monitoring konkurence. Ušetříte desítky hodin měsíčně.
                </p>
              </div>
            </div>

            {/* Automatizace & Make */}
            <div className="group service-card text-white p-8 rounded-2xl fade-in-up animate-delay-4 relative overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <div className="absolute inset-0">
                <Image
                  src="https://images.pexels.com/photos/8294566/pexels-photo-8294566.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Automatizace a Make.com"
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
                <h3 className="text-2xl font-bold mb-6">Automatizace & Make</h3>
                <p className="text-base opacity-90 leading-relaxed">
                  Konec rutiny. Propojuji nástroje přes Make.com, automatizuji reporting, e-mailové sekvence i publikování obsahu. Váš marketing poběží i když spíte.
                </p>
              </div>
            </div>

            {/* Content marketing */}
            <div className="group service-card text-white p-8 rounded-2xl fade-in-up animate-delay-4 relative overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <div className="absolute inset-0">
                <Image
                  src="https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Content marketing a strategie"
                  fill
                  className="object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/95 to-purple-800/95"></div>
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform duration-300">
                  <svg className="w-10 h-10 text-purple-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-6">Content marketing</h3>
                <p className="text-base opacity-90 leading-relaxed">
                  Obsah, který přivádí zákazníky a buduje důvěru. Blog, sociální sítě, newsletter – vše s jasnou strategií a měřitelnými výsledky.
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
                  src="/profile.jpg"
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
                Pavla <span className="text-purple-600">Zimmermannová</span>
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p className="text-xl leading-relaxed">
                  V online marketingu působím od roku <strong className="text-purple-600">2015</strong>.
                  Za tu dobu jsem prošla tvorbou webů, <strong className="text-purple-600">SEO, PPC reklamou,
                  content marketingem i technickými úpravami</strong> – a dnes to všechno propojuji do funkčních strategií.
                </p>
                <p className="text-lg leading-relaxed">
                  Pracuji na průsečíku <strong className="text-purple-600">dat, strategie a kreativity</strong>. Neříkám, co by se mělo dělat – dělám to.
                </p>
                <p className="text-lg leading-relaxed mb-8">
                  Moji klienti chtějí růst a já jim k tomu dodávám nástroje – od SEO a kampaní
                  po <strong className="text-purple-600">AI automatizace</strong>, které šetří čas a přinášejí měřitelné výsledky.
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-yellow-50/30" ref={ctaRef}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
              Připraveni <span className="text-yellow-600">růst?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
              Řekněte mi o svém projektu a já vám ukážu, co pro vás online marketing dokáže. Konzultace je zdarma a nezávazná.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/kontakt"
                className="inline-block bg-yellow-400 text-purple-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl text-center"
              >
                Kontaktujte mě
              </Link>
              <a
                href="mailto:zimmermannovap@gmail.com"
                className="inline-block border-2 border-purple-600 text-purple-900 px-10 py-5 rounded-full font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300 text-center"
              >
                zimmermannovap@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">Linklady.cz</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Online marketing, SEO, PPC kampaně a AI automatizace.
                Měřitelné výsledky pro firmy, které chtějí růst.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/pavla-zimmermannov%C3%A1-750112ab/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Rychlé odkazy</h4>
              <ul className="space-y-3">
                <li><Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors">Úvod</Link></li>
                <li><Link href="/o-mne" className="text-gray-300 hover:text-yellow-400 transition-colors">O mně</Link></li>
                <li><Link href="/blog" className="text-gray-300 hover:text-yellow-400 transition-colors">Blog</Link></li>
                <li><Link href="/kontakt" className="text-gray-300 hover:text-yellow-400 transition-colors">Kontakt</Link></li>
              </ul>
            </div>
            
            <div className="bg-purple-800/50 p-8 rounded-2xl border border-purple-700/50">
              <h4 className="text-lg font-semibold mb-4 text-yellow-400">Pavla Zimmermannová</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Vedena na FÚ Bílina</p>
                <p>IČO: 04352041</p>
                <p>
                  E-mail:{' '}
                  <a href="mailto:zimmermannovap@gmail.com" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                    zimmermannovap@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2026 Linklady.cz – Všechna práva vyhrazena
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}























