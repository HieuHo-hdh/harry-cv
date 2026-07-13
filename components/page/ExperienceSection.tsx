import { experiences } from "@/constants/experience.constants";
import FadeIn from "@/components/common/FadeIn";

type Experience = typeof experiences[number];

const grouped: { company: string; items: Experience[] }[] = [];
for (const exp of experiences) {
  const last = grouped[grouped.length - 1];
  if (last && last.company === exp.company) {
    last.items.push(exp);
  } else {
    grouped.push({ company: exp.company, items: [exp] });
  }
}

const ExperienceSection = () => {
  return (
    <section id="experience" className="px-4 mx-auto scroll-mt-4">
      <FadeIn>
        <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-border">
          <span className="section-heading">Experience</span>
        </h2>
      </FadeIn>

      <div className="space-y-10">
        {grouped.map((group, gi) => (
          <FadeIn key={group.company} delay={gi * 80}>

            {/* Company header */}
            <h3 className="text-base font-extrabold text-primary mb-4">{group.company}</h3>

            {/* Timeline rows */}
            <div className="relative">

              {/* Continuous vertical line — desktop: left-[160px], mobile: left-3 */}
              <div className="absolute top-0 bottom-0 left-3 md:left-[160px] w-px -translate-x-1/2 bg-border" />

              {group.items.map((exp, i) => (
                <div key={i} className="pb-6 last:pb-0">

                  {/* ── Mobile layout: time + dot on top, card below ── */}
                  <div className="flex items-center gap-3 mb-2 md:hidden">
                    <div className="relative shrink-0 w-3 flex justify-center">
                      <div className="h-3 w-3 rounded-full bg-primary border-2 border-background" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{exp.time}</span>
                  </div>
                  <div className="pl-8 md:hidden">
                    <ProjectCard exp={exp} />
                  </div>

                  {/* ── Desktop layout: time left, dot on line, card right ── */}
                  <div className="hidden md:flex items-start">
                    <div className="w-[160px] shrink-0 pt-2 pr-6 text-right">
                      <span className="text-sm font-medium text-foreground">{exp.time}</span>
                    </div>
                    <div className="relative shrink-0 w-0">
                      <div className="absolute top-3 h-3 w-3 rounded-full bg-primary border-2 border-background -translate-x-1/2" />
                    </div>
                    <div className="flex-1 pl-6">
                      <ProjectCard exp={exp} />
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </FadeIn>
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ exp }: { exp: Experience }) => (
  <div className="bg-card border border-border rounded-xl p-4 space-y-2">
    <h4 className="font-bold text-base leading-tight">{exp.projectName}</h4>
    <p className="font-semibold text-sm text-primary">{exp.role}</p>
    <div className="flex flex-row gap-2 flex-wrap">
      {exp.techs.map((tech, ti) => (
        <span key={ti} className="text-xs font-medium px-2 py-0.5 rounded border border-primary/30 bg-primary/5 text-primary">
          {tech}
        </span>
      ))}
    </div>
    <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
  </div>
);

export default ExperienceSection;
