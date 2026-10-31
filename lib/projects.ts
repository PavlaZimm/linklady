export type Project = {
  slug: string;
  art: string;
  name: string;
  category: "apps" | "content" | "other";
  tag: string;
  heading: string;
  description: string;
  url: string;
  paragraphs: string[];
  serviceContext?: { before: string; href: string; label: string; after: string };
  features: string[];
  screenshot?: { src: string; alt: string; caption: string; href: string };
  source: string;
  pending?: boolean;
};
export const projects: Project[] = [
  {
    slug: "flyqueens",
    serviceContext: { before: "Propojení externích dat s vlastním rozhraním může být součástí ", href: "/sluzby/webove-aplikace", label: "vývoje webové aplikace", after: ". Pro konkrétní projekt nejdřív ověřím zdroje a potřebné funkce." },
    art: "fly",
    name: "FlyQueens.cz",
    category: "apps",
    tag: "LETECTVÍ / DATA",
    heading: "Svět nad námi.",
    description: "Aplikace pro sledování letů a práci s leteckými daty.",
    url: "https://www.flyqueens.cz/",
    paragraphs: [
      "FlyQueens propojuje informace o letech s jejich zobrazením v aplikaci. Jde o příklad webu, ve kterém je hlavním obsahem práce s daty.",
      "Na stránce Webová aplikace na míru popisuji napojení na externí zdroj a zobrazování dat v reálném čase.",
    ],
    features: [
      "Sledování letů",
      "Externí zdroj dat",
      "Zobrazení leteckých informací",
    ],
    source: "/webova-aplikace",
  },
  {
    slug: "spacelady",
    serviceContext: { before: "Podobné propojení dat a interaktivních funkcí řeším při ", href: "/sluzby/webove-aplikace", label: "návrhu a vývoji webových aplikací", after: "." },
    art: "space",
    name: "SpaceLady.cz",
    category: "apps",
    tag: "ASTRONOMIE / INTERAKTIVNÍ NÁSTROJE",
    heading: "Vesmír na dosah.",
    description: "Průvodce oblohou, fázemi Měsíce a vesmírnými misemi.",
    url: "https://spacelady.cz/",
    paragraphs: [
      "SpaceLady jsem vytvořila pod značkou LinkLady jako českého průvodce vesmírem. Projekt přibližuje noční oblohu lidem, kteří chtějí zjistit, kdy a kam se podívat, bez nutnosti orientovat se v odborných přehledech.",
      "Návštěvník si v nástroji Obloha dnes vybere místo a datum. Dostane vypočtenou fázi Měsíce, časy východů a západů Slunce i Měsíce a přehled poloh planet. Předpověď oblačnosti se zobrazuje zvlášť pro nejbližší hodiny, nezávisle na zvoleném datu výpočtu.",
      "Web rozlišuje výpočty od skutečných podmínek pozorování a uvádí jejich omezení. Počasí, okolní terén a překážky mohou výhled změnit. Vedle přehledu oblohy nabízí také informace o Měsíci, ISS a startech raket.",
    ],
    features: [
      "Výběr místa a data pro výpočet oblohy",
      "Fáze a osvětlení Měsíce, východy a západy",
      "Směr a výška planet ve zvoleném čase přehledu",
      "Předpověď oblačnosti oddělená od astronomického výpočtu",
      "Přehledy ISS a vesmírných misí",
    ],
    screenshot: {
      src: "/projects/spacelady-obloha-2026-10-22.jpg",
      alt: "Rozhraní SpaceLady s výběrem místa a data, vypočtenou fází Měsíce a časy východů a západů pro Bílinu.",
      caption: "Skutečné rozhraní nástroje Obloha dnes, zachycené 22. 10. 2026. Údaje na snímku odpovídají okamžiku pořízení.",
      href: "https://spacelady.cz/obloha-dnes",
    },
    source: "https://spacelady.cz/",
  },
  {
    slug: "attersee",
    serviceContext: { before: "Pokud chcete sami publikovat články a rozvíjet podobně strukturovaný obsah, prohlédněte si nabídku ", href: "/sluzby/tvorba-webu-wordpress", label: "tvorby webových stránek ve WordPressu", after: "." },
    art: "attersee",
    name: "Attersee.cz",
    category: "content",
    tag: "RAKOUSKO / CESTOVÁNÍ",
    heading: "Mezi horami a jezery.",
    description: "Obsahový průvodce rakouskými jezery a výlety do Alp.",
    url: "https://attersee.cz/",
    paragraphs: [
      "Attersee.cz je cestovatelský web věnovaný rakouským jezerům a jejich okolí. Vedle jezera Attersee se věnuje také dalším místům v Rakousku.",
      "Čtenáři na něm najdou tipy na výlety, turistiku a ubytování. Obsah propojuje konkrétní destinace s praktickými informacemi pro cestu.",
    ],
    features: ["Průvodci jezery", "Tipy na výlety", "Informace o ubytování"],
    source: "https://attersee.cz/",
  },
  {
    slug: "ithaka",
    art: "ithaka",
    name: "Ithaka.cz",
    category: "content",
    tag: "ŘECKO / CESTOVATELSKÝ MAGAZÍN",
    heading: "Příběhy Řecka.",
    description: "Řecké ostrovy, cestování a příběhy míst.",
    url: "https://ithaka.cz/",
    paragraphs: [
      "Ithaka.cz se věnuje cestování po Řecku a jeho ostrovech. Spojuje inspiraci pro další cestu s průvodci jednotlivými místy.",
      "Magazín nabízí tematické články pro čtenáře, kteří chtějí poznat řecké destinace před odjezdem.",
    ],
    features: ["Řecké ostrovy", "Průvodci destinacemi", "Cestovatelský obsah"],
    source: "https://ithaka.cz/",
  },
  {
    slug: "tripradar",
    art: "tripradar",
    name: "Tripradar.cz",
    category: "content",
    tag: "EVROPA / CESTOVATELSKÝ OBSAH",
    heading: "Svět čeká.",
    description: "Tipy na evropské destinace, města a výlety.",
    url: "https://tripradar.cz/",
    paragraphs: [
      "Tripradar.cz je cestovatelský magazín zaměřený na evropské destinace. Nabízí inspiraci pro výlety a poznávání měst.",
      "Články pomáhají čtenářům prozkoumat místa a připravit si vlastní cestu.",
    ],
    features: [
      "Evropské destinace",
      "Města a výlety",
      "Cestovatelská inspirace",
    ],
    source: "https://tripradar.cz/",
  },
  {
    slug: "bilinsko",
    art: "bilinsko",
    name: "Bílinsko.cz",
    category: "content",
    tag: "REGION / MÍSTA A VÝLETY",
    heading: "Blízko. A přesto nové.",
    description: "Výlety a tipy z Bíliny a jejího okolí.",
    url: "https://bilinsko.cz/",
    paragraphs: [
      "Bílinsko.cz přibližuje místa v okolí Bíliny. Regionální obsah nabízí tipy pro místní i návštěvníky.",
      "Web je zaměřený na výlety a objevování okolí. Jednotlivé články propojuje společný region.",
    ],
    features: ["Bílina a okolí", "Regionální obsah", "Tipy na výlety"],
    source: "https://bilinsko.cz/",
  },
  {
    slug: "csz-novosedlice",
    art: "csz",
    name: "ČSZ Novosedlice",
    category: "other",
    tag: "SPOLKOVÝ WEB",
    heading: "Společně rosteme.",
    description: "Projekt pro ČSZ Novosedlice.",
    url: "https://csznovosedlice.cz/",
    paragraphs: [
      "ČSZ Novosedlice je zařazený v portfoliu webových projektů. Veřejná adresa projektu je uvedena níže.",
    ],
    features: [],
    source: "https://csznovosedlice.cz/",
    pending: true,
  },
  {
    slug: "vse-pro-mineraly",
    art: "mineraly",
    name: "Vše pro minerály",
    category: "other",
    tag: "E-SHOP / SBĚRATELSTVÍ",
    heading: "Svět minerálů.",
    description: "E-shop s vybavením pro sběratele minerálů.",
    url: "https://vsepromineraly.cz/",
    paragraphs: [
      "Vše pro minerály je e-shop s krabičkami, vitrínami a podstavci pro sběratele minerálů.",
      "Projekt je již uvedený mezi realizacemi na původní stránce Webová aplikace na míru.",
    ],
    features: ["Krabičky", "Vitríny", "Podstavce pro minerály"],
    source: "/webova-aplikace",
  },
  {
    slug: "autoskola-jana",
    serviceContext: { before: "Pokud potřebujete podobně představit své služby, podívejte se, co zahrnuje ", href: "/sluzby/tvorba-webu", label: "tvorba firemního webu", after: "." },
    art: "jana",
    name: "Autoškola Jana",
    category: "other",
    tag: "LOKÁLNÍ FIREMNÍ WEB",
    heading: "Cesta vpřed.",
    description: "Web autoškoly v Bílině s ceníkem, kurzy a aktualitami.",
    url: "https://autoskolajana.cz/",
    paragraphs: [
      "Web Autoškoly Jana představuje nabídku výuky řízení v Bílině. Návštěvníci na něm najdou ceník, informace o kurzech a aktuality.",
      "Podle původní realizace na Linklady je web postavený na Next.js s databází. Autoškola může obsah spravovat bez přepisování kódu.",
    ],
    features: [
      "Ceník a nabídka kurzů",
      "Aktuality",
      "Samostatná správa obsahu",
    ],
    source: "/webova-aplikace",
  },
];
export const categories = [
  { id: "all", label: "Všechny" },
  { id: "apps", label: "Aplikace & data" },
  { id: "content", label: "Obsahové weby" },
  { id: "other", label: "Další realizace" },
] as const;
