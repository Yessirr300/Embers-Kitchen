export type Photo = {
  src: string;
  alt: string;
  span?: "wide" | "tall" | "regular";
};

// Curated mix of food, atmosphere, brand and people shots.
export const GALLERY: Photo[] = [
  { src: "/images/dishes/12.png", alt: "Whole grilled seabream", span: "wide" },
  { src: "/images/dishes/wolt-labneh.png", alt: "Labneh & roasted beetroot", span: "regular" },
  { src: "/images/gallery/embers-2.jpg", alt: "Chef seasoning pork chop at the open fire", span: "tall" },
  { src: "/images/dishes/9.png", alt: "Seabass crudo, capers and dill", span: "regular" },
  { src: "/images/dishes/11.png", alt: "Mediterranean red prawns in citrus oil", span: "regular" },
  { src: "/images/gallery/embers-1.jpg", alt: "The open kitchen counter at service", span: "wide" },
  { src: "/images/dishes/26.png", alt: "Embers · Φεγγαράκι brand poster", span: "tall" },
  { src: "/images/dishes/7.png", alt: "Open-fire pork chop, sliced", span: "regular" },
  { src: "/images/dishes/wolt-bread.png", alt: "Wood-fired bread", span: "regular" },
  { src: "/images/dishes/18.png", alt: "Tignanello vinyl crate on the turntable", span: "regular" },
  { src: "/images/dishes/30.png", alt: "Storefront — open fire, vins, vinyls", span: "wide" },
  { src: "/images/dishes/3.png", alt: "Beetroot wedges with sumac", span: "regular" },
  { src: "/images/dishes/15.png", alt: "Wine shelf and dried branches", span: "tall" },
  { src: "/images/dishes/20.png", alt: "Natural wines on the pass", span: "regular" },
  { src: "/images/dishes/6.png", alt: "Tuna tataki, fennel and citrus", span: "regular" },
  { src: "/images/gallery/embers-3.jpg", alt: "Crispy carta da musica from the chef", span: "regular" },
  { src: "/images/dishes/19.png", alt: "Bottles by the bar window", span: "wide" },
  { src: "/images/dishes/21.png", alt: "The Embers brand t-shirt", span: "tall" },
  { src: "/images/gallery/cyprus-mail.jpg", alt: "Dinner spread — seabream, potatoes, greens, sheftalies", span: "wide" },
  { src: "/images/dishes/22.png", alt: "On the turntable, mid-service", span: "regular" },
  { src: "/images/hero/main.jpg", alt: "The έμπερς cube light on Gladstonos 94", span: "wide" },
  { src: "/images/dishes/14.png", alt: "Wine fridge, between courses", span: "regular" },
  { src: "/images/dishes/23.png", alt: "The dining room at first light", span: "wide" },
];

// Frames for the horizontally scrolled "Open Kitchen" rail.
export const OPEN_KITCHEN_FRAMES = [
  { src: "/images/gallery/embers-2.jpg", caption: "Salt at the fire." },
  { src: "/images/gallery/embers-1.jpg", caption: "At the pass, mid-service." },
  { src: "/images/gallery/embers-3.jpg", caption: "Bread, finished hot." },
  { src: "/images/dishes/2.png", caption: "Plating the catch of the day." },
  { src: "/images/dishes/28.png", caption: "A plate handed across the counter." },
  { src: "/images/dishes/12.png", caption: "Whole fish, from above." },
];
