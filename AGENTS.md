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
- Special case: `ease.default` emits `--ease`; `duration.default` emits `--duration`
- Do **not** reintroduce flat/legacy names like `text.xl` (use `text.heading.xl`)

Full token hygiene audit and usage guide: [`docs/token-hygiene.md`](docs/token-hygiene.md)

---

## Dark mode

- Dark mode toggles via `.dark` on `<html>`.
- Dark values come **only** from the generated `src/styles/theme.css` `.dark { ... }` block.
- Do **not** add/maintain a hand-written `.dark { ... }` block in `app/globals.css`.

---

## Typography rules

Fonts load in `app/layout.tsx` via `next/font/google` and bind to CSS variables on `<html>` (runtime source of truth):

- `font-heading` (**Fraunces**): headings only
- `font-body` (**Prompt**): everything else
- `font-mono` (**Syne**): stamps, labels, and technical accents

Keep `design-tokens/tokens.*.json` `font.*` values aligned, then run `npm run tokens:gen`.

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
  components/          # Component gallery (/components) + catalog.ts
src/
  components/          # All React components
    ui/                # Reusable primitives (Badge, TabBar, TabbedGridSection)
    chrome/            # Site shell (Nav, Footer, PageLoader, ThemeToggle)
    motion/            # Reusable motion wrappers (ScrollReveal, SnapSectionReveal)
    home/              # Home page sections
    work/              # Work page + WorkCard
    play/              # Play page
    about/             # About page
    case-study/        # Case study layouts and blocks
  lib/                 # Data and utilities (projects.ts, config.ts)
  design-tokens/       # Generated tokens.ts (do not hand-edit)
  styles/              # Generated theme.css (do not hand-edit)
animation/             # Framer Motion variants and transitions
design-tokens/         # Token source JSON files + dtcg/ exports
scripts/tokens/        # generate.ts, export-dtcg.ts
scripts/figma/         # export-tokens.ts (Figma pull)
scripts/case-studies/  # compile-case-study.ts (MD → TS)
public/                # Static assets
```

---

## Components

Components are organized in **layers** (generic → specific). A component may import from its own layer or layers above it — never from a sibling feature folder.

| Layer | Folder | Examples |
| --- | --- | --- |
| Primitives | `src/components/ui/` | Badge, TabBar, FilterBar, TabbedGridSection |
| Site chrome | `src/components/chrome/` | MenuButton, NavOverlay, Footer, ThemeToggle |
| Motion | `src/components/motion/` | ScrollReveal, SnapSectionReveal |
| Feature | `src/components/{home,work,play,about,case-study}/` | HeroSection, WorkGrid, PlayCard, AboutView |

### Lifecycle (planning → production)

1. **Plan** — decide the layer first. If a component is used by 2+ features, it belongs in `ui/`. Page-specific sections stay in the feature folder (`home/`, `work/`, etc.).
2. **Build** — named export, typed props with union types, Server Component by default. Add `'use client'` only when hooks or browser APIs are required.
3. **Document** — add a `CatalogEntry` in [`app/components/catalog.ts`](app/components/catalog.ts). Add a demo in [`app/components/demos.tsx`](app/components/demos.tsx) if the component is reusable. Demo code lives in `app/components/`, never in `src/components/`.
4. **Verify** — run `npm run typecheck && npm run validate:data && npm run build` before considering the component done.

### Conventions

- **Named exports only** — no default exports in `src/components/`.
- **No barrel files** — import directly from the component file (e.g. `@/src/components/ui/Badge`), not from an `index.ts`.
- **No demo files in production tree** — gallery demos belong in `app/components/`.
- **Catalog paths must exist** — `npm run validate:data` checks every `.tsx` path in the catalog.

---

## Case study content (markdown)

Major case studies can be authored as markdown and compiled to TypeScript:

- **Edit:** `src/content/case-studies/<slug>.md` (YAML frontmatter for hero + metadata; `# section` headers; `## blockType` for content blocks)
- **Generated (never edit by hand):** `src/content/case-studies/<slug>.ts`
- **Commands:**
  - `npm run content:quiz-game`
  - `npm run content:block-showcase`
  - `npm run content:homhuan`

