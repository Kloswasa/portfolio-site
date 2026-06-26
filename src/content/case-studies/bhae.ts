import type { MinorCaseStudy } from "@/src/lib/case-studies/types";

const bhaeCaseStudy = {
  kind: "minor",
  slug: "bhaesaj",
  approachLabel: "The Direction",
  hero: {
    breadcrumb: "Bhae Skincare",
    eyebrow: "005 · Packaging design · Beauty",
    titleLine1: "Bhae",
    titleLine2: "Packaging",
    summary:
      "Packaging direction and design for a century-old traditional skincare brand — executed from a creative direction set by another team, within heritage constraints.",
    meta: [
      { label: "Client", value: "Heritage skincare · Thailand" },
      { label: "Role", value: "Packaging design" },
      { label: "Timeline", value: "5 weeks" },
      { label: "Deliverable", value: "Packaging design + dieline" },
    ],
  },
  sections: {
    context: {
      eyebrow: "01 — Context",
      title: "A century of trust,",
      titleEm: "a new pack.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Bhae is a traditional skincare house with over a hundred years of customer trust. The brand needed refreshed packaging for a modern retail context — without losing the gravitas long-time buyers expect.",
            "Creative direction — colour palette, typographic mood, and heritage motif treatment — was established by another team. My role was packaging execution: structure, layout, material spec, and vendor-ready artwork.",
          ],
        },
        {
          type: "stats",
          items: [
            { value: "100+", label: "Years established", variant: "dark" },
            { value: "1", label: "Creative direction", variant: "mid" },
            { value: "5", label: "Week sprint", variant: "light" },
          ],
        },
      ],
    },
    approach: {
      eyebrow: "02 — The Direction",
      title: "Execute, don't",
      titleEm: "reinvent.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Working from an approved direction meant fast fidelity to mood boards — and disciplined restraint when structural ideas conflicted with the established visual language.",
          ],
        },
        {
          type: "callout",
          label: "Constraint",
          title: "Heritage first",
          body: "Every layout decision tested against a simple question: would a long-time buyer still recognise this on the shelf?",
        },
        {
          type: "annotation",
          text: "Foil stamp placement and paper stock weight were the main levers for premium feel — the direction's palette did the storytelling; material did the trust signal.",
        },
      ],
    },
    work: {
      eyebrow: "03 — Work",
      title: "Structure meets",
      titleEm: "heritage art.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Pack structure, label hierarchy, and dieline development translated the creative direction into production-ready artwork — bilingual copy zones, regulatory text blocks, and foil callout layers separated for vendor.",
          ],
        },
        {
          type: "process",
          items: [
            {
              num: "01",
              title: "Direction alignment",
              body: "Mood board and motif library imported — no new visual territory explored.",
            },
            {
              num: "02",
              title: "Pack structure",
              body: "Carton dieline with heritage motif panel, product name zone, and ingredient back panel.",
            },
            {
              num: "03",
              title: "Print handoff",
              body: "Foil, emboss, and paper stock spec documented for local print vendor.",
            },
          ],
        },
      ],
    },
    outcome: {
      eyebrow: "04 — Outcome",
      title: "Shelf-ready",
      titleEm: "heritage pack.",
      blocks: [
        {
          type: "outcomes",
          items: [
            {
              value: "✓",
              label: "Print-ready artwork",
              body: "Layered files with foil and emboss callouts handed to vendor with bleed and registration notes.",
            },
            {
              value: "✓",
              label: "Direction fidelity",
              body: "Creative lead approved final pack without revision — execution matched approved mood.",
            },
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "Executing another team's direction sharpened my packaging craft — structure, material, and print spec — without the luxury of open visual exploration.",
          ],
        },
      ],
    },
  },
} satisfies MinorCaseStudy;

export default bhaeCaseStudy;
