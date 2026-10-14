export const services = [
  {
    slug: "seo",
    title: "SEO & obsah",
    intro: "Ať vás najdou lidé, kteří hledají právě to, co nabízíte.",
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
    ],
    related: "linkbuilding",
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
    title: "Weby, které mají směr.",
    intro:
      "Od první struktury po responzivní web připravený pro vaše zákazníky.",
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
] as const;
