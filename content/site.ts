export const SITE = {
  name: "Embers Kitchen",
  greek: "έμπερς",
  tagline: "Forged in Flame. Rooted in Tradition.",
  description:
    "Open-fire Teppanyaki and Greek-Cypriot grill in the heart of Limassol.",
  address: {
    street: "Gladstonos 94",
    city: "Limassol",
    postal: "3032",
    country: "Cyprus",
    full: "Gladstonos 94, Limassol 3032, Cyprus",
  },
  phone: "+357 97 470 471",
  phoneRaw: "+35797470471",
  email: "reservations@emberskitchen.com",
  // Endpoint inbox for the reservation form. Change later to client's inbox.
  reservationsInbox: "webcitrus.work@gmail.com",
  hours: [
    { day: "Monday – Saturday", lunch: "12:30 – 15:00", dinner: "18:00 – 24:00" },
    { day: "Sunday", lunch: "Closed", dinner: "Closed" },
  ],
  geo: { lat: 34.6786, lng: 33.0413 },
  maps: "https://maps.app.goo.gl/XWsW1fX4FB7kSjtg7",
  social: {
    instagram: "https://www.instagram.com/embers.kitchen",
    facebook: "https://www.facebook.com/p/Emberskitchen-61550561245122/",
  },
};

export const NAV = [
  { label: "Menu", href: "/menu" },
  { label: "Events", href: "/events" },
  { label: "Visit", href: "/#visit" },
  { label: "Reserve", href: "/reservations" },
];
