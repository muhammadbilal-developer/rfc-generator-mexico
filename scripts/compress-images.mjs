import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.join(process.cwd(), "public", "images");
const SKIP = new Set(["brand/logo.webp"]);

const walk = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : full.endsWith(".webp") ? [full] : [];
  });
};

const getProfile = (rel) => {
  if (rel.endsWith("/hero.webp")) {
    return { maxWidth: 1920, quality: 90 };
  }
  if (rel.startsWith("author/") || rel.startsWith("contacto/")) {
    return { maxWidth: 1280, quality: 88 };
  }
  return { maxWidth: 1200, quality: 92 };
};

let totalBefore = 0;
let totalAfter = 0;

for (const file of walk(ROOT)) {
  const rel = path.relative(ROOT, file).replace(/\\/g, "/");
  if (SKIP.has(rel)) {
    console.log(`skip  ${rel}`);
    continue;
  }

  const before = fs.readFileSync(file);
  totalBefore += before.length;

  const { maxWidth, quality } = getProfile(rel);
  const meta = await sharp(before).metadata();
  let pipeline = sharp(before, { failOn: "none" });

  if (meta.width && meta.width > maxWidth) {
    pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
  }

  const after = await pipeline
    .webp({ quality, effort: 6, smartSubsample: true, alphaQuality: quality })
    .toBuffer();

  const shouldReplace = after.length < before.length || before.length > 500 * 1024;
  if (!shouldReplace) {
    totalAfter += before.length;
    console.log(`${rel}: ${(before.length / 1024).toFixed(1)} KB (kept — already optimized)`);
    continue;
  }

  fs.writeFileSync(file, after);
  totalAfter += after.length;

  const pct = ((1 - after.length / before.length) * 100).toFixed(1);
  console.log(
    `${rel}: ${(before.length / 1024).toFixed(1)} KB -> ${(after.length / 1024).toFixed(1)} KB (${pct}% smaller)`,
  );
}

console.log(
  `\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)} MB -> ${(totalAfter / 1024 / 1024).toFixed(2)} MB`,
);
