import Navigation from '@/components/navigation'
import type { Metadata } from 'next'
import siteMetadata from '@/app/metadata.json'
import HomePageContent from '@/components/home-page-content'

export const metadata: Metadata = siteMetadata['/']

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://linklady.cz/#webpage",
      url: "https://linklady.cz",
      name: "Linklady.cz – SEO, PPC a AI automatizace | Pavla Zimmermannová",
      description: "Vaše firma na prvních místech. SEO strategie, PPC kampaně a AI automatizace od specialistky s 10 lety zkušeností. Měřitelné výsledky, ne prázdné sliby.",
      isPartOf: { "@id": "https://linklady.cz/#website" },
      about: { "@id": "https://linklady.cz/#business" },
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
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://linklady.cz/#services",
      name: "Služby online marketingu",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO & PPC",
            description: "Kompletní SEO od technického auditu přes keyword strategii po lokální viditelnost. PPC kampaně v Google Ads a Skliku.",
            provider: { "@id": "https://linklady.cz/#business" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Tvorba webu",
            description: "Rychlé, responzivní weby optimalizované pro konverze. SEO od prvního řádku kódu.",
            provider: { "@id": "https://linklady.cz/#business" },
            url: "https://linklady.cz/tvorba-webu-bilina",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Video střih",
            description: "Reels, stories, reklamní spoty i firemní prezentace. Hotový obsah připravený k publikaci.",
            provider: { "@id": "https://linklady.cz/#business" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI agenti",
            description: "Chatboti pro zákaznickou podporu, analýza dat, generování obsahu i monitoring konkurence.",
            provider: { "@id": "https://linklady.cz/#business" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Automatizace & Make.com",
            description: "Propojení nástrojů přes Make.com, automatizace reportingu, e-mailových sekvencí i publikování obsahu.",
            provider: { "@id": "https://linklady.cz/#business" },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Content marketing",
            description: "Blog, sociální sítě, newsletter – vše s jasnou strategií a měřitelnými výsledky.",
            provider: { "@id": "https://linklady.cz/#business" },
          },
        },
      ],
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <HomePageContent />
    </>
  )
}



