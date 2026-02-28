import Navigation from '@/components/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import JsonLd from '@/components/json-ld'

export const metadata: Metadata = {
  title: "Automatizace procesů pro firmy | Make.com, n8n, Zapier | Linklady.cz",
  description: "Automatizace procesů šetří čas a peníze. Pomáhám firmám nastavit automatizace v marketingu, CRM, HR i fakturaci přes Make.com a další nástroje. Bez programování.",
  keywords: [
    "automatizace",
    "procesní automatizace",
    "automatizace procesů",
    "ai automatizace",
    "marketingová automatizace",
    "automatizace marketingu",
    "make automatizace",
    "automatizace bez programování",
    "automatizace malých firem",
    "automatizace crm",
    "automatizace hr",
    "automatizace praha",
    "automatizace v podnikání",
  ],
  alternates: {
    canonical: "https://linklady.cz/automatizace",
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://linklady.cz/automatizace",
    siteName: "Linklady.cz",
    title: "Automatizace procesů pro firmy – ušetřete hodiny práce týdně",
    description: "Nastavím vám automatizace přes Make.com, n8n nebo Zapier. Marketing, fakturace, CRM, HR – vše bez programování.",
    images: [
      {
        url: "/profile.jpg",
        width: 500,
        height: 600,
        alt: "Pavla Zimmermannová – automatizace procesů pro firmy",
      },
    ],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://linklady.cz/automatizace/#webpage",
      url: "https://linklady.cz/automatizace",
      name: "Automatizace procesů pro firmy",
      description: "Automatizace procesů šetří čas a peníze. Pomáhám firmám nastavit automatizace v marketingu, CRM, HR i fakturaci.",
      isPartOf: { "@id": "https://linklady.cz/#website" },
      about: {
        "@type": "Service",
        name: "Automatizace procesů",
        provider: { "@id": "https://linklady.cz/#person" },
        serviceType: "Procesní automatizace",
        areaServed: {
          "@type": "Country",
          name: "Česká republika",
        },
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
          name: "Automatizace",
          item: "https://linklady.cz/automatizace",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Co je automatizace procesů?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Automatizace procesů znamená nahrazení opakujících se manuálních úkonů softwarem. Místo toho, abyste ručně přepisovali data z e-mailů do tabulek nebo posílali follow-up zprávy, to za vás udělá nástroj jako Make.com nebo n8n.",
          },
        },
        {
          "@type": "Question",
          name: "Potřebuji k automatizaci umět programovat?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ne. Nástroje jako Make.com nebo Zapier fungují vizuálně – scénáře skládáte z bloků přetahováním myší. Žádný kód není potřeba.",
          },
        },
        {
          "@type": "Question",
          name: "Kolik stojí automatizace pro malou firmu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Make.com má bezplatný plán s 1 000 operacemi měsíčně. Placené plány začínají na cca 250 Kč/měsíc. U většiny malých firem se investice vrátí během prvního měsíce díky ušetřenému času.",
          },
        },
        {
          "@type": "Question",
          name: "Jaké procesy se dají automatizovat?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Prakticky cokoliv, co děláte opakovaně: e-mailový marketing, správa CRM, fakturace, reporting, publikování na sociální sítě, onboarding zaměstnanců, zpracování objednávek a mnoho dalšího.",
          },
        },
      ],
    },
  ],
}

