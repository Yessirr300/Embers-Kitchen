"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [text, setText] = useState<string | null>(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { damping: 28, stiffness: 320, mass: 0.4 });
  const sy = useSpring(y, { damping: 28, stiffness: 320, mass: 0.4 });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setEnabled(mq.matches);

    const onChange = (e: MediaQueryListEvent) => {
      setEnabled(e.matches);
    };
    mq.addEventListener("change", onChange);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = (e.target as HTMLElement)?.closest("[data-cursor]") as HTMLElement | null;
      if (el) {
        setHovering(true);
        setText(el.dataset.cursorText ?? null);
      } else {
        setHovering(false);
        setText(null);
      }
    };
    window.addEventListener("mousemove", onMove);

    return () => {
      mq.removeEventListener("change", onChange);
      window.removeEventListener("mousemove", onMove);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 will-change-transform"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="rounded-full bg-ink mix-blend-difference flex items-center justify-center font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-paper overflow-hidden"
        animate={{
          width: hovering ? (text ? 80 : 48) : 0,
          height: hovering ? (text ? 80 : 48) : 0,
          opacity: hovering ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 22, stiffness: 260 }}
      >
        {text && hovering ? text : null}
      </motion.div>
    </motion.div>
  );
}
