"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/Reveal";
import { SplitText } from "@/components/animations/SplitText";
import { Button } from "@/components/ui/Button";
import { FlameDoodle, WineGlassDoodle, OliveBranchDoodle, HerbDoodle, SparkDoodle, MusicNoteDoodle } from "@/components/brand/Doodles";

const layerStagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

export function ReserveCTA() {
  return (
    <section className="relative min-h-[80vh] py-32 md:py-44 overflow-hidden bg-paper text-ink">
      <motion.div
        className="absolute inset-0 pointer-events-none text-ink/55 hidden md:block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={layerStagger}
      >
        <OliveBranchDoodle className="absolute top-[12%] left-[10%] w-[160px] h-[44px] -rotate-6" />
        <OliveBranchDoodle className="absolute top-[12%] right-[10%] w-[160px] h-[44px] rotate-[186deg]" />
        <WineGlassDoodle className="absolute top-[20%] left-[6%] w-[58px] h-[96px]" />
        <WineGlassDoodle className="absolute top-[20%] right-[6%] w-[58px] h-[96px]" />
        <HerbDoodle className="absolute bottom-[14%] left-[8%] w-[60px] h-[80px]" />
        <HerbDoodle className="absolute bottom-[14%] right-[8%] w-[60px] h-[80px] -scale-x-100" />
        <SparkDoodle className="absolute top-[40%] left-[14%] w-[22px]" />
        <SparkDoodle className="absolute top-[44%] right-[14%] w-[18px]" />
        <MusicNoteDoodle className="absolute bottom-[24%] left-[26%] w-[28px] h-[48px]" />
        <MusicNoteDoodle className="absolute top-[28%] right-[28%] w-[28px] h-[48px] -scale-x-100" />
      </motion.div>

      <div className="container-x relative z-10 flex flex-col items-center text-center">
        <Reveal><div className="text-eyebrow">— Open Mon – Sat · 12:30 to Midnight</div></Reveal>

        <motion.div
          className="mt-8 origin-bottom"
          animate={{ scaleY: [1, 1.06, 0.97, 1.03, 1], rotate: [0, 1, -1, 0.5, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <FlameDoodle className="w-[64px] h-[100px] text-ink mx-auto" />
        </motion.div>

        <h2 className="text-display mt-8 text-ink text-[clamp(2.8rem,7vw,7rem)] max-w-5xl">
          <SplitText text="Take a seat" />
          <br />
          <span className="italic text-muted"><SplitText text="by the fire." delay={0.2} /></span>
        </h2>

        <Reveal delay={0.4}>
          <p className="mt-8 max-w-md text-muted leading-relaxed">
            Reservations open seven days ahead. Walk-ins always welcome at the
            counter — when the fire&apos;s hot.
          </p>
        </Reveal>

        <Reveal delay={0.55}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href="/reservations" variant="primary" size="lg">Reserve a Table</Button>
            <Button href="tel:+35797470471" variant="ghost" size="lg">Call · +357 97 470 471</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
