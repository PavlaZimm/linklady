# Dva kontextové odkazy a kontrola služeb — 22. 10. 2026

Navazuje na 5cca71c na větvi fix/contact-lead-measurement. Opravy formulářů i předchozí práce jsou zachované. Respektován CLAUDE.md; AGENTS.md v projektu nebyl nalezen. Podkladem je ../gsc-2026-10-22/README.md. Předchozí necommitovaná dokumentace analýzy GSC zůstává samostatně, beze změn.

## Změny

- /webova-aplikace: v části „Jak vytvořím webovou aplikaci na míru“, ve stávajícím odstavci s odkazem na návod, doplněna věta s odkazem **návrh a vývoj webové aplikace na míru** → /sluzby/webove-aplikace. Oba odkazy na související články zůstávají.
- /seo-konzultant-usti-nad-labem: do stávajícího odstavce pod „SEO audit“ doplněn odkaz **rozsah SEO auditu a navazující spolupráce** → /sluzby/seo.

Oba odkazy před úpravou chyběly. Použita existující komponenta Link a styl odkazu. Žádné jiné obsahové změny, metadata, ceny, URL, přesměrování nebo indexační nastavení.

## Technická kontrola produkce

Přímé GET požadavky na https://www.linklady.cz, 22. 10. 2026:

| Kontrola | /sluzby/tvorba-webu | /sluzby/linkbuilding |
|---|---|---|
| HTTP bez následování přesměrování | 200 | 200 |
| Canonical | https://www.linklady.cz/sluzby/tvorba-webu | https://www.linklady.cz/sluzby/linkbuilding |
| Meta robots | index, follow | index, follow |
| Meta googlebot | index, follow; povolené náhledy | index, follow; povolené náhledy |
| X-Robots-Tag | není přítomen | není přítomen |
| robots.txt | procházení povoleno | procházení povoleno |
| sitemap.xml | přesná kanonická URL přítomna | přesná kanonická URL přítomna |
| Odkaz z /sluzby | jeden přímý href, cíl HTTP 200 | jeden přímý href, cíl HTTP 200 |

robots.txt povoluje / a zakazuje pouze /api/. Konkrétní blokace nebyla nalezena. Sitemap, canonical ani robots nebyly měněny a odkazy ze seznamu služeb se neduplikovaly. Strojově čitelné výsledky: technicka-kontrola.json.

## Živé testy GSC

Provedeny v přihlášeném Chromu ve službě s předponou https://www.linklady.cz/. Žádost o indexaci nebyla odeslána.

| URL | Uložený index před testem | Živý test |
|---|---|---|
| /sluzby/tvorba-webu | Objeveno – momentálně neindexováno; sitemap.xml a odkazující homepage, crawl a canonical nedostupné | Úspěšné načtení, „Adresa URL je Googlu dostupná“, „Stránku lze indexovat“; čas procházení v UI 22. 10. 2026 12:30:15 |
| /sluzby/linkbuilding | Google adresu URL nezná; crawl, odkazující zdroje a canonical nedostupné | Úspěšné načtení, „Adresa URL je Googlu dostupná“, „Stránku lze indexovat“; čas procházení v UI 22. 10. 2026 12:30:54 |

Oba živé testy: inspekční nástroj Google pro chytré telefony, procházení Ano, indexování Ano, uživatelský canonical odpovídá testované URL. Canonical vybraný Googlem se určuje až po indexování. U tvorby webu jde o změnu oproti dřívějšímu reportu „URL nezná“; není důvod ji přičítat těmto dosud nenasazeným odkazům.

**Zůstává nepotvrzené skutečné zařazení obou URL do indexu a canonical vybraný Googlem.** Živý test potvrzuje aktuální dostupnost a možnost indexace, nikoli její provedení. Oddělené důkazy jsou v gsc-*-index.txt a gsc-*-live.txt.

## Kontroly změn

- npm run lint: bez chyb či varování ESLint.
- npm run build: úspěšný včetně TypeScript a generování 48 stránek. Jen známá upozornění na deprecaci next lint a stará data Browserslist.
- npx vitest run: 57/57 existujících testů, 9/9 souborů. Nové testy nebyly přidány.
- HTML lokálního produkčního buildu na portu 3107: oba nové odkazy přesně jednou, správný text i href; oba cíle vracejí HTTP 200. Původní odkazy na oba články o aplikacích zachované. Výsledky v overeni-html.json.
- git diff --check: bez problémů. Zdrojový diff obsahuje pouze dva odstavce.

Nové odkazy nejsou zatím na produkci. Žádný push ani deployment, žádné odesílání formulářů nebo žádosti o indexaci.
