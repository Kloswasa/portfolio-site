# Case study content blocks

Shortlist of every content block you can use in `src/content/case-studies/<slug>.md`.

**Author:** edit the `.md` · **Generate one:** `npm run content:<slug>` · **Generate all:** `npm run content:all` · **Live preview:** `/work/block-showcase`

---

## Quick list

| Block | Pattern | Use for |
|-------|---------|---------|
| `prose` | free text | Body paragraphs (blank line = new para; 4-space indent = nested line; `**bold**` supported) |
| `stats` | YAML list | Metric row (`value`, `label`, `variant`: dark \| mid \| light) |
| `pullquote` | key-value | Large quote (`text`, `source`) |
| `findings` | YAML list | Research cards (`num`, `label`, `title`, `body`; optional `image`, `imageAlt`) |
| `annotation` | key-value | Small aside (`text`) |
| `twoCol` | YAML list | Side-by-side points (`label`, `body`) |
| `artifact` | key-value | Built-in diagram (`variant`: audit-map \| token-hierarchy, `label`, `caption`, optional `captionMeta`) |
| `process` | YAML list | Step columns (`num`, `title`, `body`) |
| `callout` | key-value | Highlight box (`label`, `title`, `body`) |
| `button` | key-value | CTA link (`label`, `href`; optional `variant`: accent \| primary) |
| `ornament` | empty | Decorative divider |
| `colorSpecimen` | empty | Color token swatches |
| `typeSpecimen` | empty | Typography specimen |
| `componentGrid` | YAML list | Component inventory cards (`label`, `title`, `count`, `variant`: primary \| dark \| mid \| deepest) |
| `outcomes` | YAML list | Result metrics (`value`, `label`, `body`) |
| `reflections` | `-` list | Numbered takeaways |
| `image` | key-value | Single image (`src`, `alt`, optional `caption`, optional `credit` + `creditHref`, optional `size`: sm \| md) |
| `imagePair` | YAML list | Two side-by-side images (`src`, `alt`, `caption`; optional `credit` + `creditHref`; optional block `size`: sm \| md) |
| `imageGrid` | YAML list | 3+ images in a grid (`src`, `alt`, optional `caption`, optional `credit` + `creditHref`) |
| `video` | key-value | Video embed (`src`, `poster`, `alt`, `caption`) |

---

## Syntax patterns

### Free text — `prose`

```markdown
## prose

First paragraph with **bold emphasis**.

    Indented nested line.

Second paragraph after a blank line.
```

Inline `**bold**` also works in body fields on `pullquote`, `findings`, `annotation`, `twoCol`, `process`, `callout`, `outcomes`, and `reflections`.

### Key-value — `pullquote`, `annotation`, `callout`, `button`, `artifact`, `image`, `video`

```markdown
## pullquote

text: Quote goes here
source: Attribution

## button

label: View live site
href: https://example.com
variant: accent

## image

src: /projects/example/shot.png
alt: Description
caption: Optional caption
credit: Photo by Jane Doe
creditHref: https://example.com/photo
size: sm

## video

src: /projects/example/clip.mp4
poster: /projects/example/poster.png
alt: Accessible description
caption: Caption under the player
```

`size` is optional on `image` and `imagePair`. Omit it for full content width; use `sm` for icons/small assets, `md` for mid-width figures.

Optional `credit` is an attribution line under the caption. Add `creditHref` to make it a link (opens in a new tab). `creditHref` requires `credit`.

```markdown
## imagePair

size: sm
- src: /projects/example/a.png
  alt: Left
  caption: Left caption
  credit: Source A
  creditHref: https://example.com/a
- src: /projects/example/b.png
  alt: Right
  caption: Right caption
```

### YAML list — `stats`, `findings`, `twoCol`, `process`, `outcomes`, `componentGrid`, `imagePair`, `imageGrid`

```markdown
## stats

- value: "12"
  label: Interviews
  variant: dark

## findings

- num: "01"
  label: Framework
  title: Holland's model
  body: Optional image fields sit on the same item.
  image: /projects/example/icon.png
  imageAlt: Icon description
```

Optional `image` + `imageAlt` render a small illustration inside the finding card. Both are required together.

```markdown
## imageGrid

- src: /projects/example/a.png
  alt: First
  caption: Optional
  credit: Photo credit
  creditHref: https://example.com
- src: /projects/example/b.png
  alt: Second
- src: /projects/example/c.png
  alt: Third
```

### Empty — `ornament`, `colorSpecimen`, `typeSpecimen`

```markdown
## ornament

## colorSpecimen

## typeSpecimen
```

### Dash list — `reflections`

```markdown
## reflections

- First takeaway
- Second takeaway
```

---

## Image blocks

| Block | Count | Size |
|-------|-------|------|
| `image` | 1 | optional `size: sm` \| `md` (default full width) |
| `imagePair` | 2 | optional block-level `size: sm` \| `md` above the list |
| `imageGrid` | 3+ | always full width |

---

## Sections

Every major case study needs these six `#` sections, in order:

`brief` → `research` → `concept` → `craft` → `build` → `outcome`

Every minor case study needs these three sections:

`context` → `work` → `outcome`

A minor study can add an optional `approach` section:

`context` → `approach` → `work` → `outcome`

Set `approachLabel` in frontmatter when that section needs a label other than “Approach”:

```markdown
---
kind: minor
slug: example
approachLabel: The Decision
hero:
  # ...
---
```

Each section starts with:

```markdown
# brief

eyebrow: 01 · Brief
title: Section title
titleEm: optional italic line
```
