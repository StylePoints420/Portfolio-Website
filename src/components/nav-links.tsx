import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "@tanstack/react-router";
import type { SetStateAction } from "react";

const linkArray: string[] = [
  "home",
  "experience",
  "education",
  "skills",
  "projects",
];

interface NavLinksProps {
  className?: string;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

export default function NavLinks({ className, setOpen }: NavLinksProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList className={className}>
        {linkArray.map((link, index) => (
          <NavigationMenuItem
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-2xl font-medium transition-colors hover:bg-accent hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-transparent dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            asChild
            key={index}
          >
            <Link
              to="/"
              hash={link}
              className="capitalize data-[status]:bg-teal-500 dark:data-[status]:bg-teal-600"
              activeOptions={{
                includeHash: true,
                exact: true,
              }}
              onClick={() => {
                setOpen(false);
                // Delay scroll so it happens after sheet closes
                setTimeout(() => {
                  const el = document.getElementById(link);
                  el?.scrollIntoView({ behavior: "smooth" });
                }, 300);
              }}
            >
              {link}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
