import { Link } from "react-router";
import notFoundImage from "../images/404page.png";
import useScreenSize from "@/hooks/useScreenSize";

const PageNotFound = () => {
  const isSmallScreen = useScreenSize({ customWidth: 600 });

  return (
    <>
      <div
        className={`w-full h-screen grid ${
          isSmallScreen ? "grid-cols-1" : "grid-cols-2"
        }  justify-items-stretch `}
      >
        <div className="flex flex-col items-center justify-center font-primary">
          <h1 className="mt-4 text-4xl lg:text-6xl font-semibold tracking-tight text-balance text-gray-900 dark:text-white">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 text-center dark:text-white">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
          </div>
        </div>

        {isSmallScreen ? null : (
          <div>
            <img
              src={notFoundImage}
              alt="404 ERROR"
              className="h-screen w-full"
            ></img>
          </div>
        )}
      </div>
    </>
  );
};

export default PageNotFound;
