const YOUTUBE_ID = /^[A-Za-z0-9_-]{11}$/;

function isYouTubeId(value: string | undefined): value is string {
  return value !== undefined && YOUTUBE_ID.test(value);
}

/** Returns the 11-character id from a YouTube watch, share, embed, or shorts URL. */
export function getYouTubeVideoId(src: string): string | null {
  let url: URL;
  try {
    url = new URL(src);
  } catch {
    return null;
  }

  const host = url.hostname.replace(/^www\./, "");

  if (host === "youtu.be") {
    const id = url.pathname.split("/").filter(Boolean)[0];
    return isYouTubeId(id) ? id : null;
  }

  if (
    host !== "youtube.com" &&
    host !== "m.youtube.com" &&
    host !== "music.youtube.com" &&
    host !== "youtube-nocookie.com"
  ) {
    return null;
  }

  if (url.pathname === "/watch") {
    const id = url.searchParams.get("v") ?? undefined;
    return isYouTubeId(id) ? id : null;
  }

  const parts = url.pathname.split("/").filter(Boolean);
  if (
    (parts[0] === "embed" || parts[0] === "shorts" || parts[0] === "live") &&
    isYouTubeId(parts[1])
  ) {
    return parts[1];
  }

  return null;
}

function parseStartSeconds(raw: string): number | null {
  if (/^\d+$/.test(raw)) {
    const seconds = Number(raw);
    return seconds > 0 ? seconds : null;
  }

  const match = raw.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
  if (!match || match[0] === "") return null;

  const total =
    Number(match[1] ?? 0) * 3600 +
    Number(match[2] ?? 0) * 60 +
    Number(match[3] ?? 0);
  return total > 0 ? total : null;
}

/** Privacy-enhanced embed URL. Preserves a start time from `t` or `start`. */
export function getYouTubeEmbedUrl(src: string): string | null {
  const id = getYouTubeVideoId(src);
  if (!id) return null;

  let page: URL;
  try {
    page = new URL(src);
  } catch {
    return null;
  }

  const params = new URLSearchParams();
  const start = parseStartSeconds(
    page.searchParams.get("start") ?? page.searchParams.get("t") ?? "",
  );
  if (start) params.set("start", String(start));

  const query = params.toString();
  return `https://www.youtube-nocookie.com/embed/${id}${query ? `?${query}` : ""}`;
}
