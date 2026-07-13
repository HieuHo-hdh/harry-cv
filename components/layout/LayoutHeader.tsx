"use client";

import { menuItems } from "@/constants/menu.constants";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import DarkModeToggle from "@/components/common/DarkModeToggle";
import { useEffect, useState } from "react";

const HEADER_HEIGHT = 56; // h-14 = 56px

const LayoutHeader = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const detectActive = () => {
      const sections = menuItems
        .map(({ key }) => document.getElementById(key))
        .filter(Boolean) as HTMLElement[];

      // Find the last section whose top is at or above the header bottom
      let current = "";
      for (const section of sections) {
        const top = section.getBoundingClientRect().top;
        if (top <= HEADER_HEIGHT + 16) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };

    detectActive();
    window.addEventListener("scroll", detectActive, { passive: true });
    return () => window.removeEventListener("scroll", detectActive);
  }, []);

  return (
    <header className="sticky top-0 border-b bg-background/80 backdrop-blur-md z-10">
      <nav className="container mx-auto flex flex-row items-center justify-between px-4 h-14">
        <h1 className="text-2xl font-extrabold">
          Harry
          <span className="text-primary">DEV</span>
        </h1>

        <ul className="hidden md:flex flex-row gap-8">
          {menuItems.map((item) => {
            const isActive = activeSection === item.key;
            return (
              <li key={item.key}>
                <Link
                  href={item.path}
                  className={`font-medium transition-all duration-300 hover:text-primary ${
                    isActive
                      ? "text-primary underline underline-offset-4 decoration-2"
                      : ""
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-row gap-2">
          <DarkModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="relative md:hidden">
              <Button variant="default" size="icon" className="cursor-pointer">
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                Ho Dac Hieu (Harry)
                <br />
                <span className="font-light text-xs">hdh13300@gmail.com</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {menuItems.map((item) => (
                <Link href={item.path} key={item.key}>
                  <DropdownMenuItem
                    className={`cursor-pointer ${
                      activeSection === item.key ? "text-primary font-medium" : ""
                    }`}
                  >
                    {item.title}
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default LayoutHeader;
