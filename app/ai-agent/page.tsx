import Navigation from '@/components/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import JsonLd from '@/components/json-ld'

export const metadata: Metadata = {
  title: "Co je AI agent? Kompletní průvodce | Linklady.cz",
  description: "Co je AI agent a jak funguje? Srozumitelný průvodce světem AI agentů – typy, využití v praxi, rozdíl oproti chatbotům a jak s nimi začít. Česky a bez buzzwordů.",
  keywords: [
    "ai agent",
    "agent ai",
    "co je ai agent",
    "ai agent co to je",
    "co je to ai agent",
    "umělá inteligence agent",
    "ai agenti",
    "ai agent chatbot",
    "nejlepší krypto ai agent",
    "ai agent pro firmy",
  ],
  alternates: {
    canonical: "https://linklady.cz/ai-agent",
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://linklady.cz/ai-agent",
    siteName: "Linklady.cz",
    title: "Co je AI agent? Kompletní průvodce pro rok 2026",
    description: "AI agent není chatbot. Je to autonomní software, který plánuje, rozhoduje a jedná za vás. Zjistěte, jak ho využít ve firmě.",
    images: [
      {
        url: "/profile.jpg",
        width: 500,
        height: 600,
        alt: "Pavla Zimmermannová – AI agenti a automatizace",
      },
    ],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://linklady.cz/ai-agent/#webpage",
      url: "https://linklady.cz/ai-agent",
      name: "Co je AI agent? Kompletní průvodce",
      description: "Srozumitelný průvodce světem AI agentů – co to je, jak funguje, typy agentů a praktické využití.",
      isPartOf: { "@id": "https://linklady.cz/#website" },
      about: {
        "@type": "Thing",
        name: "AI Agent",
        description: "Autonomní softwarový systém založený na umělé inteligenci, který samostatně plánuje, rozhoduje a vykonává úkoly.",
      },
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
          name: "AI Agent",
          item: "https://linklady.cz/ai-agent",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Co je AI agent?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "AI agent je autonomní softwarový systém postavený na umělé inteligenci, který dokáže samostatně plánovat, rozhodovat se a vykonávat úkoly. Na rozdíl od běžného chatbotu nepotřebuje neustálé vedení – stačí mu zadat cíl a on najde cestu, jak ho dosáhnout.",
          },
        },
        {
          "@type": "Question",
          name: "Jaký je rozdíl mezi AI agentem a chatbotem?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chatbot reaguje na jednotlivé zprávy – zeptáte se, odpoví. AI agent jde dál: dokáže si rozložit složitý úkol na kroky, použít nástroje (prohlížeč, databázi, API), učit se z výsledků a pracovat autonomně, dokud úkol nesplní.",
          },
        },
        {
          "@type": "Question",
          name: "Jsou AI agenti bezpeční?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Záleží na implementaci. Kvalitní AI agenti mají bezpečnostní vrstvy – omezená oprávnění, lidský dohled nad důležitými rozhodnutími a auditní záznamy. Důležité je nastavit jasné hranice toho, co agent smí a nesmí dělat.",
          },
        },
        {
          "@type": "Question",
          name: "Kolik stojí AI agent?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cena závisí na typu agenta. Jednoduchý chatbot pro zákaznickou podporu lze provozovat za stovky korun měsíčně. Složitější automatizační agenti stojí tisíce korun, ale typicky se investice vrátí díky ušetřenému času a zvýšené produktivitě.",
          },
        },
        {
          "@type": "Question",
          name: "Potřebuji k používání AI agenta umět programovat?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ne nutně. Existují platformy jako Make.com nebo Zapier, kde si AI agenta sestavíte vizuálně bez kódu. Pro pokročilejší scénáře se hodí základní technické znalosti, ale i ty se dají rychle naučit – například pomocí vibecodingu.",
          },
        },
      ],
    },
  ],
}

