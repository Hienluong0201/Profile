export default function SectionHeader({ kicker, title, subtitle }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {kicker && <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">{kicker}</div>}
      {title && <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>}
      {subtitle && <p className="mt-3 text-neutral-600 dark:text-neutral-300">{subtitle}</p>}
    </div>
  )
}
