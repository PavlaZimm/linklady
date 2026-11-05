import Navigation from '@/components/navigation'
import ContactForm from '@/components/contact-form'
import Link from 'next/link'
import type { Metadata } from 'next'
import JsonLd from '@/components/json-ld'
import SiteFooter from '@/components/site-footer'
import { getPageMetadata } from '@/lib/page-metadata'

export const metadata: Metadata = getPageMetadata('/automatizace')

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.linklady.cz/automatizace/#webpage",
      url: "https://www.linklady.cz/automatizace",
      name: "Automatizace procesů pro firmy",
      description: "Automatizace procesů šetří čas a peníze. Pomáhám firmám nastavit automatizace v marketingu, CRM, HR i fakturaci.",
      isPartOf: { "@id": "https://www.linklady.cz/#website" },
      about: {
        "@type": "Service",
        name: "Automatizace procesů",
        provider: { "@id": "https://www.linklady.cz/#person" },
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
          item: "https://www.linklady.cz",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Automatizace",
          item: "https://www.linklady.cz/automatizace",
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
      <main id="main-content">

      {/* Hero Section */}
      {/* Vymezení proti průmyslové automatizaci.
          SERP na "automatizace malých firem" (29. 8. 2026) vede
          k robotizaci ve výrobě: Omron, iROZHLAS o robotech, katalog
          průmyslových firem. Kdo hledá odstranění administrativy,
          si to musí hned poznat. */}
      <section className="py-10 bg-amber-50 border-y border-amber-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-900 font-semibold mb-2">
            Automatizace administrativy
          </p>
          <p className="text-gray-700 leading-relaxed">
            Pomáhám automatizovat administrativu malých firem: ruční
            přepisování faktur, opakující se e-maily a přenos dat
            mezi nástroji. Řeším tedy kancelářskou práci, nikoli
            robotizaci výroby.
          </p>
        </div>
      </section>

      <header className="cf-page-hero">
        <div className="cf-wrap">
          <p className="cf-eyebrow">LINKLADY / SEO · WEBY · AI</p>
          <h1>
              Automatizace pro malé firmy: co se vyplatí a co ne
            </h1>
          <p>
              Propojím vaše nástroje přes Make.com, n8n nebo Zapier, zautomatizuji rutinu a vy se budete moct soustředit na to, co vás živí.
            </p>
          <div className="cf-buttons"><Link href="/" className="cf-button">Úvod</Link></div>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Přepisování dat z formulářů do tabulky, posílání e-mailů novým zákazníkům a kopírování faktur do účetního systému zabere jednotlivě pár minut. Pokud se úkoly opakují každý den, nasčítají se hodiny práce.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Procesní automatizace propojí nástroje, které používáte, aby si data předávaly automaticky. Řadu takových propojení lze nastavit bez týmu programátorů.
          </p>

          {/* Section: Co je automatizace */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Co je automatizace procesů
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Automatizace procesů v praxi znamená jednoduchou věc: vezmete úkon, který děláte pořád dokola, a nastavíte ho tak, aby proběhl sám. Přijde objednávka? Systém podle nastavených pravidel vytvoří fakturu, pošle potvrzení zákazníkovi a zapíše vše do vaší tabulky. Nový lead vyplní formulář? CRM ho založí, pošle uvítací e-mail a přiřadí obchodníkovi.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            V malé firmě je čas strávený administrativou citelný. Když jste ve firmě tři a jeden z vás jí věnuje půl dne, vyplatí se projít, které úkoly může převzít software.
          </p>

          {/* Section: Jaké procesy automatizovat */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Co všechno se dá automatizovat
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Automatizaci můžete využít například v těchto oblastech:
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start bg-blue-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Marketing a e-mailing</h3>
                <p className="text-gray-700">Automatické uvítací sekvence, follow-upy po nákupu, segmentace kontaktů, publikování příspěvků na sociální sítě.</p>
              </div>
            </div>

            <div className="flex items-start bg-blue-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">CRM a obchod</h3>
                <p className="text-gray-700">Automatická tvorba kontaktů, přiřazení obchodníků, notifikace o nových leadech, připomínky follow-upů. Připomínky pomáhají hlídat, komu se ještě potřebujete ozvat.</p>
              </div>
            </div>

            <div className="flex items-start bg-blue-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Fakturace a administrativa</h3>
                <p className="text-gray-700">Generování faktur z objednávek, odesílání upomínek, zápis do účetního softwaru.</p>
              </div>
            </div>

            <div className="flex items-start bg-blue-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">HR a onboarding</h3>
                <p className="text-gray-700">Nový zaměstnanec nastoupí a automaticky dostane přístupy, uvítací materiály, rozplánované schůzky. Automatizace HR procesů může omezit opakované ruční zadávání. Přidělení citlivých přístupů musí mít jasná pravidla a kontrolu.</p>
              </div>
            </div>

            <div className="flex items-start bg-blue-50 rounded-lg p-5">
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
            Nejčastěji pracuji s následujícími nástroji. Vybírám je podle potřebného propojení a složitosti úkolu:
          </p>

          <div className="space-y-8 mb-8">
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                <a href="https://www.make.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Make.com</a> (dříve Integromat)
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Můj hlavní nástroj. Make má vizuální editor, kde doslova vidíte, jak data tečou mezi aplikacemi. Podporuje stovky integrací: od Google Sheets přes Shopify až po Fakturoid. Výběr tarifu závisí na četnosti běhů a funkcích scénáře; aktuální limity je potřeba ověřit u dodavatele.
              </p>
            </div>

            <div className="border-l-4 border-yellow-400 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                <a href="https://n8n.io/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">n8n</a>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Alternativa s dostupným zdrojovým kódem, kterou si můžete hostovat sami. Hodí se pro technicky zdatnější uživatele a firmy, které chtějí spravovat vlastní provoz. V n8n můžete sestavit složitější scénáře s vlastní logikou nebo napojením na interní systémy.
              </p>
            </div>

            <div className="border-l-4 border-blue-300 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                <a href="https://zapier.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Zapier</a>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Zapier slouží k propojování aplikací a má knihovnu s více než 6 000 integracemi. Jednoduché propojení lze nastavit během minut. U složitějších scénářů porovnejte náklady s Make.
              </p>
            </div>

            <div className="border-l-4 border-gray-300 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                <a href="https://ecomail.cz/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ecomail</a>
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Český nástroj pro newslettery a automatické e-mailové sekvence. Má českou podporu, funkce pro práci se souhlasy podle GDPR a napojení na české e-shopy.
              </p>
            </div>
          </div>

          {/* Section: AI + automatizace */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak zapojit AI do automatizace
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Klasická automatizace funguje na principu &bdquo;když se stane X, udělej Y&ldquo;. Ale co když potřebujete, aby systém rozuměl kontextu? Třeba aby rozpoznal, jestli je e-mail od zákazníka reklamace nebo dotaz, a podle toho ho přesměroval?
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Automatizační nástroje můžete propojit s <Link href="/vibecoding" className="text-primary font-semibold hover:underline">umělou inteligencí</Link> a využít je například k těmto úkolům:
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-primary rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <span className="text-gray-700">Automatická klasifikace příchozích zpráv: AI přečte e-mail, rozpozná záměr a přesměruje na správné oddělení</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-primary rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <span className="text-gray-700">Generování personalizovaných odpovědí: zákazník dostane relevantní odpověď během sekund, ne hodin</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-primary rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <span className="text-gray-700">Analýza dat a reporting: AI zpracuje výsledky kampaní a připraví přehled s doporučeními</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-primary rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <span className="text-gray-700">Tvorba obsahu: návrhy příspěvků na sociální sítě, popisky produktů, návrhy e-mailů</span>
            </li>
          </ul>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            V praxi to vypadá tak, že v <a href="https://www.make.com/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Make.com</a> napojíte modul s AI (třeba ChatGPT nebo Claude) do svého automatizačního scénáře. Chcete se naučit s AI pracovat efektivněji? Podívejte se na můj <Link href="/ebook" className="text-primary font-semibold hover:underline">e-book o promptování AI</Link>.
          </p>

          {/* Section: Bez programování */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Automatizace bez programování: jde to opravdu?
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Ano. Make.com, Zapier i Ecomail umožňují vizuální stavění scénářů. Přetahujete bloky, propojujete je a nastavujete podmínky.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Samozřejmě existují situace, kdy se trocha kódu hodí: třeba u pokročilejších transformací dat nebo napojení na nestandardní API. Řadu běžných propojení lze sestavit vizuálně; možnosti závisejí na konkrétních aplikacích. Pokud potřebujete pomoc, navrhnu pro vás <Link href="/sluzby/ai-automatizace" className="text-primary font-semibold hover:underline">automatizaci firemních procesů na míru</Link>.
          </p>

          {/* Section: Jak to vypadá v praxi */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak automatizaci ve firmě zavádím
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Začínám zmapováním práce a návrhem jednoho konkrétního postupu:
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start bg-blue-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Zmapuji vaše procesy</h3>
                <p className="text-gray-700">Nejdřív potřebuji pochopit, jak věci ve vaší firmě fungují. Kde trávíte nejvíc času? Co vás brzdí? Kde děláte chyby z únavy? Na základě toho identifikuji, kde automatizace přinese největší efekt.</p>
              </div>
            </div>

            <div className="flex items-start bg-blue-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Navrhnu řešení</h3>
                <p className="text-gray-700">Vyberu správné nástroje a navrhnu scénáře. U někoho to bude jednoduchý Zap v Zapieru, u jiného komplexní workflow v Make.com napojený na CRM, e-shop a účetní systém.</p>
              </div>
            </div>

            <div className="flex items-start bg-blue-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Nastavím a otestuji</h3>
                <p className="text-gray-700">Scénáře postavím, důkladně otestuji na reálných datech a ujistím se, že vše běží spolehlivě.</p>
              </div>
            </div>

            <div className="flex items-start bg-blue-50 rounded-lg p-5">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 mr-4">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Předám a zaškolím</h3>
                <p className="text-gray-700">Dostanete kompletní dokumentaci a zaškolení, abyste rozuměli tomu, co se děje. Díky tomu můžete automatizaci spravovat sami.</p>
              </div>
            </div>
          </div>

          {/* Section: Pro koho */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-12 mb-6">
            Pro koho je automatizace procesů
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Pracuji s klienty z různých oborů:
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#FF795E] rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <span className="text-gray-700">E-shopy: automatizace objednávek, fakturace, e-mailových kampaní</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#FF795E] rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <span className="text-gray-700">Malé a střední firmy: automatizace administrativy, CRM, reportingu</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#FF795E] rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <span className="text-gray-700">Marketingové agentury: automatizace publikování, klientského reportingu</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#FF795E] rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <span className="text-gray-700">Freelanceři a OSVČ: automatizace fakturace, follow-upů, plánování</span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#FF795E] rounded-full mr-4 mt-2.5 flex-shrink-0"></div>
              <span className="text-gray-700">Personální agentury: automatizace HR procesů, onboardingu, komunikace s kandidáty</span>
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
              <p className="text-gray-700">Ne. Nástroje jako Make.com nebo <a href="https://zapier.com/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Zapier</a> fungují vizuálně: běžné scénáře skládáte z bloků přetahováním myší bez psaní kódu.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Kolik stojí automatizace pro malou firmu?</h3>
              <p className="text-gray-700">Jsou to dvě různé částky. Nástroj: tarif Make.com závisí na spotřebě a zvolených funkcích. A moje práce na nastavení: 1&nbsp;200&nbsp;Kč za hodinu. Rozsah práce a průběžné provozní náklady odhadnu podle konkrétního scénáře před zahájením.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Jaké procesy se dají automatizovat?</h3>
              <p className="text-gray-700">Například tyto opakující se úkoly: e-mailový marketing, správa CRM, fakturace, reporting, publikování na sociální sítě, onboarding zaměstnanců, zpracování objednávek a mnoho dalšího.</p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Jak dlouho trvá zavedení automatizace?</h3>
              <p className="text-gray-700">Záleží na složitosti. Jednoduchý scénář (propojení formuláře s e-mailem) trvá pár hodin. Komplexnější automatizace celého obchodního procesu může trvat týden nebo dva.</p>
            </div>
          </div>

          {/* Poptávka */}
          <div id="poptavka" className="mt-12 scroll-mt-24">
            <ContactForm
              service="Automatizace procesů"
              title="Co ve firmě děláte pořád ručně?"
              subtitle="Popište mi opakující se úkol. Zdarma a nezávazně probereme, zda ho lze automatizovat a kolik času by to mohlo ušetřit."
            />
          </div>
        </div>
      </article>

      </main>
      <SiteFooter />
    </div>
  )
}
