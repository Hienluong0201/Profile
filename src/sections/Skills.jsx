import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import Badge from '../components/Badge'
import { motion } from 'framer-motion'
import { personal } from '../config/personal'

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <Container>
        <SectionHeader kicker="Kỹ năng" title="Công nghệ mình dùng" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <div className="flex flex-wrap gap-3">
            {personal.skills?.map((s) => <Badge key={s}>{s}</Badge>)}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