**Supported block types:** `prose`, `stats`, `pullquote`, `findings`, `annotation`, `twoCol`, `artifact`, `process`, `callout`, `ornament`, `colorSpecimen`, `typeSpecimen`, `componentGrid`, `outcomes`, `reflections`, `image`, `imagePair`, `imageGrid`, `video`

**Full shortlist + syntax:** [`docs/case-study-blocks.md`](docs/case-study-blocks.md)

- Key-value blocks (`pullquote`, `video`, `image`, `artifact`, `callout`, `annotation`): `key: value` lines under `## blockType`
- List blocks (`stats`, `findings`, `twoCol`, `process`, `outcomes`, `componentGrid`, `imagePair`, `imageGrid`): YAML list under `## blockType`
- Empty blocks (`ornament`, `colorSpecimen`, `typeSpecimen`): `## blockType` with no body
- `reflections`: markdown `-` list items
- Inline `**bold**` is supported in prose and body-text fields

---

## Architecture (Next.js App Router)

- **Default to Server Components**.
- Add `'use client'` only for:
  - React hooks (`useState`, `useEffect`, `useReducedMotion`)
  - browser APIs (`localStorage`, `window`, `matchMedia`)
  - event handlers requiring client state

---

## Confidential access (password-gated case studies)

Some projects in [`src/lib/projects.ts`](src/lib/projects.ts) are gated behind a shared password before the full case study renders.

### Marking a project as locked

In `projects.ts`:

- `confidential: true` — shows the locked page and lock stamp on work cards until unlocked
- `lockStatus` — controls copy on the locked page and card stamp:
  - `"documentation"` — under documentation (draft case studies)
  - `"researching"` — early research
  - `"nda"` — under NDA (default when `lockStatus` is omitted)
- `hidden: true` — omit from the work archive and public routes (404); content can stay in the repo

### How unlock works

1. Visitor opens a locked project (e.g. `/work/busaba`) and sees `LockedCaseStudy` with a password form.
2. `unlockConfidentialCaseStudy` (server action in `src/lib/confidential/actions.ts`) compares the input to `CONFIDENTIAL_ACCESS_PASSWORD`.
3. On success, an httpOnly cookie (`confidential-access=1`) is set for **7 days** and unlocks **all** locked projects in that browser.
4. `app/work/[slug]/page.tsx` checks `isConfidentialUnlocked()` before rendering the full case study.

If the env var is missing, the form returns **“Access is not configured.”**

### Setup

**Local** — create `.env.local` in the repo root (gitignored):

```bash
CONFIDENTIAL_ACCESS_PASSWORD=your-secret-password-here
```

Restart the dev server after adding or changing it.

**Production** — set the same variable in the host environment (e.g. Vercel → Project → Settings → Environment Variables), then redeploy. The cookie uses `secure: true` in production (HTTPS only).

### Key files

| File | Role |
| --- | --- |
| `src/lib/projects.ts` | `confidential`, `lockStatus`, `hidden` flags |
| `src/lib/confidential/actions.ts` | Password check + cookie |
| `src/lib/confidential/auth.ts` | Read unlock cookie |
| `src/lib/confidential/lock-status.ts` | Stamp / eyebrow / note copy per status |
| `src/components/case-study/LockedCaseStudy.tsx` | Locked page UI |
| `src/components/case-study/ConfidentialUnlockForm.tsx` | Client password form |

Never commit the password — `.env.local` only.

---

## General “don’ts”

- No raw hex in `className` (use semantic token utilities).
- No arbitrary Tailwind values like `text-[#...]` or `p-[13px]`.
- Don’t hand-edit generated token files.
- Don’t add a new dependency without checking if Next.js / Tailwind v4 already solves it.
- No secrets in code: `.env.local` only.
