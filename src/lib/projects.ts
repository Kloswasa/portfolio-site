export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  gradientFrom: string;
  gradientTo: string;
  liveUrl?: string;
  sourceUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with Next.js, Stripe, and PostgreSQL.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    gradientFrom: "from-blue-400",
    gradientTo: "to-purple-500",
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/yourusername/project"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    gradientFrom: "from-green-400",
    gradientTo: "to-blue-500",
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/yourusername/project"
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    gradientFrom: "from-purple-400",
    gradientTo: "to-pink-500",
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/yourusername/project"
  }
]; 