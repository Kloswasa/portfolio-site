# Token & CSS hygiene

Audit findings, token scales, and migration notes for letter-spacing, font sizes, and motion values.

**Source of truth:** `design-tokens/tokens.light.json` and `design-tokens/tokens.dark.json`  
**Regenerate:** `npm run tokens:gen`

---

## Audit summary

Color hygiene was already clean — no raw hex or rgba in hand-written CSS or components (only in generated `src/styles/theme.css` and `src/design-tokens/tokens.ts`).

The gaps were:

| Pattern | Count | Status |
|---------|-------|--------|
| Hardcoded `letter-spacing` in CSS | ~85 | Tokenized → `tracking.*` |
| `tracking-[...]` arbitrary values in TSX | ~15 | Replaced with Tailwind utilities |
| Hardcoded `font-size` (micro, body, display) | ~100 | Tokenized → extended `text.*` |
| Motion vars in `app/globals.css` (outside pipeline) | 5 | Moved into token JSON |
| `cubic-bezier(0.34, 1.56, 0.64, 1)` / `0.55s` in play.css | 5 | → `var(--ease-spring)` + `var(--duration-slower)` |
| Z-index (CSS + TSX arbitrary values) | ~40 | Out of scope |
| `color-mix()` opacity recipes | ~70 | Out of scope (already derive from tokens) |

---

## Token groups added

### Letter-spacing (`tracking.*`)

Consolidated scale; near-duplicates were merged onto the nearest step:

| Token | Value | CSS variable | Tailwind utility | Typical use |
|-------|-------|--------------|------------------|-------------|
| `tracking.tight` | -0.03em | `--tracking-tight` | `tracking-tight` | Display headings (work page) |
| `tracking.subtle` | 0.04em | `--tracking-subtle` | `tracking-subtle` | Buttons, badges |
| `tracking.caps` | 0.08em | `--tracking-caps` | `tracking-caps` | Small caps labels |
| `tracking.label` | 0.1em | `--tracking-label` | `tracking-label` | Section labels |
| `tracking.labelLg` | 0.12em | `--tracking-label-lg` | `tracking-label-lg` | Most common stamp/label (was 22×) |
| `tracking.stamp` | 0.14em | `--tracking-stamp` | `tracking-stamp` | Mono stamps, nav meta |
| `tracking.stampLg` | 0.16em | `--tracking-stamp-lg` | `tracking-stamp-lg` | Eyebrows, hero scroll |
| `tracking.stampXl` | 0.22em | `--tracking-stamp-xl` | `tracking-stamp-xl` | Work page display stamp |

**Consolidation rules applied:**

- `0.06em` → `tracking.caps` (0.08em)
- `0.15em` → `tracking.stamp` (0.14em)
- `0.18em` → `tracking.stamp-lg` (0.16em)
- `0.5px` (badge) → `tracking.subtle` (0.04em)

### Font sizes (extended `text.*`)

#### Micro / mono labels

| Token | Value | CSS variable | Tailwind utility | Absorbs |
|-------|-------|--------------|------------------|---------|
| `text.2xs` | 0.5rem | `--text-2xs` | `text-2xs` | 0.4375rem, 0.5rem |
| `text.xs` | 0.563rem | `--text-xs` | `text-xs` | 0.5625rem, 0.58rem |
| `text.label` | 0.625rem | `--text-label` | `text-label` | 0.6, 0.62, 0.625, 0.66rem, 10px |
| `text.labelLg` | 0.6875rem | `--text-label-lg` | `text-label-lg` | 0.7rem, 11px |

#### Mid-body (fills the sm → base gap)

| Token | Value | CSS variable | Tailwind utility | Absorbs |
|-------|-------|--------------|------------------|---------|
| `text.bodySm` | 0.8125rem | `--text-body-sm` | `text-body-sm` | 0.8125, 0.82rem |
| `text.body` | 0.875rem | `--text-body` | `text-body` | 0.875, 0.88, 0.9rem |
| `text.bodyLg` | 0.9375rem | `--text-body-lg` | `text-body-lg` | 0.9375, 0.95rem |
| `text.bodyXl` | 1.0625rem | `--text-body-xl` | `text-body-xl` | 1.05, 1.1rem |

Existing scale unchanged: `text.sm`, `text.base`, `text.lg`, `text.heading.*`.

#### Fluid display (replaces one-off `clamp()` expressions)

| Token | Value | CSS variable | Tailwind utility |
|-------|-------|--------------|------------------|
| `text.display.sm` | clamp(1.5rem, 3vw, 2rem) | `--text-display-sm` | `text-display-sm` |
| `text.display.md` | clamp(1.85rem, 3.5vw, 2.75rem) | `--text-display-md` | `text-display-md` |
| `text.display.lg` | clamp(2.25rem, 6vw, 4rem) | `--text-display-lg` | `text-display-lg` |
| `text.display.xl` | clamp(3.25rem, 8vw, 5.5rem) | `--text-display-xl` | `text-display-xl` |
| `text.display.2xl` | clamp(6rem, 16vw, 13rem) | `--text-display-2xl` | `text-display-2xl` |

