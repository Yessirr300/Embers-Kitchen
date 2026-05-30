import type { Metadata, Viewport } from "next";
import { ebGaramond, inter, jetbrains } from "./fonts";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/shared/SmoothScrollProvider";
import { Cursor } from "@/components/shared/Cursor";
import { Loader } from "@/components/shared/Loader";
import { Navbar } from "@/components/navigation/Navbar";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://emberskitchen.com"),
  title: {
    default: "Embers Kitchen · Open-Fire Greek Grill · Limassol",
    template: "%s · Embers Kitchen Limassol",
  },
  description:
    "A small dining room built around one fire — open-fire Greek and Cypriot grill, raw plates from the Limassol day-boats, curated natural wines and vinyl on Gladstonos 94.",
  keywords: [
    "Embers Kitchen",
    "Limassol restaurant",
    "fine dining Limassol",
    "open fire grill",
    "Greek Cypriot restaurant",
    "natural wine Cyprus",
    "Gladstonos 94",
    "feggaraki",
  ],
  openGraph: {
    type: "website",
    title: "Embers Kitchen · Limassol",
    description:
      "Open-fire Greek grill. Vinyl, natural wine, twelve tables — at Gladstonos 94, Limassol.",
    siteName: "Embers Kitchen",
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Embers Kitchen · Limassol",
    description: "Open-fire Greek grill in Limassol.",
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Embers Kitchen",
  image: "/images/hero/main.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gladstonos 94",
    addressLocality: "Limassol",
    postalCode: "3032",
    addressCountry: "CY",
  },
  geo: { "@type": "GeoCoordinates", latitude: 34.6786, longitude: 33.0413 },
  telephone: SITE.phone,
  email: SITE.email,
  servesCuisine: ["Greek", "Cypriot", "Mediterranean", "Seafood"],
  priceRange: "€€€€",
  acceptsReservations: "https://emberskitchen.com/reservations",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "12:30",
      closes: "15:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "18:00",
      closes: "24:00",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${inter.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-paper text-ink selection:bg-ink selection:text-paper">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
        <Loader />
        <Cursor />
        <SmoothScrollProvider>
          <Navbar />
          <main className="relative">{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
