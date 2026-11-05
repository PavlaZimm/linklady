



import Navigation from '@/components/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import JsonLd from '@/components/json-ld'
import SiteFooter from '@/components/site-footer'
import { getPageMetadata } from '@/lib/page-metadata'

export const metadata: Metadata = getPageMetadata('/o-mne')

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.linklady.cz/o-mne/#webpage",
      url: "https://www.linklady.cz/o-mne",
      name: "O mně: Pavla Zimmermannová | Online marketing specialistka",
      description: "Online marketingu se věnuji od roku 2015. Specializuji se na SEO, content marketing, AI nástroje, automatizaci a technické úpravy webů.",
      isPartOf: { "@id": "https://www.linklady.cz/#website" },
      mainEntity: { "@id": "https://www.linklady.cz/#person" },
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
          name: "O mně",
          item: "https://www.linklady.cz/o-mne",
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://www.linklady.cz/#person",
      name: "Pavla Zimmermannová",
      url: "https://www.linklady.cz/o-mne",
      image: {
        "@type": "ImageObject",
        url: "https://www.linklady.cz/profile.jpg",
        width: 665,
        height: 1000,
      },
      jobTitle: "Online marketing specialistka",
      description: "V online marketingu působím od roku 2015. Specializuji se na SEO, content marketing, AI nástroje a automatizaci marketingu.",
      worksFor: { "@id": "https://www.linklady.cz/#business" },
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
      <main id="main-content">
      
      {/* Hero Section */}
      <header className="cf-page-hero">
        <div className="cf-wrap">
          <p className="cf-eyebrow">LINKLADY / SEO · WEBY · AI</p>
          <h1>Pavla Zimmermannová</h1>
          <p>
                Od roku 2015 pomáhám firmám se SEO, weby a online marketingem. Dnes se věnuji také AI a automatizaci.
              </p>
        </div>
      </header>

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
                V online marketingu působím od roku 2015.
                Za tu dobu jsem se věnovala <Link href="/tvorba-webu-bilina" className="text-primary hover:underline">tvorbě webů</Link>, <Link href="/seo-konzultant-usti-nad-labem" className="text-primary hover:underline">SEO</Link>,
                content marketingu i technickým úpravám. Z těchto zkušeností vycházím při plánování práce pro klienty.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Nejdřív se podívám na data a podle nich navrhnu postup. Výsledky pak měřím, abych věděla, co se osvědčilo a co upravit.
              </p>

              <p className="text-lg text-gray-700 mb-6">
                Pomáhám klientům oslovit zákazníky v jejich okolí i na širším trhu. Věnuji se SEO a kampaním
                a navrhuji také
                <Link href="/automatizace" className="text-primary hover:underline">AI automatizace</Link>, které jim pomáhají šetřit čas při práci.
              </p>

              <p className="text-lg text-gray-700 mb-8">
                Zakládám si na férové domluvě. Sleduji změny v oboru a učím se nové postupy, abych je mohla využít při práci.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Development */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Kde se učím
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Vzdělávám se u <a href="https://www.czechitas.cz/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Czechitas</a>,
              sleduji komunitu <a href="https://www.holkyzmarketingu.cz/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Holky z marketingu</a>
              a učím se také od agentury Luumo.
            </p>


          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            S čím pomáhám
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <Link href="/seo-konzultant-usti-nad-labem" className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary block">SEO</Link>
              <p className="text-gray-600">Audit, opravy webu a lokální SEO</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                </svg>
              </div>
              <Link href="/tvorba-webu-bilina" className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary block">Tvorba webů</Link>
              <p className="text-gray-600">Weby se SEO zahrnutým už v návrhu</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </div>
              <Link href="/vibecoding" className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary block">AI agenti</Link>
              <p className="text-gray-600">Pomoc s opakovanými úkoly a kontrolou výstupů</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <Link href="/automatizace" className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary block">Automatizace</Link>
              <p className="text-gray-600">Propojení nástrojů a kontrola chyb v procesech</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/kontakt"
              className="inline-block bg-[#FF795E] text-[#151D32] px-8 py-3 rounded-full font-semibold hover:bg-[#ff927c] transition-colors"
            >
              Domluvit konzultaci
            </Link>
          </div>
        </div>
      </section>

      </main>
      <SiteFooter />
    </div>
  )
}

