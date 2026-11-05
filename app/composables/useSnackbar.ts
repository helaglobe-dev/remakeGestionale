export type Snack = { show: boolean, text: string, color: 'success' | 'error' | 'info' }

export function useSnackbar() {
  const snack = useState<Snack>('snackbar', () => ({ show: false, text: '', color: 'info' }))
  return {
    snack,
    success: (text: string) => { snack.value = { show: true, text, color: 'success' } },
    error: (text: string) => { snack.value = { show: true, text, color: 'error' } },
  }
}
