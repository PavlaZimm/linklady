import Navigation from '@/components/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import siteMetadata from '@/app/metadata.json'
import JsonLd from '@/components/json-ld'

export const metadata: Metadata = siteMetadata['/kontakt']

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://linklady.cz/kontakt/#webpage",
      url: "https://linklady.cz/kontakt",
      name: "Kontakt – Získejte konzultaci zdarma | Linklady.cz",
      description: "Kontaktujte Pavlu Zimmermannovou pro konzultaci ohledně SEO, AI asistentů nebo automatizace.",
      isPartOf: { "@id": "https://linklady.cz/#website" },
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
          name: "Kontakt",
          item: "https://linklady.cz/kontakt",
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://linklady.cz/#business",
      name: "Linklady.cz – Pavla Zimmermannová",
      url: "https://linklady.cz",
      email: "zimmermannovap@gmail.com",
      taxID: "04352041",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bílina",
        addressCountry: "CZ",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "zimmermannovap@gmail.com",
        availableLanguage: ["cs", "en"],
        areaServed: {
          "@type": "Country",
          name: "Česká republika",
        },
      },
      founder: { "@id": "https://linklady.cz/#person" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Jak dlouho trvá SEO optimalizace?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "SEO je dlouhodobý proces. První výsledky jsou viditelné obvykle za 3-6 měsíců, ale plný efekt se projeví za 6-12 měsíců v závislosti na konkurenci a stavu webu.",
          },
        },
        {
          "@type": "Question",
          name: "Co všechno se dá automatizovat?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Automatizovat se dá téměř cokoliv – od e-mailových sekvencí, přes CRM a fakturaci, až po publikování na sociální sítě. Používám nástroje jako Make.com, n8n nebo Zapier.",
          },
        },
        {
          "@type": "Question",
          name: "Jak fungují AI agenti?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI agenti automatizují analýzu webu, sledování pozic, generování reportů a další rutinní úkoly. Šetří čas a poskytují přesnější data než ruční zpracování.",
          },
        },
      ],
    },
  ],
}

export default function ContactPage() {
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

            <h1 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Kontakt</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto relative z-10">
              Ráda se dozvím víc o vašem projektu. Konzultace je zdarma a nezávazná.
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
              Napište mi a do 24 hodin se vám ozvu. Společně najdeme cestu, jak váš byznys posunout online.
            </p>
            <a
              href="mailto:zimmermannovap@gmail.com"
              className="inline-flex items-center bg-yellow-400 text-purple-900 px-5 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors text-base sm:text-lg"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
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
                SEO, AI nástroje<br />
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
                <Link href="/seo-konzultant-usti-nad-labem" className="text-primary font-semibold hover:underline">SEO</Link> je dlouhodobý proces. První výsledky jsou viditelné obvykle za 3-6 měsíců,
                ale plný efekt se projeví za 6-12 měsíců v závislosti na konkurenci a stavu webu.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Co všechno se dá automatizovat?
              </h3>
              <p className="text-gray-600">
                <Link href="/automatizace" className="text-primary font-semibold hover:underline">Automatizovat</Link> se dá téměř cokoliv – od e-mailových sekvencí, přes CRM a fakturaci,
                až po publikování na sociální sítě. Používám nástroje jako Make.com, n8n nebo Zapier.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Jak fungují AI agenti?
              </h3>
              <p className="text-gray-600">
                <Link href="/vibecoding" className="text-primary font-semibold hover:underline">AI agenti</Link> automatizují analýzu webu, sledování pozic, generování reportů a další
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
                <li><Link href="/blog" className="text-gray-300 hover:text-yellow-400">Blog</Link></li>
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
