import type { Product } from "@/data/menu";
import { getProductImage } from "@/data/productImages";

type ProductCardProps = {
  product: Product;
  index: number;
  badge?: string;
};

export function ProductCard({ product, index, badge }: ProductCardProps) {
  const img = product.image ? getProductImage(product.image) : null;
  console.log(product.name, product.image, img);
  const isDadi = /dadi/i.test(product.name);
  const description = product.description ?? getAutoDescription(product.name, badge);

  return (
    <article
      className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_18px_60px_-35px_rgba(0,0,0,0.8)] animate-fade-up transition-all duration-500 hover:-translate-y-2 hover:border-[color:var(--gold)]/50 hover:shadow-[0_28px_80px_-25px_rgba(212,175,55,0.45)]"
      style={{ animationDelay: `${Math.min(index * 35, 450)}ms` }}
    >
      {/* Premium background glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[color:var(--gold)]/20 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-[radial-gradient(circle_at_30%_10%,rgba(212,175,55,0.16),transparent_35%)]" />

      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[image:var(--gradient-dark)]">
        {img ? (
  <img
    src={img}
    alt={product.name}
    loading="lazy"
    className="h-full w-full object-cover transition duration-700 group-hover:scale-110 group-hover:brightness-110"
  />
) : (
  <div className="absolute inset-0 flex items-center justify-center">
    <span className="text-4xl text-[color:var(--gold)]">✦</span>
  </div>
)}

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        {/* Badges */}
        <div className="absolute left-3 right-3 top-3 z-10 flex items-start justify-between gap-2">
          {badge && (
            <span className="rounded-full border border-[color:var(--gold)]/30 bg-black/55 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-[color:var(--gold-soft)] backdrop-blur-md">
              {badge}
            </span>
          )}

          {isDadi && (
            <span className="ml-auto rounded-full bg-[image:var(--gradient-gold)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-black shadow-glow">
              Signature
            </span>
          )}
        </div>

        {/* Shine effect */}
        <div className="pointer-events-none absolute -left-32 top-0 h-full w-24 rotate-12 bg-white/20 blur-xl transition-transform duration-1000 group-hover:translate-x-[420px]" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-[170px] flex-col p-4 md:p-5">
        <div className="mb-2 flex items-start justify-between gap-3">
          <h4 className="font-display text-xl leading-snug text-foreground">
            {product.name}
          </h4>
        </div>

        {description && (
          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}

        <div className="mt-auto pt-5">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-3 py-2 backdrop-blur-md">
            <span className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground/70">
              Prix
            </span>

            <span className="font-display text-xl font-semibold text-gold-gradient">
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
    return "Recette signature DADI avec chocolat, fruits secs, fruits de saison et glace.";
  }

  if (n.includes("dadi") && hasAny(b, ["omelette", "panini", "salee", "sale"])) {
    return "Création salée signature avec thon, fromage, salami et jambon.";
  }

  if (n.includes("nutella") && n.includes("oreo")) {
    return "Nutella fondant, éclats d’Oreo et finition gourmande.";
  }

  if (n.includes("nutella") && n.includes("speculoos")) {
    return "Nutella généreux avec touche croustillante de Spéculoos.";
  }

  if (n.includes("fruits secs")) {
    return "Une touche croquante et généreuse aux fruits secs.";
  }

  if (n.includes("fruits de saison")) {
    return "Fraîcheur fruitée selon la saison.";
  }

  if (hasAny(n, ["thon", "salami", "jambon"])) {
    return "Recette salée chaude avec fromage fondant.";
  }

  if (n.includes("mojito")) {
    return "Menthe fraîche, citron, glace pilée et fraîcheur intense.";
  }

  if (hasAny(n, ["milkshake", "milk"]) || b.includes("milk")) {
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
    .replace(/\p{Diacritic}/gu, "");
}

function hasAny(value: string, words: string[]): boolean {
  return words.some((word) => value.includes(word));
}