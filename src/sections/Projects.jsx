import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'
import { personal } from '../config/personal'

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <Container>
        <SectionHeader kicker="Dự án" title="Sản phẩm mình từng làm" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {personal.projects?.map((p) => <ProjectCard key={p.title} project={p} />)}
        </div>
      </Container>
    </section>
  )
}
