import { experiences } from "@/constants/experience.constants";
import { Badge } from "../ui/badge";
import FadeIn from "@/components/common/FadeIn";

const ExperienceSection = () => {
  return (
    <section id="experience" className="px-4 mx-auto pt-16 -mt-8">
      <FadeIn>
        <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-border">Experience</h2>
      </FadeIn>
      <div className="ml-4 border-l-2 border-border space-y-6">
        {experiences.map((experience, index) => (
          <FadeIn key={index} delay={index * 80} className="relative pl-8">
            <div className="absolute left-0 top-3 h-3 w-3 rounded-full bg-primary border-2 border-background -translate-x-[7px]" />
            <div className="bg-card border border-border rounded-xl p-4 space-y-2">
              <div className="flex flex-col md:flex-row justify-between gap-x-2">
                <h3 className="font-bold text-lg leading-tight">{experience.projectName}</h3>
                <span className="text-sm text-muted-foreground shrink-0">{experience.time}</span>
              </div>
              <h4 className="font-semibold text-sm text-primary">
                {experience.role} · {experience.company}
              </h4>
              <div className="flex flex-row gap-2 flex-wrap">
                {experience.techs.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="rounded-full">{tech}</Badge>
                ))}
              </div>
              <div className="text-muted-foreground">
                {experience.responsible}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
