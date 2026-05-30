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
        "inline-flex items-baseline gap-3 text-ink hover:text-muted transition-colors leading-none",
        className,
      )}
    >
      <span
        className="font-[var(--font-inter)] font-medium tracking-[-0.04em] lowercase text-[22px]"
      >
        έμπερς
      </span>
      <span className="hidden sm:inline text-meta text-muted">
        Embers · Limassol
      </span>
    </Link>
  );
}
