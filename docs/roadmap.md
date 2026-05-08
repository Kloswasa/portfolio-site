# Portfolio roadmap

Phased plan aligned with the old Portfolio-2026 phases, **updated to match this repository**. Check boxes here and in `.cursor/rules/CLAUDE.md` when progress is real in `main` / your working branch.

**Last updated:** 2026-05-08

---

## Phases (legacy numbering)

- [x] **Phase 0** — Pre-flight (tooling, Next 15, TypeScript, Tailwind v4)
- [x] **Phase 1** — Routing and global layout (`app/layout.tsx`, `app/page.tsx`, theme script, CSS load order)
- [x] **Phase 2** — Core components present (`src/components/*`, `components/ui/*`) — ongoing parity with Figma as design evolves
- [x] **Phase 2.5** — Design tokens: `design-tokens/tokens.*.json` + `npm run tokens:gen` + `/tokens` reference page
- [x] **Phase 2.6** — AI context: `AGENTS.md`, `.cursor/rules/project.mdc`, `.cursor/rules/CLAUDE.md`, this roadmap
- [x] **Phase 3** — Home page (static shell and sections)
- [x] **Phase 4** — Case study template and dynamic route(s)
- [x] **Phase 5** — Work archive / listing (`/work`)
- [ ] **Phase 6** — Content milestone (copy, media, three case studies complete)
- [x] **Phase 7** — About page (`/about`)
- [x] **Phase 8** — Play (experiments) page (`/play`)
- [x] **Phase 9** — Framer Motion: dependency added; shared primitives in `animation/` — *iterate on motion patterns as you build pages*
- [ ] **Phase 10** — WebGL botanical hero (optional — only if scoped)
- [ ] **Phase 11** — Non-Framer animation libs (e.g. GSAP) (optional — only if explicitly scoped; default is **Framer Motion only**)
- [ ] **Phase 12** — Pre-launch checklist (perf, a11y, SEO, social images)
- [ ] **Phase 13** — Production deploy: Vercel + Cloudflare DNS/SSL as applicable

---

## Shorter milestone view

| Milestone | Status |
|-----------|--------|
| Layout + home shell + dark mode | Done |
| Token JSON → generated CSS/TS + dev `/tokens` | Done |
| Framer Motion in `package.json` + `animation/` entry point | Done |
| Work archive (listing + detail) | Done |
| About / Play | Done |
| Case studies (content) | Not started |
| Launch polish + deploy | Not started |

---

## Notes

- **Phase 2** stays “in progress” in spirit until Figma parity is satisfied; the checkbox marks “we have a real component set,” not “pixel-perfect.”
- **Phases 10–11** stay unchecked until there’s a tightly scoped feature that justifies the extra complexity; they are not on the default path.
