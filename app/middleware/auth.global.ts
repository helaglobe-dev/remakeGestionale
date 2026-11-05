export default defineNuxtRouteMiddleware(async (to) => {
  const { user, token, fetchMe } = useAuth()
  if (['/login', '/lostpassword', '/resetpassword', '/confirmemailandsetpassword'].includes(to.path)) return
  if (!token.value) return navigateTo('/login')
  if (!user.value && !(await fetchMe())) return navigateTo('/login')
  // Stesse condizioni del menu: una rotta non visibile nel menu non è nemmeno raggiungibile via URL.
  const perm = routePerm(to.path)
  if (perm && !perm(user.value!)) return navigateTo(to.path === '/' ? '/projects' : '/', { replace: true })
})
