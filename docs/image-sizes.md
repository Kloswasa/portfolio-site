# Image sizes

Recommended export dimensions for every image-bearing area of the site. Display size is CSS-driven; the site uses native `<img>` tags (no `next/image`, no `srcset`). Browsers fetch the full file, so export at **2× the max CSS display width** for retina — not full camera resolution.

**Author assets in** `public/` · **Wire them in** `src/lib/projects.ts`, case study markdown, `src/content/play.ts`, or `src/content/about.ts`.

Case study block syntax: [`docs/case-study-blocks.md`](case-study-blocks.md).

Pixel conversions below assume a 16px root (`1rem` = 16px).

---

## Quick reference

| Area | Aspect ratio | Recommended export | Max display | Notes |
|------|--------------|--------------------|-------------|-------|
| Work card cover | **5:4** | **1500×1200** | ~400–640px wide in the 3-col grid | [`projects.ts`](../src/lib/projects.ts) `coverImage` |
| Home featured mosaic | same as cover | same file as cover | fills mosaic cell | Reuses `coverImage` |
| Case study next-project card | same as cover | same file as cover | specimen card in the footer | Reuses next project's `coverImage` |
| Case study hero | **5:4** or **16:9** | **1800×1013** (16:9) or **1500×1200** (5:4); min **1800px** on the long edge | full viewport (`100dvh − 4rem`) | Frontmatter `hero.image`; `object-fit: cover` crops edges |
| Case study `image` (default) | any | **1360px** wide max | 42.5rem (~680px) | `--cs-content-w` |
| Case study `image` `size: sm` | any | **320px** wide max | 10rem (~160px) | Icons, small UI shots |
| Case study `image` `size: md` | any | **640px** wide max | 20rem (~320px) | Detail crops |
| Case study `imagePair` (default) | any | **1360px** wide total (~680px per side @2×) | 2-col in the main column | Omit `size` |
| Case study `imagePair` `size: sm` | any | **640px** wide total | 20rem (~320px) | |
| Case study `imagePair` `size: md` | any | **1024px** wide total | 32rem (~512px) | |
| Case study `imageGrid` | any (square crops well) | **1360px** per cell | 3-col → 2-col → 1-col | Full main column |
| Case study `findings` inline | any | **160×160** max | 5rem (~80px) | Optional `image` + `imageAlt` |
| Case study `video` poster | **16:9** | **1088×612** | player is 80% of parent (~544px in the content column) | Paired with `.mp4` |
| Play card thumbnail | mixed | **595×842** (portrait) or **842×595** (landscape) | specimen card **4:5** crop | [`play.ts`](../src/content/play.ts) `imageWidth` / `imageHeight` |
| Play viewer plate | mixed | up to **2100px** on the long edge | max 1048×960 | `play.ts` `images[]`; aspect clamped 0.65–1.8 |
| About portrait | **4:5** | **800×1000** WebP | 22rem (~352px) | [`about.ts`](../src/content/about.ts) |

---

## How sizing works

CSS layout caps come from:

| Token / rule | Source | Display cap |
|--------------|--------|-------------|
| `--cs-content-w: 42.5rem` | [`src/styles/case-study-major.css`](../src/styles/case-study-major.css) | ~680px content column |
| `.cs-major__image--sm` / `--md` | same | 10rem / 20rem (~160 / 320px) |
| `.cs-major__image-pair--sm` / `--md` | same | 20rem / 32rem (~320 / 512px) |
| `.cs-major__finding-image` | same | 5rem (~80px) |
| `.cs-major__video-player` | same | `width: 80%` of parent |
| `.cs-major__hero` | same | `min-height: calc(100dvh - 4rem)`, `object-fit: cover` |
| `.specimen-card` | [`src/styles/specimen-card.css`](../src/styles/specimen-card.css) | **4:5** default |
| `.specimen-card--landscape` | same | **5:4** (work archive grid) |
| `.about-portrait` | [`src/styles/about.css`](../src/styles/about.css) | max 22rem (~352px), **4:5** |
| `.play-viewer__plate` | [`src/styles/play.css`](../src/styles/play.css) | max 1048×960 |

Prefer **WebP** for photos, **PNG** for UI/screenshots with transparency, **SVG** for diagrams (no pixel limit). GIFs are allowed in case study `image` blocks — keep width ≤ 1360px and trim the frame count.

---

## Work covers

**Where:** [`src/lib/projects.ts`](../src/lib/projects.ts) `coverImage: { src, alt }`  
**Files:** `/public/projects/<slug>/<slug>-cover.png`  
**CSS:** Work archive cards use `.specimen-card--landscape` (**5:4**, `object-fit: cover`). Home featured mosaic reuses the same file at auto height. The case study “next project” footer also reuses it.

| Variant | Size | When |
|---------|------|------|
| Standard | **1500×1200** PNG or WebP, **5:4** | Default for every project |
| Wide | **2400×1350** (16:9) | Landscape-heavy work (e.g. quiz-game). The card still crops to 5:4 — keep the subject in the centre. |
| Optional 2× | 2400×1920 (5:4) | Only if a cover looks soft on a large display |

**Naming:** `<slug>-cover.png`. Projects without a cover (recipe, cio) fall back to a gradient + SVG botanical — no raster needed.

---

## Case study heroes

**Where:** markdown frontmatter `hero.image.src` / `hero.image.alt`  
**CSS:** `.cs-major__hero-img` fills the viewport (`object-fit: cover`, `object-position: center`) under a dark gradient. Title and meta sit in the lower third.

