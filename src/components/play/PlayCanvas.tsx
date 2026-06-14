"use client";

import { SKETCHES } from "@/src/lib/play/sketches";
import { useEffect, useRef } from "react";

export interface PlayCanvasHandle {
  restart: () => void;
  stop: () => void;
  start: () => void;
}

interface PlayCanvasProps {
  sketch: string;
  paused?: boolean;
  className?: string;
  onReady?: (handle: PlayCanvasHandle) => void;
}

export function PlayCanvas({
  sketch,
  paused = false,
  className,
  onReady,
}: PlayCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const runningRef = useRef(false);
  const inViewRef = useRef(false);
  const frameFnRef = useRef<((t: number) => void) | null>(null);
  const onReadyRef = useRef(onReady);

  useEffect(() => {
    onReadyRef.current = onReady;
  }, [onReady]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const factory = SKETCHES[sketch];
    if (!factory) return;

    let w = 0;
    let h = 0;

    const setup = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.max(1, rect.width);
      h = Math.max(1, rect.height);
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      frameFnRef.current = factory(ctx, w, h);
      frameFnRef.current(0);
    };

    const loop = (t: number) => {
      frameFnRef.current?.(t);
      rafRef.current = requestAnimationFrame(loop);
    };

    const start = () => {
      if (runningRef.current || paused || !inViewRef.current) return;
      runningRef.current = true;
      rafRef.current = requestAnimationFrame(loop);
    };

    const stop = () => {
      runningRef.current = false;
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const restart = () => {
      stop();
      setup();
      start();
    };

    setup();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          inViewRef.current = entry.isIntersecting;
          if (entry.isIntersecting) start();
          else stop();
        });
      },
      { threshold: 0.08 },
    );
    io.observe(canvas);

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const wasRunning = runningRef.current;
        stop();
        setup();
        if (wasRunning && inViewRef.current) start();
      }, 220);
    };
    window.addEventListener("resize", onResize);

    onReadyRef.current?.({ restart, stop, start });

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("resize", onResize);
      clearTimeout(resizeTimer);
    };
  }, [sketch]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (paused) {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      runningRef.current = false;
    } else if (inViewRef.current) {
      if (!runningRef.current && frameFnRef.current) {
        runningRef.current = true;
        const loop = (t: number) => {
          frameFnRef.current?.(t);
          rafRef.current = requestAnimationFrame(loop);
        };
        rafRef.current = requestAnimationFrame(loop);
      }
    }
  }, [paused]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
