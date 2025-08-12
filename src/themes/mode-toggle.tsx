import { FlashlightIcon, FlashlightOffIcon, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/themes/theme-provider";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="border-3 rounded-xl border-teal-400 h-14 w-14"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      title={
        theme === "light"
          ? "Click to turn off the lights!"
          : "Click to turn on the lights!"
      }
      aria-label="Click to switch between light/dark mode"
    >
      <FlashlightIcon
        className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 lg:rotate-180 transition-all dark:scale-0 dark:-rotate-90"
        style={{ width: "20px", height: "20px" }}
      />
      <FlashlightOffIcon
        className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-0 lg:rotate-90 transition-all dark:scale-100 dark:lg:rotate-180"
        style={{ width: "20px", height: "20px" }}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
