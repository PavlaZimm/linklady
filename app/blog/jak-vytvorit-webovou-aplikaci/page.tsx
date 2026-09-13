import Navigation from '@/components/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import JsonLd from '@/components/json-ld'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Jak vytvořit webovou aplikaci: postup krok za krokem',
  description: 'Jak vytvořit webovou aplikaci od nápadu po spuštění. Praktický postup, výběr technologií, testování, cena a nejčastější chyby.',
  authors: [{ name: 'Pavla Zimmermannová', url: 'https://www.linklady.cz/o-mne' }],
  alternates: { canonical: 'https://www.linklady.cz/blog/jak-vytvorit-webovou-aplikaci' },
  openGraph: {
    type: 'article',
    locale: 'cs_CZ',
    url: 'https://www.linklady.cz/blog/jak-vytvorit-webovou-aplikaci',
    siteName: 'Linklady.cz',
    title: 'Jak vytvořit webovou aplikaci: postup krok za krokem',
    description: 'Praktický postup od prvního zadání přes prototyp a testování až po spuštění webové aplikace.',
    images: [{
      url: '/profile.jpg',
      width: 500,
      height: 600,
      alt: 'Jak vytvořit webovou aplikaci – průvodce od Pavly Zimmermannové',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jak vytvořit webovou aplikaci krok za krokem',
    description: 'Od nápadu a prototypu až po bezpečné spuštění webové aplikace.',
    images: ['/profile.jpg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': 'https://www.linklady.cz/blog/jak-vytvorit-webovou-aplikaci/#article',
      headline: 'Jak vytvořit webovou aplikaci: praktický postup krok za krokem',
      description: 'Praktický postup vytvoření webové aplikace od zadání přes prototyp, vývoj a testování až po spuštění.',
      url: 'https://www.linklady.cz/blog/jak-vytvorit-webovou-aplikaci',
      datePublished: '2026-09-13',
      dateModified: '2026-09-13',
      author: { '@id': 'https://www.linklady.cz/#person' },
      publisher: { '@id': 'https://www.linklady.cz/#business' },
      isPartOf: { '@id': 'https://www.linklady.cz/blog/#webpage' },
      mainEntityOfPage: 'https://www.linklady.cz/blog/jak-vytvorit-webovou-aplikaci',
      inLanguage: 'cs',
      about: [
        { '@type': 'Thing', name: 'Webová aplikace' },
        { '@type': 'Thing', name: 'Vývoj webových aplikací' },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Úvod', item: 'https://www.linklady.cz' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.linklady.cz/blog' },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Jak vytvořit webovou aplikaci',
          item: 'https://www.linklady.cz/blog/jak-vytvorit-webovou-aplikaci',
        },
      ],
    },
  ],
}

const steps = [
  {
    title: 'Popište problém, ne seznam funkcí',
    text: 'Začněte jednou větou: kdo má aplikaci používat, co dnes dělá ručně a jak poznáte, že nové řešení funguje. Dobré zadání není „chci dashboard“, ale třeba „obchodník má do dvou minut zjistit stav objednávky bez hledání v e-mailech“.',
  },
  {
    title: 'Vyberte nejmenší použitelnou verzi',
    text: 'MVP má vyřešit jeden hlavní proces od začátku do konce. Přihlášení, role, platby nebo exporty přidávejte jen tehdy, když je první uživatel opravdu potřebuje. Menší první verze se rychleji otestuje a levněji opraví.',
  },
  {
    title: 'Sepište data a oprávnění',
    text: 'Určete, jaká data aplikace ukládá, kdo je smí vidět a kdo je může měnit. U zákaznických nebo zaměstnaneckých údajů řešte zabezpečení a přístupy dřív než barvy tlačítek.',
  },
  {
    title: 'Postavte funkční prototyp',
    text: 'Prototyp musí jít rozkliknout na mobilu i počítači. Na reálném scénáři rychle poznáte, co v zadání chybí. Dnes ho lze s pomocí AI nástrojů připravit během dnů, ale každý výstup musí projít lidskou kontrolou.',
  },
  {
    title: 'Zvolte technologii podle provozu',
    text: 'Technologii vybírejte podle počtu uživatelů, citlivosti dat, potřebných integrací a toho, kdo bude aplikaci dál spravovat. Moderní řešení často kombinuje Next.js nebo React s databází a ověřováním uživatelů.',
  },
  {
    title: 'Otestujte skutečné úkoly',
    text: 'Nestačí ověřit, že tlačítko reaguje. Otestujte celý proces, chybové stavy, pomalé připojení, malý telefon, různá oprávnění i obnovu zapomenutého hesla. Důležité akce musí mít srozumitelnou zpětnou vazbu.',
  },
  {
    title: 'Spusťte, měřte a vylepšujte',
    text: 'Po nasazení sledujte chyby, rychlost, dokončení hlavních úkolů a zpětnou vazbu uživatelů. Druhá verze má vycházet z používání první, ne z dalšího seznamu přání vytvořeného před spuštěním.',
  },
]

