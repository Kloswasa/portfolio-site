import Link from "next/link";
import {
  SnapItem,
  SnapSectionReveal,
} from "@/src/components/motion/SnapSectionReveal";
import type { Project } from "@/src/lib/projects";

function NextPreviewSvg() {
  return (
    <svg viewBox="0 0 400 300" width="320" xmlns="http://www.w3.org/2000/svg" className="relative z-[1] opacity-50" aria-hidden>
      <rect x="20" y="20" width="90" height="260" rx="1" fill="none" stroke="white" strokeWidth="0.6" opacity="0.3" />
      <rect x="30" y="36" width="70" height="8" rx="0.5" fill="white" opacity="0.2" />
      <rect x="30" y="54" width="70" height="28" rx="1" fill="white" opacity="0.08" />
      <rect x="130" y="20" width="250" height="260" rx="1" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2" />
      <rect x="148" y="36" width="160" height="14" rx="0.5" fill="white" opacity="0.2" />
      <rect x="148" y="62" width="214" height="70" rx="1" fill="white" opacity="0.05" />
      <path d="M160 120 L180 95 L210 110 L240 80 L270 100 L300 70 L330 90 L348 82" stroke="white" strokeWidth="0.8" fill="none" opacity="0.4" />
    </svg>
  );
}

export function MajorCaseStudyNext({
  nextProject,
  index,
}: {
  nextProject: Project;
  index: string;
}) {
  return (
    <section className="cs-major__next" id="next">
      <SnapSectionReveal amount={0.2}>
        <SnapItem>
          <div className="cs-major__next-label">Next project</div>
          <h2 className="cs-major__next-title">{nextProject.title}</h2>
          <p className="cs-major__next-meta">
            {index} · {nextProject.technologies.slice(0, 2).join(" · ")}
          </p>
          <Link className="cs-major__btn-next" href={`/work/${nextProject.slug}`}>
            View case study →
          </Link>
        </SnapItem>
        <SnapItem>
          <div className="cs-major__next-preview">
            <NextPreviewSvg />
          </div>
        </SnapItem>
      </SnapSectionReveal>
    </section>
  );
}
