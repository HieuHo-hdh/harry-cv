import Image from "next/image"
import { MapPin, Mail, Phone, User, Linkedin } from "lucide-react"
import FadeIn from "@/components/common/FadeIn"

const info = [
  { icon: User,     label: "Name",     value: "Ho Dac Hieu (Harry)",                href: undefined },
  { icon: MapPin,   label: "Address",  value: "Ho Chi Minh City, Vietnam",           href: undefined },
  { icon: Mail,     label: "Email",    value: "hdh13300@gmail.com",                  href: "mailto:hdh13300@gmail.com" },
  { icon: Phone,    label: "Phone",    value: "+84902233257",                        href: "tel:+84902233257" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/hieu-ho-hdh13300",    href: "https://www.linkedin.com/in/hieu-ho-hdh13300" },
]

const AboutSection = () => {
  const avatar = process.env.AVATAR_URL

  return (
    <section id="about" className="px-4 mx-auto scroll-mt-4">
      <FadeIn>
        <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-border">
          <span className="section-heading">About</span>
        </h2>
      </FadeIn>

      <div className="flex flex-col md:flex-row gap-8 items-start">

        {/* Avatar — left, natural aspect ratio */}
        <FadeIn delay={100} className="shrink-0">
          <div className="relative w-56 md:w-64 aspect-square rounded-2xl overflow-hidden border border-border shadow-md">
            {avatar ? (
              <Image src={avatar} alt="Harry" fill className="object-cover" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <span className="text-7xl font-extrabold text-primary/40 select-none">HH</span>
              </div>
            )}
          </div>
        </FadeIn>

        {/* Right: description + info */}
        <FadeIn delay={200} className="flex-1 space-y-6">

          {/* Short description */}
          <p className="text-muted-foreground leading-relaxed">
            I'm a Software Engineer based in Ho Chi Minh City with 3.5+ years of experience building modern web applications.
            I specialise in front-end development with a strong focus on clean UI, performance, and developer experience.
            I enjoy working in collaborative teams, taking ownership of features end-to-end, and continuously learning new technologies.
          </p>

          {/* Info rows */}
          <div className="bg-card border border-border rounded-2xl p-5 space-y-4">
            {info.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon size={14} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</p>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm font-medium mt-0.5 hover:text-primary transition-colors duration-200 break-all">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium mt-0.5">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

        </FadeIn>

      </div>
    </section>
  )
}

export default AboutSection
