# AURELLE — Luxury E-Commerce

<p align="center">
  <strong>Curated luxury — fashion, electronics, beauty, home & lifestyle.</strong><br/>
  Cinematic storefront built with TanStack Start, SSR streaming, and a design-system-first architecture.
</p>

<p align="center">
  <a href="https://github.com/gajbhiyes774/aurelle-ecommerce"><img src="https://img.shields.io/github/stars/gajbhiyes774/aurelle-ecommerce?style=flat-square&logo=github&label=Stars" alt="GitHub stars"/></a>
  <a href="https://github.com/gajbhiyes774/aurelle-ecommerce"><img src="https://img.shields.io/github/last-commit/gajbhiyes774/aurelle-ecommerce?style=flat-square&logo=git&logoColor=white" alt="Last commit"/></a>
  <a href="https://github.com/gajbhiyes774/aurelle-ecommerce/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="License"/></a>
  <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/TanStack_Start-1.168-FF4154?style=flat-square" alt="TanStack Start"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.2-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind"/>
  <img src="https://img.shields.io/badge/Vite-8.1-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/Nitro-3.0-00DC82?style=flat-square" alt="Nitro"/>
</p>

<p align="center">
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-project-structure">Structure</a> •
  <a href="#-environment-variables">Env</a> •
  <a href="#-deployment">Deploy</a>
</p>

---

## Overview

**AURELLE** is a production-grade luxury e-commerce storefront — editorial layout, smooth inertial scrolling, SSR with streaming, and a fully typed shopping context. Built for conversion without sacrificing craft: every interaction (cart drawer, product modal, marquee, silk reveals) is orchestrated with GSAP + Lenis.

> This repo replaces the Lovable boilerplate with a maintainable, veteran-owned codebase. No generated filler — just a clean TanStack Start foundation ready to wire to Firebase, Razorpay, or any headless backend.

