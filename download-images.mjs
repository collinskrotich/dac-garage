import fs from 'fs/promises';
import path from 'path';

const SRC_DIRS = ['app', 'lib', 'components'];

async function processDirectory(dir) {
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await processDirectory(fullPath);
      } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
        await processFile(fullPath);
      }
    }
  } catch (err) {
    if (err.code !== 'ENOENT') {
      console.error(`Error reading directory ${dir}:`, err);
    }
  }
}

async function processFile(filePath) {
  let content = await fs.readFile(filePath, 'utf8');
  // Match `placeholderImage(["tag1", "tag2"], width, height, lock)`
  const regex = /placeholderImage\(\s*\[([^\]]+)\]\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/g;
  
  let match;
  let modified = false;
  let newContent = content;

  // We need to match iteratively
  const matches = [...content.matchAll(regex)];

  for (const match of matches) {
    const fullMatch = match[0];
    const tagsRaw = match[1];
    const width = match[2];
    const height = match[3];
    const lock = match[4];

    // parse tags
    const tags = tagsRaw.split(',').map(t => t.trim().replace(/['"]/g, ''));
    const tagsUrl = tags.map(encodeURIComponent).join(',');
    const url = `https://loremflickr.com/${width}/${height}/${tagsUrl}?lock=${lock}`;

    const filename = `img-${tags.join('-')}-${width}x${height}-${lock}.jpg`;
    const localPath = path.join(process.cwd(), 'public', 'generated', filename);

    // download if not exists
    try {
      await fs.access(localPath);
    } catch {
      console.log(`Downloading ${url} to ${filename}...`);
      let success = false;
      let retries = 3;
      while (retries > 0 && !success) {
        try {
          const res = await fetch(url);
          if (!res.ok) throw new Error(`Failed to fetch ${url} - Status ${res.status}`);
          const buffer = Buffer.from(await res.arrayBuffer());
          await fs.mkdir(path.dirname(localPath), { recursive: true });
          await fs.writeFile(localPath, buffer);
          success = true;
        } catch (e) {
          console.error(`Attempt failed for ${url}: ${e.message}`);
          retries--;
          if (retries > 0) {
            console.log(`Retrying... (${retries} left)`);
            await new Promise(r => setTimeout(r, 2000));
          } else {
            throw e;
          }
        }
      }
      await new Promise(r => setTimeout(r, 1000));
    }

    // replace in content
    newContent = newContent.replace(fullMatch, `"/generated/${filename}"`);
    modified = true;
  }

  if (modified) {
    // remove import if we replaced all
    newContent = newContent.replace(/import\s+\{\s*placeholderImage\s*\}\s+from\s+['"]@\/lib\/placeholder-image['"];?\r?\n?/g, '');
    await fs.writeFile(filePath, newContent, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

async function main() {
  console.log("Starting image replacement...");
  for (const dir of SRC_DIRS) {
    await processDirectory(path.join(process.cwd(), dir));
  }
  console.log("Done.");
}

main().catch(console.error);
