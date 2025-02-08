import NavigationMenuComponent from "./components/NavigationMenuComponent";
import { ModeToggle } from "./components/theme/mode-toggle";
import { Drawer } from "./components/Drawer";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 z-50 scroll-smooth border-b-1 bg-white dark:bg-black">
      <div className="hidden md:grid grid-cols-3 justify-items-center items-center h-20 dark:dark bg-transparent  ">
        <HashLink
          smooth
          to="/#home"
          className="border-teal-400 rounded-xl h-16 w-16 border-3 text-3xl font-headers flex items-center justify-center font-bold  hover:animate-pulse transition-all delay-150 duration-300 ease-in-out "
        >
          JP
        </HashLink>
        <NavigationMenuComponent />
        <ModeToggle />
      </div>
      <div className="flex justify-end items-center md:hidden py-2">
        <Drawer />
      </div>
    </div>
  );
};

export default Navbar;
