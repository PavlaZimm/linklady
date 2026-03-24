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
