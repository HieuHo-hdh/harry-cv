import { experiences } from "@/constants/experience.constants"
import { Badge } from "../ui/badge"

const ExperienceSection = () => {
  return (
    <section id="experience" className="px-4 mx-auto pt-16 -mt-8">
      <h2 className="text-2xl font-bold mb-8 border-b border-gray-200 pb-4">Experience</h2>
      <div className="ml-8 border-l-2 space-y-4">
        {
          experiences.map((experience, index) => <div className="relative px-8" key={index}>
            <div className="absolute rounded-full -translate-x-px top-2 -left-2 bg-primary border-2 h-4 w-4"></div>
            <div className="flex flex-col md:flex-row justify-between gap-x-2">
              <h3 className="font-bold text-lg">{experience.projectName}</h3>
              <span className="text-sm">{experience.time}</span>
            </div>
            <h4 className="font-semibold text-sm mb-1">{experience.role} ({experience.company})</h4>
            <div className="flex flex-row gap-2 mb-1 flex-wrap">
              {experience.techs.map((tech, index) => <Badge key={index}>{tech}</Badge>)}
            </div>
            {
              experience.responsible
            }
          </div>
        )}
      </div>
    </section>
  )
}

export default ExperienceSection