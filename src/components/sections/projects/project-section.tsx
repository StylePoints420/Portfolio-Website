import { Iphone15Mock } from "@/components/ui/iphone15-mock";
import { Deck, DeckCards, DeckEmpty, DeckItem } from "@/components/ui/deck";
import { SafariMock } from "@/components/ui/safari-mock";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowBigRight,
  ArrowUpRight,
  ArrowUpRightFromSquareIcon,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useTheme } from "@/themes/theme-provider";
import { Link } from "@tanstack/react-router";

const images = [
  {
    id: 1,
    src: "/images/ERP_System.png",
    darkSrc: "/images/ERP_System.png",
    mobileSrc: "/images/erp_system-mobile.jpg",
    mobileDarkSrc: "/images/erp_system-mobile.jpg",
    url: "gryn-wasabi-sushi-bar-test.onrender.com",
    projectID: "grynWasabi",
  },
  {
    id: 2,
    src: "/images/projects/shigoto-vault/shigoto-vault.png",
    darkSrc: "/images/projects/shigoto-vault/shigoto-vault-dark.png",
    mobileSrc: "/images/projects/shigoto-vault/shigoto-vault-mobile.jpg",
    mobileDarkSrc:
      "/images/projects/shigoto-vault/shigoto-vault-mobile-dark.jpg",
    url: "shigotovault - In Progress",
    projectID: "shigotoVault",
  },
];

export default function ProjectSection() {
  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState<
    "left" | "right"
  >("left");

  const { theme } = useTheme();

  const nextCardRight = () => {
    if (currentIndex < images.length) {
      // randomize the direction
      setAnimationDirection(
        Math.floor(Math.random() * 2) + 1 === 1 ? "right" : "left"
      );
      // Small delay to ensure direction is set before index changes
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 0);
    }
  };

  const isLastProject =
    currentIndex + 1 === images.length || currentIndex >= images.length;

  return (
    <>
      <div className="mb-5 space-y-2">
        {isMobile && (
          <>
            <p className="text-center font-primary text-sm mb-5">
              Tap the button or <br />
              swipe the image left or right to see the next project!
            </p>
          </>
        )}
        <div className="flex justify-center gap-2">
          {isLastProject ? (
            <div className="flex flex-col sm:flex-row gap-5">
              <button
                className="shadow-[0_0_0_1px_#000000_inset] px-10 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer font-primary disabled:hover:bg-gray-600 disabled:bg-gray-600 dark:disabled:bg-gray-600 dark:disabled:text-white disabled:text-white disabled:cursor-not-allowed "
                disabled={isLastProject}
                onClick={nextCardRight}
              >
                {isLastProject ? "More Projects Soon!" : "Next Project"}
              </button>
              <Link
                to="/projects"
                hash={images[currentIndex]?.projectID || images[0]?.projectID}
              >
                <button className="shadow-[0_0_0_1px_#000000_inset] px-5 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer font-primary disabled:hover:bg-gray-600 disabled:bg-gray-600 dark:disabled:bg-gray-600 dark:disabled:text-white disabled:text-white disabled:cursor-not-allowed inline-flex items-center justify-center gap-0.5">
                  More Details Here!
                  <ArrowUpRight className="w-6 h-6" />
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-5">
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    className={`shadow-[0_0_0_1px_#6b7280_inset] px-10 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-gray-100 hover:shadow-[0_0_0_2px_#6b7280_inset] cursor-pointer font-primary disabled:hover:bg-gray-400 disabled:bg-gray-400 dark:disabled:bg-gray-500 dark:disabled:text-gray-400 disabled:text-gray-500 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-[0_0_0_1px_#9ca3af_inset]`}
                    disabled={isLastProject}
                    onClick={nextCardRight}
                  >
                    {isLastProject ? "More Projects Soon!" : "Next Project"}
                  </button>
                </TooltipTrigger>
                <TooltipContent className="font-primary text-sm">
                  <p>
                    Tap the button or swipe the image left or right to see the
                    next project!
                  </p>
                </TooltipContent>
              </Tooltip>
              <Link
                to="/projects"
                hash={images[currentIndex]?.projectID || images[0]?.projectID}
              >
                <button className="shadow-[0_0_0_1px_#000000_inset] px-5 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer font-primary disabled:hover:bg-gray-600 disabled:bg-gray-600 dark:disabled:bg-gray-600 dark:disabled:text-white disabled:text-white disabled:cursor-not-allowed inline-flex items-center justify-center">
                  More Details Here!
                  <ArrowUpRight className="w-6 h-6" />
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <Deck
        className={`mx-auto ${isMobile ? "w-full h-[550px]" : "md:h-[450px] lg:h-[550px] xl:h-[680px] w-[90%]"}`}
      >
        <DeckCards
          className="z-10"
          animateOnIndexChange={true}
          currentIndex={currentIndex}
          indexChangeDirection={animationDirection}
          onCurrentIndexChange={setCurrentIndex}
        >
          {images.map((image) => (
            <DeckItem className={`flex-col text-center`} key={image.id}>
              {isMobile ? (
                <Iphone15Mock
                  src={theme === "dark" ? image.mobileDarkSrc : image.mobileSrc}
                />
              ) : (
                <>
                  <SafariMock
                    url={image.url}
                    width={isMobile ? 500 : 1203}
                    height={650}
                    className="w-full"
                    imageSrc={theme === "dark" ? image.darkSrc : image.src}
                  />
                </>
              )}
            </DeckItem>
          ))}
        </DeckCards>
        <DeckEmpty />
      </Deck>
    </>
  );
}
