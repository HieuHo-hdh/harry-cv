import Link from "next/link";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { menuItems } from "@/constants/menu.constants";
import ScrollTopButton from "./ScrollTopButton";

const contacts = [
  { icon: Mail,  label: "Email", href: "mailto:hdh13300@gmail.com", value: "hdh13300@gmail.com" },
  { icon: Phone, label: "Phone", href: "tel:+84902233257",          value: "+84902233257" },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/hieu-ho-hdh13300" },
  { icon: Github,   label: "GitHub",   href: "https://github.com/HieuHo-hdh" },
];

const LayoutFooter = () => {
  return (
    <footer className="border-t bg-muted/60 backdrop-blur-md">
      <div className="container mx-auto px-4 py-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1: brand + meta */}
          <div className="space-y-3">
            <h2 className="text-xl font-extrabold">
              Harry<span className="text-primary">DEV</span>
            </h2>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin size={13} />
              <span>Ho Chi Minh City, Vietnam</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Open to work
            </div>
          </div>

          {/* Col 2: navigation */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Navigation</p>
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: contact */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Contact</p>
            <ul className="space-y-2">
              {contacts.map(({ icon: Icon, label, href, value }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="inline-flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    <Icon size={14} className="mt-0.5 shrink-0" />
                    <span className="break-all">{value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: social links */}
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Connect</p>
            <ul className="space-y-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    <Icon size={14} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ho Dac Hieu (Harry). All rights reserved.
          </p>
          <ScrollTopButton />
        </div>

      </div>
    </footer>
  );
};

export default LayoutFooter;
