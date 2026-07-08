# Portfolio roadmap

Phased plan aligned with the old Portfolio-2026 phases, **updated to match this repository**. Check boxes here when progress is real in `main` / your working branch.

**Last updated:** 2026-07-06

---

## Phases (legacy numbering)

- [x] **Phase 0** — Pre-flight (tooling, Next 15, TypeScript, Tailwind v4)
- [x] **Phase 1** — Routing and global layout (`app/layout.tsx`, `app/page.tsx`, theme script, CSS load order)
- [x] **Phase 2** — Core components present (`src/components/*`, `components/ui/*`) — ongoing parity with Figma as design evolves
- [x] **Phase 2.5** — Design tokens: `design-tokens/tokens.*.json` + `npm run tokens:gen` + `/tokens` reference page
- [x] **Phase 2.6** — AI context: `AGENTS.md`, this roadmap
- [x] **Phase 3** — Home page (`/`) — hero, featured work, about teaser
- [x] **Phase 4** — Case study template and dynamic route (`/work/[slug]`, `CaseStudyRenderer`, registry)
- [x] **Phase 5** — Work archive / listing (`/work`, filters, specimen cards)
- [x] **Phase 6** — Content milestone: 12 case studies in `src/content/case-studies/` (copy/media polish ongoing)
- [x] **Phase 7** — About page (`/about`)
- [x] **Phase 8** — Play page (`/play`, filterable works + medium sections)
- [x] **Phase 9** — Framer Motion: dependency added; shared primitives in `animation/` — *iterate on motion patterns as you build pages*
- [ ] **Phase 10** — WebGL botanical hero (optional — only if scoped; home hero uses SVG botanical art today)
- [x] **Phase 11** — GSAP ScrollTrigger (optional — only if scoped; prefer Framer first)
- [ ] **Phase 12** — Pre-launch checklist (perf, a11y, SEO, social images)
- [x] **Phase 13** — Production deploy: Vercel + Cloudflare DNS/SSL as applicable

---

## Shorter milestone view

| Milestone | Status |
|-----------|--------|
| Layout + home shell + dark mode | Done |
| Token JSON → generated CSS/TS + dev `/tokens` | Done |
| Framer Motion in `package.json` + `animation/` entry point | Done |
| Work archive (`/work`) | Done |
| Case studies (`/work/[slug]`, 12 entries) | Done — polish ongoing |
| About (`/about`) | Done |
| Play (`/play`) | Done |
| Launch polish + deploy | Not started |

---

## Notes

- **Phase 2** stays “in progress” in spirit until Figma parity is satisfied; the checkbox marks “we have a real component set,” not “pixel-perfect.”
- **Phase 6** meets the original “three case studies” bar; treat the checkbox as “content exists,” not “every asset is final.”
- **Phases 10–11** stay unchecked until you add those dependencies and a scoped feature; they are not on the default path.
