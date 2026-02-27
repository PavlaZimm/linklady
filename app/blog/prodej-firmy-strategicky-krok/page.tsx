import Navigation from '@/components/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import JsonLd from '@/components/json-ld'

export const metadata: Metadata = {
  title: "Prodej firmy jako strategický krok: Jak zajistit kontinuitu a získat odpovídající cenu",
  description: "Prodej vybudovaného podniku je jedním z nejdůležitějších rozhodnutí. Zjistěte, jak probíhá proces M&A, na co si dát pozor a jak najít správného investora.",
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
    canonical: "https://linklady.cz/blog/prodej-firmy-strategicky-krok",
  },
  openGraph: {
    type: "article",
    locale: "cs_CZ",
    url: "https://linklady.cz/blog/prodej-firmy-strategicky-krok",
    siteName: "Linklady.cz",
    title: "Prodej firmy jako strategický krok: Jak zajistit kontinuitu a získat odpovídající cenu",
    description: "Prodej vybudovaného podniku je jedním z nejdůležitějších rozhodnutí. Zjistěte, jak probíhá proces M&A a jak najít správného investora.",
    images: [
      {
        url: "/profile.jpg",
        width: 500,
        height: 600,
        alt: "Pavla Zimmermannová – online marketing specialistka",
      },
    ],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://linklady.cz/blog/prodej-firmy-strategicky-krok/#article",
      headline: "Prodej firmy jako strategický krok: Jak zajistit kontinuitu a získat odpovídající cenu",
      description: "Prodej vybudovaného podniku je jedním z nejdůležitějších rozhodnutí. Zjistěte, jak probíhá proces M&A, na co si dát pozor a jak najít správného investora.",
      url: "https://linklady.cz/blog/prodej-firmy-strategicky-krok",
      datePublished: "2026-02-27",
      dateModified: "2026-02-27",
      author: {
        "@id": "https://linklady.cz/#person",
      },
      publisher: {
        "@id": "https://linklady.cz/#business",
      },
      isPartOf: { "@id": "https://linklady.cz/blog/#webpage" },
      mainEntityOfPage: "https://linklady.cz/blog/prodej-firmy-strategicky-krok",
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
          item: "https://linklady.cz",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://linklady.cz/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Prodej firmy jako strategický krok",
          item: "https://linklady.cz/blog/prodej-firmy-strategicky-krok",
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

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-300 rounded-full opacity-30"></div>
            <div className="absolute top-1/2 -left-8 w-16 h-16 bg-yellow-300 rounded-full opacity-25"></div>
            <div className="absolute -top-8 right-4 w-20 h-20 bg-purple-400 rounded-full opacity-20 animate-pulse delay-1000"></div>

            <nav aria-label="Breadcrumb" className="mb-6 text-sm opacity-80 relative z-10">
              <ol className="flex items-center justify-center space-x-2">
                <li><Link href="/" className="hover:text-yellow-400">Úvod</Link></li>
                <li><span className="mx-2">/</span></li>
                <li><Link href="/blog" className="hover:text-yellow-400">Blog</Link></li>
                <li><span className="mx-2">/</span></li>
                <li className="text-yellow-400">Prodej firmy</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 relative z-10 max-w-4xl mx-auto leading-tight">
              Prodej firmy jako strategický krok: Jak zajistit kontinuitu a získat odpovídající cenu
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto relative z-10">
              M&A proces krok za krokem - od ocenění přes výběr investora až po bezpečné uzavření transakce
            </p>
            <div className="mt-6 text-sm opacity-70 relative z-10">
              <time dateTime="2026-02-27">27. února 2026</time>
              <span className="mx-2">|</span>
              <span>Pavla Zimmermannová</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Prodej vybudovaného podniku je pro většinu majitelů jedním z nejdůležitějších životních rozhodnutí. Často k němu dochází po desetiletích usilovné práce, kdy se zakladatelé cítí unaveni nebo čelí situaci, kdy v rodině chybí přirozený nástupce. Proces označovaný jako <strong>M&A</strong> (fúze a akvizice) však není jen o finanční transakci, ale především o nalezení partnera, který dokáže na dosavadní vizi navázat.
          </p>

          {/* Section: Více než jen čísla */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Více než jen čísla: Co určuje úspěšný prodej?
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Při úvahách o prodeji firmy je finanční polštář pro budoucí roky důležitým faktorem, ale zdaleka ne jediným. Majitelé si často kladou otázky, které přesahují rámec účetní závěrky:
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
            Správně nastavený proces prodeje by měl všechny tyto ambice zohlednit a propojit prodávajícího se seriózním zájemcem, který má o podnik skutečný strategický zájem.
          </p>

          {/* Section: Fáze procesu */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Fáze procesu nákupu a prodeje firmy
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Prodej podílu nebo celé společnosti je komplexní disciplína plná formalit a potenciálních nástrah. Profesionální přístup k transakci obvykle zahrnuje:
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start bg-purple-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Příprava a evaluace</h3>
                <p className="text-gray-700">Definování reálné tržní ceny a vyjasnění priorit prodávajícího.</p>
              </div>
            </div>

            <div className="flex items-start bg-purple-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Identifikace protistrany</h3>
                <p className="text-gray-700">Využití širokých databází a kontaktů k oslovení potenciálních investorů, kteří splňují daná kritéria.</p>
              </div>
            </div>

            <div className="flex items-start bg-purple-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Lidský faktor a příběh</h3>
                <p className="text-gray-700">Každý podnik má svou historii. Právě pochopení příběhu firmy často pomáhá najít společnou řeč s budoucím majitelem.</p>
              </div>
            </div>

            <div className="flex items-start bg-purple-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Strukturování transakce</h3>
                <p className="text-gray-700">Vyladění konkrétních kroků, od prověrky (due diligence) až po finální smluvní dokumentaci, aby vše proběhlo bezpečně pro obě strany.</p>
              </div>
            </div>
          </div>

          {/* Section: Bezpečný odchod */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Bezpečný odchod z byznysu
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Včasné plánování prodeje umožňuje majitelům odejít z kolotoče každodenního stresu s vědomím, že jejich dílo je v dobrých rukou. Ať už je cílem fúze více společností nebo prodej strategickému investorovi, klíčem k úspěchu je diskrétnost a precizní nastavení pravidel spolupráce.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Pokud vás zajímá aktuální situace na trhu a možnosti, jak svou společnost zhodnotit, můžete prozkoumat podrobnější informace o tom, jak probíhá profesionální{' '}
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
          <div className="bg-purple-50 border-l-4 border-primary rounded-lg p-8 mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Potřebujete pomoci s online prezentací vaší firmy?
            </h3>
            <p className="text-gray-700 mb-4">
              Ať už prodáváte firmu, nebo ji chcete posunout dál - silná online přítomnost zvyšuje hodnotu vašeho podnikání. Pomohu vám se SEO, PPC kampaněmi i automatizací marketingu.
            </p>
            <Link
              href="/kontakt"
              className="inline-block bg-yellow-400 text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
            >
              Domluvit konzultaci zdarma
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Link href="/" className="text-lg font-semibold hover:text-yellow-400">
                Domů
              </Link>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.linkedin.com/in/pavla-zimmermannov%C3%A1-750112ab/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
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
