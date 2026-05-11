"use client";

import { ScrollReveal } from "@/src/components/ScrollReveal";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/** Scroll-into-view fade + slight lift; defers to {@link ScrollReveal} (Framer Motion + reduced motion). */
export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <ScrollReveal as="div" className={className} delay={delay}>
      {children}
    </ScrollReveal>
  );
} 