import Badge from './Badge'
import Button from './Button'
import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="card group"
    >
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={project.image}
          alt={project.title}
          className="h-56 w-full rounded-xl object-cover transition will-change-transform group-hover:scale-[1.02]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/5 dark:ring-white/10" />
      </div>

      <div className="mt-4 space-y-3">
        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech?.map((t) => <Badge key={t}>{t}</Badge>)}
        </div>

        <div className="flex items-center gap-3 pt-2">
          {project.link && (
            <Button href={project.link} className="text-sm">
              Xem live <ExternalLink className="h-4 w-4" />
            </Button>
          )}
          {project.source && (
            <a href={project.source} className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-900">
              <Github className="h-4 w-4" /> Source
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
