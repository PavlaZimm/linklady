import Navigation from '@/components/navigation'
import type { Metadata } from 'next'
import HomePageContent from '@/components/home-page-content'
import JsonLd from '@/components/json-ld'
import { getPageMetadata } from '@/lib/page-metadata'

export const metadata: Metadata = getPageMetadata('/')

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.linklady.cz/#webpage",
      url: "https://www.linklady.cz",
      name: "SEO a tvorba webových stránek pro firmy | Linklady.cz",
      description: "SEO služby a tvorba webů na míru od Pavly Zimmermannové. Analýza klíčových slov, obsah a funkční web, na kterém zákazníci snadno najdou vaši nabídku.",
      isPartOf: { "@id": "https://www.linklady.cz/#website" },
      about: { "@id": "https://www.linklady.cz/#business" },
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
      ],
    },
    {
      "@type": "ItemList",
      "@id": "https://www.linklady.cz/#services",
      name: "Služby online marketingu",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "SEO služby a konzultace", url: "https://www.linklady.cz/sluzby/seo" },
        { "@type": "ListItem", position: 2, name: "Tvorba webových stránek", url: "https://www.linklady.cz/sluzby/tvorba-webu" },
        { "@type": "ListItem", position: 3, name: "Webové aplikace", url: "https://www.linklady.cz/sluzby/webove-aplikace" },
        { "@type": "ListItem", position: 4, name: "AI a automatizace", url: "https://www.linklady.cz/sluzby/ai-automatizace" },
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

