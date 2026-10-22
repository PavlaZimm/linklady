# První sada oprav LinkLady — 22. 10. 2026

## Podklady a výchozí stav

Ověřeno proti aktuálnímu kódu před úpravami; pracovní strom byl čistý. Samostatný audit z 20. 10. 2026 v repozitáři nebyl nalezen. Rozsah vychází z konkrétních nálezů a návrhů předaných v zadání. V repozitáři nebyl nalezen AGENTS.md; respektovány pokyny CLAUDE.md.

Žádný z osmi požadovaných kontextových odkazů nebyl přítomen. Obě dotčené FAQ odpovědi a tři obecné meta popisy dosud nebyly opravené. Již existující upozornění v barterovém článku na označování reklamy, sponsored/nofollow a zákaz stavět barter na slibu lepších pozic zůstávají zachovaná.

## Změny URL

| Zdroj | Cíl nového kontextového odkazu |
| --- | --- |
| /automatizace | /sluzby/ai-automatizace |
| /blog/webove-aplikace-priklady | /sluzby/webove-aplikace |
| /projekty/autoskola-jana | /sluzby/tvorba-webu |
| /projekty/spacelady | /sluzby/webove-aplikace |
| /barterova-spoluprace-idealni-marketingovy-tah/ | /sluzby/linkbuilding |
| /11-tipu-jak-ziskat-validni-zpetny-odkaz/ | /sluzby/linkbuilding |
| /3-typy-zpetnych-odkazu-ktery-je-ten-spravny/ | /sluzby/linkbuilding |
| /linkbuilding-outreach-jak-budovat-zpetne-odkazy-a-posilit-autoritu-webu/ | /sluzby/linkbuilding |

Každá zdrojová stránka má právě jeden kontextový odkaz na požadovaný cíl. Odkazy jsou v odstavcích, text je gramaticky přizpůsoben. Projektová šablona používá volitelný datový kontext připojený k poslednímu odstavci pouze u dvou určených projektů.

Na /kontakt jsou odpovědi o SEO a automatizacích nahrazené zadanými texty. Odkaz ze slova Automatizace na původní článek zůstává. FAQ schema na stránce není a nebylo přidáno.

Na /sluzby/ai-automatizace, /sluzby/webove-aplikace a /sluzby/linkbuilding jsou přesně zadané meta popisy. Volitelné metaDescription prochází existujícím pageMetadata a zachovává shodu description, og:description a twitter:description. Ostatní služby nadále používají intro. Viditelné úvody služeb se nemění.

Popisy odpovídají nabídce: automatizace zahrnují CRM, formuláře, reporting a řešení chyb; webové aplikace práci s daty, oprávnění a správu; linkbuilding výběr tematických příležitostí, obsah, outreach a evidenci umístění. Předání automatizací je popsané i na související /automatizace. Rozsah další správy se v popisech domlouvá, neslibuje jako automaticky zahrnutý.

## Otevřený bod ČSZ

/projekty/csz-novosedlice je stále nedokončený detail: pending: true, jediný obecný odstavec o zařazení do portfolia, prázdné features. Neobsahuje věcný popis realizace. Proto podle zadání ponecháno noindex, follow a vyřazení ze sitemap. Canonical je https://www.linklady.cz/projekty/csz-novosedlice. Zpřístupnění indexaci zůstává otevřené po dodání skutečných podkladů. Samotný web ČSZ nebyl měněn ani posuzován.

## Ověření

- npm run build: úspěch, včetně typové kontroly a generování 48 stránek.
- npx vitest run: všech 44 testů v 7 souborech prošlo.
- npm run lint: bez chyb a varování ESLint. Příkaz next lint hlásí deprecaci pro budoucí Next.js 16.
- git diff --check: bez problémů.
- Lokální produkční náhled: načtení všech osmi zdrojů a čtyř cílových služeb; kontrola skutečného DOM, textů odstavců a přesných href.
- Responzivní kontrola všech osmi zdrojů v prohlížeči při 390 a 1440 px: správné texty odkazů, žádné horizontální přetékání. FAQ navíc vizuálně ověřeno na snímcích při 390 a 1440 px.
- Výsledný DOM tří služeb: právě jeden meta description, shodné sociální popisy, vlastní původní canonical a index, follow.
- Výsledný DOM ČSZ: noindex, follow; v sitemap.xml není. Služby v sitemap jsou.
- Kontakt: nové odpovědi, bez FAQPage ve strukturovaných datech.
- Staré článkové URL včetně koncových lomítek v canonical zachovány. Redirecty, globální robots a sitemap nebyly upraveny.

Build upozornil na starší databázi Browserslist/caniuse-lite. Závislosti se v této sadě nemění. První pokus o lokální server blokoval sandbox; po povolení lokálního portu náhled fungoval. Kontroly proběhly lokálně, nikoli na produkci. Nebyl proveden scraping ani nasazení. Commit zůstává lokální na feature větvi; push nebyl proveden, aby nespustil automatický deployment.