export default function AiAgentPage() {
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
                <li className="text-yellow-400">AI Agent</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 relative z-10 max-w-4xl mx-auto leading-tight">
              AI agent: Co to je, jak funguje a k&nbsp;čemu ho využijete
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto relative z-10">
              Srozumitelný průvodce světem AI agentů. Bez buzzwordů, bez hype – jen to, co potřebujete vědět.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Pokud sledujete dění kolem umělé inteligence, slovo <strong>&bdquo;AI agent&ldquo;</strong> jste v&nbsp;posledních měsících slyšeli všude. Jenže co to vlastně je? Je to jen vylepšený chatbot, nebo něco zásadně jiného? A hlavně – k&nbsp;čemu vám to může být v&nbsp;praxi?
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            V&nbsp;tomhle článku vám vysvětlím, <strong>co je AI agent</strong>, jak funguje, jaké typy existují a kde se dá reálně využít. Česky, srozumitelně a bez zbytečného technického žargonu.
          </p>

          {/* Co je AI agent */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Co je AI agent
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>AI agent</strong> je autonomní softwarový systém postavený na <strong>umělé inteligenci</strong>, který dokáže samostatně plánovat, rozhodovat se a vykonávat úkoly. Na rozdíl od běžného chatbotu, který čeká na vaši otázku a odpoví, AI agent dostane cíl – a sám najde cestu, jak ho splnit.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Představte si to jako rozdíl mezi kalkulačkou a účetním. Kalkulačka (chatbot) spočítá, na co se zeptáte. Účetní (AI agent) se podívá na vaše finance, identifikuje problémy, navrhne řešení a rovnou ho provede. Sám od sebe, bez toho, abyste ho krok za krokem vedli.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Jádrem každého AI agenta je velký jazykový model (LLM) – stejná technologie, která pohání ChatGPT nebo Claude. Ale zatímco chatbot je &bdquo;mozek v&nbsp;krabici&ldquo;, agent má k&nbsp;dispozici i &bdquo;ruce&ldquo; – nástroje, které mu umožňují skutečně jednat: prohledávat web, upravovat soubory, volat API, pracovat s&nbsp;databázemi.
          </p>

          {/* Jak AI agent funguje */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak AI agent funguje
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Každý AI agent pracuje ve smyčce čtyř základních kroků. Opakuje je tak dlouho, dokud úkol nesplní:
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start bg-purple-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Vnímání</h3>
                <p className="text-gray-700">Agent shromáždí informace o&nbsp;aktuální situaci – přečte e-mail, prozkoumá soubor, zkontroluje databázi. Rozumí kontextu, ve&nbsp;kterém pracuje.</p>
              </div>
            </div>

            <div className="flex items-start bg-purple-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Rozhodování</h3>
                <p className="text-gray-700">Na základě toho, co zjistil, se agent rozhodne, jaký bude další krok. Rozloží složitý úkol na menší části a naplánuje postup.</p>
              </div>
            </div>

            <div className="flex items-start bg-purple-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Akce</h3>
                <p className="text-gray-700">Agent provede konkrétní akci – odešle e-mail, upraví dokument, zavolá API, vytvoří záznam v&nbsp;CRM. Používá k&nbsp;tomu nástroje, ke&nbsp;kterým má přístup.</p>
              </div>
            </div>

            <div className="flex items-start bg-purple-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Vyhodnocení</h3>
                <p className="text-gray-700">Agent zkontroluje výsledek. Podařilo se? Skvěle, jde na další krok. Nepodařilo? Zkusí jiný přístup. Takhle iteruje, dokud úkol nesplní.</p>
              </div>
            </div>
          </div>

          {/* Typy AI agentů */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Typy AI agentů
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            AI agenti nejsou všichni stejní. Podle toho, co dělají a jak pracují, je můžeme rozdělit do několika kategorií:
          </p>

          <div className="space-y-8 mb-8">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Konverzační agenti</h3>
              <p className="text-gray-700 leading-relaxed">
                Nejznámější typ – pokročilé chatboty pro zákaznickou podporu, prodejní asistenty nebo interní helpdesky. Rozumí kontextu konverzace, pamatují si předchozí zprávy a dokážou řešit složitější požadavky než klasický chatbot.
              </p>
            </div>

            <div className="border-l-4 border-yellow-400 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kódovací agenti</h3>
              <p className="text-gray-700 leading-relaxed">
                Agenti specializovaní na programování. Rozumí celému projektu, píšou kód, opravují chyby a testují výsledky. Patří sem nástroje jako Claude Code, Cursor nebo GitHub Copilot. Právě kódovací agenti stojí za fenoménem <Link href="/vibecoding" className="text-primary font-semibold hover:underline">vibecodingu</Link> – tvorby softwaru pomocí AI.
              </p>
            </div>

            <div className="border-l-4 border-purple-300 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Automatizační agenti</h3>
              <p className="text-gray-700 leading-relaxed">
                Agenti, kteří propojují různé systémy a automatizují pracovní postupy. Napojí se na váš e-mail, CRM, fakturační systém nebo e-shop a pracují za vás. Platformy jako <a href="https://www.make.com/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Make.com</a> nebo n8n tohle umožňují. Více o&nbsp;tom na stránce o&nbsp;<Link href="/automatizace" className="text-primary font-semibold hover:underline">automatizaci procesů</Link>.
              </p>
            </div>

            <div className="border-l-4 border-green-400 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Analytičtí agenti</h3>
              <p className="text-gray-700 leading-relaxed">
                Agenti zaměření na práci s&nbsp;daty. Analyzují tabulky, generují reporty, hledají trendy a anomálie. Hodí se pro marketing, finance i řízení projektů – všude, kde potřebujete z&nbsp;dat dostat smysluplné závěry.
              </p>
            </div>

            <div className="border-l-4 border-gray-300 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Krypto AI agenti</h3>
              <p className="text-gray-700 leading-relaxed">
                Specifická kategorie agentů pro svět kryptoměn. <strong>Krypto AI agenti</strong> analyzují trhy, provádějí on-chain analýzu, automatizují obchodování a monitorují DeFi protokoly. Jde o&nbsp;rychle rostoucí oblast, kde AI pomáhá orientovat se v&nbsp;obrovském množství dat v&nbsp;reálném čase.
              </p>
            </div>
          </div>

          {/* AI agent vs. chatbot */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            AI agent vs. chatbot – jaký je rozdíl
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Tohle je otázka, kterou dostávám nejčastěji. Rozdíl je zásadní, i&nbsp;když hranice se postupně stírá:
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>Chatbot</strong> je reaktivní – čeká na váš vstup a odpovídá. Každá konverzace je v&nbsp;podstatě samostatná. Zeptáte se &bdquo;jaké bude počasí?&ldquo; a dostanete odpověď. To je celé.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>AI agent</strong> je proaktivní – dostane cíl a sám si naplánuje cestu. Může použít desítky nástrojů, vrátit se a opravit chybu, požádat o&nbsp;upřesnění. Řeknete mu &bdquo;připrav mi analýzu konkurence&ldquo; a on prohledá weby, stáhne data, porovná je a připraví report. Sám.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Jinými slovy: chatbot je <strong>nástroj</strong>, AI agent je <strong>spolupracovník</strong>.
          </p>

          {/* K čemu se AI agenti používají */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            K&nbsp;čemu se AI agenti používají v&nbsp;praxi
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            AI agenti už nejsou jen laboratorní experiment. Firmy po celém světě je nasazují do ostrého provozu. Tady jsou nejčastější oblasti využití:
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <span className="text-gray-700"><strong className="text-gray-900">Marketing a obsah</strong> – AI agenti analyzují kampaně, generují personalizovaný obsah, optimalizují reklamní rozpočty a připravují reporty</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <span className="text-gray-700"><strong className="text-gray-900">Zákaznická podpora</strong> – pokročilí chatboti, kteří rozumí kontextu, řeší reklamace, přesměrovávají na správné oddělení a eskalují složité případy</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <span className="text-gray-700"><strong className="text-gray-900">Vývoj softwaru</strong> – kódovací agenti píšou, testují a nasazují kód. Právě proto roste <Link href="/vibecoding" className="text-primary font-semibold hover:underline">vibecoding</Link></span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <span className="text-gray-700"><strong className="text-gray-900">HR a nábor</strong> – screening životopisů, automatizace onboardingu, plánování pohovorů</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <span className="text-gray-700"><strong className="text-gray-900">Analýza dat</strong> – zpracování tabulek, hledání trendů, generování dashboardů a doporučení</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <span className="text-gray-700"><strong className="text-gray-900">Finance a účetnictví</strong> – automatická fakturace, párování plateb, příprava podkladů pro daňové přiznání</span>
            </li>
          </ul>

          {/* Proč právě teď */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Proč jsou AI agenti důležití právě teď
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Rok 2026 je &bdquo;rokem agentů&ldquo;. A není to jen marketing – stojí za tím reálné technologické posuny:
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>Model Context Protocol (MCP)</strong> – nový standard, který umožňuje AI agentům přímo se napojit na firemní nástroje jako Slack, Google Drive, Notion nebo CRM. Bez MCP byl agent izolovaný. S&nbsp;MCP je to autonomní spolupracovník s&nbsp;přístupem k&nbsp;vašim systémům.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>Vertikální agenti</strong> – místo univerzálních &bdquo;umí všechno&ldquo; agentů přichází specializovaní agenti trénovaní na konkrétní obory. Agent pro účetnictví, agent pro e-commerce, agent pro HR. Každý rozumí svému oboru do hloubky.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Čísla mluví jasně: jen v&nbsp;první polovině roku 2025 vzrostl počet firem vyvíjejících vlastní AI agenty o&nbsp;<strong>119 %</strong>. Průměrný počet zákaznických konverzací vedených AI agentem se zvýšil <strong>22&times;</strong>. Kdo teď nezačne, bude za rok dohánět konkurenci.
          </p>

          {/* Jak začít */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak začít s&nbsp;AI agentem
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Nemusíte hned budovat složité systémy. Začněte jednoduše a postupně rozšiřujte:
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start bg-purple-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Identifikujte rutinní úkoly</h3>
                <p className="text-gray-700">Co ve&nbsp;firmě děláte pořád dokola? Odpovídání na stejné dotazy, třídění e-mailů, přepisování dat? Přesně tohle je ideální kandidát pro AI agenta.</p>
              </div>
            </div>

            <div className="flex items-start bg-purple-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Vyberte správný typ agenta</h3>
                <p className="text-gray-700">Potřebujete chatbota pro zákazníky? Automatizaci procesů? Pomoc s&nbsp;programováním? Každý typ úkolu vyžaduje jiný přístup a jiné nástroje.</p>
              </div>
            </div>

            <div className="flex items-start bg-purple-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Začněte s&nbsp;jednoduchým scénářem</h3>
                <p className="text-gray-700">Neautomatizujte všechno najednou. Vyberte jeden konkrétní proces, nastavte agenta a důkladně otestujte. Až bude fungovat spolehlivě, přidávejte další.</p>
              </div>
            </div>

            <div className="flex items-start bg-purple-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Iterujte a rozšiřujte</h3>
                <p className="text-gray-700">Sledujte výsledky, sbírejte zpětnou vazbu a postupně vylepšujte. AI agenti se učí a zlepšují – čím víc dat a zkušeností mají, tím lépe pracují.</p>
              </div>
            </div>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Pokud si nevíte rady, kde začít, nebo chcete pomoct s&nbsp;výběrem a nastavením AI agenta, <Link href="/kontakt" className="text-primary font-semibold hover:underline">ozvěte se mi</Link>. Ráda vám pomůžu najít řešení na míru. Zajímá vás i&nbsp;jak efektivně promptovat AI? Podívejte se na můj <Link href="/ebook" className="text-primary font-semibold hover:underline">e-book o&nbsp;promptování</Link>.
          </p>

          {/* FAQ */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Časté otázky o&nbsp;AI agentech
          </h2>

          <div className="space-y-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Co je AI agent?</h3>
              <p className="text-gray-700">AI agent je autonomní softwarový systém postavený na umělé inteligenci, který dokáže samostatně plánovat, rozhodovat se a vykonávat úkoly. Na rozdíl od běžného chatbotu nepotřebuje neustálé vedení – stačí mu zadat cíl a on najde cestu, jak ho dosáhnout.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Jaký je rozdíl mezi AI agentem a chatbotem?</h3>
              <p className="text-gray-700">Chatbot reaguje na jednotlivé zprávy – zeptáte se, odpoví. AI agent jde dál: dokáže si rozložit složitý úkol na kroky, použít nástroje (prohlížeč, databázi, API), učit se z&nbsp;výsledků a pracovat autonomně, dokud úkol nesplní.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Jsou AI agenti bezpeční?</h3>
              <p className="text-gray-700">Záleží na implementaci. Kvalitní AI agenti mají bezpečnostní vrstvy – omezená oprávnění, lidský dohled nad důležitými rozhodnutími a auditní záznamy. Důležité je nastavit jasné hranice toho, co agent smí a nesmí dělat.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Kolik stojí AI agent?</h3>
              <p className="text-gray-700">Cena závisí na typu agenta. Jednoduchý chatbot pro zákaznickou podporu lze provozovat za stovky korun měsíčně. Složitější automatizační agenti stojí tisíce korun, ale typicky se investice vrátí díky ušetřenému času a zvýšené produktivitě.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Potřebuji k&nbsp;používání AI agenta umět programovat?</h3>
              <p className="text-gray-700">Ne nutně. Existují platformy jako <a href="https://www.make.com/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Make.com</a> nebo <a href="https://zapier.com/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Zapier</a>, kde si AI agenta sestavíte vizuálně bez kódu. Pro pokročilejší scénáře se hodí základní technické znalosti, ale i ty se dají rychle naučit – například pomocí <Link href="/vibecoding" className="text-primary font-semibold hover:underline">vibecodingu</Link>.</p>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-purple-50 border-l-4 border-primary rounded-lg p-8 mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Chcete AI agenta ve&nbsp;vaší firmě?
            </h3>
            <p className="text-gray-700 mb-4">
              Pomůžu vám vybrat správný typ AI agenta, nastavit ho a nasadit do provozu. Ať už potřebujete chatbota pro zákazníky, automatizaci procesů nebo pomoc s&nbsp;vibecodingem – ozvěte se a probereme to. Úvodní konzultace je zdarma.
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
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/o-mne" className="text-gray-300 hover:text-yellow-400">O mně</Link></li>
                <li><Link href="/seo-konzultant-usti-nad-labem" className="text-gray-300 hover:text-yellow-400">SEO Ústí nad Labem</Link></li>
                <li><Link href="/tvorba-webu-bilina" className="text-gray-300 hover:text-yellow-400">Tvorba webů</Link></li>
                <li><Link href="/automatizace" className="text-gray-300 hover:text-yellow-400">Automatizace</Link></li>
                <li><Link href="/vibecoding" className="text-gray-300 hover:text-yellow-400">Vibecoding</Link></li>
                <li><Link href="/ai-agent" className="text-gray-300 hover:text-yellow-400">AI Agent</Link></li>
                <li><Link href="/ebook" className="text-gray-300 hover:text-yellow-400">E-book</Link></li>
                <li><Link href="/blog" className="text-gray-300 hover:text-yellow-400">Blog</Link></li>
                <li><Link href="/kontakt" className="text-gray-300 hover:text-yellow-400">Kontakt</Link></li>
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
