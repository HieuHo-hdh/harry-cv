import { menuItems } from "@/constants/menu.constants";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "../ui/dropdown-menu";
import DarkModeToggle from "../common/DarkModeToggle";

const LayoutHeader = () => {
  return (
    <header className="sticky top-0 border-b bg-accent z-10">
      <nav className="container mx-auto flex flex-row items-center justify-between px-4 h-14">
        <h1 className="text-2xl font-extrabold">
          Harry
          <span className="text-primary">DEV</span>
        </h1>
        <ul className="hidden md:flex flex-row gap-8">
          {menuItems.map((item) => (
            <li
              className="font-medium hover:text-primary hover-underline"
              key={item.key}
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
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
              <DropdownMenuLabel>Ho Dac Hieu (Harry) <br/> <span className="font-light text-xs">hdh13300@gmail.com</span></DropdownMenuLabel>
              <DropdownMenuSeparator />
              {menuItems.map((item) => (
                <Link href={item.path} key={item.key}>
                  <DropdownMenuItem
                    className="cursor-pointer"
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
