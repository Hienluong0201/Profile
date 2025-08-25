import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const initial = saved ? saved === 'dark' : prefers
    setDark(initial)
    document.documentElement.classList.toggle('dark', initial)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <button
      onClick={() => setDark(!dark)}
      className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white p-2 text-neutral-700 shadow hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
      aria-label="Chuyển theme"
      title="Chuyển theme"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}
