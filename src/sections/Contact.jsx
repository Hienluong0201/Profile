import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import Button from '../components/Button'
import { Mail } from 'lucide-react'
import { personal } from '../config/personal'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <Container>
        <SectionHeader
          kicker="Liên hệ"
          title="Cùng làm gì đó hay ho"
          subtitle="Inbox mình để trao đổi ý tưởng hoặc hợp tác dự án nhé."
        />
        <div className="mx-auto max-w-xl text-center">
          <Button href={`mailto:${personal.email}`} className="justify-center">
            <Mail className="h-4 w-4" /> Gửi email
          </Button>
          <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
            Email: <a className="underline" href={`mailto:${personal.email}`}>{personal.email}</a>
          </p>
        </div>
      </Container>
    </section>
  )
}
