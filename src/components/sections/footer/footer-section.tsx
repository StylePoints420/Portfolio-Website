import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBrandGithub } from "@tabler/icons-react";
import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
const links = [
  {
    title: "Send me an email!",
    icon: (
      <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "mailto:joepascua360@gmail.com",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/StylePoints420",
  },
  {
    title: "LinkedIn",
    icon: (
      <FaLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "http://www.linkedin.com/in/rhod-elben-joe-pascua-26044b326",
  },
];

export default function FooterSection() {
  return (
    <div className="w-full flex justify-between sm:justify-evenly px-5 sm:px-0 items-center  font-primary">
      <div>
        <p>© 2025 Joe Pascua. All Rights Reserved.</p>
      </div>
      <div>
        <FloatingDock items={links} />
      </div>
    </div>
  );
}
