import { GalleryHeroBotanical } from "@/src/components/gallery/GalleryHeroBotanical";
import type { GalleryHeroMeta } from "@/src/lib/gallery/types";

interface GalleryHeroProps {
  meta: GalleryHeroMeta;
  watermark?: string;
}

export function GalleryHero({
  meta,
  watermark = "\u201C Works \u201D",
}: GalleryHeroProps) {
  return (
    <header className="gallery-hero">
      <p className="gallery-hero__watermark" aria-hidden="true">
        {watermark}
      </p>

      <div className="gallery-hero__scroll" aria-hidden="true">
        <span className="gallery-hero__scroll-line" />
        <span className="gallery-hero__scroll-label">Scroll</span>
      </div>

      <div className="gallery-hero__inner gallery-container">
        <div className="gallery-hero__copy">
          <p className="gallery-hero__eyebrow">
            <span className="gallery-hero__eyebrow-dash" aria-hidden="true" />
            {meta.eyebrow}
          </p>

          <h1 className="gallery-hero__title">
            <span className="gallery-hero__title-line">{meta.titleLine1}</span>
            <span className="gallery-hero__title-line gallery-hero__title-line--accent">
              {meta.titleLine2}
            </span>
          </h1>

          <p className="gallery-hero__description">{meta.description}</p>

          <div className="gallery-hero__stats" aria-label="Gallery statistics">
            {meta.stats.map((stat) => (
              <div key={stat.label} className="gallery-hero__stat">
                <span className="gallery-hero__stat-label">{stat.label}</span>
                <span className="gallery-hero__stat-value">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="gallery-hero__illustration" aria-hidden="true">
          <GalleryHeroBotanical />
        </div>
      </div>
    </header>
  );
}
