import type { Metadata } from "next";
import { ReservationForm } from "@/components/reservations/ReservationForm";
import { Footer } from "@/components/sections/Footer";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Reserve a table at Embers Kitchen, Limassol — Gladstonos 94.",
};

export default function ReservationsPage() {
  return (
    <>
      <section className="container-x pt-20 md:pt-28 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
          <div>
            <div className="text-eyebrow">04 — Reserve</div>
            <h1 className="text-display mt-8 text-ink italic text-[clamp(56px,11vw,140px)]">
              Reserve
            </h1>
            <p className="mt-10 max-w-md text-ink/85 text-lg leading-snug">
              Four short steps. We confirm by email within twelve hours.
            </p>

            <ul className="mt-12 space-y-4 text-ink/85 text-[15px]">
              <li>Lunch 12:30 — 15:00 · Dinner 18:00 — 24:00</li>
              <li>Closed Sundays.</li>
              <li>Walk-ins welcome at the counter. Parties of eight or more — please call.</li>
            </ul>

            <div className="mt-10 flex flex-col gap-2 text-meta text-muted">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="hover:text-ink transition-colors"
              >
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="hover:text-ink transition-colors"
              >
                {SITE.email}
              </a>
            </div>
          </div>

          <ReservationForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
