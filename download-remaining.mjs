import fs from 'fs/promises';
import path from 'path';

const GENERATED_DIR = path.join(process.cwd(), 'public', 'generated');

// All images still needed — using simpler/broader tags to avoid 500s
const IMAGES_TO_DOWNLOAD = [
  // Services page (101 already done)
  { file: 'img-car-interior-400x400-102.jpg', url: 'https://loremflickr.com/400/400/car,interior', fallback: 'https://loremflickr.com/400/400/automobile,seat' },
  { file: 'img-car-polish-400x400-103.jpg', url: 'https://loremflickr.com/400/400/car,polish', fallback: 'https://loremflickr.com/400/400/automobile,shiny' },
  { file: 'img-car-paint-800x450-104.jpg', url: 'https://loremflickr.com/800/450/car,paint', fallback: 'https://loremflickr.com/800/450/automobile,colour' },
  { file: 'img-car-bodywork-400x400-105.jpg', url: 'https://loremflickr.com/400/400/car,repair', fallback: 'https://loremflickr.com/400/400/automobile,workshop' },
  { file: 'img-car-spraypaint-400x400-106.jpg', url: 'https://loremflickr.com/400/400/car,spray', fallback: 'https://loremflickr.com/400/400/workshop,paint' },
  { file: 'img-car-custom-800x450-107.jpg', url: 'https://loremflickr.com/800/450/car,custom', fallback: 'https://loremflickr.com/800/450/automobile,modified' },
  { file: 'img-car-vinylwrap-400x400-108.jpg', url: 'https://loremflickr.com/400/400/car,vinyl', fallback: 'https://loremflickr.com/400/400/automobile,wrap' },
  { file: 'img-car-engine-400x400-109.jpg', url: 'https://loremflickr.com/400/400/car,engine', fallback: 'https://loremflickr.com/400/400/automobile,motor' },
  // Gallery page
  { file: 'img-car-dirty-800x600-201.jpg', url: 'https://loremflickr.com/800/600/car,muddy', fallback: 'https://loremflickr.com/800/600/automobile,dirty' },
  { file: 'img-carwash-clean-800x600-202.jpg', url: 'https://loremflickr.com/800/600/car,clean', fallback: 'https://loremflickr.com/800/600/automobile,clean' },
  { file: 'img-car-dent-800x600-203.jpg', url: 'https://loremflickr.com/800/600/car,dent', fallback: 'https://loremflickr.com/800/600/automobile,scratch' },
  { file: 'img-car-bodywork-800x600-204.jpg', url: 'https://loremflickr.com/800/600/car,bodywork', fallback: 'https://loremflickr.com/800/600/automobile,repair' },
  { file: 'img-car-plain-800x600-205.jpg', url: 'https://loremflickr.com/800/600/car,plain', fallback: 'https://loremflickr.com/800/600/automobile,classic' },
  { file: 'img-car-vinylwrap-800x600-206.jpg', url: 'https://loremflickr.com/800/600/car,vinyl', fallback: 'https://loremflickr.com/800/600/automobile,wrap' },
  { file: 'img-car-rust-800x600-207.jpg', url: 'https://loremflickr.com/800/600/car,rust', fallback: 'https://loremflickr.com/800/600/automobile,old' },
  { file: 'img-car-paint-800x600-208.jpg', url: 'https://loremflickr.com/800/600/car,paint', fallback: 'https://loremflickr.com/800/600/automobile,colour' },
  { file: 'img-car-interior-dirty-800x600-209.jpg', url: 'https://loremflickr.com/800/600/car,seat', fallback: 'https://loremflickr.com/800/600/automobile,seat' },
  { file: 'img-car-interior-800x600-210.jpg', url: 'https://loremflickr.com/800/600/car,interior', fallback: 'https://loremflickr.com/800/600/automobile,interior' },
  { file: 'img-wheel-rusty-800x600-211.jpg', url: 'https://loremflickr.com/800/600/wheel,alloy', fallback: 'https://loremflickr.com/800/600/tyre,wheel' },
  { file: 'img-wheel-alloy-800x600-212.jpg', url: 'https://loremflickr.com/800/600/alloy,wheel', fallback: 'https://loremflickr.com/800/600/wheel,car' },
  // Products
  { file: 'img-car-detailing-600x600-301.jpg', url: 'https://loremflickr.com/600/600/car,detailing', fallback: 'https://loremflickr.com/600/600/automobile,clean' },
  { file: 'img-carwash-600x600-302.jpg', url: 'https://loremflickr.com/600/600/carwash,foam', fallback: 'https://loremflickr.com/600/600/car,wash' },
  { file: 'img-car-dent-600x600-303.jpg', url: 'https://loremflickr.com/600/600/car,dent', fallback: 'https://loremflickr.com/600/600/automobile,repair' },
  { file: 'img-wheel-alloy-600x600-304.jpg', url: 'https://loremflickr.com/600/600/alloy,wheel', fallback: 'https://loremflickr.com/600/600/wheel,car' },
  { file: 'img-car-vinylwrap-600x600-305.jpg', url: 'https://loremflickr.com/600/600/car,vinyl', fallback: 'https://loremflickr.com/600/600/automobile,wrap' },
  { file: 'img-motoroil-600x600-306.jpg', url: 'https://loremflickr.com/600/600/engine,oil', fallback: 'https://loremflickr.com/600/600/motor,oil' },
  { file: 'img-brakes-car-600x600-307.jpg', url: 'https://loremflickr.com/600/600/car,brake', fallback: 'https://loremflickr.com/600/600/brake,disc' },
  { file: 'img-carbattery-600x600-308.jpg', url: 'https://loremflickr.com/600/600/car,battery', fallback: 'https://loremflickr.com/600/600/automobile,battery' },
];

async function download(url, destPath) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 2000) throw new Error(`Response too small (${buf.length} bytes) — likely an error page`);
  await fs.writeFile(destPath, buf);
  return buf.length;
}

async function main() {
  await fs.mkdir(GENERATED_DIR, { recursive: true });

  for (const img of IMAGES_TO_DOWNLOAD) {
    const dest = path.join(GENERATED_DIR, img.file);

    // Skip if already downloaded and large enough
    try {
      const stat = await fs.stat(dest);
      if (stat.size > 5000) {
        console.log(`✓ Already exists: ${img.file} (${stat.size} bytes)`);
        continue;
      }
    } catch {}

    let success = false;
    for (const url of [img.url, img.fallback]) {
      for (let attempt = 1; attempt <= 2; attempt++) {
        try {
          const size = await download(url, dest);
          console.log(`✓ Downloaded: ${img.file} (${size} bytes) from ${url}`);
          success = true;
          break;
        } catch (e) {
          console.warn(`  Attempt ${attempt} failed for ${url}: ${e.message}`);
          await new Promise(r => setTimeout(r, 1500));
        }
      }
      if (success) break;
    }

    if (!success) {
      console.error(`✗ FAILED: ${img.file}`);
    }
    await new Promise(r => setTimeout(r, 800));
  }

  console.log('\nDone downloading images.');
}

main().catch(console.error);
