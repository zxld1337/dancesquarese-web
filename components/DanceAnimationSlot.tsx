"use client";

import { motion, type MotionValue, useTransform } from "framer-motion";

/**
 * Placeholder for the 21st.dev dance-couple scroll animation.
 *
 * `progress` is a MotionValue already wired to the Hero's scroll range (0 → 1
 * across the pinned hero). Swap the <PlaceholderMark /> below for the real
 * 21st.dev component and drive its frame/pose from the same `progress` value
 * (e.g. map 0–1 to an image-sequence index or a Lottie/Rive progress input)
 * to keep the "couple dances as you scroll" behaviour.
 */
export default function DanceAnimationSlot({ progress }: { progress: MotionValue<number> }) {
  const scale = useTransform(progress, [0, 1], [1, 1.18]);
  const rotate = useTransform(progress, [0, 1], [-4, 5]);
  const opacity = useTransform(progress, [0, 0.7, 1], [0.85, 0.55, 0.1]);
  const glowScale = useTransform(progress, [0, 1], [1, 1.4]);

  return (
    <div className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ scale: glowScale }}
        className="absolute h-[70vh] w-[70vh] rounded-full bg-primary/25 blur-[120px]"
      />
      <motion.svg
        style={{ scale, rotate, opacity }}
        viewBox="0 0 400 400"
        className="h-[62vh] w-[62vh] max-w-none"
        fill="none"
      >
        <path
          d="M120 90 C 60 130, 60 220, 130 250 C 90 280, 100 330, 160 340"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M280 90 C 340 130, 340 220, 270 250 C 310 280, 300 330, 240 340"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M200 60 C 170 100, 170 160, 200 190 C 230 160, 230 100, 200 60 Z"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
        />
        <circle cx="200" cy="40" r="14" stroke="var(--color-accent)" strokeWidth="1.5" />
        <path
          d="M150 250 C 170 300, 230 300, 250 250"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </motion.svg>
    </div>
  );
}
