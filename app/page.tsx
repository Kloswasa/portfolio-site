import { siteConfig } from "@/src/lib/config";
import { getFeaturedWorkCards } from "@/src/lib/work/data";
import { FeaturedProjectStagger } from "@/src/components/FeaturedProjectStagger";
import { HeroSection } from "@/src/components/HeroSection";
import { HomeAboutSection } from "@/src/components/HomeAboutSection";
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

      <HomeAboutSection />
    </main>
  );
}
