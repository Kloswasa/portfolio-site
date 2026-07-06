"use client";

import { useEffect, useRef } from "react";

const MONO = "var(--font-mono)";

export function PlayIllustration({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  switch (name) {
    case "fern":
      return <FernIllustration className={className} />;
    case "star-chart":
      return <StarChartIllustration className={className} />;
    case "luna-moth":
      return <LunaMothIllustration className={className} />;
    case "nautilus":
      return <NautilusIllustration className={className} />;
    case "magnolia":
      return <MagnoliaIllustration className={className} />;
    case "dandelion":
      return <DandelionIllustration className={className} />;
    case "clover":
      return <CloverIllustration className={className} />;
    case "lotus":
      return <LotusIllustration className={className} />;
    case "wax-flower":
      return <WaxFlowerIllustration className={className} />;
    case "chrysanthemum":
      return <ChrysanthemumIllustration className={className} />;
    case "forget-me-not":
      return <ForgetMeNotIllustration className={className} />;
    default:
      return null;
  }
}

function FernIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M200 480 C198 400 196 320 200 220 C203 140 210 80 206 30"
        stroke="var(--color-primary-muted)"
        strokeWidth="1.4"
        fill="none"
        opacity="0.75"
      />
      <g stroke="var(--color-border-strong)" strokeWidth="1" fill="none" opacity="0.6">
        <path d="M200 440 C170 432 120 426 78 432 M88 420 L78 432 L92 442 M118 416 L120 430 M150 424 L150 436" />
        <path d="M200 392 C168 382 116 376 74 384 M84 372 L74 384 L88 396 M116 368 L116 382" />
        <path d="M201 344 C170 334 120 330 80 340 M90 328 L80 340 L94 352" />
        <path d="M201 296 C172 286 126 282 88 294 M98 282 L88 294 L102 306" />
        <path d="M202 248 C176 240 136 236 102 248 M112 236 L102 248 L116 260" />
        <path d="M202 200 C180 192 146 190 116 200 M126 188 L116 200 L130 212" />
        <path d="M203 152 C184 146 156 144 130 152 M140 140 L130 152" />
        <path d="M204 108 C188 102 164 102 142 110" />
        <path d="M200 416 C230 408 280 402 322 408 M312 396 L322 408 L308 418" />
        <path d="M201 368 C232 358 284 352 326 360 M316 348 L326 360 L312 372" />
        <path d="M201 320 C230 310 280 306 320 316 M310 304 L320 316 L306 328" />
        <path d="M202 272 C228 264 268 260 302 272 M292 260 L302 272 L288 284" />
        <path d="M202 224 C224 216 258 214 288 224 M278 212 L288 224 L274 236" />
        <path d="M203 176 C222 170 250 168 276 176 M266 164 L276 176" />
        <path d="M204 130 C220 124 244 124 266 132" />
      </g>
      <circle cx="206" cy="28" r="5" fill="var(--color-primary-muted)" opacity="0.5" />
      <text
        x="100"
        y="496"
        fontFamily={MONO}
        fontSize="8"
        fill="rgba(255,255,255,0.3)"
        letterSpacing="2"
      >
        PTERIDIUM · STUDY I
      </text>
    </svg>
  );
}

function StarChartIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g stroke="var(--color-secondary)" strokeWidth="0.4" opacity="0.5">
        <line x1="40" y1="120" x2="360" y2="120" />
        <line x1="40" y1="250" x2="360" y2="250" />
        <line x1="40" y1="380" x2="360" y2="380" />
        <line x1="120" y1="40" x2="120" y2="460" />
        <line x1="240" y1="40" x2="240" y2="460" />
      </g>
      <g stroke="var(--color-border-strong)" strokeWidth="0.8" opacity="0.55" fill="none">
        <path d="M90 150 L160 110 L210 180 L280 160 L320 230" />
        <path d="M160 110 L200 60 M210 180 L180 280 L260 330 L230 410" />
        <path d="M280 160 L330 110" />
      </g>
      <g fill="var(--color-primary-muted)">
        <circle cx="90" cy="150" r="2.5" />
        <circle cx="160" cy="110" r="3.5" />
        <circle cx="210" cy="180" r="2.5" />
        <circle cx="280" cy="160" r="3" />
        <circle cx="320" cy="230" r="2" />
        <circle cx="200" cy="60" r="2.5" />
        <circle cx="180" cy="280" r="3" />
        <circle cx="260" cy="330" r="2.5" />
        <circle cx="230" cy="410" r="3.5" />
        <circle cx="330" cy="110" r="2" />
      </g>
      <g fill="var(--color-accent)">
        <path
          d="M160 110 L163 122 L175 110 L163 113 L160 96 L157 113 L145 110 L157 122 Z"
          opacity="0.9"
        />
        <path
          d="M230 410 L233 422 L245 410 L233 413 L230 396 L227 413 L215 410 L227 422 Z"
          opacity="0.9"
        />
      </g>
      <text
        x="100"
        y="490"
        fontFamily={MONO}
        fontSize="8"
        fill="rgba(255,255,255,0.3)"
        letterSpacing="2"
      >
        NOCTURNE · PLATE VII
      </text>
    </svg>
  );
}

function LunaMothIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g stroke="var(--color-border-strong)" strokeWidth="1" opacity="0.6">
        <path
          d="M200 200 C140 150 70 170 60 240 C52 300 120 320 200 280"
          fill="rgba(181,206,233,0.08)"
        />
        <path
          d="M200 200 C260 150 330 170 340 240 C348 300 280 320 200 280"
          fill="rgba(181,206,233,0.08)"
        />
        <path
          d="M200 285 C150 320 110 380 130 440 C150 470 195 430 200 360"
          fill="rgba(181,206,233,0.06)"
        />
        <path
          d="M200 285 C250 320 290 380 270 440 C250 470 205 430 200 360"
          fill="rgba(181,206,233,0.06)"
        />
      </g>
      <g stroke="var(--color-primary-muted)" strokeWidth="0.5" opacity="0.5" fill="none">
        <circle cx="110" cy="230" r="14" />
        <circle cx="290" cy="230" r="14" />
        <path d="M150 200 C130 220 120 250 128 280 M250 200 C270 220 280 250 272 280" />
      </g>
      <circle cx="110" cy="230" r="4" fill="var(--color-accent)" opacity="0.8" />
      <circle cx="290" cy="230" r="4" fill="var(--color-accent)" opacity="0.8" />
      <line
        x1="200"
        y1="195"
        x2="200"
        y2="430"
        stroke="var(--color-primary-muted)"
        strokeWidth="3"
        opacity="0.5"
      />
      <path
        d="M200 195 C190 175 180 168 172 165 M200 195 C210 175 220 168 228 165"
        stroke="var(--color-primary-muted)"
        strokeWidth="1.4"
        fill="none"
        opacity="0.6"
      />
      <text
        x="110"
        y="490"
        fontFamily={MONO}
        fontSize="8"
        fill="rgba(255,255,255,0.3)"
        letterSpacing="2"
      >
        ACTIAS · STUDY III
      </text>
    </svg>
  );
}

function NautilusIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g stroke="var(--color-border-strong)" strokeWidth="1.1" fill="none" opacity="0.6">
        <path d="M200 250 C200 195 240 160 290 175 C345 192 360 260 320 310 C272 370 180 365 130 305 C76 240 110 140 195 110 C295 75 380 160 375 255" />
        <path d="M200 250 C210 220 240 205 268 218 M200 250 C232 248 262 268 268 300 M200 250 C176 230 168 196 192 174 M200 250 C168 262 130 250 122 214" />
        <path d="M200 250 L268 218 M200 250 L268 300 M200 250 L192 174 M200 250 L122 214 M200 250 L250 320" />
      </g>
      <circle cx="200" cy="250" r="5" fill="var(--color-accent)" opacity="0.8" />
      <text
        x="110"
        y="490"
        fontFamily={MONO}
        fontSize="8"
        fill="rgba(255,255,255,0.3)"
        letterSpacing="2"
      >
        NAUTILUS · ϕ SPIRAL
      </text>
    </svg>
  );
}

function MagnoliaIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g
        stroke="var(--color-border-strong)"
        strokeWidth="1"
        opacity="0.6"
        fill="rgba(181,206,233,0.06)"
      >
        <path d="M200 250 C160 200 150 130 200 90 C250 130 240 200 200 250Z" />
        <path d="M200 250 C150 230 110 180 120 120 C180 140 210 200 200 250Z" />
        <path d="M200 250 C250 230 290 180 280 120 C220 140 190 200 200 250Z" />
        <path d="M200 255 C150 270 100 260 80 210 C140 195 195 215 200 255Z" />
        <path d="M200 255 C250 270 300 260 320 210 C260 195 205 215 200 255Z" />
      </g>
      <path
        d="M200 250 C200 320 198 400 205 470"
        stroke="var(--color-primary-muted)"
        strokeWidth="1.6"
        fill="none"
        opacity="0.55"
      />
      <ellipse
        cx="160"
        cy="360"
        rx="22"
        ry="13"
        transform="rotate(-25,160,360)"
        fill="rgba(181,206,233,0.12)"
        stroke="var(--color-border-strong)"
        strokeWidth="0.8"
        opacity="0.5"
      />
      <g fill="var(--color-accent)" opacity="0.7">
        <circle cx="200" cy="250" r="3" />
        <circle cx="192" cy="240" r="2" />
        <circle cx="208" cy="240" r="2" />
        <circle cx="200" cy="232" r="2" />
      </g>
      <text
        x="110"
        y="490"
        fontFamily={MONO}
        fontSize="8"
        fill="rgba(255,255,255,0.3)"
        letterSpacing="2"
      >
        MAGNOLIA · STUDY V
      </text>
    </svg>
  );
}

function CloverIllustration({ className }: { className?: string }) {
  const cx = 200;
  const cy = 218;

  const leafFill = "rgba(181,206,233,0.1)";
  const leafStroke = "var(--color-border-strong)";
  const veinStroke = "var(--color-primary-muted)";
  const chevronFill = "rgba(255,255,255,0.14)";

  const leafPath =
    "M0 8 C-30 6,-52 -16,-56 -50 C-54 -74,-36 -92,-16 -98 C-6 -100,-2 -96,0 -88 C2 -96,6 -100,16 -98 C36 -92,54 -74,56 -50 C52 -16,30 6,0 8Z";

  const chevronPath = "M0 -52 L-16 -68 L-7 -70 L0 -60 L7 -70 L16 -68Z";

  const rotations = [0, 90, 180, 270] as const;

  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g transform={`translate(${cx} ${cy})`}>
        <g opacity="0.18" fill="rgba(0,0,0,0.35)">
          {rotations.map((angle) => (
            <path
              key={`shadow-${angle}`}
              d={leafPath}
              transform={`rotate(${angle + 4}) translate(2 2)`}
            />
          ))}
        </g>

        {rotations.map((angle) => (
          <g key={`leaf-${angle}`} transform={`rotate(${angle})`}>
            <path
              d={leafPath}
              fill={leafFill}
              stroke={leafStroke}
              strokeWidth="1"
              strokeLinejoin="round"
              opacity="0.72"
            />
            <path d={chevronPath} fill={chevronFill} stroke="none" />
            <path
              d="M0 10 L0 -84"
              stroke={veinStroke}
              strokeWidth="0.9"
              fill="none"
              opacity="0.65"
              strokeLinecap="round"
            />
            <g stroke={veinStroke} strokeWidth="0.45" fill="none" opacity="0.42" strokeLinecap="round">
              <path d="M0 -22 C-14 -18,-22 -12,-28 -4" />
              <path d="M0 -22 C14 -18,22 -12,28 -4" />
              <path d="M0 -44 C-18 -38,-26 -28,-32 -16" />
              <path d="M0 -44 C18 -38,26 -28,32 -16" />
              <path d="M0 -66 C-16 -60,-22 -52,-26 -42" />
              <path d="M0 -66 C16 -60,22 -52,26 -42" />
              <path d="M0 -82 C-12 -78,-16 -72,-18 -66" />
              <path d="M0 -82 C12 -78,16 -72,18 -66" />
            </g>
          </g>
        ))}

        <circle cx="0" cy="0" r="4.5" fill="rgba(255,255,255,0.22)" />
        <circle cx="0" cy="0" r="2.2" fill="var(--color-accent)" opacity="0.85" />
      </g>

      <path
        d={`M${cx} ${cy + 8} C${cx - 2} ${cy + 90}, ${cx + 1} ${cy + 170}, ${cx} 470`}
        stroke={veinStroke}
        strokeWidth="1.2"
        fill="none"
        opacity="0.45"
        strokeLinecap="round"
      />

      <text
        x="100"
        y="490"
        fontFamily={MONO}
        fontSize="8"
        fill="rgba(255,255,255,0.3)"
        letterSpacing="2"
      >
        TRIFOLIUM · FORTUNATUM
      </text>
    </svg>
  );
}

