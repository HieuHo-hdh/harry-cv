import FadeIn from "@/components/common/FadeIn";

const EducationSection = () => {
  return (
    <section id="education" className="px-4 mx-auto pt-16 -mt-8 mb-16">
      <FadeIn>
        <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-border">Education</h2>
      </FadeIn>
      <FadeIn delay={100}>
        <div className="bg-card border border-border rounded-xl p-4 space-y-1">
          <div className="flex flex-col md:flex-row justify-between gap-x-2">
            <h3 className="font-bold text-lg leading-tight">Ho Chi Minh University of Technology and Education</h3>
            <span className="text-sm text-muted-foreground shrink-0">2018 - 2023</span>
          </div>
          <h4 className="font-semibold text-sm text-primary">Information Technology - Software Development</h4>
          <p className="text-sm text-muted-foreground">CPA: 7.56</p>
        </div>
      </FadeIn>
    </section>
  );
};

export default EducationSection;
