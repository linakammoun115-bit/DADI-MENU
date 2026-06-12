import { useState, useMemo, useEffect } from "react";
import { categories } from "@/data/menu";
import { CategoryGrid } from "./CategoryGrid";
import { CategorySection } from "./CategorySection";
import { Search, Sparkles, X, Flame, Star } from "lucide-react";

export function MenuSection() {
  const [activeId, setActiveId] = useState<string | null>(
    categories[0]?.id ?? null
  );
  const [query, setQuery] = useState("");

  const totalProducts = categories.reduce(
    (sum, c) => sum + c.products.length,
    0
  );

  const matchingCategoryIds = useMemo(() => {
    const q = normalize(query);
    if (!q) return null;

    return categories
      .filter((c) => {
        const title = normalize(c.title);

        return (
          title.includes(q) ||
          c.products.some((p) => {
            const name = normalize(p.name);
            const description = normalize(p.description ?? "");

            return name.includes(q) || description.includes(q);
          })
        );
      })
      .map((c) => c.id);
  }, [query]);

  useEffect(() => {
    if (
      matchingCategoryIds &&
      matchingCategoryIds.length > 0 &&
      !matchingCategoryIds.includes(activeId ?? "")
    ) {
      setActiveId(matchingCategoryIds[0]);
    }
  }, [matchingCategoryIds, activeId]);

  const handleSelect = (id: string) => {
    setActiveId((prev) => (prev === id ? null : id));

    setTimeout(() => {
      document
        .getElementById("active-category")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const clearSearch = () => {
    setQuery("");
    setActiveId(categories[0]?.id ?? null);
  };

  const visibleCategories = matchingCategoryIds
    ? categories.filter((c) => matchingCategoryIds.includes(c.id))
    : categories;

  const activeCategory =
    visibleCategories.find((c) => c.id === activeId) ?? visibleCategories[0];

  return (
    <section
      id="menu"
      className="relative isolate mx-auto max-w-7xl overflow-hidden px-4 py-24 md:py-32"
    >
      {/* Luxury background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[color:var(--gold)]/15 blur-[90px]" />
        <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-[430px] w-[430px] rounded-full bg-yellow-300/10 blur-3xl" />

        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:46px_46px]" />
      </div>

      {/* Header */}
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/25 bg-white/[0.05] px-5 py-2 text-xs uppercase tracking-[0.35em] text-[color:var(--gold-soft)] backdrop-blur-xl shadow-glow">
          <Sparkles className="h-4 w-4 text-[color:var(--gold)]" />
          Notre Carte Premium
        </div>

        <h2 className="font-display text-4xl italic leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
          Des saveurs qui{" "}
          <span className="text-gold-gradient">donnent envie</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Explorez nos cafés, thés, crêpes, gaufres, jus frais et créations
          signature dans une carte moderne, claire et gourmande.
        </p>

        {/* Premium stats */}
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <InfoPill label="Catégories" value={`${categories.length}+`} />
          <InfoPill label="Produits" value={`${totalProducts}+`} />
          <InfoPill label="Style" value="Premium" />
        </div>
      </div>

      {/* Search */}
      <div className="mx-auto mb-10 max-w-2xl">
        <div className="group relative">
          <div className="absolute -inset-1 rounded-full bg-[image:var(--gradient-gold)] opacity-20 blur-xl transition-opacity duration-500 group-focus-within:opacity-50" />

          <Search className="absolute left-5 top-1/2 z-10 h-5 w-5 -translate-y-1/2 text-[color:var(--gold)]" />

          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher : crêpe, mojito, cappuccino, DADI..."
            className="relative w-full rounded-full border border-white/10 bg-white/[0.06] py-5 pl-14 pr-14 text-foreground shadow-[0_20px_60px_-30px_rgba(212,175,55,0.6)] backdrop-blur-xl outline-none transition-all placeholder:text-muted-foreground focus:border-[color:var(--gold)]/50 focus:ring-2 focus:ring-[color:var(--gold)]/40"
          />

          {query && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-5 top-1/2 z-10 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-white/10 hover:text-[color:var(--gold)]"
              aria-label="Effacer la recherche"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {query && (
          <div className="mt-4 text-center text-sm text-muted-foreground">
            {visibleCategories.length > 0 ? (
              <span>
                <span className="text-[color:var(--gold)]">
                  {visibleCategories.length}
                </span>{" "}
                catégorie(s) trouvée(s) pour “{query}”
              </span>
            ) : (
              <span>
                Aucun résultat pour “{query}”
              </span>
            )}
          </div>
        )}
      </div>

      {/* Category grid container */}
      <div className="mb-12 rounded-[2rem] border border-white/10 bg-white/[0.035] p-3 backdrop-blur-xl md:p-5">
        <div className="mb-5 flex flex-col justify-between gap-3 px-2 md:flex-row md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--gold)]">
              Choisissez une catégorie
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Touchez une catégorie pour afficher ses produits.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--gold)]/25 bg-black/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <Flame className="h-4 w-4 text-[color:var(--gold)]" />
            Fresh menu
          </div>
        </div>

        <CategoryGrid onSelect={handleSelect} activeId={activeId} />
      </div>

      {/* Active category badge */}
      {activeCategory && (
        <div className="mb-8 text-center animate-fade-up">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-[color:var(--gold)]/25 bg-white/[0.05] px-6 py-3 backdrop-blur-xl">
            <Star className="h-4 w-4 fill-[color:var(--gold)] text-[color:var(--gold)]" />
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Catégorie active
            </span>
            <span className="font-medium text-[color:var(--gold)]">
              {activeCategory.title}
            </span>
          </div>
        </div>
      )}

      {/* Products */}
      <div id="active-category" className="scroll-mt-24">
        {visibleCategories.length === 0 ? (
          <div className="mx-auto max-w-xl rounded-[2rem] border border-[color:var(--gold)]/20 bg-white/[0.05] p-10 text-center backdrop-blur-xl">
            <div className="mb-4 text-5xl">🔎</div>
            <h3 className="mb-3 font-display text-3xl text-gold-gradient">
              Aucun produit trouvé
            </h3>
            <p className="text-muted-foreground">
              Essayez un autre mot-clé comme café, crêpe, mojito, DADI ou
              Nutella.
            </p>

            <button
              onClick={clearSearch}
              className="mt-6 rounded-full bg-[image:var(--gradient-gold)] px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black shadow-glow transition-all hover:scale-105"
            >
              Réinitialiser
            </button>
          </div>
        ) : activeCategory ? (
          <CategorySection
            key={activeCategory.id}
            cat={activeCategory}
            open={true}
            onClose={() => setActiveId(null)}
            query={query}
          />
        ) : null}
      </div>
    </section>
  );
}

function InfoPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.045] px-5 py-4 backdrop-blur-xl">
      <p className="font-display text-2xl text-gold-gradient">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
        {label}
      </p>
    </div>
  );
}

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .trim();
}