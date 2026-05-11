import Link from "next/link";
import { CopyButton } from "@/src/components/ui/CopyButton";
import { Badge } from "@/src/components/ui/Badge";
import { TabBarDemo } from "@/src/components/ui/TabBarDemo";
import AnimatedSection from "@/src/components/AnimatedSection";
import { ScrollReveal } from "@/src/components/ScrollReveal";
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
    <ScrollReveal as="section" id={id} className="panel scroll-mt-24 p-8">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h2 className="text-heading-2xl">{title}</h2>
        <span className="font-mono text-xs text-text-muted">{filePath}</span>
      </div>
      <div className="mt-8">{children}</div>
    </ScrollReveal>
  );
}

export default function ComponentsPage() {
  const sample = projects[0]!;

  return (
    <>
     
      <main className="mx-auto max-w-6xl px-6 pb-16 pt-20">
        <ScrollReveal
          as="header"
          id="about"
          className="max-w-3xl scroll-mt-24"
          revealOnScroll={false}
        >
          <span className="eyebrow">
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
        </ScrollReveal>

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
            id="utilities"
            title="CSS utilities (@utility)"
            filePath="app/globals.css"
          >
            <div className="grid gap-10">
              <section>
                <h3 className="text-heading-xl text-text">Buttons</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  <button type="button" className="btn btn-primary">
                    Primary
                  </button>
                  <button type="button" className="btn btn-gold">
                    Gold
                  </button>
                  <button type="button" className="btn btn-secondary">
                    Secondary
                  </button>
           
                  <button type="button" className="btn btn-outline">
                    Outline
                  </button>
                  <button type="button" className="btn btn-ghost">
                    Ghost
                  </button>
                  <button type="button" className="btn-text">
                    Text <span aria-hidden>›</span>
                  </button>
                </div>

                
              </section>

              <section>
                <h3 className="text-heading-xl text-text">Card</h3>
                <div className="mt-4 max-w-md">
                  <div className="card p-6">
                    <p className="font-body text-text">
                      Card utility: surface, border, and hover shadow.
                    </p>
                    <p className="mt-2 font-body text-text-muted">
                      Uses token-driven colors and shadows.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-heading-xl text-text">Panel</h3>
                <div className="mt-4 max-w-md">
                  <div className="panel p-6">
                    <p className="font-body text-text">
                      Panel utility: page-background surface, secondary border, static shadow.
                    </p>
                    <p className="mt-2 font-body text-text-muted">
                      No hover — use for chrome and long-form blocks; use{" "}
                      <span className="font-mono text-text">card</span> when hover depth helps.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-heading-xl text-text">Input</h3>
                <div className="mt-4 grid max-w-md gap-4">
                  <input className="input" placeholder="Input utility" />
                  <textarea className="input resize-y" rows={4} placeholder="Textarea utility" />
                </div>
              </section>

              <section>
                <h3 className="text-heading-xl text-text">Badges</h3>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <Badge tone="primary">Primary</Badge>
                  <Badge tone="secondary">Secondary</Badge>
                  <Badge tone="tertiary">Tertiary</Badge>
                </div>
              </section>

              <section>
                <h3 className="text-heading-xl text-text">Section label + divider</h3>
                <div className="mt-4 max-w-xl">
                  <span className="section-label">Section label</span>
                  <hr className="divider" />
                </div>
              </section>

              <section>
                <h3 className="text-heading-xl text-text">Eyebrow</h3>
                <p className="mt-1 max-w-xl font-body text-sm text-text-muted">
                  Accent mono kicker with a leading asterisk (via{" "}
                  <span className="font-mono text-text">&::before</span>). Uses class{" "}
                  <span className="font-mono text-text">eyebrow</span>, not{" "}
                  <span className="font-mono text-text">overline</span> — Tailwind’s{" "}
                  <span className="font-mono text-text">overline</span> is underline-style decoration
                  above text.
                </p>
                <div className="mt-4 max-w-xl">
                  <span className="eyebrow mb-3">Eyebrow / kicker</span>
                  <p className="font-body text-text">
                    Stack above headings with spacing utilities (
                    <span className="font-mono text-xs text-text-muted">mb-3</span>).
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-heading-xl text-text">Clamp-2</h3>
                <div className="mt-4 max-w-md rounded-none border border-border-subtle bg-bg p-5">
                  <p className="clamp-2 h-10 text-sm font-medium leading-5 text-text-muted">
                    This is a long example sentence intended to demonstrate the clamp-2 utility
                    which limits text to two lines and truncates overflow cleanly.
                  </p>
                </div>
              </section>
            </div>
          </SectionShell>

          <SectionShell
            id="tab-bar"
            title="TabBar"
            filePath="src/components/ui/TabBar.tsx"
          >
            <p className="mb-6 font-body text-text-muted">
              Indigo & Gold style tab list: full-width bottom rule, muted labels, active tab
              uses body text color with a gold bottom border. Pair with{" "}
              <span className="font-mono text-text">tab-bar</span> and{" "}
              <span className="font-mono text-text">tab</span> /{" "}
              <span className="font-mono text-text">tab-active</span> utilities in{" "}
              <span className="font-mono text-text">app/globals.css</span>.
            </p>
            <TabBarDemo />
          </SectionShell>

          <SectionShell
            id="copy-button"
            title="CopyButton"
            filePath="src/components/ui/CopyButton.tsx"
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
              Fades in when scrolled into view — same behavior as{" "}
              <span className="font-mono text-text">ScrollReveal</span> (Framer Motion{" "}
              <span className="font-mono text-text">whileInView</span>).
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
                tone={sample.tone}
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
