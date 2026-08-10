function preloadOne(url: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = url;
  });
}

/** Warms the browser cache for every URL; resolves on load, error, or global timeout. */
export function preloadImages(
  urls: string[],
  timeoutMs = 10_000,
): Promise<void> {
  if (urls.length === 0) return Promise.resolve();

  return new Promise((resolve) => {
    let settled = false;

    const finish = () => {
      if (settled) return;
      settled = true;
      resolve();
    };

    const timeout = window.setTimeout(finish, timeoutMs);

    Promise.all(urls.map(preloadOne)).then(() => {
      window.clearTimeout(timeout);
      finish();
    });
  });
}
