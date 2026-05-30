"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { NAV } from "@/content/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 bg-paper/85 backdrop-blur-md border-b border-hairline">
        <div className="container-x flex h-14 md:h-16 items-center justify-between">
          <Logo />

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href as never}
                className="text-meta text-muted hover:text-ink transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            aria-label="Open menu"
            aria-expanded={open}
            className="md:hidden text-meta text-ink"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-paper md:hidden transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      >
        <div className="container-x pt-24 flex flex-col gap-0">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href as never}
              onClick={() => setOpen(false)}
              className="block py-6 border-b border-hairline font-[var(--font-display)] italic text-4xl text-ink"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
