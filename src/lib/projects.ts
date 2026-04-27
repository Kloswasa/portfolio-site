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
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, Stripe, and PostgreSQL.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    tone: "primary",
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/yourusername/project",
  },
  {
    id: 2,
    slug: "project-2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    tone: "secondary",
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/yourusername/project",
  },
  {
    id: 3,
    slug: "project-3",
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    tone: "tertiary",
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/yourusername/project",
  },
];
