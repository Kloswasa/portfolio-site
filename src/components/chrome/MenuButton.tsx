'use client';

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useNav } from "@/src/context/NavContext";

const FLOWERS = ["lotus", "sharp", "five"] as const;
type FlowerId = (typeof FLOWERS)[number];

/** Sit still this long after entering, or after the last movement, before the icon turns. */
const IDLE_MS = 1500;

const flipEase = [0.4, 0, 0.2, 1] as const;

function pickFlower(current: FlowerId): FlowerId {
  const pool = FLOWERS.filter((id) => id !== current);
  const index = Math.floor(Math.random() * pool.length);
  return pool[index] ?? FLOWERS[0];
}

function FlowerIcon({ id }: { id: FlowerId }) {
  const common = {
    viewBox: "0 0 36 36",
    fill: "none",
    "aria-hidden": true as const,
    className: "h-6 w-6",
  };

  if (id === "lotus") {
    return (
      <svg {...common}>
        <path
          d="M18 10.5C20.6 8.4 20.6 6.275 18 4.125C15.4 6.275 15.4 8.4 18 10.5ZM23.31 12.69C26.63 13.05 28.13 11.55 27.81 8.19C24.45 7.87 22.95 9.37 23.31 12.69ZM25.5 18C27.6 20.6 29.725 20.6 31.875 18C29.725 15.4 27.6 15.4 25.5 18ZM23.31 23.31C22.95 26.63 24.45 28.13 27.81 27.81C28.13 24.45 26.63 22.95 23.31 23.31ZM18 25.5C15.4 27.6 15.4 29.725 18 31.875C20.6 29.725 20.6 27.6 18 25.5ZM12.69 23.31C9.37 22.95 7.87 24.45 8.19 27.81C11.55 28.13 13.05 26.63 12.69 23.31ZM10.5 18C8.4 15.4 6.275 15.4 4.125 18C6.275 20.6 8.4 20.6 10.5 18ZM12.69 12.69C13.05 9.37 11.55 7.87 8.19 8.19C7.87 11.55 9.37 13.05 12.69 12.69Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (id === "sharp") {
    return (
      <svg {...common}>
        <path
          d="M14.9789 9.13596C14.9789 7.40399 16.3315 6 18 6C19.6685 6 21.0211 7.40399 21.0211 9.13596C21.0211 10.8679 19.6685 12.2719 18 12.2719C16.3315 12.2719 14.9789 10.8679 14.9789 9.13596ZM23.9578 15.9075C23.9578 14.1756 25.3103 12.7716 26.9789 12.7716C28.6474 12.7716 30 14.1756 30 15.9075C30 17.6395 28.6474 19.0435 26.9789 19.0435C25.3103 19.0435 23.9578 17.6395 23.9578 15.9075ZM20.5282 26.864C20.5282 25.1321 21.8807 23.7281 23.5493 23.7281C25.2178 23.7281 26.5704 25.1321 26.5704 26.864C26.5704 28.596 25.2178 30 23.5493 30C21.8807 30 20.5282 28.596 20.5282 26.864ZM9.4296 26.864C9.4296 25.1321 10.7822 23.7281 12.4507 23.7281C14.1193 23.7281 15.4718 25.1321 15.4718 26.864C15.4718 28.596 14.1193 30 12.4507 30C10.7822 30 9.4296 28.596 9.4296 26.864ZM6 15.9075C6 14.1756 7.35258 12.7716 9.02112 12.7716C10.6897 12.7716 12.0422 14.1756 12.0422 15.9075C12.0422 17.6395 10.6897 19.0435 9.02112 19.0435C7.35258 19.0435 6 17.6395 6 15.9075Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path
        d="M14.1135 8.616C11.8305 7.437 9.627 7.281 8.454 8.454C7.281 9.6255 7.437 11.829 8.616 14.112M14.1135 8.616C15.3532 9.26887 16.4849 10.1087 17.469 11.106C19.044 12.6795 19.683 14.076 19.491 15.396M14.1135 8.616C14.895 6.168 16.3425 4.5 18 4.5C19.6575 4.5 21.1065 6.168 21.8865 8.616M20.8965 17.214C21.966 16.4145 22.5 14.976 22.5 12.75C22.5089 11.3487 22.302 9.95434 21.8865 8.616M8.616 21.8865C9.27087 20.6481 10.1105 19.5166 11.106 18.531C12.6795 16.9575 14.076 16.317 15.396 16.509C15.789 15.8265 16.4385 15.312 17.214 15.102C17.9818 14.8938 18.8008 14.999 19.491 15.3945C19.833 15.5904 20.1345 15.8519 20.3754 16.1638C20.6163 16.4757 20.7934 16.8336 20.8965 17.214C21.1047 17.9818 20.9995 18.7993 20.604 19.4895M21.8865 8.616C24.1695 7.437 26.3745 7.281 27.546 8.454C28.719 9.6255 28.563 11.8305 27.384 14.1135M27.384 14.1135C29.8305 14.8935 31.5 16.3425 31.5 18.0015C31.5 19.659 29.8305 21.1065 27.384 21.8865C26.0457 22.3025 24.6514 22.5099 23.25 22.5015C21.024 22.5015 19.5855 21.966 18.786 20.8965M27.384 14.1135C26.7291 15.3519 25.8895 16.4834 24.894 17.469C23.3205 19.044 21.924 19.683 20.604 19.491M16.509 20.604C16.317 21.924 16.956 23.3205 18.531 24.894C19.5166 25.8895 20.6481 26.7291 21.8865 27.384M21.8865 27.384C24.1695 28.563 26.373 28.719 27.546 27.546C28.7175 26.3745 28.563 24.171 27.384 21.888M15.1035 18.786C14.034 19.5855 13.5 21.024 13.5 23.25C13.5 24.7485 13.7235 26.163 14.1135 27.384C14.8935 29.832 16.3425 31.5 18 31.5C19.6575 31.5 21.105 29.832 21.8865 27.384M14.1135 27.384C11.8305 28.563 9.627 28.7175 8.454 27.546C7.281 26.3745 7.437 24.1695 8.616 21.8865M8.616 21.8865C6.1695 21.1065 4.5 19.656 4.5 17.997C4.5 16.341 6.1695 14.892 8.616 14.115C9.95426 13.699 11.3486 13.4916 12.75 13.5C14.976 13.5 16.4145 14.034 17.214 15.1035M20.6025 19.4895C20.2078 20.1801 19.5549 20.6857 18.7875 20.895C18.4069 20.9985 18.0096 21.026 17.6184 20.9758C17.2271 20.9256 16.8497 20.7987 16.5075 20.6025C15.8265 20.2095 15.3135 19.56 15.1035 18.7845C14.8957 18.0165 15.0015 17.1975 15.3975 16.5075"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function MenuButton() {
  const { navOpen, setNavOpen } = useNav();
  const reduceMotion = useReducedMotion();
  const [flower, setFlower] = useState<FlowerId>("lotus");
  const [idle, setIdle] = useState(false);

  const spring = reduceMotion
    ? { duration: 0 }
    : { type: "spring", stiffness: 400, damping: 30 } as const;

  const fade = reduceMotion ? { duration: 0 } : { duration: 0.2 } as const;

  const showFlower = idle && !navOpen;

  useEffect(() => {
    if (reduceMotion || navOpen) {
      setIdle(false);
      return;
    }

    let timer = window.setTimeout(() => {
      setFlower((current) => pickFlower(current));
      setIdle(true);
    }, IDLE_MS);

    const arm = () => {
      window.clearTimeout(timer);
      setIdle(false);
      timer = window.setTimeout(() => {
        setFlower((current) => pickFlower(current));
        setIdle(true);
      }, IDLE_MS);
    };

    const events = ["pointermove", "pointerdown", "wheel", "keydown", "touchstart"] as const;
    for (const event of events) {
      window.addEventListener(event, arm, { passive: true });
    }

    return () => {
      window.clearTimeout(timer);
      for (const event of events) {
        window.removeEventListener(event, arm);
      }
    };
  }, [reduceMotion, navOpen]);

  return (
    <button
      type="button"
      onClick={() => setNavOpen(!navOpen)}
      aria-label={navOpen ? "Close menu" : "Open menu"}
      aria-expanded={navOpen}
      className={[
        "relative z-[500] flex h-10 w-10 items-center justify-center pointer-events-auto",
        navOpen ? "text-info-text" : "text-text",
      ].join(" ")}
    >
      <span className="relative block h-6 w-6">
        <AnimatePresence mode="wait" initial={false}>
          {showFlower ? (
            <motion.span
              key={flower}
              className="absolute inset-0 flex items-center justify-center"
              initial={reduceMotion ? false : { rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { rotate: 90, opacity: 0 }}
              transition={
                reduceMotion ? { duration: 0 } : { duration: 0.45, ease: flipEase }
              }
            >
              <FlowerIcon id={flower} />
            </motion.span>
          ) : (
            <motion.span
              key="bars"
              className="absolute inset-0 flex items-center justify-center"
              initial={reduceMotion ? false : { rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { rotate: 90, opacity: 0 }}
              transition={
                reduceMotion ? { duration: 0 } : { duration: 0.45, ease: flipEase }
              }
            >
              <span className="flex w-6 flex-col gap-1.25">
                <motion.span
                  className="block h-0.5 origin-center self-end rounded-none bg-current"
                  initial={{ width: 15, y: 0, rotate: 0 }}
                  animate={
                    navOpen
                      ? { width: 24, y: 7, rotate: 45 }
                      : { width: 15, y: 0, rotate: 0 }
                  }
                  transition={spring}
                />

                <motion.span
                  className="block h-0.5 origin-center rounded-none bg-current"
                  initial={{ width: 24, opacity: 1 }}
                  animate={
                    navOpen ? { width: 0, opacity: 0 } : { width: 24, opacity: 1 }
                  }
                  transition={fade}
                />

                <motion.span
                  className="block h-0.5 origin-center self-start rounded-none bg-current"
                  initial={{ width: 15, y: 0, rotate: 0 }}
                  animate={
                    navOpen
                      ? { width: 24, y: -7, rotate: -45 }
                      : { width: 15, y: 0, rotate: 0 }
                  }
                  transition={spring}
                />
              </span>
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </button>
  );
}
