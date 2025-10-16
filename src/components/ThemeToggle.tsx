import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  try {
    // 1) 저장된 값 우선
    const saved = localStorage.getItem('theme')
    if (saved === 'dark' || saved === 'light') return saved as Theme
    // 2) 시스템 선호
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  } catch (e) {
    // 안전하게 기본값 반환 (예: SSR 또는 접근 에러)
    return 'light'
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme())

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    try { localStorage.setItem('theme', theme) } catch {}
  }, [theme])

  return (
    <button
      onClick={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))}
      className="rounded-xl border px-3 py-1 text-sm"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      {theme === 'dark' ? 'Dark' : 'Light'}
    </button>
  )
}
