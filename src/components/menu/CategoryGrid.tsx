import { categories, type Category } from "@/data/menu";
import { getCategoryImage } from "@/data/categoryImages";

export function CategoryGrid({ onSelect, activeId }: { onSelect: (id: string) => void; activeId: string | null }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {categories.map((cat, idx) => (
        <CategoryCard
          key={cat.id}
          cat={cat}
          active={activeId === cat.id}
          onClick={() => onSelect(cat.id)}
          delay={idx * 40}
        />
      ))}
    </div>
  );
}

function CategoryCard({ cat, active, onClick, delay }: { cat: Category; active: boolean; onClick: () => void; delay: number }) {
  const img = getCategoryImage(cat.id);
  return (
    <button
      onClick={onClick}
      style={{ animationDelay: `${delay}ms` }}
      className={`group relative aspect-[4/5] rounded-2xl overflow-hidden glass hover-lift text-left animate-fade-up
        ${active ? "ring-2 ring-[color:var(--gold)] shadow-glow" : ""}`}
    >
      {/* Background image or gradient */}
      <div className="absolute inset-0">
        {img ? (
          <img
            src={img}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="h-full w-full bg-[image:var(--gradient-dark)]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--onyx)] via-[color:var(--onyx)]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[color:var(--gold)]/0 group-hover:to-[color:var(--gold)]/20 transition-colors duration-500" />
      </div>

      {/* Title */}
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
        <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[color:var(--gold-soft)] mb-1.5">
          {cat.products.length} {cat.products.length > 1 ? "produits" : "produit"}
        </div>
        <h3 className="font-display text-xl md:text-2xl text-foreground leading-tight">
          {cat.title}
        </h3>
        <p className="text-xs text-muted-foreground mt-1 truncate">{cat.subtitle}</p>
        <div className="mt-3 h-px w-12 bg-[image:var(--gradient-gold)] transition-all duration-500 group-hover:w-full" />
      </div>
    </button>
  );
}
