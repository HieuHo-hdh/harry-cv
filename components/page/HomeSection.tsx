import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import FadeIn from "@/components/common/FadeIn"
import FlyingIcons from "@/components/page/FlyingIcons"

const HomeSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">

      <FlyingIcons />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center gap-y-6 max-w-3xl">
        <FadeIn>
          <div className="flex items-center gap-3 justify-center mb-2">
            <span className="text-sm font-medium tracking-widest uppercase text-primary">Software Engineer</span>
            <span className="w-px h-4 bg-primary/40" />
            <span className="text-sm font-medium tracking-widest uppercase text-primary">Front-end Engineer</span>
          </div>
          <h1 className="font-extrabold text-4xl md:text-5xl lg:text-7xl leading-tight">
            Hi, I am Hieu<br />
            <span className="text-primary">(Harry)</span>
          </h1>
        </FadeIn>

        <FadeIn delay={150}>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-xl">
            3.5+ years building modern web applications.
            Passionate about solving real problems and continuously learning through hands-on development.
          </p>
        </FadeIn>

        <FadeIn delay={350}>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href="/#experience">View Experience</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href="/#contact">Contact Me</a>
            </Button>
            <Button asChild size="lg" className="rounded-full">
              <a href={process.env.CV_URL} target="_blank" rel="noopener noreferrer">
                <Download /> Download CV
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default HomeSection
