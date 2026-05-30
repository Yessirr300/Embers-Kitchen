"use client";

import { motion, type Variants } from "framer-motion";
import type { ComponentProps } from "react";

const drawStroke: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { duration: 0.8, ease: [0.65, 0, 0.35, 1] }, opacity: { duration: 0.2 } },
  },
};

const drawFill: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

type SVGProps = ComponentProps<typeof motion.svg>;

const baseSvgProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// ─── 1. Events — two dancing figures ─────────────────────────────────
export function EventsArt(props: SVGProps) {
  return (
    <motion.svg viewBox="0 0 120 120" {...baseSvgProps} {...props}>
      {/* Left figure (polka-dot dress) */}
      <motion.circle cx="38" cy="32" r="8" variants={drawStroke} />
      {/* hair tufts */}
      <motion.path d="M30 28 Q 26 22 31 19" variants={drawStroke} />
      <motion.path d="M46 28 Q 50 22 45 19" variants={drawStroke} />
      {/* dress */}
      <motion.path d="M38 40 L 30 56 L 22 94 L 32 96 L 38 70 L 44 96 L 54 94 L 46 56 Z" variants={drawStroke} />
      {/* arms up */}
      <motion.path d="M33 44 Q 22 38 16 22" variants={drawStroke} />
      <motion.path d="M43 44 Q 54 38 60 22" variants={drawStroke} />
      {/* legs */}
      <motion.path d="M32 96 L 28 112" variants={drawStroke} />
      <motion.path d="M44 96 L 48 112" variants={drawStroke} />
      {/* polka dots */}
      <motion.circle cx="35" cy="64" r="1.5" fill="currentColor" stroke="none" variants={drawFill} />
      <motion.circle cx="42" cy="72" r="1.5" fill="currentColor" stroke="none" variants={drawFill} />
      <motion.circle cx="33" cy="80" r="1.5" fill="currentColor" stroke="none" variants={drawFill} />
      <motion.circle cx="40" cy="88" r="1.5" fill="currentColor" stroke="none" variants={drawFill} />

      {/* Right figure (top knot) */}
      <motion.circle cx="84" cy="34" r="7" variants={drawStroke} />
      <motion.circle cx="84" cy="23" r="3.5" variants={drawStroke} />
      {/* slim body */}
      <motion.path d="M84 41 L 80 70 L 76 96" variants={drawStroke} />
      <motion.path d="M84 41 L 88 70 L 92 96" variants={drawStroke} />
      {/* arms up */}
      <motion.path d="M80 44 Q 70 36 74 22" variants={drawStroke} />
      <motion.path d="M88 44 Q 98 36 94 22" variants={drawStroke} />
      {/* legs */}
      <motion.path d="M76 96 L 74 112" variants={drawStroke} />
      <motion.path d="M92 96 L 94 112" variants={drawStroke} />

      {/* music note in the air */}
      <motion.path d="M100 14 L 100 28 Q 96 32 96 28 Q 96 24 100 24 L 100 14 L 108 12 L 108 24 Q 104 28 104 24 Q 104 20 108 20" variants={drawStroke} />
    </motion.svg>
  );
}

// ─── 2. People — vinyl-record head on a torso ────────────────────────
export function PeopleArt(props: SVGProps) {
  return (
    <motion.svg viewBox="0 0 120 120" {...baseSvgProps} {...props}>
      {/* vinyl outer */}
      <motion.circle cx="60" cy="44" r="28" variants={drawStroke} />
      {/* grooves */}
      <motion.circle cx="60" cy="44" r="22" variants={drawStroke} strokeWidth={1.3} />
      <motion.circle cx="60" cy="44" r="17" variants={drawStroke} strokeWidth={1.3} />
      <motion.circle cx="60" cy="44" r="12" variants={drawStroke} strokeWidth={1.3} />
      {/* label */}
      <motion.circle cx="60" cy="44" r="7" fill="currentColor" stroke="none" variants={drawFill} />
      {/* center hole */}
      <motion.circle cx="60" cy="44" r="1.6" fill="#fff" stroke="none" variants={drawFill} />

      {/* T-shirt body */}
      <motion.path
        d="M40 76 L 28 92 L 32 110 L 88 110 L 92 92 L 80 76 Q 72 72 60 72 Q 48 72 40 76 Z"
        variants={drawStroke}
      />
      {/* collar */}
      <motion.path d="M53 76 Q 60 82 67 76" variants={drawStroke} />
    </motion.svg>
  );
}

