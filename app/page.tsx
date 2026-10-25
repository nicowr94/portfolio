import { CareerTimelineSection } from '../components/sections/CareerTimelineSection';
import { CompanyExperienceSections } from '../components/sections/CompanyExperienceSections';
import { HeroSection } from '../components/sections/HeroSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { SiteFooter } from '../components/sections/SiteFooter';
import { SiteHeader } from '../components/sections/SiteHeader';
import { StatsSection } from '../components/sections/StatsSection';
import { TechStackSection } from '../components/sections/TechStackSection';

export default function Home() {
  return <main>
    <SiteHeader />
    <HeroSection />
    <StatsSection />
    <ProjectsSection />
    <TechStackSection />
    <CareerTimelineSection />
    <CompanyExperienceSections />
    <SiteFooter />
  </main>;
}
