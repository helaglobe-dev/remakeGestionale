import fs from 'node:fs/promises';
import path from 'node:path';
const base = 'https://projects.helaglobe.com/main/_nuxt/';
const out = path.resolve(process.argv[2]);
await fs.mkdir(out, { recursive: true });
const queue = [process.argv[3]], seen = new Set();
const re = /["'`(\/]((?:[A-Za-z0-9_\-]+\.)*[A-Za-z0-9_\-]{6,}\.(?:js|css))["'`)]/g;
while (queue.length) {
  const f = queue.shift(); if (seen.has(f)) continue; seen.add(f);
  const r = await fetch(base + f); if (!r.ok) { console.error('miss', f, r.status); continue; }
  const t = await r.text(); await fs.writeFile(path.join(out, f), t);
  if (f.endsWith('.js')) for (const m of t.matchAll(re)) if (!seen.has(m[1])) queue.push(m[1]);
}
console.log('files', seen.size);
