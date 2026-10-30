import { Navbar } from '../components/Navbar';
import {
  CareerTimelineSection,
  HeroSection,
  OutbuildExperienceSection,
  ProjectsSection,
  PreviousExperienceSections,
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
    <OutbuildExperienceSection />
    <ProjectsSection />
    <PreviousExperienceSections />
    <TechStackSection />
  </main>;
}
