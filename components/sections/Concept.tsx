"use client";

import { motion } from "framer-motion";
import { SplitText } from "@/components/animations/SplitText";
import { Reveal } from "@/components/animations/Reveal";
import { FlameDoodle, KnifeDoodle, VinylMiniDoodle, OliveBranchDoodle, SquiggleDoodle, SparkDoodle } from "@/components/brand/Doodles";

type Pillar = {
  no: string;
  title: string;
  body: string;
  Doodle: (props: { className?: string }) => React.JSX.Element;
  doodleClass: string;
  loop?: boolean;
};

const PILLARS: Pillar[] = [
  { no: "01", title: "Open Fire", body: "Olive-wood embers, hardwood charcoal, and the patience to wait for the right colour. Every protein on the menu earns its char from a single flame.", Doodle: FlameDoodle, doodleClass: "w-14 h-24", loop: true },
  { no: "02", title: "Teppan & Theatre", body: "An eight-seat counter wrapped around the iron. The chefs work in front of you — knife-work, flames, plating — a quiet performance with each course.", Doodle: KnifeDoodle, doodleClass: "w-10 h-24 rotate-[18deg]" },
  { no: "03", title: "Vinyl, Wine, Time", body: "Our sommelier curates the night by the bottle and the B-side. Crackle of vinyl, slow pours, no rush. Dinner takes the time it takes.", Doodle: VinylMiniDoodle, doodleClass: "w-20 h-20", loop: true },
  { no: "04", title: "Roots in the Island", body: "Heritage-breed pork, day-boat fish from Limassol, mountain herbs, halloumi from a single family barrel. Limassol on the plate.", Doodle: OliveBranchDoodle, doodleClass: "w-28 h-10 -rotate-3" },
];

const gridStagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

const cellVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1, y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      delayChildren: 0.25,
      staggerChildren: 0.04,
    },
  },
};

export function Concept() {
  return (
    <section id="concept" className="relative bg-paper py-32 md:py-44 overflow-hidden">
      <div className="container-x">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 mb-20 lg:mb-28 items-end">
          <div>
            <Reveal><div className="text-eyebrow">— The Embers Concept</div></Reveal>
            <h2 className="text-display mt-6 text-ink text-[clamp(2.5rem,6vw,5.5rem)]">
              <SplitText text="A small dining room" stagger={0.022} />
              <br />
              <span className="italic text-muted">
                <SplitText text="built around one fire." stagger={0.022} delay={0.2} />
              </span>
            </h2>
          </div>
          <Reveal delay={0.2}>
            <p className="text-muted text-lg leading-relaxed max-w-md lg:ml-auto">
              Twelve tables. One open hearth. A cellar curated by what played
              on the turntable that night. The menu changes with the market
              and the mood — but four ideas never do.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="flex items-center justify-center gap-4 md:gap-8 mb-16 md:mb-24 text-ink">
            <SquiggleDoodle className="w-14 md:w-24 h-5 opacity-70" />
            <span className="font-[var(--font-display)] italic text-lg md:text-2xl whitespace-nowrap">
              Four pillars · One fire
            </span>
            <SquiggleDoodle className="w-14 md:w-24 h-5 opacity-70 -scale-x-100" />
          </div>
        </Reveal>

        <motion.div
          variants={gridStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative grid md:grid-cols-2 border-t border-l border-hairline"
        >
          <div aria-hidden className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-14 w-14 items-center justify-center bg-paper rounded-full z-10 text-ink pointer-events-none border border-hairline">
            <SparkDoodle className="w-6 h-6" />
          </div>

          {PILLARS.map((p, i) => (
            <motion.article
              key={p.no}
              variants={cellVariant}
              className="group relative border-r border-b border-hairline p-10 md:p-14 lg:p-16 hover:bg-paper-soft/60 transition-colors duration-700 overflow-hidden min-h-[340px]"
            >
              <span
                aria-hidden
                className="absolute right-4 bottom-[-16px] md:right-8 md:bottom-[-24px] font-[var(--font-display)] font-light text-[180px] md:text-[240px] lg:text-[280px] leading-none text-ink/[0.05] pointer-events-none select-none transition-transform duration-700 group-hover:scale-105 origin-bottom-right"
              >
                {p.no}
              </span>

              <div className="relative flex items-start justify-between">
                <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.32em] text-muted">
                  / {p.no} · pillar /
                </span>
                <motion.div
                  className="text-ink"
                  animate={p.loop && i === 0 ? { rotate: [0, 1.5, -1.5, 0.8, 0], scaleY: [1, 1.04, 0.98, 1.02, 1] } : p.loop && i === 2 ? { rotate: 360 } : {}}
                  transition={
                    p.loop && i === 0 ? { duration: 3, repeat: Infinity, ease: "easeInOut" } :
                    p.loop && i === 2 ? { duration: 24, repeat: Infinity, ease: "linear" } : {}
                  }
                  style={{ transformOrigin: i === 0 ? "bottom center" : "center" }}
                >
                  <div className="transition-transform duration-700 group-hover:scale-110">
                    <p.Doodle className={p.doodleClass} />
                  </div>
                </motion.div>
              </div>

              <h3 className="relative mt-10 font-[var(--font-display)] text-4xl md:text-5xl italic text-ink leading-[1.02] group-hover:text-muted transition-colors duration-500">
                {p.title}
              </h3>

              <div className="relative mt-6 h-px w-10 bg-ink/40 transition-all duration-500 group-hover:w-24 group-hover:bg-ink" />

              <p className="relative mt-6 text-muted leading-relaxed max-w-prose">{p.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
