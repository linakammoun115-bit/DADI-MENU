import { categories, type Category } from "@/data/menu";
import { getCategoryImage } from "@/data/categoryImages";
import { ArrowRight, ImageOff, Sparkles } from "lucide-react";

export function CategoryGrid({
  onSelect,
  activeId,
}: {
  onSelect: (id: string) => void;
  activeId: string | null;
}) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
      {categories.map((cat, idx) => (
        <CategoryCard
          key={cat.id}
          cat={cat}
          active={activeId === cat.id}
          onClick={() => onSelect(cat.id)}
          delay={idx * 45}
        />
      ))}
    </div>
  );
}

function CategoryCard({
  cat,
  active,
  onClick,
  delay,
}: {
  cat: Category;
  active: boolean;
  onClick: () => void;
  delay: number;
}) {
  const img = getCategoryImage(cat.id);
  const productLabel = cat.products.length > 1 ? "produits" : "produit";

  return (
    <button
      type="button"
      onClick={onClick}
      style={{ animationDelay: `${delay}ms` }}
      className={`
        group relative aspect-[4/5] overflow-hidden rounded-[1.6rem]
        border text-left animate-fade-up transition-all duration-500
        hover:-translate-y-2 focus:outline-none
        ${
          active
            ? "border-[color:var(--gold)]/70 shadow-[0_0_45px_rgba(212,175,55,0.35)]"
            : "border-white/10 bg-white/[0.04] hover:border-[color:var(--gold)]/45 hover:shadow-[0_25px_70px_-35px_rgba(212,175,55,0.55)]"
        }
      `}
    >
      {/* Background */}
      <div className="absolute inset-0">
        {img ? (
          <img
            src={img}
            alt={cat.title}
            loading="lazy"
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[image:var(--gradient-dark)]">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[color:var(--gold)]/30 bg-black/30 text-[color:var(--gold)]">
              <ImageOff className="h-7 w-7" />
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.25),transparent_45%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Active badge */}
      {active && (
        <div className="absolute left-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-[image:var(--gradient-gold)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-black shadow-glow">
          <Sparkles className="h-3 w-3" />
          Active
        </div>
      )}

      {/* Product count */}
      <div className="absolute right-3 top-3 z-10 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[color:var(--gold-soft)] backdrop-blur-md">
        {cat.products.length} {productLabel}
      </div>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-4 md:p-5">
        <div className="mb-2 h-px w-10 bg-[image:var(--gradient-gold)] transition-all duration-500 group-hover:w-full" />

        <h3 className="font-display text-xl leading-tight text-white md:text-2xl">
          {cat.title}
        </h3>

        {cat.subtitle && (
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-white/60">
            {cat.subtitle}
          </p>
        )}

        <div className="mt-4 inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.25em] text-[color:var(--gold)] opacity-80 transition-all group-hover:translate-x-1 group-hover:opacity-100">
          Voir
          <ArrowRight className="h-3.5 w-3.5" />
        </div>
      </div>

      {/* Shine effect */}
      <div className="pointer-events-none absolute -left-32 top-0 h-full w-24 rotate-12 bg-white/20 blur-xl transition-transform duration-1000 group-hover:translate-x-[420px]" />

      {/* Inner border */}
      <div className="pointer-events-none absolute inset-2 rounded-[1.25rem] border border-white/5" />
    </button>
  );
}