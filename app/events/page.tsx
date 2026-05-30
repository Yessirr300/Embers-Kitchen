import type { Metadata } from "next";
import { Footer } from "@/components/sections/Footer";
import { SplitText } from "@/components/animations/SplitText";
import { Button } from "@/components/ui/Button";
import { EVENTS } from "@/content/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Vinyl & Wine Nights, Chef's Table Saturdays, Greek Heritage Dinners and Teppanyaki Theatre at Embers Kitchen in Limassol.",
};

export default function EventsPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-paper paper-grain">
        <div className="container-x relative">
          <div className="text-eyebrow">— Tables & Sessions</div>
          <h1 className="text-display mt-6 text-ink text-[clamp(2rem,5vw,5rem)] max-w-5xl">
            <SplitText text="The room is" />
            <br />
            <span className="italic text-muted">
              <SplitText text="always listening." delay={0.2} />
            </span>
          </h1>
          <div className="mt-8">
            <Button href="/reservations" variant="primary">Reserve a Seat</Button>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-paper paper-grain">
        <div className="container-x">
          <ul className="divide-y divide-ink/10 border-t border-b border-ink/10">
            {EVENTS.map((e) => (
              <li key={e.id} className="py-10 md:py-12 grid md:grid-cols-12 gap-6">
                <div className="md:col-span-3">
                  <div className="text-eyebrow">{e.tag}</div>
                  <div className="mt-3 text-ink font-medium">{e.date}</div>
                  <div className="text-muted text-sm">{e.time}</div>
                </div>
                <div className="md:col-span-9">
                  <h2 className="text-display text-ink text-[clamp(1.5rem,3vw,2.5rem)]">{e.title}</h2>
                  <div className="text-muted italic mt-1">{e.subtitle}</div>
                  <p className="text-ink/80 mt-4 max-w-2xl">{e.description}</p>
                  {e.price && <div className="mt-3 text-sm text-muted">{e.price}</div>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}
