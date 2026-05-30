"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

const circleVariants: Variants = {
  hidden: { scale: 0.7, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const innerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.25 } },
};

export function HighlightCircle({
  label,
  children,
  className,
  size = 140,
}: {
  label?: string;
  children: ReactNode;
  className?: string;
  size?: number;
}) {
  return (
    <motion.figure
      variants={circleVariants}
      className={cn("flex flex-col items-center gap-3", className)}
    >
      <div
        className="relative rounded-full bg-paper text-ink shadow-[0_18px_50px_-18px_rgba(15,13,11,0.25)]"
        style={{ width: size, height: size }}
      >
        <div className="absolute inset-[6px] rounded-full border border-ink/15" />
        <motion.div
          variants={innerVariants}
          className="absolute inset-[10%]"
        >
          {children}
        </motion.div>
      </div>
      {label && (
        <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.32em] text-muted">
          {label}
        </span>
      )}
    </motion.figure>
  );
}
