# CLAUDE.md — linklady.cz

## Project Overview
Portfolio a servisní web pro Pavlu Zimmermannovou (online marketing specialistka).
Doména: linklady.cz

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Backend/DB**: Convex (BaaS)
- **Auth**: Convex Auth + ResendOTP
- **UI**: Tailwind CSS 3, Radix UI, Framer Motion
- **Forms**: React Hook Form + Zod
- **Email**: Resend
- **Tests**: Vitest + Testing Library
- **Lint**: ESLint 9

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run lint` — ESLint
- `npx vitest` — run tests
- `npx convex dev` — Convex dev server

## Security Rules
- **No secrets in code or git. Ever.** Use environment variables and `.env` files only. `.env` is in `.gitignore`.
- **Never put keys in `NEXT_PUBLIC_` env vars** unless they are truly public (e.g. Convex URL).
- **Input validation is server-side** (Zod schemas in `convex/contacts.ts`). Never trust client-side validation alone.
- **XSS prevention**: HTML tag stripping + entity encoding already implemented. Maintain this pattern.
- **Security headers** are configured in `middleware.ts` (CSP with nonce, HSTS, X-Frame-Options DENY). Do not weaken them.
- **Rate limiting**: 5 submissions per email per hour (in Convex). Maintain this.

## Code Standards
- Never use `type: any`. Use strict typing, generics, or `unknown`.
- When editing, maintain consistency with established visual style and code patterns. Match what's already there.

## Design System
- **Primary color**: purple `#7B1FA2`
- **Accent color**: yellow `#FFC107`
- **Animations**: Framer Motion (fade-in via Intersection Observer)
- **Components**: Radix UI primitives with Tailwind styling
- **Language**: Czech (cs) — all user-facing text is in Czech

## Landing Page Template (MUSTR)
Pro všechny servisní/landing stránky (služby, průvodci, prodejní stránky) platí jednotný vizuální vzor — **mustr**. Referenční stránky (závazné šablony):
- `app/seo-konzultant-usti-nad-labem/page.tsx`
- `app/tvorba-webu-bilina/page.tsx`

Každá servisní stránka (např. `/automatizace`, `/ai-agent`, `/webova-aplikace`, `/vibecoding`, …) **musí** mít tuto strukturu a styl:

1. **Hero sekce** — `hero-gradient text-white py-20 relative overflow-hidden`
   - Žlutý blob vpravo: `absolute top-0 right-0 w-1/2 h-full yellow-gradient opacity-80 rounded-l-full transform translate-x-1/4`
   - Breadcrumb (Úvod / aktuální — aktuální `text-yellow-400`)
   - Nadpis `text-4xl md:text-6xl font-bold` s akcentem `text-yellow-400`
   - Perex `text-xl md:text-2xl opacity-90` + podperex `text-lg opacity-80`
   - Dva CTA: primární `bg-yellow-400 text-purple-900 rounded-full` + sekundární `border-2 border-white/80 rounded-full`
   - Řádek 3–4 trust signálů se žlutými check ikonami

2. **Table of Contents** — `py-12 bg-gradient-to-br from-gray-50 to-purple-50/30`
   - Bílá karta `rounded-2xl shadow-lg border border-purple-100 p-8`
   - Číslované kotvy s `bg-purple-100 rounded-lg` badges

3. **Sekce „Proč / Výhody"** — `py-24 bg-gradient-to-br from-gray-50 to-purple-50/30`
   - Grid `md:grid-cols-2 lg:grid-cols-3 gap-8`, bílé karty `p-8 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100`
   - Ikony ve čtverci `w-16 h-16 rounded-2xl` střídající barvy (purple/yellow/green/blue)

4. **Sekce „Služby / Co nabízím"** — `py-24 bg-white`
   - Grid 2 sloupce velkých karet s gradientem (`from-purple-50 to-white`, `from-yellow-50 to-white`)
   - Ikona 14×14 v barevném čtverci, nadpis, popisek, checklist s ikonami

5. **Sekce „Jak probíhá spolupráce"** — stepper s kroky 1–4, číslované `bg-primary rounded-full` badges

6. **Sekce „Pro koho"** — grid karet s ikonkami oborů

7. **FAQ sekce** — `py-24`, otevřené karty `rounded-2xl border border-gray-100` (ne `<details>`)

8. **CTA sekce na konci** — purple gradient s velkým tlačítkem, pak `<SiteFooter />`

Barvy, spacing, stíny, `rounded-2xl`, gradient pozadí i ikony **kopíruj** 1:1 z referenčních stránek. Nepoužívej jednoduchý článkový layout (dlouhý text v `max-w-3xl` bez karet) — ten je vyhrazen pouze pro `app/blog/**`.

## Git & Deploy
- Git author email: `zimmermannovap@gmail.com` (required — Vercel rejects commits without it).
- Commit messages: concise, imperative mood.
- Feature branches + Pull Requests before merging into `main`.
- Deploy: Git → GitHub → Vercel (auto-deploy).

## Project Structure
- `app/` — Next.js App Router pages and layouts
- `components/` — React components
- `convex/` — Convex backend (schema, mutations, queries, auth)
- `lib/` — Utilities
- `public/` — Static assets
- `middleware.ts` — Security headers (CSP, HSTS, etc.)
