import type { MinorCaseStudy } from "@/src/lib/case-studies/types";

const teaGiftBoxCaseStudy = {
  kind: "minor",
  slug: "tea-gift-box",
  approachLabel: "The Decision",
  hero: {
    breadcrumb: "Tea Gift Box",
    eyebrow: "004 · Packaging design · Print",
    titleLine1: "Tea Gift",
    titleLine2: "Box",
    summary:
      "A giftable trio box for single-origin teas — must read premium on shelf and survive mailing without inner plastic.",
    meta: [
      { label: "Client", value: "Concept project" },
      { label: "Role", value: "Packaging design" },
      { label: "Timeline", value: "2 weeks" },
      { label: "Deliverable", value: "Print-ready dieline" },
    ],
  },
  sections: {
    context: {
      eyebrow: "01 — Context",
      title: "Premium on shelf,",
      titleEm: "practical in post.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "A giftable trio box for single-origin teas — must read premium on shelf and survive mailing without inner plastic.",
            "The brief called for a limited-edition holiday drop: three tins in one outer box, readable at arm's length and sturdy enough to ship without bubble wrap or inner plastic trays.",
          ],
        },
        {
          type: "stats",
          items: [
            { value: "3", label: "Single-origin tins", variant: "dark" },
            { value: "0", label: "Inner plastic trays", variant: "mid" },
            { value: "2", label: "Week sprint", variant: "light" },
          ],
        },
      ],
    },
    approach: {
      eyebrow: "02 — The Decision",
      title: "Tuck-tab over",
      titleEm: "magnetic closure.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Magnetic closure was the early premium default — but it blew the cost ceiling and added weight that failed mail-drop tests. The unboxing moment had to come from structure and illustration, not hardware.",
          ],
        },
        {
          type: "callout",
          label: "Tradeoff",
          title: "Cost vs. reveal",
          body: "Magnetic closure cut for tuck-tab; interior illustration carries the unboxing moment instead.",
        },
        {
          type: "annotation",
          text: "Soy-based inks and a pulp insert replaced plastic trays — sustainability and mail durability aligned once the closure decision was made.",
        },
      ],
    },
    work: {
      eyebrow: "03 — Work",
      title: "Structure and",
      titleEm: "interior reveal.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Tuck-tab construction, interior illustration, and soy-based ink spec replaced magnetic hardware and plastic trays. The dieline was tested against domestic post drops before print handoff.",
          ],
        },
        {
          type: "process",
          items: [
            {
              num: "01",
              title: "Dieline",
              body: "Tuck-tab structure with pulp insert — no inner plastic trays.",
            },
            {
              num: "02",
              title: "Interior art",
              body: "Illustration layer carries the unboxing moment without magnetic closure.",
            },
            {
              num: "03",
              title: "Material spec",
              body: "Soy-based inks and foil callouts documented for vendor handoff.",
            },
          ],
        },
      ],
    },
    outcome: {
      eyebrow: "04 — Outcome",
      title: "Print-ready",
      titleEm: "holiday drop.",
      blocks: [
        {
          type: "outcomes",
          items: [
            {
              value: "✓",
              label: "Print-ready dieline",
              body: "Unfolded dieline with foil callouts, soy-based ink spec, and pulp insert — handed to vendor with bleed and registration notes.",
            },
            {
              value: "✓",
              label: "Limited drop",
              body: "Client used assets for a limited holiday drop. Structure survived domestic post without inner plastic.",
            },
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "Shelf mock and interior illustration layer completed the story — structure photos and one paragraph on material choices carry packaging minors faster than a long write-up.",
          ],
        },
      ],
    },
  },
} satisfies MinorCaseStudy;

export default teaGiftBoxCaseStudy;
