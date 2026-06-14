import { ScrollReveal } from "@/src/components/ScrollReveal";
import type { AboutQuote as AboutQuoteData } from "@/src/lib/about/types";

interface AboutQuoteProps {
  quote: AboutQuoteData;
}

export function AboutQuote({ quote }: AboutQuoteProps) {
  return (
    <ScrollReveal as="div" className="about-interstitial">
      <span className="about-interstitial__bg" aria-hidden="true">
        {quote.watermark}
      </span>
      <blockquote className="about-interstitial__quote">{quote.quote}</blockquote>
      <p className="about-interstitial__source">{quote.source}</p>
    </ScrollReveal>
  );
}
