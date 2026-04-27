import Link from "next/link";
import { CopyButton } from "@/components/ui/CopyButton";
import Header from "@/src/components/Header";
import AnimatedSection from "@/src/components/AnimatedSection";
import ProjectCard from "@/src/components/ProjectCard";
import ContactForm from "@/src/components/ContactForm";
import { projects } from "@/src/lib/projects";

export const metadata = {
  title: "Components",
  description: "UI component gallery for the portfolio site.",
};

function SectionShell({
  id,
  title,
  filePath,
  children,
}: {
  id: string;
  title: string;
  filePath: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="card scroll-mt-24 p-8">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h2 className="text-heading-2xl">{title}</h2>
        <span className="font-mono text-xs text-text-muted">{filePath}</span>
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}

export default function ComponentsPage() {
  const sample = projects[0]!;

  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-6 pb-16 pt-20">
        <header id="about" className="max-w-3xl scroll-mt-24">
          <span className="text-accent-dark font-body text-xs font-bold uppercase tracking-[0.14em]">
            UI catalog
          </span>
          <h1 className="mt-4 text-heading-4xl md:text-heading-5xl">Components</h1>
          <p className="mt-4 font-body text-lg font-light text-text-muted">
            All reusable pieces in one place. The fixed header above is part of this
            route—its About / Projects / Contact links scroll to the matching sections
            on this page.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link className="btn btn-navy" href="/">
              Home
            </Link>
            <Link className="btn btn-outline" href="/tokens">
              Design tokens
            </Link>
          </div>
        </header>

        <div className="mt-12 grid gap-10">
          <SectionShell
            id="header"
            title="Header"
            filePath="src/components/Header.tsx"
          >
            <p className="font-body text-text-muted">
              Sticky top navigation. Shown at the top of this screen; links target
              sections on this page when the corresponding anchors exist.
            </p>
          </SectionShell>

          <SectionShell
            id="copy-button"
            title="CopyButton"
            filePath="components/ui/CopyButton.tsx"
          >
            <div className="flex flex-wrap items-center gap-4 rounded-none border border-border-subtle bg-bg p-5">
              <p className="font-mono text-sm text-text">Sample token value to copy</p>
              <CopyButton text="var(--color-accent)" />
            </div>
          </SectionShell>

          <SectionShell
            id="animated-section"
            title="AnimatedSection"
            filePath="src/components/AnimatedSection.tsx"
          >
            <p className="mb-6 font-body text-text-muted">
              Fades in when scrolled into view (intersection observer).
            </p>
            <div className="rounded-none border border-dashed border-border-subtle p-2">
              <AnimatedSection>
                <div className="bg-surface p-8 text-center">
                  <p className="font-body text-text">
                    This block animates in on first view.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </SectionShell>

          <SectionShell
            id="projects"
            title="ProjectCard"
            filePath="src/components/ProjectCard.tsx"
          >
            <p className="mb-6 font-body text-text-muted">
              Project teaser with gradient header, tags, and optional links.
            </p>
            <div className="max-w-lg">
              <ProjectCard
                title={sample.title}
                description={sample.description}
                technologies={sample.technologies}
                gradientFrom={sample.gradientFrom}
                gradientTo={sample.gradientTo}
                liveUrl={sample.liveUrl}
                sourceUrl={sample.sourceUrl}
              />
            </div>
          </SectionShell>

          <SectionShell
            id="contact"
            title="ContactForm"
            filePath="src/components/ContactForm.tsx"
          >
            <p className="mb-6 font-body text-text-muted">
              Client-side form with loading and success / error states (demo uses a
              simulated submit).
            </p>
            <ContactForm />
          </SectionShell>
        </div>
      </main>
    </>
  );
}
