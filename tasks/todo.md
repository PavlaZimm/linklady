# Tasks

## Security Review

Kompletní bezpečnostní audit projektu linklady.cz. Datum: 2026-04-13.

### Secrets & Env

- [x] `.env`, `.env.*`, `.env*.local` jsou v `.gitignore`
- [x] Žádné `.env*` soubory nejsou trackované v gitu (`git ls-files | grep .env` — prázdné)
- [x] Prohledán kód na `sk-[A-Za-z0-9_-]{20,}` — žádné nálezy
- [x] Prohledán kód na `api[_-]?key|secret|password|token|bearer` s hodnotami — žádné nálezy
- [x] Git historie (`git log --all -p`) — žádné leaknuté klíče (mentions „Anthropic" jsou pouze obsah textů na stránkách)
- [x] `process.env.*` audit:
  - `EMAIL_NOTIFICATION_ENDPOINT`, `RECIPIENT_EMAIL`, `CHAT_ID`, `APP_NAME`, `SECRET_KEY`, `OTP_ENDPOINT`, `CONVEX_SITE_URL` — vše server-side (Convex)
  - `NEXT_PUBLIC_CONVEX_URL` — jediná veřejná proměnná, je to veřejná URL (OK)
- [x] Žádný `NEXT_PUBLIC_*` neobsahuje tajný klíč
- [x] Projekt **nepoužívá Supabase** (místo toho Convex + Convex Auth) — Supabase checks N/A

### TypeScript

- [x] `tsconfig.json` má `"strict": true` + všechny dílčí strict flagy (`noImplicitAny`, `strictNullChecks`, `strictFunctionTypes`, `noImplicitThis`, `alwaysStrict`, `strictPropertyInitialization`, `noImplicitReturns`, `noFallthroughCasesInSwitch`)
- [x] Žádné `: any` v kódu (`grep -r ": any" app/ components/ convex/ lib/` — 0 výsledků)
- [x] `next.config.js` nemá `ignoreBuildErrors` ani `ignoreDuringBuilds: true`

### Validace & sanitace

- [x] Server-side validace v Convex mutacích (`convex/contacts.ts`):
  - Délkové limity (name 100, email 254, subject 200, message 5000, phone 20, service 100)
  - Regex validace e-mailu
  - Required fields kontrola
  - Convex validators (`v.string()`, `v.id()`, `v.union(…)`) pro schema
- [x] XSS sanitace: `sanitizeInput()` striptuje HTML tagy + entity-encoduje `&<>"'` před uložením i před odesláním v e-mailu
- [x] Žádný SQL (Convex má typované queries, žádná string concatenation možná)
- [x] `zod` je v `package.json` (3.24.2) pro react-hook-form resolvery; Convex validators pokrývají server-side
- [x] `dangerouslySetInnerHTML` audit:
  - `components/json-ld.tsx` — **FIXED**: přidán `safeStringify()` s escape `\u003c`, `\u003e`, `\u0026`, `\u2028`, `\u2029` (defense-in-depth proti `</script>` break-out)
  - `components/ui/chart.tsx` — ShadCN UI, hodnoty z developer-controlled configu, bez user inputu (OK)
- [x] Žádný `eval()`, `innerHTML`, `document.write`

### API & CORS

- [x] **Žádné custom API routes** v `app/api/` — veškerý backend jde přes Convex (řeší CORS, auth, validaci)
- [x] Rate limiting v `convex/contacts.ts`: 5 submissionů / e-mail / hodinu
- [x] Convex Auth (OTP) — token má `maxAge: 10 min`, 8-znakový random token (≈2,8 × 10¹² kombinací) → brute-force nepraktický
- [ ] **Známé omezení**: rate limit je per-email, ne per-IP. Convex mutations nemají přímý přístup k request IP. Pokud by spam eskaloval, zvažit přesun do Convex HTTP action, kde je k dispozici `request.headers`.

### File Uploads

- [x] Projekt **nemá žádné file uploady** (grep `formData|FormData|multipart|upload` — žádné relevantní nálezy v aplikačním kódu)

### AI / Claude API

- [x] Projekt **nevolá žádné AI API** (žádný import `anthropic`, `openai`, `@ai-sdk`). Zmínky „Anthropic", „OpenAI" jsou pouze obsah marketingových textů na stránkách `/vibecoding`, `/ai-agent` atd.

### Security Headers (middleware.ts)

Aplikace používá **vlastní `middleware.ts`** (silnější než základní vercel.json), který nastavuje:

- [x] `Content-Security-Policy` — nonce-based pro skripty (bez `unsafe-eval`), whitelist pro GA/Ahrefs/Convex
  - `default-src 'self'`, `frame-src 'none'`, `object-src 'none'`, `frame-ancestors 'none'`, `base-uri 'self'`, `form-action 'self'`, `upgrade-insecure-requests`
  - `'unsafe-inline'` zůstává pouze pro `style-src` (Tailwind vyžaduje; akceptováno)
- [x] `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` (2 roky)
- [x] `X-Frame-Options: DENY`
- [x] `X-Content-Type-Options: nosniff`
- [x] `Referrer-Policy: strict-origin-when-cross-origin`
- [x] `X-XSS-Protection: 1; mode=block`
- [x] `Permissions-Policy` — restrikce kamera/mikrofon/geo/payment/usb/…
- [x] `Cross-Origin-Opener-Policy: same-origin`
- [x] `Cross-Origin-Resource-Policy: same-origin`
- [x] `X-Permitted-Cross-Domain-Policies: none`
- [x] `X-DNS-Prefetch-Control: off`
- [x] `next.config.js` — `poweredByHeader: false` (X-Powered-By skryt)
- [x] **`vercel.json` není potřeba** — duplicitní hlavičky by mohly kolidovat s middlewarem. Middleware pokrývá všech 7 požadovaných hlaviček z původního zadání a navíc Permissions-Policy, COOP/CORP.

### Dependencies

- [x] `npm audit` před opravou: 15 vulnerabilities (1 low, 4 moderate, 10 high)
- [x] `npm audit fix` — vyřešilo 14 vulnerabilities (ajv, brace-expansion, flatted, vite, webpack, yaml — vše v devDependencies)
- [x] Next.js upgrade: `15.4.8` → `15.5.15` (patch v rámci major 15) — fixuje 7 Next-specific CVE:
  - GHSA-w37m-7fhw-fmv9 (Server Actions Source Code Exposure)
  - GHSA-mwv6-3258-q52c (DoS with Server Components)
  - GHSA-9g9p-9gw9-jx7f (DoS via Image Optimizer)
  - GHSA-h25m-26qc-wcjf (HTTP request deserialization DoS)
  - GHSA-ggv3-7p47-pfv8 (HTTP request smuggling in rewrites)
  - GHSA-3x4c-7xq6-9pq8 (Unbounded next/image cache growth)
  - GHSA-q4gf-8mx6-v5v3 (DoS with Server Components)
- [x] `npm audit` po opravě: **found 0 vulnerabilities** ✅
- [x] `npm run lint` — pouze 1 performance warning (`<img>` na `/ebook`), žádné security issues

### Shrnutí

Projekt byl už **v dobré bezpečnostní kondici** před reviewm díky existujícímu `middleware.ts` a pečlivé Convex backend vrstvě. Konkrétní zásahy během auditu:

1. `components/json-ld.tsx` — doplněno `safeStringify()` s escape pro `<`, `>`, `&`, U+2028, U+2029 (defense-in-depth)
2. `npm audit fix` — vyřešilo 14 ze 15 vulnerabilities
3. Next.js upgrade 15.4.8 → 15.5.15 — vyřešilo 7 CVE

Výsledný stav: `npm audit` = **0 vulnerabilities**, žádné leaked secrets, strict TypeScript, silné security headers (nonce-based CSP), server-side validace + rate-limit, žádné API routes ani AI endpoints k ochraně.

**Jediná otevřená položka** (known limitation, nízká priorita): per-IP rate limit není možný v Convex mutations bez přesunu logiky do HTTP action. Současný per-email rate limit + 8-znakový OTP token to dostatečně pokrývají.
