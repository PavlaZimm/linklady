import Link from 'next/link';

export default function LinkTypesArticle() {
  return <>
    <p>Dostali jste nabídku zpětného odkazu a nevíte, podle čeho ji posoudit? Samotné označení „dofollow“ ani vysoké skóre domény nestačí. Nejdřív zjistěte, proč odkaz vzniká, kdo na něj může kliknout a zda cílová stránka navazuje na obsah, který člověk právě čte.</p>
    <p>Zpětný odkaz vede z cizího webu na váš web. Odkaz mezi dvěma stránkami vašeho webu je interní. Pro praktické rozhodování se hodí rozlišit tři skupiny podle původu: redakční, reklamní a uživatelské. Nejde o automatické rozdělení na dobré a špatné.</p>
    <h2>1. Redakční odkazy: autor odkazuje na užitečný zdroj</h2>
    <p>Redaktor cituje váš průzkum, odbornice doporučí návod nebo pořadatel uvede váš profil u přednášky. Odkaz doplňuje informaci, kterou by jinak musel čtenář hledat sám. O jeho zařazení rozhoduje autor či redakce podle obsahu.</p>
    <p>Projděte si konkrétní stránku. Je z textu zřejmé, proč odkaz vede právě k vám? Najde čtenář na cílové adrese slíbená data, příklad nebo vysvětlení? Pokud odkaz míří na úvodní stránku, přestože článek popisuje konkrétní návod, navrhněte přesnější cíl.</p>
    <p>Takový odkaz nemusíte získat náhodou. Můžete upozornit autora na vlastní užitečný podklad. Rozhodnutí, zda jej použije, nechte na něm. Postup popisuje článek o <Link href="/linkbuilding-outreach-jak-budovat-zpetne-odkazy-a-posilit-autoritu-webu/">oslovování webů při linkbuildingu</Link>.</p>
    <h2>2. Reklamní odkazy: součást domluvené propagace</h2>
    <p>Sem patří odkaz v placeném článku, reklamním umístění nebo dohodnutém barterovém výstupu. Může přivést relevantní návštěvníky. Nabídku proto posuzujte jako propagaci: jaké má publikum, kam návštěvníka vede a jak poznáte, zda splnila cíl.</p>
    <p>Před objednáním si vyžádejte ukázku umístění, dobu zveřejnění a způsob vyhodnocení. Neplaťte pouze za slib „silného odkazu“. U článku se ptejte také na označení reklamy, obsahovou kontrolu a možnost opravit nefunkční cílovou adresu.</p>
    <p>Pokud protihodnotou nejsou peníze, ale vaše práce či produkt, princip posuzování nákladů zůstává. Praktický rozpočet a zadání najdete v článku o <Link href="/barterova-spoluprace-idealni-marketingovy-tah/">barterové spolupráci</Link>.</p>
    <h2>3. Uživatelské odkazy: diskuse a komunitní obsah</h2>
    <p>Uživatel vloží odkaz do komentáře, diskuse nebo svého příspěvku. Užitečný příklad je odpověď na konkrétní dotaz, která odkazuje na podrobný postup. Rozhodující je, zda odkaz pomáhá řešit danou otázku a respektuje pravidla komunity.</p>
    <p>Nevkládejte stejnou propagační odpověď do desítek vláken. Pokud odkazujete na vlastní službu, vztah přiznejte a napište použitelnou odpověď i přímo do diskuse. Člověk by neměl muset odejít jinam jen proto, aby zjistil základní informaci.</p>
    <p>Uživatelský původ sám o sobě neříká, zda je doporučení důvěryhodné. Prohlédněte si souvislosti, aktivitu účtu a to, zda text skutečně reaguje na předchozí debatu.</p>
    <h2>Co znamenají sponsored, ugc a nofollow</h2>
    <p>Google doporučuje <code>sponsored</code> pro reklamu a <code>ugc</code> pro uživatelský obsah. <code>nofollow</code> použijte, pokud jiné označení nesedí a nechcete vyjádřit podporu cíli; běžný odkaz zvláštní atribut nepotřebuje. Viz <a href="https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links">dokumentace Google</a>.</p>
    <p>Tyto atributy upřesňují vztah mezi odkazující stránkou a cílem odkazu. Nejsou známkou kvality článku ani zárukou návštěvnosti. Výraz „dofollow“ se běžně používá pro odkaz bez atributů sponsored, ugc či nofollow; při kontrole proto chtějte vidět skutečný zápis, ne pouze označení v ceníku.</p>
    <p>Příklad reklamního odkazu v HTML: <code>{'<a href="https://example.com/sluzba" rel="sponsored">Podrobnosti služby</a>'}</code>. Text viditelný čtenáři je „Podrobnosti služby“. Atribut najdete ve zdrojovém kódu, nemusí být na stránce vidět.</p>
    <h2>Podle čeho poznat smysluplný odkaz</h2>
    <p>Při rychlé kontrole si otevřete zdrojovou i cílovou stránku a odpovězte na těchto pět otázek:</p>
    <ol>
      <li><strong>Souvislost:</strong> doplňuje odkaz téma konkrétního textu?</li>
      <li><strong>Publikum:</strong> může čtenář využít to, co nabízíte?</li>
      <li><strong>Cíl:</strong> načte se správná stránka a splní očekávání vytvořené odkazem?</li>
      <li><strong>Vznik:</strong> je jasné, zda jde o doporučení, reklamu, nebo uživatelský příspěvek?</li>
      <li><strong>Přínos:</strong> máte důvod očekávat užitečné návštěvy a způsob, jak je vyhodnotit?</li>
    </ol>
    <p>Odkaz v patičce není automaticky špatný a odkaz uprostřed článku automaticky dobrý. Stejně tak firemní profil v relevantním oborovém seznamu posuzujte podle jeho využití, nikoli jen podle slova „katalog“. Samotná pozice odkazu nenahradí kontrolu obsahu.</p>
    <h2>Jak zkontrolovat odkazy, které už máte</h2>
    <p>Přehled odkazů v Search Console ukazuje vzorek, nikoli úplný seznam. Podrobnosti k rozsahu uvádí <a href="https://support.google.com/webmasters/answer/9049606">nápověda přehledu Odkazy</a>. Neberte počet řádků jako počet návštěvníků.</p>
    <p>Vyberte několik relevantních domén a prohlédněte si skutečné stránky. Pro návštěvnost otevřete analytiku a zdroje návštěv. Sledujte také návazné poptávky, ale počítejte s tím, že měření nemusí zachytit každou návštěvu ani celý rozhodovací proces zákazníka.</p>
    <p>Do jednoduché tabulky si zapište zdrojovou adresu, cíl, typ spolupráce, datum kontroly a zjištěný problém. Tak poznáte, které odkazy vedou na zaniklou stránku a kde stojí za to požádat o opravu. Nové příležitosti pak vybírejte podle <Link href="/11-tipu-jak-ziskat-validni-zpetny-odkaz/">praktických tipů na získávání odkazů</Link>.</p>
    <p>Potřebujete určit, kterým odkazům a stránkám věnovat čas? V rámci <Link href="/seo-konzultant-usti-nad-labem">SEO konzultace</Link> můžeme projít konkrétní ukázky a sestavit pořadí úprav podle stavu vašeho webu.</p>
  </>;
}
