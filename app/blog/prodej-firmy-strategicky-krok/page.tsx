import Navigation from '@/components/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import JsonLd from '@/components/json-ld'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = {
  title: "Prodej firmy: průvodce M&A procesem",
  description: "Jak probíhá prodej firmy: ocenění, výběr investora a uzavření transakce. Co si předem vyjasnit a na co si dát pozor.",
  authors: [{ name: "Pavla Zimmermannová", url: "https://www.linklady.cz/o-mne" }],
  keywords: [
    "prodej firmy",
    "prodej podniku",
    "M&A",
    "fúze a akvizice",
    "prodej společnosti",
    "exit strategie",
    "due diligence",
    "ocenění firmy",
  ],
  alternates: {
    canonical: "https://www.linklady.cz/blog/prodej-firmy-strategicky-krok",
  },
  openGraph: {
    type: "article",
    locale: "cs_CZ",
    url: "https://www.linklady.cz/blog/prodej-firmy-strategicky-krok",
    siteName: "Linklady.cz",
    title: "Prodej firmy: průvodce M&A procesem",
    description: "Jak probíhá prodej firmy, ocenění podniku a výběr investora.",
    images: [
      {
        url: "/profile.jpg",
        width: 665,
        height: 1000,
        alt: "Prodej firmy: průvodce M&A procesem od Pavly Zimmermannové",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prodej firmy: průvodce M&A procesem",
    description: "Jak probíhá prodej firmy, ocenění, výběr investora a bezpečné uzavření transakce.",
    images: ["/profile.jpg"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.linklady.cz/blog/prodej-firmy-strategicky-krok/#article",
      headline: "Prodej firmy: jak domluvit cenu a pokračování podniku",
      description: "Jak probíhá prodej podniku, výběr investora a dohoda o ceně i dalším fungování firmy.",
      url: "https://www.linklady.cz/blog/prodej-firmy-strategicky-krok",
      datePublished: "2026-02-27",
      dateModified: "2026-02-27",
      author: {
        "@id": "https://www.linklady.cz/#person",
      },
      publisher: {
        "@id": "https://www.linklady.cz/#business",
      },
      isPartOf: { "@id": "https://www.linklady.cz/blog/#webpage" },
      mainEntityOfPage: "https://www.linklady.cz/blog/prodej-firmy-strategicky-krok",
      inLanguage: "cs",
      keywords: "prodej firmy, M&A, fúze a akvizice, prodej podniku, exit strategie, due diligence",
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
          name: "Blog",
          item: "https://www.linklady.cz/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Prodej firmy jako strategický krok",
          item: "https://www.linklady.cz/blog/prodej-firmy-strategicky-krok",
        },
      ],
    },
  ],
}

export default function ProdejFirmyArticle() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={jsonLd} />
      <Navigation />
      <main id="main-content">

      {/* Hero Section */}
      <header className="cf-page-hero">
        <div className="cf-wrap">
          <p className="cf-eyebrow">LINKLADY / BLOG</p>
          <h1>
              Prodej firmy: jak domluvit cenu a pokračování podniku
            </h1>
          <p>
              M&A proces od ocenění přes výběr investora až po uzavření transakce
            </p>
          <div className="cf-buttons"><Link href="/" className="cf-button">Úvod</Link><Link href="/blog" className="cf-button">Blog</Link></div>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Majitelé zvažují prodej firmy například kvůli únavě po desetiletích práce nebo proto, že v rodině nemají nástupce. Při procesu označovaném jako <strong>M&A</strong> (fúze a akvizice) řeší cenu i výběr partnera, který převezme podnik a naváže na jejich práci.
          </p>

          {/* Section: Více než jen čísla */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Co si vyjasnit před prodejem firmy
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Vedle finančního zajištění pro další roky majitelé řeší i to, co se s firmou po prodeji stane:
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-primary rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <div>
                <strong className="text-gray-900">Budoucnost zaměstnanců:</strong>{' '}
                <span className="text-gray-700">Zůstane tým, který firmu budoval, v bezpečí?</span>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-primary rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <div>
                <strong className="text-gray-900">Zachování značky:</strong>{' '}
                <span className="text-gray-700">Bude nový investor pokračovat v rozvoji, nebo dojde k útlumu činnosti?</span>
              </div>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-primary rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <div>
                <strong className="text-gray-900">Hodnotová shoda:</strong>{' '}
                <span className="text-gray-700">Odpovídá vize zájemce principům, na kterých firma stojí?</span>
              </div>
            </li>
          </ul>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Tyto požadavky si ujasněte před hledáním zájemce. Pomohou vám posoudit, zda jeho plány odpovídají vašim představám.
          </p>

          {/* Section: Fáze procesu */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Fáze procesu nákupu a prodeje firmy
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Prodej podílu nebo celé společnosti obvykle zahrnuje tyto kroky:
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start bg-blue-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Příprava a ocenění</h3>
                <p className="text-gray-700">Odhad tržní ceny a vyjasnění priorit prodávajícího.</p>
              </div>
            </div>

            <div className="flex items-start bg-blue-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Hledání kupujícího</h3>
                <p className="text-gray-700">Výběr a oslovení potenciálních investorů z databází a kontaktů podle dohodnutých kritérií.</p>
              </div>
            </div>

            <div className="flex items-start bg-blue-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Seznámení s historií firmy</h3>
                <p className="text-gray-700">Seznámení s historií firmy pomáhá prodávajícímu a budoucímu majiteli domluvit se na jejím pokračování.</p>
              </div>
            </div>

            <div className="flex items-start bg-blue-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Strukturování transakce</h3>
                <p className="text-gray-700">Domluva konkrétních kroků od prověrky (due diligence) po smluvní dokumentaci s ohledem na rizika pro obě strany.</p>
              </div>
            </div>
          </div>

          {/* Section: Bezpečný odchod */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Příprava na předání firmy
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Při včasném plánování mají majitelé prostor domluvit, jak a komu firmu předají a kdy ukončí svou každodenní práci. U fúze i prodeje strategickému investorovi je potřeba dohodnout pravidla spolupráce a zacházení s důvěrnými informacemi.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Podrobnosti o situaci na trhu a možnostech prodeje najdete v informacích o tom, jak probíhá{' '}
            <a
              href="https://www.arfin.cz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              prodej firem
            </a>.
          </p>

          {/* CTA Box */}
          <div className="bg-blue-50 border-l-4 border-primary rounded-lg p-8 mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Potřebujete pomoci s online prezentací vaší firmy?
            </h3>
            <p className="text-gray-700 mb-4">
              S online prezentací firmy vám pomohu při přípravě prodeje i při jejím dalším rozvoji. Nabízím pomoc se <Link href="/seo-konzultant-usti-nad-labem" className="text-primary font-semibold hover:underline">SEO</Link> i <Link href="/automatizace" className="text-primary font-semibold hover:underline">automatizací marketingu</Link>.
            </p>
            <Link
              href="/kontakt"
              className="inline-block bg-[#FF795E] text-[#151D32] px-8 py-3 rounded-full font-semibold hover:bg-[#ff927c] transition-colors"
            >
              Domluvit konzultaci zdarma
            </Link>
          </div>
        </div>
      </article>

      </main>
      <SiteFooter />
    </div>
  )
}
