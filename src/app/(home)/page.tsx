import AboutMeSection from "@/components/modules/AboutMeSection";
import ContactMe from "@/components/modules/ContactMe";
import HeroSection from "@/components/modules/HeroSection";
import ProjectsSection from "@/components/modules/ProjectsSection";
import SkillsSection from "@/components/modules/SkillsSection";


export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactMe />
    </div>
  );
}
