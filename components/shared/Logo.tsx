"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  const pathname = usePathname();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <Link
      href="/"
      onClick={handleClick}
      aria-label="Embers Kitchen — Home"
      className={cn(
        "group inline-flex items-baseline gap-2 text-ink hover:text-muted transition-colors leading-none",
        className,
      )}
    >
      <span
        className="font-[var(--font-inter)] font-medium tracking-[-0.045em] lowercase text-2xl md:text-[28px]"
        style={{ fontFeatureSettings: '"ss01" 1' }}
      >
        έμπερς
      </span>
      <span className="hidden sm:inline font-[var(--font-mono)] text-[9px] uppercase tracking-[0.32em] text-muted group-hover:text-ink transition-colors">
        embers · limassol
      </span>
    </Link>
  );
}
