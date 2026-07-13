# Skill: Smooth Modern UI for Skills Section

Redesign `components/page/SkillSection.tsx` to have a smooth, modern UI using the project's existing stack (Next.js, Tailwind CSS v4, shadcn/ui). **Never modify `constants/skill.constants.tsx`** — all skill data stays as-is.

## Design Goals

- Group skills by category using `GroupAllSkills` from `@/constants/skill.constants`
- Each category renders as a labeled card/section with a subtle header
- Skill badges are larger (icon 20px, text sm), with pill shape and soft background
- Hover: lift + glow effect using `transition-all duration-200`
- Support both light and dark themes via existing CSS custom properties

## Implementation Pattern

```tsx
import { GroupAllSkills } from "@/constants/skill.constants";
import FadeIn from "@/components/common/FadeIn";

const SkillSection = () => (
  <section id="skills" className="px-4 mx-auto scroll-mt-4">
    <FadeIn>
      <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-border">
        <span className="section-heading">Skills</span>
      </h2>
    </FadeIn>
    <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
      {GroupAllSkills.map((group, i) => (
        <FadeIn key={group.title} delay={100 + i * 80}>
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
                  <span className="w-4 h-4 shrink-0 flex items-center justify-center">{skill.icon}</span>
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

export default SkillSection;
```

## Rules

- Keep `id="skills"` on the section (used by FloatingNav anchor)
- Keep `scroll-mt-4` (NOT `pt-16 -mt-8` — there is no sticky header in this project)
- Section heading must use `<span className="section-heading">` inside the `<h2>`, not directly on the `<h2>`
- Import only from `@/constants/skill.constants` — never inline skill data
- No new dependencies; use only what's already installed
- Icon wrapper must be fixed-size (`w-4 h-4 shrink-0`) to prevent layout shift from devicons-react
- Wrap each group in `<FadeIn delay={...}>` for staggered entrance animation
- Test in both light and dark mode before marking done
