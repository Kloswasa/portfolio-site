import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Home",
  description: "Portfolio home.",
};

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-primary">
        <div className="pointer-events-none absolute inset-0">
          
          
        </div>

        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28 lg:py-32">
          <div className="relative mx-auto max-w-5xl bg-bg px-6 py-16 text-center sm:px-10 sm:py-20">
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-5">
              <div className="flex flex-col items-center gap-5">
                <h1 className="max-w-[28ch] text-balance text-[clamp(2.75rem,8vw,4.75rem)] leading-[0.92] tracking-[0.16em] sm:max-w-[22ch]">
                  Portfolio
                </h1>
                <p className="max-w-[28ch] text-balance text-primary text-[clamp(1.125rem,3.2vw,2rem)] leading-tight tracking-[0.08em] sm:max-w-none">
                  Product Designer · Developer
                </p>
              </div>

              <p className="max-w-prose font-body text-[clamp(1rem,1.2vw,1.125rem)] leading-snug text-text text-pretty">
                I design thoughtful interfaces and build them with a token-driven
                system—balancing craft, accessibility, and performance.
              </p>

              <div className="mt-1 flex flex-wrap items-center justify-center gap-4">
                <Link className="btn btn-primary" href="/work">
                  Button
                </Link>
                <Link className="btn btn-outline" href="/about">
                  Button
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-16">
        <section className="grid gap-6 md:grid-cols-3">
          <div className="card p-8">
            <h2 className="text-heading-2xl">Design systems</h2>
            <p className="mt-3 font-body text-text-muted">
              Semantic tokens, accessibility, and consistency across Figma and
              code.
            </p>
          </div>
          <div className="card p-8">
            <h2 className="text-heading-2xl">Motion</h2>
            <p className="mt-3 font-body text-text-muted">
              Subtle, intentional interactions that respect reduced motion.
            </p>
          </div>
          <div className="card p-8">
            <h2 className="text-heading-2xl">Build quality</h2>
            <p className="mt-3 font-body text-text-muted">
              Fast loads, clean TypeScript, and maintainable structure.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

