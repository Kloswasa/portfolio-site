export const metadata = {
  title: "Play",
  description: "Illustrations and experiments.",
};

export default function PlayPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-16 pt-20">
      <header className="max-w-3xl">
        <span className="text-accent-dark font-body text-xs font-bold uppercase tracking-[0.14em]">
          Play
        </span>
        <h1 className="mt-4 text-heading-4xl md:text-heading-5xl">Play</h1>
        <p className="mt-4 font-body text-lg font-light text-text-muted">
          Creative work: illustration, generative pieces, and shader experiments.
        </p>
      </header>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="card p-8">
          <span className="section-label">Illustration</span>
          <hr className="divider" />
          <p className="mt-4 font-body text-text-muted">
            Drawings + artwork gallery (placeholder).
          </p>
        </div>
        <div className="card p-8">
          <span className="section-label">Experiments</span>
          <hr className="divider" />
          <p className="mt-4 font-body text-text-muted">
            Creative code + shaders (placeholder).
          </p>
        </div>
      </section>
    </main>
  );
}

