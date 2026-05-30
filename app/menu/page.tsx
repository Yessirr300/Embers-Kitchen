import type { Metadata } from "next";
import { MenuList } from "@/components/menu/MenuList";
import { Footer } from "@/components/sections/Footer";
import { SplitText } from "@/components/animations/SplitText";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "The Embers Kitchen menu — open-fire Teppanyaki, mezedes, raw plates, slow-cooked Cypriot specialties, and desserts.",
};

export default function MenuPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-paper paper-grain">
        <div className="container-x relative">
          <div className="text-eyebrow">— The Menu</div>
          <h1 className="text-display mt-6 text-ink text-[clamp(2rem,5vw,5rem)] max-w-5xl">
            <SplitText text="Built around" />
            <br />
            <span className="italic text-muted">
              <SplitText text="the fire." delay={0.2} />
            </span>
          </h1>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/reservations" variant="primary">Reserve a Table</Button>
          </div>
        </div>
      </section>

      <section className="bg-paper pb-32 md:pb-40">
        <div className="container-x">
          <MenuList />
        </div>
      </section>

      <Footer />
    </>
  );
}
