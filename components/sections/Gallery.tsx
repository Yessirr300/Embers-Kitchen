"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { SplitText } from "@/components/animations/SplitText";
import { GALLERY } from "@/content/gallery";

const SPAN_MAP = { wide: "col-span-2", tall: "row-span-2", regular: "" } as const;

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative bg-paper-soft py-32 md:py-44 overflow-hidden">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <Reveal><div className="text-eyebrow">— A Closer Look</div></Reveal>
            <h2 className="text-display mt-6 text-ink text-[clamp(2.5rem,5.5vw,5rem)]">
              <SplitText text="In the" />
              {" "}
              <span className="italic text-muted"><SplitText text="room." delay={0.15} /></span>
            </h2>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-muted">
              The hearth, the counter, the plates, the people. Tap to enlarge.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[220px] gap-2 md:gap-3">
          {GALLERY.map((photo, i) => (
            <motion.button
              layoutId={`gal-${i}`}
              key={photo.src}
              onClick={() => setActive(i)}
              className={`relative overflow-hidden rounded-md bg-paper-deep group ${SPAN_MAP[photo.span ?? "regular"]}`}
              whileHover={{ scale: 0.985 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: (i % 6) * 0.05, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width:768px) 25vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-paper/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute bottom-2 left-3 right-3 text-eyebrow text-ink opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {photo.alt}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-paper/85 backdrop-blur-md p-6 md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <button
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute top-6 right-6 h-11 w-11 rounded-full border border-ink/20 text-ink grid place-items-center hover:bg-ink hover:text-paper transition-colors"
            >
              <X size={18} />
            </button>
            <motion.div
              layoutId={`gal-${active}`}
              className="relative w-full max-w-5xl aspect-[4/3] overflow-hidden rounded-md"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={GALLERY[active].src} alt={GALLERY[active].alt} fill sizes="100vw" className="object-contain" priority />
              <div className="absolute bottom-4 left-6 right-6 text-eyebrow text-ink">{GALLERY[active].alt}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
