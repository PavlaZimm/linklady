# Redakční audit blogu LinkLady — 22. 11. 2026

## Rozsah a limity
- Rozsah: všech **17 položek zobrazovaných ve výpisu blogu**, včetně čtyř obnovených starších článků a tří průvodců na samostatných URL mimo `/blog/`.
- Postup: načtení zdrojových textů z repozitáře, vyhledání opakovaných a obecně formulovaných pasáží, redakční kontrola jejich smyslu, cílené přepsání. Zachovány konkrétní informace, interní odkazy, metadata, tabulky a struktura.
- **Nespouštěl se lokální skill `humanizer` z Macu**: není připojený k tomuto prostředí ani dostupný v seznamu instalovaných plugin skills. Jde o **redakční humanizační průchod**, nikoliv výstup tohoto konkrétního skillu. Nevydáváme jej za automatický certifikát ani za měřitelný „AI detection score“.
- Úspěšné sestavení není totéž jako nezávislé ověření správnosti každého tvrzení. V tomto průchodu se neprováděla nová externí faktická rešerše ani nové měření SEO.

## Kontrola celého blogového výpisu

| Článek | URL | Stav | Poznámka |
| --- | --- | --- | --- |
| Automatický střih videa | `/blog/automaticky-strih-videa` | **Upraven** | Osobnější popis vlastní práce, důvod využití Antigravity, realisticky označené plány |
| Automatická správa sociálních sítí | `/blog/automaticka-sprava-socialnich-siti` | **Upraven** | Místo obecných formulací konkrétní příklad a srozumitelné hranice automatizace |
| Reporting a dashboard | `/blog/reporting-a-dashboard` | **Upraven** | Přirozenější úvod zaměřený na uživatele |
| Kolik stojí webové stránky | `/blog/kolik-stoji-webove-stranky` | Zkontrolován, beze změny | Konkrétní ceny a podmínky, bez potřeby stylistické výměny |
| Zadání webu | `/blog/zadani-webu` | **Upraven** | Stručnější, méně učebnicový úvod |
| Analýza klíčových slov | `/blog/analyza-klicovych-slov` | **Upraven** | Začíná běžnou situací zákazníka, ne definicí pojmu |
| Co obsahuje SEO audit | `/blog/co-obsahuje-seo-audit` | Zkontrolován, beze změny | Praktické kroky a ověřitelné příklady |
| Jak vytvořit webovou aplikaci | `/blog/jak-vytvorit-webovou-aplikaci` | **Upraven** | Úvod bez univerzálního návodu „aplikaci vytvoříte tak, že“ |
| Prodej firmy | `/blog/prodej-firmy-strategicky-krok` | Zkontrolován, beze změny | Téma vyžaduje věcný jazyk; vyhýbáme se volnému přepisování odborných tvrzení |
| Webové aplikace: příklady | `/blog/webove-aplikace-priklady` | Zkontrolován, beze změny | Přímé vysvětlení s konkrétními situacemi |
| Barterová spolupráce | `/barterova-spoluprace-idealni-marketingovy-tah/` | Zkontrolován, beze změny | Přirozený praktický tón |
| 11 tipů na zpětné odkazy | `/11-tipu-jak-ziskat-validni-zpetny-odkaz/` | Zkontrolován, beze změny | Konkrétní a čitelné postupy |
| 3 typy zpětných odkazů | `/3-typy-zpetnych-odkazu-ktery-je-ten-spravny/` | Zkontrolován, beze změny | Užitečné příklady a jasná kritéria |
| Linkbuilding outreach | `/linkbuilding-outreach-jak-budovat-zpetne-odkazy-a-posilit-autoritu-webu/` | Zkontrolován, beze změny | Věcná práce s ukázkou a doporučeními |
| AI agent | `/ai-agent` | **Upraven** | Lidštější vysvětlení; místo příliš širokých slibů přístupová oprávnění a kontrola |
| Automatizace procesů | `/automatizace` | Zkontrolován, beze změny | Konkrétní rutinní úkoly, jazyk přirozený |
| Vibecoding | `/vibecoding` | **Upraven** | Odstraněné přehnané formulace o automatickém programování „za vás“ a hotových produkčních aplikacích |

**Výsledek:** 17/17 položek prošlo redakční kontrolou, cílené úpravy v 8 článcích, ostatní ponechány bez zásahu. Opravy jsou součástí samostatného PR a mají projít produkčním buildem před nasazením.

## Kontrolní seznam pro příští články
1. Začít situací, kterou čtenář řeší, místo obecné definice nebo slibu.
2. Použít konkrétní příklad, skutečný postup či omezení; nevyrábět falešné výsledky a případové studie.
3. Napsat v první osobě pouze to, co autorka skutečně dělala nebo uvedla; plány jasně označit jako plány.
4. Měnit opakované vazby pouze tam, kde přeformulování pomůže srozumitelnosti; neopravovat jen kvůli „AI detektoru“.
5. Zachovat význam, SEO hledanost, URL, odkazy, ceny, data, citace a technické podmínky.
6. Kontrolovat zejména automatizaci a AI: nepsat o nedokončené integraci jako o hotové a nepopisovat vygenerovaný kód jako automaticky bezpečný.
7. Po redakčním průchodu ověřit build, metadata a funkčnost článku.
8. Pokud bude skutečný lokální skill `humanizer` zpřístupněný v repozitáři nebo do prostředí, spustit jej samostatně, porovnat diff a teprve potom schvalovat publikaci.