function DandelionIllustration({ className }: { className?: string }) {
  const seedsRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const g = seedsRef.current;
    if (!g) return;

    const cx = 200;
    const cy = 200;
    const N = 70;
    const ns = "http://www.w3.org/2000/svg";

    while (g.firstChild) g.removeChild(g.firstChild);

    for (let i = 0; i < N; i++) {
      const a = (i / N) * Math.PI * 2;
      const len = 70 + Math.random() * 38;
      const x2 = cx + Math.cos(a) * len;
      const y2 = cy + Math.sin(a) * len;

      const line = document.createElementNS(ns, "line");
      line.setAttribute("x1", String(cx));
      line.setAttribute("y1", String(cy));
      line.setAttribute("x2", String(x2));
      line.setAttribute("y2", String(y2));
      line.setAttribute("stroke", "var(--color-border-strong)");
      line.setAttribute("stroke-width", "0.5");
      line.setAttribute("opacity", "0.5");
      g.appendChild(line);

      for (let k = -1; k <= 1; k++) {
        const ta = a + k * 0.18;
        const tx = x2 + Math.cos(ta) * 8;
        const ty = y2 + Math.sin(ta) * 8;
        const t = document.createElementNS(ns, "line");
        t.setAttribute("x1", String(x2));
        t.setAttribute("y1", String(y2));
        t.setAttribute("x2", String(tx));
        t.setAttribute("y2", String(ty));
        t.setAttribute("stroke", "var(--color-primary-muted)");
        t.setAttribute("stroke-width", "0.4");
        t.setAttribute("opacity", "0.4");
        g.appendChild(t);
      }
    }
  }, []);

  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g ref={seedsRef} />
      <circle
        cx="200"
        cy="200"
        r="6"
        fill="none"
        stroke="var(--color-primary-muted)"
        strokeWidth="1"
        opacity="0.6"
      />
      <path
        d="M200 206 C200 300 198 400 206 470"
        stroke="var(--color-primary-muted)"
        strokeWidth="1.4"
        fill="none"
        opacity="0.5"
      />
      <circle cx="200" cy="200" r="3" fill="var(--color-accent)" opacity="0.8" />
      <text
        x="110"
        y="490"
        fontFamily={MONO}
        fontSize="8"
        fill="rgba(255,255,255,0.3)"
        letterSpacing="2"
      >
        TARAXACUM · DISPERSAL
      </text>
    </svg>
  );
}

