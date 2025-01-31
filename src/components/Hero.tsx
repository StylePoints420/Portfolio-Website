import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { SparklesCore } from "@/components/ui/sparkles";
import { useTheme } from "./theme/theme-provider";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import useScreenSize from "@/hooks/useScreenSize";

export function Hero() {
  const initialWords = [
    {
      text: "Hello",
      className: " md:text-5xl text-3xl lg:text-6xl",
    },
    {
      text: "There,",
      className: "md:text-5xl text-3xl lg:text-6xl",
    },
    {
      text: "I'm",
      className: "md:text-5xl text-3xl lg:text-6xl",
    },
    {
      text: "Joe!👋",
      className:
        "md:text-5xl text-3xl lg:text-6xl text-teal-500 dark:text-teal-500",
    },
  ];

  const slicedWords = [
    {
      text: "I'm",
      className: "md:text-5xl text-3xl lg:text-6xl",
    },
    {
      text: "Joe!👋",
      className:
        "md:text-5xl text-3xl lg:text-6xl text-teal-500 dark:text-teal-500",
    },
  ];

  const isMobile = useScreenSize();

  const { theme } = useTheme();

  return (
    <>
      <div className="h-[50rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={theme === "dark" ? 1.4 : 3.0}
            particleDensity={150}
            className="w-full h-full bg-white dark:bg-black transition-normal delay-50 duration-100"
            particleColor={theme === "dark" ? "#FFFFFF" : "#000000"}
          />
        </div>
        <div className="grid grid-cols-1 gap-10 justify-items-center">
          <TypewriterEffectSmooth
            words={isMobile ? slicedWords : initialWords}
            className="font-primary z-20 "
            cursorClassName="bg-teal-500"
          />
          <h1 className="md:text-4xl text-3xl lg:text-5xl font-bold text-center text-black dark:text-white relative z-20 font-primary">
            Welcome to my portfolio!
          </h1>

          <button className="font-primary mt-20 shadow-[inset_0_0_0_2px_#616467] text-black px-6 py-4 sm:px-12 sm:py-6 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200 z-20 text-lg lg:text-2xl">
            Learn more about me!
          </button>
        </div>
      </div>
    </>
  );
}
