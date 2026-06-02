export function CalloutBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="panel p-6">
      <h3 className="text-heading-xl">{title}</h3>
      <p className="mt-3 font-body text-text-muted">{body}</p>
    </div>
  );
}
