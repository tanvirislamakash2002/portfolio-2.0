import AboutMeSection from "@/components/modules/AboutMeSection";
import HeroSection from "@/components/modules/HeroSection";
import SkillsSection from "@/components/modules/SkillsSection";


export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AboutMeSection/>
      <SkillsSection/>
    </div>
  );
}
