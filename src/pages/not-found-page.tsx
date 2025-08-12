import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "@tanstack/react-router";
import notFoundImage from "/images/404page.png";

export default function NotFoundPage() {
  const isMobile = useIsMobile();

  return (
    <div
      className={`h-[650px] md:h-full mt-10 flex flex-col xl:flex-row justify-evenly items-center gap-5`}
    >
      <div className="flex flex-col items-center justify-center font-primary gap-5">
        <h1 className="text-4xl lg:text-6xl font-semibold tracking-tight text-balance text-gray-900 dark:text-white">
          Page not found
        </h1>
        <p className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 text-center dark:text-white">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
        </div>
      </div>

      {isMobile ? null : (
        <div>
          <img src={notFoundImage} alt="404 ERROR" className="h-[750px]" />
        </div>
      )}
    </div>
  );
}
