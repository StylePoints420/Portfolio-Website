import { Link } from "@tanstack/react-router";
import NavLinks from "./nav-links";
import MobileViewDrawer from "./mobile-view-drawer";
import { ModeToggle } from "@/themes/mode-toggle";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-end lg:justify-center items-center gap-2 sticky top-0 z-50 bg-transparent w-full backdrop-blur-sm ">
      <section className="hidden lg:flex justify-between mx-5 xl:mx-10 items-center h-20 dark:dark bg-transparent w-full z-50">
        <Link
          to="/"
          hash="home"
          className="border-teal-400 rounded-xl h-16 w-16 border-3 text-3xl font-headers flex items-center justify-center font-bold  hover:animate-pulse transition-all delay-150 duration-300 ease-in-out data-[status]:bg-teal-200 dark:data-[status]:bg-teal-600"
          activeOptions={{ includeHash: true }}
        >
          JP
        </Link>
        <NavLinks className="font-primary font-extrabold" setOpen={setOpen} />
        <ModeToggle />
      </section>
      <section className="flex justify-end items-center lg:hidden py-2">
        <MobileViewDrawer open={open} setOpen={setOpen} />
      </section>
    </nav>
  );
}
