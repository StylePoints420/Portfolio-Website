import Features from "@/components/ui/features-grid";
import { frontend, backend, tools } from "@/constants/skills";
import ColourfulText from "@/components/ui/colourful-text";
import { Link } from "lucide-react";

const SkillSection = () => {
  return (
    <>
      {/*  add top margin-20 to view skills header text */}
      <div className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10 mt-20">
        <div className="max-w-7xl mx-auto  px-4 md:px-8 lg:px-10">
          <h2 className="text-5xl md:text-7xl mb-10 text-black dark:text-white max-w-4xl font-primary font-bold ">
            <Link className="inline w-8 h-8 md:w-10 md:h-10" /> Skills
          </h2>
        </div>
        {/* frontend */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 flex justify-center">
          <h2 className="text-4xl md:text-6xl text-black dark:text-white max-w-4xl font-primary font-bold ">
            <ColourfulText text="Frontend" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 px-10 max-w-7xl mx-auto font-primary ">
          {frontend.map((item, index) => (
            <Features key={item.title} {...item} index={index} />
          ))}
        </div>

        {/* backend */}
        <div className="max-w-full mx-auto px-4 md:px-8 lg:px-auto flex justify-center">
          <h2 className="text-4xl md:text-6xl  text-black dark:text-white max-w-4xl font-primary font-bold  text-center">
            <ColourfulText text="Backend" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 px-10 max-w-7xl mx-auto font-primary ">
          {backend.map((item, index) => (
            <Features key={item.title} {...item} index={index} />
          ))}
        </div>

        {/* tools */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 flex justify-center">
          <h2 className="text-4xl md:text-6xl  text-black dark:text-white max-w-4xl font-primary font-bold ">
            <ColourfulText text="Tools" />
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 px-10 max-w-7xl mx-auto font-primary ">
          {tools.map((tool, index) => (
            <Features key={tool.title} {...tool} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillSection;
