import Navigation from '@/components/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import JsonLd from '@/components/json-ld'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Webové aplikace: příklady a využití ve firmách',
  description: 'Praktické příklady webových aplikací: poptávkový systém, živá data, správa obsahu, e-shop i klientský portál. Zjistěte, co se hodí pro vaši firmu.',
  authors: [{ name: 'Pavla Zimmermannová', url: 'https://www.linklady.cz/o-mne' }],
  alternates: {
    canonical: 'https://www.linklady.cz/blog/webove-aplikace-priklady',
  },
  openGraph: {
    type: 'article',
    locale: 'cs_CZ',
    url: 'https://www.linklady.cz/blog/webove-aplikace-priklady',
    siteName: 'Linklady.cz',
    title: 'Webové aplikace: příklady z praxe a využití ve firmách',
    description: 'Pět skutečných realizací a další nápady, kde může webová aplikace odstranit ruční práci.',
    images: [{
      url: '/profile.jpg',
      width: 500,
      height: 600,
      alt: 'Webové aplikace – příklady z praxe od Pavly Zimmermannové',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webové aplikace: příklady a využití ve firmách',
    description: 'Pět skutečných realizací a praktické nápady pro firemní webovou aplikaci.',
    images: ['/profile.jpg'],
  },
}

const projectExamples = [
  {
    label: 'Poptávkový systém',
    title: 'Konfigurátor poptávky pro Yes.cz',
    href: 'https://yes-cz-rfq.vercel.app/',
    problem: 'Zákazník potřebuje sestavit přesnou poptávku z více značek a produktů, uvést množství, termín i obchodní podmínky.',
    solution: 'Vícekrokový formulář vede uživatele celým zadáním a předá firmě strukturované údaje místo neúplného e-mailu.',
    why: 'Aplikace průběžně pracuje se zvolenými položkami a vytváří konkrétní výstup podle vstupů uživatele.',
  },
  {
    label: 'Správa obsahu',
    title: 'Autoškola Jana',
    href: 'https://autoskolajana.cz/',
    problem: 'Autoškola potřebuje udržovat aktuální ceník, termíny kurzů, skupiny oprávnění a další provozní informace.',
    solution: 'Obsah je uložený odděleně od vzhledu webu, takže ho lze měnit bez přepisování zdrojového kódu.',
    why: 'Veřejná část zobrazuje data, která správce průběžně mění přes administrační rozhraní.',
  },
  {
    label: 'Živá data',
    title: 'FlyQueens',
    href: 'https://www.flyqueens.cz/',
    problem: 'Uživatel chce rychle zjistit, co mu právě letí nad hlavou, a vidět dostupnou polohu, výšku, rychlost nebo trasu.',
    solution: 'Interaktivní mapa načítá dostupná ADS-B data, obnovuje provoz a umožňuje hledat let nebo registraci.',
    why: 'Obsah se mění v reálném čase podle externích dat a polohy uživatele; nejde o předem napsanou stránku.',
  },
  {
    label: 'E-commerce',
    title: 'Vše pro minerály',
    href: 'https://vsepromineraly.cz/',
    problem: 'Sběratelé potřebují vybírat krabičky, vitríny a další pomůcky, přidávat je do košíku a vytvořit objednávku.',
    solution: 'E-shop spojuje katalog, varianty produktů, košík a objednávkový proces v jednom rozhraní.',
    why: 'Každý uživatel pracuje s vlastním košíkem a aplikace zpracovává stav objednávky i produktová data.',
  },
  {
    label: 'Obsahový portál',
    title: 'Kastrup.cz',
    href: 'https://kastrup.cz/',
    problem: 'Rozsáhlý průvodce Dánskem potřebuje třídit články podle témat a průběžně přidávat nový obsah.',
    solution: 'Vlastní redakční část odděluje správu článků od jejich veřejného zobrazení a navigace.',
    why: 'Portál pracuje s databází článků, kategoriemi a redakčním procesem, takže může růst bez ručních zásahů do každé stránky.',
  },
]

const businessIdeas = [
  {
    title: 'Klientský portál',
    text: 'Zákazník po přihlášení vidí objednávky, dokumenty, faktury nebo stav řešení svého požadavku.',
  },
  {
    title: 'Interní evidence',
    text: 'Tým pracuje s jedním seznamem zakázek, zařízení, smluv nebo kontrol místo několika tabulek.',
  },
  {
    title: 'Rezervace a plánování',
    text: 'Aplikace hlídá dostupné termíny, kapacitu, potvrzení a případně platbu předem.',
  },
  {
    title: 'Kalkulačka nebo konfigurátor',
    text: 'Zákazník zadá parametry a získá orientační cenu, doporučenou variantu nebo připravenou poptávku.',
  },
  {
    title: 'Firemní dashboard',
    text: 'Data z CRM, e-shopu nebo výroby se spojí do jednoho přehledu a nemusí se ručně kopírovat.',
  },
  {
    title: 'Automatizované zpracování požadavků',
    text: 'Formulář vytvoří úkol, doplní údaje do systému a rozešle správná upozornění bez přepisování.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://www.linklady.cz/blog/webove-aplikace-priklady/#article',
      headline: 'Webové aplikace: příklady z praxe a využití ve firmách',
      description: 'Pět skutečných příkladů webových aplikací a další možnosti jejich využití ve firmách.',
      url: 'https://www.linklady.cz/blog/webove-aplikace-priklady',
      datePublished: '2026-09-14',
      dateModified: '2026-09-14',
      author: { '@id': 'https://www.linklady.cz/#person' },
      publisher: { '@id': 'https://www.linklady.cz/#business' },
      isPartOf: { '@id': 'https://www.linklady.cz/blog/#webpage' },
      mainEntityOfPage: 'https://www.linklady.cz/blog/webove-aplikace-priklady',
      inLanguage: 'cs',
      about: { '@type': 'Thing', name: 'Webové aplikace' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Úvod', item: 'https://www.linklady.cz' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.linklady.cz/blog' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Webové aplikace – příklady',
          item: 'https://www.linklady.cz/blog/webove-aplikace-priklady',
        },
      ],
    },
  ],
}

