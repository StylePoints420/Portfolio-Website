import React from "react";
import { cn } from "@/lib/utils";

interface ChildrenProp {
  children: React.ReactElement;
  cardDetails: {
    title: string;
    description: string;
  };
}

export default function EducationCard({ children, cardDetails }: ChildrenProp) {
  return (
    <Card>
      <CardTitle className="font-headers text-lg md:text-2xl">
        {cardDetails.title}
      </CardTitle>
      <CardDescription className="whitespace-pre-line font-primary text-base md:text-lg max-w-full ">
        {cardDetails.description}
      </CardDescription>
      <CardSkeletonContainer className="h-[30rem] md:h-full w-full flex justify-center items-center gap-3 pt-4">
        {children}
      </CardSkeletonContainer>
    </Card>
  );
}

const Skeleton = ({ children }: ChildrenProp) => {
  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row shrink-0 justify-center items-center gap-2">
        {children}
      </div>
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm md:max-w-[400px] lg:max-w-[550px] h-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-gray-800 dark:text-white",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div className={cn("h-[15rem] md:h-[20rem] rounded-xl z-40", className)}>
      {children}
    </div>
  );
};
