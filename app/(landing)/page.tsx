// import EducationSection from "@/components/page/Education";
import ExperienceSection from "@/components/page/ExperienceSection";
import HomeSection from "@/components/page/HomeSection";
import SkillSection from "@/components/page/SkillSection";
import AboutSection from "@/components/page/AboutSection";
import ContactSection from "@/components/page/ContactSection";

export default function Home() {
  return (
    <div className="space-y-16 pb-24">
      <HomeSection />
      <AboutSection />
      <SkillSection />
      <ExperienceSection />
      {/* <EducationSection /> */}
      <ContactSection />
    </div>
  );
}
