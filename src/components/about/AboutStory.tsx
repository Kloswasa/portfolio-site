import { AboutBlockHead } from "@/src/components/about/AboutBlockHead";
import { RichText } from "@/src/components/about/RichText";
import { ScrollReveal } from "@/src/components/motion/ScrollReveal";
import type { AboutBlock, AboutStory as AboutStoryData } from "@/src/lib/about/types";

interface AboutStoryProps {
  block: AboutBlock;
  story: AboutStoryData;
}

export function AboutStory({ block, story }: AboutStoryProps) {
  return (
    <ScrollReveal as="section" className="about-block" revealOnScroll={false}>
      <AboutBlockHead block={block} />

      <div className="about-story">
        <div className="about-portrait">
          <div className="about-portrait__plate">
            <img
              src={story.portrait.image.src}
              alt={story.portrait.image.alt}
              className="about-portrait__image"
              width={800}
              height={1000}
              decoding="async"
            />
            <span className="about-portrait__mat" aria-hidden="true" />
            <p className="about-portrait__label">{story.portrait.label}</p>
          </div>
          <div className="about-portrait__stamp" aria-hidden="true">
            <strong>{story.portrait.stampValue}</strong>
            <span>{story.portrait.stampLabel}</span>
          </div>
        </div>

        <div className="about-story__prose">
          <p className="about-story__lead">
            <RichText value={story.lead} />
          </p>
          {story.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={
                index === 0
                  ? "about-story__p about-story__p--first"
                  : "about-story__p"
              }
            >
              {paragraph}
            </p>
          ))}
          <p className="about-story__sign">{story.signature}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}
