export type Dish = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  tags?: ("vegetarian" | "vegan" | "gluten-free" | "spicy" | "signature" | "raw")[];
  image?: string;
  featured?: boolean;
};

export type MenuCategory =
  | "mezedes"
  | "raw"
  | "from-the-fire"
  | "from-the-sea"
  | "sides"
  | "desserts";

export const CATEGORY_LABELS: Record<MenuCategory, string> = {
  mezedes: "Mezedes",
  raw: "Raw & Crudo",
  "from-the-fire": "From the Fire",
  "from-the-sea": "From the Sea",
  sides: "Sides",
  desserts: "Desserts",
};

// Dishes are drawn from the public Embers Kitchen Wolt menu, the menu card
// photographed at the restaurant, the Cyprus Mail review and the restaurant's
// own gallery. Each photo is matched to the dish it actually shows.

export const MENU: Dish[] = [
  // ─── Mezedes ──────────────────────────────────────────────────────────
  {
    id: "wood-fired-bread",
    name: "Wood-Fired Bread",
    description:
      "Sourdough finished in the hearth, smoked olive oil, sea-salt butter, Cypriot tahini.",
    price: 6,
    category: "mezedes",
    tags: ["vegetarian", "signature"],
    image: "/images/dishes/wolt-bread.png",
    featured: true,
  },
  {
    id: "labneh-beetroot",
    name: "Labneh & Roasted Beetroot",
    description:
      "Strained sheep-milk labneh, ember-roasted heirloom beetroot, sumac, mountain herbs, lemon oil.",
    price: 12,
    category: "mezedes",
    tags: ["vegetarian", "gluten-free", "signature"],
    image: "/images/dishes/wolt-labneh.png",
    featured: true,
  },
  {
    id: "halloumi-saganaki",
    name: "Halloumi Saganaki",
    description:
      "Aged barrel halloumi seared hot, finished with thyme honey from the Troodos foothills and grapefruit.",
    price: 14,
    category: "mezedes",
    tags: ["vegetarian"],
    image: "/images/dishes/1.png",
  },
  {
    id: "politiki-salad",
    name: "Politiki Salad",
    description:
      "Vinegar-pickled white cabbage, carrot, raisins, walnuts, parsley, olive oil.",
    price: 10,
    category: "mezedes",
    tags: ["vegan", "gluten-free"],
    image: "/images/dishes/wolt-politiki.png",
  },
  {
    id: "greek-salad",
    name: "Embers Greek Salad",
    description:
      "Heirloom tomatoes, cucumber, Skyros feta, Kalamata olives, oregano, green pepper.",
    price: 12,
    category: "mezedes",
    tags: ["vegetarian", "gluten-free"],
    image: "/images/dishes/wolt-greek-salad.png",
  },
  {
    id: "beans-sardine",
    name: "White Beans & Sardine",
    description:
      "Slow-braised Greek white beans, oil-cured sardine fillet, rocket, lemon, herbs.",
    price: 11,
    category: "mezedes",
    tags: ["gluten-free"],
    image: "/images/dishes/wolt-beans.png",
  },

  // ─── Raw & Crudo ──────────────────────────────────────────────────────
  {
    id: "seabass-crudo",
    name: "Seabass Crudo",
    description:
      "Mediterranean seabass, salted capers, smoked olive oil, dill, lemon zest.",
    price: 12,
    category: "raw",
    tags: ["raw", "gluten-free", "signature"],
    image: "/images/dishes/9.png",
    featured: true,
  },
  {
    id: "tuna-tataki",
    name: "Tuna Tataki",
    description:
      "Loin of bluefin briefly kissed on the iron, shaved fennel, citrus, green oil.",
    price: 18,
    category: "raw",
    tags: ["raw", "signature"],
    image: "/images/dishes/6.png",
  },
  {
    id: "red-prawns-crudo",
    name: "Red Prawns Crudo",
    description:
      "Mediterranean red prawns, citrus oil, green herb oil, sea salt.",
    price: 16,
    category: "raw",
    tags: ["raw", "gluten-free", "signature"],
    image: "/images/dishes/11.png",
  },
  {
    id: "beetroot-carpaccio",
    name: "Beetroot & Stone Fruit Carpaccio",
    description:
      "Thin-shaved ember-roasted beetroot, peach, shaved fennel, lemon dressing.",
    price: 14,
    category: "raw",
    tags: ["vegan", "gluten-free"],
    image: "/images/gallery/embers-9.jpg",
  },

  // ─── From the Fire ────────────────────────────────────────────────────
  {
    id: "pork-chop",
    name: "Open-Fire Pork Chop",
    description:
      "Heritage breed, dry-brined 24 hours, finished over olive-wood embers, charred greens.",
    price: 22.5,
    category: "from-the-fire",
    tags: ["signature", "gluten-free"],
    image: "/images/dishes/7.png",
    featured: true,
  },
  {
    id: "grilled-chicken",
    name: "Wood-Oven Chicken Breast",
    description:
      "Hand-cut chicken breast, olive oil, lemon, dill tzatziki on the side.",
    price: 19,
    category: "from-the-fire",
    tags: ["gluten-free"],
    image: "/images/dishes/wolt-chicken.png",
  },
  {
    id: "pork-schnitzel",
    name: "Pork Schnitzel",
    description:
      "Pounded thin, breaded, fried golden — served with caper-pepper relish.",
    price: 18,
    category: "from-the-fire",
    image: "/images/dishes/wolt-snitzel.png",
  },
  {
    id: "kleftiko",
    name: "Slow-Cooked Kleftiko",
    description:
      "Lamb shoulder, parchment-wrapped, nine hours over low embers, mountain herbs.",
    price: 28,
    category: "from-the-fire",
    tags: ["signature", "gluten-free"],
    image: "/images/gallery/embers-2.jpg",
  },

  // ─── From the Sea ─────────────────────────────────────────────────────
  {
    id: "whole-seabream",
    name: "Whole Limassol Seabream",
    description:
      "Day-boat seabream, ember-grilled whole, lemon-thyme dressing, charred greens.",
    price: 30,
    category: "from-the-sea",
    tags: ["signature", "gluten-free"],
    image: "/images/dishes/12.png",
    featured: true,
  },
  {
    id: "butterflied-seabream",
    name: "Butterflied Seabream",
    description:
      "Whole seabream opened flat, marinated thyme oil, lemon, sea salt.",
    price: 32,
    category: "from-the-sea",
    tags: ["gluten-free"],
    image: "/images/dishes/wolt-seabream-1.png",
  },
  {
    id: "fava-sage",
    name: "Santorini Fava with Crispy Sage",
    description:
      "Slow-cooked yellow split peas, capers, red onion, herbs, fried sage.",
    price: 14,
    category: "from-the-sea",
    tags: ["vegan", "gluten-free"],
    image: "/images/dishes/10.png",
  },

  // ─── Sides ────────────────────────────────────────────────────────────
  {
    id: "wood-oven-potatoes",
    name: "Wood-Oven Potatoes",
    description: "Cypriot potatoes, hand-cut, slow-baked golden in the wood oven.",
    price: 4.4,
    category: "sides",
    tags: ["vegan", "gluten-free"],
    image: "/images/dishes/wolt-potatoes.png",
  },
  {
    id: "village-greens",
    name: "Village Wild Greens",
    description: "Steamed horta of the day, olive oil, lemon, sea salt.",
    price: 6,
    category: "sides",
    tags: ["vegan", "gluten-free"],
    image: "/images/dishes/23.png",
  },
];

export const FEATURED_DISHES = MENU.filter((d) => d.featured);
