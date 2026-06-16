import { WorkCard } from "@/src/components/WorkCard";
import type { GalleryProject } from "@/src/lib/gallery/types";

interface GalleryGridProps {
  projects: GalleryProject[];
}

export function GalleryGrid({ projects }: GalleryGridProps) {
  if (projects.length === 0) {
    return (
      <section className="gallery-grid gallery-grid--empty">
        <p className="gallery-grid__empty">No entries match this filter.</p>
      </section>
    );
  }

  return (
    <section className="gallery-grid" aria-label="Gallery projects">
      <div className="gallery-grid__inner">
        {projects.map((project) => (
          <WorkCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
