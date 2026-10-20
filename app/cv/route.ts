import { siteConfig } from "@/src/lib/config";

export const dynamic = "force-dynamic";

export async function GET() {
  const upstream = await fetch(siteConfig.resume.sourceHref, {
    cache: "no-store",
    redirect: "follow",
  });

  const contentType = upstream.headers.get("content-type") ?? "";
  if (!upstream.ok || !upstream.body || contentType.includes("text/html")) {
    return new Response("CV is unavailable.", {
      status: 502,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const headers = new Headers({
    "Content-Type": "application/pdf",
    "Content-Disposition": `attachment; filename="${siteConfig.resume.filename}"`,
    "Cache-Control": "no-store",
  });

  const length = upstream.headers.get("content-length");
  if (length) headers.set("Content-Length", length);

  return new Response(upstream.body, { status: 200, headers });
}
