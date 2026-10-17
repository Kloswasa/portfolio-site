'use client';

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useNav } from "@/src/context/NavContext";

const FLOWERS = ["lotus", "sharp", "five", "geometric", "blossom", "rosette"] as const;
type FlowerId = (typeof FLOWERS)[number];

/** Sit still this long after the last movement before the icon first turns. */
const IDLE_MS = 5000;
/** Keep turning to another icon while there is still no interaction. */
const CYCLE_MS = 8000;

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
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 21C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15C16.3431 15 15 16.3431 15 18C15 19.6569 16.3431 21 18 21Z"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (id === "geometric") {
    return (
      <svg {...common}>
        <path
          d="M18.4896 21.6625C20.9739 21.6628 22.9885 18.0824 22.9879 13.6652C22.9887 9.24866 20.9749 5.66839 18.4902 5.66843C16.0056 5.66847 13.9913 9.24917 13.9915 13.6661C13.9915 18.0826 16.0056 21.6632 18.4896 21.6632"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.6453 18.5094C21.6457 20.9937 18.065 23.0079 13.6481 23.0077C9.2312 23.0081 5.65093 20.9943 5.65097 18.5096C5.65101 16.025 9.2317 14.0107 13.6486 14.011C18.0651 14.0109 21.6457 16.0251 21.6457 18.509"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.3171 18.4939C15.3168 16.0096 18.8975 13.9953 23.3144 13.9956C27.7313 13.9951 31.3115 16.009 31.3115 18.4936C31.3114 20.9783 27.7308 22.9926 23.3139 22.9923C18.8973 22.9924 15.3167 20.9782 15.3168 18.4942"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.4706 15.3365C15.9863 15.3362 13.972 18.9169 13.9722 23.3338C13.9718 27.7507 15.9856 31.3309 18.4703 31.3309C20.9549 31.3309 22.9692 27.7502 22.969 23.3333C22.969 18.9167 20.9549 15.3361 18.4709 15.3362"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (id === "blossom") {
    return (
      <svg {...common}>
        <path
          d="M14.9203 13.6422C13.9709 12.6928 13.4375 11.4052 13.4375 10.0625C13.4375 8.71984 13.9709 7.43217 14.9203 6.48277C15.8697 5.53337 17.1573 5 18.5 5C19.8427 5 21.1303 5.53337 22.0797 6.48277C23.0291 7.43217 23.5625 8.71984 23.5625 10.0625C23.5625 11.4052 23.0291 12.6928 22.0797 13.6422C21.1303 14.5916 19.8427 15.125 18.5 15.125C17.1573 15.125 15.8697 14.5916 14.9203 13.6422Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.38536 20.4373C5.13095 19.8231 5 19.1648 5 18.5C5 17.8352 5.13095 17.1769 5.38536 16.5627C5.63977 15.9485 6.01268 15.3904 6.48277 14.9203C6.95287 14.4502 7.51095 14.0773 8.12516 13.8229C8.73938 13.5684 9.39768 13.4375 10.0625 13.4375C10.7273 13.4375 11.3856 13.5684 11.9998 13.8229C12.614 14.0773 13.1721 14.4502 13.6422 14.9203C14.1123 15.3904 14.4852 15.9485 14.7396 16.5627C14.9941 17.1769 15.125 17.8352 15.125 18.5C15.125 19.1648 14.9941 19.8231 14.7396 20.4373C14.4852 21.0515 14.1123 21.6096 13.6422 22.0797C13.1721 22.5498 12.614 22.9227 11.9998 23.1771C11.3856 23.4316 10.7273 23.5625 10.0625 23.5625C9.39768 23.5625 8.73938 23.4316 8.12516 23.1771C7.51095 22.9227 6.95287 22.5498 6.48277 22.0797C6.01268 21.6096 5.63977 21.0515 5.38536 20.4373Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.875 18.5C21.875 19.8427 22.4084 21.1303 23.3578 22.0797C24.3072 23.0291 25.5948 23.5625 26.9375 23.5625C28.2802 23.5625 29.5678 23.0291 30.5172 22.0797C31.4666 21.1303 32 19.8427 32 18.5C32 17.1573 31.4666 15.8697 30.5172 14.9203C29.5678 13.9709 28.2802 13.4375 26.9375 13.4375C25.5948 13.4375 24.3072 13.9709 23.3578 14.9203C22.4084 15.8697 21.875 17.1573 21.875 18.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.4375 26.9375C13.4375 28.2802 13.9709 29.5678 14.9203 30.5172C15.8697 31.4666 17.1573 32 18.5 32C19.8427 32 21.1303 31.4666 22.0797 30.5172C23.0291 29.5678 23.5625 28.2802 23.5625 26.9375C23.5625 25.5948 23.0291 24.3072 22.0797 23.3578C21.1303 22.4084 19.8427 21.875 18.5 21.875C17.1573 21.875 15.8697 22.4084 14.9203 23.3578C13.9709 24.3072 13.4375 25.5948 13.4375 26.9375Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.125 18.5C15.125 19.3951 15.4806 20.2535 16.1135 20.8865C16.7465 21.5194 17.6049 21.875 18.5 21.875C19.3951 21.875 20.2535 21.5194 20.8865 20.8865C21.5194 20.2535 21.875 19.3951 21.875 18.5C21.875 17.6049 21.5194 16.7465 20.8865 16.1135C20.2535 15.4806 19.3951 15.125 18.5 15.125C17.6049 15.125 16.7465 15.4806 16.1135 16.1135C15.4806 16.7465 15.125 17.6049 15.125 18.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (id === "rosette") {
    return (
      <svg {...common}>
        <path
          d="M18.0007 12.7487V23.2487M13.5007 14.9987L22.5007 20.9987M13.5007 20.9987L22.5007 14.9987M7.50069 10.7987C7.50069 9.92352 7.84837 9.08416 8.46724 8.46529C9.08611 7.84642 9.92548 7.49874 10.8007 7.49874H12.3007C13.172 7.49824 14.0078 7.15314 14.6257 6.53874L15.6757 5.48874C15.9824 5.18034 16.347 4.9356 16.7486 4.7686C17.1501 4.6016 17.5808 4.51563 18.0157 4.51562C18.4506 4.51563 18.8812 4.6016 19.2828 4.7686C19.6844 4.9356 20.049 5.18034 20.3557 5.48874L21.4057 6.53874C22.0237 7.15374 22.8607 7.49874 23.7307 7.49874H25.2307C26.1059 7.49874 26.9453 7.84642 27.5641 8.46529C28.183 9.08416 28.5307 9.92352 28.5307 10.7987V12.2987C28.5307 13.1687 28.8757 14.0057 29.4907 14.6237L30.5407 15.6737C30.8491 15.9804 31.0938 16.345 31.2608 16.7466C31.4278 17.1482 31.5138 17.5788 31.5138 18.0137C31.5138 18.4487 31.4278 18.8793 31.2608 19.2809C31.0938 19.6825 30.8491 20.0471 30.5407 20.3537L29.4907 21.4037C28.8763 22.0216 28.5312 22.8574 28.5307 23.7287V25.2287C28.5307 26.104 28.183 26.9433 27.5641 27.5622C26.9453 28.1811 26.1059 28.5287 25.2307 28.5287H23.7307C22.8593 28.5292 22.0236 28.8743 21.4057 29.4887L20.3557 30.5387C20.049 30.8471 19.6844 31.0919 19.2828 31.2589C18.8812 31.4259 18.4506 31.5119 18.0157 31.5119C17.5808 31.5119 17.1501 31.4259 16.7486 31.2589C16.347 31.0919 15.9824 30.8471 15.6757 30.5387L14.6257 29.4887C14.0078 28.8743 13.172 28.5292 12.3007 28.5287H10.8007C9.92548 28.5287 9.08611 28.1811 8.46724 27.5622C7.84837 26.9433 7.50069 26.104 7.50069 25.2287V23.7287C7.50019 22.8574 7.15509 22.0216 6.54069 21.4037L5.49069 20.3537C5.18229 20.0471 4.93755 19.6825 4.77055 19.2809C4.60355 18.8793 4.51758 18.4487 4.51758 18.0137C4.51758 17.5788 4.60355 17.1482 4.77055 16.7466C4.93755 16.345 5.18229 15.9804 5.49069 15.6737L6.54069 14.6237C7.15509 14.0059 7.50019 13.1701 7.50069 12.2987V10.7987Z"
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

    let timer = 0;

    const showNext = () => {
      setFlower((current) => pickFlower(current));
      setIdle(true);
      timer = window.setTimeout(showNext, CYCLE_MS);
    };

    const arm = () => {
      window.clearTimeout(timer);
      setIdle(false);
      timer = window.setTimeout(showNext, IDLE_MS);
    };

    timer = window.setTimeout(showNext, IDLE_MS);

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
                  className="block origin-center self-end rounded-none bg-current"
                  style={{ height: 1.5 }}
                  initial={{ width: 15, y: 0, rotate: 0 }}
                  animate={
                    navOpen
                      ? { width: 24, y: 8, rotate: 45 }
                      : { width: 15, y: 0, rotate: 0 }
                  }
                  transition={spring}
                />

                <motion.span
                  className="block origin-center rounded-none bg-current"
                  style={{ height: 1.5 }}
                  initial={{ width: 24, opacity: 1 }}
                  animate={
                    navOpen ? { width: 0, opacity: 0 } : { width: 24, opacity: 1 }
                  }
                  transition={fade}
                />

                <motion.span
                  className="block origin-center self-start rounded-none bg-current"
                  style={{ height: 1.5 }}
                  initial={{ width: 15, y: 0, rotate: 0 }}
                  animate={
                    navOpen
                      ? { width: 24, y: -8, rotate: -45 }
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
