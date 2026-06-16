import type { MinorCaseStudy } from "@/src/lib/case-studies/types";

const timberCaseStudy = {
  kind: "minor",
  slug: "timber",
  approachLabel: "Process",
  hero: {
    breadcrumb: "Timber Catalog",
    eyebrow: "007 · Graphic design · Multimedia",
    titleLine1: "Timber",
    titleLine2: "Catalog",
    summary:
      "Multimedia design for a wood styling company — catalog layout, 3D asset rendering, image retouching, and print coordination from concept to published book.",
    meta: [
      { label: "Client", value: "Wood styling company · Thailand" },
      { label: "Role", value: "Graphic design + 3D + production" },
      { label: "Timeline", value: "10 weeks" },
      { label: "Deliverable", value: "Published product catalog" },
    ],
  },
  sections: {
    context: {
      eyebrow: "01 — Context",
      title: "Wood deserves",
      titleEm: "better than a PDF.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "A wood styling and interior finishes company needed a flagship product catalog for showroom and trade clients — not a price list, but a material storybook that sells texture through photography and accurate colour.",
            "Scope spanned art direction, page layout, 3D scene rendering for products without studio photography, retouching, and coordination with the print house through proofing.",
          ],
        },
        {
          type: "stats",
          items: [
            { value: "48", label: "Catalog pages", variant: "dark" },
            { value: "12", label: "3D renders", variant: "mid" },
            { value: "10", label: "Week programme", variant: "light" },
          ],
        },
      ],
    },
    approach: {
      eyebrow: "02 — Process",
      title: "Render what you",
      titleEm: "can't shoot.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Several product lines weren't available for studio shoot in the project window. 3D rendering filled the gap — grain direction, stain colour, and edge profile matched to physical samples under showroom lighting.",
          ],
        },
        {
          type: "callout",
          label: "Workflow",
          title: "Sample-first colour",
          body: "Physical wood samples were scanned and matched before any render or retouch — digital colour calibrated to material reality, not screen preference.",
        },
      ],
    },
    work: {
      eyebrow: "03 — Work",
      title: "From layout",
      titleEm: "to press.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Grid system, typographic hierarchy, and full-bleed texture spreads structured the catalog. 3D assets integrated alongside location photography. Retouching unified white balance and grain visibility across mixed sources.",
          ],
        },
        {
          type: "process",
          items: [
            {
              num: "01",
              title: "Layout system",
              body: "48-page grid with product spec spreads, hero texture pages, and index.",
            },
            {
              num: "02",
              title: "3D + retouch",
              body: "Twelve product renders and photography colour-matched to physical samples.",
            },
            {
              num: "03",
              title: "Print coordination",
              body: "Paper stock proofing, creep allowance, and press-check attendance for first run.",
            },
          ],
        },
      ],
    },
    outcome: {
      eyebrow: "04 — Outcome",
      title: "Catalog",
      titleEm: "in hand.",
      blocks: [
        {
          type: "outcomes",
          items: [
            {
              value: "48",
              label: "Pages published",
              body: "Full catalog printed and distributed to showrooms and trade clients.",
            },
            {
              value: "✓",
              label: "Colour accuracy",
              body: "Press proof approved against physical wood samples — minimal variance on stain tones.",
            },
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "Timber stretched across graphic design, 3D, and production coordination — a reminder that multimedia scope means owning the full pipeline, not just the InDesign file.",
          ],
        },
      ],
    },
  },
} satisfies MinorCaseStudy;

export default timberCaseStudy;
