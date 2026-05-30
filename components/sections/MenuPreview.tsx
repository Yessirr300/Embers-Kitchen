"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { SplitText } from "@/components/animations/SplitText";
import { Button } from "@/components/ui/Button";
import { FEATURED_DISHES, type Dish } from "@/content/menu";
import { formatPrice } from "@/lib/utils";

export function MenuPreview() {
  const featured = FEATURED_DISHES.slice(0, 6);

  return (
    <section id="menu" className="relative bg-paper-soft py-32 md:py-44 overflow-hidden">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16">
          <div>
            <Reveal><div className="text-eyebrow">— Signature Plates</div></Reveal>
            <h2 className="text-display mt-6 text-ink text-[clamp(2.5rem,5.5vw,5rem)] max-w-3xl">
              <SplitText text="The fire writes" stagger={0.02} />
              <br />
              <span className="italic text-muted"><SplitText text="the menu." stagger={0.02} delay={0.2} /></span>
            </h2>
          </div>
          <Reveal delay={0.2}>
            <Button href="/menu" variant="ghost" size="lg">
              Full Menu
              <ArrowUpRight size={14} className="ml-1" />
            </Button>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 md:auto-rows-[minmax(280px,1fr)]">
          <Reveal className="md:col-span-2 md:row-span-2">
            <FeaturedCard dish={featured[0]} />
          </Reveal>
          {[1, 2, 3, 4, 5].map((i) =>
            featured[i] ? (
              <Reveal key={featured[i].id} delay={i * 0.06} className="h-full">
                <DishCard dish={featured[i]} />
              </Reveal>
            ) : null,
          )}
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ dish }: { dish: Dish }) {
  return (
    <motion.article
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="group relative h-full grid md:grid-cols-2 overflow-hidden rounded-md bg-paper border border-hairline"
    >
      <div className="relative aspect-[5/4] md:aspect-auto overflow-hidden bg-paper-deep">
        {dish.image && (
          <motion.div
            variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image src={dish.image} alt={dish.name} fill sizes="(min-width:1024px) 40vw, 100vw" className="object-cover" />
          </motion.div>
        )}
        <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-paper/95 backdrop-blur-md text-eyebrow text-ink border border-hairline">
          Signature
        </div>
      </div>

      <div className="flex flex-col justify-between p-7 md:p-10 lg:p-12">
        <div>
          <div className="text-eyebrow">— Featured plate</div>
          <h3 className="mt-8 font-[var(--font-display)] italic text-ink text-4xl md:text-5xl lg:text-6xl leading-[1.06] pb-1">
            {dish.name}
          </h3>
          <motion.div
            variants={{ rest: { width: 48 }, hover: { width: 112 } }}
            transition={{ duration: 0.5 }}
            className="mt-6 h-px bg-ink/50 group-hover:bg-ink transition-colors"
          />
          <p className="mt-6 text-muted leading-relaxed max-w-md">{dish.description}</p>
        </div>
        <div className="mt-8 flex items-center justify-between gap-4">
          <span className="font-[var(--font-mono)] text-lg tabular-nums text-ink">{formatPrice(dish.price)}</span>
          <motion.div
            variants={{ rest: { rotate: 0 }, hover: { rotate: 45 } }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="h-12 w-12 rounded-full bg-ink text-paper grid place-items-center"
          >
            <ArrowUpRight size={18} />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}

function DishCard({ dish }: { dish: Dish }) {
  return (
    <motion.article
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="group relative h-full flex flex-col overflow-hidden rounded-md bg-paper border border-hairline"
    >
      <div className="relative flex-1 min-h-[180px] overflow-hidden bg-paper-deep">
        {dish.image && (
          <motion.div
            variants={{ rest: { scale: 1 }, hover: { scale: 1.07 } }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image src={dish.image} alt={dish.name} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
          </motion.div>
        )}
        <motion.div
          variants={{ rest: { y: -6, opacity: 0 }, hover: { y: 0, opacity: 1 } }}
          transition={{ duration: 0.4 }}
          className="absolute top-4 right-4 h-9 w-9 rounded-full bg-ink text-paper grid place-items-center"
        >
          <ArrowUpRight size={15} />
        </motion.div>
      </div>
      <div className="bg-paper p-5 md:p-6 border-t border-hairline">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-[var(--font-display)] italic text-ink text-xl md:text-[1.4rem] leading-[1.05] line-clamp-2">
            {dish.name}
          </h3>
          <span className="font-[var(--font-mono)] text-sm tabular-nums text-ink shrink-0">{formatPrice(dish.price)}</span>
        </div>
        <p className="mt-2 text-xs md:text-sm text-muted leading-relaxed line-clamp-2">{dish.description}</p>
      </div>
    </motion.article>
  );
}
