import type { MinorCaseStudy } from "@/src/lib/case-studies/types";

const festivalPosterCaseStudy = {
  kind: "minor",
  slug: "festival-poster",
  approachLabel: "The Decision",
  hero: {
    breadcrumb: "Lantern Festival Poster",
    eyebrow: "006 · Graphic design · Print",
    titleLine1: "Lantern Festival",
    titleLine2: "Poster",
    summary:
      "Poster series for a lantern festival night market — readable at distance, vibrant in low light, bilingual headline.",
    meta: [
      { label: "Client", value: "Concept project" },
      { label: "Role", value: "Graphic design" },
      { label: "Timeline", value: "1 week" },
      { label: "Deliverable", value: "Three-format print kit" },
    ],
  },
  sections: {
    context: {
      eyebrow: "01 — Context",
      title: "Readable at distance,",
      titleEm: "vibrant at night.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Poster series for a lantern festival night market — readable at distance, vibrant in low light, bilingual headline.",
            "The program needed assets for street poles, shop windows, and social crops — with a motif that survives scale reduction and low-light printing.",
          ],
        },
        {
          type: "stats",
          items: [
            { value: "3", label: "Print formats", variant: "dark" },
            { value: "2", label: "Languages", variant: "mid" },
            { value: "1", label: "Week sprint", variant: "light" },
          ],
        },
      ],
    },
   
    work: {
      eyebrow: "02 — Work",
      title: "Scale-tested",
      titleEm: "across formats.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "A2, A3, and story formats were built from a shared motif system — silhouette hero, border detail, bilingual headline stack. Street-pole and shop-window mocks validated legibility before social crops.",
          ],
        },
        {
          type: "process",
          items: [
            {
              num: "01",
              title: "Motif system",
              body: "Silhouette lantern with border-band detail for distance legibility.",
            },
            {
              num: "02",
              title: "Format kit",
              body: "A2 pole, A3 window, and story crops from one layout grid.",
            },
            {
              num: "03",
              title: "Scale mocks",
              body: "Street-pole and shop-window tests before print handoff.",
            },
          ],
        },
      ],
    },
    outcome: {
      eyebrow: "04 — Outcome",
      title: "Three-format",
      titleEm: "print kit.",
      blocks: [
        {
          type: "outcomes",
          items: [
            {
              value: "3",
              label: "Format kit",
              body: "A2, A3, and story formats handed to print vendor with bleed and color notes.",
            },
            {
              value: "✓",
              label: "Scale-tested",
              body: "Street-pole and shop-window mocks validated headline and date before social crops were built.",
            },
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "Graphic minors work best when iteration boards show scale context — street pole mock, not just flat art.",
          ],
        },
      ],
    },
  },
} satisfies MinorCaseStudy;

export default festivalPosterCaseStudy;
