import type { Product } from "@/data/menu";
import { getProductImage } from "@/data/productImages";
import { ImageOff, Sparkles } from "lucide-react";

type ProductCardProps = {
  product: Product;
  index: number;
  badge?: string;
};

export function ProductCard({ product, index, badge }: ProductCardProps) {
  const img = product.image ? getProductImage(product.image) : null;
  const isDadi = /dadi/i.test(product.name);
  const description =
    product.description?.trim() || getAutoDescription(product.name, badge);

  return (
    <article
      className="group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.045] backdrop-blur-2xl shadow-[0_22px_70px_-38px_rgba(0,0,0,0.9)] animate-fade-up transition-all duration-500 hover:-translate-y-2 hover:border-[color:var(--gold)]/55 hover:bg-white/[0.07] hover:shadow-[0_32px_90px_-30px_rgba(212,175,55,0.5)]"
      style={{ animationDelay: `${Math.min(index * 35, 450)}ms` }}
    >
      {/* Glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[color:var(--gold)]/20 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-white/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[image:var(--gradient-dark)]">
        {img ? (
          <img
            src={img}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.18),rgba(0,0,0,0.2)_45%,transparent_80%)]">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[color:var(--gold)]/30 bg-black/30 text-[color:var(--gold)] shadow-glow">
              <ImageOff className="h-8 w-8" />
            </div>
            <span className="mt-3 text-[10px] uppercase tracking-[0.28em] text-[color:var(--gold)]/70">
              Image bientôt
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

        {/* Top badges */}
        <div className="absolute left-3 right-3 top-3 z-10 flex items-start justify-between gap-2">
          {badge && (
            <span className="rounded-full border border-[color:var(--gold)]/30 bg-black/60 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[color:var(--gold-soft)] backdrop-blur-md">
              {badge}
            </span>
          )}

          {isDadi && (
            <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-[image:var(--gradient-gold)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-black shadow-glow">
              <Sparkles className="h-3 w-3" />
              Signature
            </span>
          )}
        </div>

        {/* Shine */}
        <div className="pointer-events-none absolute -left-40 top-0 h-full w-28 rotate-12 bg-white/25 blur-xl transition-transform duration-1000 group-hover:translate-x-[480px]" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-[185px] flex-col p-4 md:p-5">
        <h4 className="font-display text-xl leading-snug text-foreground transition-colors group-hover:text-[color:var(--gold-soft)]">
          {product.name}
        </h4>

        {description && (
          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}

        <div className="mt-auto pt-5">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/25 px-3 py-2.5 backdrop-blur-md transition-all group-hover:border-[color:var(--gold)]/30">
            <span className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground/70">
              Prix
            </span>

            <span className="rounded-full bg-[color:var(--gold)]/10 px-4 py-1 font-display text-xl font-semibold text-gold-gradient">
              {product.price}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

function getAutoDescription(name: string, badge?: string): string {
  const n = normalize(name);
  const b = normalize(badge ?? "");

  if (n.includes("dadi") && hasAny(b, ["crepe", "gaufre", "pancake"])) {
    return "Recette signature DADI avec chocolat, fruits secs, fruits de saison et boule de glace.";
  }

  if (n.includes("dadi") && hasAny(b, ["omelette", "panini", "salee", "sale"])) {
    return "Création salée signature avec thon, fromage, salami et jambon.";
  }

  if (n.includes("nutella") && n.includes("oreo")) {
    return "Nutella fondant, éclats d’Oreo et finition gourmande.";
  }

  if (n.includes("nutella") && n.includes("speculoos")) {
    return "Nutella généreux avec éclats croustillants de Spéculoos.";
  }

  if (n.includes("fruits secs")) {
    return "Garniture gourmande aux fruits secs, généreuse et croquante.";
  }

  if (n.includes("fruits de saison")) {
    return "Une touche fraîche et fruitée selon la saison.";
  }

  if (hasAny(n, ["thon", "salami", "jambon"])) {
    return "Préparation salée chaude avec fromage fondant.";
  }

  if (n.includes("mojito")) {
    return "Menthe fraîche, citron, glace pilée et fraîcheur intense.";
  }

  if (hasAny(n, ["milkshake", "milk"])) {
    return "Milkshake frais, crémeux et ultra gourmand.";
  }

  if (n.includes("frappuccino") || b.includes("frappuccino")) {
    return "Boisson glacée crémeuse, parfaite pour une pause fraîcheur.";
  }

  if (b.includes("jus")) {
    return "Jus frais préparé à la minute.";
  }

  if (hasAny(b, ["cafe", "coffee"])) {
    return "Café préparé avec soin, arôme riche et service premium.";
  }

  if (b.includes("the")) {
    return "Thé parfumé servi dans l’esprit chaleureux de DADI.";
  }

  return "Produit préparé avec soin dans l’esprit premium DADI.";
}

function normalize(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .trim();
}

function hasAny(value: string, words: string[]): boolean {
  return words.some((word) => value.includes(word));
}