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
    case "rose":
      return <RoseIllustration className={className} />;
    case "peony":
      return <PeonyIllustration className={className} />;
    case "lily":
      return <LilyIllustration className={className} />;
    case "hydrangea":
      return <HydrangeaIllustration className={className} />;
    case "sunflower":
      return <SunflowerIllustration className={className} />;
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
        fill="color-mix(in srgb, var(--color-text-inverse) 30%, transparent)"
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
        fill="color-mix(in srgb, var(--color-text-inverse) 30%, transparent)"
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
          fill="color-mix(in srgb, var(--color-border-strong) 8%, transparent)"
        />
        <path
          d="M200 200 C260 150 330 170 340 240 C348 300 280 320 200 280"
          fill="color-mix(in srgb, var(--color-border-strong) 8%, transparent)"
        />
        <path
          d="M200 285 C150 320 110 380 130 440 C150 470 195 430 200 360"
          fill="color-mix(in srgb, var(--color-border-strong) 6%, transparent)"
        />
        <path
          d="M200 285 C250 320 290 380 270 440 C250 470 205 430 200 360"
          fill="color-mix(in srgb, var(--color-border-strong) 6%, transparent)"
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
        fill="color-mix(in srgb, var(--color-text-inverse) 30%, transparent)"
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
        fill="color-mix(in srgb, var(--color-text-inverse) 30%, transparent)"
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
        fill="color-mix(in srgb, var(--color-border-strong) 6%, transparent)"
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
        fill="color-mix(in srgb, var(--color-border-strong) 12%, transparent)"
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
        fill="color-mix(in srgb, var(--color-text-inverse) 30%, transparent)"
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

  const leafFill = "color-mix(in srgb, var(--color-border-strong) 10%, transparent)";
  const leafStroke = "var(--color-border-strong)";
  const veinStroke = "var(--color-primary-muted)";
  const chevronFill = "color-mix(in srgb, var(--color-text-inverse) 14%, transparent)";

  const leafPath =
    "M0 8 C-30 6,-52 -16,-56 -50 C-54 -74,-36 -92,-16 -98 C-6 -100,-2 -96,0 -88 C2 -96,6 -100,16 -98 C36 -92,54 -74,56 -50 C52 -16,30 6,0 8Z";

  const chevronPath = "M0 -52 L-16 -68 L-7 -70 L0 -60 L7 -70 L16 -68Z";

  const rotations = [0, 90, 180, 270] as const;

  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g transform={`translate(${cx} ${cy})`}>
        <g opacity="0.18" fill="color-mix(in srgb, var(--color-header-bg) 35%, transparent)">
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

        <circle cx="0" cy="0" r="4.5" fill="color-mix(in srgb, var(--color-text-inverse) 22%, transparent)" />
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
        fill="color-mix(in srgb, var(--color-text-inverse) 30%, transparent)"
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
        fill="color-mix(in srgb, var(--color-text-inverse) 30%, transparent)"
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
        fill="color-mix(in srgb, var(--color-border-strong) 8%, transparent)"
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
        fill="color-mix(in srgb, var(--color-border-strong) 6%, transparent)"
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
        fill="color-mix(in srgb, var(--color-border-strong) 10%, transparent)"
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
        fill="color-mix(in srgb, var(--color-text-inverse) 30%, transparent)"
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
          fill="color-mix(in srgb, var(--color-border-strong) 10%, transparent)"
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
        fill="color-mix(in srgb, var(--color-text-inverse) 30%, transparent)"
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
              fill="color-mix(in srgb, var(--color-border-strong) 6%, transparent)"
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
        fill="color-mix(in srgb, var(--color-border-strong) 12%, transparent)"
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
        fill="color-mix(in srgb, var(--color-text-inverse) 30%, transparent)"
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
          fill="color-mix(in srgb, var(--color-border-strong) 22%, transparent)"
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
      fill="color-mix(in srgb, var(--color-border-strong) 14%, transparent)"
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

const PLATE_INK = "var(--color-border-strong)";
const PLATE_STEM = "var(--color-primary-muted)";
const PLATE_WASH = "color-mix(in srgb, var(--color-border-strong) 9%, transparent)";
const PLATE_ACCENT = "var(--color-accent)";

