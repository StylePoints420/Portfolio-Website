import { cn } from "@/lib/utils";

interface TechStackProps {
  title: string;
  icon: React.ReactNode;
  index: number;
  hoverColor?: string;
  hoverIconColor?: string;
  hoverTitleColor?: string;
}

export const TechStack = ({
  title,
  icon,
  index,
  hoverColor = "to-transparent",
  hoverIconColor = "text-neutral-600 dark:text-neutral-400",
  hoverTitleColor = "group-hover/feature:bg-teal-500 ",
}: TechStackProps) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div
          className={`opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 ${hoverColor}  pointer-events-none `}
        />
      )}
      {index >= 4 && (
        <div
          className={`opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 ${hoverColor} pointer-events-none `}
        />
      )}
      <div className={`mb-4 relative z-10 px-10 ${hoverIconColor}`}>{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className={`absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 ${hoverTitleColor} transition-all duration-200 origin-center`}
        />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
    </div>
  );
};
