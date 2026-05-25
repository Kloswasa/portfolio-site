import Link from "next/link";
import { siteConfig } from "@/src/lib/config";
import { projects } from "@/src/lib/projects";
import { FeaturedProjectStagger } from "@/src/components/FeaturedProjectStagger";
import {
  SnapSectionReveal,
  SnapItem,
} from "@/src/components/SnapSectionReveal";


export const metadata = {
  title: "Home",
  description: siteConfig.tagline,
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
   

      {/* ── Hero ── */}
      <section id="hero">
        <div
          className="relative flex min-h-[calc(100dvh-4rem)] flex-col overflow-hidden"
          style={{
            background: "var(--color-header-bg)",
            borderBottom: "3px solid var(--color-accent)",
          }}
        >
          <WavePattern />

          <SnapSectionReveal
            className="relative mx-auto flex w-full max-w-[960px] flex-1 flex-col justify-center px-16 py-12 sm:py-16"
            amount={0.2}
          >
            <SnapItem className="card flex flex-col gap-2 p-12">
              <SnapItem as="div">
                <span className="eyebrow">{siteConfig.title}</span>
              </SnapItem>

              <SnapItem as="div">
                <h1 className="mt-3 text-heading-4xl font-heading text-text leading-[1.15] tracking-[-0.5px]">
                  Portfolio
                </h1>
              </SnapItem>

              <SnapItem as="div">
                <p
                  className="mt-4 max-w-prose font-body text-base leading-relaxed"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {siteConfig.tagline}
                </p>
              </SnapItem>

              <SnapItem as="div" className="mt-8 flex flex-wrap gap-4">
                <Link className="btn btn-gold" href="/work">
                  View Work
                </Link>
                <Link className="btn btn-outline" href="/about">
                  About Me
                </Link>
              </SnapItem>
            </SnapItem>
          </SnapSectionReveal>
        </div>
      </section>

      {/* ── Featured ── */}
      <section id="featured">
        <SnapSectionReveal className="mx-auto max-w-[960px] px-10 py-16">
          <SnapItem as="header">
            <span className="eyebrow">Featured</span>
            <h2 className="text-heading-2xl text-text">
              Things I have been weaving.
            </h2>
          </SnapItem>

          <SnapItem>
            <FeaturedProjectStagger projects={featured} />
          </SnapItem>
        </SnapSectionReveal>
      </section>

      {/* ── About ── */}
      <section id="about">
        <SnapSectionReveal className="mx-auto max-w-[960px] px-10 py-16">
          <SnapItem>
            <div className="flex items-center gap-4">
              <hr className="divider flex-1" />
              <span className="section-label m-0">About</span>
              <hr className="divider flex-1" />
            </div>
          </SnapItem>

          <section className="mt-10 grid items-center gap-8 md:grid-cols-2 md:gap-10">
            <SnapItem>
              <span className="eyebrow">The short version</span>
              <h2 className="text-heading-2xl text-text">{siteConfig.about.shortHeading}</h2>
              <p className="mt-4 max-w-xl font-body text-base font-light leading-relaxed text-text-muted">
                {siteConfig.about.shortDescription}
              </p>
              <div className="mt-6">
                <Link className="btn btn-secondary" href="/about">
                  Read more →
                </Link>
              </div>
            </SnapItem>

            <SnapItem>
              <div
                className="relative overflow-hidden border border-border-strong p-7 text-text-inverse"
                style={{ background: "var(--color-header-bg)" }}
              >
                <WavePattern />
                <div className="relative">
                  <span className="eyebrow">Currently</span>
                  <h3 className="text-heading-xl text-text-inverse">
                    {siteConfig.about.availabilityHeading}
                  </h3>
                  <p className="mt-3 max-w-prose font-body text-sm leading-relaxed text-text-muted">
                    {siteConfig.about.availabilityDescription}
                  </p>
                  <div className="mt-6">
                    <a className="btn btn-gold" href={`mailto:${siteConfig.email}`}>
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>
            </SnapItem>
          </section>
        </SnapSectionReveal>
      </section>
    </main>
  );
}
