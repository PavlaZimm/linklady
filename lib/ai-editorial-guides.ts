import type { Guide } from './editorial-guides'

// Praktické články pro LinkLady. Popsané funkce jsou možnosti řešení na míru,
// nikoli automaticky potvrzené funkce autorčina lokálního nástroje.
export const aiGuides: Guide[] = [
  {
    slug: 'automaticky-strih-videa',
    title: 'Automatický střih videa: vlastní nástroj a možnosti využití',
    description: 'Jak stavím video-studio s Google Antigravity a Remotion skills: střih videa ze složky, použité nástroje a plán automatického publikování.',
    topic: 'AI',
    date: '2026-11-22',
    intro: 'Natočím záběry, přesunu je do složky a dál už chci nechat pracovat počítač. Na MacBooku proto stavím video-studio pomocí Google Antigravity a nainstalovaných skills. Střih teď zkouším a ladím, automatické publikování mám v plánu jako další krok. Tady ukážu, jak jsem se k tomu dostala a co používám.',
    heroImage: '/blog/automaticky-strih-videa.svg',
    heroAlt: 'Ilustrační schéma automatického střihu: zdrojové video, zpracování a krátká videa pro sociální sítě v barvách LinkLady.',
    ctaLabel: 'Chci automatizovat střih svých videí',
    sections: [
      {
        id: 'proc-vlastni-nastroj',
        title: 'Proč jsem si vytvořila vlastní nástroj na střih videa',
        paragraphs: [
          'Při natáčení mě baví hledat dobré záběry. Méně už mě láká pokaždé opakovat stejné kroky při jejich zpracování. Tak vznikl nápad na vlastní video-studio: nahraju materiál do složky a připravený postup se postará o rutinní část střihu. Zatím si ho stavím a zkouším na vlastním počítači. Není to aplikace, kterou si dnes může kdokoliv stáhnout.',
          'A proč právě Google Antigravity? Mám ji dostupnou v rámci placeného Google tarifu a skoro jsem ji nepoužívala. Tak jsem si řekla: místo pořizování dalšího nástroje zkusím nejdřív pořádně využít ten, který už mám. To ovšem neznamená, že je Antigravity zdarma pro všechny; dostupnost závisí na tarifu a další služby mohou být placené.',
          'Automatizace mi má ubrat opakované klikání, ne rozhodovat o každém záběru místo mě. I když počítač připraví sestřih, chci si zkontrolovat návaznost scén, hudbu a to, jestli celé video divákovi něco říká.',
        ],
      },
      {
        id: 'moje-video-studio',
        title: 'Konkrétní technologie: video-studio, FFmpeg, Remotion a skills',
        paragraphs: [
          'Základem mého pracovního postupu je vlastní hlavní skill video-studio. Má řídit výrobu od prozkoumání složky se zdrojovými videi přes přípravu scénáře až po zpracování, animace, titulky a kontrolu podle Brand Kitu. Ve svém návrhu používám FFmpeg pro práci s reálnými klipy, Remotion pro programované video kompozice a počítám i s edge-tts pro český hlasový doprovod.',
          'Nainstalovala jsem si také balík 13 Remotion skills. Některé řeší titulky, jiné animované mapy nebo export. V tabulce jsou ty, které mám zachycené na screenshotu. Ne všechny už jsem stihla vyzkoušet na hotovém videu.',
        ],
        table: {
          headers: ['Skill nebo technologie', 'K čemu má sloužit'],
          rows: [
            ['video-studio', 'Vlastní hlavní produkční postup ze složky až po kontrolu výstupu'],
            ['FFmpeg', 'Střih a zpracování skutečných video souborů'],
            ['Remotion', 'Animace, grafika a skládání video kompozic'],
            ['edge-tts', 'Případný český hlasový doprovod'],
            ['remotion-best-practices', 'Pravidla a postupy pro tvorbu videí'],
            ['remotion-create', 'Zakládání video projektů a kompozic'],
            ['remotion-captions', 'Dynamické titulky se zvýrazňováním slov'],
            ['remotion-maps', 'Cestovatelské mapy, trasy a body zájmu'],
            ['remotion-multimedia', 'Práce se zvukem, hudbou, fotografiemi a videi'],
            ['remotion-markup', 'Grafické karty, texty a informační boxy'],
            ['remotion-render', 'Export MP4 videa a PNG obrázků'],
          ],
        },
      },
      {
        id: 'video-ze-slozky-az-na-site',
        title: 'Co chci automatizovat: natočení, složka, sestřih a nakonec publikování',
        paragraphs: [
          'Chci se dostat do bodu, kdy po natáčení jen přesunu soubory do složky. Video-studio podle připraveného postupu sestříhá záběry a já zkontroluji výsledek. Právě tenhle krok teď v Antigravity stavím a testuji na vlastním materiálu.',
          'Až bude střih spolehlivý, chtěla bych navázat automatickým nahráváním na sociální sítě. To ještě hotové nemám. Předtím musím vyřešit kontrolu videa, přístup k účtům, možnosti publikování přes oficiální API a také to, co se stane, když nahrání selže.',
        ],
        bullets: [
          '1. Natočím záběry a uložím je do připravené složky.',
          '2. Můj nástroj má z materiálu připravit sestřih a potřebné výstupy.',
          '3. Zkontroluji obraz, zvuk, případné titulky, hudbu a výsledek.',
          '4. V další fázi přidám schvalování, plánování a publikování tam, kde to platforma podporuje.',
        ],
        links: [{ href: '/blog/automaticka-sprava-socialnich-siti', label: 'Navazující téma: automatická správa sociálních sítí' }],
      },
      {
        id: 'co-je-automaticky-strih',
        title: 'Co znamená automatický střih videa a jak do něj vstupuje AI',
        paragraphs: [
          'Automatický střih videa je proces, ve kterém software provede předem definované úpravy za vás. Může pracovat podle jasných pravidel, například požadovaného formátu nebo délky záběrů. Umělá inteligence přidává možnosti analýzy zvuku, řeči či obrazového obsahu. Nejde ale o totéž: automatizace může fungovat i bez AI.',
          'Příkladem existujícího řešení je funkce Auto Cut v CapCutu. Podle jeho oficiální dokumentace dokáže sestřih navrhnout podle řeči, scénáře nebo hudebního rytmu. Funkce se může lišit podle zařízení, regionu a verze aplikace. U vlastního nástroje lze naopak určit, které kroky se mají skutečně provádět a které zůstanou ruční.',
        ],
        links: [{ href: 'https://www.capcut.com/cs-cz/help/auto-cut-in-capcut', label: 'Zdroj: oficiální popis funkce Auto Cut v CapCutu' }],
      },
      {
        id: 'postup-zpracovani',
        title: 'Jak může vypadat automatické zpracování videa',
        paragraphs: [
          'Než začnu cokoliv programovat, sepíšu si běžný postup: odkud přichází video, co se s ním opakuje, jak má vypadat výsledek a kdo ho schválí. Teprve potom vybírám vhodné nástroje. To je důležité zejména u lidí, kteří pravidelně připravují Reels, Shorts, rozhovory nebo jednoduché firemní reportáže.',
          'Modelový pracovní postup může mít čtyři kroky. Nejde o výčet již ověřených funkcí mého současného programu; konkrétní automatické kroky se vždy odvíjejí od zadání a zkoušky na reálném materiálu.',
        ],
        bullets: [
          '1. Vstup: načtení videa, zadání cílového formátu a požadované délky.',
          '2. Zpracování: aplikace provede vybrané opakované operace nebo navrhne místa střihu.',
          '3. Kontrola: člověk posoudí návaznost, zvuk, titulky, hudbu i případné chyby.',
          '4. Export: vznikne soubor pro zvolený kanál nebo další dokončení v editoru.',
        ],
      },
      {
        id: 'co-lze-automatizovat',
        title: 'Které části střihu se vyplatí automatizovat',
        paragraphs: [
          'Každý typ videa potřebuje jiný proces. U mluveného videa mohou být užitečné pauzy a titulky, u cestovatelského videa zase formát a pořadí klipů. Následující tabulka ukazuje možné funkce automatizace, nikoli seznam všeho, co už můj lokální nástroj umí.',
        ],
        table: {
          headers: ['Činnost', 'Co může software udělat', 'Co je potřeba zkontrolovat'],
          rows: [
            ['Pauzy a ticho', 'Označit nebo odstranit vybrané úseky', 'Zda střih nepůsobí nepřirozeně'],
            ['Rozdělení záznamu', 'Vytvořit klipy podle pravidel či detekovaných scén', 'Návaznost a význam jednotlivých záběrů'],
            ['Titulky', 'Připravit přepis nebo časování textu', 'Jména, češtinu a správnost údajů'],
            ['Formát videa', 'Připravit svislé nebo vodorovné rozměry', 'Ořez obličejů a důležitého obsahu'],
            ['Export', 'Nastavit rozlišení a pojmenování souboru', 'Kvalitu, zvuk a velikost výsledku'],
          ],
        },
      },
      {
        id: 'hotovy-editor-nebo-vlastni-reseni',
        title: 'Hotový AI video editor, nebo vlastní automatizace?',
        paragraphs: [
          'Pokud upravujete pár videí měsíčně, pravděpodobně bude rychlejší použít hotový editor. Na trhu jsou například CapCut, Descript či nástroje zaměřené na výběr krátkých klipů. Vlastní řešení začne dávat smysl v okamžiku, kdy se opakují stejné kroky, formáty nebo pravidla a dostupné programy vás nutí k ručním obcházení.',
        ],
        table: {
          headers: ['Otázka', 'Hotový editor', 'Automatizace na míru'],
          rows: [
            ['Začátek práce', 'Obvykle rychlé spuštění', 'Nejdřív analýza postupu a test'],
            ['Přizpůsobení', 'Podle nabídky funkcí', 'Podle konkrétních pravidel'],
            ['Pořizovací náklady', 'Tarif nebo licence podle nástroje', 'Individuální vývoj a případný provoz'],
            ['Opakované zpracování', 'Podle možností konkrétní aplikace', 'Možnost navrhnout vlastní dávkový postup'],
            ['Kontrola výstupu', 'Stále potřebná', 'Stále potřebná'],
          ],
        },
      },
      {
        id: 'vyuziti',
        title: 'Kde může automatický střih pomoci',
        paragraphs: [
          'Praktické využití vidím hlavně tam, kde vznikají podobná videa pravidelně. Představte si malý e-shop, který několikrát týdně natáčí produkty, nebo firmu, která z delšího rozhovoru připravuje krátké ukázky. V takovém případě stojí za to ověřit, kolik času spotřebují opakované operace a zda se vyplatí jejich zjednodušení.',
        ],
        bullets: [
          'Reels a TikTok: příprava formátu a opakovatelných výstupů pro krátká videa.',
          'YouTube Shorts: rozdělení delšího materiálu na klipy pro další editaci.',
          'Podcasty a rozhovory: pomoc s pauzami, přepisem a výběrem pasáží.',
          'Cestovatelská videa: sjednocení exportu a práce s větším množstvím záběrů.',
          'Firemní videa: pravidelný formát se stejnou strukturou a grafickými prvky.',
        ],
        links: [{ href: '/blog/automaticka-sprava-socialnich-siti', label: 'Jak na střih navazuje automatizace správy sociálních sítí' }],
      },
      {
        id: 'technologie-a-dovednosti',
        title: 'Jaké dovednosti při vývoji využívám',
        paragraphs: [
          'Při návrhu automatizace se opírám o zkušenosti s vývojem webových aplikací, prací s daty a online marketingem. Vlastní projekt mi umožňuje vyzkoušet Google Antigravity a Remotion skills, které jsem chtěla lépe využít. Pro klienta ale technologie vybírám podle vstupních souborů, zabezpečení, možností nástrojů a nákladů na provoz.',
        ],
        bullets: [
          'Vývoj vlastních nástrojů a webových aplikací.',
          'AI nástroje pro práci s obsahem a textem.',
          'Make.com a navazování automatizačních kroků.',
          'Datové workflow, kontrola výstupů a propojení nástrojů.',
          'SEO, obsahový marketing a příprava videí pro sociální sítě.',
        ],
        links: [{ href: '/sluzby/ai-automatizace', label: 'AI automatizace a vlastní nástroje na míru' }, { href: '/sluzby/webove-aplikace', label: 'Vývoj webových aplikací' }],
      },
      {
        id: 'bezpecnost-a-limity',
        title: 'Na co dát pozor před automatizací',
        paragraphs: [
          'Video často obsahuje tváře, hlasy nebo interní firemní materiály. Před nasazením proto řeším, zda se soubory zpracovávají lokálně, nebo se posílají do externí služby, jak dlouho se uchovávají a kdo k nim má přístup. U hudby, obrázků a použitých záběrů je potřeba ošetřit také licence a práva k publikování.',
          'Automatizace by měla mít možnost náhledu, opravy a bezpečného opakování zpracování. Výsledek nemusí být pokaždé stejně dobrý. Proto raději nejdřív vyzkouším konkrétní typ materiálu, než slibovat procenta úspory, která ještě nejsou změřená.',
        ],
      },
      {
        id: 'jak-probiha-spoluprace',
        title: 'Jak bych vám automatizaci střihu vytvořila',
        paragraphs: [
          'Začala bych krátkou ukázkou vašeho současného postupu a několika zdrojovými videi. Společně určíme, co má zůstat pod lidskou kontrolou a které kroky se opakují. Pak navrhnu nejmenší funkční řešení, otestujeme ho a teprve podle výsledků rozhodneme, zda má smysl rozšíření.',
          'Nemusí vzniknout další velká aplikace. Někdy stačí menší nástroj pro počítač, jindy propojení stávajícího editoru s automatizačním postupem. Cenu a způsob předání stanovím až podle skutečného zadání.',
        ],
        bullets: [
          'Pošlete mi typ videí, jejich přibližný počet a formát požadovaného výstupu.',
          'Popište jeden opakující se krok, který vám bere nejvíc času.',
          'Navrhnu možnosti automatizace a otestujeme je na vzorku.',
          'Připravím nástroj nebo workflow na míru a domluvíme jeho údržbu.',
        ],
        links: [{ href: '/kontakt', label: 'Poptat vlastní nástroj na automatický střih videa' }],
      },
      {
        id: 'faq',
        title: 'Časté otázky k automatickému střihu videa',
        paragraphs: [
          'Umí AI sestříhat celé video bez kontroly? U některých jednoduchých formátů může připravit použitelný první sestřih. Důležité scény, význam sdělení, licence a správnost titulků je ale vhodné ověřit.',
          'Musím nahrávat videa do cloudu? Nemusíte vždy. Záleží na použité technologii. U citlivého materiálu stojí za to posoudit lokální zpracování a pravidla ukládání souborů.',
          'Vytvoříte mi podobný nástroj? Ano, mohu navrhnout a vyvinout automatizaci na míru podle konkrétního typu videí. Nejprve ověříme technickou proveditelnost a rozsah.',
        ],
        links: [{ href: '/kontakt', label: 'Napište mi, jaká videa zpracováváte' }],
      },
    ],
    related: [
      { href: '/sluzby/ai-automatizace', label: 'Automatizace pracovních postupů pomocí AI' },
      { href: '/sluzby/webove-aplikace', label: 'Vývoj vlastních aplikací' },
      { href: '/blog/automaticka-sprava-socialnich-siti', label: 'Automatická správa sociálních sítí' },
    ],
  },
  {
    slug: 'automaticka-sprava-socialnich-siti',
    title: 'Automatická správa sociálních sítí: co zvládne AI a co ne',
    description: 'Jak automatizovat příspěvky na Instagram, Facebook a další sítě? Srovnání plánovačů, AI nástrojů a automatizace na míru včetně ukázky workflow.',
    topic: 'AI',
    date: '2026-11-22',
    intro: 'Video je sestříhané. Jenže práce nekončí: ještě napsat popisek, vybrat správný formát, naplánovat zveřejnění a zkontrolovat výsledek. Co z toho může udělat automatizace? Porovnám hotové plánovače s vlastním řešením a ukážu, proč chci střih časem propojit i s publikováním.',
    heroImage: '/blog/automaticka-sprava-socialnich-siti.svg',
    heroAlt: 'Ilustrační schéma správy sociálních sítí: návrhy příspěvků, schválení a publikační kalendář v barvách LinkLady.',
    ctaLabel: 'Chci vlastní automatizaci sociálních sítí',
    sections: [
      {
        id: 'co-znamena-automaticka-sprava',
        title: 'Co je automatická správa sociálních sítí',
        paragraphs: [
          'Pro někoho znamená automatická správa jen naplánovat deset hotových příspěvků. Jiný by chtěl vložit nový článek na web a za chvíli mít připravené texty pro Instagram, Facebook i LinkedIn. To už je jiná práce. S plánováním většinou pomůže hotový nástroj, u přípravy obsahu ze zdrojů firmy je často potřeba propojit víc systémů.',
          'AI například připraví tři různé popisky k jednomu videu. Automatizace je uloží do kalendáře, označí jako návrhy a předá ke schválení. Člověk pak zkontroluje fakta, tón značky i použitý obrázek. Samotné zveřejnění se může spustit až po schválení nebo podle předem dohodnutých pravidel.',
        ],
      },
      {
        id: 'co-automatizovat',
        title: 'Které činnosti lze automatizovat a co ponechat člověku',
        paragraphs: [
          'Ne všechno bych nechala na automatu. Přesun souboru nebo plánování termínu je jiná věc než rozhodnutí, co má firma svým zákazníkům říkat. V tabulce je vidět, co může běžet podle pravidel a u čeho se vyplatí lidská kontrola.',
        ],
        table: {
          headers: ['Krok', 'Možná automatizace', 'Důležitá kontrola'],
          rows: [
            ['Nápady na obsah', 'Shromáždění témat z vlastního webu a podkladů', 'Relevance pro zákazníky a cíle firmy'],
            ['Text příspěvku', 'AI návrh různých variant pro jednotlivé sítě', 'Fakta, značka, tón a případné sliby'],
            ['Obrázek nebo video', 'Příprava podkladu a rozměrů pro kanál', 'Licence, titulky a vizuální kvalita'],
            ['Schvalování', 'Předání návrhu odpovědné osobě', 'Kdo smí dát souhlas se zveřejněním'],
            ['Publikace', 'Naplánování přes podporované rozhraní', 'Oprávnění účtu, formát a stav odeslání'],
            ['Reporting', 'Stažení dostupných metrik do přehledu', 'Správné období a význam ukazatelů'],
          ],
        },
      },
      {
        id: 'planovac-nebo-vlastni-nastroj',
        title: 'Stačí Meta Business Suite, Buffer nebo je potřeba vlastní systém?',
        paragraphs: [
          'Pokud spravujete hlavně Facebook a Instagram a potřebujete pouze plánovat příspěvky, nejdřív bych prověřila Meta Business Suite. Pro obsah rozdělený mezi více sítí lze zvážit například Buffer, který kombinuje přípravu příspěvků, kalendář, analytiku a AI asistenta. Konkrétní funkce se mění podle kanálu a tarifu.',
          'Vlastní automatizaci bych nestavěla jen proto, abych vytvořila další kalendář. Má hodnotu, pokud opakovaně kopírujete stejné podklady, schvaluje více lidí, čerpáte data z interního systému nebo potřebujete návaznost na články, produktový katalog či firemní dashboard.',
        ],
        table: {
          headers: ['Situace', 'První rozumná volba', 'Kdy uvažovat o vývoji'],
          rows: [
            ['Pár příspěvků týdně na Facebook a Instagram', 'Meta Business Suite', 'Až při potřebě dalších propojení'],
            ['Více sítí a plánovací kalendář', 'Buffer nebo podobný plánovač', 'Když workflow přesahuje jeho možnosti'],
            ['Obsah vzniká z článků, e-shopu či databáze', 'Ověřit hotové integrace', 'Když chybí potřebná logika a schvalování'],
            ['Více klientů a vlastní postup agentury', 'Týmový plánovač a šablony', 'Pro konkrétní kontrolní či datovou nadstavbu'],
          ],
        },
        links: [{ href: 'https://buffer.com/', label: 'Zdroj: oficiální přehled funkcí Bufferu' }, { href: 'https://www.facebook.com/business/tools/meta-business-suite', label: 'Meta Business Suite: informace od provozovatele' }],
      },
      {
        id: 'modelovy-priklad',
        title: 'Modelový příklad: z nového článku vzniknou tři příspěvky',
        paragraphs: [
          'Představte si menší firmu, která na web každý týden publikuje jeden odborný článek. Dnes z něj správce ručně vybírá důležité informace, přepisuje text pro každou síť, dohledává fotografii, posílá návrh ke schválení a pak vše znovu vkládá do plánovače.',
          'Navržená automatizace může hlídat nový článek, vytvořit návrh krátkého příspěvku pro Facebook, výstižný text k obrázku na Instagram a odbornější verzi pro LinkedIn. Všechny návrhy se uloží do přehledu a čekají na schválení. Teprve schválené položky se předají podporovanému publikačnímu nástroji. Jde o příklad možného řešení, nikoli o již hotovou realizaci pro klienta.',
          'Přesně tímto směrem chci pokračovat i u svého video-studia. V Antigravity teď řeším střih videí ze složky pomocí vlastního skillu a Remotion skills. Až bude fungovat spolehlivě, přijde na řadu napojení na sociální sítě. Publikování zatím automatické nemám.',
        ],
        bullets: [
          '1. Nový článek na webu spustí přípravu návrhů.',
          '2. AI vytvoří různé texty pro jednotlivé sítě z ověřeného podkladu.',
          '3. Správce upraví fakta, vizuály, odkazy a příspěvky schválí.',
          '4. Plánovač zveřejní obsah podle nastaveného kalendáře, pokud to daný kanál umožňuje.',
          '5. Výsledek se uloží do přehledu pro další vyhodnocení.',
        ],
        links: [{ href: '/blog/automaticky-strih-videa', label: 'Jak do tohoto procesu zapojit i automatický střih videa' }],
      },
      {
        id: 'co-ai-nenahradi',
        title: 'Co bych AI nesvěřila bez kontroly',
        paragraphs: [
          'Automatická publikace chybných informací může poškodit značku rychleji než pozdě dodaný příspěvek. U zdravotních, právních, finančních nebo citlivých sdělení je potřeba zvlášť pečlivé posouzení. Také odpovědi zákazníkům, práce s osobními údaji a řešení krizové komunikace vyžadují jasná pravidla a možnost zásahu člověka.',
          'Před propojením účtů doporučuji prověřit jejich oprávnění, oficiální API a podmínky dané platformy. Ne každý typ příspěvku lze automaticky publikovat na každé síti. Nástroj musí poznat chybu, zobrazit stav zpracování a nevydávat nepovedenou publikaci za úspěch.',
        ],
      },
      {
        id: 'kolik-stoji-sprava',
        title: 'Kolik stojí automatizace správy sociálních sítí',
        paragraphs: [
          'Cenu neurčuje samotný počet sociálních sítí. Záleží především na tom, zda stačí nastavit existující plánovač, propojit několik služeb nebo vyvinout samostatný systém. Do nákladů může vstupovat licence plánovacího nástroje, spotřeba AI služeb, hosting, správa přístupů a průběžná údržba.',
          'U vlastní automatizace má smysl začít jedním procesem a ověřit ho. Například přípravou návrhů z článku včetně schválení, bez automatického publikování. Po prvních testech lze bezpečně rozhodnout, zda rozšíření přinese dostatečnou hodnotu. Konkrétní rozpočet připravím po probrání zadání, bez neověřených příslibů ušetřených hodin.',
        ],
      },
      {
        id: 'skills',
        title: 'Co do projektu přináším jako LinkLady',
        paragraphs: [
          'Jsem zvyklá řešit současně obsah, technické propojení i to, proč má příspěvek vůbec vzniknout. Díky zkušenostem s weby a SEO mohu začít už u zdroje obsahu a navrhnout postup, který ho využije vícekrát. Technickou část propojuji s možností schvalovat a měřit výsledky.',
        ],
        bullets: [
          'Vývoj webových aplikací, interních přehledů a automatizačních nástrojů.',
          'Make.com, AI nástroje, zpracování dat a propojení systémů.',
          'SEO, analýza obsahu a podklady pro smysluplný publikační plán.',
          'Příprava a střih videí jako součást obsahového workflow.',
          'Testování oprávnění, chybových stavů a srozumitelný způsob předání.',
        ],
        links: [{ href: '/sluzby/ai-automatizace', label: 'AI automatizace pro firmu' }, { href: '/sluzby/webove-aplikace', label: 'Vývoj aplikací a interních systémů' }],
      },
      {
        id: 'jak-bych-postupovala',
        title: 'Jak bych vám automatického správce sociálních sítí vytvořila',
        paragraphs: [
          'Nejdřív bych chtěla vidět, kde dnes obsah připravujete a kde se zdržujete. Stačí ukázka jedné obsahové série, seznam kanálů a člověk, který má příspěvky schvalovat. Potom navrhnu, co lze převzít z hotových řešení a co je lepší doprogramovat.',
          'Začala bych pilotem s jedním vstupním zdrojem, jedním schvalovacím krokem a omezeným počtem publikací. Pokud workflow funguje a lidé ho chtějí používat, můžeme přidat další kanály, šablony nebo dashboard. Cílem není robot, který bezhlavě publikuje, ale systém, který vám vrací čas a drží kvalitu pod kontrolou.',
        ],
        bullets: [
          'Pošlete kanály, které spravujete, a ukázku současného postupu.',
          'Vybereme jednu rutinu, kterou má smysl automatizovat jako první.',
          'Připravím návrh, otestuji napojení a nastavíme kontrolu před publikací.',
          'Předám funkční řešení a domluvíme potřebné úpravy i údržbu.',
        ],
        links: [{ href: '/kontakt', label: 'Poptat automatizaci správy sociálních sítí na míru' }],
      },
      {
        id: 'faq',
        title: 'Časté otázky k AI správě sociálních sítí',
        paragraphs: [
          'Může AI sama spravovat Instagram a Facebook? AI může pomáhat s přípravou obsahu a v kombinaci s dalšími systémy i s plánováním. Dostupnost automatické publikace závisí na typu účtu, konkrétním kanálu a oprávněních. Obsah doporučuji předem schvalovat.',
          'Nahradí automatizace social media manažera? Spíše mu uvolní ruce od rutiny. Strategie, komunikace s publikem, ověřování faktů a odpovědnost za značku zůstávají na člověku.',
          'Musím si koupit nový software? Ne vždy. Pokud vám stačí funkce existujícího plánovače, začneme u něj. Vlastní aplikaci má smysl navrhovat až ve chvíli, kdy má jasný přínos.',
        ],
      },
    ],
    related: [
      { href: '/sluzby/ai-automatizace', label: 'AI automatizace a integrace' },
      { href: '/sluzby/webove-aplikace', label: 'Vlastní aplikace na míru' },
      { href: '/blog/automaticky-strih-videa', label: 'Automatický střih videa a tvorba krátkých klipů' },
    ],
  },
];
