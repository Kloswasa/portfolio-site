# Case study content blocks

Shortlist of every `MajorContentBlock` you can use in `src/content/case-studies/<slug>.md`.

**Author:** edit the `.md` · **Generate:** `npm run content:<slug>` · **Live preview:** `/work/block-showcase`

---

## Quick list

| Block | Pattern | Use for |
|-------|---------|---------|
| `prose` | free text | Body paragraphs (blank line = new para; 4-space indent = nested line; `**bold**` supported) |
| `stats` | YAML list | Metric row (`value`, `label`, `variant`: dark \| mid \| light) |
| `pullquote` | key-value | Large quote (`text`, `source`) |
| `findings` | YAML list | Research cards (`num`, `label`, `title`, `body`) |
| `annotation` | key-value | Small aside (`text`) |
| `twoCol` | YAML list | Side-by-side points (`label`, `body`) |
| `artifact` | key-value | Built-in diagram (`variant`: audit-map \| token-hierarchy, `label`, `caption`, optional `captionMeta`) |
| `process` | YAML list | Step columns (`num`, `title`, `body`) |
| `callout` | key-value | Highlight box (`label`, `title`, `body`) |
| `ornament` | empty | Decorative divider |
| `colorSpecimen` | empty | Color token swatches |
| `typeSpecimen` | empty | Typography specimen |
| `componentGrid` | YAML list | Component inventory cards (`label`, `title`, `count`, `variant`: primary \| dark \| mid \| deepest) |
| `outcomes` | YAML list | Result metrics (`value`, `label`, `body`) |
| `reflections` | `-` list | Numbered takeaways |
| `image` | key-value | Single image (`src`, `alt`, optional `caption`) |
| `imagePair` | YAML list | Two side-by-side images (`src`, `alt`, `caption`) |
| `imageGrid` | YAML list | 3+ images in a grid (`src`, `alt`, optional `caption`) |
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

### Key-value — `pullquote`, `annotation`, `callout`, `artifact`, `image`, `video`

```markdown
## pullquote

text: Quote goes here
source: Attribution

## image

src: /projects/example/shot.png
alt: Description
caption: Optional caption

## video

src: /projects/example/clip.mp4
poster: /projects/example/poster.png
alt: Accessible description
caption: Caption under the player
```

### YAML list — `stats`, `findings`, `twoCol`, `process`, `outcomes`, `componentGrid`, `imagePair`, `imageGrid`

```markdown
## stats

- value: "12"
  label: Interviews
  variant: dark

## imageGrid

- src: /projects/example/a.png
  alt: First
  caption: Optional
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

| Block | Count |
|-------|-------|
| `image` | 1 |
| `imagePair` | 2 |
| `imageGrid` | 3+ |

---

## Sections

Every major case study needs these six `#` sections, in order:

`brief` → `research` → `concept` → `craft` → `build` → `outcome`

Each section starts with:

```markdown
# brief

eyebrow: 01 — Brief
title: Section title
titleEm: optional italic line
```
