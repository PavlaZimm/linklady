# Kontaktní formulář – Resend do Gmailu

## Stav 18. 9. 2026

Doména linklady.cz je v Resendu ověřená. Omezený odesílací klíč je uložen ve Vercelu jako tajná proměnná RESEND_API_KEY pro Production. Implementace prošla 25 testy kontaktní route a odesílání, kontrolou TypeScriptu a produkčním sestavením. Změna ještě není nasazená a skutečné doručení nebylo otestováno.

Bezplatný Upstash Redis linklady-form-limit byl vytvořen ve Frankfurtu a připojen k produkčnímu projektu Linklady. Přístupové údaje jsou citlivé serverové proměnné. Implementace podporuje proměnné UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN (podporovány jsou i KV_REST_API_URL / KV_REST_API_TOKEN). Žádné tajemství nepatří do klientského kódu ani Gitu.

## Chování připravené implementace

Server validuje vstupy a odesílá čistý text přes Resend z formular@linklady.cz pouze na zimmermannovap@gmail.com. Reply-To obsahuje adresu návštěvníka, takže lze odpovědět přímo z Gmailu. Při nastaveném RESEND_API_KEY se nepoužije původní Convex ani Google větev.

Společné atomické počítadlo dovolí 5 podání za hodinu na e-mail a IP a 90 za den celkem. Redis ukládá krátkodobé HMAC identifikátory, otisky žádostí a časy; neukládá texty poptávek ani původní adresy. Počítají se i pokusy, při kterých následně odesílání selže. Opakování stejného požadavku používá stejný idempotency key u Resendu. Bez funkčního počítadla se e-mail neodešle.

Úspěch formulář zobrazí až po přijetí zprávy Resendem. To samo nepotvrzuje umístění v doručené poště. Při chybě zůstanou vyplněná data zachovaná a návštěvník může použít e-mailový odkaz. Poptávky nemají další záložní databázi. Google skript nebyl nasazen.

## Dokončení a ověření

1. Ověřit názvy připojených proměnných pro počítadlo v Production projektu Linklady.
2. Nasadit změny přes feature branch, PR a sloučení do main.
3. Odeslat jednu jasně označenou testovací poptávku z webu; ověřit výsledek formuláře a skutečný stav doručení v Resendu.
4. Samostatně ověřit skutečný limit počítadla bez opakovaného odesílání e-mailů.

Testy: npx vitest run tests/contact-route.test.ts tests/contact-resend.test.ts
Sestavení: npm run build
