import { guides } from '@/lib/editorial-guides'
import BlogList, { type BlogItem } from '@/components/blog-list'
import { restoredArticles } from '@/lib/restored-articles'
import Navigation from '@/components/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import JsonLd from '@/components/json-ld'
import SiteFooter from '@/components/site-footer'
import { getPageMetadata } from '@/lib/page-metadata'

export const metadata: Metadata = getPageMetadata('/blog')

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.linklady.cz/blog/#webpage",
      url: "https://www.linklady.cz/blog",
      name: "Blog – Marketing tipy, SEO trendy a AI nástroje",
      description: "Aktuální články o SEO strategiích, automatizaci a AI nástrojích pro online marketing.",
      isPartOf: { "@id": "https://www.linklady.cz/#website" },
      keywords: "SEO strategie, AI nástroje, automatizace procesů, lokální SEO",
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
          name: "Blog",
          item: "https://www.linklady.cz/blog",
        },
      ],
    },
  ],
}

const articles: BlogItem[] = [
  ...guides.map(g => ({href:`/blog/${g.slug}`,title:g.title,description:g.description,topic:g.topic,date:g.date,dateLabel:'16. 10. 2026'})),
  { href: '/blog/co-obsahuje-seo-audit', title: 'Co obsahuje SEO audit: postup a ukázky nálezů', description: 'Jak poznat použitelný audit, určit priority a ověřit opravy. S příklady z kontroly Linklady.', topic: 'SEO', date: '2026-10-16', dateLabel: '16. 10. 2026' },
  ...restoredArticles.map(article => ({ href: `/${article.slug}/`, title: article.title, description: article.description, topic: (article.category === 'Spolupráce' ? 'Další' : 'SEO') as BlogItem['topic'], date: '2026-09-19', dateLabel: 'Aktualizováno 19. 9. 2026' })),
  { href: '/blog/jak-vytvorit-webovou-aplikaci', title: 'Jak vytvořit webovou aplikaci krok za krokem', description: 'Zadání, návrh, realizace a testování první verze aplikace.', topic: 'Weby', date: '2026-09-13', dateLabel: '13. 9. 2026' },
  { href: '/blog/webove-aplikace-priklady', title: 'Webové aplikace: příklady a využití ve firmách', description: 'Kdy dává smysl poptávkový systém, evidence nebo klientský portál.', topic: 'Weby', date: '2026-09-14', dateLabel: '14. 9. 2026' },
  { href: '/ai-agent', title: 'AI agent: jak funguje a kdy ho využít', description: 'Průvodce možnostmi, cenovými faktory a kontrolou AI agentů.', topic: 'AI' },
  { href: '/automatizace', title: 'Automatizace pro malé firmy', description: 'Jak vybrat proces k automatizaci a ověřit, zda se změna vyplatí.', topic: 'AI' },
  { href: '/vibecoding', title: 'Vibecoding: tvorba s pomocí AI', description: 'Nástroje, pracovní postup a limity vývoje s pomocí AI.', topic: 'AI' },
  { href: '/blog/prodej-firmy-strategicky-krok', title: 'Prodej firmy jako strategický krok', description: 'Přehled témat, která provázejí přípravu na změnu vlastníka firmy.', topic: 'Další', date: '2026-02-27', dateLabel: '27. 2. 2026' },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={jsonLd} />
      <Navigation />
      <main id="main-content">
      
      {/* Hero Section */}
      <header className="cf-page-hero cf-blog-hero">
        <div className="cf-wrap">
          <p className="cf-eyebrow">LINKLADY / BLOG</p>
          <h1>Blog</h1>
          <p>
              Praktické čtení o SEO, tvorbě webů a využití AI. Vyberte si téma, které právě řešíte.
            </p>
        </div>
      </header>

      <BlogList articles={articles} />

      {/* Další krok pro čtenáře. Skutečný newsletter zatím není napojený,
          proto tu není formulář, který by e-mail nikam neodeslal. */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Chcete další praktické návody?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Začněte e-bookem o práci s AI, nebo mi napište, co chcete zlepšit na svém webu či ve firmě.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/ebook"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-primary px-7 py-3.5 font-semibold text-white transition-colors hover:bg-blue-800"
            >
              Prohlédnout e-book
            </Link>
            <Link
              href="/kontakt"
              className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border-2 border-primary px-7 py-3 font-semibold text-primary transition-colors hover:bg-blue-50"
            >
              Probrat vlastní projekt
            </Link>
          </div>
        </div>
      </section>

      </main>
      <SiteFooter />
    </div>
  )
}