function PlateCaption({ x, children }: { x: number; children: string }) {
  return (
    <text
      x={x}
      y="490"
      fontFamily={MONO}
      fontSize="8"
      fill="color-mix(in srgb, var(--color-text-inverse) 30%, transparent)"
      letterSpacing="2"
    >
      {children}
    </text>
  );
}

function RoseSprig({
  x,
  y,
  rot,
  scale = 1,
}: {
  x: number;
  y: number;
  rot: number;
  scale?: number;
}) {
  const leaflet =
    "M0 3 C-11 -2 -13 -20 -2 -36 C4 -32 9 -16 7 -3 C5 3 1 3 0 3 Z";

  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${scale})`}>
      <path
        d="M0 4 C1 -12 0 -26 0 -40"
        fill="none"
        stroke={PLATE_STEM}
        strokeWidth="1.15"
        opacity="0.75"
      />
      {[
        { tx: 0, ty: -36, angle: -4, scale: 1 },
        { tx: -1, ty: -18, angle: -52, scale: 0.78 },
        { tx: 2, ty: -16, angle: 46, scale: 0.74 },
      ].map((leaf) => (
        <g
          key={`${leaf.tx}-${leaf.angle}`}
          transform={`translate(${leaf.tx} ${leaf.ty}) rotate(${leaf.angle}) scale(${leaf.scale})`}
        >
          <path
            d={leaflet}
            fill={PLATE_WASH}
            stroke={PLATE_INK}
            strokeWidth="0.8"
            strokeLinejoin="round"
            opacity="0.7"
          />
          <path
            d="M0 1 L0 -30"
            fill="none"
            stroke={PLATE_STEM}
            strokeWidth="0.45"
            opacity="0.5"
          />
        </g>
      ))}
    </g>
  );
}

function RoseIllustration({ className }: { className?: string }) {
  const petal = {
    fill: PLATE_WASH,
    stroke: PLATE_INK,
    strokeWidth: 0.9,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M200 198 C198 280 206 370 198 470"
        stroke={PLATE_STEM}
        strokeWidth="1.45"
        fill="none"
        opacity="0.55"
      />
      <g fill={PLATE_INK} opacity="0.55">
        <path d="M200 286 L184 278 L200 298 Z" />
        <path d="M200 344 L216 336 L200 356 Z" />
        <path d="M200 404 L184 398 L200 416 Z" />
      </g>
      <RoseSprig x={198} y={300} rot={-52} scale={1.35} />
      <RoseSprig x={202} y={372} rot={46} scale={1.2} />
      <g opacity="0.55">
        <path
          d="M186 186 C166 202 152 220 166 228 C178 214 188 198 194 188 Z"
          fill={PLATE_WASH}
          stroke={PLATE_INK}
          strokeWidth="0.75"
        />
        <path
          d="M214 186 C234 202 248 220 234 228 C222 214 212 198 206 188 Z"
          fill={PLATE_WASH}
          stroke={PLATE_INK}
          strokeWidth="0.75"
        />
        <path
          d="M194 194 C186 214 196 230 206 220 C204 206 200 196 194 194 Z"
          fill={PLATE_WASH}
          stroke={PLATE_INK}
          strokeWidth="0.75"
        />
      </g>
      <path
        d="M200 172 C162 156 140 112 158 78 C174 50 200 58 208 90 C200 122 198 154 200 172 Z"
        {...petal}
        opacity="0.5"
      />
      <path
        d="M200 172 C238 156 260 112 242 78 C226 50 200 58 192 90 C200 122 202 154 200 172 Z"
        {...petal}
        opacity="0.5"
      />
      <path
        d="M192 180 C142 166 124 118 148 86 C166 62 192 78 198 114 C204 146 198 170 192 180 Z"
        {...petal}
        opacity="0.62"
      />
      <path
        d="M208 180 C258 166 276 118 252 86 C234 62 208 78 202 114 C196 146 202 170 208 180 Z"
        {...petal}
        opacity="0.62"
      />
      <path
        d="M154 148 C142 182 166 214 200 210 C234 214 258 182 246 148 C226 176 174 176 154 148 Z"
        {...petal}
        opacity="0.7"
      />
      <path
        d="M184 164 C170 142 168 104 186 78 C196 64 208 74 206 96 C202 128 194 152 184 164 Z"
        fill="color-mix(in srgb, var(--color-border-strong) 12%, transparent)"
        stroke={PLATE_INK}
        strokeWidth="0.8"
        strokeLinejoin="round"
        opacity="0.78"
      />
      <path
        d="M216 164 C230 142 232 104 214 78 C204 64 192 74 194 96 C198 128 206 152 216 164 Z"
        fill="color-mix(in srgb, var(--color-border-strong) 12%, transparent)"
        stroke={PLATE_INK}
        strokeWidth="0.8"
        strokeLinejoin="round"
        opacity="0.78"
      />
      <path
        d="M200 160 C190 136 192 102 200 76 C208 102 210 136 200 160 Z"
        fill="color-mix(in srgb, var(--color-border-strong) 14%, transparent)"
        stroke={PLATE_INK}
        strokeWidth="0.8"
        strokeLinejoin="round"
        opacity="0.85"
      />
      <path
        d="M200 148 C194 128 196 110 200 96 M190 136 C184 120 186 108 192 98"
        fill="none"
        stroke={PLATE_INK}
        strokeWidth="0.6"
        opacity="0.55"
      />
      <circle cx="200" cy="118" r="2.4" fill={PLATE_ACCENT} opacity="0.9" />
      <PlateCaption x={125}>ROSA · GALLICA</PlateCaption>
    </svg>
  );
}

function PeonyLeaf({ x, y, rot }: { x: number; y: number; rot: number }) {
  const lobe =
    "M0 4 C-16 0 -26 -22 -8 -42 C0 -30 10 -8 0 4 Z";

  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <path
        d="M0 10 C-1 -6 -2 -18 0 -32"
        fill="none"
        stroke={PLATE_STEM}
        strokeWidth="0.8"
        opacity="0.5"
      />
      {[
        "translate(0 -28) rotate(-6) scale(1.2)",
        "translate(0 -30) rotate(-34) scale(0.82)",
        "translate(1 -28) rotate(30) scale(0.78)",
        "translate(-4 -12) rotate(-62) scale(0.7)",
        "translate(6 -10) rotate(54) scale(0.66)",
      ].map((transform) => (
        <path
          key={transform}
          d={lobe}
          transform={transform}
          fill={PLATE_WASH}
          stroke={PLATE_INK}
          strokeWidth="0.8"
          strokeLinejoin="round"
          opacity="0.68"
        />
      ))}
    </g>
  );
}

function PeonyIllustration({ className }: { className?: string }) {
  const cx = 200;
  const cy = 176;
  const petal =
    "M0 16 C-24 6 -44 -16 -36 -50 C-32 -68 -18 -60 -16 -76 C-10 -88 -2 -72 2 -82 C8 -70 14 -90 22 -78 C28 -62 40 -66 42 -46 C50 -16 26 4 0 16 Z";
  const layers = [
    { count: 9, scale: 1.08, spin: 0, opacity: 0.5 },
    { count: 11, scale: 0.78, spin: 12, opacity: 0.62 },
    { count: 10, scale: 0.52, spin: 6, opacity: 0.74 },
    { count: 8, scale: 0.3, spin: 18, opacity: 0.82 },
  ] as const;

  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M200 250 C202 320 196 390 202 470"
        stroke={PLATE_STEM}
        strokeWidth="1.6"
        fill="none"
        opacity="0.55"
      />
      <PeonyLeaf x={198} y={318} rot={-36} />
      <PeonyLeaf x={204} y={378} rot={28} />
      <g transform={`translate(${cx} ${cy})`}>
        {layers.map((layer) =>
          Array.from({ length: layer.count }).map((_, i) => (
            <path
              key={`${layer.scale}-${i}`}
              d={petal}
              transform={`rotate(${(i / layer.count) * 360 + layer.spin}) scale(${layer.scale})`}
              fill={PLATE_WASH}
              stroke={PLATE_INK}
              strokeWidth="0.75"
              strokeLinejoin="round"
              opacity={layer.opacity}
            />
          )),
        )}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          return (
            <circle
              key={`stamen-${i}`}
              cx={Math.cos(angle) * 7}
              cy={Math.sin(angle) * 7}
              r="1.7"
              fill={PLATE_ACCENT}
              opacity="0.8"
            />
          );
        })}
        <circle r="3" fill={PLATE_ACCENT} opacity="0.9" />
      </g>
      <PlateCaption x={100}>PAEONIA · LACTIFLORA</PlateCaption>
    </svg>
  );
}

function LilyTepal({
  angle,
  narrow = false,
}: {
  angle: number;
  narrow?: boolean;
}) {
  const petal = narrow
    ? "M0 12 C-12 2 -16 -26 -8 -70 C-2 -92 6 -84 8 -66 C16 -24 14 2 0 12 Z"
    : "M0 16 C-24 4 -34 -22 -18 -68 C-8 -98 2 -86 6 -68 C14 -104 26 -88 26 -64 C38 -20 26 4 0 16 Z";

  return (
    <g transform={`rotate(${angle})`}>
      <path
        d={petal}
        fill={PLATE_WASH}
        stroke={PLATE_INK}
        strokeWidth="0.9"
        strokeLinejoin="round"
        opacity={narrow ? 0.72 : 0.58}
      />
      <path
        d={narrow ? "M0 6 L0 -66" : "M0 8 L0 -70"}
        fill="none"
        stroke={PLATE_STEM}
        strokeWidth="0.5"
        opacity="0.45"
      />
      <path
        d={narrow ? "M-4 -58 C-8 -70 -2 -78 4 -68" : "M-6 -62 C-12 -78 -2 -86 6 -72"}
        fill="none"
        stroke={PLATE_INK}
        strokeWidth="0.55"
        opacity="0.4"
      />
    </g>
  );
}

function LilyIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M200 230 C198 310 204 390 200 470"
        stroke={PLATE_STEM}
        strokeWidth="1.4"
        fill="none"
        opacity="0.55"
      />
      <path
        d="M206 318 C248 294 282 270 308 250"
        stroke={PLATE_STEM}
        strokeWidth="1.15"
        fill="none"
        opacity="0.6"
      />
      <g transform="translate(308 250) rotate(32)">
        <path
          d="M0 0 C-8 10 -9 28 0 42 C9 28 8 10 0 0 Z"
          fill={PLATE_WASH}
          stroke={PLATE_INK}
          strokeWidth="0.85"
          opacity="0.65"
        />
        <path d="M0 6 L0 36" stroke={PLATE_STEM} strokeWidth="0.45" opacity="0.45" />
      </g>
      <g transform="translate(170 318) rotate(-62)">
        <path
          d="M0 0 C-12 28 -10 70 0 108 C12 70 12 28 0 0 Z"
          fill={PLATE_WASH}
          stroke={PLATE_INK}
          strokeWidth="0.85"
          opacity="0.6"
        />
        <path d="M0 6 L0 98" stroke={PLATE_STEM} strokeWidth="0.5" fill="none" opacity="0.4" />
      </g>
      <g transform="translate(230 368) rotate(58)">
        <path
          d="M0 0 C-11 24 -9 62 0 96 C11 62 11 24 0 0 Z"
          fill={PLATE_WASH}
          stroke={PLATE_INK}
          strokeWidth="0.85"
          opacity="0.58"
        />
        <path d="M0 6 L0 86" stroke={PLATE_STEM} strokeWidth="0.5" fill="none" opacity="0.4" />
      </g>
      <g transform="translate(200 168)">
        <LilyTepal angle={0} />
        <LilyTepal angle={120} />
        <LilyTepal angle={240} />
        <LilyTepal angle={60} narrow />
        <LilyTepal angle={180} narrow />
        <LilyTepal angle={300} narrow />
        {Array.from({ length: 6 }).map((_, i) => (
          <g key={`stamen-${i}`} transform={`rotate(${i * 60 + 30})`}>
            <path
              d="M0 0 L0 -38"
              stroke={PLATE_INK}
              strokeWidth="0.7"
              opacity="0.7"
            />
            <ellipse cx="0" cy="-42" rx="3.1" ry="6.4" fill={PLATE_ACCENT} opacity="0.9" />
          </g>
        ))}
        <path d="M0 2 L0 -16" stroke={PLATE_INK} strokeWidth="0.8" opacity="0.65" />
        <circle cy="-18" r="2.5" fill={PLATE_ACCENT} opacity="0.9" />
      </g>
      <PlateCaption x={115}>LILIUM · CANDIDUM</PlateCaption>
    </svg>
  );
}

function HydrangeaFloret({
  x,
  y,
  scale,
  rot,
}: {
  x: number;
  y: number;
  scale: number;
  rot: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot}) scale(${scale})`}>
      {[0, 90, 180, 270].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <circle
            key={angle}
            cx={Math.cos(rad) * 7.2}
            cy={Math.sin(rad) * 7.2}
            r="6.4"
            fill="color-mix(in srgb, var(--color-border-strong) 12%, transparent)"
            stroke={PLATE_INK}
            strokeWidth="0.75"
            opacity="0.8"
          />
        );
      })}
      <circle r="2" fill={PLATE_ACCENT} opacity="0.92" />
    </g>
  );
}

