"use client";

import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { Marquee } from "@/components/animations/Marquee";
import { SITE, NAV } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative bg-paper-soft text-ink overflow-hidden border-t border-hairline">
      <div className="py-10 md:py-16 border-b border-hairline">
        <Marquee speed={55}>
          <MarqueeWord>έμπερς</MarqueeWord>
          <MarqueeDot />
          <MarqueeWord>Embers</MarqueeWord>
          <MarqueeDot />
          <MarqueeWord italic>Ἄνθρακες</MarqueeWord>
          <MarqueeDot />
          <MarqueeWord>Limassol</MarqueeWord>
          <MarqueeDot />
          <MarqueeWord italic>Forged in flame</MarqueeWord>
          <MarqueeDot />
        </Marquee>
      </div>

      <div className="container-x py-16 md:py-24">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr] gap-14">
          <div>
            <div className="text-eyebrow">— Visit</div>
            <p className="mt-4 text-ink text-lg leading-relaxed max-w-sm">
              {SITE.address.street}, {SITE.address.city} {SITE.address.postal}
              <br />
              <a href={`tel:${SITE.phoneRaw}`} className="hover:text-muted transition-colors">{SITE.phone}</a>
              <br />
              <a href={`mailto:${SITE.email}`} className="hover:text-muted transition-colors">{SITE.email}</a>
            </p>
          </div>

          <div>
            <div className="text-eyebrow">— Navigate</div>
            <ul className="mt-4 space-y-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href as never} className="hover:text-muted transition-colors">{n.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/reservations" className="hover:text-muted transition-colors">Reservations</Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-eyebrow">— Hours</div>
            <ul className="mt-4 space-y-3 text-sm">
              {SITE.hours.map((h) => (
                <li key={h.day} className="text-ink">
                  <span className="block text-muted text-[11px] uppercase tracking-[0.18em] font-[var(--font-mono)]">{h.day}</span>
                  <span>{h.lunch === "Closed" ? "Closed" : `${h.lunch} · ${h.dinner}`}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-3">
              <a href={SITE.social.instagram} target="_blank" rel="noreferrer noopener" aria-label="Instagram" className="h-11 w-11 grid place-items-center rounded-full border border-ink/20 text-ink hover:bg-ink hover:text-paper hover:border-ink transition-colors">
                <Instagram size={16} />
              </a>
              <a href={SITE.social.facebook} target="_blank" rel="noreferrer noopener" aria-label="Facebook" className="h-11 w-11 grid place-items-center rounded-full border border-ink/20 text-ink hover:bg-ink hover:text-paper hover:border-ink transition-colors">
                <Facebook size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-hairline flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-eyebrow text-muted">
          <span>© 2026 · έμπερς · Embers Kitchen Limassol</span>
          <span>Developed and designed by WebCitrus.</span>
        </div>
      </div>
    </footer>
  );
}

function MarqueeWord({ children, italic }: { children: React.ReactNode; italic?: boolean }) {
  return (
    <span className={`font-[var(--font-display)] text-ink text-[clamp(3rem,8vw,9rem)] leading-none ${italic ? "italic" : ""}`}>
      {children}
    </span>
  );
}
function MarqueeDot() {
  return <span className="text-ink text-[clamp(2rem,4vw,4rem)]">✦</span>;
}
