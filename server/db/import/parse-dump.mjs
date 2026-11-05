// Converte un dump MySQL (mysqldump) in un file JSON per tabella: { columns, rows: [[...]] }.
// Uso: node server/db/import/parse-dump.mjs <dump.sql> <cartella-output>
// Non stampa dati: solo nomi di tabella e conteggi.
import fs from 'node:fs'
import path from 'node:path'

const [file, outDir] = process.argv.slice(2)
if (!file || !outDir) { console.error('uso: parse-dump.mjs <dump.sql> <outdir>'); process.exit(1) }
const sql = fs.readFileSync(file, 'utf8')
fs.mkdirSync(outDir, { recursive: true })

const columns = {}
for (const m of sql.matchAll(/CREATE TABLE `([^`]+)` \(([\s\S]*?)\n\) ENGINE/g)) {
  columns[m[1]] = [...m[2].matchAll(/^\s+`([^`]+)` /gm)].map(c => c[1])
}

/** Legge i valori di un INSERT esteso: (..),(..); gestisce stringhe con escape MySQL, NULL, numeri, _binary. */
function parseValues(s, start) {
  const rows = []
  let i = start, row = null
  const ESC = { 0: '\0', b: '\b', n: '\n', r: '\r', t: '\t', Z: '\x1a', '\\': '\\', "'": "'", '"': '"', '%': '%', '_': '_' }
  while (i < s.length) {
    const c = s[i]
    if (c === '(') { row = []; i++; continue }
    if (c === ')') { rows.push(row); row = null; i++; continue }
    if (c === ',' || c === ' ' || c === '\n' || c === '\r') { i++; continue }
    if (c === ';' && !row) return { rows, end: i + 1 }
    if (c === "'") {
      let out = ''
      i++
      while (i < s.length) {
        const ch = s[i]
        if (ch === '\\') { out += ESC[s[i + 1]] ?? s[i + 1]; i += 2; continue }
        if (ch === "'") { if (s[i + 1] === "'") { out += "'"; i += 2; continue } i++; break }
        out += ch; i++
      }
      row.push(out); continue
    }
    // token non quotato: NULL, numero, _binary 'x', 0x..
    let j = i
    while (j < s.length && !',)'.includes(s[j])) j++
    const tok = s.slice(i, j).trim()
    row.push(tok === 'NULL' ? null : /^-?\d+(\.\d+)?(e[+-]?\d+)?$/i.test(tok) ? Number(tok) : tok)
    i = j
  }
  return { rows, end: i }
}

const data = {}
const re = /^INSERT INTO `([^`]+)` (?:\(([^)]*)\) )?VALUES /gm
let m
while ((m = re.exec(sql))) {
  const table = m[1]
  const cols = m[2] ? m[2].split(',').map(x => x.trim().replace(/`/g, '')) : columns[table]
  const { rows, end } = parseValues(sql, re.lastIndex)
  re.lastIndex = end
  data[table] ??= { columns: cols, rows: [] }
  for (const r of rows) {
    if (r.length !== cols.length) throw new Error(`${table}: riga con ${r.length} valori invece di ${cols.length}`)
    data[table].rows.push(r)
  }
}
for (const t of Object.keys(columns)) data[t] ??= { columns: columns[t], rows: [] }
for (const [t, d] of Object.entries(data)) fs.writeFileSync(path.join(outDir, `${t}.json`), JSON.stringify(d))
console.log(Object.entries(data).map(([t, d]) => `${t}:${d.rows.length}`).join(' '))
