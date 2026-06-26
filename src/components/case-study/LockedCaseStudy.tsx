import Link from "next/link";
import { ConfidentialUnlockForm } from "@/src/components/case-study/ConfidentialUnlockForm";
import { siteConfig } from "@/src/lib/config";
import { WORK_TABS } from "@/src/lib/projects";
import type { Project } from "@/src/lib/projects";

const CLASSIFICATION = Object.fromEntries(
  WORK_TABS.map((tab) => [tab.key, tab.classification]),
) as Record<string, string>;

export function LockedCaseStudy({ project }: { project: Project }) {
  const classification = CLASSIFICATION[project.workTab] ?? "Design";
  const [yearValue, yearLabel = ""] = project.yearLabel.split(" · ");

  return (
    <article className="locked-study">
      <div className="locked-study__frame">
        <p className="locked-study__eyebrow">Confidential record</p>

        <div className="locked-study__stamp" aria-hidden="true">
          <span className="locked-study__stamp-lock">&#128274;</span>
          <span>Under NDA</span>
        </div>

        <h1 className="locked-study__title">{project.title}</h1>

        <dl className="locked-study__meta">
          <div className="locked-study__meta-item">
            <dt>Discipline</dt>
            <dd>{classification}</dd>
          </div>
          <div className="locked-study__meta-item">
            <dt>{yearLabel || "Year"}</dt>
            <dd>{yearValue}</dd>
          </div>
        </dl>

        <p className="locked-study__summary">{project.description}</p>

        <p className="locked-study__note">
          The full record for this project is held under a non-disclosure
          agreement. Imagery, process, and outcomes are available to review on
          request.
        </p>

        {project.technologies.length > 0 ? (
          <ul className="locked-study__tags">
            {project.technologies.map((tag) => (
              <li key={tag} className="locked-study__tag">
                {tag}
              </li>
            ))}
          </ul>
        ) : null}

        <ConfidentialUnlockForm />

        <div className="locked-study__actions">
          <a
            href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(
              `Access request — ${project.title}`,
            )}`}
            className="locked-study__cta locked-study__cta--primary"
          >
            Request access
          </a>
          <Link href="/work" className="locked-study__cta">
            Back to the archive
          </Link>
        </div>
      </div>
    </article>
  );
}
