type Service = {
  slug: string;
  title: string;
  seoTitle?: string;
  intro: string;
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
        title: "Od doporučení k úpravám a měření",
        text: "Společně vybereme změny, které mají pro váš web největší smysl. U každého úkolu bude jasné, které stránky se týká a co je potřeba udělat. Výsledky posuzujeme podle dostupných dat a vašich obchodních cílů.",
        items: ["Prioritizovaný plán oprav a obsahu", "Zadání pro vývojáře nebo úpravy po domluvě", "Vyhodnocení dotazů a stránek v Google Search Console", "Sledování poptávek při dostupném měření"],
      },
    ],
    related: "tvorba-webu",
    questions: [
      { question: "Co dostanu z analýzy klíčových slov?", answer: "Seznam relevantních dotazů rozdělený podle témat a záměru hledajícího. Přiřadím je ke stávajícím nebo navrženým stránkám a označím priority. Výstup tak využijete pro strukturu webu, úpravy služeb i plán článků." },
      { question: "Můžeme začít jednorázovým SEO auditem?", answer: "Ano. Audit může být samostatné zadání. Dostanete přehled problémů, jejich důsledků a doporučené pořadí oprav. Pak se rozhodnete, zda úpravy předáte svému týmu, nebo na nich budeme pokračovat společně." },
      { question: "Kolik stojí SEO a kdy se projeví výsledky?", answer: "Cena závisí na velikosti a stavu webu, konkurenci i rozsahu spolupráce. Po úvodním probrání zadání připravím nabídku. Změny ve vyhledávání vyhodnocujeme průběžně; konkrétní pozici ani termín jejího dosažení nelze slíbit." },
    ],
    reading: [
      { href: "/sluzby/linkbuilding", label: "Linkbuilding jako součást SEO" },
      { href: "/11-tipu-jak-ziskat-validni-zpetny-odkaz/", label: "Jak získávat relevantní zpětné odkazy" },
    ],
  },
  {
    slug: "linkbuilding",
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
    ],
    questions: [
      { question: "Kolik stojí tvorba webových stránek?", answer: "Záleží na počtu a typu stránek, připravenosti textů a fotografií, správě obsahu a potřebných funkcích. Po upřesnění zadání dostanete nabídku s rozsahem práce. Hosting, doménu a případné další provozní náklady si vyjasníme předem." },
      { question: "Co potřebuji připravit?", answer: "Pro začátek stačí popsat vaše služby, zákazníky a účel webu. Pomohou současné stránky, logo, fotografie a ukázky stylu, který je vám blízký. Chybějící podklady a jejich přípravu zahrneme do zadání." },
      { question: "Je SEO součástí tvorby webu?", answer: "Při realizaci řeším strukturu nadpisů, metadata, interní odkazy, sitemap a technickou dostupnost stránek pro vyhledávače. Podrobnou analýzu klíčových slov, rozsáhlejší obsah a průběžnou SEO práci domluvíme podle potřeb projektu." },
      { question: "Můžete upravit i stávající web?", answer: "Ano. Nejdřív ověřím jeho technický stav a možnosti úprav. Podle toho doporučím úpravu jednotlivých stránek, doplnění funkcí nebo redesign. Termín stanovíme podle rozsahu a připravených podkladů." },
    ],
    reading: [
      { href: "/sluzby/seo", label: "SEO pro nový i stávající web" },
      { href: "/projekty/autoskola-jana", label: "Ukázka projektu: Autoškola Jana" },
      { href: "/blog/webove-aplikace-priklady", label: "Kdy firemní web doplnit webovou aplikací" },
    ],
    related: "webove-aplikace",
  },
  {
    slug: "webove-aplikace",
    title: "Webové aplikace na míru.",
    intro: "Když potřebujete nástroj, který umí víc než představit vaši firmu.",
    legacy: "/webova-aplikace",
    legacyLabel: "Webové aplikace a příklady z praxe",
    sections: [
      {
        title: "Od procesu k nástroji",
        text: "Zmapujeme, kdo bude aplikaci používat a s jakými daty pracuje. Vybereme funkce pro první použitelnou verzi.",
        items: [
          "Poptávkové a rezervační systémy",
          "Interní evidence a klientské portály",
          "Práce s externími daty",
        ],
      },
      {
        title: "Použitelnost a správa",
        text: "Aplikace potřebuje jasné rozhraní i spolehlivé zpracování dat. Součástí návrhu jsou oprávnění, validace a způsob správy obsahu.",
        items: [
          "Přehledné uživatelské rozhraní",
          "Napojení na API a databáze",
          "Testování hlavních scénářů",
        ],
      },
    ],
    related: "ai-automatizace",
  },
  {
    slug: "ai-automatizace",
    title: "Méně rutiny. Více prostoru.",
    intro: "AI a automatizace pro konkrétní úkoly ve vašem podnikání.",
    legacy: "/automatizace",
    legacyLabel: "Automatizace procesů a Make.com",
    sections: [
      {
        title: "Co se opakuje, můžeme zjednodušit",
        text: "Začneme úkolem, který dnes děláte ručně. Ověříme dostupná data, napojení nástrojů i místa, kde je nutná lidská kontrola.",
        items: [
          "Propojení CRM, formulářů a e-mailu",
          "Reporting a práce s daty",
          "Make.com, n8n a navazující procesy",
        ],
      },
      {
        title: "AI s jasnou rolí",
        text: "Asistent může pomáhat s vyhledáváním informací, přípravou obsahu nebo podporou zákazníků. Jeho roli nastavíme podle dostupných podkladů a pravidel vašeho týmu.",
        items: [
          "AI asistenti a agenti",
          "Práce s firemními podklady",
          "Kontrola výstupů a řešení chyb",
        ],
      },
    ],
    related: "webove-aplikace",
  },
];

export const orderedServices = [
  ...services.filter((s) => s.slug === "seo" || s.slug === "tvorba-webu"),
  ...services.filter((s) => s.slug !== "seo" && s.slug !== "tvorba-webu"),
];
