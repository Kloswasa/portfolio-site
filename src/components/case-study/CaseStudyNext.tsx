import Link from "next/link";
import {
  SnapItem,
  SnapSectionReveal,
} from "@/src/components/SnapSectionReveal";
import { CASE_STUDY_INNER } from "@/src/components/case-study/constants";
import type { Project } from "@/src/lib/projects";

export function CaseStudyNext({ nextProject }: { nextProject: Project }) {
  return (
    <section id="next">
      <SnapSectionReveal className={CASE_STUDY_INNER} amount={0.3}>
        <SnapItem>
          <span className="text-accent-dark font-body text-xs font-bold uppercase tracking-[0.14em]">
            Next
          </span>
          <h2 className="mt-4 text-heading-2xl">→ next project</h2>
        </SnapItem>
        <SnapItem>
          <p className="mt-4 font-body text-text-muted">
            Up next: <span className="text-text">{nextProject.title}</span>
          </p>
          <div className="mt-6">
            <Link className="btn btn-navy" href={`/work/${nextProject.slug}`}>
              Read next case study
            </Link>
          </div>
        </SnapItem>
      </SnapSectionReveal>
    </section>
  );
}
