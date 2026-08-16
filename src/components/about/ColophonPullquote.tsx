import { ScrollReveal } from "@/src/components/motion/ScrollReveal";
import type { ColophonPullquote as ColophonPullquoteData } from "@/src/lib/colophon/types";

interface ColophonPullquoteProps {
  quote: ColophonPullquoteData;
}

export function ColophonPullquote({ quote }: ColophonPullquoteProps) {
  return (
    <ScrollReveal as="div" className="colophon-pullquote">
      <blockquote>
        <p className="colophon-pullquote__text">{quote.quote}</p>
        <footer className="colophon-pullquote__source">{quote.source}</footer>
      </blockquote>
    </ScrollReveal>
  );
}
