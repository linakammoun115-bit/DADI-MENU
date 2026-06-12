const modules = import.meta.glob<string>(
  "../assets/categories/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const map: Record<string, string> = {};

for (const path in modules) {
  const filename = path.split("/").pop() ?? "";
  const slug = filename.replace(/\.(png|jpg|jpeg|webp)$/i, "");

  map[slug] = modules[path];
}

export function getCategoryImage(id: string): string | null {
  return map[id] ?? null;
}