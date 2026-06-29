import type { BadgeTone } from "@/src/components/ui/Badge";
import type { CaseStudyKind } from "@/src/lib/case-studies/types";

export type { CaseStudyKind };

/** Work index tabs — Product · Industrial · Pack · Graphic. */
export type WorkTab = "product" | "industrial" | "pack" | "graphic";

/** Single source for filter bar labels + card classification copy. */
export const WORK_TABS = [
  { key: "product", 
    filterLabel: "Product", 
    classification: "Product Design" ,
  },
  {
    key: "industrial",
    filterLabel: "Industrial",
    classification: "Industrial Design",
  },
  { key: "pack", 
    filterLabel: "Packaging", 
    classification: "Packaging Design" 
  },
  { key: "graphic", 
    filterLabel: "Graphic", 
    classification: "Graphic Design" 
  },
] as const satisfies ReadonlyArray<{
  key: WorkTab;
  filterLabel: string;
  classification: string;
}>;

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  tone: BadgeTone;
  /** Which tab on `/work` lists this project */
  workTab: WorkTab;
  /** Full major case study vs compact three-section minor format */
  caseStudyKind: CaseStudyKind;
  /** Card stamp, e.g. "2024 · Capstone" */
  yearLabel: string;
  /** Client sector / domain — used for work archive hero stats */
  industry: string;
  liveUrl?: string;
  sourceUrl?: string;
  coverImage?: { src: string; alt: string }
  /** Confidential / NDA work: shows a locked specimen instead of a full case study */
  confidential?: boolean;
  /** Case study registry slug when it differs from the public project slug */
  caseStudySlug?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "quiz-game",
    title: "Australia Call",
    description:
      "A personality quiz that helps newcomers to Australia find a travel style and a first trip that suits them.",
    technologies: ["Next.js", "Tailwind", "Prisma", "Figma", "Procreate"],
    tone: "primary",
    workTab: "product",
    caseStudyKind: "major",
    yearLabel: "2025 · Product",
    industry: "Travel",
    coverImage: { src: "/projects/quiz-game/quiz-game-cover.png", alt: "Australia Call cover image" },
  },
  {
    id: 2,
    slug: "dementia-app",
    title: "Dementia App",
    description:
      "A dementia app that helps people with dementia stay connected with their loved ones.",
    technologies: ["Figma", "User-centered design", "Research"],
    tone: "secondary",
    workTab: "product",
    caseStudyKind: "major",
    yearLabel: "2024 · Research",
    industry: "Healthcare",
    coverImage: { src: "/projects/dementia-app/dementia-app-cover.png", alt: "Dementia App cover image" },

  },
  {
    id: 3,
    slug: "recipe",
    title: "Family Recipes",
    description:
      "A recipe app for saving, sharing, and cooking family dishes across generations.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    tone: "tertiary",
    workTab: "product",
    caseStudyKind: "major",
    yearLabel: "2026 · Product",
    industry: "Food & beverage",
    liveUrl: "https://family-recipes.app",
    sourceUrl: "https://github.com/yourusername/recipe",
  },
  {
    id: 4,
    slug: "homhuan",
    title: "HomHuan",
    description:
      "Thai heritage translated into a modern home fragrance set — solo capstone industrial design project.",
    technologies: ["Industrial design", "Craftsmanship", "Branding"],
    tone: "primary",
    workTab: "industrial",
    caseStudyKind: "major",
    yearLabel: "2019 · Capstone",
    industry: "Home & lifestyle",
    coverImage: { src: "/projects/homhuan/homhuan-cover.png", alt: "HomHuan cover image" },
  },
  {
    id: 5,
    slug: "busaba",
    title: "Busaba Dessert Bar",
    description:
      "Signature dessert shape and matching fork for a fine dessert bar in a Thai tourist city.",
    technologies: ["Industrial design", "Form design", "CAD"],
    tone: "secondary",
    workTab: "industrial",
    caseStudyKind: "minor",
    yearLabel: "2021 · Industrial",
    industry: "Food & beverage",
    coverImage: { src: "/projects/busaba/busaba-cover.png", alt: "Busaba Dessert Bar cover image" },
  },
  {
    id: 6,
    slug: "kuendee",
    title: "Kuendee Booth",
    description:
      "Modular retail booth that reconfigures for product rotations and different mall branch plans.",
    technologies: ["Booth design", "Modular system", "Retail"],
    tone: "tertiary",
    workTab: "industrial",
    caseStudyKind: "minor",
    yearLabel: "2021 · Industrial",
    industry: "Retail",
    coverImage: { src: "/projects/kuendee/kuendee-cover.png", alt: "Kuendee Booth cover image" },
  },
  {
    id: 7,
    slug: "flomax",
    title: "Flomax kid's Packaging",
    description:
      "Alternative graphic style for a secondary product packaging line under an established brand.",
    technologies: ["Graphic design", "Packaging", "Brand extension"],
    tone: "primary",
    workTab: "graphic",
    caseStudyKind: "minor",
    yearLabel: "2021 · Graphic",
    industry: "Consumer health",
    coverImage: { src: "/projects/flomax/flomax-cover.png", alt: "Flomax Packaging cover image" },
  },
  {
    id: 8,
    slug: "bhaesaj",
    title: "Bhaesaj Skincare",
    description:
      "Packaging direction and design for a century-old traditional skincare brand.",
    technologies: ["Packaging design", "Design direction", "Heritage brand"],
    tone: "secondary",
    workTab: "pack",
    caseStudyKind: "minor",
    yearLabel: "2022 · Packaging",
    industry: "Beauty",
    // confidential: true,
    // caseStudySlug: "bhaesaj",
  },
  {
    id: 9,
    slug: "bupha",
    title: "Bupha",
    description:
      "Friendly graphic design and illustration for a local business sub-brand.",
    technologies: ["Illustration", "Packaging design"],
    tone: "tertiary",
    workTab: "graphic",
    caseStudyKind: "minor",
    yearLabel: "2021 · Graphic",
    industry: "Food & beverage",
    coverImage: { src: "/projects/bupha/bupha-cover.png", alt: "Bhup Product Line cover image" },
    // confidential: true,
    // caseStudySlug: "bupha",
  },
  {
    id: 10,
    slug: "jtimber",
    title: "JTimber Catalog",
    description:
      "Catalog for a wood styling company, including multimedia assets making, layout, 3D renders, retouching, and print.",
    technologies: ["Editorial", "3D rendering", "Printing production"],
    tone: "primary",
    workTab: "graphic",
    caseStudyKind: "minor",
    yearLabel: "2023 · Catalog",
    industry: "Building materials",
    coverImage: { src: "/projects/jtimber/jtimber-cover.png", alt: "JTimber Catalog cover image" },
    caseStudySlug: "jtimber",
  },
  {
    id: 11,
    slug: "thai-hom",
    title: "Thai Hom",
    description:
      "Infographic book on Thai aroma ingredients — all illustration and graphics authored by hand.",
    technologies: ["Illustration", "Editorial", "Infographic"],
    tone: "secondary",
    workTab: "graphic",
    caseStudyKind: "minor",
    yearLabel: "2019 · Editorial",
    industry: "Publishing",
    coverImage: { src: "/projects/thai-hom/thai-hom-cover.png", alt: "Thai Hom cover image" },
    caseStudySlug: "thaihom",
  },
  {
    id: 12,
    slug: "cio",
    title: "Cio",
    description:
      "Self-locking packaging structure that holds open at the perfect angle for picking product inside.",
    technologies: ["Packaging design", "Structural design", "Dieline"],
    tone: "tertiary",
    workTab: "pack",
    caseStudyKind: "minor",
    yearLabel: "2022 · Structure",
    industry: "Consumer goods",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Registry slug for case study content (public URL slug may differ). */
export function getCaseStudySlugForProject(project: Project): string {
  return project.caseStudySlug ?? project.slug;
}
