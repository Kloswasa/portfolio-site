export type SketchFrame = (t: number) => void;

export type SketchFactory = (
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
) => SketchFrame;

type Rgb = readonly [number, number, number];

type SketchColors = {
  bg: string;
  trail: (alpha: number) => string;
  accent: (alpha: number) => string;
  soft: (alpha: number) => string;
  mid: (alpha: number) => string;
  light: (alpha: number) => string;
};

function parseCssColor(raw: string): Rgb | null {
  const value = raw.trim();
  if (!value) return null;

  const hex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(value);
  if (hex) {
    const h = hex[1];
    if (h.length === 3) {
      return [
        Number.parseInt(h[0] + h[0], 16),
        Number.parseInt(h[1] + h[1], 16),
        Number.parseInt(h[2] + h[2], 16),
      ];
    }
    return [
      Number.parseInt(h.slice(0, 2), 16),
      Number.parseInt(h.slice(2, 4), 16),
      Number.parseInt(h.slice(4, 6), 16),
    ];
  }

  const rgb =
    /^rgba?\(\s*([\d.]+)(?:\s*,\s*|\s+)([\d.]+)(?:\s*,\s*|\s+)([\d.]+)/i.exec(
      value,
    );
  if (rgb) {
    return [
      Number.parseFloat(rgb[1]),
      Number.parseFloat(rgb[2]),
      Number.parseFloat(rgb[3]),
    ];
  }

  return null;
}

function readCssColor(styles: CSSStyleDeclaration, varName: string): Rgb {
  const parsed = parseCssColor(styles.getPropertyValue(varName));
  if (parsed) return parsed;
  // Fallback only if tokens failed to load — matches --color-header-bg light
  return [4, 31, 98];
}

function rgba(rgb: Rgb, alpha: number): string {
  return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${alpha})`;
}

function resolveSketchColors(): SketchColors {
  const styles = getComputedStyle(document.documentElement);
  const bgRgb = readCssColor(styles, "--color-header-bg");
  const accentRgb = readCssColor(styles, "--color-accent");
  const softRgb = readCssColor(styles, "--color-border-strong");
  const midRgb = readCssColor(styles, "--color-tertiary");
  const lightRgb = readCssColor(styles, "--color-primary-muted");

  return {
    bg: `rgb(${bgRgb[0]}, ${bgRgb[1]}, ${bgRgb[2]})`,
    trail: (alpha) => rgba(bgRgb, alpha),
    accent: (alpha) => rgba(accentRgb, alpha),
    soft: (alpha) => rgba(softRgb, alpha),
    mid: (alpha) => rgba(midRgb, alpha),
    light: (alpha) => rgba(lightRgb, alpha),
  };
}

export const SKETCHES: Record<string, SketchFactory> = {
  phyllotaxis(ctx, w, h) {
    const cx = w / 2;
    const cy = h / 2;
    const golden = Math.PI * (3 - Math.sqrt(5));
    const max = 900;
    const c = (Math.min(w, h) * 0.5) / Math.sqrt(max) * 1.05;
    let n = 0;
    return (t) => {
      const colors = resolveSketchColors();
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, w, h);
      if (n < max) n += 7;
      for (let i = 0; i < n; i++) {
        const a = i * golden + t * 0.0002;
        const r = c * Math.sqrt(i);
        const x = cx + r * Math.cos(a);
        const y = cy + r * Math.sin(a);
        const rad = Math.max(0.5, (i / max) * 3.2);
        ctx.beginPath();
        ctx.arc(x, y, rad, 0, 6.283);
        ctx.fillStyle =
          i % 29 === 0
            ? colors.accent(0.9)
            : colors.soft(0.25 + 0.55 * (i / n));
        ctx.fill();
      }
    };
  },

  flow(ctx, w, h) {
    const N = 130;
    const ps = Array.from({ length: N }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      px: 0,
      py: 0,
    }));
    const fld = (x: number, y: number, t: number) =>
      Math.sin(x * 0.008 + Math.cos(y * 0.01 + t * 0.0003)) * Math.PI +
      Math.cos(y * 0.009 - t * 0.0002) * Math.PI;
    const colors = resolveSketchColors();
    ctx.fillStyle = colors.bg;
    ctx.fillRect(0, 0, w, h);
    return (t) => {
      const frame = resolveSketchColors();
      ctx.fillStyle = frame.trail(0.05);
      ctx.fillRect(0, 0, w, h);
      for (const p of ps) {
        const a = fld(p.x, p.y, t);
        p.px = p.x;
        p.py = p.y;
        p.x += Math.cos(a) * 1.2;
        p.y += Math.sin(a) * 1.2;
        if (p.x < 0 || p.x > w || p.y < 0 || p.y > h) {
          p.x = Math.random() * w;
          p.y = Math.random() * h;
          p.px = p.x;
          p.py = p.y;
        }
        ctx.beginPath();
        ctx.moveTo(p.px, p.py);
        ctx.lineTo(p.x, p.y);
        ctx.strokeStyle = frame.soft(0.32);
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    };
  },

  constellation(ctx, w, h) {
    const N = Math.max(8, Math.floor((w * h) / 8500));
    const ps = Array.from({ length: N }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      s: Math.random(),
    }));
    return (t) => {
      const colors = resolveSketchColors();
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, w, h);
      for (const p of ps) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const dx = ps[i].x - ps[j].x;
          const dy = ps[i].y - ps[j].y;
          const d = Math.hypot(dx, dy);
          if (d < 92) {
            ctx.beginPath();
            ctx.moveTo(ps[i].x, ps[i].y);
            ctx.lineTo(ps[j].x, ps[j].y);
            ctx.strokeStyle = colors.mid(0.25 * (1 - d / 92));
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      for (const p of ps) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.3, 0, 6.283);
        ctx.fillStyle =
          p.s > 0.9 ? colors.accent(0.95) : colors.light(0.7);
        ctx.fill();
        if (p.s > 0.9) {
          const tw = 2 + Math.sin(t * 0.003 + p.x) * 1.4;
          ctx.strokeStyle = colors.accent(0.55);
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(p.x - tw - 3, p.y);
          ctx.lineTo(p.x + tw + 3, p.y);
          ctx.moveTo(p.x, p.y - tw - 3);
          ctx.lineTo(p.x, p.y + tw + 3);
          ctx.stroke();
        }
      }
    };
  },

  ripple(ctx, w, h) {
    const src = [
      { x: w * 0.32, y: h * 0.4 },
      { x: w * 0.7, y: h * 0.62 },
    ];
    const colors = resolveSketchColors();
    ctx.fillStyle = colors.bg;
    ctx.fillRect(0, 0, w, h);
    return (t) => {
      const frame = resolveSketchColors();
      ctx.fillStyle = frame.trail(0.08);
      ctx.fillRect(0, 0, w, h);
      for (const s of src) {
        for (let k = 0; k < 7; k++) {
          const r = (t * 0.04 + k * 26) % 170;
          ctx.beginPath();
          ctx.arc(s.x, s.y, r, 0, 6.283);
          ctx.strokeStyle = frame.soft(0.42 * (1 - r / 170));
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(s.x, s.y, 2, 0, 6.283);
        ctx.fillStyle = frame.accent(0.7);
        ctx.fill();
      }
    };
  },

  bloom(ctx, w, h) {
    const base = Math.min(w, h) * 0.22;
    return (t) => {
      const colors = resolveSketchColors();
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = colors.soft(0.5);

      function branch(
        x: number,
        y: number,
        len: number,
        ang: number,
        depth: number,
      ) {
        if (depth === 0 || len < 4) return;
        const sway = Math.sin(t * 0.0008 + depth * 0.6) * 0.09;
        const x2 = x + Math.cos(ang + sway) * len;
        const y2 = y + Math.sin(ang + sway) * len;
        ctx.lineWidth = depth * 0.4;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        if (depth <= 2) {
          ctx.beginPath();
          ctx.arc(x2, y2, 2, 0, 6.283);
          ctx.fillStyle = colors.accent(0.6);
          ctx.fill();
        }
        branch(x2, y2, len * 0.72, ang - 0.5 + sway, depth - 1);
        branch(x2, y2, len * 0.72, ang + 0.5 + sway, depth - 1);
      }

      branch(w / 2, h - 12, base, -Math.PI / 2, 8);
    };
  },

  orrery(ctx, w, h) {
    const cx = w / 2;
    const cy = h / 2;
    const R = Math.min(w, h);
    const orb = [
      { r: R * 0.13, sp: 0.0012 },
      { r: R * 0.23, sp: 0.0008 },
      { r: R * 0.33, sp: 0.0005 },
      { r: R * 0.43, sp: 0.0003 },
    ];
    return (t) => {
      const colors = resolveSketchColors();
      ctx.fillStyle = colors.bg;
      ctx.fillRect(0, 0, w, h);
      for (const o of orb) {
        ctx.beginPath();
        ctx.arc(cx, cy, o.r, 0, 6.283);
        ctx.strokeStyle = colors.mid(0.22);
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, 6.283);
      ctx.fillStyle = colors.accent(0.9);
      ctx.fill();
      orb.forEach((o, i) => {
        const a = t * o.sp + i * 1.7;
        const x = cx + Math.cos(a) * o.r;
        const y = cy + Math.sin(a) * o.r;
        ctx.beginPath();
        ctx.arc(x, y, 2.6 + i * 0.5, 0, 6.283);
        ctx.fillStyle = colors.light(0.85);
        ctx.fill();
        const ma = a * 3.4;
        ctx.beginPath();
        ctx.arc(x + Math.cos(ma) * 8, y + Math.sin(ma) * 8, 1.2, 0, 6.283);
        ctx.fillStyle = colors.soft(0.6);
        ctx.fill();
      });
    };
  },
};
