import Link from "next/link";
import { SITE } from "@/content/site";
import { Footer } from "@/components/sections/Footer";

const NOTICES = [
  {
    id: "menu",
    n: "01",
    label: "Menu",
    body:
      "Built around the embers. Mezedes, raw plates, day-boat fish, slow-cooked Cypriot meats — drawn from the market that morning.",
    cta: "Read the menu",
    href: "/menu" as const,
  },
  {
    id: "events",
    n: "02",
    label: "Events",
    body:
      "Vinyl and natural wine, Thursday from twenty. The chef's counter, Saturday. Heritage dinners, once a month.",
    cta: "See the four",
    href: "/events" as const,
  },
  {
    id: "gallery",
    n: "03",
    label: "Gallery",
    body:
      "The room, the fire, the food, the wine. Twenty-three frames — no captions, no order.",
    cta: "Look around",
    href: "/gallery" as const,
  },
  {
    id: "visit",
    n: "04",
    label: "Visit",
    body: `${SITE.address.street}, ${SITE.address.city}. Monday to Saturday, 12:30 — 15:00 and 18:00 — 24:00. Closed Sundays.`,
    cta: "Open the map",
    href: SITE.maps,
    external: true,
  },
  {
    id: "reserve",
    n: "05",
    label: "Reserve",
    body:
      "Twelve tables. Eight counter seats. Walk-ins welcome at the bar — for the rest, we confirm within twelve hours.",
    cta: "Reserve a table",
    href: "/reservations" as const,
  },
];

export default function Home() {
  return (
    <>
      <section className="container-x pt-24 pb-20 md:pt-36 md:pb-28">
        <div className="text-eyebrow">έμπερς · since 2023</div>
        <h1 className="text-display mt-10 text-ink italic text-[clamp(64px,15vw,220px)]">
          Embers
          <br />
          Kitchen
        </h1>
        <p className="mt-12 max-w-2xl text-ink/85 text-lg md:text-xl leading-snug">
          A small dining room built around one fire — Greek-Cypriot grill, natural wine and vinyl on Gladstonos 94, Limassol.
        </p>
      </section>

      <hr className="border-0 border-t border-hairline" />

      <section id="notices" className="container-x py-20 md:py-28">
        <ul className="grid gap-y-14 md:gap-y-20 gap-x-12 md:grid-cols-2">
          {NOTICES.map((n) => (
            <li
              key={n.id}
              id={n.id}
              className="flex flex-col gap-5 scroll-mt-24"
            >
              <div className="flex items-baseline gap-4">
                <span className="text-meta text-muted">{n.n}</span>
                <span className="text-meta text-ink">— {n.label}</span>
              </div>
              <p className="text-ink text-[19px] md:text-[21px] leading-snug max-w-xl">
                {n.body}
              </p>
              <div className="mt-1">
                {"external" in n && n.external ? (
                  <a
                    href={n.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="link-arrow"
                  >
                    {n.cta} <span aria-hidden>→</span>
                  </a>
                ) : (
                  <Link href={n.href as never} className="link-arrow">
                    {n.cta} <span aria-hidden>→</span>
                  </Link>
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
