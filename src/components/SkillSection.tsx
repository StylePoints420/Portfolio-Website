import Features from "@/components/ui/features-grid";
import { skills } from "@/constants/skills";

const SkillSection = () => {
  return (
    <>
      <div className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10">
        <div className="max-w-7xl mx-auto  px-4 md:px-8 lg:px-10">
          <h2 className="text-lg md:text-6xl mb-10 text-black dark:text-white max-w-4xl font-primary font-bold ">
            Skills
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 px-10 max-w-7xl mx-auto font-primary ">
          {skills.map((skills, index) => (
            <Features key={skills.title} {...skills} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SkillSection;
