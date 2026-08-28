# Formulář: jak rozchodit odesílání zdarma

Formulář na webu se do teď odesílal přes `mailto:`, tedy otevřel
návštěvníkovi jeho e-mailový program a nechal ho odeslat zprávu podruhé.
Na mobilu bez nastavené pošty se často nestalo nic.

Tohle to spraví **zdarma, bez placené služby a bez registrace u třetí
strany.** Poptávka půjde přes Google Apps Script, který zprávu odešle
z tvého vlastního Gmailu.

**Limit Gmailu je 100 zpráv denně**, což je pro web s 25 prokliky
za čtvrt roku násobně víc, než kdy bude potřeba.

---

## Krok 1: založ skript (5 minut)

1. Otevři **script.google.com** a přihlas se svým Googlem.
2. Klikni na **Nový projekt**.
3. Smaž, co je v editoru, a vlož tenhle kód:

```javascript
// Příjem poptávky z webu linklady.cz a odeslání na vlastní Gmail.
const KAM = 'zimmermannovap@gmail.com';
const TAJEMSTVI = 'sem-vloz-vlastni-heslo';

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);

    // Jednoduchá ochrana, aby skript nemohl použít kdokoli.
    if (d.tajemstvi !== TAJEMSTVI) {
      return odpoved({ ok: false, duvod: 'neopravneno' });
    }

    const radky = [
      'Jméno: ' + (d.name || ''),
      'E-mail: ' + (d.email || ''),
      d.phone ? 'Telefon: ' + d.phone : '',
      d.service ? 'Co potřebuje: ' + d.service : '',
      '',
      d.message || '',
    ].filter(String).join('\n');

    MailApp.sendEmail({
      to: KAM,
      subject: d.subject || ('Poptávka z webu: ' + (d.name || '')),
      body: radky,
      replyTo: d.email || KAM,
    });

    return odpoved({ ok: true });
  } catch (err) {
    return odpoved({ ok: false, duvod: String(err) });
  }
}

function odpoved(o) {
  return ContentService
    .createTextOutput(JSON.stringify(o))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. **Změň `sem-vloz-vlastni-heslo`** na libovolné vlastní heslo. Nemusí
   to být nic složitého, třeba `linklady-formular-2026`. Jen ho budeš
   potřebovat ve druhém kroku, tak si ho zkopíruj.

## Krok 2: nasaď skript

1. Vpravo nahoře **Nasadit → Nové nasazení**.
2. U položky Typ klikni na ozubené kolo a vyber **Webová aplikace**.
3. Nastav:
   - **Spustit jako:** já (tvoje adresa)
   - **Kdo má přístup:** **Kdokoli**
4. Klikni **Nasadit** a povol oprávnění, na které se Google zeptá.
   Zeptá se, jestli smí posílat e-maily tvým jménem. To je v pořádku,
   je to tvůj vlastní skript.
5. Zkopíruj **URL webové aplikace**. Vypadá jako
   `https://script.google.com/macros/s/DLOUHY-KOD/exec`.

⚠️ **Ta adresa je přístupový údaj. Neposílej ji do chatu.**

## Krok 3: vlož obojí do Vercelu

Ve Vercelu u projektu **Settings → Environment Variables** přidej:

| název | hodnota |
|---|---|
| `POPTAVKA_SCRIPT_URL` | URL z kroku 2 |
| `POPTAVKA_TAJEMSTVI` | heslo z kroku 1 |

Pak **Deployments → poslední nasazení → Redeploy**, aby se proměnné
načetly.

## Krok 4: vyzkoušej

Otevři na webu kontaktní formulář, vyplň ho a odešli. Do minuty ti má
přijít e-mail. Když nepřijde, mrkni ve Vercelu do **Logs**, jestli tam
u `/api/poptavka` není chyba.

---

## Co se stane, když to nenastavíš

**Nic se nerozbije.** Formulář nejdřív zkusí server a když odesílání
nastavené není, spadne zpátky na `mailto` přesně jako dnes. Web tedy
funguje pořád, jen bez té výhody.

## Proč zrovna takhle

- **Zdarma a bez třetí strany.** Nepotřebuje účet u Resendu, Formspree
  ani nikde jinde, běží to na tvém Googlu.
- **Formsubmit.co, který se běžně doporučuje, se z českého O2 vůbec
  nenačte.** Ověřeno 27. 8. 2026: DNS ho překládá na adresu
  s certifikátem pro o2.cz a spojení selže. Návštěvníci z O2 by
  formulář neodeslali.
- **Žádná nová závislost v projektu.** Volá se to obyčejným požadavkem.
