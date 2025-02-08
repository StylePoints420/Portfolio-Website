import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaNode,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { DiMysql } from "react-icons/di";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { SiPostman } from "react-icons/si";

const frontend = [
  // frontend
  {
    title: "React JS",
    description: "The library for web and native user interfaces.",
    icon: <FaReact size={40} />,
    hoverColor: "to-sky-900",
    hoverIconColor: "group-hover/feature:text-sky-400 transition duration-200",
    hoverTitleColor: "group-hover/feature:bg-sky-400",
  },
  {
    title: "HTML5",
    description: "The standard markup language for Web pages.",
    icon: <FaHtml5 size={40} />,
    hoverColor: "to-orange-900",
    hoverIconColor:
      "group-hover/feature:text-orange-500 transition duration-200",
    hoverTitleColor: "group-hover/feature:bg-orange-500",
  },
  {
    title: "CSS3",
    description:
      "The stylesheet language used to apply styling to HTML content.",
    icon: <FaCss3 size={40} />,
    hoverColor: "to-blue-900",
    hoverIconColor: "group-hover/feature:text-blue-500 transition duration-200",
    hoverTitleColor: "group-hover/feature:bg-blue-500",
  },
  {
    title: "Javascript",
    description: "The scripting language that makes web pages interactive.",
    icon: <FaJs size={40} />,
    hoverColor: "to-yellow-600 dark:to-yellow-500",
    hoverIconColor:
      "group-hover/feature:text-yellow-400 transition duration-200",
    hoverTitleColor: "group-hover/feature:bg-yellow-400",
  },
];

const backend = [
  // backend
  {
    title: "Express JS",
    description: "The web application framework for Node JS",
    icon: <SiExpress size={40} />,
    hoverColor: "to-gray-800",
    hoverIconColor: "group-hover/feature:text-gray-400 transition duration-200",
    hoverTitleColor: "group-hover/feature:bg-gray-400",
  },
  {
    title: "Node JS",
    description:
      "The runtime environment for Javascript used to build scalable server-side applications.",
    icon: <FaNode size={40} />,
    hoverColor: "to-green-900",
    hoverIconColor:
      "group-hover/feature:text-green-400 transition duration-200",
    hoverTitleColor: "group-hover/feature:bg-green-400",
  },
  {
    title: "MySQL",
    description:
      "The open source relational database management system used to store and manage data.",
    icon: <DiMysql size={40} />,
    hoverColor: "to-teal-900",
    hoverIconColor: "group-hover/feature:text-teal-400 transition duration-200",
    hoverTitleColor: "group-hover/feature:bg-teal-400",
  },
  {
    title: "Firebase",
    description:
      "The cloud-based development tool for mobile and web applications.",
    icon: <IoLogoFirebase size={40} />,
    hoverColor: "to-amber-900",
    hoverIconColor:
      "group-hover/feature:text-amber-400 transition duration-200",
    hoverTitleColor: "group-hover/feature:bg-amber-400",
  },
];

const tools = [
  // tools
  {
    title: "Git",
    description:
      "The distributed version control system that tracks versions of files.",
    icon: <FaGitAlt size={40} />,
    hoverColor: "to-red-900",
    hoverIconColor: "group-hover/feature:text-red-400 transition duration-200",
    hoverTitleColor: "group-hover/feature:bg-red-400",
  },
  {
    title: "Github",
    description:
      "The cloud-based platform that can store and share code in a repository.",
    icon: <FaGithub size={40} />,
    hoverColor: "to-gray-900",
    hoverIconColor: "group-hover/feature:text-gray-400 transition duration-200",
    hoverTitleColor: "group-hover/feature:bg-gray-400",
  },
  {
    title: "Google Cloud Platform",
    description:
      "The suite of cloud computing services that provides a series of modular cloud services.",
    icon: <DiGoogleCloudPlatform size={40} />,
    hoverColor: "to-blue-900",
    hoverIconColor: "group-hover/feature:text-blue-400 transition duration-200",
    hoverTitleColor: "group-hover/feature:bg-blue-400",
  },
  {
    title: "Postman",
    description: "The API platform for building and using APIs.",
    icon: <SiPostman size={40} />,
    hoverColor: "to-yellow-800",
    hoverIconColor:
      "group-hover/feature:text-orange-400 transition duration-200",
    hoverTitleColor: "group-hover/feature:bg-orange-400",
  },
];

export { frontend, backend, tools };
