import { TechStack } from "@/components/sections/skills/tech-stack";
import ColourfulText from "@/components/ui/colourful-text";
import type { SkillData } from "@/types/types";
import { LinkIcon } from "lucide-react";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaNode,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiPostman } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { DiMysql, DiGoogleCloudPlatform } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";

const iconArray = [
  { title: "React", icon: <FaReact size={40} /> },
  { title: "HTML5", icon: <FaHtml5 size={40} /> },
  { title: "Tailwind CSS", icon: <RiTailwindCssFill size={40} /> },
  { title: "CSS3", icon: <FaCss3 size={40} /> },
  { title: "Node Js", icon: <FaNode size={40} /> },
  { title: "Express", icon: <SiExpress size={40} /> },
  { title: "MySQL", icon: <DiMysql size={40} /> },
  { title: "PostgreSQL", icon: <BiLogoPostgresql size={40} /> },
  { title: "Firebase", icon: <IoLogoFirebase size={40} /> },
  { title: "JavaScript", icon: <FaJs size={40} /> },
  { title: "TypeScript", icon: <BiLogoTypescript size={40} /> },
  { title: "Git", icon: <FaGitAlt size={40} /> },
  { title: "GitHub", icon: <FaGithub size={40} /> },
  { title: "Google Cloud Platform", icon: <DiGoogleCloudPlatform size={40} /> },
  { title: "Postman", icon: <SiPostman size={40} /> },
  { title: "Docker", icon: <FaDocker size={40} /> },
];

interface SkillsSectionProps {
  data: Array<SkillData> | [];
}

export default function SkillsSection({ data }: SkillsSectionProps) {
  const renderTechStack = (
    group: "Frontend" | "Backend" | "Languages & Tools" | "Database"
  ) =>
    data
      .filter((item) => item.group === group)
      .map((item, index) => {
        const matchedIcon = iconArray.find(
          (iconItem) => iconItem.title === item.title
        )?.icon;

        return (
          <TechStack
            key={item.title}
            icon={matchedIcon}
            {...item}
            index={index}
          />
        );
      });

  return (
    <div className="max-w-full md:max-w-6xl mx-auto px-4 md:px-8 lg:px-10 py-20 space-y-20">
      <h2 className="text-5xl md:text-7xl text-primary max-w-4xl font-headers font-bold">
        <LinkIcon className="inline w-8 h-8 md:w-13 md:h-13 mr-3" />
        Skills
      </h2>
      <article className="space-y-3">
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 flex justify-center">
          <h2 className="text-4xl md:text-6xl text-primary max-w-4xl font-primary font-bold ">
            <ColourfulText text="Frontend" />
          </h2>
        </section>
        <section className="grid justify-items-stretch md:justify-items-normal grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  relative z-10 px-10 max-w-7xl  font-primary ">
          {renderTechStack("Frontend")}
        </section>
      </article>

      <article className="space-y-3">
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 flex justify-center">
          <h2 className="text-4xl md:text-6xl text-primary max-w-4xl font-primary font-bold ">
            <ColourfulText text="Backend" />
          </h2>
        </section>
        <section className="grid justify-items-stretch md:justify-items-normal grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  relative z-10 px-10 max-w-7xl  font-primary ">
          {renderTechStack("Backend")}
        </section>
      </article>

      <article className="space-y-3">
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 flex justify-center">
          <h2 className="text-4xl md:text-6xl text-primary max-w-4xl font-primary font-bold ">
            <ColourfulText text="Database" />
          </h2>
        </section>
        <section className="grid justify-items-stretch md:justify-items-normal grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  relative z-10 px-10 max-w-7xl  font-primary ">
          {renderTechStack("Database")}
        </section>
      </article>

      <article className="space-y-3">
        <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 flex justify-center">
          <h2 className="text-4xl md:text-6xl text-primary max-w-4xl font-primary font-bold ">
            <ColourfulText text="Languages & Tools" />
          </h2>
        </section>
        <section className="grid justify-items-stretch md:justify-items-normal grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  relative z-10 px-10 max-w-7xl  font-primary ">
          {renderTechStack("Languages & Tools")}
        </section>
      </article>
    </div>
  );
}
