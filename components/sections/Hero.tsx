"use client";

import { HeroScene } from "./HeroScene";
import { Marquee } from "@/components/animations/Marquee";

export function Hero() {
  return (
    <section
      className="relative min-h-[100svh] md:h-[110vh] md:min-h-[760px] overflow-hidden bg-paper"
      id="hero"
    >
      <div className="absolute inset-0">
        <HeroScene />
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 border-y border-hairline bg-paper/85 backdrop-blur-md py-3">
        <Marquee speed={45}>
          <MarqueeItem>Open-Fire Greek Grill</MarqueeItem>
          <MarqueeItem>Natural Wine · Vinyl</MarqueeItem>
          <MarqueeItem>Day-Boat Fish</MarqueeItem>
          <MarqueeItem>Twelve Tables · One Fire</MarqueeItem>
          <MarqueeItem>Mon – Sat · 12:30 to Midnight</MarqueeItem>
          <MarqueeItem>Gladstonos 94, Limassol</MarqueeItem>
          <MarqueeItem>έμπερς</MarqueeItem>
        </Marquee>
      </div>
    </section>
  );
}

function MarqueeItem({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-12 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.3em] text-muted">
      {children}
      <span className="text-ink">✦</span>
    </span>
  );
}

export default Hero;
