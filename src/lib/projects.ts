import type { BadgeTone } from "@/src/components/ui/Badge";
import type { CaseStudyKind } from "@/src/lib/case-studies/types";

export type { CaseStudyKind };

/** Work index tabs — matches Indigo & Gold IA (Product · Pack · Graphic). */
export type WorkTab = "product" | "pack" | "graphic";

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
  liveUrl?: string;
  sourceUrl?: string;
}

export const projects: Project[] = [
  
  {
    id: 1,
    slug: "quiz-game",
    title: "Australia Calls",
    description:
      "A quiz game that helps new Australians learn about the country and its culture.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    tone: "primary",
    workTab: "product",
    caseStudyKind: "major",
    liveUrl: "https://quiz-game.com",
    sourceUrl: "https://github.com/yourusername/quiz-game",
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
    liveUrl: "https://family-recipes.app",
    sourceUrl: "https://github.com/yourusername/recipe",
  },
  {
    id: 4,
    slug: "tea-gift-box",
    title: "Tea Gift Box",
    description: "Limited-edition packaging for a single-origin tea trio.",
    technologies: ["Packaging", "Print", "Foil stamp"],
    tone: "primary",
    workTab: "pack",
    caseStudyKind: "minor",
  },
  {
    id: 5,
    slug: "spice-tin",
    title: "Spice Tin Rebrand",
    description: "Shelf-forward tins for a small-batch spice line.",
    technologies: ["Packaging", "Label", "3D mockup"],
    tone: "secondary",
    workTab: "pack",
    caseStudyKind: "minor",
  },
  {
    id: 6,
    slug: "festival-poster",
    title: "Lantern Festival Poster",
    description: "Event poster series for a night market cultural program.",
    technologies: ["Poster", "Illustration", "Print"],
    tone: "primary",
    workTab: "graphic",
    caseStudyKind: "minor",
  },
  {
    id: 7,
    slug: "editorial-zine",
    title: "Migration Stories Zine",
    description: "Editorial layout for a 24-page risograph zine.",
    technologies: ["Editorial", "Typography", "Risograph"],
    tone: "tertiary",
    workTab: "graphic",
    caseStudyKind: "minor",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
