import { menuItems } from "@/constants/menu.constants";
import { Home, UserRound, Zap, Briefcase, Mail, Sun, Moon, LucideIcon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

const SECTION_ICONS: Record<string, LucideIcon> = {
  home: Home,
  about: UserRound,
  skills: Zap,
  experience: Briefcase,
  contact: Mail,
};

const FloatingNav = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-0.5 sm:gap-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full border border-border/60 bg-background/80 backdrop-blur-lg shadow-lg shadow-black/10">
        {menuItems.map((item) => {
          const Icon = SECTION_ICONS[item.key] ?? Home;
          return (
            <Link
              key={item.key}
              href={item.path}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
            >
              <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span className="hidden sm:inline">{item.title}</span>
            </Link>
          );
        })}

        <div className="w-px h-5 bg-border mx-1" />
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-primary text-primary-foreground transition-all duration-200 cursor-pointer"
        >
          <Sun size={18} className="scale-100 dark:scale-0" />
          <Moon size={18} className="absolute scale-0 dark:scale-100" />
        </button>
      </nav>
    </div>
  );
};

export default FloatingNav;
