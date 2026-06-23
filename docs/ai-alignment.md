# AI context alignment: Desktop `CLAUDE.md` vs this repo

This document compares the **Portfolio-2026** `CLAUDE.md` (on Desktop) with the **current `portfolio-site` workspace**, highlights differences, and states **which approach to keep** (or when to merge ideas).

**Verdict in one line:** Treat **`AGENTS.md` + `.cursor/rules/project.mdc` + this repo’s file tree** as the source of truth for tooling and layout; use **`.cursor/rules/CLAUDE.md`** for roadmap pointers, Figma/MCP workflow, and recruiter tradeoffs. Reuse the **phased roadmap** in **`docs/roadmap.md`** (updated) instead of the old Desktop-only `CLAUDE.md` paths.

---

## 1. Stack and dependencies

| Topic | `CLAUDE.md` (Desktop) | This repo | **Better option** |
|--------|------------------------|-----------|-------------------|
| Next / React / TS / Tailwind | 15, strict, v4 | Same | **Either** (aligned). |
| Package manager | `pnpm` + `build:tokens` | `npm` + `tokens:gen` / `tokens:dtcg` | **This repo** — matches `package-lock.json` and scripts. Don’t document `pnpm` here unless you switch the project. |
| Framer Motion | Planned, not installed (old doc) | **`framer-motion` in `package.json`**, shared variants in `animation/` | **Aligned** — use imports from `animation/` in client components. |
| GSAP / R3F | Planned for hero + scroll | Not present | **Keep as optional** in a roadmap file only. Don’t add until a concrete feature needs them; `AGENTS.md` already prefers Framer-only. |
| Token tooling | Tokens Studio → Style Dictionary → `globals.css` | `design-tokens/tokens.*.json` → `scripts/tokens/*.ts` → `src/styles/*.css` + `src/design-tokens/tokens.ts` | **This repo’s pipeline** is what actually runs. Tokens Studio/SD is only “better” if you **standardize** on that workflow and migrate—large effort. |

---

## 2. Design tokens: source of truth

| Topic | `CLAUDE.md` | This repo | **Better option** |
|--------|-------------|-----------|-------------------|
| Source files | `tokens/` tree (`$metadata`, `core/`, `semantic/`, `components/`) | `design-tokens/tokens.light.json`, `design-tokens/tokens.dark.json` | **This repo** — edit JSON here; run `npm run tokens:gen`. |
| Figma | Tokens Studio sync → GitHub | `npm run tokens:pull` (light only per `AGENTS.md`) | **This repo’s commands**; document that **dark** is maintained separately. |
| Generated outputs | “All in `app/globals.css`” (do not hand-edit) | **Generated:** `src/styles/theme.css`, `src/design-tokens/tokens.ts`, DTCG under `design-tokens/dtcg/`. | **Do not hand-edit those outputs.** |
| `app/globals.css` | Described as fully generated | **Hand-maintained** Tailwind v4 entry (`@import "tailwindcss"`, `@import` of `theme.css`, utilities, base styles). | **This repo** — `globals.css` is the Tailwind v4 + layout layer, **not** a Style Dictionary output. Update any external `CLAUDE.md` to say that. |
| Duplication risk | N/A (single generated file) | Values can drift if tokens are hand-maintained in multiple places. | **This repo:** treat `design-tokens/*.json` as authoritative and regenerate outputs; do not hand-edit `@theme` values in `globals.css`. |

---

## 3. Repository layout

