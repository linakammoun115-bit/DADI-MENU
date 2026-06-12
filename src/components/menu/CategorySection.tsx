import type { Category, Product } from "@/data/menu";
import { ProductCard } from "./ProductCard";

export function CategorySection({
  cat,
  open,
  onClose,
  query,
}: {
  cat: Category;
  open: boolean;
  onClose: () => void;
  query: string;
}) {
  if (!open) return null;
  const q = query.trim().toLowerCase();
  const products = q
    ? cat.products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q),
      )
    : cat.products;

  // Group by section if any product has one
  const hasSections = products.some((p) => p.section);
  const groups: { name: string | null; items: Product[] }[] = [];
  if (hasSections) {
    const order = cat.sectionOrder ?? [];
    const map = new Map<string, Product[]>();
    for (const p of products) {
      const key = p.section ?? "Autres";
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(p);
    }
    const ordered = [
      ...order.filter((s) => map.has(s)),
      ...[...map.keys()].filter((s) => !order.includes(s)),
    ];
    for (const name of ordered) groups.push({ name, items: map.get(name)! });
  } else {
    groups.push({ name: null, items: products });
  }

  return (
    <section className="animate-fade-up mt-10">
      <div className="relative rounded-3xl overflow-hidden glass-strong p-6 md:p-10">
        <div
          aria-hidden
          className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-[color:var(--gold)]/20 blur-3xl"
        />
        <div className="relative flex items-start justify-between gap-4 mb-8 flex-wrap">
          <div>
            <div className="text-[11px] uppercase tracking-[0.4em] text-[color:var(--gold-soft)] mb-2">
              Catégorie
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-foreground italic">              <span className="text-gold-gradient">{cat.title}</span>
            </h2>
            <p className="text-muted-foreground mt-2">{cat.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Fermer la catégorie"
            className="h-10 w-10 rounded-full glass border border-[color:var(--gold)]/30 hover:bg-[color:var(--gold)]/15 transition-colors text-[color:var(--gold)] text-lg leading-none"
          >
            ✕
          </button>
        </div>

        {products.length === 0 ? (
          <div className="py-16 text-center text-muted-foreground">
            Aucun produit ne correspond à « {query} »
          </div>
        ) : (
          <div className="space-y-12">
            {groups.map((g) => (
              <div key={g.name ?? "_"}>
                {g.name && (
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[color:var(--gold)]/40 to-transparent" />
                    <h3 className="font-display text-xl md:text-2xl text-gold-gradient italic whitespace-nowrap">
                      {g.name}
                    </h3>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[color:var(--gold)]/40 to-transparent" />
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
                  {g.items.map((p, i) => (
                    <ProductCard
                      key={p.name}
                      product={p}
                      index={i}
                      badge={g.name ?? cat.title}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
