import { WorkCard } from "@/src/components/WorkCard";
import type { WorkArchiveProject } from "@/src/lib/work/types";

interface WorkGridProps {
  projects: WorkArchiveProject[];
}

export function WorkGrid({ projects }: WorkGridProps) {
  if (projects.length === 0) {
    return (
      <section className="work-grid work-grid--empty">
        <p className="work-grid__empty">No entries match this filter.</p>
      </section>
    );
  }

  return (
    <section className="work-grid" aria-label="Work projects">
      <div className="work-grid__inner">
        {projects.map((project) => (
          <WorkCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
