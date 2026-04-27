import Link from "next/link";
import ContactForm from "@/src/components/ContactForm";

export const metadata = {
  title: "About",
  description: "Bio, skills, and resume.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pb-16 pt-20">
      <header className="max-w-3xl">
        <span className="text-accent-dark font-body text-xs font-bold uppercase tracking-[0.14em]">
          About
        </span>
        <h1 className="mt-4 text-heading-4xl md:text-heading-5xl">About</h1>
        <p className="mt-4 font-body text-lg font-light text-text-muted">
          Story, skills, tools, and a resume download.
        </p>
      </header>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="card p-8">
          <span className="section-label">Story +</span>
          <hr className="divider" />
          <p className="mt-4 font-body text-text-muted">
            Bio, skills, and tools (placeholder). This is where your narrative goes.
          </p>
        </div>
        <div className="card p-8">
          <span className="section-label">Resume</span>
          <hr className="divider" />
          <p className="mt-4 font-body text-text-muted">
            PDF download + contact.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link className="btn btn-navy" href="#" aria-disabled="true" tabIndex={-1}>
              Download resume (PDF)
            </Link>
            <Link className="btn btn-outline" href="#contact">
              Contact
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="mt-12 card p-8 scroll-mt-24">
        <span className="section-label">Contact</span>
        <hr className="divider" />
        <div className="mt-6 max-w-2xl">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