function LotusIllustration({ className }: { className?: string }) {
  const cx = 200;
  const cy = 210;
  const outerPetalCount = 12;
  const innerPetalCount = 8;
  const seedCount = 10;

  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M200 250 C198 330 202 400 200 470"
        stroke="var(--color-primary-muted)"
        strokeWidth="1.4"
        fill="none"
        opacity="0.55"
      />
      <ellipse
        cx="130"
        cy="340"
        rx="48"
        ry="18"
        transform="rotate(-12 130 340)"
        fill="rgba(181,206,233,0.08)"
        stroke="var(--color-border-strong)"
        strokeWidth="0.9"
        opacity="0.55"
      />
      <path
        d="M82 340 Q130 330 178 340"
        stroke="var(--color-primary-muted)"
        strokeWidth="0.6"
        fill="none"
        opacity="0.4"
      />
      <g
        stroke="var(--color-border-strong)"
        strokeWidth="0.9"
        fill="rgba(181,206,233,0.06)"
        opacity="0.65"
      >
        {Array.from({ length: outerPetalCount }).map((_, i) => {
          const angle = (i / outerPetalCount) * 360;
          return (
            <path
              key={`outer-${i}`}
              d="M0 0 C-14 -42 -10 -78 0 -92 C10 -78 14 -42 0 0"
              transform={`rotate(${angle} ${cx} ${cy}) translate(${cx} ${cy - 46})`}
            />
          );
        })}
      </g>
      <g
        stroke="var(--color-border-strong)"
        strokeWidth="0.8"
        fill="rgba(181,206,233,0.1)"
        opacity="0.7"
      >
        {Array.from({ length: innerPetalCount }).map((_, i) => {
          const angle = (i / innerPetalCount) * 360 + 22;
          return (
            <path
              key={`inner-${i}`}
              d="M0 0 C-8 -24 -6 -44 0 -52 C6 -44 8 -24 0 0"
              transform={`rotate(${angle} ${cx} ${cy}) translate(${cx} ${cy - 28})`}
            />
          );
        })}
      </g>
      <circle
        cx={cx}
        cy={cy}
        r="14"
        fill="none"
        stroke="var(--color-border-strong)"
        strokeWidth="0.8"
        opacity="0.5"
      />
      <g fill="var(--color-accent)" opacity="0.75">
        {Array.from({ length: seedCount }).map((_, i) => {
          const a = (i / seedCount) * Math.PI * 2;
          return (
            <circle
              key={`seed-${i}`}
              cx={cx + Math.cos(a) * 9}
              cy={cy + Math.sin(a) * 9}
              r="1.8"
            />
          );
        })}
        <circle cx={cx} cy={cy} r="3" />
      </g>
      <text
        x="110"
        y="490"
        fontFamily={MONO}
        fontSize="8"
        fill="rgba(255,255,255,0.3)"
        letterSpacing="2"
      >
        NELUMBO · NUCIFERA
      </text>
    </svg>
  );
}

function WaxFlowerBloom({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <ellipse
          key={i}
          cx="0"
          cy="-7"
          rx="4.5"
          ry="7"
          transform={`rotate(${i * 72})`}
          fill="rgba(181,206,233,0.1)"
          stroke="var(--color-border-strong)"
          strokeWidth="0.7"
          opacity="0.7"
        />
      ))}
      <circle cx="0" cy="0" r="2.2" fill="var(--color-accent)" opacity="0.8" />
    </g>
  );
}

function WaxFlowerIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M200 470 C205 400 198 340 185 280 C175 230 160 180 140 130"
        stroke="var(--color-primary-muted)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.55"
      />
      <path
        d="M185 280 C220 260 260 240 300 220"
        stroke="var(--color-primary-muted)"
        strokeWidth="1.1"
        fill="none"
        opacity="0.45"
      />
      <path
        d="M175 220 C145 210 115 205 90 210"
        stroke="var(--color-primary-muted)"
        strokeWidth="1"
        fill="none"
        opacity="0.4"
      />
      <g stroke="var(--color-border-strong)" strokeWidth="0.7" fill="none" opacity="0.5">
        <path d="M170 300 L158 318 M172 298 L160 316" />
        <path d="M195 250 L183 268 M197 248 L185 266" />
        <path d="M230 235 L218 252 M232 233 L220 250" />
        <path d="M265 225 L253 240 M267 223 L255 238" />
        <path d="M150 190 L138 205 M152 188 L140 203" />
        <path d="M120 175 L108 188 M122 173 L110 186" />
      </g>
      <WaxFlowerBloom x={300} y={218} scale={1.1} />
      <WaxFlowerBloom x={265} y={228} scale={0.95} />
      <WaxFlowerBloom x={230} y={238} scale={1} />
      <WaxFlowerBloom x={195} y={248} scale={0.9} />
      <WaxFlowerBloom x={155} y={195} scale={0.85} />
      <WaxFlowerBloom x={118} y={178} scale={0.8} />
      <WaxFlowerBloom x={88} y={212} scale={0.75} />
      <text
        x="95"
        y="490"
        fontFamily={MONO}
        fontSize="8"
        fill="rgba(255,255,255,0.3)"
        letterSpacing="2"
      >
        CHAMELAUCIUM · UNCINATUM
      </text>
    </svg>
  );
}

