export function ProseBlock({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="max-w-3xl space-y-4">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="font-body text-text-muted">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
