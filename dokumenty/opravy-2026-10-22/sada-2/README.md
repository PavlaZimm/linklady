# Druhá sada úprav — 22. 10. 2026

Navazuje na lokální commit af42d1b na větvi fix/service-links-faq-metadata. Před zahájením byl pracovní strom čistý. První sada oprav zůstává zachovaná. AGENTS.md nebyl nalezen v projektu ani nadřazených složkách; respektovány pokyny CLAUDE.md a přehled ../README.md.

## Co se změnilo

- **/sluzby/ai-automatizace:** upřesnění vhodných úkolů, vstupních podkladů, ověření proveditelnosti, lidské kontroly a faktorů ceny a provozu. Přesně tři příklady jsou označeny jako možné použití, nikoli realizované zakázky. Přístupy, nakládání s daty, chyby a odpovědnost za správu se domlouvají předem. Individuální CTA je u existujícího formuláře. Nevzniká příslib nepřetržité podpory.
- **/sluzby/webove-aplikace:** vysvětlení, kdy může stačit hotový nástroj. Přehled uživatelů, dat, propojení, rolí a první verze; ověření, předání a správa podle domluvy. Přidán odkaz na SpaceLady a individuální CTA u formuláře.
- **/projekty/spacelady:** rozšíření účelu, ověřených funkcí a doloženého autorství. Autentický screenshot veřejného nástroje nahrazuje tematickou ilustraci na detailu; má alt a datum pořízení. Odkaz na službu z první sady zůstává přesně zachovaný. Karty ostatních projektů se nemění.
- **/sluzby/seo:** existující sekce o doporučeních byla zpřesněna na „Jak vypadá výstup SEO auditu“, bez přidávání další obdobné sekce. Obsahuje problém a URL, důkaz, dopad a prioritu, opravu a způsob následné kontroly. Implementace ani další kontrola nejsou automaticky přidány do ceny. Bez smyšlené klientské ukázky.

Použity existující datové seznamy, šablony, typografie a formulář. Přidána pouze volitelná pole pro text u formuláře a screenshot projektu; obrázek používá existující Next.js Image. Žádné nové závislosti.

## Podklady reference a hranice tvrzení

Ověřeno 22. 10. 2026:

- [SpaceLady — O projektu](https://spacelady.cz/o-projektu): veřejně uvádí, že web vytvořila LinkLady, účel přiblížit oblohu a přehled nástrojů. Podporuje obecné „vytvořila jsem pod značkou LinkLady“, nikoli výčet konkrétních profesních rolí nebo technologií.
- [SpaceLady — Obloha dnes](https://spacelady.cz/obloha-dnes): aktuální veřejné rozhraní v prohlížeči obsahuje volbu místa a dne, fázi a osvětlení Měsíce, časy východů a západů, tabulku poloh planet, samostatnou předpověď oblačnosti a vysvětlení omezení. Přehled planet byl ověřen v živém DOM, starší textový výpis této stránky jej ještě neobsahoval.
- [SpaceLady — úvod](https://spacelady.cz/): návaznost nástrojů Měsíc, ISS a starty raket, rozlišení výpočtu a skutečné viditelnosti.
- Lokální lib/projects.ts, dokumenty/creative-flow-4-3/README.md a původní CODEX_BRIEF.md: zařazení SpaceLady mezi astronomické/datové projekty a předchozí popis funkcí.
- SEO: lib/services.ts a app/blog/co-obsahuje-seo-audit/page.tsx již popisují nálezy s důkazy, URL, prioritami a kontrolou. Nová sekce shrnuje nabídku na stránce služby.

Screenshot public/projects/spacelady-obloha-2026-10-22.jpg pochází přímo z veřejné stránky Obloha dnes, viewport 1440 × 1000. Použito veřejné výchozí město Bílina; nebyla vyžádána poloha prohlížeče ani zadány osobní údaje. Snímek není generovaný a nepředstírá aktuální data při pozdějším zobrazení.

### Co potřebuje doplnit majitelka pro další rozšíření

- Původní zadání a okolnosti vzniku (vlastní projekt versus konkrétní zadavatel).
- Konkrétní rozsah její práce a případných spolupracovníků: návrh, obsah, implementace, správa. Obecné autorství LinkLady je doložené, podrobné rozdělení práce nikoli.
- Případné měřitelné výsledky s obdobím a zdrojem dat; nyní nejsou publikované žádné výsledkové sliby ani klientské výroky.

Tyto chybějící informace neblokovaly doložené úpravy. Na veřejné stránce nejsou pracovní poznámky ani prázdné sekce.

## Kontroly

- npm run build: úspěšný, včetně TypeScript kontroly a generování 48 stránek.
- npx vitest run: 44/44 testů, 7/7 souborů.
- npm run lint: bez chyb a varování ESLint.
- git diff --check: bez problémů; diff neobsahuje jiné obsahové stránky, kontakty, ceny, URL, canonical, robots ani redirecty.
- Jednorázové porovnání dat s af42d1b: zachované ceny, metadata, identifikátory, veřejné adresy, indexační příznaky a serviceContext první sady.
- Prohlížeč při 1440 a 390 px: všechny čtyři upravené stránky bez horizontálního přetékání, jediný H1 a navazující H2/H3. Screenshot SpaceLady načtený s alt. Vizuální kontrola snímků všech čtyř stránek v obou velikostech; snímky jsou v této složce, DOM kontrola v browser-check.json.
- Kliknutí na CTA tří služeb vede na #poptavka s existujícím formulářem a odesílacím tlačítkem. AI a webové aplikace obsahují přesně zadanou výzvu. Reálná zpráva nebyla odeslána; serverové zpracování a odesílání pokrývají existující testy.
- Proklik SpaceLady → webové aplikace → SpaceLady potvrzen. V konzoli náhledu nebyly zachyceny chyby.
- Canonical a index, follow u čtyř stránek zachovány. Metadata a FAQ z první sady nebyly přepisovány. ČSZ zůstává beze změn.

Stejně jako v první sadě build upozorňuje na stáří dat Browserslist a next lint na budoucí deprecaci. Bez aktualizace závislostí mimo rozsah zadání.

## Náhled a předání

Lokální produkční náhled: http://127.0.0.1:3105/projekty/spacelady (dostupný pouze na tomto počítači, dokud běží server). Další cesty: /sluzby/ai-automatizace, /sluzby/webove-aplikace a /sluzby/seo. Opětovné spuštění: npm run start -- --hostname 127.0.0.1 --port 3105.

Druhá sada má vlastní commit navazující na af42d1b. Žádný push, deployment ani placený scraping nebyl proveden.