**Live stack (today):** Vite 8 · TanStack Start + Router + Query · React 19 · Tailwind 4 · Radix UI · GSAP 3 · Lenis · Nitro (Cloudflare target)  
**Ready to plug:** Firebase Auth / Firestore, Razorpay Checkout, Stripe, or custom API — see [Environment Variables](#-environment-variables).

---

## Features

- **Cinematic storefront** — Hero with silk-reveal (`useSilkReveal`), `FeaturedCollections`, `TrendingCollections`, `ShopByCategory`, `NewArrivals`
- **Commerce core** — `ShopContext` with cart lines, quantity guards (stock-aware), wishlist, coupon engine (`AURELLE10`, `GOLD20`), subtotal / discount / tax / total derived state
- **Cart & product UX** — `CartDrawer` (Sheet), `ProductModal` (Dialog), `ProductCard` with variant swatches, optimistic add-to-cart
- **Motion** — GSAP timelines + Lenis smooth scroll (`LenisProvider`), split-text and parallax ready
- **Design system** — 30+ shadcn/ui primitives (Radix) in `src/components/ui`, `class-variance-authority` + `tailwind-merge`, OKLCH tokens in `src/styles.css`
- **SSR & routing** — TanStack Start SSR streaming via `src/server.ts` (h3 error normalization, custom `error-capture`), file-based routing (`src/routes`), `routeTree.gen.ts` generated
- **SEO** — per-route `head()` in `__root.tsx` / `index.tsx`, OG tags, preconnect for Fraunces + Inter
- **Marquees & social proof** — `BrandsMarquee`, `InstagramMarquee`, `Testimonials`, `WhyShopWithUs`, `NewsletterFooter`
- **DX** — Strict TS (`exactOptionalPropertyTypes`, `noUncheckedIndexedAccess`), ESLint + Prettier, `@/*` alias, Vite `tsconfigPaths`
- **Deploy-ready** — Nitro Cloudflare preset, `vite build` → `.output`, `vite preview` locally

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| **Framework** | TanStack Start 1.168 (React 19, Vite 8, Nitro 3) |
| **Routing** | TanStack Router 1.170 (file-based, `createFileRoute`) |
| **State / Data** | React Context (`ShopContext`) + TanStack Query 5.101 |
| **Styling** | Tailwind CSS 4.2 + `@tailwindcss/vite`, `tw-animate-css`, OKLCH design tokens |
| **UI** | Radix UI primitives, shadcn/ui, `lucide-react`, `sonner` toasts, `vaul`, `embla-carousel` |
| **Motion** | GSAP 3.15, Lenis 1.3 |
| **Forms / Validation** | `react-hook-form` 7 + `zod` 3 + `@hookform/resolvers` |
| **Tooling** | TypeScript 5.8 (strict), ESLint 9, Prettier 3, `vite-tsconfig-paths` |
| **Runtime** | Nitro (Cloudflare Workers target), Node 22+ |
| **Planned integrations** | Firebase Auth & Firestore, Razorpay Checkout (see ENV) |

---

## Project Structure

```
.
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/                 # hero, category & collection imagery (jpg)
│   ├── components/
│   │   ├── ui/                 # 30+ shadcn/radix primitives (button, dialog, sheet, carousel...)
│   │   ├── BrandsMarquee.tsx
│   │   ├── CartDrawer.tsx
│   │   ├── FeaturedCollections.tsx
│   │   ├── Hero.tsx
│   │   ├── InstagramMarquee.tsx
│   │   ├── LenisProvider.tsx
│   │   ├── Navbar.tsx
│   │   ├── NewArrivals.tsx
│   │   ├── NewsletterFooter.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductModal.tsx
│   │   ├── ShopByCategory.tsx
│   │   ├── Testimonials.tsx
│   │   ├── TrendingCollections.tsx
│   │   └── WhyShopWithUs.tsx
│   ├── context/
│   │   └── ShopContext.tsx     # cart, wishlist, coupons, derived totals
│   ├── data/
│   │   └── products.ts         # typed Product / Category / Collection + seed catalog
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── useSilkReveal.ts    # GSAP scroll reveal
│   ├── lib/
│   │   ├── gsap.ts
│   │   ├── utils.ts            # cn() helper
│   │   ├── error-capture.ts
│   │   └── error-page.ts
│   ├── routes/
│   │   ├── __root.tsx          # <html> shell, HeadContent, QueryClientProvider, SEO
│   │   └── index.tsx           # "/" — composes all storefront sections
│   ├── routeTree.gen.ts        # generated — do not edit
│   ├── router.tsx              # TanStack router instance
│   ├── server.ts               # Nitro/SSR entry with h3 error normalization
│   ├── start.ts
│   └── styles.css              # Tailwind + OKLCH tokens
├── components.json             # shadcn
├── eslint.config.js
├── tsconfig.json               # strict + @/* alias
├── vite.config.ts              # @lovable.dev/vite-tanstack-config wrapper
└── package.json
```

---

## Quick Start

### Prerequisites

- **Node 20+** (22 LTS recommended) — `node -v`
- **npm 10+** or **Bun 1.2+** — repo ships both `package-lock.json` and `bun.lock`
- Git

### Install

```bash
git clone https://github.com/gajbhiyes774/aurelle-ecommerce.git
cd aurelle-ecommerce

# npm
npm install

# or bun
bun install
```

### Environment Variables

No secrets are required to run the storefront in catalog/demo mode. For production integrations, create `.env` (and `.env.production` for deploy):

```bash
# App
VITE_APP_URL=https://aurelle.example.com
VITE_APP_NAME=AURELLE

# Firebase (when wiring auth/firestore)
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=

# Razorpay (client key is public; secret stays server-side)
VITE_RAZORPAY_KEY_ID=rzp_live_xxxxxxxxxx
RAZORPAY_KEY_SECRET=               # server-only, never expose with VITE_
RAZORPAY_WEBHOOK_SECRET=

# Optional: analytics / monitoring
# VITE_POSTHOG_KEY=
# VITE_SENTRY_DSN=
```

> `@lovable.dev/vite-tanstack-config` auto-injects `VITE_*` at build time and configures the `@` alias + Nitro Cloudflare target. Do not add duplicate Vite plugins — see `vite.config.ts`.

### Run locally

```bash
npm run dev        # Vite dev server with TanStack Start (default 5173)
# open http://localhost:5173
```

### Build & preview

```bash
npm run build      # vite build → .output (Nitro)
npm run preview    # vite preview
```

### Lint & format

```bash
npm run lint       # eslint .
npm run format     # prettier --write .
```

---

## Available Scripts

| Script | What it does |
|--------|--------------|
| `npm run dev` | Start Vite + TanStack Start in dev |
| `npm run build` | Production build via Nitro (Cloudflare) |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

---

## Architecture Notes

- **SSR entry** `src/server.ts` wraps `@tanstack/react-start/server-entry` and normalizes h3-swallowed 500s into a real HTML error page — keeps Lovable sandbox detection intact.
- **Vite config** is intentionally thin — `@lovable.dev/vite-tanstack-config` already wires `tanstackStart`, `viteReact`, `tailwindcss`, `tsConfigPaths`, Nitro, `VITE_*` injection, deduping, and the Cloudflare target. Add extra config only via `defineConfig({ vite: { ... } })`.
- **ShopContext** is intentionally client-state for now (no persistence). To go production: persist to `localStorage` / Firestore, move coupon validation server-side, and gate stock via API.
- **Payments:** swap the seed `products.ts` for a Firestore/REST source; initiate Razorpay checkout in `CartDrawer` and verify on the server with `RAZORPAY_KEY_SECRET` + webhook.

---

## Deployment

**Cloudflare Workers (Nitro) — default:**

```bash
npm run build
# output in .output / .nitro
# wrangler deploy  # if wrangler configured
```

**Any Node host (Vercel, Render, Fly):** `npm run build && npm run preview` — ensure `VITE_*` envs are set in the host.

**Static export** is not used — this is an SSR app.

---

## Roadmap

- [ ] Firebase Auth (email + Google) + protected checkout
- [ ] Firestore product catalog + admin (CRUD, inventory)
- [ ] Razorpay Checkout + webhook verification + order persistence
- [ ] Persisted cart/wishlist (localStorage → Firestore merge on login)
- [ ] Search, filters, and collection routes (`/collections/:slug`)
- [ ] E2E (Playwright) + Vitest unit coverage

PRs welcome — open an issue first for larger changes.

---

## Contributing

1. Fork & branch from `main`
2. `npm install` → `npm run dev`
3. Keep commits scoped and typed (`feat:`, `fix:`, `chore:`)
4. `npm run lint && npm run format` before pushing

---

## License

MIT — see [LICENSE](LICENSE) if present. You own this code outright — no vendor lock.

---

<p align="center">
  Built with care for <strong>AURELLE</strong>. If this helped, leave a ⭐ on <a href="https://github.com/gajbhiyes774/aurelle-ecommerce">gajbhiyes774/aurelle-ecommerce</a>.
</p>
