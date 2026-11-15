import Navigation from '@/components/navigation'
import ContactForm from '@/components/contact-form'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import JsonLd from '@/components/json-ld'
import SiteFooter from '@/components/site-footer'
import { getPageMetadata } from '@/lib/page-metadata'

export const metadata: Metadata = getPageMetadata('/webova-aplikace')

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.linklady.cz/webova-aplikace/#webpage",
      url: "https://www.linklady.cz/webova-aplikace",
      name: "Webová aplikace: co to je, příklady a vývoj na míru",
      description: "Srozumitelný průvodce webovými aplikacemi: co to je, typy, technologie a kdy se vyplatí.",
      isPartOf: { "@id": "https://www.linklady.cz/#website" },
      about: {
        "@type": "Thing",
        name: "Webová aplikace",
        description: "Interaktivní softwarová aplikace běžící v prohlížeči, která umožňuje uživatelům provádět konkrétní úkoly bez nutnosti instalace.",
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
          name: "Webová aplikace",
          item: "https://www.linklady.cz/webova-aplikace",
        },
      ],
    },
  ],
}

const sectionClass = "scroll-mt-28 py-10 border-b border-gray-200"
const headingClass = "text-2xl md:text-3xl font-bold text-gray-900 mb-6"
const linkClass = "text-primary font-semibold underline underline-offset-4"

const developmentSteps = [
  {
    title: "Zjištění potřeb",
    description: "Projdeme, jak dnes práci řešíte, kdo bude aplikaci používat a kde vznikají potíže. Ověříme také, jestli vám stačí hotový nástroj.",
    result: "Sepíšeme, co má první verze řešit a co může počkat.",
  },
  {
    title: "Návrh řešení",
    description: "Rozkreslíme hlavní obrazovky a cestu uživatele. Domluvíme, jaká data aplikace potřebuje a kdo k nim bude mít přístup.",
    result: "Nad návrhem si upřesníme rozsah a odhad práce.",
  },
  {
    title: "Prototyp",
    description: "Na prototypu si vyzkoušíte hlavní postup, třeba zadání objednávky. Ukáže se, co chybí nebo se špatně ovládá.",
    result: "Připomínky zapracujeme před dokončením funkcí.",
  },
  {
    title: "Vývoj aplikace",
    description: "Postupně připravím domluvené funkce, práci s daty a potřebná propojení. Rozpracovanou aplikaci spolu průběžně procházíme.",
    result: "Můžete si ověřit, jestli aplikace odpovídá vašemu zadání.",
  },
  {
    title: "Testování",
    description: "Ověříme běžné použití i chybové situace: neúplný formulář, přístup bez oprávnění nebo neúspěšné uložení. Zkontroluji také ovládání na mobilu.",
    result: "Nalezené chyby opravíme a dotčené funkce znovu vyzkoušíme.",
  },
  {
    title: "Spuštění a předání",
    description: "Aplikaci nasadím a předám přístupy ke kódu i hostingu. Projdeme obsluhu a domluvíme, kdo zajistí provoz a údržbu.",
    result: "Další úpravy plánujeme podle zkušeností z používání.",
  },
]

