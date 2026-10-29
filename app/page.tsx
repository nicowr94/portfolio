import { Navbar } from '../components/Navbar';
import {
  CareerTimelineSection,
  CompanyExperienceSections,
  HeroSection,
  ProjectsSection,
  StatsSection,
  TechStackSection,
} from '../features/portfolio';

export default function Home() {
  return <main>
    <Navbar currentPage="portfolio">
      <a href="#work">Proyectos</a>
      <a href="#about">Experiencia</a>
      <a href="#stack">Stack</a>
    </Navbar>
    <HeroSection />
    <StatsSection />
    <CareerTimelineSection />
    <CompanyExperienceSections />
    <ProjectsSection />
    <TechStackSection />
  </main>;
}
