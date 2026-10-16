import Link from 'next/link'
import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import SiteFooter from '@/components/site-footer'
import JsonLd from '@/components/json-ld'

const title = 'Co obsahuje SEO audit: postup a ukázky nálezů'
const description = 'Jak poznat použitelný SEO audit: technická kontrola, obsah, priority a ověření oprav. Konkrétní příklady z auditu webu Linklady.'
const url = 'https://www.linklady.cz/blog/co-obsahuje-seo-audit'
export const metadata: Metadata = {
  title, description, alternates: { canonical: url },
  authors: [{ name: 'Pavla Zimmermannová', url: 'https://www.linklady.cz/o-mne' }],
  openGraph: { type: 'article', title, description, url, locale: 'cs_CZ', publishedTime: '2026-10-16', modifiedTime: '2026-10-16' },
}
const contents = [
  ['podklady', 'Jaké podklady si připravit'], ['kontrola', 'Co má audit zkontrolovat'],
  ['ukazky', 'Ukázky z kontroly Linklady'], ['priority', 'Jak určit priority'], ['predani', 'Co dostat při předání'],
] as const

export default function SeoAuditArticle() {
  return <>
    <Navigation />
    <main id="main-content">
      <JsonLd data={{ '@context': 'https://schema.org', '@graph': [
        { '@type': 'Article', headline: title, description, url, mainEntityOfPage: url, datePublished: '2026-10-16', dateModified: '2026-10-16', inLanguage: 'cs', author: { '@id': 'https://www.linklady.cz/#person' }, publisher: { '@id': 'https://www.linklady.cz/#business' } },
        { '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Úvod', item: 'https://www.linklady.cz' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.linklady.cz/blog' },
          { '@type': 'ListItem', position: 3, name: title, item: url },
        ] },
      ] }} />
      <header className="cf-page-hero">
        <div className="cf-wrap">
          <Link href="/blog" className="cf-back">← Zpět na blog</Link>
          <p className="cf-eyebrow">SEO / PRAKTICKÝ POSTUP</p>
          <h1>{title}</h1>
          <p>SEO audit má ukázat, co opravit, proč to má smysl a jak poznat, že je oprava hotová. Samotný seznam chyb z nástroje k tomu nestačí.</p>
          <p className="text-sm"><Link href="/o-mne" className="underline">Pavla Zimmermannová</Link> · <time dateTime="2026-10-16">16. října 2026</time></p>
        </div>
      </header>
      <article className="cf-wrap cf-section cf-service-body">
        <nav aria-label="Obsah článku" className="rounded-2xl bg-slate-50 p-6">
          <h2>V článku najdete</h2><ul>{contents.map(([id, label]) => <li key={id}><a href={`#${id}`} className="underline">{label}</a></li>)}</ul>
        </nav>
        <section id="podklady">
          <h2>Jaké podklady si připravit</h2>
          <p>Nejdřív si řekněte, co má web přinášet: poptávky určité služby, objednávky nebo návštěvy provozovny. Seznam služeb, cílové oblasti a typických zákaznických otázek pomůže odlišit důležité stránky od těch, které obchodní cíl nepodporují.</p>
          <p>Pro veřejnou kontrolu stačí adresa webu. Pro posouzení skutečné viditelnosti jsou potřeba data z Google Search Console: dotazy, vstupní stránky, vývoj kliknutí a stav indexace. Analytika doplní, co návštěvníci na webu dokončují. Přístupy se sdílejí pozvánkou s potřebnými oprávněními, nikoli posíláním hesel.</p>
          <p>Bez těchto dat lze popsat technické a obsahové problémy. Nelze z nich poctivě určit, kolik zákazníků web kvůli konkrétní chybě ztrácí.</p>
        </section>
        <section id="kontrola">
          <h2>Co má SEO audit zkontrolovat</h2>
          <ul>
            <li><strong>Dostupnost a indexaci:</strong> stavové kódy, robots.txt, noindex, kanonické adresy, sitemapu a přesměrování starých URL. Odpověď 200 sama neprokazuje zařazení do Googlu.</li>
            <li><strong>Strukturu webu:</strong> zda mají hlavní služby vlastní srozumitelné stránky, vedou na ně interní odkazy a několik podobných stránek si zbytečně nekonkuruje.</li>
            <li><strong>Obsah a hledání:</strong> zda stránka odpovídá záměru dotazu, vysvětluje nabídku a dokládá své závěry. Titulek a nadpis musí vystihovat skutečný obsah.</li>
            <li><strong>Použitelnost:</strong> mobilní navigaci, čitelnost, formuláře, chybové stavy a cestu k poptávce. U rychlosti odlišit laboratorní test od dat skutečných návštěvníků.</li>
            <li><strong>Měření:</strong> co přesně je konverze a zda se událost odešle až po úspěšném dokončení. Nastavení souhlasu může ovlivnit rozsah naměřených návštěv.</li>
          </ul>
          <p>U klíčových slov propojte dotaz, záměr a cílovou URL. Například „co obsahuje SEO audit“ patří do vysvětlujícího článku, zatímco nabídka auditu a způsob spolupráce patří na <Link href="/sluzby/seo" className="underline">stránku SEO služeb</Link>. Hledanost je jeden podklad; sama neurčuje obchodní hodnotu tématu.</p>
        </section>
        <section id="ukazky">
          <h2>Ukázky z kontroly Linklady</h2>
          <p>Při veřejné kontrole Linklady 16. října 2026 bylo prověřeno 34 různých obsahových stránek. Následující příklady ukazují konkrétní nález a způsob opravy. Jde o kontrolu vlastního webu, nikoli o výsledky klientské kampaně.</p>
          <ul>
            <li><strong>Nejasný název služby:</strong> nadpis „Méně rutiny. Více prostoru.“ nevysvětloval nabídku. Nahradil ho popis „AI a automatizace pro firmy“. Kontrola opravy spočívá v ověření nadpisu a titulku stránky, nikoli v příslibu vyšší pozice.</li>
            <li><strong>Nesoulad u e-booku:</strong> stránka slibovala okamžité stažení po platbě, ale tlačítko vedlo na kontakt. Text nyní říká, že dostupnost, cenu a předání je potřeba nejprve potvrdit.</li>
            <li><strong>Zastaralé datum v sitemapě:</strong> datum poslední změny neodpovídalo úpravě hlavních stránek. Aktualizace se má vázat na skutečnou významnou změnu obsahu, ne automaticky na každé sestavení webu.</li>
            <li><strong>Obtížný výběr článků:</strong> přehled blogu začínal dlouhou úvodní částí. Zkrácení úvodu a filtry SEO, Weby a AI zjednodušují hledání tématu. Ověření zahrnuje ovládání na telefonu i klávesnicí.</li>
          </ul>
          <p>Tato kontrola neobsahovala soukromé reporty Search Console ani potvrzení konverzí v GA4. Z oprav proto nevyvozuji růst návštěvnosti či poptávek. Ten je potřeba sledovat až v datech po nasazení.</p>
        </section>
        <section id="priority">
          <h2>Jak určit priority</h2>
          <p>Každému nálezu přiřaďte dopad, jistotu a pracnost. Nedostupná hlavní služba nebo nefunkční formulář obvykle potřebují řešení dříve než kosmetická úprava vedlejšího článku. O změně URL rozhodujte i podle dosavadní návštěvnosti a odkazů; plošné přesměrování všeho na úvod může návštěvníka zavést jinam, než očekává.</p>
          <p>Použitelný záznam může znít: „URL /ebook — příslib stažení neodpovídá kontaktování autorky — upravit nabídku a FAQ — odpovídá správce obsahu — ověřit shodu textu s cílem tlačítka.“ Takový úkol má jasný konec a lze ho předat další osobě.</p>
        </section>
        <section id="predani">
          <h2>Co dostat při předání auditu</h2>
          <p>Výstup by měl obsahovat rozsah a datum kontroly, použité zdroje, dotčené URL, důkaz problému, návrh opravy a pořadí prací. Odděleně mají být uvedené věci, které bez přístupů nebo podkladů nešlo ověřit. Domluvte si také, kdo opravy provede a zda cena zahrnuje následnou kontrolu.</p>
          <p>U Linklady začíná SEO audit orientačně na 5 000 Kč. Konkrétní cenu a rozsah si potvrdíme podle velikosti a stavu webu. Úvodní rozhovor slouží k vyjasnění zadání; podrobný audit je samostatná práce.</p>
          <p>Po nasazení nejdřív ověřte, že se nezhoršila dostupnost, formuláře a indexovatelnost. Následně sledujte vybrané vstupní stránky, dotazy a dokončené poptávky v porovnatelném období. Zohledněte sezónnost i další změny. Audit ani jeho opravy nezaručují první pozici.</p>
          <Link href="/kontakt" className="cf-button">Probrat audit mého webu ↗</Link>
        </section>
        <section>
          <h2>Zdroje a další čtení</h2>
          <p><Link href="/blog/analyza-klicovych-slov" className="underline">Analýza klíčových slov na příkladu Linklady</Link> propojuje dotazy zákazníků s konkrétními službami a články.</p>
          <ul>
            <li><a className="underline" href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content">Google: tvorba užitečného a důvěryhodného obsahu</a></li>
            <li><a className="underline" href="https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap">Google: sestavení sitemapy a údaj lastmod</a></li>
            <li><a className="underline" href="https://developers.google.com/search/docs/appearance/page-experience">Google: uživatelská zkušenost na stránce</a></li>
          </ul>
        </section>
      </article>
    </main>
    <SiteFooter />
  </>
}
