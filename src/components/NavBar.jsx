import { useState } from 'react'
import Container from './Container'
import ThemeToggle from './ThemeToggle'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const links = [
  { href: '#home', label: 'Trang chủ' },
  { href: '#about', label: 'Giới thiệu' },
  { href: '#skills', label: 'Kỹ năng' },
  { href: '#projects', label: 'Dự án' },
  { href: '#contact', label: 'Liên hệ' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur">
      <div className="border-b border-neutral-200/60 bg-white/70 dark:border-neutral-800/60 dark:bg-neutral-950/40">
        <Container className="flex h-16 items-center justify-between">
          <a href="#home" className="font-extrabold tracking-tight text-neutral-900 dark:text-white">
            <span className="text-gradient">Portfolio</span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white">
                {l.label}
              </a>
            ))}
            <ThemeToggle />
          </nav>

          <button className="inline-flex items-center md:hidden" onClick={() => setOpen(true)} aria-label="Mở menu">
            <Menu className="h-6 w-6" />
          </button>
        </Container>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            className="absolute right-0 top-0 h-full w-80 overflow-y-auto border-l border-neutral-800 bg-neutral-950 p-6 text-neutral-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-center justify-between">
              <span className="font-bold">Menu</span>
              <button onClick={() => setOpen(false)} aria-label="Đóng menu">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="grid gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-3 py-2 text-neutral-300 hover:bg-white/5 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-2">
                <ThemeToggle />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </header>
  )
}
