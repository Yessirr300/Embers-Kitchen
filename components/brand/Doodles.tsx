"use client";

import { motion, type Variants } from "framer-motion";
import type { ComponentProps } from "react";

export const drawStroke: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 0.95, ease: [0.65, 0, 0.35, 1] },
      opacity: { duration: 0.2 },
    },
  },
};

export const drawFill: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

const cascade: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

type Props = ComponentProps<typeof motion.svg>;

const base = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// ─── 1. Wine bottle ──────────────────────────────────────────────
export function WineBottleDoodle(props: Props) {
  return (
    <motion.svg viewBox="0 0 60 120" variants={cascade} {...base} {...props}>
      <motion.path d="M24 6 L 36 6 L 36 16 L 24 16 Z" variants={drawStroke} />
      <motion.path
        d="M26 16 L 26 32 Q 18 38 18 50 L 18 108 L 42 108 L 42 50 Q 42 38 34 32 L 34 16"
        variants={drawStroke}
      />
      <motion.path d="M22 70 L 38 70 L 38 88 L 22 88 Z" variants={drawStroke} strokeWidth={1.4} />
      <motion.path d="M26 78 L 34 78" variants={drawStroke} strokeWidth={1.1} />
    </motion.svg>
  );
}

// ─── 2. Wine glass ───────────────────────────────────────────────
export function WineGlassDoodle(props: Props) {
  return (
    <motion.svg viewBox="0 0 60 100" variants={cascade} {...base} {...props}>
      <motion.path d="M12 12 Q 12 50 30 50 Q 48 50 48 12 Z" variants={drawStroke} />
      <motion.path d="M30 50 L 30 88" variants={drawStroke} />
      <motion.path d="M14 92 L 46 92" variants={drawStroke} />
    </motion.svg>
  );
}

// ─── 3. Flame ────────────────────────────────────────────────────
export function FlameDoodle(props: Props) {
  return (
    <motion.svg viewBox="0 0 60 100" variants={cascade} {...base} {...props}>
      <motion.path
        d="M30 96 C 12 88, 6 70, 14 56 C 18 64, 24 62, 24 52 C 24 38, 16 28, 22 12 C 28 22, 38 28, 44 42 C 50 56, 52 76, 44 88 C 40 94, 36 96, 30 96 Z"
        variants={drawStroke}
      />
      <motion.path
        d="M30 84 C 22 78, 20 68, 24 60 C 26 64, 30 64, 30 58 C 30 50, 26 44, 30 34 C 34 42, 38 48, 40 60 C 42 70, 40 80, 36 84 Z"
        variants={drawStroke}
        strokeWidth={1.5}
      />
    </motion.svg>
  );
}

// ─── 4. Fish ─────────────────────────────────────────────────────
export function FishDoodle(props: Props) {
  return (
    <motion.svg viewBox="0 0 120 60" variants={cascade} {...base} {...props}>
      <motion.path d="M10 30 Q 30 6 70 6 Q 92 6 100 28 Q 92 50 70 50 Q 30 50 10 30 Z" variants={drawStroke} />
      <motion.path d="M100 28 L 116 14 L 110 30 L 116 46 L 100 32" variants={drawStroke} />
      <motion.circle cx="82" cy="22" r="2" fill="currentColor" stroke="none" variants={drawFill} />
      <motion.path d="M44 14 L 50 22 L 56 14" variants={drawStroke} strokeWidth={1.5} />
      <motion.path d="M64 14 Q 60 30 64 46" variants={drawStroke} strokeWidth={1.5} />
      <motion.path d="M28 32 L 32 36 M 38 30 L 42 34 M 48 30 L 52 34" variants={drawStroke} strokeWidth={1} />
    </motion.svg>
  );
}

// ─── 5. Fork ─────────────────────────────────────────────────────
export function ForkDoodle(props: Props) {
  return (
    <motion.svg viewBox="0 0 30 100" variants={cascade} {...base} {...props}>
      <motion.path d="M6 4 L 6 28" variants={drawStroke} />
      <motion.path d="M12 4 L 12 28" variants={drawStroke} />
      <motion.path d="M18 4 L 18 28" variants={drawStroke} />
      <motion.path d="M24 4 L 24 28" variants={drawStroke} />
      <motion.path d="M4 28 L 26 28 L 22 40 L 8 40 Z" variants={drawStroke} />
      <motion.path d="M15 40 L 15 96" variants={drawStroke} />
    </motion.svg>
  );
}

// ─── 6. Knife ────────────────────────────────────────────────────
export function KnifeDoodle(props: Props) {
  return (
    <motion.svg viewBox="0 0 30 100" variants={cascade} {...base} {...props}>
      <motion.path d="M14 4 L 22 6 L 22 60 L 8 60 L 14 4 Z" variants={drawStroke} />
      <motion.path d="M8 60 L 22 60 L 22 96 L 8 96 Z" variants={drawStroke} />
      <motion.path d="M12 70 L 18 70 M 12 78 L 18 78 M 12 86 L 18 86" variants={drawStroke} strokeWidth={1} />
    </motion.svg>
  );
}

// ─── 7. Herb sprig ───────────────────────────────────────────────
export function HerbDoodle(props: Props) {
  return (
    <motion.svg viewBox="0 0 60 80" variants={cascade} {...base} {...props}>
      <motion.path d="M30 76 Q 28 60 30 40 Q 32 20 30 4" variants={drawStroke} />
      <motion.path d="M30 60 Q 14 56 10 44 Q 22 46 30 60" variants={drawStroke} />
      <motion.path d="M30 50 Q 46 46 50 34 Q 38 36 30 50" variants={drawStroke} />
      <motion.path d="M30 36 Q 16 32 14 22 Q 24 24 30 36" variants={drawStroke} />
      <motion.path d="M30 26 Q 42 22 46 14 Q 36 14 30 26" variants={drawStroke} />
    </motion.svg>
  );
}

