# Třetí sada — formuláře a měření poptávek (22. 10. 2026)

Větev `fix/contact-lead-measurement` vychází z `origin/main`, merge PR #51 `15a327e4dbfd3213702dc4479cede9c81ea3330d`. Pracovní strom byl před úpravami čistý. Předchozí dvě sady zůstávají zachované. Přečteny CLAUDE.md, reporty první a druhé sady a dokumentace formuláře/Resend. AGENTS.md nebyl nalezen. Žádný push, nasazení, skutečná zpráva ani zápis testovací poptávky do produkce neproběhl.

## Zjištěný stav a již funkční části

- Jeden sdílený ContactForm obsluhuje /kontakt, pět detailů /sluzby/* a /ai-agent, /automatizace, /vibecoding, /webova-aplikace, /tvorba-webu-bilina (11 stránek). Služby předávají kontext, kontakt nabízí volbu služby. Všechny používají POST /api/poptavka.
- Povinné jméno, e-mail a zpráva; nativní validace, popisky, limity délky, serverová validace Zod, kontrola původu a velikosti těla. Během odesílání je tlačítko vypnuté, synchronní zámek brání dvojímu submitu. Chyba nemaže pole; úspěch přesune focus na potvrzení. Timeout a e-mailová záloha byly implementované již dříve.
- Server vybírá dle konfigurace Resend → jinak Convex → jinak Apps Script. Nejde o automatické opakování u dalšího poskytovatele po nejasném selhání. Resend míří na pevně nastavenou schránku majitelky; uživatelský e-mail je reply-to. Convex ukládá poptávku a plánuje notifikaci, Apps Script předává údaje nakonfigurovanému endpointu. Kontakty ani adresáti nebyli změněni.
- Honeypot vrací accepted:false a nevytváří lead. Resend používá sdílené atomické Redis limity podle e-mailu/IP a celkového počtu, bez funkčního limiteru neposílá. IP čerpá z důvěryhodného Vercel prostředí. UUID a otisk payloadu tvoří idempotency key; při stejném opakování po chybě se klíč zachová. Convex má samostatný limit podle e-mailu; stejnou ochranu proti duplicitnímu uložení jako Resend neimplementuje.
- Existuje přímá GA4 integrace a Ahrefs Analytics, nikoli GTM kontejner. Loader i vlastní události vyžadují produkční hostname a platný pozitivní souhlas (180 dní). Odvolání souhlasu měření vypíná a obnoví stránku. Druhá integrace nebyla přidána.
- generate_lead se již spouštěl až při accepted:true, nikoli při kliknutí či neúspěchu. Zůstávají form_start, form_error a oddělené contact_email_click pro e-mailovou zálohu. Běžné odkazy na e-mail a telefon tímto nejsou nově instrumentované.

## Opravené chyby

1. Klient považoval neúplnou odpověď `{ok:true}` za úspěch. Nyní vyžaduje také explicitní boolean accepted; vadné potvrzení vede k chybové/e-mailové záloze, bez leadu. Úmyslné accepted:false pro honeypot zůstává zachované.
2. Výjimka analytického klienta mohla po přijetí poptávky zobrazit chybu formuláře. trackEvent nyní chybu analytiky izoluje; neposílá poptávku znovu ani neloguje její obsah. Obě vady byly nejprve reprodukovány selhávajícími regresními testy.
3. Klient nyní používá společné validační schéma před síťovým požadavkem: zachytí například zprávu tvořenou mezerami a URL s přihlašovacími údaji. Serverová kontrola zůstává povinná.
4. API předávalo Convexu requestId, které jeho striktní validátor nepřijímá. Nyní odesílá pouze podporovaný payload. Convex porovnává limit s normalizovaným e-mailem stejně jako při ukládání a vrací typovanou chybu RATE_LIMIT, kterou API převádí na 429. Oprava backendu Convex vyžaduje při budoucím použití také publikování jeho funkcí; v této sadě neproběhlo.

## Co se měří

Vlastní události zachovávají názvy. Kontext obsahuje pouze `form_id: contact`, dosavadní `form_location` (služba nebo kontakt) a `page_path` z pathname bez query a fragmentu. form_error navíc nese obecný reason. Jméno, e-mail, telefon, web zákazníka ani zpráva se do parametrů neposílají.

generate_lead vzniká jednou po potvrzeném přijetí aktuálního odeslání serverem, s pozitivním souhlasem. Neznamená doručení do schránky. Resend vyžaduje úspěšnou odpověď s ID (queued), Convex potvrzuje uložení (stored). Zablokování spamu, chyby, limity a kliknutí na záložní e-mail nejsou leady. Testy ověřují jednu událost i při dvojím submitu a při opakování po simulované chybě. Tato záruka se týká vlastního klientského kódu, nikoli případných dalších pravidel v účtu GA4.

## Ověření

- `npx vitest run`: **57/57 testů, 9/9 souborů**. Nový integrační test používá skutečný formulář, API route, validaci, Resend adaptér a consent/event helper; nahrazuje pouze síťové hranice. Ověřuje čekání na přijetí, dvojí submit, chyby sítě/poskytovatele, vadné potvrzení, vyčerpaný limit, zachování hodnot, opakovaný idempotency key, souhlas a události bez hodnot polí/query. Dva nové testy Convexu ověřují skutečný handler s náhradou databáze/scheduleru. Existující testy dále pokrývají serverové limity, honeypot, Apps Script, Convex a consent loader.
- `npm run lint`: bez chyb a varování ESLint. `npm run build`: úspěch včetně TypeScript a generování stránek. Pouze známá upozornění na deprecaci next lint a stará data Browserslist; závislosti se nemění.
- `git diff --check`: bez problémů. Diff nezasahuje služby, ceny, kontakty, URL, canonical, indexaci ani GitHub Pages workflow.
- Lokální produkční náhled: služba AI → CTA → #poptavka; desktop 1440 × 1000 a mobil 390 × 844. Vizuálně zachované rozložení, bez horizontálního přetékání. Kontrola popisků a Tab z jména na e-mail; pokus o prázdný submit zastaví nativní validace a focus se vrací na jméno. Mobilní /kontakt navíc ověřen s volbou služby. Platný formulář v prohlížeči nebyl odeslán. Úspěchy/chyby poskytovatele jsou simulace v testech, nikoli důkaz skutečného doručení.

## Co zůstává neověřené / potřebuje přístup majitelky

- Produkční proměnné poskytovatele: Vercel konektor odmítl přístup k týmu (403). Historické dokumenty popisují Resend a Upstash, ale nejsou důkazem aktuální konfigurace. Lokálně příslušné klíče/URL nejsou nastavené. Tajné hodnoty nebyly vypisovány. Aktivní větev serverového odesílání, aktuální ověření domény a doručení do schránky proto nejsou potvrzené.
- GA4: prohlížeč vyžaduje přihlášení. Správná property, skutečný příjem generate_lead, jeho označení jako klíčové události, případná duplicitní pravidla a Enhanced Measurement nebyly ověřeny. Kontrola parametrů vlastních událostí nepokrývá automatické parametry GA4 (například page_location/referrer) ani nastavení účtu. Účet nebyl změněn.
- GSC: dostupný konektor vrací 403 „no access to this Google property“, včetně pokusu o seznam dostupných properties. Stav sitemap a indexace hlavních služeb není ověřen. Nebyl odvozován z robots/canonical.
- Pro úplné provozní potvrzení je potřeba přístup ke správné GA4/GSC a hostingové konfiguraci; samostatně výslovný souhlas majitelky s reálnou zkušební poptávkou a následné ověření přijetí ve schránce. Nyní se nic skutečně neposílalo.

Lokální náhled: http://127.0.0.1:3106/kontakt a /sluzby/ai-automatizace, dokud běží server na tomto počítači. Znovuspuštění: `npm run start -- --hostname 127.0.0.1 --port 3106`.
