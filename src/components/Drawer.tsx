import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ModeToggle } from "./theme/mode-toggle";
import NavigationMenuComponent from "./NavigationMenuComponent";

export function Drawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="w-10 h-10 dark:dark" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            {" "}
            <span className="border-teal-400 rounded-xl h-16 w-16 border-3 text-3xl font-headers flex items-center justify-center font-bold  hover:animate-pulse transition-all delay-150 duration-300 ease-in-out ">
              RP
            </span>
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-10">
          <NavigationMenuComponent className="font-headers grid grid-cols-1 gap-4" />
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
