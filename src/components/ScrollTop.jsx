import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  if (!show) return null
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 rounded-full bg-neutral-900 p-3 text-white shadow-lg transition hover:scale-105 dark:bg-white dark:text-neutral-900"
      aria-label="Lên đầu trang"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}
