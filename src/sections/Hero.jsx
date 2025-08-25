import { motion } from 'framer-motion'
import Container from '../components/Container'
import Button from '../components/Button'
import Avatar from '../components/Avatar'
import { Mail, MapPin, Download } from 'lucide-react'
import { personal } from '../config/personal'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-fuchsia-500/30 blur-3xl"></div>
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"></div>
      </div>

      <Container className="grid min-h-[80svh] place-items-center py-20">
        <div className="grid w-full items-center gap-10 md:grid-cols-[auto,1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="justify-self-center md:justify-self-start"
          >
            <Avatar src={personal.avatar} alt={personal.name} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="mb-2 inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
              <MapPin className="h-4 w-4" /> {personal.location}
            </p>
            <h1 className="text-balance text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
              <span className="text-gradient">{personal.name}</span>
              <span className="block text-neutral-800 dark:text-neutral-100">{personal.role}</span>
            </h1>
            <p className="mt-4 max-w-2xl text-neutral-600 dark:text-neutral-300">{personal.tagline}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button href="#projects">
                Xem dự án
              </Button>
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-900"
              >
                <Mail className="h-4 w-4" /> Liên hệ
              </a>
              <a
                href="/CV.pdf"
                download
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-900"
              >
                <Download className="h-4 w-4" /> Tải CV
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              {personal.socials?.map((s) => (
                <a key={s.name} href={s.url} className="text-sm text-neutral-600 underline-offset-4 hover:underline dark:text-neutral-300">
                  {s.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
