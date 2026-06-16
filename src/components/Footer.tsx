import { SITE_FOOTER_COPY } from "@/src/lib/footer";

interface FooterProps {
  name?: string;
  note?: string;
}

export function Footer({
  name = SITE_FOOTER_COPY.name,
  note = SITE_FOOTER_COPY.note,
}: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <span className="site-footer__left">{name}</span>
        <span className="site-footer__right">{note}</span>
      </div>
    </footer>
  );
}
