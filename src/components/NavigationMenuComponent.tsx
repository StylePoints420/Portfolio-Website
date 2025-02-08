import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { HashLink } from "react-router-hash-link";

export type Props = {
  className?: string;
};

const NavigationMenuComponent = (props: Props) => {
  return (
    <NavigationMenu>
      <NavigationMenuList className={props.className}>
        <NavigationMenuItem>
          <HashLink
            smooth
            to="/#home"
            className={`group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-2xl font-medium transition-colors hover:bg-accent hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-black dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50`}
          >
            Home
          </HashLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <HashLink
            smooth
            to="/#education"
            className={`group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-2xl font-medium transition-colors hover:bg-accent hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-black dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50`}
          >
            Education
          </HashLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <HashLink
            smooth
            to="/#skills"
            className={`group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-2xl font-medium transition-colors hover:bg-accent hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-black dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50`}
          >
            Skills
          </HashLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <HashLink
            smooth
            to="/#projects"
            className={`group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-2xl font-medium transition-colors hover:bg-accent hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-black dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50`}
          >
            Projects
          </HashLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenuComponent;
