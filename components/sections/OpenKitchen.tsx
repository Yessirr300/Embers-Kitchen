"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/animations/Reveal";
import { SplitText } from "@/components/animations/SplitText";
import { OPEN_KITCHEN_FRAMES } from "@/content/gallery";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function OpenKitchen() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current!;
      const distance = track.scrollWidth - window.innerWidth + 200;

      gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${distance + 200}`,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-paper overflow-hidden py-24 md:py-0 md:h-screen">
      <div className="md:absolute md:inset-0 md:flex md:flex-col md:justify-center">
        <div className="container-x mb-12 md:mb-0 md:absolute md:top-32 md:left-0 md:right-0 z-10">
          <div className="flex items-end justify-between">
            <div>
              <Reveal><div className="text-eyebrow">— Open Kitchen</div></Reveal>
              <h2 className="text-display mt-4 text-ink text-[clamp(2rem,4.5vw,4rem)] max-w-2xl">
                <SplitText text="A quiet performance," />
                <br />
                <span className="italic text-muted"><SplitText text="every service." delay={0.2} /></span>
              </h2>
            </div>
            <div className="hidden md:block font-[var(--font-mono)] text-[10px] uppercase tracking-[0.3em] text-muted">
              ← Scroll →
            </div>
          </div>
        </div>

        <div
          ref={trackRef}
          data-lenis-prevent
          className="flex gap-4 md:gap-6 pl-5 md:pl-[10vw] pr-5 md:pr-0 pt-12 md:pt-48 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none no-scrollbar will-change-transform"
        >
          {OPEN_KITCHEN_FRAMES.map((f, i) => (
            <figure
              key={f.src}
              className="relative shrink-0 snap-center w-[82vw] md:w-[42vw] aspect-[4/5] overflow-hidden rounded-md group"
            >
              <Image
                src={f.src}
                alt={f.caption}
                fill
                sizes="(min-width:768px) 42vw, 82vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-paper/55 via-transparent to-transparent" />
              <figcaption className="absolute bottom-5 left-5 right-5 flex items-baseline justify-between text-eyebrow text-ink">
                <span>{f.caption}</span>
                <span className="text-muted">{String(i + 1).padStart(2, "0")} / {OPEN_KITCHEN_FRAMES.length}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
