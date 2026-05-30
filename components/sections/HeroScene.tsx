"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SplitText } from "@/components/animations/SplitText";
import { Wordmark } from "@/components/brand/Wordmark";
import { ArrowDown } from "lucide-react";
import {
  WineBottleDoodle, WineGlassDoodle, FlameDoodle, FishDoodle,
  ForkDoodle, KnifeDoodle, HerbDoodle, LemonDoodle, MusicNoteDoodle,
  SmokeDoodle, SparkDoodle, VinylMiniDoodle, OliveBranchDoodle,
} from "@/components/brand/Doodles";

const layerStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
};

export function HeroScene() {
  return (
    <div className="relative w-full h-full overflow-hidden text-ink">
      <motion.div
        className="absolute inset-0 pointer-events-none text-ink/35"
        variants={layerStagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="absolute top-[6%] right-[6%] md:top-[6%] md:right-[28%]"
          animate={{ y: [0, -10, 0], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <SmokeDoodle className="w-[30px] h-[90px] md:w-[42px] md:h-[130px]" />
        </motion.div>
        <HerbDoodle className="hidden md:block absolute top-[60%] left-[2%] w-[64px] h-[88px]" />
        <SparkDoodle className="absolute top-[18%] left-[6%] w-[18px] md:w-[28px] md:left-[10%]" />
        <SparkDoodle className="absolute bottom-[6%] right-[8%] w-[14px] md:w-[20px] md:top-[78%] md:left-[90%] md:bottom-auto" />
      </motion.div>

      <motion.div
        className="absolute inset-0 pointer-events-none text-ink/70 hidden md:block"
        variants={layerStagger}
        initial="hidden"
        animate="visible"
      >
        <WineBottleDoodle className="absolute top-[10%] left-[6%] w-[56px] h-[112px]" />
        <motion.div
          className="absolute top-[18%] left-[80%]"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        >
          <VinylMiniDoodle className="w-[88px] h-[88px]" />
        </motion.div>
        <FishDoodle className="absolute top-[78%] left-[8%] w-[140px] h-[70px]" />
        <WineGlassDoodle className="absolute top-[64%] left-[82%] w-[50px] h-[88px]" />
        <OliveBranchDoodle className="absolute top-[6%] left-[36%] w-[120px] h-[38px] -rotate-3" />
      </motion.div>

      <motion.div
        className="absolute inset-0 pointer-events-none text-ink hidden md:block"
        variants={layerStagger}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="absolute top-[14%] left-[22%] origin-bottom"
          animate={{ scaleY: [1, 1.08, 0.96, 1.04, 1], rotate: [0, 1.4, -1, 0.6, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <FlameDoodle className="w-[46px] h-[78px]" />
        </motion.div>
        <ForkDoodle className="absolute top-[56%] left-[90%] w-[22px] h-[78px] rotate-12" />
        <KnifeDoodle className="absolute top-[56%] left-[4%] w-[22px] h-[78px] -rotate-12" />
        <LemonDoodle className="absolute top-[80%] left-[46%] w-[44px] h-[44px] rotate-12" />
      </motion.div>

      <div className="md:hidden absolute inset-0 pointer-events-none text-ink/50">
        <MusicNoteDoodle className="absolute top-[8%] left-[8%] w-[24px] h-[40px] opacity-50" />
        <motion.div
          className="absolute bottom-[12%] left-[6%] origin-bottom"
          animate={{ scaleY: [1, 1.08, 0.96, 1.04, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <FlameDoodle className="w-[28px] h-[48px]" />
        </motion.div>
        <WineGlassDoodle className="absolute bottom-[12%] right-[6%] w-[32px] h-[58px]" />
      </div>

      <div className="container-x relative z-10 h-full flex flex-col justify-center items-center text-center py-24 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.0, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <Wordmark size="xl" subtitle="embers · limassol · est. 2023" className="text-ink" />
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.6, duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
          className="mt-8 md:mt-10 h-px w-20 md:w-24 bg-ink/40 origin-center"
        />

        <h1 className="text-display mt-6 md:mt-8 max-w-[18ch] text-ink text-[clamp(1.75rem,5vw,4.5rem)]">
          <SplitText text="Forged in Flame." delay={1.8} stagger={0.028} />
          <br />
          <span className="italic">
            <SplitText text="Rooted in Tradition." delay={2.0} stagger={0.028} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.7 }}
          className="mt-6 md:mt-8 max-w-md text-muted leading-relaxed text-sm md:text-base px-4 md:px-0"
        >
          A counter at the fire. A pour from the vinyl-side of the cellar.
          Twelve tables, one open hearth, and the slow patience of the Cypriot grill.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.7 }}
          className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-3 w-full max-w-sm sm:max-w-none px-4 sm:px-0"
        >
          <Button href="/reservations" variant="primary" size="lg">Reserve a Table</Button>
          <Button href="/menu" variant="ghost" size="lg">See the Menu</Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.0, duration: 0.5 }}
          className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-6 flex-col items-center gap-2 text-muted"
        >
          <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