export default function JakVytvoritWebovouAplikaciPage() {
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
              <li className="text-yellow-400">Jak vytvořit webovou aplikaci</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Jak vytvořit webovou aplikaci krok za krokem
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Praktický postup od prvního nápadu přes prototyp a testování až po spuštění. Bez zbytečného technického žargonu.
          </p>
          <div className="mt-6 text-sm opacity-75">
            <time dateTime="2026-09-13">13. září 2026</time>
            <span className="mx-2">|</span>
            <Link href="/o-mne" className="hover:text-yellow-400">Pavla Zimmermannová</Link>
          </div>
        </div>
      </header>

      <main>
        <article className="py-14 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xl text-gray-800 leading-relaxed mb-6">
              Webovou aplikaci vytvoříte tak, že nejprve přesně vymezíte jeden problém, připravíte nejmenší použitelnou verzi, otestujete ji s reálnými uživateli a teprve potom přidáváte další funkce. Kód je až prostředek. Nejdůležitější je správně navržený proces.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              Pokud si nejste jistí rozdílem mezi běžným webem a aplikací, začněte přehledem <Link href="/webova-aplikace" className="text-primary font-semibold hover:underline">co je webová aplikace, jak funguje a kolik stojí</Link>. Tady se zaměříme přímo na její vytvoření.
            </p>

            <aside className="bg-purple-50 border border-purple-100 rounded-2xl p-6 md:p-8 mb-12">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Nejdřív rozhodněte, zda aplikaci opravdu potřebujete</h2>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Stačí web:</strong> když hlavně představujete firmu, služby a kontakt.</li>
                <li><strong>Stačí formulář nebo automatizace:</strong> když jen sbíráte data a posíláte je do CRM či tabulky.</li>
                <li><strong>Potřebujete webovou aplikaci:</strong> když se uživatelé přihlašují, pracují s vlastními daty nebo procházejí vícekrokovým procesem.</li>
              </ul>
            </aside>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Postup vytvoření webové aplikace</h2>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <section key={step.title} className="flex gap-5">
                  <div className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{step.text}</p>
                  </div>
                </section>
              ))}
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-16 mb-6">Co musí být v zadání</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Pro první odhad nepotřebujete padesátistránkovou dokumentaci. Stačí odpovědět na následující otázky:
            </p>
            <ul className="space-y-3 mb-12 text-gray-700">
              {[
                'Kdo bude aplikaci používat a jak často?',
                'Jaký úkol musí uživatel dokončit?',
                'Jak se proces řeší dnes a kde vznikají chyby?',
                'Jaká data se ukládají a kdo k nim má přístup?',
                'S jakými systémy se musí aplikace propojit?',
                'Co je nutné v první verzi a co může počkat?',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-primary font-bold" aria-hidden="true">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-16 mb-6">Jak vybrat způsob vývoje</h2>
            <div className="overflow-x-auto mb-12">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-3 pr-4 text-gray-900">Přístup</th>
                    <th className="py-3 pr-4 text-gray-900">Hodí se pro</th>
                    <th className="py-3 text-gray-900">Na co si dát pozor</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-4 font-semibold">No-code</td>
                    <td className="py-4 pr-4">Jednoduché interní nástroje a ověření nápadu</td>
                    <td className="py-4">Limity platformy a závislost na dodavateli</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-4 font-semibold">Vibecoding s dohledem</td>
                    <td className="py-4 pr-4">Rychlé prototypy a menší aplikace na míru</td>
                    <td className="py-4">Bez kontroly vzniká nekonzistentní nebo nezabezpečený kód</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 pr-4 font-semibold">Klasický vývoj</td>
                    <td className="py-4 pr-4">Složité systémy, citlivá data a velké týmy</td>
                    <td className="py-4">Vyšší rozpočet a delší cesta k první verzi</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              <Link href="/vibecoding" className="text-primary font-semibold hover:underline">Vibecoding</Link> umí vývoj výrazně zrychlit, ale nenahrazuje návrh architektury, testování ani odpovědnost za výsledek. U aplikace pracující s osobními nebo firemními daty je lidská kontrola zásadní.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-16 mb-6">Kolik vytvoření webové aplikace stojí</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Cena se odvíjí hlavně od počtu uživatelských rolí, datového modelu, integrací a složitosti jednotlivých procesů. Proto je přesnější ocenit konkrétní funkce v hodinách než slibovat univerzální balíček.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Moje sazba je <strong>1 200 Kč za hodinu</strong>. Po krátkém zadání dostanete odhad rozsahu i ceny předem. První verzi držím co nejmenší, abyste neplatili za funkce, které nakonec nikdo nepoužije.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-16 mb-6">Příklady z praxe</h2>
            <div className="grid gap-5 mb-12">
              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-2">Poptávkový systém</h3>
                <p className="text-gray-700">Zákazník skládá produkty po značkách, doplňuje množství, termín a podmínky. Firma dostane strukturovanou poptávku místo neúplného e-mailu.</p>
              </div>
              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-2">Obsah spravovaný bez programátora</h3>
                <p className="text-gray-700">Autoškola si sama upravuje termíny kurzů, ceník a aktuality. Databáze odděluje obsah od kódu a snižuje náklady na běžnou správu.</p>
              </div>
              <div className="rounded-xl border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-2">Aplikace s aktuálními daty</h3>
                <p className="text-gray-700">Sledování letů načítá informace z externího zdroje a převádí je do přehledu, který je použitelný i na telefonu.</p>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-16 mb-6">Nejčastější chyby</h2>
            <ul className="space-y-4 text-gray-700 mb-12">
              <li><strong>Příliš velká první verze:</strong> vývoj se prodlužuje dřív, než cokoli otestuje první uživatel.</li>
              <li><strong>Nejasný vlastník dat a kódu:</strong> předem musí být jasné, kdo má přístupy, repozitář a možnost změnit dodavatele.</li>
              <li><strong>Testování jen na počítači:</strong> formulář, tabulka i navigace musí fungovat na reálném telefonu.</li>
              <li><strong>Chybějící chybové stavy:</strong> aplikace musí srozumitelně reagovat i při výpadku připojení nebo špatně vyplněných datech.</li>
              <li><strong>Spuštění bez měření:</strong> bez analytiky a logování nepoznáte, kde lidé končí a co je potřeba opravit.</li>
            </ul>

            <aside className="bg-gradient-to-br from-purple-50 to-yellow-50 border border-purple-100 rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Máte nápad na webovou aplikaci?</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Napište mi, kdo ji bude používat a co má vyřešit. Do 24 hodin vám řeknu, co patří do první verze, jaký postup dává smysl a kolik hodin přibližně zabere.
              </p>
              <Link href="/kontakt" className="inline-block bg-primary text-white px-7 py-3.5 rounded-lg font-bold hover:bg-purple-800 transition-colors">
                Chci nezávazný odhad
              </Link>
            </aside>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  )
}
