export type Guide = {
  slug: string;
  title: string;
  description: string;
  topic: 'SEO' | 'Weby';
  date: string;
  intro: string;
  sections: {
    id: string;
    title: string;
    paragraphs: string[];
    bullets?: string[];
    table?: { headers: string[]; rows: string[][] };
    links?: { href: string; label: string }[];
  }[];
  related: { href: string; label: string }[];
};

export const guides: Guide[] = [
  {
    slug: 'reporting-a-dashboard',
    title: 'Reporting a dashboard: jak mít firemní data pod kontrolou',
    description: 'Jak připravit reporting a vlastní dashboard: výběr ukazatelů, datové zdroje, aktualizace a zadání. S modelovým příkladem přehledu pro malou agenturu.',
    topic: 'Weby',
    date: '2026-10-31',
    intro: 'Reporting má odpovědět na otázku, podle které se dá rozhodnout. Dashboard zobrazí důležité ukazatele na jednom místě, ale samotné grafy ještě neřeknou, co se děje ve firmě. Nejdřív potřebujete určit význam čísel, jejich zdroj a člověka, který s přehledem bude pracovat.',
    sections: [
      {
        id: 'reporting-a-dashboard',
        title: 'Jaký je rozdíl mezi reportingem a dashboardem',
        paragraphs: [
          'Reporting je postup, kterým z dat připravujete pravidelnou zprávu nebo odpověď na konkrétní otázku. Může zahrnovat tabulku, komentář i doporučení dalšího kroku. Dashboard je rozhraní s vybranými přehledy, filtry a ukazateli. Může být součástí reportingu, nemusí ho ale celý nahradit.',
          'Pro týdenní vyhodnocení může stačit tabulka s krátkým komentářem. Vlastní webový dashboard dává smysl, pokud více lidí potřebuje průběžně pracovat s několika zdroji, filtrovat záznamy nebo vidět stav konkrétních úkolů. Než začnete stavět, vyzkoušejte si potřebný výstup na malém vzorku dat.',
        ],
      },
      {
        id: 'ukazatele',
        title: 'KPI dashboard začíná otázkami, ne grafy',
        paragraphs: [
          'Kdo přehled otevře a co podle něj udělá? Majitel e-shopu může potřebovat najít objednávky čekající na vyřízení. Agentura může chtít zkontrolovat, které klientské reporty nemají aktuální data. Každá otázka vede k jinému výběru ukazatelů i detailu zobrazení.',
          'Ke každému ukazateli si napište, jak se počítá, z jakého systému pochází a za jaké období platí. Počet odeslaných formulářů není totéž co počet obchodních případů nebo zaplacených objednávek. Bez společné definice mohou dvě správně vypadající čísla znamenat úplně jinou věc.',
        ],
        bullets: [
          'Rozhodnutí: co potřebuji zjistit a jaký krok bude následovat?',
          'Zdroj: odkud údaj přichází a kdo má potřebný přístup?',
          'Výpočet: co přesně počítáme a které záznamy vynecháváme?',
          'Aktuálnost: kdy se data naposledy úspěšně obnovila?',
        ],
      },
      {
        id: 'priklad',
        title: 'Modelový příklad: přehled pro malou agenturu',
        paragraphs: [
          'Představte si agenturu, která spravuje několik klientských webů. Každý týden otevírá Search Console, kontroluje tabulku dokončených úkolů a ručně skládá zprávu pro klienta. Následující návrh je modelový příklad, nikoli popis dokončené zakázky nebo doložené časové úspory.',
          'První verze může obsahovat výběr klienta, porovnání dvou odpovídajících období a seznam dokončených změn. U každého zdroje bude datum aktualizace. SEO reporting přitom ponechá naměřené kliky ze Search Console oddělené od odhadů hledanosti z výzkumných nástrojů.',
        ],
        table: {
          headers: ['Co potřebuje tým zjistit', 'Co ukáže přehled', 'Na co dát pozor'],
          rows: [
            ['Jak se mění výkon webu', 'Kliky a imprese za zvolená období', 'Stejná délka období, sezónnost a dostupnost dat'],
            ['Co jsme na webu změnili', 'Dokončené úkoly a datum zásahu', 'Časová souvislost sama nedokazuje příčinu změny výkonu'],
            ['Zda je report aktuální', 'Poslední úspěšná aktualizace každého zdroje', 'Výpadek nesmí vypadat jako nulový výkon'],
          ],
        },
      },
      {
        id: 'zdroje',
        title: 'Odkud se vezmou data a kdo zkontroluje chyby',
        paragraphs: [
          'Nejdřív ověřte dostupné API, databázi nebo export. U každého zdroje vyzkoušejte vzorek a zkontrolujte, zda obsahuje potřebné údaje. Pokud je nutný sběr z webových stránek, řešte jej jako samostatnou část dodávky: zdroj, požadovaná pole, četnost a kontrolu výsledku.',
          'Domluvte také postup při vypršení přístupu, změně formátu nebo výpadku. Nula, chybějící hodnota a starší údaj mají jiný význam. Přehled je má odlišit a ukázat, kdy proběhla poslední úspěšná aktualizace. Někdo musí mít odpovědnost za opravu i za kontrolu jejího výsledku.',
        ],
        links: [{ href: '/sluzby/web-scraping', label: 'Web scraping a automatizovaný sběr dat' }],
      },
      {
        id: 'vizualizace',
        title: 'Vizualizace dat má usnadnit konkrétní úkol',
        paragraphs: [
          'Pro vývoj v čase se hodí graf, pro porovnání konkrétních záznamů tabulka s filtrem. U souhrnného čísla ponechte informaci o období a možnost zjistit jeho podklad. Všechny ukazatele nemusí být vidět najednou; uspořádejte je podle práce uživatele.',
          'Vyzkoušejte přehled i na telefonu. Široká tabulka může potřebovat vodorovný posun nebo jednodušší mobilní zobrazení. Stav chyby označte textem, ne pouze barvou. Při kontrole nechte budoucího uživatele dokončit konkrétní úkol bez vysvětlování každého tlačítka.',
        ],
      },
      {
        id: 'zadani',
        title: 'Co připravit pro návrh vlastního dashboardu',
        paragraphs: [
          'Pošlete anonymizovanou ukázku současného reportu, seznam zdrojů a tři otázky, na které potřebujete pravidelně odpověď. Přidejte počet uživatelů, požadovanou četnost aktualizace a případné rozdělení přístupů. Z toho lze vymezit první verzi a prověřit napojení.',
          'Cenu rozdělte na přípravu dat, vývoj rozhraní a další provoz. Napojení několika různých systémů může být větší část práce než samotné grafy. U nabídky si proto nechte rozepsat také hosting, placené nástroje a údržbu integrací. U LinkLady můžeme začít menším dashboardem pro jeden konkrétní proces.',
        ],
        links: [{ href: '/sluzby/webove-aplikace', label: 'Vývoj webové aplikace a vlastního dashboardu' }],
      },
    ],
    related: [
      { href: '/sluzby/webove-aplikace', label: 'Vlastní webové aplikace a dashboardy' },
      { href: '/sluzby/web-scraping', label: 'Sběr a příprava dat' },
      { href: '/projekty/spacelady', label: 'SpaceLady: ukázka práce s daty a interaktivním rozhraním' },
    ],
  },
  {
    slug: 'kolik-stoji-webove-stranky',
    title: 'Kolik stojí webové stránky a co zahrnout do rozpočtu',
    description: 'Orientační ceny webů Linklady, porovnání nabídek a rozpočet na provoz. Co si ověřit před objednávkou a které náklady čekat další rok.',
    topic: 'Weby',
    date: '2026-10-16',
    intro: 'U Linklady začíná jednoduchý web na 9 000 Kč, firemní web na 25 000 Kč a e-shop na 40 000 Kč. Jsou to orientační ceny „od“, potvrzené k 16. říjnu 2026. Konečná nabídka závisí na rozsahu. Před porovnáním cen si proto napište, co má dodavatel za danou částku skutečně odevzdat.',
    sections: [
      {
        id: 'orientacni-ceny',
        title: 'Co znamená cena webu „od“',
        paragraphs: [
          'Výchozí cena pomůže určit, jestli má smysl projekt společně probrat. Sama ale neurčuje počet podstránek, rozsah textů, napojení ani následnou správu. Tyto položky potřebujete v nabídce rozepsané. U jednoho „firemního webu“ dodáte několik hotových textů, u druhého musí dodavatel teprve připravit celý katalog služeb.',
          'Níže jsou orientační ceny Linklady, nikoli přehled cen celého trhu. Konkrétní cenu a zahrnuté práce si potvrdíme před zahájením spolupráce. Hosting, doménu, placené nástroje a dlouhodobou správu řešíme v nabídce samostatně.',
        ],
        table: {
          headers: ['Položka', 'Orientační cena Linklady'],
          rows: [['Jednoduchý web', 'od 9 000 Kč'], ['Firemní web', 'od 25 000 Kč'], ['E-shop', 'od 40 000 Kč'], ['Hodinová sazba', '1 200 Kč']],
        },
        links: [{ href: '/sluzby/tvorba-webu', label: 'Tvorba webů: nabídka a průběh spolupráce' }],
      },
      {
        id: 'rozsah',
        title: 'Rozpočet mění hlavně práce kolem webu',
        paragraphs: [
          'Připravujete texty a fotografie sami, nebo je má zajistit dodavatel? Stačí poptávkový formulář, nebo potřebujete rezervace napojené na další systém? Máte původní web s články, které potřebujete zachovat? Odpovědi mění rozsah práce ještě před prvním návrhem vzhledu.',
          'U e-shopu si nechte vyjasnit také vložení produktů, varianty, způsob dopravy a plateb a případné propojení se skladovým systémem. Samotné označení „e-shop“ neříká, které z těchto úkolů nabídka pokrývá. Do zadání patří i člověk, který bude obsah schvalovat, a termín dodání podkladů.',
          'Když je rozpočet napjatý, rozdělte zadání na první verzi a pozdější rozšíření. Například poptávkový formulář může být součástí první verze, zatímco zákaznická sekce počká. Toto rozdělení musí odpovídat tomu, co vaši zákazníci potřebují při objednávce.',
        ],
        links: [{ href: '/sluzby/tvorba-webu-wordpress', label: 'Web ve WordPressu: rozsah tvorby, licence a následná správa' }],
      },
      {
        id: 'porovnani-nabidek',
        title: 'Jak porovnat dvě nabídky na stejný web',
        paragraphs: [
          'Pošlete oběma dodavatelům stejné zadání a vyžádejte si odpověď ke stejným položkám. U nejasného bodu si poznamenejte „není potvrzeno“. Prázdné místo v nabídce neznamená, že je práce zdarma nebo že ji dodavatel automaticky udělá.',
          'Modelový příklad: firma potřebuje úvodní stránku, tři služby, reference a kontakt. První nabídka počítá s texty od firmy. Druhá zahrnuje jejich přípravu. Než srovnáte celkové částky, požádejte prvního dodavatele o cenu přípravy textů a ověřte, zda druhý zahrnuje i jejich schválené úpravy. Teprve potom porovnáváte podobný rozsah.',
        ],
        bullets: [
          'Obsah a návrh: které stránky vzniknou, kdo připraví texty a fotografie a kolik kol připomínek nabídka zahrnuje?',
          'Funkce a kontrola: jaké formuláře či napojení dostanete a jak se před předáním ověří jejich funkčnost?',
          'Předání: kdo bude mít přístupy k doméně, hostingu a administraci a jak budete měnit obsah?',
          'Další práce: co už je mimo nabídku, jak se změna odsouhlasí a podle čeho se nacení?',
        ],
      },
      {
        id: 'provoz',
        title: 'Spočítejte si první i druhý rok',
        paragraphs: [
          'Oddělte jednorázovou tvorbu od opakovaných plateb. U každé provozní položky si zapište poskytovatele, cenu při prodloužení, četnost platby a vlastníka účtu. Zkontrolujte také, jestli je placený nástroj pro zamýšlenou funkci vůbec potřeba.',
          'Do rozpočtu na první rok zahrňte tvorbu webu, provoz a schválené práce navíc. Na druhý rok počítejte s provozem, domluvenou správou a plánovanými úpravami. Úvodní sleva za hosting nebo licenci sama neříká, kolik zaplatíte při obnovení služby.',
        ],
        table: {
          headers: ['Položka v rozpočtu', 'Co doplnit z konkrétní nabídky'],
          rows: [
            ['Tvorba a spuštění', 'Jednorázová cena a přesný rozsah'],
            ['Doména a hosting', 'První období i běžná cena prodloužení'],
            ['Licence a externí nástroje', 'Potřebné tarify a jejich pravidelné platby'],
            ['Správa a úpravy', 'Zahrnuté práce, reakční doba a způsob účtování'],
          ],
        },
      },
      {
        id: 'poptavka',
        title: 'Co poslat pro konkrétní nacenění',
        paragraphs: [
          'Připravte adresu současného webu, seznam služeb, hlavní požadovanou akci návštěvníka a funkce, bez kterých se neobejdete. Napište také, které podklady už máte a jaký rozpočet chcete držet. Dodavatel pak může navrhnout odpovídající rozsah a označit položky, které bude potřeba upřesnit.',
          'Pokud už nabídku máte, projděte ji podle tabulek výše. Nevyjasněné položky si nechte doplnit písemně ještě před objednávkou.',
        ],
        links: [{ href: '/blog/zadani-webu', label: 'Vzor zadání pro tvorbu webu' }, { href: '/kontakt', label: 'Poslat zadání Linklady' }],
      },
    ],
    related: [{ href: '/sluzby/tvorba-webu', label: 'Tvorba webových stránek' }, { href: '/blog/zadani-webu', label: 'Jak připravit zadání webu' }],
  },
  {
    slug: 'zadani-webu',
    title: 'Zadání webu: vzor, podklady a kontrola předání',
    description: 'Připravte zadání webu s použitelným vzorem. Ujasněte si obsah, rozpočet, přesun starých URL a konkrétní podmínky pro kontrolu hotového webu.',
    topic: 'Weby',
    date: '2026-10-16',
    intro: 'Použitelné zadání webu popisuje, komu web pomáhá, co na něm má návštěvník udělat a co musí dodavatel předat. Na začátek stačí společný dokument. Technické řešení můžete doplnit po konzultaci; cíle, obsah a odpovědnosti by ale měly být srozumitelné ještě před naceněním.',
    sections: [
      {
        id: 'cil',
        title: 'Začněte situací zákazníka',
        paragraphs: [
          'Věta „chci moderní web“ nechává otevřené téměř všechno. Popište raději, proč na web zákazník přijde a jak pozná, že je na správném místě. U služby může potřebovat ověřit zaměření firmy, orientační cenu a dostupný kontakt. U produktu potřebuje jiné informace a jinou cestu k objednávce.',
          'Modelový příklad zadání pro firmu nabízející úklid: návštěvník má zjistit, zda firma uklízí kanceláře v jeho městě, a odeslat poptávku s přibližnou plochou a požadovanou četností. Z takového cíle už lze odvodit obsah služby i pole formuláře. Příklad je smyšlený a nepopisuje konkrétní realizaci Linklady.',
        ],
      },
      {
        id: 'vzor',
        title: 'Vzor zadání, který si můžete zkopírovat',
        paragraphs: [
          'Odpovězte vlastními slovy. U bodu, na který zatím neumíte odpovědět, napište „potřebuji doporučit“. Dodavatel tak pozná, kde může pracovat s hotovým rozhodnutím a kde má navrhnout možnosti. Tento vzor je podklad ke společnému upřesnění nabídky.',
        ],
        bullets: [
          'Firma a zákazníci: nabízíme …; hlavní zákazník je …; působíme v …; po návštěvě webu má člověk …',
          'Obsah a funkce: potřebujeme stránky …; formulář má zjistit …; nutné napojení je …; texty a fotografie dodá … do …',
          'Současný web a provoz: původní adresa je …; zachovat potřebujeme …; doménu a hosting spravuje …; obsah bude upravovat …',
          'Rozpočet a předání: rozpočet na tvorbu je …; provoz chceme řešit …; požadovaný termín je … kvůli …; za naši stranu schvaluje …; hotový web přijmeme podle těchto kontrol …',
        ],
      },
      {
        id: 'podklady',
        title: 'Přiložte podklady a vysvětlete inspiraci',
        paragraphs: [
          'Ke každé plánované stránce přiřaďte podklady a člověka, který je schválí. U služby to může být popis práce, podmínky objednávky, ověřené reference a fotografie, které smíte použít. Prázdná složka pojmenovaná „texty“ ještě není dodaný obsah.',
          'Když posíláte cizí web jako inspiraci, označte konkrétní věc: čitelnost ceníku, způsob výběru služby nebo přehled kontaktů. Samotné „ať je to podobné“ může znamenat barvy, strukturu i funkce. Cizí texty a fotografie nepřebírejte bez oprávnění.',
          'Zapište i požadavky na vlastní editaci. Potřebujete měnit telefon a cenu, nebo pravidelně publikovat celé články? Při ukázce administrace si nechte předvést právě tuto činnost. Obecný slib snadného ovládání ji nenahradí.',
        ],
        links: [{ href: '/sluzby/tvorba-webu-wordpress', label: 'Tvorba WordPress webu s vlastní správou obsahu' }],
      },
      {
        id: 'migrace',
        title: 'Při redesignu sepište původní adresy',
        paragraphs: [
          'Pokud nahrazujete starý web, přidejte do zadání seznam jeho URL. U každé rozhodněte, zda zůstane zachovaná, dostane odpovídající novou adresu, nebo se obsah ruší bez náhrady. Zvlášť si označte stránky, na které vedou odkazy nebo které podle Search Console přivádějí návštěvníky.',
          'Google v dokumentaci k přesunu webu doporučuje mapovat staré adresy na relevantní nové stránky. Hromadné přesměrování nesouvisejících článků na úvodní stránku může vyhodnotit jako soft 404. Tabulka přesměrování proto patří do přípravy i do kontroly po spuštění.',
          'Předem určete, kdo ověří přesměrování, interní odkazy a dostupnost důležitých stránek. Přístupy k původnímu řešení ponechte dostupné, dokud není domluvený přesun dokončený a zkontrolovaný.',
        ],
        links: [{ href: 'https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes', label: 'Google: přesun webu se změnou URL' }],
      },
      {
        id: 'predani',
        title: 'Domluvte si kontrolu, kterou lze skutečně provést',
        paragraphs: [
          'Nahraďte neurčité „web bude fungovat“ seznamem konkrétních kontrol. U formuláře kontrolujte doručení zprávy na správnou adresu i chování při chybně vyplněných polích. Kontrolní zprávu si označte, aby se nepletla se skutečnou poptávkou.',
        ],
        bullets: [
          'Na telefonu i počítači otevřeme menu, najdeme službu a dokončíme sjednanou poptávku nebo objednávku.',
          'Projdeme dohodnutý seznam starých URL a ověříme jejich cílové stránky; zkontrolujeme i neexistující adresu.',
          'Převezmeme přístupy pod vlastními účty a vyzkoušíme úpravu obsahu, kterou budeme dělat běžně.',
          'Sepíšeme nedodělky, termíny jejich dokončení, odpovědnou osobu a podmínky následné podpory.',
        ],
      },
      {
        id: 'zmeny',
        title: 'Co když se zadání během práce změní',
        paragraphs: [
          'Nový požadavek si nechte popsat s dopadem na cenu a termín a schvalte ho před realizací. Rozlišujte opravu chyby vůči domluvenému zadání a přidání nové funkce. U obou má být jasné, kdo rozhoduje a kdy bude hotovo.',
          'Před odesláním zadání si zkontrolujte, zda dodavatel pozná, co musí zvládnout první verze a co může počkat. Vyplněný vzor můžete poslat spolu s adresou současného webu a podklady, které už máte.',
        ],
        links: [{ href: '/kontakt', label: 'Probrat zadání webu s Linklady' }],
      },
    ],
    related: [{ href: '/blog/kolik-stoji-webove-stranky', label: 'Kolik stojí web a jeho provoz' }, { href: '/sluzby/tvorba-webu', label: 'Tvorba webů u Linklady' }],
  },
  {
    slug: 'analyza-klicovych-slov',
    title: 'Analýza klíčových slov: od dotazů ke stránkám',
    description: 'Jak převést analýzu klíčových slov do struktury webu a plánu obsahu. Konkrétní mapování služeb a článků na příkladu Linklady.',
    topic: 'SEO',
    date: '2026-10-16',
    intro: 'Analýza klíčových slov zjišťuje, co lidé hledají v souvislosti s vaší nabídkou a jaké stránky k tomu potřebují. Použitelný výstup přiřadí témata ke konkrétním URL a určí další práci. Díky tomu víte, kterou službu doplnit, jaký článek připravit a co už na webu máte pokryté.',
    sections: [
      {
        id: 'nabidka',
        title: 'Nejdřív nabídka, potom seznam dotazů',
        paragraphs: [
          'Sepište služby nebo produkty, které skutečně nabízíte, komu jsou určené a v jaké oblasti je dodáváte. Přidejte otázky z poptávek: co zákazníci chtějí vědět před objednávkou a které pojmy používají sami. Tím získáte výchozí témata pro sběr dotazů.',
          'Pro Linklady jsou takovým základem SEO a tvorba webových stránek. Téma AI dává smysl tam, kde souvisí s nabízenou automatizací nebo praktickou prací s webem. Zařazovat každou populární otázku o AI by rozšiřovalo obsah i do oblastí, které s nabídkou nesouvisejí.',
          'U existujícího webu přidejte dostupná data ze Search Console, seznam publikovaných stránek a jejich dosavadní účel. Dříve než zadáte nový článek, zjistěte, zda podobnou otázku neřeší některá stávající stránka.',
        ],
      },
      {
        id: 'sber',
        title: 'Získané dotazy potřebují roztřídit',
        paragraphs: [
          'SEO nástroj, například Marketing Miner, může doplnit související dotazy a údaje o jejich hledání. U exportu si zaznamenejte nástroj, zemi, jazyk a datum získání. Hledanost je podklad pro rozhodování. Sama neříká, kolik návštěvníků nebo objednávek získá váš web.',
          'Odstraňte duplicity a dotazy, které patří jinému významu slova nebo jiné službě. Podobné formulace seskupte podle potřeby návštěvníka. Pro „cenu webu“ a „kolik stojí webové stránky“ může stačit jedna dobře připravená stránka, pokud výsledky hledání ukazují stejný záměr.',
          'U nejdůležitějších témat prohlédněte aktuální výsledky vyhledávání. Zapište si, jestli převládají nabídky služeb, návody, srovnání nebo konkrétní produkty. Na otázku o ceně může odpovědět článek s rozpočtem; pro člověka hledajícího dodavatele potřebujete srozumitelnou nabídku služby.',
        ],
      },
      {
        id: 'mapovani',
        title: 'Modelové mapování témat na webu Linklady',
        paragraphs: [
          'Následující tabulka ukazuje modelové rozhodnutí nad skutečnými adresami Linklady. Není to výpis pozic ani důkaz výsledků. Každý řádek spojuje potřebu návštěvníka s hlavní stránkou, která ji má pokrýt. Související článek pak může návštěvníka přivést k nabídce služby.',
        ],
        table: {
          headers: ['Co návštěvník řeší', 'Hlavní stránka', 'Co má na stránce najít'],
          rows: [
            ['Hledá pomoc se SEO', '/sluzby/seo', 'Rozsah spolupráce, výstupy a kontakt'],
            ['Hledá dodavatele webu', '/sluzby/tvorba-webu', 'Nabídku tvorby webu a průběh zakázky'],
            ['Zjišťuje cenu nového webu', '/blog/kolik-stoji-webove-stranky', 'Ceny, rozsah nabídky a provozní náklady'],
            ['Chce rozumět SEO auditu', '/blog/co-obsahuje-seo-audit', 'Ukázky nálezů a použitelného výstupu'],
          ],
        },
        links: [{ href: '/sluzby/seo', label: 'SEO služby Linklady' }, { href: '/blog/co-obsahuje-seo-audit', label: 'Co obsahuje SEO audit' }],
      },
      {
        id: 'priority',
        title: 'Jak vybrat, co udělat první',
        paragraphs: [
          'U každého tématu posuďte vazbu na nabídku, stav současné stránky a náročnost doplnění. Chybějící popis hlavní služby může mít přednost před dalším obecným článkem. Naopak stránka, která už odpovídá na danou potřebu, může potřebovat jen doplnit chybějící informaci nebo odkaz.',
          'Modelový příklad: článek vysvětluje cenu webu, ale čtenář se z něj nedostane k nabídce tvorby. Do plánu zapište doplnění věcného odkazu a ověřte, že stránka služby vysvětluje další postup. Samostatný nový článek na mírně obměněnou otázku by stejný problém neřešil.',
          'Ke schválenému úkolu určete odpovědnou osobu a očekávaný výstup. „Zlepšit SEO“ nelze předat jako hotovou práci. „Doplnit na stránku služby rozsah auditu a ukázku doporučení“ už lze zkontrolovat.',
        ],
      },
      {
        id: 'vystup',
        title: 'Co má obsahovat předaná analýza',
        paragraphs: [
          'Při přebírání analýzy si nechte ukázat několik konkrétních rozhodnutí: proč téma patří na danou stránku, zda už ji web má a co se na ní má změnit. Tak ověříte, že se s tabulkou dá pracovat i po skončení konzultace.',
        ],
        bullets: [
          'Zdroj a datum dat, zvolený trh a poznámky k chybějícím údajům.',
          'Skupiny souvisejících dotazů s popisem potřeby návštěvníka.',
          'Přiřazení k existující nebo navržené URL, včetně rozhodnutí o překrývajících se stránkách.',
          'Pořadí úkolů, konkrétní doporučení a způsob následného vyhodnocení.',
        ],
      },
      {
        id: 'vyhodnoceni',
        title: 'Po úpravách sledujte jednotlivé stránky',
        paragraphs: [
          'Zapište datum a obsah provedené změny. V Search Console potom porovnávejte odpovídající období, dotazy a stránky. Při interpretaci počítejte se sezónností i s tím, že se výsledky vyhledávání mění. Samotná změna pozice neříká, zda přišly vhodné poptávky.',
          'Vedle výsledků vyhledávání proto sledujte i plnění domluveného obchodního cíle, například relevantní poptávky. Když téma přivádí čtenáře s jinou potřebou, vraťte se k jeho záměru a přiřazené stránce. První praktický krok je projít vlastní nabídku a ke každé službě přiřadit jednu hlavní URL.',
        ],
        links: [{ href: '/kontakt', label: 'Probrat analýzu pro váš web' }],
      },
    ],
    related: [{ href: '/sluzby/seo', label: 'SEO a analýza webu' }, { href: '/blog/co-obsahuje-seo-audit', label: 'Co obsahuje SEO audit' }, { href: '/blog/kolik-stoji-webove-stranky', label: 'Kolik stojí webové stránky' }],
  },
];
