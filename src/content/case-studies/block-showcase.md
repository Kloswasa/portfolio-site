---
kind: major
slug: block-showcase
hero:
  breadcrumb: Block Showcase
  eyebrow: "000 · Reference · Internal"
  titleLine1: Block
  titleLine2: Showcase
  summary: A living reference page that renders every major case study content block, use it to preview layout, spacing, and typography before writing real copy.
  image:
    src: /projects/quiz-game/quiz-game-cover.png
    alt: Decorative cover used for the block showcase hero
  meta:
    - label: Purpose
      value: Component reference
    - label: Blocks
      value: 19 content types
    - label: Format
      value: Major case study
    - label: Status
      value: Dev / internal
---

# brief

eyebrow: 01 · Brief
title: Text blocks
titleEm: and metrics

## prose

The prose block is the workhorse, one or more paragraphs of body copy. Blank lines in the source create separate paragraphs.

    Indented lines (four leading spaces) render as nested body lines, useful for lists or sub-points without breaking the editorial flow.

## stats

- value: "19"
  label: Block types
  variant: dark
- value: "6"
  label: Sections
  variant: mid
- value: "3"
  label: Stat variants
  variant: light
- value: "1"
  label: Living page
  variant: mid

## pullquote

text: Every block on this page maps to a typed content object, no one-off markup in the renderer.
source: Block Showcase · Reference note

# research

eyebrow: 02 · Research
title: Structured
titleEm: findings

## prose

Research-heavy case studies use findings cards, annotations, and two-column layouts to separate evidence from narrative.

## findings

- num: A
  label: Block · findings
  title: Friction cards
  body: Numbered research insights with a label, title, and body. Best for interview themes or audit observations.
  image: /projects/quiz-game/quiz-game-hexagon.png
  imageAlt: Sample finding card illustration
- num: B
  label: Block · annotation
  title: Inline notes
  body: See the annotation below, a lighter-weight aside for scope notes, caveats, or designer commentary.
- num: C
  label: Block · twoCol
  title: Side-by-side
  body: Pairs two labelled columns, useful for comparing methods, audiences, or before/after states.

## annotation

text: Annotations render with a ↳ note prefix. Use them for asides that shouldn't compete with the main narrative.

## twoCol

- label: Left column
  body: Two-column blocks accept any number of items but read best with two parallel points.
- label: Right column
  body: Each item has a mono-style label and a body paragraph beneath it.

# concept

eyebrow: 03 · Concept
title: Artifacts
titleEm: and specimens

## prose

Concept sections often pair narrative with visual evidence, built-in artifacts, color/type specimens, and decorative ornaments.

## artifact

variant: audit-map
label: Block · artifact (audit-map)
caption: The audit-map variant renders an experience journey diagram. Use it for research synthesis or service blueprints.
captionMeta: Built-in SVG artifact

## ornament

## colorSpecimen

## typeSpecimen

# craft

eyebrow: 04 · Craft
title: Media
titleEm: and grids

## prose

Craft sections showcase visual output, image pairs, component inventories, and the second artifact variant.

## image

src: /projects/quiz-game/quiz-game-quiz-diagram.png
alt: Sample single image block showing a quiz flow diagram
caption: image block, full-width figure with optional caption.

## image

src: /projects/quiz-game/quiz-game-hexagon.png
alt: Sample small image block
caption: image block with size: sm.
size: sm

## componentGrid

- label: Atoms
  title: Buttons & badges
  count: "12"
  variant: primary
- label: Molecules
  title: Cards & stamps
  count: "8"
  variant: dark
- label: Organisms
  title: Hero & nav
  count: "5"
  variant: mid
- label: Templates
  title: Case study
  count: "2"
  variant: deepest

## imageGrid

- src: /projects/quiz-game/quiz-game-identical-platypus.png
  alt: Platypus illustration sample
  caption: imageGrid · item 1
- src: /projects/quiz-game/quiz-game-identical-brolga.png
  alt: Brolga illustration sample
  caption: imageGrid · item 2
- src: /projects/quiz-game/quiz-game-cover.png
  alt: Australia Call cover
  caption: imageGrid · item 3 (three or more images)

## imagePair

size: sm
- src: /projects/quiz-game/quiz-game-hexagon.png
  alt: Platypus illustration sample
  caption: imagePair · size sm · left
- src: /projects/quiz-game/quiz-game-question-mark.png
  alt: Brolga illustration sample
  caption: imagePair · size sm · right

## imagePair

- src: /projects/quiz-game/quiz-game-identical-platypus.png
  alt: Platypus illustration sample
  caption: imagePair · left item with caption
- src: /projects/quiz-game/quiz-game-identical-brolga.png
  alt: Brolga illustration sample
  caption: imagePair · right item with caption

## artifact

variant: token-hierarchy
label: Block · artifact (token-hierarchy)
caption: The token-hierarchy variant shows a design token tree. Use it for design-system or theming case studies.
captionMeta: Built-in SVG artifact

# build

eyebrow: 05 · Build
title: Process
titleEm: and media

## prose

Build sections document how something was made, process steps, highlighted decisions, and screen recordings.

## process

- num: "01"
  title: process block
  body: Numbered columns for phased work, discovery, design, build, handoff.
- num: "02"
  title: callout block
  body: See the callout below for highlighted insights, principles, or role summaries.
- num: "03"
  title: video block
  body: Embeds a video with poster, controls, alt text, and a caption.
- num: "04"
  title: prose block
  body: Back to narrative paragraphs to tie the evidence together.

## callout

label: Block · callout
title: Highlighted insight
body: Callouts draw attention to a single idea, a design principle, a key decision, or a role summary. They sit apart from the body flow.

## video

src: /projects/quiz-game/quiz-game-resultpage-video.mp4
poster: /projects/quiz-game/quiz-game-video-resultpage-cover.png
alt: Sample video block showing a result page walkthrough
caption: video block, src, poster, alt, and caption are all required.

# outcome

eyebrow: 06 · Outcome
title: Results
titleEm: and reflections

## outcomes

- value: "19"
  label: Blocks rendered
  body: Every MajorContentBlock variant appears at least once on this page.
- value: "2"
  label: Artifact variants
  body: audit-map and token-hierarchy, both built-in SVG diagrams.
- value: "1"
  label: Reference URL
  body: Visit /work/block-showcase any time to preview block styling.

## prose

The outcome section closes the narrative arc. Pair outcome metrics with reflections for a complete ending.

## reflections

- prose, body paragraphs with optional indentation.
- stats · pullquote · findings · annotation · twoCol, research and context blocks.
- artifact · ornament · colorSpecimen · typeSpecimen · componentGrid · image · imagePair · imageGrid, visual blocks.
- process · callout · video, build and evidence blocks.
- outcomes · reflections, closing blocks for results and learnings.

## callout

label: Quick reference
title: Where to edit
body: Content lives in src/content/case-studies/block-showcase.md. Renderers are in MajorContentBlocks.tsx. Styles in case-study-major.css.
