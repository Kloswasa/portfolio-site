---
kind: major
slug: recipe
hero:
  breadcrumb: Family Recipes
  eyebrow: 003 · Product design · Food
  titleLine1: Family
  titleLine2: Recipes
  summary: A recipe app for saving, sharing, and cooking dishes passed down across
    generations — with photos, stories, and measurements that match how people
    actually cook.
  meta:
    - label: Client
      value: Personal project
    - label: Role
      value: Product design + frontend
    - label: Timeline
      value: 12 weeks
    - label: Platform
      value: Responsive web
---

# brief

eyebrow: 01 — Brief
title: Recipes are social
titleEm: objects, not rows.

## prose

Unlike generic recipe aggregators, the experience centers the cook and the family context behind each dish.

Interviewees stored recipes in Notes, WhatsApp, and handwritten cards. Search failed across formats; scaling servings and unit conversion caused friction at cook time.

## stats

- value: "5"
  label: Beta families
  variant: dark
- value: 120+
  label: Recipes imported
  variant: mid
- value: "12"
  label: Week build
  variant: mid
- value: "1"
  label: Cook mode per screen
  variant: light

## prose

Before building screens, I mapped how families actually saved and cooked — and where meal-kit patterns broke down for heirloom recipes.

## pullquote

text: I don't just want the ingredients — I want to know who taught my mum, and who taught them.
source: Beta family interview · Week 2

## findings

- num: A
  label: Friction 01
  title: Scattered storage
  body: Recipes lived across Notes, WhatsApp threads, and handwritten cards with
    no unified search or lineage.
- num: B
  label: Friction 02
  title: Cook-time friction
  body: Scaling servings and imperial/metric conversion interrupted mid-recipe —
    especially with messy hands.
- num: C
  label: Friction 03
  title: Browse-first IA
  body: Meal-kit app patterns (browse → cart) ignored library behaviour — families
    wanted collections by branch, not discovery feeds.

## callout

label: Role
title: End-to-end design + build
body: End-to-end product design and Next.js implementation with a small beta group of five families.

# research

eyebrow: 02 — Research
title: Cooking in
titleEm: real kitchens

## prose

Research combined family interviews, a competitive audit of recipe apps, and moderated cook-along sessions on early prototypes.

## artifact

variant: audit-map
label: Artifact · Experience audit map
caption: Journey map across import, library browsing, cook mode, and sharing. Amber = friction requiring a design response.
captionMeta: Figma · Discovery phase

## twoCol

- label: Family interviews · n=5
  body: Participants wanted lineage (who taught whom) as much as ingredients —
    social context was non-negotiable.
- label: Cook-along tests
  body: Beta cooks completed recipes with fewer mid-session exits when steps were
    one per screen and timers were one tap away.

## ornament

# concept

eyebrow: 03 — Concept
title: From browse feed
titleEm: to family library

## prose

Early IA copied meal-kit apps (browse → cart). We pivoted to a library model: collections by family branch, with cook mode as a fullscreen, hands-friendly step view.

## process

- num: "01"
  title: Discovery & audit
  body: Mapped how five beta families stored recipes and where generic apps failed
    their workflows.
- num: "02"
  title: Library IA
  body: Collections by family branch replaced browse feeds. Search scoped to
    imported content only.
- num: "03"
  title: Cook mode
  body: One step per screen, large type, one-tap timers, imperial/metric toggle
    local to cook mode only.
- num: "04"
  title: Ship & share
  body: Responsive web app with share links for relatives without accounts and
    print-friendly recipe cards.

## callout

label: Design principle
title: Hands-first at cook time
body: Every cook-mode decision was evaluated against messy hands, glances, and interruptions — not pristine desktop browsing.

## artifact

variant: token-hierarchy
label: Artifact · Token hierarchy
caption: Primitive → semantic → component tokens for cards, cook mode, and library chrome. Typography scaled for arm's-length reading.
captionMeta: Design system · Build phase

# craft

eyebrow: 04 — Craft
title: Warm library,
titleEm: focused cook mode

## prose

The visual system paired editorial warmth in the library with high-contrast, large-type cook mode — two modes, one token-backed system.

## prose

Structured steps with optional voice notes per step replaced single blob text fields. Imperial/metric toggle lives in cook mode only to reduce authoring friction.

# build

eyebrow: 05 — Build
title: Library, cook mode,
titleEm: share.

## prose

Core patterns: collection cards, recipe detail with lineage, step-by-step cook view, timer chip, share link generator, and print-friendly recipe card.

## annotation

text: Voice notes per step were optional — families who preferred written-only recipes could ignore them without losing structure.

## callout

label: Why this won
title: Fewer mid-session exits
body: Beta cooks completed recipes with fewer mid-session exits when steps were one per screen and timers were one tap away.

# outcome

eyebrow: 06 — Outcome
title: What shipped
titleEm: in twelve weeks

## outcomes

- value: "5"
  label: Beta families
  body: Five families imported and cooked recipes across the full loop — import,
    browse, cook, share.
- value: 120+
  label: Recipes imported
  body: Early adopters brought handwritten cards, WhatsApp forwards, and Notes
    exports into a single library.
- value: ↑
  label: Cook mode completion
  body: One-step-per-screen cook mode improved completion versus the initial
    multi-step scroll prototype.

## prose

Shipped responsive web app with share links for relatives without accounts and print-friendly recipe cards.

## reflections

- Investing in import flows (photo of handwritten card → draft) would be the next bet — manual entry slowed early adoption.
- I'd prototype print layouts earlier; families asked for physical cards sooner than expected.
- The designer format gave room to show both IA shifts and cook-mode rationale in one narrative arc.

## callout

label: The one thing
title: Lineage is a feature
body: Recipes are social objects. Who taught whom mattered as much as ingredients — designing for lineage kept the product feeling like family, not a database.
