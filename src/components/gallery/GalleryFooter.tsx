interface GalleryFooterProps {
  name: string;
  note: string;
}

export function GalleryFooter({ name, note }: GalleryFooterProps) {
  return (
    <footer className="gallery-footer">
      <div className="gallery-footer__inner gallery-container">
        <p className="gallery-footer__name">{name}</p>
        <p className="gallery-footer__note">{note}</p>
      </div>
    </footer>
  );
}
