import { ref, watch, onMounted } from 'vue'

type Theme = 'light' | 'dark'

const theme = ref<Theme>('light')

export function useTheme() {
  function applyTheme(t: Theme) {
    document.documentElement.classList.toggle('dark', t === 'dark')
    theme.value = t
  }

  function toggle() {
    applyTheme(theme.value === 'light' ? 'dark' : 'light')
  }

  onMounted(() => {
    const stored = localStorage.getItem('theme') as Theme | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    applyTheme(stored ?? (prefersDark ? 'dark' : 'light'))
  })

  watch(theme, (t) => localStorage.setItem('theme', t))

  return { theme, toggle }
}
