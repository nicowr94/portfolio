import { Navbar } from '../components/Navbar';
import {
  CareerTimelineSection,
  HeroSection,
  OutbuildExperienceSection,
  OutbuildSuccessCasesSection,
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
    <OutbuildSuccessCasesSection />
    <PreviousExperienceSections />
    <TechStackSection />
  </main>;
}
