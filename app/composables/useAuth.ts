export type AuthUser = {
  id: number
  email: string
  firstname: string
  lastname: string
  role: 'S' | 'A' | 'U'
  acronym?: string | null
  hasprojects: number
  hasinvoice: number
  viewdashboard: number
  viewkpi: number
  viewbudget: number
  cancreatemacro: number
}

// Token in cookie (48 h) come l'originale; l'utente viene ricaricato da /api/user/me.
export function useAuth() {
  const token = useCookie<string | null>('auth.token', { maxAge: 172800, sameSite: 'lax' })
  const user = useState<AuthUser | null>('auth.user', () => null)

  async function login(email: string, password: string) {
    const res = await $fetch<{ data: { user: AuthUser & { token: string } } }>('/api/user/login', {
      method: 'POST', body: { email, password },
    })
    const { token: t, ...u } = res.data.user
    token.value = t
    user.value = u
  }

  async function fetchMe() {
    if (!token.value) return null
    try {
      const res = await $fetch<{ data: AuthUser }>('/api/user/me', { headers: { Authorization: `Bearer ${token.value}` } })
      user.value = res.data
    }
    catch {
      token.value = null
      user.value = null
    }
    return user.value
  }

  async function logout() {
    if (token.value) {
      await $fetch('/api/user/logout', { headers: { Authorization: `Bearer ${token.value}` } }).catch(() => {})
    }
    token.value = null
    user.value = null
    await navigateTo('/login')
  }

  const isAdmin = computed(() => user.value?.role === 'S' || user.value?.role === 'A')
  return { token, user, isAdmin, login, fetchMe, logout }
}
