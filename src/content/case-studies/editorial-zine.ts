import type { MinorCaseStudy } from "@/src/lib/case-studies/types";

const editorialZineCaseStudy = {
  kind: "minor",
  slug: "editorial-zine",
  approachLabel: "The Decision",
  hero: {
    breadcrumb: "Migration Stories Zine",
    eyebrow: "007 · Editorial design · Risograph",
    titleLine1: "Migration Stories",
    titleLine2: "Zine",
    summary:
      "24-page risograph zine on migration stories — tight grid, generous margins, photography-led spreads.",
    meta: [
      { label: "Client", value: "Concept project" },
      { label: "Role", value: "Editorial design" },
      { label: "Timeline", value: "4 weeks" },
      { label: "Deliverable", value: "Riso-ready master layouts" },
    ],
  },
  sections: {
    context: {
      eyebrow: "01 — Context",
      title: "Stories worth",
      titleEm: "slow reading.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "24-page risograph zine on migration stories — tight grid, generous margins, photography-led spreads.",
            "First-person narratives, photography-led openings, and risograph ink limits defined the creative frame before any spread was locked.",
          ],
        },
        {
          type: "stats",
          items: [
            { value: "24", label: "Pages", variant: "dark" },
            { value: "2", label: "Inks per spread max", variant: "mid" },
            { value: "4", label: "Week layout sprint", variant: "light" },
          ],
        },
      ],
    },
    approach: {
      eyebrow: "02 — The Decision",
      title: "Duotone over",
      titleEm: "full CMYK.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Full CMYK photography wasn't viable on riso. Each spread was limited to two inks — portraits treated with duotone instead of full colour, text spreads using a second ink for emphasis only.",
          ],
        },
        {
          type: "callout",
          label: "Tradeoff",
          title: "Ink budget",
          body: "Limited to two inks per spread — photography treated with duotone instead of full CMYK.",
        },
      ],
    },
    work: {
      eyebrow: "03 — Work",
      title: "Spread pairs",
      titleEm: "on riso grid.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "A tight grid with generous margins anchored every spread. Photography openings used duotone treatment; text spreads reserved a second ink for pull quotes and emphasis only.",
          ],
        },
        {
          type: "process",
          items: [
            {
              num: "01",
              title: "Grid system",
              body: "Tight column grid with margins sized for riso registration tolerance.",
            },
            {
              num: "02",
              title: "Duotone portraits",
              body: "Two-ink photography treatment replacing full CMYK spreads.",
            },
            {
              num: "03",
              title: "Spread pairs",
              body: "Facing spreads designed as reader pairs, not isolated pages.",
            },
          ],
        },
      ],
    },
    outcome: {
      eyebrow: "04 — Outcome",
      title: "Printer",
      titleEm: "sign-off.",
      blocks: [
        {
          type: "outcomes",
          items: [
            {
              value: "24",
              label: "Master layouts",
              body: "Exported for riso separations with ink and registration notes per spread.",
            },
            {
              value: "✓",
              label: "Printer approval",
              body: "Ink limits and registration signed off before press run.",
            },
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "Spread pairs in the gallery mirror how readers experience the zine — not isolated pages.",
          ],
        },
      ],
    },
  },
} satisfies MinorCaseStudy;

export default editorialZineCaseStudy;
