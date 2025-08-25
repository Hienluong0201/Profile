import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import { motion } from 'framer-motion'
import { personal } from '../config/personal'

export default function About() {
  return (
    <section id="about" className="py-20">
      <Container>
        <SectionHeader
          kicker="Giới thiệu"
          title="Một chút về mình"
          subtitle="Đam mê sản phẩm đẹp, chăm chút từng chi tiết nhỏ."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-neutral-700 dark:text-neutral-300"
        >
          <p className="leading-relaxed">{personal.about}</p>
          <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
            <li className="card">Tập trung vào trải nghiệm người dùng & hiệu năng.</li>
            <li className="card">Code sạch, tái sử dụng, dễ mở rộng.</li>
            <li className="card">Triển khai nhanh với CI/CD & tối ưu SEO.</li>
            <li className="card">Làm việc nhóm tốt, giao tiếp rõ ràng.</li>
          </ul>
        </motion.div>
      </Container>
    </section>
  )
}
