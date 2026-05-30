import Link from "next/link";
import { SITE } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="container-x py-10 md:py-12 flex flex-col gap-6 md:flex-row md:items-baseline md:justify-between text-meta text-muted">
        <span className="text-ink">
          έμπερς · Embers Kitchen, Limassol
        </span>
        <span className="hidden md:inline">
          {SITE.address.street} · {SITE.address.city}
        </span>
        <div className="flex items-baseline gap-6">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="text-muted hover:text-ink transition-colors"
          >
            {SITE.phone}
          </a>
          <a
            href={SITE.social.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="text-muted hover:text-ink transition-colors"
          >
            Instagram
          </a>
          <a
            href={SITE.social.facebook}
            target="_blank"
            rel="noreferrer noopener"
            className="text-muted hover:text-ink transition-colors"
          >
            Facebook
          </a>
        </div>
        <span className="md:hidden text-muted">
          {SITE.address.street} · {SITE.address.city}
        </span>
        <Link
          href="/reservations"
          className="text-ink underline underline-offset-4 hover:text-muted transition-colors"
        >
          Reserve a table
        </Link>
      </div>
      <div className="container-x pb-10 text-meta text-muted/70">
        © 2026 · designed by WebCitrus
      </div>
    </footer>
  );
}
