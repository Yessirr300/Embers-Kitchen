# Embers Kitchen · Limassol

A cinematic single-page brand site for **Embers Kitchen**, the open-fire Teppanyaki & Greek grill restaurant on Gladstonos 94, Limassol. Built with Next.js 15, Tailwind v4, Framer Motion, GSAP and Lenis.

Live sections: **Hero · Concept · Signature Menu · Open Kitchen (horizontal scroll) · Events · Gallery · Reserve · Visit**.

Dedicated routes: `/menu` · `/events` · `/reservations` · `/api/reservations`.

---

## Quick start

```bash
npm install
cp .env.example .env.local   # then add your RESEND_API_KEY (optional in dev)
npm run dev
```

Open <http://localhost:3000>.

> The reservation form works in dev **without** a Resend key — submissions are logged to the server console instead of being emailed.

---

## Environment variables

| Key | Required | Description |
| --- | --- | --- |
| `RESEND_API_KEY` | for production | Get one at <https://resend.com>. Free tier sends 100 / day. |

Reservations are sent **to** `webcitrus.work@gmail.com` (configurable in [`content/site.ts`](content/site.ts) → `reservationsInbox`).

The sender address is `Embers Reservations <onboarding@resend.dev>` (Resend's shared sandbox). To send from `reservations@emberskitchen.com` instead, verify the `emberskitchen.com` domain in Resend and update the `from:` value in [`lib/email.ts`](lib/email.ts).

---

## Project structure

```
app/
  layout.tsx              # fonts, providers, metadata, JSON-LD
  page.tsx                # main landing — sections orchestration
  fonts.ts                # Fraunces (display), Inter (body), JetBrains Mono
  icon.tsx                # favicon
  opengraph-image.tsx     # dynamic OG image (1200×630)
  menu/page.tsx
  events/page.tsx
  reservations/page.tsx
  api/reservations/route.ts   # POST → Zod → Resend → email
components/
  animations/             # EmberParticles, SplitText, Reveal, Marquee, Tilt3D, VinylRecord, MagneticButton
  navigation/             # Navbar (sticky blur, mobile menu)
  sections/               # Hero, Concept, MenuPreview, OpenKitchen, EventsSection, Gallery, ReserveCTA, Visit, Footer
  menu/MenuList.tsx       # full menu with category groups & filters
  reservations/ReservationForm.tsx   # 4-step form + confirmation
  shared/                 # Loader, Cursor, SmoothScrollProvider (Lenis), Logo
  ui/Button.tsx           # cva variants + magnetic wrapper
content/
  site.ts                 # contacts, hours, social — change here
  menu.ts                 # all dishes (typed, grouped by category)
  events.ts               # event cards
  gallery.ts              # photos & open-kitchen frames
lib/
  utils.ts                # cn, formatPrice
  email.ts                # Resend client + branded HTML template
public/
  images/                 # restaurant photos downloaded from public sources
```

---

## Design system

Tokens live in [`app/globals.css`](app/globals.css) as a Tailwind v4 `@theme` block:

| Token | Hex | Use |
| --- | --- | --- |
| `--color-charred` | `#0A0807` | Page background |
| `--color-smoke` | `#14100E` | Section bg |
| `--color-ember` | `#FF5B14` | Primary CTA & accent |
| `--color-coal` | `#E03A0A` | Hover state |
| `--color-brass` | `#C9A668` | Editorial gold accent |
| `--color-bone` | `#F4E9D8` | Foreground / text |
| `--color-bordeaux` | `#7A1F1F` | Secondary accent |

Fonts: **Fraunces** (variable serif, italic display) · **Inter** (body) · **JetBrains Mono** (eyebrows, prices, timestamps).

Use the `text-eyebrow` utility class for small uppercase mono labels and `text-display` for hero-grade serif headings.

---

## Animation stack

- **Lenis** — smooth scroll across the whole document
- **Framer Motion** — layout, hover, AnimatePresence (modals, page step transitions)
- **GSAP + ScrollTrigger** — pinned horizontal scroll in the *Open Kitchen* section
- **Custom canvas** — ember particles in the Hero and Reserve CTA
- **Custom cursor** — desktop-only, `mix-blend-mode: difference`, expands on `[data-cursor]` targets, shows label from `data-cursor-text`

---

## Content editing

All copy and pricing lives in `content/*.ts`. Add a new dish:

```ts
// content/menu.ts
{
  id: "new-dish",
  name: "Smoked Beetroot",
  description: "Hearth-roasted, goat-cheese cream, walnut oil.",
  price: 12,
  category: "mezedes",
  tags: ["vegetarian"],
  image: "/images/dishes/24.png",
}
```

Replace photos by dropping new files into `public/images/dishes/` and pointing the dish at the new path.

---

## Reservations email

The POST handler in [`app/api/reservations/route.ts`](app/api/reservations/route.ts):

1. Rate-limits to 5 requests per IP per minute (in-memory).
2. Validates with a Zod schema; honeypot field blocks bots.
3. Calls `sendReservation()` in [`lib/email.ts`](lib/email.ts), which:
   - if `RESEND_API_KEY` is set → sends a branded HTML email to the configured inbox,
   - otherwise → logs to console (no failure).

To change the destination inbox, edit `SITE.reservationsInbox` in [`content/site.ts`](content/site.ts).

---

## Deploying to Vercel

1. Push the repo to GitHub.
2. Import into Vercel (no special build config needed).
3. Add the env var `RESEND_API_KEY` in **Settings → Environment Variables**.
4. Deploy.

The site is fully static for `/`, `/menu`, `/events`, `/reservations` (the form is a client component), with one dynamic API route.

---

## Photo credits

Imagery downloaded from publicly-accessible sources — the restaurant's own [emberskitchen.com](https://emberskitchen.com) gallery, [restaurantscyprus.com](https://restaurantscyprus.com) editorial feature, and public Google Maps content. Replace with higher-resolution originals when the restaurant provides them.

---

## License

For Embers Kitchen Limassol. Brand assets © Embers Kitchen.
