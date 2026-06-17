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
  liveUrl?: string;
  sourceUrl?: string;
  coverImage?: { src: string; alt: string }
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
    coverImage: { src: "/projects/quiz-game/quiz-game-cover.png", alt: "Australia Call cover image" },
  },
  {
    id: 2,
    slug: "dementia-app",
    title: "Dementia App",
    description:
      "A dementia app that helps people with dementia stay connected with their loved ones.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    tone: "secondary",
    workTab: "product",
    caseStudyKind: "major",
    yearLabel: "2024 · Research",
    liveUrl: "https://dementia-app.com",
    sourceUrl: "https://github.com/yourusername/dementia-app",
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
    yearLabel: "2024 · Product",
    liveUrl: "https://family-recipes.app",
    sourceUrl: "https://github.com/yourusername/recipe",
  },
  {
    id: 4,
    slug: "homhuan",
    title: "HomHuan",
    description:
      "Thai heritage translated into a modern home fragrance set — solo capstone industrial design project.",
    technologies: ["Industrial design", "CMF", "Prototyping"],
    tone: "primary",
    workTab: "industrial",
    caseStudyKind: "major",
    yearLabel: "2024 · Capstone",
  },
  {
    id: 5,
    slug: "bsb",
    title: "BSB Dessert Bar",
    description:
      "Signature dessert shape and matching fork for a fine dessert bar in a Thai tourist city.",
    technologies: ["Industrial design", "Form design", "CAD"],
    tone: "secondary",
    workTab: "industrial",
    caseStudyKind: "minor",
    yearLabel: "2023 · Industrial",
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
    yearLabel: "2023 · Retail",
  },
  {
    id: 7,
    slug: "flom",
    title: "FloM Packaging",
    description:
      "Alternative graphic style for a secondary product packaging line under an established brand.",
    technologies: ["Graphic design", "Packaging", "Brand extension"],
    tone: "primary",
    workTab: "graphic",
    caseStudyKind: "minor",
    yearLabel: "2022 · Packaging",
  },
  {
    id: 8,
    slug: "bhae",
    title: "Bhae Skincare",
    description:
      "Packaging direction and design for a century-old traditional skincare brand.",
    technologies: ["Packaging design", "Print", "Heritage brand"],
    tone: "secondary",
    workTab: "pack",
    caseStudyKind: "minor",
    yearLabel: "2022 · Packaging",
  },
  {
    id: 9,
    slug: "bhup",
    title: "Bhup Product Line",
    description:
      "Friendly graphic design and illustration for a local business sub-brand.",
    technologies: ["Illustration", "Label design", "Brand"],
    tone: "tertiary",
    workTab: "graphic",
    caseStudyKind: "minor",
    yearLabel: "2022 · Illustration",
  },
  {
    id: 10,
    slug: "timber",
    title: "Timber Catalog",
    description:
      "Multimedia catalog for a wood styling company — layout, 3D renders, retouching, and print.",
    technologies: ["Catalog", "3D rendering", "Print production"],
    tone: "primary",
    workTab: "graphic",
    caseStudyKind: "minor",
    yearLabel: "2021 · Catalog",
  },
  {
    id: 11,
    slug: "thai-h",
    title: "Thai H",
    description:
      "Infographic book on Thai aroma ingredients — all illustration and graphics authored by hand.",
    technologies: ["Illustration", "Editorial", "Infographic"],
    tone: "secondary",
    workTab: "graphic",
    caseStudyKind: "minor",
    yearLabel: "2021 · Editorial",
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
    yearLabel: "2023 · Structure",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
