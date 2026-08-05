import dynamic from "next/dynamic";
import { Suspense } from "react";

// import EducationSection from "@/components/page/Education";
import HomeSection from "@/components/page/HomeSection";

const AboutSection = dynamic(() => import("@/components/page/AboutSection"), { loading: () => null });
const SkillSection = dynamic(() => import("@/components/page/SkillSection"), { loading: () => null });
const ExperienceSection = dynamic(() => import("@/components/page/ExperienceSection"), { loading: () => null });
const ContactSection = dynamic(() => import("@/components/page/ContactSection"), { loading: () => null });

export default function Home() {
  return (
    <div className="space-y-16 pb-24">
      <HomeSection />
      <Suspense fallback={null}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={null}>
        <SkillSection />
      </Suspense>
      <Suspense fallback={null}>
        <ExperienceSection />
      </Suspense>
      {/* <EducationSection /> */}
      <Suspense fallback={null}>
        <ContactSection />
      </Suspense>
    </div>
  );
}
