/**
 * Voltix Image Compression Script
 * Compresses all portfolio images and logos to optimized WebP.
 * Run: node scripts/compress-images.mjs
 * Requires: npm install sharp (dev dependency)
 */

import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const images = [
  // Portfolio images — max 800px wide, quality 72
  {
    src: 'public/images/nourbijoux.webp',
    out: 'public/images/nourbijoux.webp',
    width: 800,
    quality: 72,
  },
  {
    src: 'public/images/dzsport.webp',
    out: 'public/images/dzsport.webp',
    width: 800,
    quality: 72,
  },
  {
    src: 'public/images/serumaraqi.webp',
    out: 'public/images/serumaraqi.webp',
    width: 800,
    quality: 72,
  },
  {
    src: 'public/images/voltixprox.webp',
    out: 'public/images/voltixprox.webp',
    width: 800,
    quality: 72,
  },
  {
    src: 'public/images/cleanxpro.webp',
    out: 'public/images/cleanxpro.webp',
    width: 800,
    quality: 72,
  },
  // Hero phone mockup image — smaller, quality 75
  {
    src: 'public/images/headphone-hero.webp',
    out: 'public/images/headphone-hero.webp',
    width: 400,
    quality: 75,
  },
];

const logos = [
  // Logos — convert PNG → WebP, small size
  {
    src: 'public/logo-icon.png',
    out: 'public/logo-icon.webp',
    width: 144,
    quality: 90,
  },
  {
    src: 'public/logo-full.png',
    out: 'public/logo-full.webp',
    width: 320,
    quality: 90,
  },
];

async function compress(item) {
  const srcPath = path.join(root, item.src);
  const outPath = path.join(root, item.out);

  if (!fs.existsSync(srcPath)) {
    console.warn(`⚠️  Skipping (not found): ${item.src}`);
    return;
  }

  const statBefore = fs.statSync(srcPath);

  // Write to a temp file first, then replace
  const tmpPath = outPath + '.tmp';

  await sharp(srcPath)
    .resize({ width: item.width, withoutEnlargement: true })
    .webp({ quality: item.quality, effort: 6 })
    .toFile(tmpPath);

  fs.renameSync(tmpPath, outPath);

  const statAfter = fs.statSync(outPath);
  const saved = ((1 - statAfter.size / statBefore.size) * 100).toFixed(1);
  const kbBefore = (statBefore.size / 1024).toFixed(0);
  const kbAfter = (statAfter.size / 1024).toFixed(0);

  console.log(`✅  ${item.src.padEnd(42)} ${kbBefore} KB → ${kbAfter} KB  (${saved}% saved)`);
}

console.log('\n🚀 Voltix Image Compressor\n');

for (const img of [...images, ...logos]) {
  await compress(img);
}

console.log('\n✨ Done! Rebuild the site: npx next build\n');
