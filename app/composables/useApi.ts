// Client API: aggiunge il token, estrae `data` e traduce gli errori nel messaggio del server.
export function useApi() {
  const { token, logout } = useAuth()

  async function api<T = any>(path: string, opts: { method?: 'GET' | 'POST', body?: unknown } = {}): Promise<T> {
    try {
      const res = await $fetch<{ success: boolean, data: T }>(`/api/${path}`, {
        method: opts.method ?? (opts.body !== undefined ? 'POST' : 'GET'),
        body: opts.body as any,
        headers: token.value ? { Authorization: `Bearer ${token.value}` } : {},
      })
      return res.data
    }
    catch (e: any) {
      if (e?.statusCode === 401 || e?.response?.status === 401) await logout()
      const title = e?.data?.data?.errors?.title ?? e?.data?.errors?.title ?? e?.statusMessage ?? 'Errore di comunicazione con il server'
      throw new Error(title)
    }
  }
  return api
}
