"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export function VinylRecord({ className = "" }: { className?: string }) {
  const [needleDown, setNeedleDown] = useState(false);
  const angle = useMotionValue(0);
  const rotate = useTransform(angle, (v) => `${v}deg`);

  useEffect(() => {
    const ctl = animate(angle, 360, {
      duration: 16,
      ease: "linear",
      repeat: Infinity,
    });
    return () => ctl.stop();
  }, [angle]);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setNeedleDown(true)}
      onMouseLeave={() => setNeedleDown(false)}
    >
      <div className="absolute inset-2 rounded-full bg-paper border border-ink/15" />
      <motion.div style={{ rotate }} className="relative h-full w-full rounded-full">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, #1a1311 0 30%, transparent 31%), repeating-radial-gradient(circle at center, rgba(244,239,231,0.06) 0 1px, transparent 1px 4px), radial-gradient(circle at center, #0f0d0b 0 100%)",
            boxShadow: "inset 0 0 40px rgba(0,0,0,0.5), 0 18px 40px -10px rgba(15,13,11,0.25)",
          }}
        />
        <div className="absolute left-1/2 top-1/2 h-[36%] w-[36%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-paper-soft text-ink flex items-center justify-center border border-ink/20">
          <div className="text-center font-[var(--font-display)] italic">
            <div className="text-[10px] uppercase tracking-[0.3em] font-[var(--font-mono)] not-italic">Side A</div>
            <div className="text-base">έμπερς</div>
            <div className="text-[10px] uppercase tracking-[0.3em] opacity-70 font-[var(--font-mono)] not-italic">Vinyl & Wine</div>
          </div>
          <div className="absolute h-2 w-2 rounded-full bg-paper border border-ink/30" />
        </div>
      </motion.div>
      <motion.div
        className="absolute right-[-12%] top-[-6%] h-[68%] w-[8%] origin-top-right"
        animate={{ rotate: needleDown ? -28 : -52 }}
        transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
      >
        <div className="absolute right-0 top-0 h-3 w-3 rounded-full bg-ink" />
        <div className="absolute right-1 top-1 h-full w-1 origin-top rounded-full bg-ink/70" />
        <div className="absolute right-[-2px] bottom-0 h-3 w-3 rounded-sm bg-ink" />
      </motion.div>
    </div>
  );
}
