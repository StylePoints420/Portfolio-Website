import { ProjectsCarousel } from "@/components/ui/projects-carousel";
import useScreenSize from "@/hooks/useScreenSize";

import dijkstra from "@/images/EdsgerDijkstra.png";
import erpSystem from "@/images/ERP_System.png";
import ProjectsDialog from "./dialog/DynamicDialog";
import { useDialog } from "@/hooks/useDialog";

const ProjectComponent = () => {
  const slideData = [
    {
      title: "Enterprise Resource Planning for Gryn Wasabi Sushi Bar",
      button: "View Project",
      src: erpSystem,
    },
    {
      title: "Coming Soon",
      button: "Upcoming Project",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const isSmallScreen = useScreenSize({ customWidth: 1024 });

  const projectDialog = useDialog();

  const dialogDetails = {
    dialogTitle: "Web-based ERP System",
    dialogDescription: "Erp system with 7 modules",
    dialog: projectDialog,
  };

  return (
    <>
      {/* //TODO: Add some design here, and add details */}
      <ProjectsDialog dialogDetails={dialogDetails}>
        <div>
          <h1>hello</h1>
        </div>
      </ProjectsDialog>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 mt-20">
        <h2 className="text-5xl md:text-7xl  text-black dark:text-white max-w-4xl font-primary font-bold ">
          Projects
        </h2>
      </div>
      <div className="grid justify-items-center items-center min-h-[100vh] w-full overflow-hidden ">
        {/* remove the quote if screen size < 1024 pixels */}
        {isSmallScreen ? null : (
          <>
            <div className="absolute w-full bg-teal-400 dark:bg-orange-500 -z-10 md:h-96 rounded-2xl grid grid-cols-1"></div>
            <div className="absolute left-0 lg:w-md xl:w-2xl 2xl:w-[60%]">
              <div className="flex flex-col justify-center items-center gap-5 ml-5">
                <h2 className="font-primary lg:text-2xl xl:text-4xl break-words text-center italic">
                  <q>
                    If debugging is the process of removing bugs, then
                    programming must be the process of putting them in.
                  </q>
                </h2>
                <div className="flex justify-end items-center w-full">
                  <h3 className="font-primary text-2xl xl:text-4xl break-words  italic">
                    Edsger Dijkstra -
                  </h3>
                  <img
                    src={dijkstra}
                    alt="Edsger Dijkstra"
                    className="w-24 h-auto bg-transparent rounded-full scale-x-[-1]"
                  />
                </div>
              </div>
            </div>
          </>
        )}

        <div className="lg:justify-self-end">
          <ProjectsCarousel slides={slideData} dialog={projectDialog} />
        </div>
      </div>
    </>
  );
};

export default ProjectComponent;
