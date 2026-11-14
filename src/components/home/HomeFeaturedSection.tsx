import { FeaturedProjectStagger } from "@/src/components/home/FeaturedProjectStagger";
import {
  SnapItem,
  SnapSectionReveal,
} from "@/src/components/motion/SnapSectionReveal";
import { getFeaturedWorkCards } from "@/src/lib/work/data";

const SECTION_NUMBER = "02";
const FEATURED_COUNT = 3;

export function HomeFeaturedSection() {
  const featured = getFeaturedWorkCards(FEATURED_COUNT);

  return (
    <section id="featured" data-snap-section="" className="home-featured">
      <SnapSectionReveal className="home-section__inner home-featured__inner">
        <p className="home-section__watermark" aria-hidden="true">
          {SECTION_NUMBER}
        </p>

        <div className="home-featured__content">
          <SnapItem className="home-featured__intro">
            <h2 className="home-section__heading">
              Things I have <em>curated  </em>  for you.
            </h2>
          </SnapItem>

          <SnapItem className="home-featured__mosaic">
            <FeaturedProjectStagger projects={featured} />
          </SnapItem>
        </div>
      </SnapSectionReveal>
    </section>
  );
}
