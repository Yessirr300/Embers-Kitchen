"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HIGHLIGHTS } from "@/components/brand/Illustrations";
import { HighlightCircle } from "@/components/brand/HighlightCircle";
import { Wordmark } from "@/components/brand/Wordmark";

type Phase = 0 | 1 | 2;

export function Loader() {
  const [show, setShow] = useState(true);
  const [phase, setPhase] = useState<Phase>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("embers-loaded")) {
      setShow(false);
      return;
    }
    const t1 = setTimeout(() => setPhase(1), 2400);
    const t2 = setTimeout(() => setPhase(2), 3700);
    const t3 = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("embers-loaded", "1");
    }, 4400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="brand-intro"
          className="fixed inset-0 z-[100] grid place-items-center bg-paper paper-grain overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: phase === 2 ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
        >
          <div className="relative flex flex-col items-center text-ink">
            <motion.div
              className="flex items-end gap-4 md:gap-7"
              initial="hidden"
              animate={phase === 0 ? "visible" : "shrunk"}
              variants={{
                hidden: {},
                visible: {
                  y: 0,
                  scale: 1,
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.17,
                    delayChildren: 0.3,
                    when: "beforeChildren",
                  },
                },
                shrunk: {
                  y: -28,
                  scale: 0.55,
                  opacity: 0.4,
                  transition: { duration: 0.9, ease: [0.65, 0, 0.35, 1] },
                },
              }}
            >
              {HIGHLIGHTS.map(({ Art, label }) => (
                <HighlightCircle key={label} label={label} size={120}>
                  <Art
                    variants={{
                      hidden: {},
                      visible: { transition: { staggerChildren: 0.05 } },
                    }}
                  />
                </HighlightCircle>
              ))}
            </motion.div>

            <motion.div
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-ink"
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={
                phase >= 1
                  ? { opacity: 1, scale: 1, y: 0 }
                  : { opacity: 0, scale: 0.85, y: 40 }
              }
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <Wordmark size="xl" subtitle="embers · limassol" />
              <motion.div
                className="mt-6 flex items-center justify-center gap-3 text-muted"
                initial={{ opacity: 0 }}
                animate={{ opacity: phase >= 1 ? 1 : 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <span className="h-px w-8 bg-muted/60" />
                <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.42em]">
                  Open fire · since 2023
                </span>
                <span className="h-px w-8 bg-muted/60" />
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute bottom-[-110px] left-1/2 -translate-x-1/2 flex items-center gap-3 text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: phase === 0 ? 1 : 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <span className="h-px w-12 bg-ink/15 relative overflow-hidden">
                <motion.span
                  className="absolute inset-y-0 left-0 bg-ink"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.0, ease: "linear" }}
                />
              </span>
              <span className="font-[var(--font-mono)] text-[9px] uppercase tracking-[0.32em]">
                Stoking the fire
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
