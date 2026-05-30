import { MENU, CATEGORY_LABELS, type MenuCategory } from "@/content/menu";
import { formatPrice } from "@/lib/utils";

const categories = Object.keys(CATEGORY_LABELS) as MenuCategory[];

const TAG_LABEL: Record<string, string> = {
  vegetarian: "V",
  vegan: "VG",
  "gluten-free": "GF",
  spicy: "•",
  signature: "★",
  raw: "raw",
};

export function MenuList() {
  return (
    <div className="flex flex-col gap-24 md:gap-32">
      {categories.map((category) => {
        const dishes = MENU.filter((d) => d.category === category);
        if (dishes.length === 0) return null;
        const label = CATEGORY_LABELS[category];
        return (
          <section key={category}>
            <header className="flex items-baseline justify-between border-b border-hairline pb-6">
              <h2 className="text-display italic text-ink text-[clamp(36px,6vw,72px)]">
                {label}
              </h2>
              <span className="text-meta text-muted">
                {String(dishes.length).padStart(2, "0")} dishes
              </span>
            </header>
            <ul className="mt-8 divide-y divide-hairline">
              {dishes.map((d) => (
                <li key={d.id} className="py-6 md:py-7 grid gap-2 md:grid-cols-[1fr_auto]">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="font-[var(--font-display)] italic text-ink text-2xl md:text-[28px] leading-tight">
                        {d.name}
                      </h3>
                      {d.tags && d.tags.length > 0 && (
                        <span className="text-meta text-muted">
                          {d.tags.map((t) => TAG_LABEL[t] ?? t).join(" · ")}
                        </span>
                      )}
                    </div>
                    <p className="text-ink/80 text-[15px] leading-relaxed max-w-2xl">
                      {d.description}
                    </p>
                  </div>
                  <div className="font-[var(--font-mono)] text-sm tabular-nums text-ink md:pt-2 md:text-right">
                    {formatPrice(d.price)}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
      <div className="border-t border-hairline pt-8 text-meta text-muted">
        ★ signature · V vegetarian · VG vegan · GF gluten-free · • spicy
      </div>
    </div>
  );
}