function ChrysanthemumIllustration({ className }: { className?: string }) {
  const cx = 200;
  const cy = 215;
  const layers = [
    { count: 24, len: 72, width: 3.2, opacity: 0.45 },
    { count: 20, len: 58, width: 3.6, opacity: 0.55 },
    { count: 16, len: 42, width: 4, opacity: 0.65 },
    { count: 12, len: 28, width: 4.2, opacity: 0.75 },
  ] as const;

  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M200 250 C198 330 202 400 200 470"
        stroke="var(--color-primary-muted)"
        strokeWidth="1.3"
        fill="none"
        opacity="0.5"
      />
      {layers.flatMap((layer, li) =>
        Array.from({ length: layer.count }).map((_, i) => {
          const angle = (i / layer.count) * 360 + li * 7;
          return (
            <ellipse
              key={`${li}-${i}`}
              cx={cx}
              cy={cy - layer.len / 2}
              rx={layer.width}
              ry={layer.len / 2}
              transform={`rotate(${angle} ${cx} ${cy})`}
              fill="rgba(181,206,233,0.06)"
              stroke="var(--color-border-strong)"
              strokeWidth="0.7"
              opacity={layer.opacity}
            />
          );
        })
      )}
      <circle
        cx={cx}
        cy={cy}
        r="8"
        fill="rgba(181,206,233,0.12)"
        stroke="var(--color-border-strong)"
        strokeWidth="0.8"
        opacity="0.6"
      />
      <circle cx={cx} cy={cy} r="3.5" fill="var(--color-accent)" opacity="0.85" />
      <text
        x="95"
        y="490"
        fontFamily={MONO}
        fontSize="8"
        fill="rgba(255,255,255,0.3)"
        letterSpacing="2"
      >
        CHRYSANTHEMUM · MORIFOLIUM
      </text>
    </svg>
  );
}

function ForgetMeNotFlower({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <circle
          key={i}
          cx={Math.cos((i / 5) * Math.PI * 2 - Math.PI / 2) * 5}
          cy={Math.sin((i / 5) * Math.PI * 2 - Math.PI / 2) * 5}
          r="4.2"
          fill="rgba(181,206,233,0.22)"
          stroke="var(--color-border-strong)"
          strokeWidth="0.85"
          opacity="0.9"
        />
      ))}
      <circle cx="0" cy="0" r="2.2" fill="var(--color-accent)" opacity="1" />
    </g>
  );
}

function ForgetMeNotLeaf({ x, y, rot }: { x: number; y: number; rot: number }) {
  return (
    <path
      d="M0 0 C-8 -10 -14 -4 -10 4 C-6 10 0 14 0 14 C0 14 6 10 10 4 C14 -4 8 -10 0 0"
      transform={`translate(${x} ${y}) rotate(${rot}) scale(1)`}
      fill="rgba(181,206,233,0.14)"
      stroke="var(--color-border-strong)"
      strokeWidth="0.85"
      opacity="0.78"
    />
  );
}

function ForgetMeNotIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M200 470 C198 390 202 320 210 260"
        stroke="var(--color-primary-muted)"
        strokeWidth="1.4"
        fill="none"
        opacity="0.65"
      />
      <path
        d="M210 320 C175 305 145 290 120 275"
        stroke="var(--color-primary-muted)"
        strokeWidth="1.1"
        fill="none"
        opacity="0.55"
      />
      <path
        d="M210 280 C240 268 270 255 295 245"
        stroke="var(--color-primary-muted)"
        strokeWidth="1.1"
        fill="none"
        opacity="0.55"
      />
      <ForgetMeNotLeaf x={145} y={318} rot={-25} />
      <ForgetMeNotLeaf x={175} y={335} rot={15} />
      <ForgetMeNotLeaf x={235} y={300} rot={30} />
      <ForgetMeNotLeaf x={268} y={288} rot={-10} />
      <ForgetMeNotLeaf x={118} y={282} rot={-40} />
      <ForgetMeNotFlower x={295} y={245} scale={1.15} />
      <ForgetMeNotFlower x={268} y={255} scale={1.05} />
      <ForgetMeNotFlower x={240} y={265} scale={1} />
      <ForgetMeNotFlower x={215} y={255} scale={1.15} />
      <ForgetMeNotFlower x={190} y={270} scale={0.95} />
      <ForgetMeNotFlower x={165} y={285} scale={0.9} />
      <ForgetMeNotFlower x={135} y={278} scale={0.85} />
      <ForgetMeNotFlower x={120} y={260} scale={0.8} />
      <ForgetMeNotFlower x={248} y={238} scale={0.75} />
    </svg>
  );
}
