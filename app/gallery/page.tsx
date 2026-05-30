import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "@/components/sections/Footer";
import { GALLERY } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "The room, the fire, the food, the wine — photographs from Embers Kitchen, Limassol.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="container-x pt-20 md:pt-28 pb-12 md:pb-16">
        <div className="text-eyebrow">03 — Gallery</div>
        <h1 className="text-display mt-8 text-ink italic text-[clamp(56px,12vw,160px)]">
          Gallery
        </h1>
        <p className="mt-10 max-w-xl text-ink/85 text-lg leading-snug">
          A few frames. The room, the fire, the food, the wine. No captions — the photographs do the talking.
        </p>
      </section>

      <hr className="border-0 border-t border-hairline" />

      <section className="container-x py-12 md:py-20">
        <ul
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 auto-rows-[44vw] sm:auto-rows-[30vw] md:auto-rows-[22vw] lg:auto-rows-[15vw] grid-flow-dense"
        >
          {GALLERY.map((p, i) => {
            const wide = p.span === "wide";
            const tall = p.span === "tall";
            const spanCls = [
              wide ? "lg:col-span-2" : "",
              tall ? "lg:row-span-2" : "",
            ]
              .filter(Boolean)
              .join(" ");
            return (
              <li
                key={p.src}
                className={`relative overflow-hidden bg-paper-soft ${spanCls}`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="object-cover"
                  priority={i < 4}
                />
              </li>
            );
          })}
        </ul>
      </section>

      <Footer />
    </>
  );
}
