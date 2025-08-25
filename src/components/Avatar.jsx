export default function Avatar({ src = '/profile.jpg', alt = 'Avatar', size = 160 }) {
  return (
    <div className="relative">
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="h-[160px] w-[160px] rounded-2xl object-cover ring-1 ring-neutral-200 dark:ring-neutral-800"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
    </div>
  )
}