// ─── 3. Plates — 4 utensils crossed ──────────────────────────────────
export function PlatesArt(props: SVGProps) {
  return (
    <motion.svg viewBox="0 0 120 120" {...baseSvgProps} {...props}>
      {/* knife 1 — top-left to bottom-right */}
      <motion.path d="M22 22 L 60 60" variants={drawStroke} />
      <motion.path d="M14 14 L 22 22 L 26 18 L 18 10 Z" variants={drawStroke} />

      {/* fork 1 — top to bottom (left of center) */}
      <motion.path d="M52 22 L 52 32" variants={drawStroke} />
      <motion.path d="M48 14 L 48 22" variants={drawStroke} />
      <motion.path d="M56 14 L 56 22" variants={drawStroke} />
      <motion.path d="M52 14 L 52 22" variants={drawStroke} />
      <motion.path d="M46 22 L 58 22 L 56 32 L 48 32 Z" variants={drawStroke} />
      <motion.path d="M52 32 L 52 106" variants={drawStroke} />

      {/* knife 2 — top-right to bottom-left */}
      <motion.path d="M98 22 L 60 60" variants={drawStroke} />
      <motion.path d="M106 14 L 98 22 L 94 18 L 102 10 Z" variants={drawStroke} />

      {/* spoon — bottom (right of center) */}
      <motion.ellipse cx="76" cy="100" rx="6" ry="9" variants={drawStroke} />
      <motion.path d="M76 91 L 76 30" variants={drawStroke} />
    </motion.svg>
  );
}

// ─── 4. Vins — 2 glasses + bottle ────────────────────────────────────
export function VinsArt(props: SVGProps) {
  return (
    <motion.svg viewBox="0 0 120 120" {...baseSvgProps} {...props}>
      {/* bottle (behind) */}
      <motion.path d="M58 14 L 66 14 L 66 28 Q 74 36 74 50 L 74 96 L 50 96 L 50 50 Q 50 36 58 28 Z" variants={drawStroke} />
      {/* bottle cap */}
      <motion.path d="M59 8 L 65 8 L 65 14 L 59 14 Z" variants={drawStroke} />
      {/* label */}
      <motion.path d="M52 62 L 72 62 L 72 78 L 52 78 Z" variants={drawStroke} strokeWidth={1.4} />

      {/* left wine glass (with wine) */}
      <motion.path d="M18 30 Q 18 56 28 56 Q 38 56 38 30 Z" variants={drawStroke} />
      {/* wine fill */}
      <motion.path d="M21 38 Q 22 54 28 54 Q 34 54 35 38 Z" fill="currentColor" stroke="none" variants={drawFill} />
      <motion.path d="M28 56 L 28 92" variants={drawStroke} />
      <motion.path d="M20 96 L 36 96" variants={drawStroke} />

      {/* right wine glass (empty, in front) */}
      <motion.path d="M82 36 Q 82 64 94 64 Q 106 64 106 36 Z" variants={drawStroke} />
      <motion.path d="M94 64 L 94 100" variants={drawStroke} />
      <motion.path d="M84 104 L 104 104" variants={drawStroke} />
    </motion.svg>
  );
}

export const HIGHLIGHTS = [
  { label: "Events", Art: EventsArt },
  { label: "People", Art: PeopleArt },
  { label: "Plates", Art: PlatesArt },
  { label: "Vins", Art: VinsArt },
] as const;
