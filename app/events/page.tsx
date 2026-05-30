import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import { EVENTS } from "@/content/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Vinyl & Wine, Chef's Table, Greek Heritage Dinners and Open-Fire Theatre at Embers Kitchen, Limassol.",
};

export default function EventsPage() {
  return (
    <>
      <section className="container-x pt-20 md:pt-28 pb-12 md:pb-16">
        <div className="text-eyebrow">02 — Events</div>
        <h1 className="text-display mt-8 text-ink italic text-[clamp(56px,12vw,160px)]">
          Events
        </h1>
        <p className="mt-10 max-w-xl text-ink/85 text-lg leading-snug">
          Four quiet rituals. The room sits with one fire and listens.
        </p>
        <div className="mt-10">
          <Link href="/reservations" className="link-arrow">
            Reserve a seat <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <hr className="border-0 border-t border-hairline" />

      <section className="container-x py-20 md:py-28">
        <ul className="divide-y divide-hairline border-y border-hairline">
          {EVENTS.map((e, i) => (
            <li
              key={e.id}
              className="py-10 md:py-14 grid gap-6 md:grid-cols-[180px_1fr]"
            >
              <div className="flex flex-col gap-2">
                <span className="text-meta text-muted">
                  {String(i + 1).padStart(2, "0")} — {e.tag}
                </span>
                <span className="text-ink text-[15px]">{e.date}</span>
                <span className="text-muted text-[13px]">{e.time}</span>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-display italic text-ink text-[clamp(28px,4vw,44px)]">
                  {e.title}
                </h2>
                <span className="text-muted italic">{e.subtitle}</span>
                <p className="text-ink/85 text-[16px] leading-relaxed max-w-2xl mt-2">
                  {e.description}
                </p>
                {e.price && (
                  <span className="text-meta text-muted mt-2">{e.price}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </>
  );
}
