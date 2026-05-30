"use client";

import { useState } from "react";
import { Copy, Check, Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { SplitText } from "@/components/animations/SplitText";
import { SITE } from "@/content/site";

function Copyable({ value, children }: { value: string; children: React.ReactNode }) {
  const [done, setDone] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(value);
        setDone(true);
        setTimeout(() => setDone(false), 1500);
      }}
      className="inline-flex items-center gap-2 hover:text-muted transition-colors group"
    >
      {children}
      <span className="text-muted group-hover:text-ink transition-colors">
        {done ? <Check size={14} /> : <Copy size={14} />}
      </span>
    </button>
  );
}

export function Visit() {
  const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(SITE.address.full)}&output=embed`;

  return (
    <section id="visit" className="relative bg-paper py-32 md:py-44 overflow-hidden">
      <div className="container-x">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-stretch">
          <Reveal>
            <div className="relative aspect-[4/5] lg:aspect-auto lg:h-full min-h-[420px] overflow-hidden rounded-md border border-hairline bg-paper-soft">
              <iframe
                src={mapsEmbed}
                title="Embers Kitchen on Google Maps"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                style={{ filter: "grayscale(1) contrast(1.05)" }}
              />
              <a
                href={SITE.maps}
                target="_blank"
                rel="noreferrer noopener"
                className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-paper/90 backdrop-blur px-4 py-2 text-eyebrow text-ink hover:text-muted transition-colors border border-hairline"
              >
                Open in Google Maps <ExternalLink size={12} />
              </a>
            </div>
          </Reveal>

          <div>
            <Reveal><div className="text-eyebrow">— Visit</div></Reveal>
            <h2 className="text-display mt-6 text-ink text-[clamp(2.5rem,5.5vw,5rem)]">
              <SplitText text="Gladstonos" />
              <br />
              <span className="italic text-muted"><SplitText text="ninety-four." delay={0.2} /></span>
            </h2>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-6">
              <Reveal>
                <div>
                  <div className="text-eyebrow">— Address</div>
                  <div className="mt-3 flex items-start gap-3 text-ink">
                    <MapPin size={18} className="text-ink mt-1 shrink-0" />
                    <div>
                      <div>{SITE.address.street}</div>
                      <div>{SITE.address.city} {SITE.address.postal}</div>
                      <div className="text-muted">{SITE.address.country}</div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div>
                  <div className="text-eyebrow">— Hours</div>
                  <ul className="mt-3 space-y-3">
                    {SITE.hours.map((h) => (
                      <li key={h.day} className="text-ink">
                        <div className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-muted">{h.day}</div>
                        <div className="text-sm tabular-nums">
                          {h.lunch === "Closed" ? <span className="text-muted">Closed</span> : <>Lunch {h.lunch} · Dinner {h.dinner}</>}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div>
                  <div className="text-eyebrow">— Phone</div>
                  <div className="mt-3 flex items-center gap-3">
                    <Phone size={16} className="text-ink" />
                    <a href={`tel:${SITE.phoneRaw}`} className="text-ink hover:text-muted transition-colors">{SITE.phone}</a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div>
                  <div className="text-eyebrow">— Email</div>
                  <div className="mt-3 flex items-center gap-3">
                    <Mail size={16} className="text-ink" />
                    <Copyable value={SITE.email}>
                      <span className="text-ink">{SITE.email}</span>
                    </Copyable>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
