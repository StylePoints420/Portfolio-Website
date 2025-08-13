import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import NavLinks from "./nav-links";
import { ModeToggle } from "@/themes/mode-toggle";
import { Link } from "@tanstack/react-router";
import { useState, type SetStateAction } from "react";

interface MobileViewDrawerProps {
  open: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

export default function MobileViewDrawer({
  open,
  setOpen,
}: MobileViewDrawerProps) {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Menu className="w-10 h-10 dark:dark" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Link
              to="/"
              hash="home"
              className="border-teal-400 rounded-xl h-16 w-16 border-3 text-3xl font-headers flex items-center justify-center font-bold  hover:animate-pulse transition-all delay-150 duration-300 ease-in-out data-[status]:bg-teal-200 dark:data-[status]:bg-teal-600"
              activeOptions={{ includeHash: true }}
              onClick={() => {
                setOpen(false);
                // Delay scroll so it happens after sheet closes
                setTimeout(() => {
                  const el = document.getElementById("home");
                  el?.scrollIntoView({ behavior: "smooth" });
                }, 300);
              }}
            >
              JP
            </Link>
          </SheetTitle>
          {/* add blank description to avoid warning of Missing description for DialogContent */}
          <SheetDescription> </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-10">
          <NavLinks
            className="font-headers grid grid-cols-1 gap-4"
            setOpen={setOpen}
          />
        </div>
        <SheetFooter>
          <div className="ml-auto">
            <ModeToggle />
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
