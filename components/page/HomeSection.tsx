import { Download, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

const HomeSection = () => {
  return (
    <section id="home" className="px-4 flex flex-col -mt-16 pt-24 mb-16 md:-mt-16 md:pt-40 text-center gap-y-5">
      <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl">Hi, I am Hieu (Harry)</h1>
      <div className="flex flex-row gap-2 justify-center">
        <Button asChild className="rounded-full h-8 w-8 hover:bg-primary cursor-pointer" variant="outline">
          <a href={process.env.LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            <LinkedinIcon />
          </a>
        </Button>
        <Button asChild className="rounded-full h-8 w-8 hover:bg-primary cursor-pointer" variant="outline">
          <a href={process.env.GITHUB_URL} target="_blank" rel="noopener noreferrer">
            <GithubIcon />
          </a>
        </Button>
        <Button asChild className="rounded-full h-8 w-8 hover:bg-primary cursor-pointer" variant="outline">
          <a href={`mailto:${process.env.MAIL}`} target="_blank" rel="noopener noreferrer">
            <MailIcon />
          </a>
        </Button>
      </div>
      <p className="text-sm sm:text-lg">
        A Software Engineer with 3.5+ years of experience. <br />
        Focus on building modern web applications. Passionate about solving real problems and continuously learning through hands-on development.
      </p>
      <div className="flex flex-col xs:flex-row gap-4 justify-center max-w-max xs:max-w-full mx-auto">
        <Button asChild>
          <a href={process.env.CV_URL} target="_blank" rel="noopener noreferrer">
            <Download /> Download CV
          </a>
        </Button>
      </div>
    </section>
  )
}

export default HomeSection