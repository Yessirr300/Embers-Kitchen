import { Hero } from "@/components/sections/Hero";
import { Concept } from "@/components/sections/Concept";
import { MenuPreview } from "@/components/sections/MenuPreview";
import { OpenKitchen } from "@/components/sections/OpenKitchen";
import { EventsSection } from "@/components/sections/EventsSection";
import { Gallery } from "@/components/sections/Gallery";
import { ReserveCTA } from "@/components/sections/ReserveCTA";
import { Visit } from "@/components/sections/Visit";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Concept />
      <MenuPreview />
      <OpenKitchen />
      <EventsSection />
      <Gallery />
      <ReserveCTA />
      <Visit />
      <Footer />
    </>
  );
}
