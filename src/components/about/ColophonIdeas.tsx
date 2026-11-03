import { AboutBlockHead } from "@/src/components/about/AboutBlockHead";
import { ScrollReveal } from "@/src/components/motion/ScrollReveal";
import type { AboutBlock, ColophonIdea } from "@/src/lib/colophon/types";

interface ColophonIdeasProps {
  block: AboutBlock;
  ideas: ColophonIdea[];
}

export function ColophonIdeas({ block, ideas }: ColophonIdeasProps) {
  return (
    <ScrollReveal as="section" className="colophon-block">
      <AboutBlockHead block={block} />

      <div className="colophon-ideas">
        <p className="colophon-ideas__root" aria-hidden="true">
          Print &amp; physical touch
          <span className="colophon-ideas__root-sep">·</span>
          Cyanotype &amp; botanic
        </p>

        <ol className="colophon-ideas__list">
          {ideas.map((idea) => (
            <li className="colophon-idea" key={idea.num}>
              <span className="colophon-idea__num">{idea.num}</span>
              <h3 className="colophon-idea__title">{idea.title}</h3>
              <p className="colophon-idea__source">{idea.source}</p>
              <dl className="colophon-idea__meta">
                <div>
                  <dt>From</dt>
                  <dd>{idea.from}</dd>
                </div>
                <div>
                  <dt>Shows up as</dt>
                  <dd>{idea.shows}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ol>
      </div>
    </ScrollReveal>
  );
}
