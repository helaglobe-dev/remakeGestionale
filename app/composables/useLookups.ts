// Anagrafiche per select ed etichette, caricate una volta per pagina.
export function useLookups() {
  const api = useApi()
  const clients = ref<{ value: number, title: string }[]>([])
  const suppliers = ref<{ value: number, title: string }[]>([])
  const projects = ref<{ value: number, title: string, code: string, status: string, openstatus: string }[]>([])
  const banks = ref<{ value: number, title: string }[]>([])
  async function load(which: ('clients' | 'suppliers' | 'projects' | 'banks')[]) {
    await Promise.all(which.map(async (w) => {
      if (w === 'clients') clients.value = (await api<any[]>('client/list')).map(c => ({ value: c.id, title: c.name }))
      if (w === 'suppliers') suppliers.value = (await api<any[]>('supplier/list')).map(c => ({ value: c.id, title: c.name }))
      if (w === 'banks') banks.value = (await api<any[]>('bank/list')).map(c => ({ value: c.id, title: c.name }))
      if (w === 'projects') projects.value = (await api<any[]>('project/list')).map(p => ({ value: p.id, title: `[${p.code}] ${p.name}`, code: p.code, status: p.status, openstatus: p.openstatus }))
    }))
  }
  const name = (list: Ref<{ value: number, title: string }[]>, id: number) => list.value.find(x => x.value === id)?.title ?? ''
  return { clients, suppliers, projects, banks, load, name }
}
