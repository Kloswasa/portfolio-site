import type { MajorCaseStudy } from "@/src/lib/case-studies/types";

const homhuanCaseStudy = {
  kind: "major",
  slug: "homhuan",
  hero: {
    breadcrumb: "HomHuan",
    eyebrow: "001 · Industrial design · Capstone",
    titleLine1: "Hom",
    titleLine2: "Huan",
    summary:
      "A home fragrance set that translates Thai heritage rituals into a modern shelf object — solo capstone deliverable spanning research, form language, and production-ready specs.",
    meta: [
      { label: "Client", value: "Capstone project" },
      { label: "Role", value: "Industrial design · solo" },
      { label: "Timeline", value: "16 weeks · 2024" },
      { label: "Deliverable", value: "Physical prototype + CMF spec" },
    ],
  },
  sections: {
    brief: {
      eyebrow: "01 — Brief",
      title: "Heritage scent,",
      titleEm: "modern home.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "HomHuan began as a capstone question: how do you bring Thai fragrance traditions — temple incense, herbal compress, floral garlands — into a contemporary home object without turning it into tourist kitsch?",
            "The brief required a complete fragrance set for domestic use: vessel, diffuser mechanism, refill logic, and packaging that could sit on a shelf beside international lifestyle brands.",
          ],
        },
        {
          type: "stats",
          items: [
            { value: "1", label: "Solo capstone", variant: "dark" },
            { value: "3", label: "Heritage scent pillars", variant: "mid" },
            { value: "16", label: "Week programme", variant: "mid" },
            { value: "2", label: "Prototype iterations", variant: "light" },
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "I scoped the project end-to-end: ethnographic desk research, competitive audit of global home fragrance, form exploration, CMF development, and a working prototype with vendor-ready documentation.",
          ],
        },
        {
          type: "pullquote",
          text: "I want something that smells like home — not like a hotel lobby trying to be exotic.",
          source: "User interview · Week 2",
        },
        {
          type: "findings",
          items: [
            {
              num: "A",
              label: "Tension 01",
              title: "Heritage vs. novelty",
              body: "Users rejected overt cultural motifs on surfaces but responded to material honesty — ceramic, woven fibre, unlacquered wood.",
            },
            {
              num: "B",
              label: "Tension 02",
              title: "Ritual vs. convenience",
              body: "Traditional fragrance use involves preparation time. The set needed a low-friction daily ritual without losing the sense of ceremony.",
            },
            {
              num: "C",
              label: "Tension 03",
              title: "Refill economics",
              body: "Premium sets fail when refills are proprietary and expensive. Open refill architecture became a non-negotiable design constraint.",
            },
          ],
        },
      ],
    },
    research: {
      eyebrow: "02 — Research",
      title: "Scent memory",
      titleEm: "and shelf context",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Research combined heritage fragrance mapping, home visit observations, and a competitive audit of global lifestyle brands — Diptyque, Aesop, local Thai artisan lines — to understand where HomHuan could sit without pastiche.",
          ],
        },
        {
          type: "artifact",
          variant: "audit-map",
          label: "Artifact · Heritage-to-shelf map",
          caption:
            "Matrix plotting ritual complexity, material language, and price tier across Thai traditional practice and contemporary home fragrance competitors.",
          captionMeta: "Research board · Week 3",
        },
        {
          type: "twoCol",
          items: [
            {
              label: "Heritage mapping",
              body: "Three scent pillars emerged: smoke (incense lineage), herbal (compress and garden), floral (garland and bloom). Each informed a refill family, not a separate product line.",
            },
            {
              label: "Shelf audit",
              body: "International brands win on silhouette consistency and matte material restraint. Local artisan lines win on story — but often lose on repeat-purchase refill logic.",
            },
          ],
        },
        {
          type: "annotation",
          text: "The capstone jury emphasised production feasibility — every formal decision needed a path to ceramic slip-casting or spun aluminium, not just a beautiful render.",
        },
      ],
    },
    concept: {
      eyebrow: "03 — Concept",
      title: "Vessel as",
      titleEm: "quiet ritual",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Early concepts ranged from temple-arch silhouettes to modular stacking towers. The winning direction stripped metaphor from the exterior and moved heritage expression into scent naming, refill graphics, and the unboxing sequence.",
          ],
        },
        {
          type: "process",
          items: [
            {
              num: "01",
              title: "Form exploration",
              body: "Twenty-plus sketches and three foam models tested grip, refill access, and shelf footprint.",
            },
            {
              num: "02",
              title: "Mechanism design",
              body: "Wick-and-reservoir system designed for user refill without tools — twist-lock base, labelled fill line.",
            },
            {
              num: "03",
              title: "CMF direction",
              body: "Matte stoneware body, brass accent ring, woven fibre coaster — materials that age gracefully.",
            },
            {
              num: "04",
              title: "Jury iteration",
              body: "Mid-review feedback tightened silhouette height and simplified the lid profile for mould feasibility.",
            },
          ],
        },
        {
          type: "callout",
          label: "Design principle",
          title: "Quiet on the outside",
          body: "Heritage lives in scent and ritual, not applied decoration. The vessel should read global-contemporary; the story unfolds after purchase.",
        },
      ],
    },
    craft: {
      eyebrow: "04 — Craft",
      title: "Material honesty",
      titleEm: "and CMF",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "CMF development paired matte stoneware glaze samples with brushed brass and hand-woven coaster prototypes. The palette stayed warm-neutral — ivory, clay, oxidised brass — so the object works in both Thai and international interiors.",
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "Typography on refill labels used bilingual hierarchy: Thai script for scent family name, Latin for note description. Type size and contrast tested at arm's length on a bathroom shelf.",
          ],
        },
        {
          type: "annotation",
          text: "Brass was specified as PVD-coated for humidity resistance — a lesson from early samples that tarnished unevenly in Bangkok apartment testing.",
        },
      ],
    },
    build: {
      eyebrow: "05 — Build",
      title: "Prototype to",
      titleEm: "production spec",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The final prototype combined 3D-printed internal mechanism parts with slip-cast ceramic body shells from a local workshop. Tolerances were documented for the twist-lock base and wick assembly.",
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "Deliverables included exploded-view drawings, CMF specification sheets, refill packaging dieline, and a capstone presentation board tracing research through final form.",
          ],
        },
        {
          type: "callout",
          label: "Solo scope",
          title: "End-to-end ownership",
          body: "As sole designer, I owned research synthesis, form development, prototyping coordination, and jury presentation — with faculty critique at weeks 8 and 14.",
        },
      ],
    },
    outcome: {
      eyebrow: "06 — Outcome",
      title: "Capstone",
      titleEm: "delivered",
      blocks: [
        {
          type: "outcomes",
          items: [
            {
              value: "1",
              label: "Working prototype",
              body: "Full-scale vessel with functional wick mechanism and refill cycle demonstrated at final jury.",
            },
            {
              value: "3",
              label: "Scent refill families",
              body: "Smoke, herbal, and floral pillars each with label system and fill documentation.",
            },
            {
              value: "✓",
              label: "Production-ready CMF",
              body: "Glaze, brass, and fibre specs handed off with vendor notes for ceramic and metal finishing.",
            },
          ],
        },
        {
          type: "prose",
          paragraphs: [
            "HomHuan received strong jury feedback on research depth and material restraint. The project clarified my interest in translating cultural context through object behaviour and material — not surface graphics alone.",
          ],
        },
        {
          type: "reflections",
          items: [
            "I'd prototype the refill mechanism earlier — internal tolerances drove more iteration than the exterior form.",
            "I'd photograph the object in real Thai homes, not just studio setups. Context shots would strengthen the heritage narrative.",
            "Solo capstone taught me to time-box exploration — twenty concepts are useful, but three resolved models move the jury conversation forward.",
            "I'd document humidity testing from week one. Material failures in local climate would have been caught sooner.",
          ],
        },
        {
          type: "callout",
          label: "The one thing",
          title: "Ritual without theatre",
          body: "The best heritage products don't announce themselves. HomHuan's lesson: design the daily gesture — uncap, refill, place — and let scent carry the memory.",
        },
      ],
    },
  },
} satisfies MajorCaseStudy;

export default homhuanCaseStudy;
