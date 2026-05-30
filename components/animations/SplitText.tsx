"use client";

import { motion, type Variants } from "framer-motion";
import { Fragment, useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type SplitTextProps = {
  text: string;
  className?: string;
  charClassName?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  delay?: number;
  stagger?: number;
  duration?: number;
  once?: boolean;
};

const wrap: Variants = {
  hidden: {},
  show: (stagger: number) => ({
    transition: { staggerChildren: stagger },
  }),
};

const char: Variants = {
  hidden: { y: "0.4em", opacity: 0 },
  show: (duration: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function SplitText({
  text,
  className,
  charClassName,
  as: Tag = "span",
  delay = 0,
  stagger = 0.025,
  duration = 0.9,
  once = true,
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once, amount: 0.4 });

  const words = text.split(" ");

  return (
    <Tag ref={ref as never} className={cn("inline", className)} aria-label={text}>
      <motion.span
        aria-hidden
        className="inline"
        variants={wrap}
        custom={stagger}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        transition={{ delayChildren: delay }}
      >
        {words.map((word, wi) => (
          <Fragment key={`w-${wi}`}>
            <span className="inline-block align-baseline">
              {Array.from(word).map((c, ci) => (
                <motion.span
                  key={`c-${ci}`}
                  variants={char}
                  custom={duration}
                  className={cn("inline-block whitespace-pre", charClassName)}
                >
                  {c}
                </motion.span>
              ))}
            </span>
            {wi < words.length - 1 ? " " : null}
          </Fragment>
        ))}
      </motion.span>
    </Tag>
  );
}
