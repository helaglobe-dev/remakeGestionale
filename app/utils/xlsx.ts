// Export Excel comune: intestazioni in grassetto, date come date, importi in euro.
export type XlsxCol = { header: string, key: string, width?: number, type?: 'date' | 'eur' }
export async function exportXlsx(filename: string, sheet: string, cols: XlsxCol[], rows: Record<string, any>[], opts?: { subRow?: (r: Record<string, any>) => Record<string, any>[] }) {
  const { default: ExcelJS } = await import('exceljs')
  const wb = new ExcelJS.Workbook()
  const ws = wb.addWorksheet(sheet.slice(0, 31))
  ws.columns = cols.map(c => ({ header: c.header, key: c.key, width: c.width ?? Math.max(12, c.header.length + 4),
    style: c.type === 'eur' ? { numFmt: '#,##0.00 "€"' } : c.type === 'date' ? { numFmt: 'dd/mm/yyyy' } : {} }))
  ws.getRow(1).font = { bold: true }
  const conv = (r: Record<string, any>) => Object.fromEntries(cols.map(c => [c.key,
    c.type === 'date' ? (r[c.key] ? new Date(`${r[c.key]}T12:00:00`) : null) : r[c.key]]))
  for (const r of rows) {
    ws.addRow(conv(r))
    for (const sr of opts?.subRow?.(r) ?? []) {
      const row = ws.addRow(conv(sr))
      row.font = { italic: true, color: { argb: 'FF666666' } }
      row.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF2F2F2' } }
    }
  }
  const a = Object.assign(document.createElement('a'), {
    href: URL.createObjectURL(new Blob([await wb.xlsx.writeBuffer()], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })),
    download: filename,
  })
  a.click()
  URL.revokeObjectURL(a.href)
}
