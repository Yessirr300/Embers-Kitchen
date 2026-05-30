"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { Leaf, Flame, WheatOff } from "lucide-react";
import { MENU, CATEGORY_LABELS, type MenuCategory } from "@/content/menu";
import { formatPrice, cn } from "@/lib/utils";

const TAG_ICON = {
  vegetarian: <Leaf size={11} />,
  vegan: <Leaf size={11} />,
  "gluten-free": <WheatOff size={11} />,
  spicy: <Flame size={11} />,
  signature: null,
  raw: null,
};

const FILTERS = [
  { id: "all", label: "All" },
  { id: "vegetarian", label: "Vegetarian" },
  { id: "gluten-free", label: "Gluten-Free" },
  { id: "signature", label: "Signature" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

const categories = Object.keys(CATEGORY_LABELS) as MenuCategory[];

export function MenuList() {
  const [filter, setFilter] = useState<FilterId>("all");

  const grouped = useMemo(() => {
    return categories.map((c) => ({
      category: c,
      label: CATEGORY_LABELS[c],
      dishes: MENU.filter((d) => d.category === c).filter((d) => {
        if (filter === "all") return true;
        return d.tags?.includes(filter as never);
      }),
    }));
  }, [filter]);

  return (
    <div>
      <div className="sticky top-16 lg:top-20 z-20 -mx-5 md:-mx-8 mb-12 bg-paper/85 backdrop-blur-xl border-b border-hairline px-5 md:px-8 py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="text-eyebrow">— Refine</div>
          <div className="flex flex-wrap gap-1">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                data-cursor
                onClick={() => setFilter(f.id)}
                className={cn(
                  "relative rounded-full px-4 py-2 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] transition-colors",
                  filter === f.id
                    ? "text-paper"
                    : "text-muted hover:text-ink",
                )}
              >
                {filter === f.id && (
                  <motion.span
                    layoutId="filter-bg"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: "spring", damping: 22, stiffness: 220 }}
                  />
                )}
                <span className="relative z-10">{f.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-24">
        <AnimatePresence mode="popLayout">
          {grouped.map(({ category, label, dishes }) => {
            if (dishes.length === 0) return null;
            return (
              <motion.section
                key={category}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="grid lg:grid-cols-[260px_1fr] gap-8 lg:gap-16 mb-10">
                  <div>
                    <div className="text-eyebrow">— {String(category).replace("-", " ")}</div>
                    <h2 className="font-[var(--font-display)] italic text-ink text-5xl mt-3">
                      {label}
                    </h2>
                  </div>
                  <div className="hidden lg:block h-px self-end bg-hairline" />
                </div>

                <ul className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                  {dishes.map((d) => (
                    <motion.li
                      key={d.id}
                      layout
                      whileHover="hover"
                      initial="rest"
                      animate="rest"
                      className="group relative border-t border-hairline pt-6"
                    >
                      <div className="flex items-start justify-between gap-6">
                        <div className="flex items-start gap-4">
                          {d.image && (
                            <motion.div
                              className="relative h-16 w-16 rounded-md overflow-hidden shrink-0 ring-1 ring-ink/10 photo-mono"
                              variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
                            >
                              <Image src={d.image} alt={d.name} fill sizes="80px" className="object-cover" />
                            </motion.div>
                          )}
                          <div>
                            <h3 className="font-[var(--font-display)] text-2xl text-ink italic group-hover:text-muted transition-colors">
                              {d.name}
                            </h3>
                            <p className="mt-2 text-sm text-muted leading-relaxed max-w-md">
                              {d.description}
                            </p>
                            {d.tags && (
                              <div className="mt-3 flex flex-wrap gap-1.5">
                                {d.tags.map((t) => (
                                  <span
                                    key={t}
                                    className={cn(
                                      "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[9px] uppercase tracking-[0.18em] font-[var(--font-mono)] border",
                                      t === "signature"
                                        ? "border-ink text-ink"
                                        : "border-hairline text-muted",
                                    )}
                                  >
                                    {TAG_ICON[t as keyof typeof TAG_ICON]}
                                    {t}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="shrink-0 font-[var(--font-mono)] text-sm tabular-nums text-ink pt-1">
                          {formatPrice(d.price)}
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.section>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
