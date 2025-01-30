import NavigationMenuComponent from "./components/NavigationMenuComponent";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ModeToggle } from "./components/theme/mode-toggle";
import { Drawer } from "./components/Drawer";
import { Outlet } from "react-router";

const Navbar = () => {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <div className="hidden md:grid grid-cols-3 justify-items-center items-center h-20 ">
          <span className="border-teal-400 rounded-xl h-16 w-16 border-3 text-3xl font-headers flex items-center justify-center font-bold  hover:animate-pulse transition-all delay-150 duration-300 ease-in-out ">
            RP
          </span>
          <NavigationMenuComponent className="" />
          <ModeToggle />
        </div>
        <div className="flex justify-end items-center md:hidden mt-3 mr-2">
          <Drawer />
        </div>
      </ThemeProvider>
      <Outlet />
    </>
  );
};

export default Navbar;
