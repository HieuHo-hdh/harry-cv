import { Mail, Phone, Send } from "lucide-react"
import FadeIn from "@/components/common/FadeIn"

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "hdh13300@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+84902233257",
  },
  {
    icon: Send,
    label: "Telegram",
    value: "@hdh13300",
  },
]

const ContactSection = () => {
  return (
    <section id="contact" className="px-4 mx-auto scroll-mt-4">
      <FadeIn>
        <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-border">
          <span className="section-heading">Contact</span>
        </h2>
      </FadeIn>

      <FadeIn delay={100}>
        <p className="text-muted-foreground leading-relaxed mb-8 max-w-2xl">
          I'm actively open to new opportunities — whether on-site or hybrid in Ho Chi Minh City, or fully remote.
          If you have a role, project, or collaboration in mind, please get in touch through any of the channels below and I'll get back to you as soon as I can.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {contacts.map(({ icon: Icon, label, value }, i) => (
          <FadeIn key={label} delay={150 + i * 80}>
            <div className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl border border-border bg-card">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</p>
                <p className="text-sm font-medium mt-1 break-all">{value}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

export default ContactSection
