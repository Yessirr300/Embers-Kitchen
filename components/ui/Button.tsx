"use client";

import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/animations/MagneticButton";

const button = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap font-[var(--font-mono)] uppercase tracking-[0.18em] text-[11px] transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-paper hover:bg-ink-soft rounded-full px-7 py-4",
        ghost:
          "bg-transparent text-ink hover:bg-ink hover:text-paper border border-ink/25 hover:border-ink rounded-full px-7 py-4",
        link:
          "text-ink hover:text-muted underline-offset-4 hover:underline px-0 py-0",
        outline:
          "border border-ink/40 hover:border-ink text-ink hover:bg-ink hover:text-paper rounded-full px-7 py-4",
      },
      size: {
        sm: "text-[10px] px-5 py-3",
        md: "",
        lg: "text-[12px] px-9 py-5",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {
    href?: string;
    magnetic?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  href,
  magnetic = true,
  children,
  ...rest
}: Props) {
  const inner = (
    <span className="relative z-10 flex items-center gap-2">{children}</span>
  );

  const cls = cn(button({ variant, size }), className);

  const node = href ? (
    <Link href={href as never} className={cls} data-cursor>
      {inner}
    </Link>
  ) : (
    <button className={cls} data-cursor {...rest}>
      {inner}
    </button>
  );

  if (!magnetic) return node;
  return <Magnetic strength={0.25}>{node}</Magnetic>;
}
