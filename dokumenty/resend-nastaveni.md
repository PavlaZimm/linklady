# Resend – Linklady

Stav 18. 9. 2026: doména přidána, tři DNS záznamy u VAS Hostingu uloženy po výslovném potvrzení uživatelky. Původních 9 záznamů zachováno (celkem 12). Resend doménu i všechny tři záznamy ověřil (Verified). Klíč „Linklady – formulář Vercel“ má pouze Sending access pro linklady.cz a je uložen jako tajná proměnná RESEND_API_KEY ve Vercelu pro Production. Nový web zatím není nasazen.
Účet: zimmermannovap@gmail.com. Region: Irsko (eu-west-1). Příjem pošty vypnutý.
Detail: https://resend.com/domains/31b4aa28-52e2-4b5e-8f9b-2580a1052095

## DNS u VAS Hostingu

Záznamy opsané přímo z otevřeného Resend účtu (veřejné hodnoty, žádné tajemství):

| Typ | Název | Hodnota |
| --- | --- | --- |
| TXT | resend._domainkey | p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBLCjyhciZ4HjpOek+VtHJabj08+kGhdalEN2g7p+H3UFTLh9odyli9W8GZpk8Y0Qi/Yughnk1QKr8uIRNSjlfXqACu1J3b5AX8NDp3P5Tvl0KujWh3gVM+FH9cYhoGCb92yiRc32qjwGr5lGSfFjonzeOKe51aloxmdtguxBr/wIDAQAB |
| CNAME | rsend | rsend-euw1.forge.rmta.net |
| CNAME | send | send.forge.rmta.net |

Stávající MX, SPF a všech původních 9 záznamů zachováno. Nové záznamy mají TTL 1800; DNS ID: TXT 842575, rsend 842576, send 842577. DMARC nebyl měněn.

## Zbývá dokončit

- Bezplatný Upstash Redis linklady-form-limit je vytvořený ve Frankfurtu a připojený k Production projektu Linklady s citlivými proměnnými. Podmínky byly přijaty po potvrzení uživatelky.
- Nasadit připravené změny přes feature branch a PR.
- Ověřit skutečnou testovací poptávku a stav doručení v Resendu. Lokální testy nejsou důkazem doručení.

Google skript z předchozího pokusu zůstává nenásazený; zvolené řešení je Resend.
