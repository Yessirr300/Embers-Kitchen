import type { Metadata } from "next";
import { ReservationForm } from "@/components/reservations/ReservationForm";
import { Footer } from "@/components/sections/Footer";
import { SplitText } from "@/components/animations/SplitText";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Reserve a table at Embers Kitchen Limassol — open-fire Teppanyaki and Greek grill on Gladstonos 94.",
};

export default function ReservationsPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-24 overflow-hidden bg-paper paper-grain">
        <div className="container-x relative">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
            <div>
              <div className="text-eyebrow">— Reservations</div>
              <h1 className="text-display mt-6 text-ink text-[clamp(2rem,5vw,5rem)]">
                <SplitText text="Reserve a" />
                <br />
                <span className="italic text-muted">
                  <SplitText text="seat at the fire." delay={0.2} />
                </span>
              </h1>
              <p className="mt-8 max-w-md text-muted leading-relaxed">
                Four short steps. We&apos;ll confirm by email within twelve hours.
              </p>

              <ul className="mt-10 space-y-4 text-muted text-sm">
                <li className="flex items-baseline gap-3">
                  <span className="text-ink">·</span>
                  <span>Lunch 12:30 – 15:00 · Dinner 18:00 – 24:00</span>
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="text-ink">·</span>
                  <span>Closed Sundays</span>
                </li>
                <li className="flex items-baseline gap-3">
                  <span className="text-ink">·</span>
                  <span>Children welcome — walk-ins welcome at the counter</span>
                </li>
              </ul>
            </div>

            <ReservationForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
