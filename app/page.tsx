import Link from "next/link";
import { siteConfig } from "@/src/lib/config";
import { getFeaturedWorkCards } from "@/src/lib/work/data";
import { FeaturedProjectStagger } from "@/src/components/FeaturedProjectStagger";
import { HeroSection } from "@/src/components/HeroSection";
import {
  SnapSectionReveal,
  SnapItem,
} from "@/src/components/SnapSectionReveal";


export const metadata = {
  title: "Home",
  description: siteConfig.tagline,
};


export default function HomePage() {
  const featured = getFeaturedWorkCards(3);



  return (
    <main>
   

      <HeroSection />

      {/* ── Featured ── */}
      <section id="featured" className="flex min-h-[calc(100dvh-4rem)] flex-col">
        <SnapSectionReveal className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-8 py-10 md:px-12 md:py-14">
          <SnapItem as="header" className="shrink-0">
            <span className="eyebrow">Featured</span>
            <h2 className="text-heading-2xl text-text">
              Things I have been weaving.
            </h2>
          </SnapItem>

          <SnapItem className="flex min-h-0 flex-1 flex-col pt-8">
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