**Export:** **1500×1200** (5:4) or **1800×1013** (16:9). Minimum **1800px on the long edge** so retina viewports stay sharp.

**Safe zone:** keep the subject **centre-weighted**. Top and bottom are covered by the gradient and the title block.

**Naming — pick one convention per project:**

- Reuse `<slug>-cover.png` when the card crop also works as a hero.
- Use a separate `<slug>-head-cover.png` (or `<slug>-header.png`) only when the hero needs a different crop than the work card.

---

## Case study content blocks

Block syntax lives in [`docs/case-study-blocks.md`](case-study-blocks.md). `size` is optional on `image` and `imagePair`.

```
## image
size: sm   → export ≤ 320px wide
size: md   → export ≤ 640px wide
(default)  → export ≤ 1360px wide

## imagePair
size: sm   → export ≤ 640px wide (pair total)
size: md   → export ≤ 1024px wide (pair total)
(default)  → export ≤ 1360px wide (pair total)
```

| Block | CSS cap | Recommended export |
|-------|---------|-------------------|
| `image` default | `max-width: 42.5rem` (~680px) | 1360px wide |
| `image` `size: sm` | 10rem (~160px) | 320px wide |
| `image` `size: md` | 20rem (~320px) | 640px wide |
| `imagePair` default | 2-col, no max-width (main column) | 1360px wide total |
| `imagePair` `size: sm` | 20rem (~320px) | 640px wide total |
| `imagePair` `size: md` | 32rem (~512px) | 1024px wide total |
| `imageGrid` | 3-col → 2-col (≤768px) → 1-col (≤480px) | 1360px per cell |
| `findings` inline | 5rem (~80px) | 160×160 |
| `video` poster | player `width: 80%` | 1088×612 (16:9) |

Optional `credit` / `creditHref` on `image`, `imagePair`, and `imageGrid` render an attribution line — they do not change size.

**SVG** is preferred for diagrams and UI wireframes (no pixel limit). **GIF** width should stay ≤ 1360px.

After changing markdown image paths, run `npm run content:<slug>` (or `npm run content:all`).

---

## Play illustrations

**Where:** [`src/content/play.ts`](../src/content/play.ts) — `imageSrc` / `imageWidth` / `imageHeight` for the card; `images[]` for the viewer.  
**Files:** `/public/play/illustration/`  
**CSS:** Cards use the default specimen card (**4:5**, `object-fit: cover`). The viewer plate is `min(100%, 1048px, calc(min(96vh, 960px) × aspect))` with `max-height: min(96vh, 960px)`. Aspect is clamped to **0.65–1.8** in [`src/lib/play/utils.ts`](../src/lib/play/utils.ts) (`plateAspectRatio()`).

| Use | Typical size | Notes |
|-----|--------------|-------|
| Card thumbnail | **595×842** portrait or **842×595** landscape | ~595px on the short edge. The card crops to 4:5. |
| Viewer plate | up to **2100px** on the long edge | 2× the 1048×960 display cap. Existing plates go up to 1458×2064. |

Keep `imageWidth` / `imageHeight` (and each `images[]` entry) in sync with the file’s intrinsic pixels.

---

## About portrait

**Where:** [`src/content/about.ts`](../src/content/about.ts) `ABOUT_STORY.portrait.image`  
**File:** `/public/images/about/portrait-resize.webp`  
**CSS:** `.about-portrait` max-width **22rem** (~352px), plate **4:5**, `object-fit: cover`, `object-position: center top`.

**Export:** **800×1000** WebP (4:5). That is slightly above 2× display (~704×880) and matches the current asset.

Do not drop a full-resolution camera file into `public/images/home/` — export to `images/about/` at 800×1000 WebP instead.

---

## Areas with no raster images

These use inline SVG, Canvas, or no media at all. There is nothing to export:

- Home hero, Work hero, Play hero — botanical SVG illustrations
- Home about teaser — SVG only
- Nav, Footer, locked case study page — no images

**Open Graph / social share images** are not wired up yet (see [`docs/roadmap.md`](roadmap.md)). When they are, use **1200×630** (1.91:1).

---

## File organization

```
public/
├── images/about/              # site-level photos (portrait)
├── play/illustration/         # play page plates
└── projects/<slug>/           # all project assets
    ├── <slug>-cover.png       # work grid + optional hero
    ├── <slug>-head-cover.png  # optional alternate hero crop
    └── …                      # block content images
```

Naming:

- Lowercase, hyphenated, no spaces
- Prefix block content with the project slug (`homhuan-making-01.png`)
- `.webp` for photos, `.png` for UI/screenshots with transparency, `.svg` for diagrams

---

## Export checklist

1. Export at **2× the display cap**, not full camera resolution.
2. Match the crop: cards and heroes use `object-fit: cover` — expect edge crop; keep the subject centred.
3. Compress (Squoosh, ImageOptim) before committing.
4. After adding or changing markdown image paths, run `npm run content:<slug>`.
5. Check the page at 1× and 2× zoom.

---

## Known gaps

Informational — not a fix list.

- Missing files referenced in content: `/projects/timber/final.png` (`jtimber.md`); `/projects/dementia-caregiver/*` and `/projects/dementia-app/target-vs-actual.svg`, `tasks-collapse.svg` (`dementia-app.md`).
- Cover dimensions are mixed in the repo today: most cards are 1500×1200; quiz-game is 2400×1350; several heroes are 1800×1013.
- `public/images/home/portrait.png` (2731×4096) is unused; About uses `images/about/portrait-resize.webp`.
- No Open Graph / Twitter card images are configured.
