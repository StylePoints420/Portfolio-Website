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

export const skills = [
  // frontend
  {
    title: "React JS",
    description: "The library for web and native user interfaces.",
    icon: <FaReact size={40} />,
  },
  {
    title: "HTML5",
    description: "The standard markup language for Web pages.",
    icon: <FaHtml5 size={40} />,
  },
  {
    title: "CSS3",
    description:
      "The stylesheet language used to apply styling to HTML content.",
    icon: <FaCss3 size={40} />,
  },
  {
    title: "Javascript",
    description: "The scripting language that makes web pages interactive.",
    icon: <FaJs size={40} />,
  },
  // backend

  {
    title: "Express JS",
    description: "The web application framework for Node JS",
    icon: <SiExpress size={40} />,
  },
  {
    title: "Node JS",
    description:
      "The runtime environment for Javascript used to build scalable server-side applications.",
    icon: <FaNode size={40} />,
  },
  {
    title: "MySQL",
    description:
      "The open source relational database management system used to store and manage data.",
    icon: <DiMysql size={40} />,
  },
  {
    title: "Firebase",
    description:
      "The cloud-based development tool for mobile and web applications.",
    icon: <IoLogoFirebase size={40} />,
  },
  // Tools
  {
    title: "Git",
    description:
      "The distributed version control system that tracks versions of files.",
    icon: <FaGitAlt size={40} />,
  },
  {
    title: "Github",
    description:
      "The cloud-based platform that can store and share code in a repository.",
    icon: <FaGithub size={40} />,
  },
  {
    title: "Google Cloud Platform",
    description:
      "The suite of cloud computing services that provides a series of modular cloud services.",
    icon: <DiGoogleCloudPlatform size={40} />,
  },
  {
    title: "Postman",
    description: "The API platform for building and using APIs.",
    icon: <SiPostman size={40} />,
  },
];
