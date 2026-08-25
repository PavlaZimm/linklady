import Navigation from '@/components/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import siteMetadata from '@/app/metadata.json'
import JsonLd from '@/components/json-ld'
import SiteFooter from '@/components/site-footer'
import ContactForm from '@/components/contact-form'

export const metadata: Metadata = siteMetadata['/kontakt']

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://www.linklady.cz/kontakt/#webpage",
      url: "https://www.linklady.cz/kontakt",
      name: "Kontakt – Získejte konzultaci zdarma | Linklady.cz",
      description: "Kontaktujte Pavlu Zimmermannovou pro konzultaci ohledně SEO, AI asistentů nebo automatizace.",
      isPartOf: { "@id": "https://www.linklady.cz/#website" },
      inLanguage: "cs",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Úvod",
          item: "https://www.linklady.cz",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Kontakt",
          item: "https://www.linklady.cz/kontakt",
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.linklady.cz/#business",
      name: "Linklady.cz – Pavla Zimmermannová",
      url: "https://www.linklady.cz",
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
      founder: { "@id": "https://www.linklady.cz/#person" },
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

      {/* Contact form */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
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

      <SiteFooter />
    </div>
  )
}
