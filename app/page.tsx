import Navigation from '@/components/navigation'
import type { Metadata } from 'next'
import siteMetadata from '@/app/metadata.json'
import HomePageContent from '@/components/home-page-content'
import JsonLd from '@/components/json-ld'

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
          "@type": "ListItem",
          position: 1,
          name: "SEO & PPC",
          description: "Kompletní SEO od technického auditu přes keyword strategii po lokální viditelnost. PPC kampaně v Google Ads a Skliku.",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Tvorba webu",
          description: "Rychlé, responzivní weby optimalizované pro konverze. SEO od prvního řádku kódu.",
          url: "https://linklady.cz/tvorba-webu-bilina",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Video střih",
          description: "Reels, stories, reklamní spoty i firemní prezentace. Hotový obsah připravený k publikaci.",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "AI agenti",
          description: "Chatboti pro zákaznickou podporu, analýza dat, generování obsahu i monitoring konkurence.",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Automatizace & Make.com",
          description: "Propojení nástrojů přes Make.com, automatizace reportingu, e-mailových sekvencí i publikování obsahu.",
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Content marketing",
          description: "Blog, sociální sítě, newsletter – vše s jasnou strategií a měřitelnými výsledky.",
        },
      ],
    },
  ],
}

export default function Home() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navigation />
      <HomePageContent />
    </>
  )
}