export default function WebovaAplikacePage() {
  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={jsonLd} />
      <Navigation />
      <main id="main-content">
        <header className="cf-page-hero">
          <div className="cf-wrap">
            <p className="cf-eyebrow">LINKLADY / WEBOVÉ APLIKACE</p>
            <h1>Webová aplikace: co to je, příklady a&nbsp;vývoj na&nbsp;míru</h1>
            <p>Webová aplikace je program, který používáte v&nbsp;prohlížeči. Můžete v&nbsp;ní vyřídit objednávku, upravit dokument nebo sledovat stav zakázky. Mezi známé příklady patří Gmail, Google Docs a&nbsp;Fakturoid.</p>
            <div className="cf-buttons">
              <a href="#priklady" className="cf-button">Podívat se na příklady</a>
              <a href="#poptavka-aplikace" className="inline-flex items-center min-h-11 text-white underline underline-offset-4 hover:text-orange-200">Probrat vlastní aplikaci</a>
            </div>
          </div>
        </header>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-lg text-gray-700 leading-relaxed">
          <section className={sectionClass} aria-labelledby="rozdil">
            <h2 id="rozdil" className={headingClass}>Jaký je rozdíl mezi webem a webovou aplikací</h2>
            <p className="mb-6">Web autoškoly s&nbsp;ceníkem, popisem kurzů a&nbsp;kontakty je prezentační web. Pokud by autoškola měla také systém, ve kterém si žák vybere volnou jízdu a&nbsp;rovnou ji rezervuje, tato část by byla webovou aplikací.</p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Prezentační web</h3>
                <p>Popisuje služby, ukazuje reference a&nbsp;uvádí kontakt. Pro firmu, která potřebuje představit svou nabídku, může stačit web s&nbsp;poptávkovým formulářem.</p>
              </div>
              <div className="rounded-lg bg-purple-50 p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Webová aplikace</h3>
                <p>Zpracovává vaše zadání. Třeba spočítá cenu podle vybraných parametrů nebo zobrazí objednávky přihlášeného zákazníka.</p>
              </div>
            </div>
            <p className="mt-6">Obojí může být součástí jednoho webu. Ani přihlášení není podmínkou: veřejnou kalkulačku můžete použít bez účtu.</p>
          </section>

          <section id="priklady" className={sectionClass} aria-labelledby="priklady-nadpis">
            <h2 id="priklady-nadpis" className={headingClass}>Příklady webových aplikací</h2>
            <p className="mb-6">V&nbsp;Google Docs upravujete dokument, ve Fakturoidu vystavujete faktury. Ve firmě může podobně fungovat klientský portál s&nbsp;doklady, evidence zakázek nebo rezervační systém.</p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Moje ukázka: poptávkový systém pro Yes.cz</h3>
            <p className="mb-6">Pro Yes.cz jsem vytvořila formulář pro poptávky produktů. Zákazník zadá specifikaci a&nbsp;počet kusů, může přidat další položky stejné značky a&nbsp;vybere požadovaný termín dodání. Formulář je dostupný česky i&nbsp;anglicky.</p>
            <figure className="mb-6">
              <Image src="/projects/yes-rfq-formular.jpg" alt="Formulář Yes.cz s výběrem značky, specifikací produktu, počtem kusů a tlačítkem pro přidání další položky" width={1440} height={710} sizes="(max-width: 768px) 100vw, 704px" className="w-full h-auto rounded-lg border border-gray-200" />
              <figcaption className="text-sm mt-3">Snímek obrazovky poptávkového formuláře Yes.cz: výběr produktů a&nbsp;zadání množství.</figcaption>
            </figure>
            <p className="mb-4">Poptávka má předem danou strukturu: položky s&nbsp;množstvím, termín dodání, čas pro zpracování nabídky a&nbsp;kontaktní údaje. Na tomto příkladu je vidět, jak se formulář přizpůsobuje konkrétnímu způsobu objednávání.</p>
            <p className="mt-6">Další realizace popisuji v&nbsp;článku <Link href="/blog/webove-aplikace-priklady" className={linkClass}>webové aplikace: příklady z praxe</Link>.</p>
          </section>

          <section className={sectionClass} aria-labelledby="vyber">
            <h2 id="vyber" className={headingClass}>Kdy stačí hotový nástroj a kdy aplikace na míru</h2>
            <p className="mb-6">Nejdřív si sepište, co má člověk v&nbsp;aplikaci vyřídit. U&nbsp;rezervací to může být výběr termínu, potvrzení a&nbsp;zrušení. Pak ověřte, jestli tento postup zvládne některá z&nbsp;hotových služeb.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-base">
                <caption className="sr-only">Volba řešení podle situace ve firmě</caption>
                <thead><tr className="border-b border-gray-300"><th scope="col" className="py-3 pr-5">Co potřebujete</th><th scope="col" className="py-3">Co ověřit jako první</th></tr></thead>
                <tbody>
                  <tr className="border-b border-gray-200"><th scope="row" className="py-4 pr-5 font-medium">Představit služby a přijmout zprávu</th><td className="py-4">Běžný web s kontaktním formulářem.</td></tr>
                  <tr className="border-b border-gray-200"><th scope="row" className="py-4 pr-5 font-medium">Rezervovat termíny nebo vystavovat faktury</th><td className="py-4">Hotovou službu, její cenu a možnosti nastavení.</td></tr>
                  <tr className="border-b border-gray-200"><th scope="row" className="py-4 pr-5 font-medium">Přenášet údaje mezi používanými nástroji</th><td className="py-4">Možnosti jejich propojení. Někdy stačí automatizace.</td></tr>
                  <tr><th scope="row" className="py-4 pr-5 font-medium">Vlastní postup schvalování nebo klientskou zónu s různými oprávněními</th><td className="py-4">Zda hotový nástroj pokryje celý postup. Chybějící funkce mohou být důvodem pro vývoj na míru.</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6">Při rozhodování počítejte i&nbsp;s&nbsp;provozem. U&nbsp;vlastní aplikace potřebujete zajistit údržbu, zálohování a&nbsp;další úpravy. U&nbsp;hotové služby si ověřte předplatné, omezení a&nbsp;možnost exportovat svá data.</p>
            <p className="mt-4">Pokud dnes hlavně přepisujete údaje mezi systémy, podívejte se také na <Link href="/automatizace" className={linkClass}>automatizaci procesů</Link>.</p>
          </section>

          <section className={sectionClass} aria-labelledby="cena">
            <h2 id="cena" className={headingClass}>Kolik stojí webová aplikace na míru</h2>
            <p className="mb-4">Moje hodinová sazba je 1&nbsp;200&nbsp;Kč. Cenu aplikace odhaduji podle zadání a&nbsp;počtu hodin práce.</p>
            <p className="mb-4">Rozsah ovlivňuje hlavně to, kolik různých uživatelů bude aplikaci používat, co smí každý z&nbsp;nich dělat a&nbsp;s&nbsp;jakými daty pracuje. Do odhadu patří také napojení na další systémy, testování a&nbsp;nasazení.</p>
            <p className="mb-4">Nejdřív domluvíme funkce první verze. Když se zadání změní, řeknu vám předem, jak se změna projeví v&nbsp;odhadu. Hosting a&nbsp;placené externí služby je potřeba zahrnout do rozpočtu na provoz.</p>
            <p>Podrobnosti spolupráce najdete na stránce <Link href="/sluzby/webove-aplikace" className={linkClass}>návrh a vývoj webových aplikací</Link>.</p>
          </section>

          <section className={sectionClass} aria-labelledby="fungovani">
            <h2 id="fungovani" className={headingClass}>Jak webová aplikace funguje</h2>
            <p className="mb-4">Když v&nbsp;rezervačním systému vyberete termín, prohlížeč odešle požadavek na server. Ten ověří dostupnost, uloží rezervaci do databáze a&nbsp;vrátí potvrzení. V&nbsp;prohlížeči pak uvidíte výsledek.</p>
            <p className="mb-4">Rozhraní, které ovládáte, se označuje jako frontend. Zpracování na serveru zajišťuje backend. Konkrétní rozdělení práce mezi prohlížeč a&nbsp;server záleží na aplikaci.</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Co znamenají SPA, PWA a SaaS</h3>
            <p className="mb-4">SPA označuje způsob, kdy se obsah aplikace mění bez načítání celé nové stránky. PWA může nabídnout instalaci na zařízení nebo některé funkce bez připojení. Dostupné možnosti záleží na tom, co vývojář připraví a&nbsp;co podporuje zařízení.</p>
            <p>SaaS znamená software poskytovaný jako služba, často za předplatné. Tato označení se mohou kombinovat. Samostatně neříkají, zda jde o&nbsp;rezervační systém, e-shop nebo jiný nástroj.</p>
          </section>

          <section className={sectionClass} aria-labelledby="postup">
            <h2 id="postup" className={headingClass}>Jak spolu připravíme aplikaci</h2>
            <p className="mb-8">Od prvního zadání postupujeme po menších krocích. Testování probíhá i během vývoje; když při zkoušení něco nesedí, vrátíme se k návrhu a upravíme ho.</p>
            <ol className="mb-8" aria-label="Postup přípravy webové aplikace">
              {developmentSteps.map((step, index) => (
                <li key={step.title} className="relative grid grid-cols-[2.5rem_minmax(0,1fr)] sm:grid-cols-[3rem_minmax(0,1fr)] gap-4 sm:gap-6 pb-8 last:pb-0">
                  {index < developmentSteps.length - 1 && (
                    <span aria-hidden="true" className="absolute left-5 sm:left-6 top-10 sm:top-12 bottom-0 border-l-2 border-gray-200" />
                  )}
                  <span aria-hidden="true" className="relative z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#171d32] text-white text-base font-semibold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 sm:p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-base sm:text-lg">{step.description}</p>
                    <p className="mt-4 border-t border-gray-200 pt-4 text-base text-gray-700">{step.result}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mb-4">Technologie vybírám podle projektu i možností další správy. Při vývoji používám také AI nástroje; kód kontroluji a testuji.</p>
            <p>Jednotlivé fáze a&nbsp;přípravu zadání rozebírám v&nbsp;návodu <Link href="/blog/jak-vytvorit-webovou-aplikaci" className={linkClass}>jak vytvořit webovou aplikaci</Link>.</p>
          </section>

          <section className={sectionClass} aria-labelledby="otazky">
            <h2 id="otazky" className={headingClass}>Na co se ptáte před zadáním</h2>
            <div className="space-y-6">
              <div><h3 className="text-xl font-semibold text-gray-900 mb-2">Bude aplikace fungovat v telefonu?</h3><p>Webovou aplikaci můžete otevřít v&nbsp;mobilním prohlížeči. Ovládání a&nbsp;zobrazení je potřeba navrhnout a&nbsp;otestovat i&nbsp;pro menší obrazovky. Samostatná aplikace do App Store je jiný typ projektu.</p></div>
              <div><h3 className="text-xl font-semibold text-gray-900 mb-2">Co když se zadání během práce změní?</h3><p>Účtuji po hodinách. Než se pustím do změny, domluvíme její rozsah a&nbsp;upravíme odhad práce.</p></div>
              <div><h3 className="text-xl font-semibold text-gray-900 mb-2">Komu patří kód?</h3><p>Vám. Dostanete přístup do repozitáře i&nbsp;k&nbsp;hostingu, aby na práci mohl navázat další vývojář.</p></div>
              <div><h3 className="text-xl font-semibold text-gray-900 mb-2">Jaké zakázky přijímáte?</h3><p>Zadání i&nbsp;průběh práce řešíte přímo se mnou. Velké e-shopy s&nbsp;napojením na skladové systémy a&nbsp;mobilní aplikace do App Store přenechávám specialistům. Termíny domlouvám s&nbsp;rezervou i&nbsp;pro případ nemoci.</p></div>
            </div>
          </section>

          <div id="poptavka-aplikace" className="scroll-mt-28 mt-12">
            <ContactForm service="Webová aplikace na míru" title="Proberme vaši aplikaci" subtitle="Popište, co dnes řešíte ručně a kdo bude aplikaci používat. Odpovím do 24 hodin. Konzultace je zdarma a nezávazná." />
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}