// ─── 8. Lemon ────────────────────────────────────────────────────
export function LemonDoodle(props: Props) {
  return (
    <motion.svg viewBox="0 0 80 80" variants={cascade} {...base} {...props}>
      <motion.path
        d="M16 40 Q 12 18 30 14 Q 50 10 64 26 Q 76 44 60 60 Q 44 72 28 64 Q 14 56 16 40 Z"
        variants={drawStroke}
      />
      <motion.path d="M14 36 L 8 28" variants={drawStroke} />
      <motion.path d="M64 56 L 72 64" variants={drawStroke} />
      <motion.path d="M26 30 L 56 50" variants={drawStroke} strokeWidth={1.2} />
      <motion.path d="M32 24 L 60 42" variants={drawStroke} strokeWidth={1.2} />
    </motion.svg>
  );
}

// ─── 9. Music note ───────────────────────────────────────────────
export function MusicNoteDoodle(props: Props) {
  return (
    <motion.svg viewBox="0 0 50 80" variants={cascade} {...base} {...props}>
      <motion.path d="M18 60 Q 10 64 10 68 Q 10 74 18 74 Q 26 74 26 66 L 26 14" variants={drawStroke} />
      <motion.path d="M26 14 L 42 8 L 42 22" variants={drawStroke} />
      <motion.path d="M34 56 Q 26 60 26 64 Q 26 70 34 70 Q 42 70 42 62 L 42 22" variants={drawStroke} />
    </motion.svg>
  );
}

// ─── 10. Smoke wisp ──────────────────────────────────────────────
export function SmokeDoodle(props: Props) {
  return (
    <motion.svg viewBox="0 0 40 120" variants={cascade} {...base} {...props}>
      <motion.path
        d="M20 116 Q 12 100 20 84 Q 28 68 20 52 Q 12 36 20 20 Q 24 12 20 4"
        variants={drawStroke}
      />
      <motion.path d="M10 102 Q 6 96 10 88" variants={drawStroke} strokeWidth={1.4} />
      <motion.path d="M30 70 Q 34 64 30 56" variants={drawStroke} strokeWidth={1.4} />
    </motion.svg>
  );
}

// ─── 11. Spark / star ────────────────────────────────────────────
export function SparkDoodle(props: Props) {
  return (
    <motion.svg viewBox="0 0 40 40" variants={cascade} {...base} {...props}>
      <motion.path d="M20 2 L 22 18 L 38 20 L 22 22 L 20 38 L 18 22 L 2 20 L 18 18 Z" variants={drawStroke} />
    </motion.svg>
  );
}

// ─── 12. Mini vinyl ──────────────────────────────────────────────
export function VinylMiniDoodle(props: Props) {
  return (
    <motion.svg viewBox="0 0 60 60" variants={cascade} {...base} {...props}>
      <motion.circle cx="30" cy="30" r="26" variants={drawStroke} />
      <motion.circle cx="30" cy="30" r="20" variants={drawStroke} strokeWidth={1.2} />
      <motion.circle cx="30" cy="30" r="14" variants={drawStroke} strokeWidth={1.2} />
      <motion.circle cx="30" cy="30" r="8" fill="currentColor" stroke="none" variants={drawFill} />
      <motion.circle cx="30" cy="30" r="1.4" fill="#ffffff" stroke="none" variants={drawFill} />
    </motion.svg>
  );
}

// ─── 13. Olive branch ────────────────────────────────────────────
export function OliveBranchDoodle(props: Props) {
  return (
    <motion.svg viewBox="0 0 120 40" variants={cascade} {...base} {...props}>
      <motion.path d="M4 24 Q 30 18 60 22 Q 90 26 116 20" variants={drawStroke} />
      <motion.ellipse cx="30" cy="14" rx="5" ry="3.5" variants={drawStroke} />
      <motion.ellipse cx="60" cy="14" rx="5" ry="3.5" variants={drawStroke} />
      <motion.ellipse cx="90" cy="14" rx="5" ry="3.5" variants={drawStroke} />
      <motion.path d="M44 18 Q 50 8 60 10" variants={drawStroke} strokeWidth={1.4} />
      <motion.path d="M74 18 Q 80 8 90 10" variants={drawStroke} strokeWidth={1.4} />
    </motion.svg>
  );
}

// ─── 14. Squiggle ornament ───────────────────────────────────────
export function SquiggleDoodle(props: Props) {
  return (
    <motion.svg viewBox="0 0 80 20" variants={cascade} {...base} {...props}>
      <motion.path d="M4 10 Q 12 2 20 10 T 36 10 T 52 10 T 68 10 T 76 10" variants={drawStroke} />
    </motion.svg>
  );
}

// ─── 15. Plate (top view) ───────────────────────────────────────
export function PlateDoodle(props: Props) {
  return (
    <motion.svg viewBox="0 0 80 80" variants={cascade} {...base} {...props}>
      <motion.circle cx="40" cy="40" r="36" variants={drawStroke} />
      <motion.circle cx="40" cy="40" r="28" variants={drawStroke} strokeWidth={1.4} />
    </motion.svg>
  );
}
