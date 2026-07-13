# Skill: Smooth Modern UI for Skills Section

Redesign `components/page/SkillSection.tsx` to have a smooth, modern UI using the project's existing stack (Next.js, Tailwind CSS v4, shadcn/ui). **Never modify `constants/skill.constants.tsx`** — all skill data stays as-is.

## Design Goals

- Group skills by category using `GroupAllSkills` from `@/constants/skill.constants`
- Each category renders as a labeled card/section with a subtle header
- Skill badges are larger (icon 24px, text sm), with pill shape and soft background
- Hover: lift + glow effect using `transition-all duration-200`
- Section heading animated with `animate-fade-in` from `tw-animate-css`
- Support both light and dark themes via existing CSS custom properties

## Implementation Pattern

```tsx
import { GroupAllSkills } from "@/constants/skill.constants";

const SkillSection = () => (
  <section id="skills" className="px-4 mx-auto pt-16 -mt-8">
    <h2 className="text-2xl font-bold mb-8 border-b border-border pb-4">
      Skills
    </h2>
    <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
      {GroupAllSkills.map((group) => (
        <div key={group.title} className="space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {group.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill.label}
                className="
                  inline-flex items-center gap-1.5 px-3 py-1.5
                  text-sm font-medium rounded-full
                  bg-secondary text-secondary-foreground
                  border border-border
                  transition-all duration-200
                  hover:shadow-md hover:-translate-y-0.5 hover:border-primary/40
                  cursor-default select-none
                "
              >
                {/* Re-clone icon at 20px for better visual weight */}
                <span className="[&>svg]:size-5">{skill.icon}</span>
                {skill.label}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default SkillSection;
```

## Rules

- Keep `id="skills"` on the section (used by nav anchor)
- Keep `pt-16 -mt-8` offset (fixes sticky header overlap)
- Import only from `@/constants/skill.constants` — never inline skill data
- No new dependencies; use only what's already installed
- Icon size must be overridden via wrapper (`[&>svg]:size-5`) since devicons-react accepts a `size` prop set at import time
- Test in both light and dark mode before marking done
