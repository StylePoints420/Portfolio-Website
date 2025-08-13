import { useWindowScroll } from "react-use";
import { Button } from "@/components/ui/button";
import { IoArrowUpOutline } from "react-icons/io5";

export default function ScrollToTopButton() {
  const { y } = useWindowScroll();

  const hideScrollToTop = y >= 200;

  return (
    <Button
      className={`h-8 w-8 sm:h-12 sm:w-12 rounded-full z-50 fixed bottom-10 left-5 sm:left-auto sm:right-15 sm:[&_svg:not([class*='size-'])]:size-5 cursor-pointer transition-all duration-500 ease-in-out ${hideScrollToTop ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}`}
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      title="Scroll to top"
      aria-label="Scroll to top button"
    >
      <IoArrowUpOutline />
    </Button>
  );
}
