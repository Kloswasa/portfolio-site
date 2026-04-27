import Link from "next/link";

export const metadata = {
  title: "Home",
  description: "Portfolio home.",
};

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="card p-10">
        <span className="text-accent-dark font-body text-xs font-bold uppercase tracking-[0.14em]">
          Product designer who codes
        </span>
        <h1 className="mt-4 text-heading-4xl md:text-heading-5xl text-balance">
          Hi, I’m Your Name.
        </h1>
        <p className="mt-4 max-w-2xl font-body text-lg font-light text-text-muted">
          I design and build crisp, high-performing interfaces—bridging design
          systems, prototyping, and production code.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <Link className="btn btn-navy" href="/work">
            View Work
          </Link>
          <Link className="btn btn-outline" href="/tokens">
            View Tokens
          </Link>
          <Link className="btn btn-outline" href="/components">
            View Components
          </Link>
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
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
    </main>
  );
}

