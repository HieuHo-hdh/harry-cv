"use client"

import { useState } from "react"
import { Mail, Phone, Send, Linkedin, Copy, ExternalLink, Check } from "lucide-react"
import FadeIn from "@/components/common/FadeIn"

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "hdh13300@gmail.com",
    copyValue: "hdh13300@gmail.com",
    openHref: undefined,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+84902233257",
    copyValue: "+84902233257",
    openHref: undefined,
  },
  {
    icon: Send,
    label: "Telegram",
    value: "@hdh13300",
    copyValue: "@hdh13300",
    openHref: "https://t.me/hdh13300",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/hieu-ho-hdh13300",
    copyValue: "https://www.linkedin.com/in/hieu-ho-hdh13300",
    openHref: "https://www.linkedin.com/in/hieu-ho-hdh13300",
  },
]

const ContactSection = () => {
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = (label: string, value: string) => {
    navigator.clipboard.writeText(value)
    setCopied(label)
    setTimeout(() => setCopied(null), 2000)
  }

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
          If you have a role, project, or collaboration in mind, please get in touch through any of the channels below.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contacts.map(({ icon: Icon, label, value, copyValue, openHref }, i) => (
          <FadeIn key={label} delay={150 + i * 80}>
            <div className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card">
              <div className="shrink-0 w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon size={18} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</p>
                <p className="text-sm font-medium mt-0.5 truncate">{value}</p>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={() => handleCopy(label, copyValue)}
                  title="Copy"
                  className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                >
                  {copied === label ? <Check size={15} className="text-green-500" /> : <Copy size={15} />}
                </button>
                {openHref && (
                  <a
                    href={openHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Open"
                    className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

export default ContactSection
