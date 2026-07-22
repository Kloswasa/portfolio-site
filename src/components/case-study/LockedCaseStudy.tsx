import Link from "next/link";
import { ConfidentialUnlockForm } from "@/src/components/case-study/ConfidentialUnlockForm";
import { getProjectLockCopy } from "@/src/lib/confidential/lock-status";
import { siteConfig } from "@/src/lib/config";
import { WORK_TABS } from "@/src/lib/projects";
import type { Project } from "@/src/lib/projects";

const CLASSIFICATION = Object.fromEntries(
  WORK_TABS.map((tab) => [tab.key, tab.classification]),
) as Record<string, string>;

export function LockedCaseStudy({ project }: { project: Project }) {
  const classification = CLASSIFICATION[project.workTab] ?? "Design";
  const [yearValue, yearLabel = ""] = project.yearLabel.split(" · ");
  const lockCopy = getProjectLockCopy(project.lockStatus);

  return (
    <article className="locked-study">
      <div className="locked-study__frame">
        <p className="locked-study__eyebrow">{lockCopy.eyebrow}</p>

        <div className="locked-study__stamp" aria-hidden="true">
          <span className="locked-study__stamp-lock"> </span>
          <span>{lockCopy.stamp}</span>
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

        <p className="locked-study__note">{lockCopy.note}</p>

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
              `Access request, ${project.title}`,
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
