#!/usr/bin/env bun
// Generate one premium photo per product slug. Skips slugs that already exist.
import { existsSync, writeFileSync, mkdirSync } from "fs";
import { execSync } from "child_process";
import { categories } from "../src/data/menu";

const OUT_DIR = "src/assets/products";
const TMP_DIR = "/tmp/dadi-imgs";
mkdirSync(TMP_DIR, { recursive: true });

const API_KEY = process.env.LOVABLE_API_KEY!;
if (!API_KEY) throw new Error("LOVABLE_API_KEY missing");

const STYLE =
  "Premium overhead/45° food photography on dark slate or black marble surface, dramatic warm gold rim lighting, shallow depth of field, soft shadows, luxury café styling, vibrant natural colors, ultra detailed, editorial magazine quality, square framing.";

function promptFor(product: { name: string; description?: string }, categoryTitle: string): string {
  const desc = product.description ? ` (${product.description})` : "";
  return `A single beautifully plated serving of "${product.name}"${desc} — category: ${categoryTitle}. ${STYLE} No text, no logos, no people.`;
}

const all: { slug: string; prompt: string }[] = [];
for (const c of categories) {
  for (const p of c.products) {
    if (!p.image) continue;
    all.push({ slug: p.image, prompt: promptFor(p, c.title) });
  }
}

const todo = all.filter((x) => !existsSync(`${OUT_DIR}/${x.slug}.asset.json`));
console.log(`Total: ${all.length}, To generate: ${todo.length}`);

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function genOne(slug: string, prompt: string): Promise<void> {
  let attempt = 0;
  while (true) {
    attempt++;
    const res = await fetch("https://ai.gateway.lovable.dev/v1/images/generations", {
      method: "POST",
      headers: { Authorization: `Bearer ${API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-image",
        messages: [{ role: "user", content: prompt }],
        modalities: ["image", "text"],
      }),
    });
    if (res.status === 429 || res.status >= 500) {
      if (attempt >= 8) throw new Error(`HTTP ${res.status} after ${attempt} tries`);
      const backoff = Math.min(60000, 2000 * 2 ** (attempt - 1)) + Math.random() * 1000;
      await sleep(backoff);
      continue;
    }
    if (!res.ok) {
      const txt = await res.text().catch(() => "");
      throw new Error(`HTTP ${res.status}: ${txt.slice(0, 200)}`);
    }
    const json = (await res.json()) as { data?: { b64_json?: string }[] };
    const b64 = json?.data?.[0]?.b64_json;
    if (!b64) throw new Error("no b64_json");
    const tmp = `${TMP_DIR}/${slug}.png`;
    writeFileSync(tmp, Buffer.from(b64, "base64"));
    execSync(
      `lovable-assets create --file ${tmp} --filename ${slug}.png > ${OUT_DIR}/${slug}.asset.json`,
      { stdio: "pipe" },
    );
    return;
  }
}

const CONCURRENCY = 2;
let idx = 0;
let done = 0;
let failed = 0;

async function worker() {
  while (idx < todo.length) {
    const i = idx++;
    const { slug, prompt } = todo[i];
    try {
      await genOne(slug, prompt);
      done++;
      console.log(`[${done + failed}/${todo.length}] ✓ ${slug}`);
    } catch (e) {
      failed++;
      console.log(`[${done + failed}/${todo.length}] ✗ ${slug}: ${(e as Error).message}`);
    }
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, worker));
console.log(`Done. ✓${done} ✗${failed}`);
