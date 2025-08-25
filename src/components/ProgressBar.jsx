import { motion, useScroll } from 'framer-motion'

export default function ProgressBar() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      className="fixed left-0 top-0 z-50 h-1 w-full bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400"
      style={{ scaleX: scrollYProgress, transformOrigin: '0% 50%' }}
    />
  )
}
