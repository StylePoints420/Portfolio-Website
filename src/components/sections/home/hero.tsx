import { SparklesCore } from "@/components/ui/sparkles";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "@/themes/theme-provider";
import { Link } from "@tanstack/react-router";

const greetings = [
  {
    text: "Hello",
    className: "md:text-5xl text-3xl lg:text-6xl",
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

export default function Hero() {
  const { theme } = useTheme();

  const isMobile = useIsMobile(400);
  return (
    <div className="h-dvh relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-none">
      <section className="h-full w-full absolute inset-0">
        <SparklesCore
          background="transparent"
          minSize={0.6}
          maxSize={theme === "dark" ? 1.4 : 3.0}
          particleDensity={150}
          className="w-full h-full bg-white dark:bg-black transition-normal delay-50 duration-100"
          particleColor={theme === "dark" ? "#FFFFFF" : "#000000"}
        />
      </section>
      <section className="z-5 grid justify-items-center">
        <TypewriterEffectSmooth
          className="font-primary"
          cursorClassName="bg-teal-500 xl:h-15"
          words={isMobile ? greetings.slice(2, 4) : greetings}
        />
        <h1 className="md:text-4xl text-3xl lg:text-5xl font-bold text-center text-primary relative z-20 font-primary">
          Welcome to my portfolio!
        </h1>
      </section>
      <section className="z-5 grid justify-items-center">
        <Link
          className="font-primary mt-20 shadow-[inset_0_0_0_2px_#616467] text-black px-6 py-4 sm:px-12 sm:py-6 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200 z-20 text-lg lg:text-2xl cursor-pointer"
          to="/"
          hash="experience"
        >
          Learn More About Me!
        </Link>
      </section>
    </div>
  );
}