export default function AutomatizacePage() {
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
                <li className="text-yellow-400">Automatizace</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 relative z-10 max-w-4xl mx-auto leading-tight">
              Automatizace procesů pro firmy: Ušetřete hodiny práce každý týden
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto relative z-10">
              Propojím vaše nástroje, zautomatizuji rutinu a vy se budete moct soustředit na to, co vás živí.
            </p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Ruku na srdce – kolik času denně trávíte věcmi, které by za vás klidně mohl dělat software? Přepisování dat z formulářů do tabulky. Ruční posílání e-mailů novým zákazníkům. Kopírování faktur do účetního systému. Každý ten úkon zabere pár minut, ale dohromady vám sežerou hodiny.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Přesně tohle řeší <strong>procesní automatizace</strong>. Není to žádná sci-fi a nepotřebujete k tomu tým programátorů. Stačí správně propojit nástroje, které už pravděpodobně používáte – a nechat je pracovat za vás.
          </p>

          {/* Section: Co je automatizace */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Co je automatizace procesů a proč ji řešit teď
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Automatizace procesů v praxi znamená jednoduchou věc: vezmete úkon, který děláte pořád dokola, a nastavíte ho tak, aby proběhl sám. Přijde objednávka? Systém automaticky vytvoří fakturu, pošle potvrzení zákazníkovi a zapíše vše do vaší tabulky. Nový lead vyplní formulář? CRM ho založí, pošle uvítací e-mail a přiřadí obchodníkovi.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Nejde přitom jen o velké korporáty. <strong>Automatizace malých firem</strong> dává obrovský smysl právě proto, že malé týmy nemají lidi nazbyt. Když jste ve firmě tři a jeden z vás tráví půl dne administrativou, je to problém. Automatizace ten čas vrátí zpátky do byznysu.
          </p>

          {/* Section: Jaké procesy automatizovat */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Co všechno se dá automatizovat
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Tady je stručný přehled oblastí, kde automatizace funguje nejlíp. Není to vyčerpávající seznam – spíš inspirace, co všechno je možné:
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start bg-purple-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Marketing a e-mailing</h3>
                <p className="text-gray-700">Automatické uvítací sekvence, follow-upy po nákupu, segmentace kontaktů, publikování příspěvků na sociální sítě. Tohle je oblast, kde automatizace šetří nejvíc času – a zároveň přináší peníze.</p>
              </div>
            </div>

            <div className="flex items-start bg-purple-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">CRM a obchod</h3>
                <p className="text-gray-700">Automatická tvorba kontaktů, přiřazení obchodníků, notifikace o nových leadech, připomínky follow-upů. <strong>Automatizace CRM</strong> znamená, že vám žádný potenciální zákazník nepropadne sítem.</p>
              </div>
            </div>

            <div className="flex items-start bg-purple-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Fakturace a administrativa</h3>
                <p className="text-gray-700">Generování faktur z objednávek, odesílání upomínek, zápis do účetního softwaru. Tohle je přesně ta nudná práce, na kterou nikdo nemá náladu – a přitom se dá kompletně automatizovat.</p>
              </div>
            </div>

            <div className="flex items-start bg-purple-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">HR a onboarding</h3>
                <p className="text-gray-700">Nový zaměstnanec nastoupí a automaticky dostane přístupy, uvítací materiály, rozplánované schůzky. <strong>Automatizace HR</strong> procesů ušetří personalistům desítky hodin měsíčně.</p>
              </div>
            </div>

            <div className="flex items-start bg-purple-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Řízení projektů</h3>
                <p className="text-gray-700">Automatické vytváření úkolů z e-mailů, notifikace o deadlinech, propojení Trella nebo Asany s ostatními nástroji. Automatizace projektu znamená méně chaosu a víc přehledu.</p>
              </div>
            </div>
          </div>

          {/* Section: Nástroje */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jaké nástroje na automatizaci používám (a doporučuji)
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Na trhu existuje několik skvělých platforem pro automatizaci. Každá má své silné stránky a hodí se na trochu jiný typ úloh. Tady jsou ty, se kterými pracuji nejčastěji:
          </p>

          <div className="space-y-8 mb-8">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                <a href="https://www.make.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Make.com</a> (dříve Integromat)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Můj hlavní nástroj. Make má vizuální editor, kde doslova vidíte, jak data tečou mezi aplikacemi. Podporuje stovky integrací – od Google Sheets přes Shopify až po Fakturoid. Oproti konkurenci nabízí výrazně víc flexibility za rozumnou cenu. Bezplatný plán zvládne 1 000 operací měsíčně, což na rozjezd bohatě stačí.
              </p>
            </div>

            <div className="border-l-4 border-yellow-400 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                <a href="https://n8n.io/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">n8n</a>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Open-source alternativa, kterou si můžete hostovat sami. Ideální pro firmy, které chtějí mít data plně pod kontrolou, nebo pro technicky zdatnější uživatele. n8n se skvěle hodí na složitější scénáře, kde potřebujete vlastní logiku nebo napojení na interní systémy.
              </p>
            </div>

            <div className="border-l-4 border-purple-300 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                <a href="https://zapier.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Zapier</a>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Nejznámější automatizační platforma na světě. Zapier je nejjednodušší na naučení – pokud potřebujete rychle propojit dvě aplikace, je to otázka minut. Má největší knihovnu integrací (přes 6 000 aplikací). Nevýhoda? U složitějších scénářů je výrazně dražší než Make.
              </p>
            </div>

            <div className="border-l-4 border-gray-300 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                <a href="https://ecomail.cz/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ecomail</a>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Český nástroj na e-mail marketing s propracovanou automatizací. Pokud posíláte newslettery nebo potřebujete automatické e-mailové sekvence, Ecomail je skvělá volba – hlavně díky české podpoře, GDPR compliance a napojení na české e-shopy.
              </p>
            </div>
          </div>

          {/* Section: AI + automatizace */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            AI a automatizace: Když to spojíte, je to jiná liga
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Klasická automatizace funguje na principu &bdquo;když se stane X, udělej Y&ldquo;. Ale co když potřebujete, aby systém rozuměl kontextu? Třeba aby rozpoznal, jestli je e-mail od zákazníka reklamace nebo dotaz, a podle toho ho přesměroval?
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Právě tady přichází ke slovu <strong>AI automatizace</strong>. Propojením automatizačních nástrojů s umělou inteligencí vznikají scénáře, které by ještě před pár lety zněly jako sci-fi:
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-primary rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <span className="text-gray-700"><strong className="text-gray-900">Automatická klasifikace příchozích zpráv</strong> – AI přečte e-mail, rozpozná záměr a přesměruje na správné oddělení</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-primary rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <span className="text-gray-700"><strong className="text-gray-900">Generování personalizovaných odpovědí</strong> – zákazník dostane relevantní odpověď během sekund, ne hodin</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-primary rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <span className="text-gray-700"><strong className="text-gray-900">Analýza dat a reporting</strong> – AI zpracuje výsledky kampaní a připraví přehled s doporučeními</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-primary rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <span className="text-gray-700"><strong className="text-gray-900">Tvorba obsahu</strong> – návrhy příspěvků na sociální sítě, popisky produktů, návrhy e-mailů</span>
            </li>
          </ul>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            V praxi to vypadá tak, že v <a href="https://www.make.com/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Make.com</a> napojíte modul s AI (třeba ChatGPT nebo Claude) do svého automatizačního scénáře. Funguje to překvapivě jednoduše a výsledky jsou často lepší, než byste čekali.
          </p>

          {/* Section: Bez programování */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Automatizace bez programování – jde to opravdu?
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Ano, jde. A to je právě důvod, proč automatizace v posledních letech tak roste. Všechny nástroje, které jsem zmínila – Make.com, Zapier i Ecomail – fungují na principu vizuálního stavění scénářů. Přetahujete bloky, propojujete je a nastavujete podmínky. Žádný kód, žádný terminál.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Samozřejmě existují situace, kdy se trocha kódu hodí – třeba u pokročilejších transformací dat nebo napojení na nestandardní API. Ale 90 % běžných automatizací zvládnete čistě vizuálně. A pokud si na to netroufáte sami, ráda vám s tím pomůžu.
          </p>

          {/* Section: Jak to vypadá v praxi */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak automatizaci ve firmě zavádím
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Neslibuji zázraky a neautomatizuji všechno najednou. Místo toho postupuji krok za krokem:
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start bg-purple-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Zmapuji vaše procesy</h3>
                <p className="text-gray-700">Nejdřív potřebuji pochopit, jak věci ve vaší firmě fungují. Kde trávíte nejvíc času? Co vás brzdí? Kde děláte chyby z únavy? Na základě toho identifikuji, kde automatizace přinese největší efekt.</p>
              </div>
            </div>

            <div className="flex items-start bg-purple-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Navrhnu řešení</h3>
                <p className="text-gray-700">Vyberu správné nástroje a navrhnu scénáře. U někoho to bude jednoduchý Zap v Zapieru, u jiného komplexní workflow v Make.com napojený na CRM, e-shop a účetní systém.</p>
              </div>
            </div>

            <div className="flex items-start bg-purple-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Nastavím a otestuji</h3>
                <p className="text-gray-700">Scénáře postavím, důkladně otestuji na reálných datech a ujistím se, že vše běží spolehlivě. Žádné &bdquo;snad to bude fungovat&ldquo; – automatizace musí být stoprocentní.</p>
              </div>
            </div>

            <div className="flex items-start bg-purple-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Předám a zaškolím</h3>
                <p className="text-gray-700">Dostanete kompletní dokumentaci a zaškolení, abyste rozuměli tomu, co se děje. Cílem je, abyste byli soběstační – ne závislí na mně.</p>
              </div>
            </div>
          </div>

          {/* Section: Pro koho */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Pro koho je automatizace procesů
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Automatizace v podnikání není jenom pro technologické firmy. Pracuji s klienty z různých oborů:
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <span className="text-gray-700"><strong className="text-gray-900">E-shopy</strong> – automatizace objednávek, fakturace, e-mailových kampaní</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <span className="text-gray-700"><strong className="text-gray-900">Malé a střední firmy</strong> – automatizace administrativy, CRM, reportingu</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <span className="text-gray-700"><strong className="text-gray-900">Marketingové agentury</strong> – automatizace publikování, klientského reportingu</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <span className="text-gray-700"><strong className="text-gray-900">Freelanceri a OSVČ</strong> – automatizace fakturace, follow-upů, plánování</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <span className="text-gray-700"><strong className="text-gray-900">Personální agentury</strong> – automatizace HR procesů, onboardingu, komunikace s kandidáty</span>
            </li>
          </ul>

          {/* FAQ Section */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Časté otázky o automatizaci
          </h2>

          <div className="space-y-6 mb-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Co je automatizace procesů?</h3>
              <p className="text-gray-700">Automatizace procesů znamená nahrazení opakujících se manuálních úkonů softwarem. Místo toho, abyste ručně přepisovali data z e-mailů do tabulek nebo posílali follow-up zprávy, to za vás udělá nástroj jako <a href="https://www.make.com/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Make.com</a> nebo <a href="https://n8n.io/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">n8n</a>.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Potřebuji k automatizaci umět programovat?</h3>
              <p className="text-gray-700">Ne. Nástroje jako Make.com nebo <a href="https://zapier.com/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Zapier</a> fungují vizuálně – scénáře skládáte z bloků přetahováním myší. Žádný kód není potřeba.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Kolik stojí automatizace pro malou firmu?</h3>
              <p className="text-gray-700">Make.com má bezplatný plán s 1 000 operacemi měsíčně. Placené plány začínají na cca 250 Kč/měsíc. U většiny malých firem se investice vrátí během prvního měsíce díky ušetřenému času.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Jaké procesy se dají automatizovat?</h3>
              <p className="text-gray-700">Prakticky cokoliv, co děláte opakovaně: e-mailový marketing, správa CRM, fakturace, reporting, publikování na sociální sítě, onboarding zaměstnanců, zpracování objednávek a mnoho dalšího.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Jak dlouho trvá zavedení automatizace?</h3>
              <p className="text-gray-700">Záleží na složitosti. Jednoduchý scénář (propojení formuláře s e-mailem) trvá pár hodin. Komplexnější automatizace celého obchodního procesu může trvat týden nebo dva. Ale výsledek stojí za to.</p>
            </div>
          </div>

          {/* CTA Box */}
          <div className="bg-purple-50 border-l-4 border-primary rounded-lg p-8 mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Chcete zjistit, co všechno se dá ve vaší firmě automatizovat?
            </h3>
            <p className="text-gray-700 mb-4">
              Ozvěte se mi a probereme to. Zdarma vám řeknu, kde vidím největší potenciál a kolik času i peněz vám automatizace může ušetřit. Žádné závazky.
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
