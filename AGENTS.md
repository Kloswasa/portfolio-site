# AGENTS.md

This repo is a **Next.js 15 (App Router)** personal portfolio site (React 19 + TypeScript + Tailwind CSS v4) with a token-driven design system (light + dark) and **Framer Motion** as the primary motion library.

If you're an AI agent or a human contributor, follow the conventions below. If something is unclear, prefer asking rather than inventing.

---

## Tech constraints (do not violate)

- **TypeScript strict**: no `any`.
- **Tailwind CSS v4** (CSS-first):
  - Entry is `@import "tailwindcss"` in `app/globals.css`
  - `@theme { }`, `@utility { }`, and `@variant dark (&:is(.dark *));` are expected
  - **Do not** create `tailwind.config.ts/js` (v3 pattern)
- **Animation**: Framer Motion only unless explicitly requested otherwise.
- **No database** unless a feature explicitly requires persistence.

---

## Design tokens (source of truth)

### Token inputs (edit these)

- `design-tokens/tokens.light.json` — full light theme token tree
- `design-tokens/tokens.dark.json` — full dark theme token tree (same shape as light)

Tokens are semantic and nested (e.g. `color.bg`, `text.heading.xl`, `shadow.default`) and use the internal leaf format `{ value, type }`.

### Generated outputs (never edit by hand)

- `src/styles/theme.css` (`@theme { ... }` + `.dark { ... }`)
- `src/design-tokens/tokens.ts` (flattened token map; includes `darkValue` where applicable)
- `design-tokens/dtcg/tokens.light.json` and `design-tokens/dtcg/tokens.dark.json` (W3C DTCG exports)

### Commands

```bash
npm run tokens:gen   # regenerate theme.css + tokens.ts
npm run tokens:dtcg  # regenerate DTCG exports
npm run typecheck    # tsc --noEmit
```

### Naming rules

- Nested keys become kebab-cased CSS variables: `text.heading.xl` → `--text-heading-xl`
- Special case: `shadow.default` emits `--shadow` (not `--shadow-default`)
- Do **not** reintroduce flat/legacy names like `text.xl` (use `text.heading.xl`)

---

## Dark mode

- Dark mode toggles via `.dark` on `<html>`.
- Dark values come **only** from the generated `src/styles/theme.css` `.dark { ... }` block.
- Do **not** add/maintain a hand-written `.dark { ... }` block in `app/globals.css`.

---

## Typography rules

- `font-heading` (Cinzel): headings only
- `font-body` (Montserrat): everything else
- Heading scale uses semantic utilities derived from tokens:
  - `text-heading-xl`, `text-heading-2xl`, `text-heading-3xl`, `text-heading-4xl`, `text-heading-5xl`
- `font-heading` is applied automatically to `h1–h6` and `.text-heading-*` via base styles; don’t manually add it.

---

## Motion rules (Framer Motion)

- Use Framer Motion for reveals, micro-interactions, and transitions.
- Centralize reusable variants/transitions in `animation/`.
- Always respect `prefers-reduced-motion` (use `useReducedMotion` + conditional variants).
- Prefer animating `transform` + `opacity` (avoid layout/size animations).
- Don’t add GSAP/react-spring/etc. unless explicitly requested.

---

## Repository structure

```
app/                   # Next.js App Router routes + favicon.ico
src/
  components/          # All React components
    ui/                # Primitive components (CopyButton, etc.)
  lib/                 # Data and utilities (projects.ts, config.ts)
  design-tokens/       # Generated tokens.ts (do not hand-edit)
  styles/              # Generated theme.css (do not hand-edit)
animation/             # Framer Motion variants and transitions
design-tokens/         # Token source JSON files + dtcg/ exports
scripts/tokens/        # generate.ts, export-dtcg.ts
scripts/figma/         # export-tokens.ts (Figma pull)
public/                # Static assets
```

---

## Architecture (Next.js App Router)

- **Default to Server Components**.
- Add `'use client'` only for:
  - React hooks (`useState`, `useEffect`, `useReducedMotion`)
  - browser APIs (`localStorage`, `window`, `matchMedia`)
  - event handlers requiring client state

---

## General “don’ts”

- No raw hex in `className` (use semantic token utilities).
- No arbitrary Tailwind values like `text-[#...]` or `p-[13px]`.
- Don’t hand-edit generated token files.
- Don’t add a new dependency without checking if Next.js / Tailwind v4 already solves it.
- No secrets in code: `.env.local` only.
