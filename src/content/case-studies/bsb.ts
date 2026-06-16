import type { MinorCaseStudy } from "@/src/lib/case-studies/types";

const bsbCaseStudy = {
  kind: "minor",
  slug: "bsb",
  approachLabel: "The Decision",
  hero: {
    breadcrumb: "BSB Dessert Bar",
    eyebrow: "002 · Industrial design · Food service",
    titleLine1: "Signature",
    titleLine2: "Dessert",
    summary:
      "A signature dessert silhouette and matching fork for a fine dessert bar opening in a Thai tourist city — designed to photograph well and feel intentional in hand.",
    meta: [
      { label: "Client", value: "Fine dessert bar · Thailand" },
      { label: "Role", value: "Industrial design" },
      { label: "Timeline", value: "6 weeks" },
      { label: "Deliverable", value: "Form spec + fork CAD" },
    ],
  },
  sections: {
    context: {
      eyebrow: "01 — Context",
      title: "A dessert worth",
      titleEm: "the photograph.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "A new fine dessert bar in a high-footfall tourist district needed a signature plate moment — a dessert shape recognisable on social feeds and a fork that feels designed for that shape, not borrowed from general cutlery.",
            "The client briefed for elegance without fragility: the form had to survive kitchen production variance and still plate consistently for front-of-house staff.",
          ],
        },
        {
          type: "stats",
          items: [
            { value: "1", label: "Signature dessert form", variant: "dark" },
            { value: "1", label: "Matching fork", variant: "mid" },
            { value: "6", label: "Week sprint", variant: "light" },
          ],
        },
      ],
    },
    approach: {
      eyebrow: "02 — The Decision",
      title: "Curve over",
      titleEm: "angular drama.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Early concepts leaned architectural — sharp facets that looked striking in renders but cracked under mould release and read harsh under warm restaurant lighting.",
          ],
        },
        {
          type: "callout",
          label: "Tradeoff",
          title: "Instagram vs. kitchen",
          body: "Faceted forms cut for a soft double-curve silhouette that demoulds reliably and catches light gently on camera.",
        },
        {
          type: "annotation",
          text: "Fork tine spacing was matched to dessert bite size — wide enough for a clean lift, narrow enough to feel refined rather than utilitarian.",
        },
      ],
    },
    work: {
      eyebrow: "03 — Work",
      title: "Form language",
      titleEm: "in pairs.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Dessert mould geometry and fork CAD were developed as a matched set — shared curve radius, proportional handle weight, and a matte ceramic glaze spec for the service ware.",
          ],
        },
        {
          type: "process",
          items: [
            {
              num: "01",
              title: "Mould geometry",
              body: "Double-curve silicone mould with draft angles validated in kitchen trial batches.",
            },
            {
              num: "02",
              title: "Fork CAD",
              body: "Three tine profile matched to dessert bite — stainless spec with brushed finish.",
            },
            {
              num: "03",
              title: "Plating guide",
              body: "One-page FOH reference for consistent height, garnish zone, and fork placement.",
            },
          ],
        },
      ],
    },
    outcome: {
      eyebrow: "04 — Outcome",
      title: "Ready for",
      titleEm: "opening night.",
      blocks: [
        {
          type: "outcomes",
          items: [
            {
              value: "✓",
              label: "Production mould",
              body: "Silicone mould approved after three kitchen trial runs with acceptable variance.",
            },
            {
              value: "✓",
              label: "Fork vendor spec",
              body: "CAD and finish notes handed to cutlery supplier for small-batch production.",
            },
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "The dessert shape became the bar's visual anchor on menus and social — a minor project scope, but high impact on brand first impression.",
          ],
        },
      ],
    },
  },
} satisfies MinorCaseStudy;

export default bsbCaseStudy;
