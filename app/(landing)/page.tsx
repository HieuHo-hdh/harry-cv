import EducationSection from "@/components/page/Education";
import ExperienceSection from "@/components/page/ExperienceSection";
import HomeSection from "@/components/page/HomeSection";
import SkillSection from "@/components/page/SkillSection";

export default function Home() {
  return (
    <div className="">
      <HomeSection />
      <SkillSection />
      <ExperienceSection />
      <EducationSection />
    </div>
  );
}
