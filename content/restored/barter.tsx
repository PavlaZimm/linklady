import Link from 'next/link';

export default function BarterArticle() {
  return <>
    <p>Nabídli vám propagaci výměnou za produkt nebo několik hodin práce? Než souhlasíte, chtějte vědět, co přesně dostanete a koho tím oslovíte. Barterová spolupráce může dávat smysl i malé firmě. Má ale skutečné náklady a věta „vzájemně se podpoříme“ je pro dohodu příliš neurčitá.</p>
    <h2>Co je barterová spolupráce</h2>
    <p>Barter je výměna zboží nebo služeb za jiné zboží či služby. Grafik například připraví fotografce ceník a ona mu nafotí portréty. U barterové reklamy je protihodnotou propagace: produkt poskytujete za domluvený příspěvek, video nebo jiný reklamní výstup.</p>
    <p>Rozhodující je, zda obě strany potřebují to, co dostanou. Pokud fotografii nevyužijete, její vysoká ceníková cena z nabídky výhodný obchod neudělá. Stejně tak vám nepomůže velký účet na sociální síti, jehož publikum nemůže vaši službu koupit.</p>
    <h2>Co si zjistit před prvním souhlasem</h2>
    <p>Začněte cílem. Chcete fotografie do nabídky, návštěvy konkrétní stránky, nebo objednávky? Každý z těchto výsledků vyžaduje jiný výstup i jiné vyhodnocení. „Větší povědomí“ si přeložte do něčeho, co dokážete po spolupráci zkontrolovat.</p>
    <ul>
      <li><strong>Shoda publika:</strong> působí partner ve vašem oboru nebo regionu? Podívejte se na obsah a reakce, ne pouze na počet sledujících.</li>
      <li><strong>Dosavadní práce:</strong> vyžádejte si ukázku podobného výstupu. U propagace také výsledky s obdobím a vysvětlením, co čísla znamenají.</li>
      <li><strong>Kapacita:</strong> kolik času zabere příprava, komunikace a opravy? Neodsune výměna zakázku, kterou potřebujete dokončit?</li>
      <li><strong>Použitelnost:</strong> budete moci fotografie nebo video zveřejnit i na vlastním webu? Na jak dlouho a s jakým uvedením autora?</li>
    </ul>
    <h2>Fiktivní příklad: kolik stojí barterová reklama</h2>
    <p>Představte si malý e-shop, který poskytne balíček za jeden příspěvek a tři příběhy. Následující částky jsou pouze modelový příklad, nikoli výsledky skutečné kampaně.</p>
    <div className="overflow-x-auto"><table>
      <thead><tr><th>Položka</th><th>Náklad</th></tr></thead>
      <tbody>
        <tr><td>Pořízení produktů</td><td>700 Kč</td></tr>
        <tr><td>Balení a doprava</td><td>150 Kč</td></tr>
        <tr><td>Dvě hodiny práce oceněné na 400 Kč za hodinu</td><td>800 Kč</td></tr>
        <tr><td>Celkem pro pracovní vyhodnocení</td><td>1 650 Kč</td></tr>
      </tbody>
    </table></div>
    <p>Pokud z jedné objednávky zbývá po odečtení jejích proměnných nákladů 330 Kč, potřebujete pět dodatečných objednávek, aby tento jednoduchý výpočet vyšel na nulu: 1 650 ÷ 330 = 5. Nejde o účetní výpočet ani zisk celé firmy. Při plné kapacitě započítejte také možnost, že místo barteru prodáte produkt nebo svůj čas platícímu zákazníkovi.</p>
    <p>Pro měření použijte označený odkaz nebo vlastní kód. Domluvte si datum předání statistik. Kód se může šířit dál a návštěvník se může vrátit jinou cestou, takže ani tento postup nepřiřadí každou objednávku dokonale.</p>
    <h2>Co napsat do dohody</h2>
    <p>Sepište alespoň stručné potvrzení podmínek, ke kterému se oba můžete vrátit. Následující seznam je pracovní zadání, nikoli univerzální smlouva:</p>
    <ol>
      <li>Co každá strana dodá, v jakém množství a do kdy.</li>
      <li>Kde se výstup objeví a jak dlouho zůstane dostupný.</li>
      <li>Jak proběhne kontrola věcných chyb a kolik úprav je zahrnuto.</li>
      <li>Kdo smí hotový obsah dále používat a v jakém rozsahu.</li>
      <li>Jak bude spolupráce označená a jaké statistiky partner předá.</li>
      <li>Co se stane při zpoždění, nedodání nebo zrušení spolupráce.</li>
    </ol>
    <p>Oddělte slíbený výstup od očekávaného výsledku. Partner může dodat domluvené video; konkrétní počet objednávek ale obvykle závisí i na nabídce, ceně a vašem webu. Účetní a daňové zachycení konkrétní výměny proberte s účetní.</p>
    <h2>Označení reklamy platí i pro barter</h2>
    <p>Podle <a href="https://commission.europa.eu/topics/consumers/consumer-rights-and-complaints/influencer-legal-hub_en">průvodce Evropské komise</a> je potřeba označit také reklamní obsah vytvořený výměnou za produkt nebo službu. Komise doporučuje viditelné písemné označení na začátku obsahu a v jeho jazyce; podrobnosti najdete v <a href="https://commission.europa.eu/system/files/2023-10/Disclosure%20dos%20and%20don%27ts.pdf">doporučení k označování reklamy</a>.</p>
    <p>V zadání proto uveďte srozumitelné označení „Reklama“ nebo „Placená spolupráce“ a při kontrole se podívejte, zda nezmizelo mezi hashtagy. Nezaměňujte reklamní výstup za nezávislou zákaznickou recenzi.</p>
    <h2>A co výměna zpětných odkazů?</h2>
    <p>Google mezi odkazový spam řadí výměny zboží či služeb za odkazy určené k ovlivnění hodnocení a nadměrné výměny odkazů. Viz <a href="https://developers.google.com/search/docs/essentials/spam-policies#link-spam">pravidla odkazového spamu</a>. Barter proto nestavte na slibu lepších pozic.</p>
    <p>Reklamní odkaz má být označen atributem <code>rel="sponsored"</code>; Google připouští také <code>nofollow</code>. Podrobnosti uvádí <a href="https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links">dokumentace označování odkazů</a>. Rozdíly vysvětluje i článek o <Link href="/3-typy-zpetnych-odkazu-ktery-je-ten-spravny/">typech zpětných odkazů</Link>.</p>
    <p>Máte konkrétní nabídku propagace a nevíte, zda může přivést zákazníky na váš web? <Link href="/kontakt">Pošlete mi její podmínky a adresu webu</Link>. Projdeme publikum, náklady a stránku, na kterou odkaz povede.</p>
  </>;
}
