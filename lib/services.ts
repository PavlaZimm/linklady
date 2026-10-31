type Service = {
  slug: string;
  title: string;
  seoTitle?: string;
  updated?: string;
  metaDescription?: string;
  intro: string;
  contactPrompt?: string;
  legacy: string;
  legacyLabel: string;
  sections: { title: string; text: string; items: string[] }[];
  related: string;
  questions?: { question: string; answer: string }[];
  reading?: { href: string; label: string }[];
};

export const services: Service[] = [
  {
    slug: "seo",
    title: "SEO pro váš web a podnikání",
    seoTitle: "SEO služby a konzultace pro firmy",
    intro: "Pomůžu vám zjistit, co brání vašemu webu ve vyhledávání. Propojím SEO audit, analýzu klíčových slov a obsah do konkrétního plánu úprav pro vaše podnikání.",
    legacy: "/seo-konzultant-usti-nad-labem",
    legacyLabel: "SEO konzultace v Ústí nad Labem",
    sections: [
      {
        title: "Začínáme vaším webem a zákazníky",
        text: "Podívám se na současný obsah, technický stav webu a témata, která vaši zákazníci hledají. Z auditu vznikne seznam konkrétních priorit.",
        items: [
          "SEO audit a technické nedostatky",
          "Analýza klíčových slov a hledaných témat",
          "Struktura webu a interní odkazy",
        ],
      },
      {
        title: "Obsah, který dává smysl",
        text: "Navážu obsahovým plánem a úpravami stránek. Důležitá je srozumitelnost pro čtenáře i jasné zaměření jednotlivých URL.",
        items: [
          "Obsahové zadání a copywriting",
          "Lokální SEO a firemní profily",
          "Průběžné vyhodnocování v Search Console",
        ],
      },
      {
        title: "Jak vypadá výstup SEO auditu",
        text: "Připravím přehled nálezů, podle kterého se dá naplánovat práce a ověřit opravy. Uvedu také, co bez přístupů nebo dalších podkladů nešlo prověřit. Provedení oprav a případnou následnou kontrolu domluvíme zvlášť podle rozsahu spolupráce.",
        items: [
          "Zjištěný problém a konkrétní dotčená URL",
          "Důkaz nebo postup, kterým lze problém ověřit",
          "Dopad na web a priorita řešení",
          "Doporučená oprava pro správce obsahu nebo vývojáře",
          "Způsob kontroly po úpravě: co znovu projít nebo změřit",
        ],
      },
      {
        title: "Co dostanete a jak se stanoví cena",
        text: "Jednorázový SEO audit začíná od 5 000 Kč, průběžná SEO správa od 8 000 Kč měsíčně. Jde o orientační výchozí ceny; konkrétní rozsah a cenu si potvrdíme před zahájením. Úvodní rozhovor slouží k upřesnění zadání, nenahrazuje placený audit.",
        items: ["Přehled konkrétních URL, nálezů a doporučených oprav", "Priority podle dopadu a náročnosti", "Domluvený rozsah implementace a způsob předání", "Výchozí měření a termín společného vyhodnocení"],
      },
    ],
    related: "tvorba-webu",
    questions: [
      { question: "Co dostanu z analýzy klíčových slov?", answer: "Seznam relevantních dotazů rozdělený podle témat a záměru hledajícího. Přiřadím je ke stávajícím nebo navrženým stránkám a označím priority. Výstup tak využijete pro strukturu webu, úpravy služeb i plán článků." },
      { question: "Můžeme začít jednorázovým SEO auditem?", answer: "Ano. Audit může být samostatné zadání. Dostanete přehled problémů, jejich důsledků a doporučené pořadí oprav. Pak se rozhodnete, zda úpravy předáte svému týmu, nebo na nich budeme pokračovat společně." },
      { question: "Kolik stojí SEO a kdy se projeví výsledky?", answer: "Cena závisí na velikosti a stavu webu, konkurenci i rozsahu spolupráce. Po úvodním probrání zadání připravím nabídku. Změny ve vyhledávání vyhodnocujeme průběžně; konkrétní pozici ani termín jejího dosažení nelze slíbit." },
    ],
    reading: [
      { href: "/blog/analyza-klicovych-slov", label: "Analýza klíčových slov na příkladu Linklady" },
      { href: "/blog/co-obsahuje-seo-audit", label: "Co obsahuje SEO audit a jak vypadají nálezy" },
      { href: "/sluzby/linkbuilding", label: "Linkbuilding jako součást SEO" },
      { href: "/11-tipu-jak-ziskat-validni-zpetny-odkaz/", label: "Jak získávat relevantní zpětné odkazy" },
    ],
  },
  {
    slug: "linkbuilding",
    metaDescription: "Vyberu relevantní příležitosti pro odkazy a spolupráce. Připravím obsah, oslovení a přehled umístění podle vašeho oboru.",
    title: "Linkbuilding",
    intro: "Relevantní odkazy začínají užitečným obsahem a dobrými vztahy.",
    legacy:
      "/linkbuilding-outreach-jak-budovat-zpetne-odkazy-a-posilit-autoritu-webu/",
    legacyLabel: "Jak pracovat s linkbuildingem a outreachem",
    sections: [
      {
        title: "Kde má odkaz smysl",
        text: "Prozkoumám současný odkazový profil a tematické možnosti. Cílem je najít weby, které mají vztah k vašemu oboru a čtenářům.",
        items: [
          "Analýza odkazového profilu",
          "Tematická relevance a výběr příležitostí",
          "Plán pro obsah a oslovení webů",
        ],
      },
      {
        title: "Spolupráce a přehled",
        text: "Důležitá je kvalita umístění, transparentní domluva a přehled o získaných odkazech. Počet odkazů sám o sobě nevypovídá o přínosu.",
        items: [
          "Outreach a komunikace",
          "Obsah vhodný pro získávání odkazů",
          "Evidence a kontrola umístění",
        ],
      },
    ],
    related: "seo",
  },
  {
    slug: "tvorba-webu",
    title: "Tvorba webových stránek na míru",
    seoTitle: "Tvorba webových stránek na míru",
    intro:
      "Navrhnu a vytvořím firemní web, na kterém zákazníci pochopí vaši nabídku a snadno vás kontaktují. Od struktury a obsahu přes vzhled až po funkční web se SEO základem.",
    legacy: "/tvorba-webu-bilina",
    legacyLabel: "Tvorba webových stránek v Bílině",
    sections: [
      {
        title: "Nejdřív obsah a cesta návštěvníka",
        text: "Probereme, pro koho web vzniká a co má návštěvník udělat. Připravíme strukturu, obsah a vizuální směr.",
        items: [
          "Struktura a navigace",
          "Obsah a výzvy k akci",
          "Návrh pro mobil i počítač",
        ],
      },
      {
        title: "Technický základ i předání",
        text: "Při realizaci řeším rychlost, přístupnost a SEO. Před spuštěním ověřím formuláře, odkazy a chování na různých obrazovkách.",
        items: [
          "Responzivní implementace",
          "Metadata, sitemap a zachování URL",
          "Testování a předání webu",
        ],
      },
      {
        title: "Nový web i promyšlený redesign",
        text: "Pokud už web máte, nejdřív zmapuji jeho stránky a obsah. U redesignu připravíme návaznost původních a nových adres, aby návštěvníci i vyhledávače našli správný obsah.",
        items: ["Přehled současných URL a návrh jejich zachování", "Přesměrování změněných adres podle migrační mapy", "Kontrola indexovatelnosti a interních odkazů", "Domluva správy obsahu a podpory po spuštění"],
      },
      {
        title: "Rozpočet, předání a další provoz",
        text: "Jednoduchý prezentační web začíná od 9 000 Kč, firemní web s více stránkami od 25 000 Kč a e-shop od 40 000 Kč. Jsou to orientační výchozí ceny. Konečnou nabídku připravím podle obsahu, funkcí a způsobu správy.",
        items: ["Předem upřesníme, kdo dodá texty, fotografie a další podklady", "Domluvíme administraci, přístupy a způsob předání", "Oddělíme cenu realizace od domény, hostingu a placených nástrojů", "Vyjasníme podporu po spuštění a nacenění pozdějších změn"],
      },
    ],
    questions: [
      { question: "Kolik stojí tvorba webových stránek?", answer: "Záleží na počtu a typu stránek, připravenosti textů a fotografií, správě obsahu a potřebných funkcích. Po upřesnění zadání dostanete nabídku s rozsahem práce. Hosting, doménu a případné další provozní náklady si vyjasníme předem." },
      { question: "Co potřebuji připravit?", answer: "Pro začátek stačí popsat vaše služby, zákazníky a účel webu. Pomohou současné stránky, logo, fotografie a ukázky stylu, který je vám blízký. Chybějící podklady a jejich přípravu zahrneme do zadání." },
      { question: "Je SEO součástí tvorby webu?", answer: "Při realizaci řeším strukturu nadpisů, metadata, interní odkazy, sitemap a technickou dostupnost stránek pro vyhledávače. Podrobnou analýzu klíčových slov, rozsáhlejší obsah a průběžnou SEO práci domluvíme podle potřeb projektu." },
      { question: "Můžete upravit i stávající web?", answer: "Ano. Nejdřív ověřím jeho technický stav a možnosti úprav. Podle toho doporučím úpravu jednotlivých stránek, doplnění funkcí nebo redesign. Termín stanovíme podle rozsahu a připravených podkladů." },
    ],
    reading: [
      { href: "/blog/kolik-stoji-webove-stranky", label: "Kolik stojí webové stránky a jejich provoz" },
      { href: "/blog/zadani-webu", label: "Jak připravit zadání webu" },
      { href: "/sluzby/seo", label: "SEO pro nový i stávající web" },
      { href: "/projekty/autoskola-jana", label: "Ukázka projektu: Autoškola Jana" },
      { href: "/blog/webove-aplikace-priklady", label: "Kdy firemní web doplnit webovou aplikací" },
    ],
    related: "webove-aplikace",
  },
  {
    slug: "webove-aplikace",
    updated: "2026-10-31",
    metaDescription: "Vývoj webové aplikace na míru: vlastní dashboard, interní evidence nebo klientský portál. Navrhnu první verzi, propojím data a domluvíme cenu i provoz.",
    seoTitle: "Vývoj webové aplikace na míru",
    title: "Vývoj webové aplikace na míru",
    intro: "Vytvořím webovou aplikaci, která vám pomůže s evidencí, reportingem nebo předáváním dat. Od zadání a první funkční verze přes napojení systémů až po otestování a předání. Funguje v prohlížeči na počítači i telefonu.",
    legacy: "/webova-aplikace",
    legacyLabel: "Webové aplikace a příklady z praxe",
    contactPrompt: "Napište mi, kdo bude aplikaci používat a jaký problém má vyřešit.",
    sections: [
      {
        title: "Kdy dává aplikace na míru smysl",
        text: "Pokud vám hotový nástroj pokryje potřebný postup, může stačit jeho nastavení. Aplikaci na míru navrhnu tam, kde potřebujete vlastní práci s daty, propojit více systémů nebo zpřístupnit různé funkce různým lidem. Nejdřív s vámi porovnám potřeby a možnosti dostupných řešení.",
        items: ["Poptávkové systémy a konfigurátory", "Interní evidence a klientské portály", "Vlastní dashboardy a přehledy dat", "Interaktivní nástroje napojené na externí zdroje"],
      },
      {
        title: "Vlastní dashboard místo ručního skládání přehledů",
        text: "Potřebujete na jednom místě vidět stav zakázek, výsledky webů nebo údaje z několika nástrojů? Navrhnu vlastní webový dashboard podle toho, co potřebujete rozhodovat. Předem ověřím dostupnost dat, význam jednotlivých ukazatelů a četnost aktualizace.",
        items: ["Přehledy s filtry, tabulkami a grafy podle potřeb týmu", "Napojení na dohodnutá API, databáze nebo exporty", "Zobrazení času poslední aktualizace a informace při výpadku zdroje", "Přístupy a exporty podle domluveného rozsahu"],
      },
      {
        title: "Co spolu vyjasníme před návrhem",
        text: "Projdeme konkrétní pracovní postup a vybereme rozsah první použitelné verze. Pomůže mi ukázka současné evidence a popis situací, ve kterých vám nestačí.",
        items: [
          "Kdo bude aplikaci používat a co v ní potřebuje dokončit",
          "Jaká data potřebuje, odkud přicházejí a kam se předávají",
          "Uživatelské role: kdo smí údaje vidět, měnit nebo schvalovat",
          "Funkce první verze a to, co může počkat na později",
        ],
      },
      {
        title: "Jak probíhá vývoj webové aplikace",
        text: "Začneme jedním konkrétním úkolem a návrhem obrazovek. Na první funkční verzi si vyzkoušíte celý postup se vzorkem dat. Teprve podle zpětné vazby doplníme další funkce. Změny rozsahu průběžně posoudíme podle dopadu na cenu a termín.",
        items: ["Zadání, datové zdroje a vymezení první verze", "Prototyp a společné ověření pracovního postupu", "Vývoj funkcí, napojení dat a kontrola oprávnění", "Testování běžných úkolů i chybových situací před spuštěním"],
      },
      {
        title: "Kolik stojí vývoj webové aplikace",
        text: "Cenu připravím podle rozsahu funkcí, uživatelských rolí, stavu dat a potřebných napojení. Před zahájením si potvrdíme odhad práce, výstupy první verze a způsob schvalování změn. Hosting, databáze a placené služby mají vlastní provozní náklady, které oddělím od ceny vývoje.",
        items: ["Rozsah první verze a odhad práce před realizací", "Náklady na externí data, API a další nástroje", "Způsob předání kódu, účtů a přístupů", "Podpora a rozvoj po spuštění podle dohody"],
      },
      {
        title: "Ověření, předání a další správa",
        text: "Předem domluvím, podle čeho společně poznáme, že aplikace plní zadání. Projdeme běžné použití i chybové situace. Způsob předání, provozní náklady a případnou další správu vyjasníme v nabídce podle konkrétního řešení.",
        items: ["Ověření hlavních scénářů na počítači i telefonu", "Kontrola vstupních dat, přístupů a propojení", "Domluva, kdo bude spravovat obsah, přístupy a další změny"],
      },
    ],
    questions: [
      { question: "Co potřebuji připravit pro nacenění?", answer: "Popište, kdo bude aplikaci používat, co dnes řešíte ručně a jak má vypadat hotový výstup. Přiložte anonymizovanou ukázku tabulky nebo současné evidence, seznam používaných nástrojů a funkce, bez kterých se první verze neobejde. Přístupy a citlivá data vyřešíme až dohodnutým způsobem." },
      { question: "Jak dlouho vývoj webové aplikace trvá?", answer: "Termín závisí na rozsahu, dostupnosti dat a připravenosti podkladů. Po upřesnění zadání navrhnu jednotlivé fáze a termín první použitelné verze. Dashboard nad jedním zdrojem má jiný rozsah než portál s několika rolemi a napojením na více systémů." },
      { question: "Lze propojit aplikaci s nástroji, které už používáme?", answer: "Nejdřív ověřím, zda mají použitelné API, export nebo jiný dostupný způsob předání dat. Pak domluvíme, co a jak často přenášet a co má aplikace udělat při chybě. Propojení nelze slíbit bez prověření konkrétního systému." },
      { question: "Můžeme začít jen menším dashboardem nebo prototypem?", answer: "Ano. Vybereme jeden pracovní postup, potřebné ukazatele a dostupný zdroj dat. První verze má ověřit užitek v praxi. Rozšíření o další zdroje, role nebo automatizace můžeme naplánovat podle skutečného používání." },
    ],
    reading: [
      { href: "/projekty/spacelady", label: "SpaceLady: ukázka interaktivní webové aplikace" },
      { href: "/projekty/flyqueens", label: "FlyQueens: práce s externími leteckými daty" },
      { href: "/blog/jak-vytvorit-webovou-aplikaci", label: "Jak vytvořit webovou aplikaci: postup od zadání po spuštění" },
      { href: "/blog/webove-aplikace-priklady", label: "Webové aplikace: příklady a využití ve firmách" },
      { href: "/sluzby/web-scraping", label: "Web scraping: sběr a příprava dat pro aplikaci" },
      { href: "/blog/reporting-a-dashboard", label: "Reporting a dashboard: co připravit před návrhem" },
    ],
    related: "ai-automatizace",
  },
  {
    slug: "ai-automatizace",
    metaDescription: "Propojím formuláře, CRM a reporting do funkční automatizace. Vybereme konkrétní proces, nastavíme kontrolu chyb a domluvíme správu.",
    title: "AI a automatizace pro firmy",
    seoTitle: "AI automatizace pro firmy",
    intro: "AI a automatizace pro konkrétní úkoly ve vašem podnikání.",
    legacy: "/automatizace",
    legacyLabel: "Automatizace procesů a Make.com",
    contactPrompt: "Popište mi úkol, který opakujete, a nástroje, ve kterých pracujete.",
    sections: [
      {
        title: "Začneme jedním opakujícím se úkolem",
        text: "Přijďte s postupem, při kterém opakovaně přepisujete údaje, předáváte požadavky nebo sestavujete přehledy. Nejlépe se posuzují úkoly s jasným vstupem, pravidly a očekávaným výstupem. Nejdřív s vámi projdu, jak práci děláte dnes a kde vznikají výjimky.",
        items: ["Používané nástroje a dostupné přístupy", "Ukázka vstupních dat a požadovaného výsledku", "Četnost úkolu, objem dat a postup při výjimkách"],
      },
      {
        title: "Tři příklady možného řešení",
        text: "Jde o příklady použití, nikoli o popis realizovaných zakázek. Dostupnost propojení závisí na konkrétních nástrojích, jejich možnostech a vašich přístupech.",
        items: ["Předání poptávky z formuláře do evidence nebo CRM", "Upozornění na nový požadavek a jeho přiřazení", "Pravidelný přehled dat z propojených zdrojů"],
      },
      {
        title: "Nejdřív ověřím proveditelnost",
        text: "Prověřím možnosti propojení nástrojů, potřebná oprávnění a kvalitu vstupních dat. Na domluveném vzorku ověřím klíčový krok a chování při chybě. Podle výsledku navrhnu rozsah řešení; pokud některé propojení není dostupné, vysvětlím omezení před realizací.",
        items: ["Dostupné integrace a jejich limity", "Zkouška předání dat a kontrola výsledku", "Postup při chybějících údajích nebo selhání propojení"],
      },
      {
        title: "Kde zůstává lidská kontrola",
        text: "AI zapojím jen tam, kde má jasnou roli a lze ověřit její výstup. Společně určíme kroky, které musí člověk schválit, a situace, které se vrátí k ručnímu zpracování. Citlivé údaje, oprávnění a odpovědnost za výsledek probereme předem.",
        items: ["Kdo kontroluje výstupy a schvaluje další krok", "Jak se dozvíte o chybě a kdo ji řeší", "Jaká data smí řešení používat a komu jsou přístupná"],
      },
      {
        title: "Cena a následný provoz",
        text: "Cenu ovlivňuje počet a složitost kroků, dostupnost propojení, příprava dat i rozsah ověření. Vedle mé práce mohou vznikat průběžné náklady na nástroje a jejich používání. Před realizací s vámi domluvím přístupy, práci s daty, kontrolu chyb i odpovědnost za správu.",
        items: ["Odhad nákladů podle tarifů, objemu dat a četnosti běhů", "Způsob předání a potřebné podklady k provozu", "Rozsah případné správy a podpory po domluvě"],
      },
    ],
    related: "webove-aplikace",
  },
  {
    slug: "web-scraping",
    updated: "2026-10-31",
    title: "Web scraping a automatizovaný sběr dat",
    seoTitle: "Web scraping: sběr dat z webu pro vaše podnikání",
    metaDescription: "Připravím web scraping pro sběr dat z dohodnutých webů. Vyčištění, export do tabulky nebo napojení na vlastní dashboard. Nejdřív ověřím zdroje a vzorek.",
    intro: "Potřebujete pravidelně získávat údaje z webů a přestat je kopírovat po jednom? Připravím sběr dat přes Apify, jejich vyčištění a předání do tabulky nebo aplikace. Začneme konkrétním zdrojem a ukázkou výstupu.",
    legacy: "/sluzby/webove-aplikace",
    legacyLabel: "Vývoj webové aplikace nad získanými daty",
    contactPrompt: "Pošlete adresy zdrojů, požadované údaje a ukázku výsledné tabulky. Napište také objem a četnost aktualizace.",
    sections: [
      {
        title: "Co může sběr dat vyřešit",
        text: "Web scraping převádí údaje z webových stránek do strukturovaného výstupu. Hodí se pro jednorázový průzkum i opakované aktualizace. Následující možnosti jsou příklady zadání; dostupnost ověřím podle konkrétního zdroje.",
        items: ["Podklady pro monitoring cen konkurence: produkt, dostupnost, cena a datum kontroly", "Přehled veřejných nabídek, akcí nebo dalších záznamů podle zadaných polí", "Kontrola názvů, metadat a odkazů na vašem webu", "Průběžné doplňování dat pro vlastní přehled nebo dashboard"],
      },
      {
        title: "Nejdřív zdroj a vzorek, potom celý sběr",
        text: "Prověřím, odkud lze požadované údaje získat a zda zdroj nabízí vhodné API nebo export. U scrapingu ověřím dostupnost polí, způsob načítání a možnosti použití dat. Na malém vzorku zkontrolujeme, zda výstup odpovídá vašemu zadání.",
        items: ["Konkrétní URL a seznam potřebných údajů", "Počet záznamů, stránkování a četnost aktualizace", "Kontrola chybějících polí, duplicit a formátů", "Domluvený vzorek a pravidla pro přijetí výsledku"],
      },
      {
        title: "Co dostanete a kam data předám",
        text: "Nestačí stáhnout text stránky. Domluvíme jednotné sloupce, identifikaci záznamů a zacházení s neúplnými údaji. K výstupu lze přidat zdrojovou adresu a čas sběru, abyste věděli, odkud údaje pocházejí a jak jsou aktuální.",
        items: ["CSV, JSON nebo předání do Google Sheets podle dohody", "Vyčištění formátů, odstranění duplicit a označení chybějících hodnot", "Napojení na databázi nebo vlastní webovou aplikaci", "U pravidelného sběru domluvený plán běhů a kontrola neúspěšných aktualizací"],
      },
      {
        title: "Cena a údržba scrapingu",
        text: "Cena závisí na dostupnosti webu, složitosti sběru, objemu dat a četnosti běhů. Přípravu a kontrolu výstupu nacením zvlášť od provozu Apify a dalších nástrojů. Když se zdrojový web změní, může být potřeba sběr upravit; rozsah údržby si proto domluvíme předem.",
        items: ["Ověření proveditelnosti a návrh prvního výstupu", "Odhad nákladů na běh nástrojů podle objemu a frekvence", "Rozsah jednorázové dodávky nebo pravidelné spolupráce", "Postup při změně webu, výpadku nebo neúplných datech"],
      },
    ],
    questions: [
      { question: "Můžete získat data z libovolného webu?", answer: "To nejde slíbit předem. Záleží na dostupnosti údajů, podmínkách zdroje i technickém řešení. Pošlete konkrétní adresy a požadovaná pole; nejdřív ověřím proveditelnost a možnosti použití dat. Pokud je dostupné vhodné API nebo export, může být lepší použít je." },
      { question: "Může se sběr dat opakovat automaticky?", answer: "Ano, pokud to zdroj a navržené řešení umožní. Domluvíme četnost, limity nákladů a kontrolu výsledků. Při výpadku potřebujete rozlišit starší údaje od čerstvě získaných dat, proto řešíme také čas posledního úspěšného běhu." },
      { question: "Lze získaná data zobrazit v dashboardu?", answer: "Ano. Sběr připraví strukturovaná data a vlastní webový dashboard je může zobrazit pomocí filtrů, tabulek a grafů. Vývoj rozhraní, ukládání historie a přístupy uživatelů domluvíme jako konkrétní rozsah aplikace." },
    ],
    reading: [
      { href: "/sluzby/ai-automatizace", label: "Automatizace předávání a zpracování dat" },
      { href: "/blog/reporting-a-dashboard", label: "Reporting a dashboard: jak připravit použitelný přehled" },
    ],
    related: "webove-aplikace",
  },
];

export const orderedServices = [
  ...services.filter((s) => s.slug === "seo" || s.slug === "tvorba-webu"),
  ...services.filter((s) => s.slug !== "seo" && s.slug !== "tvorba-webu"),
];
