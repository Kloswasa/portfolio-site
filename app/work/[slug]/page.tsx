import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/src/lib/projects";
import { Badge } from "@/src/components/ui/Badge";
import { CaseStudySectionTabs } from "@/src/components/CaseStudySectionTabs";

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  if (!project) notFound();

  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <main className="mx-auto max-w-5xl px-6 pb-16 pt-20">
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
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
        </div>

        <CaseStudySectionTabs />

        <section id="hook" className="panel scroll-mt-28 p-10">
          <span className="text-accent-dark font-body text-xs font-bold uppercase tracking-[0.14em]">
            01 Hook
          </span>
          <h1 className="mt-4 text-heading-4xl md:text-heading-5xl text-balance">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl font-body text-lg font-light text-text-muted">
            {project.description}
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <div className="h-[280px] w-full rounded-none border border-border-subtle bg-elevated" aria-hidden />
            <div className="flex flex-col gap-3">
              <div className="panel p-6">
                <h2 className="text-heading-xl">Quick facts</h2>
                <dl className="mt-4 grid gap-3 text-sm">
                  <div className="grid gap-1">
                    <dt className="font-mono text-xs text-text-muted">Role</dt>
                    <dd className="font-body text-text">Product design + frontend</dd>
                  </div>
                  <div className="grid gap-1">
                    <dt className="font-mono text-xs text-text-muted">Scope</dt>
                    <dd className="font-body text-text">Discovery → build → ship</dd>
                  </div>
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
          </div>
        </section>

        <hr className="divider" />

        <section id="context" className="panel scroll-mt-28 p-10">
          <span className="text-accent-dark font-body text-xs font-bold uppercase tracking-[0.14em]">
            02 Context
          </span>
          <h2 className="mt-4 text-heading-2xl">Problem + role</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <span className="section-label">Problem</span>
              <hr className="divider" />
              <p className="mt-4 font-body text-text-muted">
                What was broken or missing, who it impacted, and why it mattered.
              </p>
            </div>
            <div>
              <span className="section-label">Role</span>
              <hr className="divider" />
              <p className="mt-4 font-body text-text-muted">
                Your responsibilities, partners, and constraints (time, tech, team).
              </p>
            </div>
          </div>
        </section>

        <hr className="divider" />

        <section id="process" className="panel scroll-mt-28 p-10">
          <span className="text-accent-dark font-body text-xs font-bold uppercase tracking-[0.14em]">
            03 Process
          </span>
          <h2 className="mt-4 text-heading-2xl">Research + decisions</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="panel p-6">
              <h3 className="text-heading-xl">Research</h3>
              <p className="mt-3 font-body text-text-muted">
                Inputs: interviews, analytics, competitive scan, constraints.
              </p>
            </div>
            <div className="panel p-6">
              <h3 className="text-heading-xl">Options</h3>
              <p className="mt-3 font-body text-text-muted">
                What you explored and the trade-offs.
              </p>
            </div>
            <div className="panel p-6">
              <h3 className="text-heading-xl">Decision</h3>
              <p className="mt-3 font-body text-text-muted">
                The chosen direction and why it won.
              </p>
            </div>
          </div>
        </section>

        <hr className="divider" />

        <section id="solution" className="panel scroll-mt-28 p-10">
          <span className="text-accent-dark font-body text-xs font-bold uppercase tracking-[0.14em]">
            04 Solution
          </span>
          <h2 className="mt-4 text-heading-2xl">Final design</h2>
          <div className="mt-6 grid gap-6">
            <div className="h-[360px] w-full rounded-none border border-border-subtle bg-elevated" aria-hidden />
            <div className="grid gap-6 md:grid-cols-2">
              <div className="panel p-6">
                <h3 className="text-heading-xl">What shipped</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 font-body text-text-muted">
                  <li>Key UI patterns and flows</li>
                  <li>Performance / accessibility wins</li>
                  <li>Design system alignment</li>
                </ul>
              </div>
              <div className="panel p-6">
                <h3 className="text-heading-xl">How it works</h3>
                <p className="mt-3 font-body text-text-muted">
                  Explain system behavior briefly (states, edge cases, content rules).
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        <section id="outcome" className="panel scroll-mt-28 p-10">
          <span className="text-accent-dark font-body text-xs font-bold uppercase tracking-[0.14em]">
            05 Outcome
          </span>
          <h2 className="mt-4 text-heading-2xl">Result + reflect</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="panel p-6">
              <h3 className="text-heading-xl">Results</h3>
              <p className="mt-3 font-body text-text-muted">
                Metrics, qualitative feedback, or launch outcomes.
              </p>
            </div>
            <div className="panel p-6">
              <h3 className="text-heading-xl">Learnings</h3>
              <p className="mt-3 font-body text-text-muted">
                What you’d repeat next time (and what you wouldn’t).
              </p>
            </div>
            <div className="panel p-6">
              <h3 className="text-heading-xl">Next steps</h3>
              <p className="mt-3 font-body text-text-muted">
                Follow-ups if you had more time.
              </p>
            </div>
          </div>
        </section>

        <hr className="divider" />

        <section id="next" className="panel scroll-mt-28 p-10">
          <span className="text-accent-dark font-body text-xs font-bold uppercase tracking-[0.14em]">
            Next
          </span>
          <h2 className="mt-4 text-heading-2xl">→ next project</h2>
          <p className="mt-4 font-body text-text-muted">
            Up next: <span className="text-text">{nextProject?.title}</span>
          </p>
          {nextProject && (
            <div className="mt-6">
              <Link className="btn btn-navy" href={`/work/${nextProject.slug}`}>
                Read next case study
              </Link>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

