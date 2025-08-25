export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-neutral-200/70 bg-white/70 px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm backdrop-blur dark:border-neutral-800/70 dark:bg-neutral-900/60 dark:text-neutral-200">
      {children}
    </span>
  )
}
