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

// La sessione è in un cookie HttpOnly impostato dal server; il client conserva solo l'utente.
export function useAuth() {
  const user = useState<AuthUser | null>('auth.user', () => null)

  async function login(email: string, password: string) {
    const res = await $fetch<{ data: { user: AuthUser & { token?: string } } }>('/api/user/login', {
      method: 'POST', body: { email, password },
    })
    const { token: _token, ...u } = res.data.user
    user.value = u
  }

  async function fetchMe() {
    try {
      const res = await $fetch<{ data: AuthUser }>('/api/user/me')
      user.value = res.data
    }
    catch {
      user.value = null
    }
    return user.value
  }

  async function logout() {
    await $fetch('/api/user/logout', { method: 'POST' }).catch(() => {})
    user.value = null
    await navigateTo('/login')
  }

  const isAdmin = computed(() => user.value?.role === 'S' || user.value?.role === 'A')
  return { user, isAdmin, login, fetchMe, logout }
}
