



import Navigation from '@/components/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import siteMetadata from '@/app/metadata.json'
import JsonLd from '@/components/json-ld'

export const metadata: Metadata = siteMetadata['/o-mne']

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://linklady.cz/o-mne/#webpage",
      url: "https://linklady.cz/o-mne",
      name: "O mně – Pavla Zimmermannová | Online marketing specialistka",
      description: "Online marketingu se věnuji od roku 2015. Specializuji se na SEO, content marketing, AI nástroje, automatizaci a technické úpravy webů.",
      isPartOf: { "@id": "https://linklady.cz/#website" },
      mainEntity: { "@id": "https://linklady.cz/#person" },
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
          name: "O mně",
          item: "https://linklady.cz/o-mne",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://linklady.cz/#person",
      name: "Pavla Zimmermannová",
      url: "https://linklady.cz/o-mne",
      image: {
        "@type": "ImageObject",
        url: "https://linklady.cz/profile.jpg",
        width: 400,
        height: 500,
      },
      jobTitle: "Online marketing specialistka",
      description: "V online marketingu působím od roku 2015. Specializuji se na SEO, content marketing, AI nástroje a automatizaci marketingu.",
      worksFor: { "@id": "https://linklady.cz/#business" },
      knowsAbout: [
        "SEO optimalizace",
        "AI agenti",
        "Automatizace marketingu",
        "Content marketing",
        "Lokální SEO",
        "Make.com",
        "Tvorba webových stránek",
      ],
      sameAs: [
        "https://www.linkedin.com/in/pavla-zimmermannov%C3%A1-750112ab/",
      ],
      alumniOf: [
        {
          "@type": "Organization",
          name: "Czechitas",
          url: "https://www.czechitas.cz/",
        },
      ],
    },
  ],
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={jsonLd} />
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
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Pavla Zimmermannová</h1>
              <p className="text-xl opacity-90 max-w-3xl mx-auto relative z-10">
                10 let v online marketingu. Od SEO strategií po AI automatizace.
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
                src="/profile.jpg"
                alt="Pavla Zimmermannová"
                width={400}
                height={500}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            
            <div className="prose prose-lg">
              <p className="text-lg text-gray-700 mb-6">
                V online marketingu působím od roku <strong>2015</strong>.
                Za tu dobu jsem prošla <Link href="/tvorba-webu-bilina" className="text-primary hover:underline">tvorbou webů</Link>, <strong><Link href="/seo-konzultant-usti-nad-labem" className="text-primary hover:underline">SEO</Link>,
                content marketingem i technickými úpravami</strong> – a dnes to všechno propojuji do funkčních strategií pro své klienty.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Propojuji <strong>data, strategii a kreativitu</strong>. Každý projekt pro mě začíná analýzou a končí měřitelnými výsledky.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Moji klienti chtějí růst – lokálně i na širším trhu. Dodávám jim nástroje od SEO a kampaní
                po <strong><Link href="/automatizace" className="text-primary hover:underline">AI automatizace</Link></strong>, které šetří čas a přinášejí reálný dopad na byznys.
              </p>

              <p className="text-lg text-gray-700 mb-8">
                Zakládám si na <strong>férové komunikaci</strong> a funkčních řešeních.
                Online se neustále mění – a já se měním s ním.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Development */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Neustálý rozvoj
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Vzdělávám se u <strong><a href="https://www.czechitas.cz/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Czechitas</a></strong>,
              sleduji komunitu <strong><a href="https://www.holkyzmarketingu.cz/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Holky z marketingu</a></strong>
              a čerpám know-how od expertů jako je <strong>agentura Luumo</strong>.
            </p>

            <p className="text-lg text-gray-700">
              V oboru, který se mění každý měsíc, je neustálý rozvoj nutnost – ne volba.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            V čem vynikám
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <Link href="/seo-konzultant-usti-nad-labem" className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary block">SEO</Link>
              <p className="text-gray-600">Kompletní SEO strategie a lokální dominance</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                </svg>
              </div>
              <Link href="/tvorba-webu-bilina" className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary block">Tvorba webů</Link>
              <p className="text-gray-600">Moderní weby s SEO od prvního řádku kódu</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </div>
              <Link href="/vibecoding" className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary block">AI agenti</Link>
              <p className="text-gray-600">Automatizace, která šetří desítky hodin měsíčně</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <Link href="/automatizace" className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary block">Automatizace</Link>
              <p className="text-gray-600">Make.com workflow pro bezchybný provoz</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/kontakt"
              className="inline-block bg-yellow-400 text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
            >
              Domluvit konzultaci
            </Link>
          </div>
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
                <li><Link href="/seo-konzultant-usti-nad-labem" className="text-gray-300 hover:text-yellow-400">SEO Ústí nad Labem</Link></li>
                <li><Link href="/tvorba-webu-bilina" className="text-gray-300 hover:text-yellow-400">Tvorba webů</Link></li>
                <li><Link href="/automatizace" className="text-gray-300 hover:text-yellow-400">Automatizace</Link></li>
                <li><Link href="/vibecoding" className="text-gray-300 hover:text-yellow-400">Vibecoding</Link></li>
                <li><Link href="/ebook" className="text-gray-300 hover:text-yellow-400">E-book</Link></li>
                <li><Link href="/blog" className="text-gray-300 hover:text-yellow-400">Blog</Link></li>
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



