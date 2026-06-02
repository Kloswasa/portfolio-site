import Link from "next/link";
import { Badge } from "@/src/components/ui/Badge";
import {
  SnapItem,
  SnapSectionReveal,
} from "@/src/components/SnapSectionReveal";
import { ImageBlock } from "@/src/components/case-study/blocks/ImageBlock";
import { CASE_STUDY_INNER } from "@/src/components/case-study/constants";
import type { CaseStudyHook as CaseStudyHookData } from "@/src/lib/case-studies/types";
import type { Project } from "@/src/lib/projects";

export function CaseStudyHook({
  project,
  hook,
}: {
  project: Project;
  hook: CaseStudyHookData;
}) {
  const { quickFacts, heroSrc, heroAlt } = hook;

  return (
    <section id="hook">
      <SnapSectionReveal className={CASE_STUDY_INNER} amount={0.2}>
        <SnapItem className="flex flex-wrap items-center justify-between gap-4">
          <Link className="btn btn-ghost" href="/work">
            ← Back to work
          </Link>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} tone={project.tone}>
                {tech}
              </Badge>
            ))}
          </div>
        </SnapItem>

        <SnapItem className="mt-8">
          <span className="text-accent-dark font-body text-xs font-bold uppercase tracking-[0.14em]">
            Hook
          </span>
          <h1 className="mt-4 text-heading-4xl md:text-heading-5xl text-balance">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl font-body text-lg font-light text-text-muted">
            {project.description}
          </p>
        </SnapItem>

        <SnapItem className="mt-8 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          {heroSrc ? (
            <ImageBlock
              src={heroSrc}
              alt={heroAlt ?? `${project.title} hero`}
              aspect="hero"
            />
          ) : (
            <div
              className="aspect-[16/10] min-h-[240px] w-full rounded-none border border-border-subtle bg-elevated"
              aria-hidden
            />
          )}
          <div className="flex flex-col gap-3">
            <div className="panel p-6">
              <h2 className="text-heading-xl">Quick facts</h2>
              <dl className="mt-4 grid gap-3 text-sm">
                <div className="grid gap-1">
                  <dt className="font-mono text-xs text-text-muted">Role</dt>
                  <dd className="font-body text-text">{quickFacts.role}</dd>
                </div>
                <div className="grid gap-1">
                  <dt className="font-mono text-xs text-text-muted">Scope</dt>
                  <dd className="font-body text-text">{quickFacts.scope}</dd>
                </div>
                {quickFacts.timeline && (
                  <div className="grid gap-1">
                    <dt className="font-mono text-xs text-text-muted">Timeline</dt>
                    <dd className="font-body text-text">{quickFacts.timeline}</dd>
                  </div>
                )}
              </dl>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {project.liveUrl && (
                <Link
                  className="btn btn-navy"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View live
                </Link>
              )}
              {project.sourceUrl && (
                <Link
                  className="btn btn-outline"
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Source code
                </Link>
              )}
            </div>
          </div>
        </SnapItem>
      </SnapSectionReveal>
    </section>
  );
}
