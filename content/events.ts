export type Event = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  time: string;
  recurrence?: string;
  description: string;
  price?: string;
  image: string;
  tag: string;
};

// Events are publicly representative — confirm cadence with the restaurant.
export const EVENTS: Event[] = [
  {
    id: "vinyl-wine",
    title: "Vinyl & Wine Nights",
    subtitle: "Side A · Aegean reds",
    date: "Every Thursday",
    time: "20:00 – late",
    recurrence: "Weekly",
    description:
      "Six curated pours from boutique Cypriot and Greek growers, soundtracked from our turntable. Our sommelier walks each table through the lineup between flips of the vinyl.",
    price: "€55 / guest · 6 pours · pairing bites",
    image: "/images/gallery/embers-6.jpg",
    tag: "Wine",
  },
  {
    id: "chefs-table",
    title: "Chef's Table Saturdays",
    subtitle: "Eight seats. One fire.",
    date: "Saturdays",
    time: "19:30 seating",
    recurrence: "Weekly · By reservation",
    description:
      "An eight-seat counter directly at the open kitchen. A seven-course tasting menu built that morning around the market and the embers — no two evenings the same.",
    price: "€95 / guest · pairing optional",
    image: "/images/gallery/embers-1.jpg",
    tag: "Tasting",
  },
  {
    id: "greek-heritage",
    title: "Greek Heritage Dinner",
    subtitle: "A menu rooted in the village",
    date: "First Wednesday of the month",
    time: "19:30 – 23:00",
    recurrence: "Monthly",
    description:
      "A four-course tribute to Greek and Cypriot grandmothers — kleftiko, fasolada, melomakarona, and stories. Live laouto in the second hour.",
    price: "€68 / guest · wine flight +€28",
    image: "/images/dishes/12.png",
    tag: "Heritage",
  },
  {
    id: "fire-theater",
    title: "Open-Fire Theatre",
    subtitle: "Counter seating · live cooking",
    date: "Friday & Saturday",
    time: "18:00 / 21:00",
    recurrence: "Twice nightly",
    description:
      "Eight seats at the hearth. Whole fish, ember-grilled meats, plated in front of you — performed with knife-work, fire and a few quiet showpieces.",
    price: "€85 / guest · 9 courses",
    image: "/images/gallery/embers-2.jpg",
    tag: "Live",
  },
];
