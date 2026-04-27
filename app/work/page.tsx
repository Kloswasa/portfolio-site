import ProjectCard from "@/src/components/ProjectCard";
import { projects } from "@/src/lib/projects";

export const metadata = {
  title: "Work",
  description: "All work and case studies.",
};

export default function WorkPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-16 pt-20">
      <header className="max-w-3xl">
        <span className="text-accent-dark font-body text-xs font-bold uppercase tracking-[0.14em]">
          All work
        </span>
        <h1 className="mt-4 text-heading-4xl md:text-heading-5xl">Work</h1>
        <p className="mt-4 font-body text-lg font-light text-text-muted">
          Product case studies, packs, and visual explorations.
        </p>
      </header>

      <section className="mt-12">
        <span className="section-label">Product — hero case studies</span>
        <hr className="divider" />
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              tone={project.tone}
              liveUrl={project.liveUrl}
              sourceUrl={project.sourceUrl}
              href={`/work/${project.slug}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

