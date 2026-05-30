"use client";

import {
  ComponentPropsWithoutRef,
  ElementType,
  useRef,
} from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticProps<T extends ElementType> = {
  as?: T;
  strength?: number;
  children: React.ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Magnetic<T extends ElementType = "div">({
  as,
  strength = 0.35,
  children,
  className,
  ...rest
}: MagneticProps<T>) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { damping: 18, stiffness: 220, mass: 0.4 });
  const sy = useSpring(y, { damping: 18, stiffness: 220, mass: 0.4 });

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  const Tag = (as ?? "div") as ElementType;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={cn("inline-block will-change-transform", className)}
    >
      <Tag {...rest}>{children}</Tag>
    </motion.div>
  );
}
