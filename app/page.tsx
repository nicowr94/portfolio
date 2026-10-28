import { HeroSection } from '../components/sections/HeroSection';
import { CareerTimelineSection } from '../components/sections/CareerTimelineSection';
import { CompanyExperienceSections } from '../components/sections/CompanyExperienceSections';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { SiteHeader } from '../components/sections/SiteHeader';
import { StatsSection } from '../components/sections/StatsSection';
import { TechStackSection } from '../components/sections/TechStackSection';

export default function Home() {
  return <main>
    <SiteHeader />
    <HeroSection />
    <StatsSection />
    <CareerTimelineSection />
    <CompanyExperienceSections />
    <ProjectsSection />
    <TechStackSection />
  </main>;
}
