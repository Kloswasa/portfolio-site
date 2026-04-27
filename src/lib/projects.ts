import type { BadgeTone } from "@/src/components/ui/Badge";

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  tone: BadgeTone;
  liveUrl?: string;
  sourceUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "quiz-game",
    title: "Australia Calls",
    description: "A quiz game that helps new Australians learn about the country and its culture.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    tone: "primary",
    liveUrl: "https://quiz-game.com",
    sourceUrl: "https://github.com/yourusername/quiz-game",
  },
  {
    id: 2,
    slug: "dementia-app",
    title: "Dementia App",
    description: "A dementia app that helps people with dementia stay connected with their loved ones.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    tone: "secondary",
    liveUrl: "https://dementia-app.com",
    sourceUrl: "https://github.com/yourusername/dementia-app",
  },
  {
    id: 3,
    slug: "homeland-flavour",
    title: "Homeland Flavour",
    description: "A food delivery app that allows users to order food from their favorite restaurants.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    tone: "tertiary",
    liveUrl: "https://homeland-flavour.com",
    sourceUrl: "https://github.com/yourusername/homeland-flavour",
  },
];
