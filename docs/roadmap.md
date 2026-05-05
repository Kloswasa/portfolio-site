# Portfolio roadmap

Phased plan aligned with the old Portfolio-2026 phases, **updated to match this repository**. Check boxes here and in `.cursor/rules/CLAUDE.md` when progress is real in `main` / your working branch.

**Last updated:** 2026-04-26

---

## Phases (legacy numbering)

- [x] **Phase 0** — Pre-flight (tooling, Next 15, TypeScript, Tailwind v4)
- [x] **Phase 1** — Routing and global layout (`app/layout.tsx`, `app/page.tsx`, theme script, CSS load order)
- [x] **Phase 2** — Core components present (`src/components/*`, `components/ui/*`) — ongoing parity with Figma as design evolves
- [x] **Phase 2.5** — Design tokens: `design-tokens/tokens.*.json` + `npm run tokens:gen` + `/tokens` reference page
- [x] **Phase 2.6** — AI context: `AGENTS.md`, `.cursor/rules/project.mdc`, `.cursor/rules/CLAUDE.md`, this roadmap
- [x] **Phase 3** — Home page (static shell and sections)
- [x] **Phase 4** — Case study template and dynamic route(s)
- [ ] **Phase 5** — Work archive / listing
- [ ] **Phase 6** — Content milestone (copy, media, three case studies complete)
- [ ] **Phase 7** — About page
- [ ] **Phase 8** — Play (experiments) page
- [x] **Phase 9** — Framer Motion: dependency added; shared primitives in `animation/` — *iterate on motion patterns as you build pages*
- [ ] **Phase 10** — WebGL botanical hero (optional — only if scoped)
- [ ] **Phase 11** — GSAP ScrollTrigger (optional — only if scoped; prefer Framer first)
- [ ] **Phase 12** — Pre-launch checklist (perf, a11y, SEO, social images)
- [ ] **Phase 13** — Production deploy: Vercel + Cloudflare DNS/SSL as applicable

---

## Shorter milestone view

| Milestone | Status |
|-----------|--------|
| Layout + home shell + dark mode | Done |
| Token JSON → generated CSS/TS + dev `/tokens` | Done |
| Framer Motion in `package.json` + `animation/` entry point | Done |
| Case studies (routes + content) | Not started |
| About / Play | Not started |
| Launch polish + deploy | Not started |

---

## Notes

- **Phase 2** stays “in progress” in spirit until Figma parity is satisfied; the checkbox marks “we have a real component set,” not “pixel-perfect.”
- **Phases 10–11** stay unchecked until you add those dependencies and a scoped feature; they are not on the default path.