const HYDRANGEA_FLORETS = (() => {
  const items: { x: number; y: number; s: number; rot: number }[] = [
    { x: 0, y: 4, s: 1.08, rot: 12 },
  ];
  const rings = [
    { r: 24, n: 6, s: 0.98, turn: 8 },
    { r: 42, n: 9, s: 0.86, turn: 18 },
    { r: 58, n: 10, s: 0.72, turn: 4 },
  ] as const;

  for (const ring of rings) {
    for (let i = 0; i < ring.n; i++) {
      const angle = (i / ring.n) * Math.PI * 2 + (ring.turn * Math.PI) / 180;
      items.push({
        x: Math.cos(angle) * ring.r,
        y: Math.sin(angle) * ring.r * 0.8,
        s: ring.s,
        rot: (i * 19) % 45,
      });
    }
  }

  return items.sort((a, b) => a.y - b.y);
})();

function HydrangeaIllustration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M200 230 C198 310 204 390 200 470"
        stroke={PLATE_STEM}
        strokeWidth="1.55"
        fill="none"
        opacity="0.55"
      />
      <g transform="translate(196 318) rotate(-38) scale(1.15)">
        <path
          d="M0 2 C-20 -4 -30 -36 -16 -68 C-6 -82 6 -78 10 -62 C26 -48 24 -12 6 2 C3 4 0 2 0 2 Z"
          fill={PLATE_WASH}
          stroke={PLATE_INK}
          strokeWidth="0.9"
          strokeLinejoin="round"
          opacity="0.62"
        />
        <path
          d="M2 0 C0 -24 -2 -48 -4 -66 M2 -22 C-10 -20 -16 -16 -22 -10 M2 -40 C-8 -38 -14 -32 -18 -26"
          fill="none"
          stroke={PLATE_STEM}
          strokeWidth="0.45"
          opacity="0.4"
        />
        <path
          d="M-14 -18 L-20 -14 M-16 -36 L-24 -34 M-10 -54 L-16 -58 M12 -16 L20 -12 M14 -36 L22 -34 M8 -54 L14 -60"
          fill="none"
          stroke={PLATE_INK}
          strokeWidth="0.6"
          opacity="0.4"
        />
      </g>
      <g transform="translate(206 372) rotate(32) scale(1.12)">
        <path
          d="M0 2 C-16 -2 -24 -30 -12 -58 C-4 -70 6 -66 8 -52 C22 -40 20 -8 4 2 Z"
          fill={PLATE_WASH}
          stroke={PLATE_INK}
          strokeWidth="0.9"
          strokeLinejoin="round"
          opacity="0.6"
        />
        <path
          d="M2 0 L0 -54 M2 -18 C-8 -16 -12 -12 -16 -8 M2 -34 C-6 -32 -10 -28 -14 -22"
          fill="none"
          stroke={PLATE_STEM}
          strokeWidth="0.45"
          opacity="0.4"
        />
      </g>
      <g transform="translate(200 148)">
        {HYDRANGEA_FLORETS.map((floret) => (
          <HydrangeaFloret
            key={`${floret.x}-${floret.y}`}
            x={floret.x}
            y={floret.y}
            scale={floret.s}
            rot={floret.rot}
          />
        ))}
      </g>
      <PlateCaption x={88}>HYDRANGEA · MACROPHYLLA</PlateCaption>
    </svg>
  );
}

