# Creative Flow 4.3 — implementace a ověření

Výchozí commit: `53dd6f3b13e2349d050688441e996668bc927741` (main). Implementace vznikla na větvi `codex/creative-flow-4-3`. Produkční domény ani přesměrování se nemění.

## Audit a rozsah

Původní App Router obsahuje homepage, O mně, kontakt, blog se třemi novějšími články, čtyři obnovené WordPress články, e-book a šest specializovaných služeb. Kontaktní formulář používá `/api/poptavka`, serverovou validaci, ochranu proti spamu a Resend/Convex/Apps Script podle konfigurace. Middleware zajišťuje CSP s nonce a původní canonical cesty článků. Tyto mechanismy zůstávají zachované.

Redesign přidává `/projekty`, devět detailů, `/sluzby` a pět služeb. Homepage obsahuje šest projektů ve schváleném pořadí. Sdílená navigace, patička a tokeny se používají i na původních URL. U původních stránek se zachovávají texty, metadata, články a místní zaměření. Není potřeba SEO migrace nebo nová přesměrování. Sitemap doplňuje nové dokončené stránky.

Manrope se servíruje lokálně přes `next/font`. Nová homepage je serverová komponenta; JavaScript potřebuje pouze menu a filtr. Ilustrace tvoří CSS podle schválených podkladů. Nejde o skutečné screenshoty projektů, což je uvedeno i na webu.

## Podklady a jejich limity

- FlyQueens, Autoškola Jana a Vše pro minerály: doložený popis z původní `/webova-aplikace` a `/blog/webove-aplikace-priklady`.
- SpaceLady: [veřejný web](https://spacelady.cz/) včetně odkazu na Linklady; přehled oblohy, Měsíc, ISS a mise.
- Attersee, Ithaka, Tripradar, Bílinsko: [Attersee](https://attersee.cz/), [Ithaka](https://ithaka.cz/), [Tripradar](https://tripradar.cz/), [Bílinsko](https://bilinsko.cz/) potvrzují tematické zaměření. Texty popisují viditelné funkce, ne nedoložený rozsah dodávky, obchodní výsledky nebo technologie.
- ČSZ Novosedlice: projekt pochází ze zadání; veřejný web nebylo možné spolehlivě ověřit. Detail je stručný, má `noindex, follow` a není v sitemap. Před jeho indexací je třeba doplnit skutečný rozsah spolupráce a podklady od majitelky.
- Portrét je původní `public/profile.jpg`. Reference 4.3 jsou dodaný archiv a jeho screenshoty. Žádné nové klientské citace, číselné úspěchy ani reference nejsou vymyšlené.

Next.js a eslint-config-next se aktualizují z 15.4.8 na 15.5.27, stále v řadě 15. Důvodem jsou známé chyby původní verze a [oficiální bezpečnostní doporučení](https://nextjs.org/blog/august-2026-security-release). Ostatní přímé závislosti zůstávají stejné.

Analytické ID a odložené načítání zůstávají na produkčních hostech stejné. Na localhost a Preview se analytika nenačítá, aby testování neznečišťovalo produkční data; odpovídá to už existujícímu omezení v `lib/analytics.ts`. Původní web neměl ovládání souhlasu s cookies; redesign nový souhlas nepředstírá.

## Reprodukce testů

```sh
npm ci
npm run build
npm run lint
npx tsc --noEmit
npx vitest run
npm run start -- --hostname 127.0.0.1 --port 3103
```

`browser-check.cjs` vyžaduje externě dostupný `playwright` a `axe-core` (např. přes `NODE_PATH`), lokální Chrome a volitelně `QA_URL`. Testuje HTTP odpovědi a canonical adresy 34 stránek, interní odkazy, H1/main, přetečení při 320/390/768/1440 px, mobilní menu/Escape, čtyři filtry, barvy nadpisů a kontaktní formulář. Úspěch i výpadek odeslání jsou simulované v browseru; skutečné API dostává jen neplatný payload. Žádný skutečný lead se neodesílá.

Screenshoty `home-*` a `portfolio-*` dokládají 390, 768 a 1440 px. `browser-report.json` obsahuje výsledek axe a funkčních kontrol. `lighthouse-summary.json` obsahuje laboratorní měření homepage pro mobil a desktop. INP ani 75. percentil skutečných návštěv nelze prokázat z lokálního Lighthouse; vyžadují field data po případném schváleném nasazení.

## Finální výsledky (14. 10. 2026)

- Produkční build Next.js 15.5.27: PASS; TypeScript: PASS; lint: PASS; Vitest: 33/33.
- Browser: 34 obsahových URL a 34 interních cílů, jedna H1 a main na každé stránce, správné canonical adresy. Přetečení nenalezeno při 320/390/768/1440 px na ověřovaných hlavních stránkách a detailech.
- Axe: 54 auditů (všech 34 URL na desktopu + hlavní stránky na mobilu/desktopu), bez nalezeného porušení WCAG 2 A/AA, 2.1 AA nebo 2.2 AA. Automatický audit nenahrazuje ruční ověření čtečkou obrazovky.
- Menu: otevření, Escape s návratem fokusu, zavření po přechodu a hydratace i na detailech. Filtry: 9/2/4/3/9, aria-pressed a živý počet výsledků.
- Kontakt: simulovaná úspěšná odpověď 200 a výpadek 503 se záložním e-mailem. Očekávaný konzolový log simulované 503 je v reportu oddělený od chyb aplikace. Skutečný neplatný požadavek vrací 400; test neodesílá skutečný e-mail ani lead.
- Lighthouse 13.5.0, lokální produkční build, simulovaná mobilní síť/CPU: výkon 95, přístupnost 100, best practices 100, SEO 100; LCP 1,7 s, CLS 0, TBT 240 ms. Desktop: výkon 99, ostatní kategorie 100; LCP 0,7 s, CLS 0, TBT 110 ms. Dřívější Lighthouse 12 nebyl vhodný pro aktuální Chrome a výsledky při souběžné práci nebyly stabilní; finální uložené měření proběhlo nástrojem 13.5 samostatně.
- Vzdálený Preview: ověřeno 7 reprezentativních URL, mobilní menu, filtr, hydratace služby a skutečná validace API (400). Žádné page errors. Deployment `dpl_FhbtasjsgYujuHsZG6wvNTFQZf8R`, projekt `prj_KWpLseu1YPwIr3VJ19QF3KOVdSq7`, target `preview`, stav `READY`.

[Preview](https://linklady-ahco2bzis-pavlazimms-projects.vercel.app) · [Pull request #46](https://github.com/PavlaZimm/linklady/pull/46)

Preview má původní Vercel Authentication: pro otevření může být nutné přihlášení majitelky do Vercelu. Testování používá krátkodobý projektový OIDC token pouze v hlavičce konkrétního Preview originu. Ochrana deploymentu se nemění. Produkční doména není přiřazená a produkce se nenasazuje.

Zdrojový commit ověřeného Preview: `c6d3945aeed70ca091cf75d93a438940b4574239`, větev `codex/creative-flow-4-3`. Commit s důkazy doplňuje jen dokumentaci, reporty a screenshoty.
