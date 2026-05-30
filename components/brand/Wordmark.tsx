"use client";

import { cn } from "@/lib/utils";

export function Wordmark({
  className,
  subtitle = "embers · limassol",
  size = "lg",
}: {
  className?: string;
  subtitle?: string | null;
  size?: "sm" | "md" | "lg" | "xl";
}) {
  const sizes = {
    sm: "text-[28px]",
    md: "text-[36px] sm:text-[42px]",
    lg: "text-[56px] sm:text-[72px] md:text-[88px]",
    xl: "text-[68px] sm:text-[96px] md:text-[130px] lg:text-[160px]",
  } as const;

  const subSizes = {
    sm: "text-[8px] tracking-[0.32em] mt-1",
    md: "text-[9px] tracking-[0.36em] mt-1.5",
    lg: "text-[10px] tracking-[0.42em] mt-2",
    xl: "text-[10px] sm:text-[11px] md:text-[12px] tracking-[0.42em] sm:tracking-[0.5em] mt-2 sm:mt-3",
  } as const;

  return (
    <div className={cn("inline-flex flex-col items-center leading-none", className)}>
      <span
        className={cn(
          "font-[var(--font-inter)] font-medium tracking-[-0.045em] lowercase",
          sizes[size],
        )}
        style={{ fontFeatureSettings: '"ss01" 1, "cv05" 1' }}
        aria-label="Embers Kitchen"
      >
        έμπερς
      </span>
      {subtitle && (
        <span
          className={cn(
            "font-[var(--font-mono)] uppercase text-current opacity-70 text-center",
            subSizes[size],
          )}
        >
          {subtitle}
        </span>
      )}
    </div>
  );
}