const SUNFLOWER_SEEDS = Array.from({ length: 96 }, (_, i) => {
  const golden = Math.PI * (3 - Math.sqrt(5));
  const radius = 2.35 * Math.sqrt(i);
  const angle = i * golden;
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
    r: 1.05 + (i / 96) * 0.8,
  };
});

function SunflowerLeaf({ x, y, rot }: { x: number; y: number; rot: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`}>
      <path
        d="M0 0 C-24 20 -30 62 -8 102 C4 114 16 104 16 86 C36 70 32 26 8 4 C4 0 0 0 0 0 Z"
        fill={PLATE_WASH}
        stroke={PLATE_INK}
        strokeWidth="0.9"
        strokeLinejoin="round"
        opacity="0.64"
      />
      <path
        d="M4 8 C2 40 2 72 4 100 M4 34 C-8 30 -16 24 -24 16 M4 34 C16 32 24 26 30 18 M4 58 C-8 56 -16 50 -22 42 M4 58 C14 56 22 50 28 42 M4 80 C-4 78 -10 74 -14 68 M4 80 C10 78 16 74 20 68"
        fill="none"
        stroke={PLATE_STEM}
        strokeWidth="0.5"
        opacity="0.45"
      />
      <path
        d="M-16 28 L-24 22 M-20 52 L-30 50 M-12 78 L-20 84 M18 30 L28 24 M24 54 L34 52 M16 78 L24 86"
        fill="none"
        stroke={PLATE_INK}
        strokeWidth="0.65"
        strokeLinecap="round"
        opacity="0.45"
      />
    </g>
  );
}

function SunflowerIllustration({ className }: { className?: string }) {
  const cx = 200;
  const cy = 148;
  const petal =
    "M0 -32 C-8 -40 -11 -60 -5 -80 C-2 -90 2 -90 5 -80 C11 -60 8 -40 0 -32 Z";
  const bract = "M0 -26 C-4 -36 -4 -52 0 -66 C4 -52 4 -36 0 -26 Z";

  return (
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M200 230 C198 310 204 390 200 470"
        stroke={PLATE_STEM}
        strokeWidth="1.8"
        fill="none"
        opacity="0.58"
      />
      <SunflowerLeaf x={198} y={278} rot={-42} />
      <SunflowerLeaf x={204} y={340} rot={34} />
      <g transform={`translate(${cx} ${cy})`}>
        {Array.from({ length: 24 }).map((_, i) => (
          <path
            key={`bract-${i}`}
            d={bract}
            transform={`rotate(${i * 15 + 7.5})`}
            fill={PLATE_WASH}
            stroke={PLATE_INK}
            strokeWidth="0.6"
            opacity="0.4"
          />
        ))}
        {Array.from({ length: 24 }).map((_, i) => (
          <path
            key={`petal-${i}`}
            d={petal}
            transform={`rotate(${i * 15}) scale(${i % 2 === 0 ? 1 : 0.92})`}
            fill="color-mix(in srgb, var(--color-border-strong) 7%, transparent)"
            stroke={PLATE_INK}
            strokeWidth="0.8"
            strokeLinejoin="round"
            opacity={i % 2 === 0 ? 0.7 : 0.55}
          />
        ))}
        <circle
          r="31"
          fill="color-mix(in srgb, var(--color-border-strong) 14%, transparent)"
          stroke={PLATE_INK}
          strokeWidth="0.8"
          opacity="0.75"
        />
        {SUNFLOWER_SEEDS.map((seed, i) => (
          <circle
            key={`seed-${i}`}
            cx={seed.x}
            cy={seed.y}
            r={seed.r}
            fill={i % 7 === 0 ? PLATE_ACCENT : PLATE_INK}
            opacity={i % 7 === 0 ? 0.85 : 0.45}
          />
        ))}
      </g>
      <PlateCaption x={108}>HELIANTHUS · ANNUUS</PlateCaption>
    </svg>
  );
}
