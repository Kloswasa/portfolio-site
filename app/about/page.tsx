import Link from "next/link";
import ContactForm from "@/src/components/ContactForm";
import { Badge } from "@/src/components/ui/Badge";

export const metadata = {
  title: "About",
  description: "Bio, skills, and resume.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-24 pt-14">
      <header className="max-w-xl">
        <span className="mb-3 block font-body text-xs font-medium uppercase tracking-widest text-accent">
          ↳ About
        </span>
        <h1 className="text-heading-4xl md:text-heading-5xl">Story</h1>
        <p className="mt-3 max-w-xl font-body text-base font-light leading-relaxed text-text-muted">
          I&apos;m a designer and creative technologist working out of Brooklyn. Eight years across
          small studios and large platforms — currently independent, quietly available for product,
          editorial, and creative-code work.
        </p>
      </header>

      <section className="mt-12 grid gap-12 md:grid-cols-2 md:gap-12">
        <div>
          <h2 className="text-heading-xl text-text">Bio</h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-text-muted">
            I started as a printmaker — risograph, cyanotype, woodblock — and moved into product
            design when I realized interfaces were just another kind of editorial layout. The two
            practices haven&apos;t separated since.
          </p>
          <p className="mt-4 font-body text-sm leading-relaxed text-text-muted">
            I write occasionally, teach occasionally, and keep a quiet practice in ink on weekends.
          </p>
        </div>

        <div>
          <h2 className="text-heading-xl text-text">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              "Product design",
              "Editorial",
              "Identity",
              "Type",
              "Creative code",
              "WebGL",
              "Print",
            ].map((skill) => (
              <Badge key={skill} tone="primary">
                {skill}
              </Badge>
            ))}
          </div>

          <h2 className="mt-8 text-heading-xl text-text">Tools</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Figma", "React", "Three.js", "p5.js", "InDesign", "Risograph", "Sumi ink"].map(
              (tool) => (
                <Badge key={tool} tone="tertiary">
                  {tool}
                </Badge>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="flex items-center gap-4">
          <hr className="divider flex-1" />
          <span className="section-label m-0">Resume</span>
          <hr className="divider flex-1" />
        </div>

        <div className="mt-6 panel flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="mb-2 block font-body text-xs font-medium uppercase tracking-widest text-accent">
              ↳ Download
            </span>
            <h3 className="text-heading-xl text-text">resume.pdf · 2024</h3>
            <p className="mt-1 font-body text-sm text-text-muted">One page. Updated October 2024.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link className="btn btn-gold" href="#" aria-disabled="true" tabIndex={-1}>
              ↓ Download PDF
            </Link>
            <Link className="btn btn-outline" href="#contact">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="mt-14 scroll-mt-24">
        <h2 className="text-heading-2xl text-text">Get in touch</h2>
        <p className="mt-3 max-w-2xl font-body text-text-muted">
          A few sentences is plenty. I usually reply within a day or two.
        </p>
        <div className="mt-8 max-w-2xl">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}

