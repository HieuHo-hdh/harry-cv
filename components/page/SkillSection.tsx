// "use client";

import { GroupAllSkills } from "@/constants/skill.constants";
import FadeIn from "@/components/common/FadeIn";

const SkillSection = () => {
  return (
    <section id="skills" className="px-4 mx-auto scroll-mt-4">
      <FadeIn>
        <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-border">
          <span className="section-heading">Skills</span>
        </h2>
      </FadeIn>
      <div className="flex flex-col gap-6">
        {GroupAllSkills.map((group, index) => (
          <FadeIn key={group.title} delay={index * 100}>
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-full bg-secondary text-secondary-foreground border border-border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-primary/40 cursor-default select-none"
                  >
                    <span className="shrink-0 w-4 h-4 inline-flex items-center justify-center">
                      {skill.icon}
                    </span>
                    {skill.label}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
