import { ProjectsCarousel } from "@/components/ui/projects-carousel";
import useScreenSize from "@/hooks/useScreenSize";

import erpSystem from "@/images/ERP_System.png";
import { useDialog } from "@/hooks/useDialog";
import ProjectDialogComponent from "./ProjectDialogComponent";
import DijkstraQuoteComponent from "./DijkstraQuoteComponent";

const slideData = [
  {
    title: "Enterprise Resource Planning for Gryn Wasabi Sushi Bar",
    button: "View Project",
    src: erpSystem,
  },
];

const ProjectComponent = () => {
  const isSmallScreen = useScreenSize({ customWidth: 1024 });

  const projectDialog = useDialog();

  return (
    <>
      <ProjectDialogComponent dialog={projectDialog} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 mt-20">
        <h2 className="text-5xl md:text-7xl  text-black dark:text-white max-w-4xl font-primary font-bold ">
          Projects
        </h2>
      </div>
      <div className="grid justify-items-center items-center min-h-[100vh] w-full overflow-hidden ">
        {/* remove the quote if screen size < 1024 pixels */}
        {isSmallScreen ? null : <DijkstraQuoteComponent />}

        <div className="lg:justify-self-end">
          <ProjectsCarousel slides={slideData} dialog={projectDialog} />
        </div>
      </div>
    </>
  );
};

export default ProjectComponent;
