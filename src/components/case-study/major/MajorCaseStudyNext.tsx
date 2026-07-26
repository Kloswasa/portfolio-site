import Link from "next/link";
import {
  SnapItem,
  SnapSectionReveal,
} from "@/src/components/motion/SnapSectionReveal";
import { WorkCard } from "@/src/components/work/WorkCard";
import type { Project } from "@/src/lib/projects";
import { toWorkCardProject } from "@/src/lib/work/data";

export function MajorCaseStudyNext({
  nextProject,
  index,
}: {
  nextProject: Project;
  index: string;
}) {
  const cardIndex = Math.max(0, Number.parseInt(index, 10) - 1);
  const cardProject = toWorkCardProject(nextProject, cardIndex);

  return (
    <section className="cs-major__next" id="next">
      <SnapSectionReveal className="cs-major__next-inner" amount={0.2}>
        <SnapItem>
          <div className="cs-major__next-label">Next project</div>
       
        </SnapItem>
        <SnapItem className="cs-major__next-preview">
          <WorkCard project={cardProject} />
        </SnapItem>
      </SnapSectionReveal>
    </section>
  );
}
