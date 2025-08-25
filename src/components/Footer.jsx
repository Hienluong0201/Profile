import Container from './Container'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200/60 py-10 dark:border-neutral-800/60">
      <Container>
        <p className="text-center text-sm text-neutral-600 dark:text-neutral-300">
          © {new Date().getFullYear()} • Làm với React, Tailwind & Framer Motion.
        </p>
      </Container>
    </footer>
  )
}
