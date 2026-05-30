import type { Metadata } from "next";
import Link from "next/link";
import { MenuList } from "@/components/menu/MenuList";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "The Embers Kitchen menu — open-fire grill, mezedes, raw plates, slow-cooked Cypriot specialties, desserts.",
};

export default function MenuPage() {
  return (
    <>
      <section className="container-x pt-20 md:pt-28 pb-12 md:pb-16">
        <div className="text-eyebrow">03 — The Menu</div>
        <h1 className="text-display mt-8 text-ink italic text-[clamp(56px,12vw,160px)]">
          The Menu
        </h1>
        <p className="mt-10 max-w-xl text-ink/85 text-lg leading-snug">
          Read as a card. Prices in euro. Dishes change with the market — the printed version arrives at the table.
        </p>
        <div className="mt-10">
          <Link href="/reservations" className="link-arrow">
            Reserve a table <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <hr className="border-0 border-t border-hairline" />

      <section className="container-x py-20 md:py-28">
        <MenuList />
      </section>

      <Footer />
    </>
  );
}
