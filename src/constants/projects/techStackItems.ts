import type { TechStackData } from "@/types/types";
import { FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiPostgresql,
  SiReactquery,
  SiReactrouter,
  SiTypescript,
} from "react-icons/si";

class TechStackClass {
  public static techStackItems: {
    [key: string]: TechStackData;
  } = {
    grynWasabi: [
      {
        id: 1,
        name: "HTML",
        Icon: FaHtml5,
        color: "text-orange-500",
      },
      {
        id: 2,
        name: "Tailwind CSS",
        Icon: RiTailwindCssFill,
        color: "text-blue-500",
      },
      {
        id: 3,
        name: "Javascript",
        Icon: IoLogoJavascript,
        color: "text-yellow-500",
      },
      {
        id: 4,
        name: "Node/Express Js",
        Icon: SiExpress,
        color: "text-brown-500",
      },
      {
        id: 5,
        name: "Firebase",
        Icon: IoLogoFirebase,
        color: "text-orange-500",
      },
    ],
    grynWasabiAdmin: [
      {
        id: 1,
        name: "React Js",
        Icon: FaReact,
        color: "text-blue-400",
      },
      {
        id: 2,
        name: "Tailwind CSS",
        Icon: RiTailwindCssFill,
        color: "text-blue-500",
      },
      {
        id: 3,
        name: "Javascript",
        Icon: IoLogoJavascript,
        color: "text-yellow-500",
      },
      {
        id: 4,
        name: "Node/Express Js",
        Icon: SiExpress,
        color: "text-brown-500",
      },
      {
        id: 5,
        name: "Firebase",
        Icon: IoLogoFirebase,
        color: "text-orange-500",
      },
    ],
    shigotoVault: [
      {
        id: 1,
        name: "React Typescript",
        Icon: FaReact,
        color: "text-blue-400",
      },
      {
        id: 2,
        name: "Tailwind CSS",
        Icon: RiTailwindCssFill,
        color: "text-blue-500",
      },
      {
        id: 3,
        name: "Typescript",
        Icon: SiTypescript,
        color: "text-blue-500",
      },
      {
        id: 4,
        name: "Node/Express Ts",
        Icon: SiExpress,
        color: "text-brown-500",
      },
      {
        id: 5,
        name: "PostgreSQL",
        Icon: SiPostgresql,
        color: "text-blue-400",
      },
      {
        id: 6,
        name: "Tanstack Query",
        Icon: SiReactquery,
        color: "text-rose-500",
      },
      {
        id: 7,
        name: "React Router",
        Icon: SiReactrouter,
        color: "text-red-600",
      },
    ],
  };
}

export { TechStackClass };
