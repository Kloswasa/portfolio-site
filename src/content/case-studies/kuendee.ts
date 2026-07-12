import type { MinorCaseStudy } from "@/src/lib/case-studies/types";

const kuendeeCaseStudy = {
  kind: "minor",
  slug: "kuendee",
  approachLabel: "Process",
  hero: {
    breadcrumb: "Kuendee Booth",
    eyebrow: "006 · Industrial design · Retail",
    titleLine1: "Kuendee",
    titleLine2: "Booth",
    summary:
      "A modular retail booth that reconfigures for rotated product lines and different mall branch floor plans — designed within strict mall compliance requirements.",
    meta: [
      { label: "Client", value: "Retail brand · Thailand" },
      { label: "Role", value: "Booth design" },
      { label: "Timeline", value: "8 weeks" },
      { label: "Deliverable", value: "Modular booth system" },
    ],
  },
  sections: {
    context: {
      eyebrow: "01 — Context",
      title: "One booth,",
      titleEm: "many branches.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Kuendee needed a booth system that could travel across mall branches — each with different floor plans, column positions, and sight lines — while supporting quarterly product rotations without a full rebuild.",
            "Mall compliance added hard constraints: maximum height, material fire ratings, electrical routing, and overnight storage for collapsible elements.",
          ],
        },
        {
          type: "stats",
          items: [
            { value: "3+", label: "Branch layouts", variant: "dark" },
            { value: "4", label: "Display modules", variant: "mid" },
            { value: "8", label: "Week programme", variant: "light" },
          ],
        },
      ],
    },
    approach: {
      eyebrow: "02 — Process",
      title: "Module first,",
      titleEm: "layout second.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Instead of designing three bespoke booths, I defined a kit of parts — base counter, vertical display spine, hero plinth, and signage header — that snap to a grid and reorient per branch plan.",
          ],
        },
        {
          type: "callout",
          label: "Constraint",
          title: "Compliance as brief",
          body: "Fire-rated panel spec and height ceiling were locked before visual exploration — aesthetics had to work inside the box, not around it.",
        },
      ],
    },
    work: {
      eyebrow: "03 — Work",
      title: "Configurable",
      titleEm: "display kit.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Each module was dimensioned against worst-case branch plans. Display faces rotate 90° for corner vs. inline positions. Product plinths accept three standard SKU sizes without new fabrication.",
          ],
        },
        {
          type: "process",
          items: [
            {
              num: "01",
              title: "Branch audit",
              body: "Measured three mall branches — sight lines, power points, column interference mapped.",
            },
            {
              num: "02",
              title: "Module kit",
              body: "Four reconfigurable units with shared joinery and cable routing channels.",
            },
            {
              num: "03",
              title: "Rotation guide",
              body: "Planogram sheets for quarterly product swaps — which module face, which plinth height.",
            },
          ],
        },
      ],
    },
    outcome: {
      eyebrow: "04 — Outcome",
      title: "Deploy-ready",
      titleEm: "system.",
      blocks: [
        {
          type: "outcomes",
          items: [
            {
              value: "4",
              label: "Core modules",
              body: "Counter, spine, plinth, and header — combinable for inline, corner, and island positions.",
            },
            {
              value: "✓",
              label: "Compliance pack",
              body: "Material certs and assembly drawings submitted for mall approval on two branches.",
            },
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "The modular approach cut redeployment cost between branches — a single kit with layout guides instead of three one-off builds.",
          ],
        },
      ],
    },
  },
} satisfies MinorCaseStudy;

export default kuendeeCaseStudy;
