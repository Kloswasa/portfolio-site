import Link from "next/link";
import { projects } from "@/src/lib/projects";
import ProjectCard from "@/src/components/ProjectCard";
import { ScrollReveal } from "@/src/components/ScrollReveal";

export const metadata = {
  title: "Home",
  description: "Portfolio home.",
};

function WavePattern() {
  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <g
        stroke="var(--color-border-strong)"
        strokeWidth="0.8"
        fill="none"
        opacity="0.12"
      >
        <path d="M-40 50  Q160 10  360 50  Q560 90  760 50  Q960 10  1160 50  Q1360 90  1560 50" />
        <path d="M-40 100 Q160 60  360 100 Q560 140 760 100 Q960 60  1160 100 Q1360 140 1560 100" />
        <path d="M-40 150 Q160 110 360 150 Q560 190 760 150 Q960 110 1160 150 Q1360 190 1560 150" />
        <path d="M-40 200 Q160 160 360 200 Q560 240 760 200 Q960 160 1160 200 Q1360 240 1560 200" />
        <path d="M-40 250 Q160 210 360 250 Q560 290 760 250 Q960 210 1160 250 Q1360 290 1560 250" />
        <path d="M-40 300 Q160 260 360 300 Q560 340 760 300 Q960 260 1160 300 Q1360 340 1560 300" />
        <path d="M-40 350 Q160 310 360 350 Q560 390 760 350 Q960 310 1160 350 Q1360 390 1560 350" />
        <path d="M-40 400 Q160 360 360 400 Q560 440 760 400 Q960 360 1160 400 Q1360 440 1560 400" />
      </g>
    </svg>
  );
}

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <main>
      {/* ── Hero: indigo.900 bg + gold accent bar + wave pattern ── */}
      <ScrollReveal
        as="section"
        revealOnScroll={false}
        className="relative flex min-h-[calc(100dvh-4rem)] flex-col overflow-hidden"
        style={{
          background: "var(--color-header-bg)",
          borderBottom: "3px solid var(--color-accent)",
        }}
      >
        <WavePattern />

        <div className="relative mx-auto flex w-full max-w-[960px] flex-1 flex-col justify-center px-10 py-12 sm:py-16">
          <div className="card flex flex-col gap-2 p-6">
            <span className="eyebrow">Product Designer &amp; Developer</span>

            <h1 className="mt-3 text-heading-4xl font-heading text-text leading-[1.15] tracking-[-0.5px]">
              Portfolio
            </h1>

            <p
              className="mt-4 max-w-prose font-body text-base leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              I design thoughtful interfaces and build them with a token-driven
              system — balancing craft, accessibility, and performance.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link className="btn btn-gold" href="/work">
                View Work
              </Link>
              <Link className="btn btn-outline" href="/about">
                About Me
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ── Featured (Indigo & Gold structure) ── */}
      <div className="mx-auto max-w-[960px] px-10 py-16">
        <ScrollReveal as="div">
          <header>
            <span className="eyebrow">
              Featured
            </span>
            <h2 className="text-heading-2xl text-text">Things I have been weaving.</h2>
          </header>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                tone={project.tone}
                liveUrl={project.liveUrl}
                sourceUrl={project.sourceUrl}
                href={`/work/${project.slug}`}
              />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal as="div" className="mt-16">
          <div className="flex items-center gap-4">
            <hr className="divider flex-1" />
            <span className="section-label m-0">About</span>
            <hr className="divider flex-1" />
          </div>

          <section className="mt-10 grid items-center gap-8 md:grid-cols-2 md:gap-10">
            <div>
              <span className="eyebrow">
                The short version
              </span>
              <h2 className="text-heading-2xl text-text">I make small, considered tools.</h2>
              <p className="mt-4 max-w-xl font-body text-base font-light leading-relaxed text-text-muted">
                Eight years designing for small studios and large platforms. Currently independent —
                quietly available for product work, editorial, and the occasional creative-code
                commission.
              </p>
              <div className="mt-6">
                <Link className="btn btn-secondary" href="/about">
                  Read more →
                </Link>
              </div>
            </div>

            <div
              className="relative overflow-hidden border border-border-strong p-7 text-text-inverse"
              style={{ background: "var(--color-header-bg)" }}
            >
              <WavePattern />
              <div className="relative">
                <span className="eyebrow">
                  Currently
                </span>
                <h3 className="text-heading-xl text-text-inverse ">Open to product design contracts.</h3>
                <p className="mt-3 max-w-prose font-body text-sm leading-relaxed text-text-muted">
                  Two-week minimums. Brooklyn / remote. Email is the best way.
                </p>
                <div className="mt-6">
                  <a className="btn btn-gold" href="mailto:hello@klaus.com">
                    hello@klaus.com
                  </a>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </main>
  );
}