Static heading-ish sizes in case-study CSS (2rem, 2.5rem, 3.25rem, 5rem, etc.) were intentionally left as-is — they don't match the `text.heading.*` ladder closely enough to consolidate without visual drift.

### Motion (`ease.*`, `duration.*`)

| Token | Value | CSS variable | Notes |
|-------|-------|--------------|-------|
| `ease.default` | cubic-bezier(0.4, 0, 0.2, 1) | `--ease` | Special-cased (not `--ease-default`) |
| `ease.in` | cubic-bezier(0.4, 0, 1, 1) | `--ease-in` | |
| `ease.out` | cubic-bezier(0, 0, 0.2, 1) | `--ease-out` | |
| `ease.spring` | cubic-bezier(0.34, 1.56, 0.64, 1) | `--ease-spring` | Play page bounce transitions |
| `duration.default` | 150ms | `--duration` | Special-cased (not `--duration-default`) |
| `duration.slow` | 300ms | `--duration-slow` | Theme toggle, body transitions |
| `duration.slower` | 550ms | `--duration-slower` | Play page spring animations |

---

## Usage

### In CSS (feature stylesheets)

Prefer CSS variables — they work everywhere, including inside `@utility` blocks and complex selectors:

```css
.case-study__stamp {
  font-size: var(--text-xs);
  letter-spacing: var(--tracking-stamp);
  transition: opacity var(--duration) var(--ease);
}

.play-card {
  transition: width var(--duration-slower) var(--ease-spring);
}
```

### In TSX (components)

Prefer Tailwind utilities generated from `@theme` in `src/styles/theme.css`:

```tsx
<span className="font-mono text-label-lg uppercase tracking-stamp text-info-text/35">
  Section label
</span>
```

Do **not** use arbitrary values like `tracking-[0.12em]` or `text-[11px]` when a token utility exists.

### In token JSON

Edit `design-tokens/tokens.light.json` and `design-tokens/tokens.dark.json`, then run:

```bash
npm run tokens:gen
```

Tracking, text (non-color), ease, and duration values are identical in both theme files — they don't vary by light/dark.

---

## Generator special-cases

In `scripts/tokens/generate.ts`, `cssVarName()` maps these leaf keys to short CSS variable names:

| Token path | CSS variable |
|------------|--------------|
| `shadow.default` | `--shadow` |
| `ease.default` | `--ease` |
| `duration.default` | `--duration` |

All other nested keys become kebab-cased: `text.labelLg` → `--text-label-lg`, `tracking.labelLg` → `--tracking-label-lg`.

---

## Files changed (migration)

### Token inputs

- `design-tokens/tokens.light.json` — added `tracking`, extended `text`, `ease`, `duration`; fixed `font.body` to Prompt
- `design-tokens/tokens.dark.json` — same non-color groups added

### Generator

- `scripts/tokens/generate.ts` — `ease.default` / `duration.default` special cases

### CSS sweep (12 files)

- `app/globals.css` — removed hand-written motion `@theme` block; utilities use token vars
- `src/styles/about.css`, `case-study-major.css`, `filter-bar.css`, `hero.css`, `home.css`, `locked-case-study.css`, `page-end.css`, `play.css`, `section-block.css`, `specimen-card.css`, `work-page.css`

### TSX sweep

- `src/components/chrome/NavOverlay.tsx`
- `src/components/chrome/ThemeToggle.tsx`
- `src/components/home/HeroSection.tsx`
- `src/components/home/HeroHomePlant.tsx`
- `app/layout.tsx`
- `app/tokens/tokens-client.tsx`

### Bug fixes

- `src/styles/play.css` — `var(--text-s)` (undefined) → `var(--text-sm)`
- `font.body` token aligned with `Prompt` loaded in `app/layout.tsx` (was `'DM Sans'`)

---

## Out of scope (future passes)

These patterns were audited but not tokenized:

### Z-index

Two uncoordinated scales exist:

- CSS: `0–10`, `30`, `100`, `9500` (play lightbox)
- TSX arbitrary: `z-[200]` (PageLoader), `z-[300]` (NavOverlay), `z-[400]` (header), `z-[500]` (MenuButton)

Candidate group: `z.base`, `z.raised`, `z.sticky`, `z.nav`, `z.header`, `z.menu`, `z.lightbox`.

### Semantic on-dark alpha colors

~70 `color-mix(in srgb, var(--color-text-inverse) N%, transparent)` recipes repeat across feature CSS. They already derive from tokens; top recipes could become semantic tokens (e.g. `color.onDark.hairline`, `color.onDark.textMuted`) if the repetition becomes a maintenance burden.

---

## Verification

After editing tokens or sweeping styles:

```bash
npm run tokens:gen && npm run typecheck && npm run validate:data && npm run build
```

Visually spot-check pages most affected by display-size consolidation:

- `/work` — display headings and stamps
- `/work/quiz-game` (or any major case study) — hero title, mono stamps
- `/play` — spring transitions and card typography
