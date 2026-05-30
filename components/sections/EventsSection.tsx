"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { SplitText } from "@/components/animations/SplitText";
import { VinylRecord } from "@/components/animations/VinylRecord";
import { Button } from "@/components/ui/Button";
import { EVENTS } from "@/content/events";

export function EventsSection({ full = false }: { full?: boolean }) {
  const shown = full ? EVENTS : EVENTS.slice(0, 3);

  return (
    <section id="events" className="relative bg-paper py-32 md:py-44 overflow-hidden">
      <div className="container-x">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-center">
          <div className="relative flex justify-center">
            <div className="relative aspect-square w-full max-w-md">
              <VinylRecord className="h-full w-full" />
            </div>
          </div>

          <div>
            <Reveal><div className="text-eyebrow">— Tables & Sessions</div></Reveal>
            <h2 className="text-display mt-6 text-ink text-[clamp(2.5rem,5.5vw,5rem)]">
              <SplitText text="Nights with" />
              <br />
              <span className="italic text-muted"><SplitText text="a side B." delay={0.2} /></span>
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-6 text-muted max-w-prose leading-relaxed">
                A residency for the curious. Vinyl pours, eight-seat chef&apos;s
                tables, monthly heritage dinners, and the live theatre of the
                open hearth. Always seasonal, always small.
              </p>
            </Reveal>
            {!full && (
              <Reveal delay={0.3}>
                <div className="mt-8">
                  <Button href="/events" variant="ghost" size="lg">
                    All Events
                    <ArrowUpRight size={14} className="ml-1" />
                  </Button>
                </div>
              </Reveal>
            )}
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-2 gap-4 md:gap-6">
          {shown.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.08}>
              <Link
                href={"/reservations" as never}
                className="group relative block overflow-hidden rounded-md bg-paper-soft border border-hairline aspect-[4/3] md:aspect-[5/3]"
              >
                <Image
                  src={e.image}
                  alt={e.title}
                  fill
                  sizes="(min-width:768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/50 to-transparent" />
                <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
                  <div className="flex justify-between text-eyebrow">
                    <span className="text-ink">{e.tag}</span>
                    <span className="text-muted">{e.recurrence}</span>
                  </div>
                  <div>
                    <h3 className="font-[var(--font-display)] text-3xl md:text-4xl italic text-ink">{e.title}</h3>
                    <p className="mt-1 text-muted text-sm">{e.subtitle}</p>
                    <div className="mt-5 flex items-center justify-between gap-4">
                      <div className="text-[11px] font-[var(--font-mono)] uppercase tracking-[0.18em] text-muted">
                        {e.date} · {e.time}
                      </div>
                      <ArrowUpRight size={20} className="text-ink transition-transform duration-500 group-hover:rotate-45" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
