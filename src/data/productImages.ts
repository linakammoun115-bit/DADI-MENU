const modules = import.meta.glob<string>(
  "../assets/products/*.{png,jpg,jpeg,webp,svg}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const map: Record<string, string> = {};

function normalize(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

for (const path in modules) {
  const filename = path.split("/").pop() ?? "";
  const slug = filename.replace(/\.(png|jpg|jpeg|webp|svg)$/i, "");

  map[normalize(slug)] = modules[path];
}

export function getProductImage(slug?: string): string | null {
  if (!slug) return null;
  return map[normalize(slug)] ?? null;
}