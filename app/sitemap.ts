import type { MetadataRoute } from "next";

const BASE = "https://emberskitchen.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/menu`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/events`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/reservations`, lastModified: now, changeFrequency: "monthly", priority: 0.95 },
  ];
}
