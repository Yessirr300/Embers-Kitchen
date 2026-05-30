import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(eur: number) {
  return `€${eur.toFixed(eur % 1 === 0 ? 0 : 2)}`;
}
