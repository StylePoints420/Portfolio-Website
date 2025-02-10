import DynamicDialog from "./dialog/DynamicDialog";
import { useDialog } from "@/hooks/useDialog";
import { ERPGWSBFeatures, languagesUsed } from "@/constants/projects";
import { Badge } from "@/components//ui/badge";
import { ArrowBigRight } from "lucide-react";

interface Props {
  dialog: ReturnType<typeof useDialog>;
}

const ProjectDialogComponent = ({ dialog }: Props) => {
  const dialogDetails = {
    dialogTitle: "Web-based ERP System for Gryn Wasabi Sushi Bar",
    dialogDescription: "",
    dialog: dialog,
  };

  return (
    <DynamicDialog dialogDetails={dialogDetails}>
      <div className="grid gap-5 justify-items-center items-center grid-cols-1 font-primary">
        {/* languages used */}
        <div className="grid justify-self-start grid-cols-3 md:grid-cols-4 gap-2">
          {languagesUsed.map((item, index) => (
            <Badge variant="outline" key={index} className={item.className}>
              {item.language}
            </Badge>
          ))}
        </div>

        <div className="grid justify-self-start">
          <h3 className="text-left text-lg">Features:</h3>
        </div>

        <div className="gap-5">
          <ul>
            {ERPGWSBFeatures.map((item, index) => (
              <li key={index} className="before:content-['-'] before:mr-2">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid justify-self-center mt-5">
          <a
            href="https://gryn-wasabi-sushi-bar-test.onrender.com"
            target="_blank"
          >
            <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black w-48 cursor-pointer">
              See it in Action
              <ArrowBigRight className="inline w-6 h-6" />
            </button>
          </a>
        </div>
      </div>
    </DynamicDialog>
  );
};

export default ProjectDialogComponent;
