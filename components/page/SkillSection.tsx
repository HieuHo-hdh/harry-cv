import { AllSkills } from "@/constants/skill.constants";
import { Badge } from "@/components/ui/badge"

const SkillSection = () => {
  return (
    <section id="skills" className='px-4 mx-auto pt-16 -mt-8'>
      <h2 className='text-2xl font-bold mb-8 border-b border-gray-200 pb-4'>Skills</h2>
      <div className="flex flex-row gap-2 flex-wrap">
         {
          AllSkills.map((skill) => 
            <Badge key={skill.label} variant="secondary" className="h-8 px-2 align-middle rounded-sm">
              {skill.icon}
              {skill.label}
            </Badge>)
        }
      </div>
    </section>
  )
}

export default SkillSection