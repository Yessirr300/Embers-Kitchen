"use client";

import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const button = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-[var(--font-mono)] uppercase tracking-[0.22em] text-[11px] transition-colors disabled:pointer-events-none disabled:opacity-40",
  {
    variants: {
      variant: {
        primary: "bg-ink text-paper hover:bg-ink-soft px-7 py-4",
        ghost: "text-ink hover:text-muted px-0 py-0",
        outline: "border border-ink text-ink hover:bg-ink hover:text-paper px-7 py-4",
        link: "text-ink hover:text-muted underline underline-offset-4 px-0 py-0",
      },
      size: {
        sm: "text-[10px] px-5 py-3",
        md: "",
        lg: "text-[11px] px-9 py-5",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {
    href?: string;
    /** No-op kept for source compatibility. */
    magnetic?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  href,
  magnetic: _magnetic,
  children,
  ...rest
}: Props) {
  void _magnetic;
  const cls = cn(button({ variant, size }), className);

  if (href) {
    return (
      <Link href={href as never} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