export default function WeboveAplikacePrikladyPage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={jsonLd} />
      <Navigation />

      <header className="hero-gradient text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm opacity-80">
            <ol className="flex flex-wrap items-center justify-center gap-2">
              <li><Link href="/" className="hover:text-yellow-400">Úvod</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/blog" className="hover:text-yellow-400">Blog</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-yellow-400">Webové aplikace – příklady</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Webové aplikace: příklady z praxe a využití ve firmách
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Pět skutečných realizací a další situace, ve kterých aplikace nahrazuje ruční práci, tabulky nebo nepřehledné e-maily.
          </p>
          <div className="mt-6 text-sm opacity-75">
            <time dateTime="2026-09-14">14. září 2026</time>
            <span className="mx-2">|</span>
            <Link href="/o-mne" className="hover:text-yellow-400">Pavla Zimmermannová</Link>
          </div>
        </div>
      </header>

      <main>
        <article className="py-14 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xl text-gray-800 leading-relaxed mb-6">
              Mezi webové aplikace patří klientské portály, rezervační systémy, interní evidence, kalkulačky, e-shopy i nástroje pracující s živými daty. Společné mají jedno: uživatel na nich nečte jen obsah, ale zadává údaje, mění stav nebo získává výsledek podle svého vstupu.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Základní rozdíly, typy a technologie vysvětluje hlavní průvodce <Link href="/webova-aplikace" className="text-primary font-semibold hover:underline">co je webová aplikace</Link>. Tady ukazuji konkrétní příklady a rozhodnutí, která za nimi stojí.
            </p>

            <aside className="bg-purple-50 border border-purple-100 rounded-2xl p-6 md:p-8 mb-14">
              <h2 className="text-xl font-bold text-gray-900 mb-3">Jak poznáte webovou aplikaci</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Běžný web předává stejné informace všem. Webová aplikace reaguje na konkrétního uživatele, jeho data nebo aktuální situaci.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ pracuje s formulářem, databází nebo externím zdrojem dat,</li>
                <li>✓ pamatuje si stav, výběr nebo přihlášeného uživatele,</li>
                <li>✓ provádí výpočet, změnu, objednávku nebo jiný úkol.</li>
              </ul>
            </aside>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Pět příkladů webových aplikací z praxe</h2>
            <div className="space-y-8">
              {projectExamples.map((project, index) => (
                <section key={project.title} className="rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="w-9 h-9 rounded-full bg-primary text-white font-bold flex items-center justify-center" aria-hidden="true">
                      {index + 1}
                    </span>
                    <span className="text-sm font-semibold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">{project.label}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-5">
                    <a href={project.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline">
                      {project.title}
                    </a>
                  </h3>
                  <dl className="space-y-4 text-gray-700">
                    <div>
                      <dt className="font-bold text-gray-900">Potřeba</dt>
                      <dd className="leading-relaxed">{project.problem}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-gray-900">Řešení</dt>
                      <dd className="leading-relaxed">{project.solution}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-gray-900">Proč je to aplikace</dt>
                      <dd className="leading-relaxed">{project.why}</dd>
                    </div>
                  </dl>
                </section>
              ))}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-16 mb-6">Další využití webových aplikací ve firmách</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Vlastní aplikace dává největší smysl tam, kde se stejný proces opakuje, vznikají chyby při přepisování nebo běžný nástroj nutí lidi pracovat oklikou.
            </p>
            <div className="grid sm:grid-cols-2 gap-5 mb-12">
              {businessIdeas.map((idea) => (
                <section key={idea.title} className="rounded-xl bg-gray-50 border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{idea.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{idea.text}</p>
                </section>
              ))}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-16 mb-6">Web, hotová služba, nebo aplikace na míru?</h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full min-w-[660px] border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-3 pr-4 text-gray-900">Řešení</th>
                    <th className="py-3 pr-4 text-gray-900">Vyberte, když</th>
                    <th className="py-3 text-gray-900">Hlavní omezení</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-4 font-semibold">Běžný web</td>
                    <td className="py-4 pr-4">potřebujete představit nabídku a získat kontakt</td>
                    <td className="py-4">neřeší složitější pracovní proces</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-4 font-semibold">Hotová služba</td>
                    <td className="py-4 pr-4">váš postup odpovídá běžnému řešení na trhu</td>
                    <td className="py-4">přizpůsobujete firmu možnostem nástroje</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-4 font-semibold">Aplikace na míru</td>
                    <td className="py-4 pr-4">proces je specifický nebo propojuje více systémů</td>
                    <td className="py-4">vyžaduje jasné zadání, vývoj a další správu</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-16 mb-6">Co si odnést z uvedených příkladů</h2>
            <ul className="space-y-4 text-gray-700 mb-12">
              <li><strong>Začněte jedním procesem.</strong> Poptávka, rezervace nebo evidence je lepší začátek než „digitalizovat celou firmu“.</li>
              <li><strong>Pracujte se skutečnými daty.</strong> Reálné produkty, termíny a chybové stavy odhalí nedostatky prototypu.</li>
              <li><strong>Myslete na správu.</strong> Obsah, přístupy a data musí jít měnit bez závislosti na každém zásahu programátora.</li>
              <li><strong>Testujte na telefonu.</strong> Firemní nástroj může být technicky správně a přesto nepoužitelný v provozu.</li>
              <li><strong>Nevymýšlejte funkce bez uživatelů.</strong> Další verze má vznikat podle používání první.</li>
            </ul>

            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Pokud už máte konkrétní nápad, pokračujte návodem <Link href="/blog/jak-vytvorit-webovou-aplikaci" className="text-primary font-semibold hover:underline">jak vytvořit webovou aplikaci krok za krokem</Link>. Pomůže vám připravit zadání, rozdělit první verzi a vybrat vhodný způsob vývoje.
            </p>

            <aside className="bg-gradient-to-br from-purple-50 to-yellow-50 border border-purple-100 rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Co by webová aplikace mohla vyřešit u vás?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Popište mi proces, který dnes řešíte ručně, v tabulce nebo přes několik nástrojů. Do 24 hodin vám řeknu, zda stačí jednoduchá automatizace, nebo dává smysl aplikace na míru.
              </p>
              <Link href="/kontakt" className="inline-block bg-primary text-white px-7 py-3.5 rounded-lg font-bold hover:bg-purple-800 transition-colors">
                Chci nezávazný rozbor
              </Link>
            </aside>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  )
}