| `CLAUDE.md` | This repo | **Better option** |
|-------------|-----------|-------------------|
| `components/` with Button, Badge, Nav, **etc. (7 fixed names)** | `src/components/` (e.g. Header, ContactForm, AnimatedSection), `components/ui/CopyButton` | **This repo** — actual imports and paths. |
| `lib/projects.ts` at root | `src/lib/projects.ts`, `src/lib/config.ts` | **This repo** (`src/lib/`). |
| `content/projects/*.ts` | Not present yet; data in `src/lib/projects.ts` | **This repo** until case studies get their own content modules; then add `content/` or `src/content/` deliberately. |
| `.context/components.json` | Not in tree | **Optional:** useful for a **registry**; not required. Prefer **one** canonical doc: `AGENTS.md` + rules, or a registry—not three conflicting stories. |
| `docs/portfolio-roadmap.md` (old name) | **`docs/roadmap.md`** in this repo | **Use `docs/roadmap.md`** — updated with completed phases. |

---

## 4. Process and “rules for AI”

| Idea | Source | **Better option** |
|------|--------|-------------------|
| No hex in components; use tokens / utilities | Both | **Keep** — same intent. |
| No arbitrary Tailwind values | Both | **Keep** — same intent. |
| `next/image`, `next/font` at layout | Both / `project.mdc` | **Keep** — same intent. |
| When token missing: stop and ask | `CLAUDE.md` | **Keep behaviourally**; aligns with “ask rather than invent” in `AGENTS.md`. |
| `pnpm typecheck` / `pnpm lint` | `CLAUDE.md` | **Use `npm run lint`**; add `typecheck` script only if you add `tsc --noEmit`. |
| Recruiter priority order (content > desktop > perf > a11y > mobile > motion) | `CLAUDE.md` | **Worth keeping** in one place (here or `AGENTS.md`) — **not** duplicated in the Desktop file only. |
| Tool split (Cursor vs Claude Code) | `CLAUDE.md` | **Optional** — personal workflow; only include if the whole team uses both. |

---

## 5. Roadmap / phases

`CLAUDE.md` marks only Phase 0 complete and leaves Phase 1+ unchecked. **This repo** already has App Router layout, home page, multiple components, token pipeline, and `/tokens`.

**Better option:** Replace that checklist with **observable milestones** in-repo (e.g. `docs/roadmap.md`) reflecting:

- [x] Layout + home shell  
- [x] Token gen + reference page  
- [x] Framer installed + `animation/variants.ts` entry point  
- [ ] First case study route + template  
- [ ] Remaining case studies, About, Play, etc.  
- [ ] Deploy (Vercel + DNS as you use)

---

## 6. What to do with the Desktop `CLAUDE.md`

1. **Do not** point agents at the old paths (`tokens/`, `pnpm build:tokens`, fully generated `globals.css`) for **this** repo.  
2. **Copy in** the parts that are still true: person/project goals, deployment intent (Vercel + Cloudflare if still accurate), Figma MCP steps, Tokens Studio *warnings* (if you still use the plugin for anything), recruiter tradeoffs.  
3. **Replace** structure and commands with **`README.md` + `AGENTS.md`** (or a single `CLAUDE.md` **inside** this repo that mirrors them).  
4. **Set “Last updated”** and phase boxes when you change behaviour—treat drift as the doc’s own P1, as the original `CLAUDE.md` says.

---

## 7. Summary table — canonical choice

| Area | Canonical for this project |
|------|----------------------------|
| Context files | `AGENTS.md`, `.cursor/rules/project.mdc`, `README.md`, **this file** |
| Token inputs | `design-tokens/tokens.light.json`, `design-tokens/tokens.dark.json` |
| Token outputs (generated) | `src/styles/theme.css`, `src/design-tokens/tokens.ts`, `design-tokens/dtcg/*` |
| App styling entry | `app/globals.css` (Tailwind v4; edit here for utilities/base styles; avoid duplicating values already owned by JSON → `tokens:gen`) |
| Components | `src/components/`, `components/ui/` |
| Data | `src/lib/*.ts` (until a dedicated `content/` exists) |
| Motion | `framer-motion` + `animation/` (variants); respect `useReducedMotion` in components |

---

*Generated to align external `CLAUDE.md` assumptions with the `portfolio-site` tree. Update this doc when the token strategy or `globals.css` / `@theme` relationship changes.*
