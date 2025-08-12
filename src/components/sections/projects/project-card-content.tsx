import React, { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Button } from "@/components/ui/button";
import {
  ArrowLeftCircle,
  ArrowRightCircle,
  ArrowUpRight,
  X,
} from "lucide-react";
import type { CarouselApi } from "@/components/ui/carousel";
import type { ProjectData, TechStackData } from "@/types/types";
import { Link } from "@tanstack/react-router";

interface ProjectCardContentProps {
  techStackItems: TechStackData;
  projectDetails: ProjectData;
  isAdminSide: boolean;
  setIsAdminSide: React.Dispatch<React.SetStateAction<boolean>>;
  api: CarouselApi;
  count: number;
  currentIndex: number;
}

export default function ProjectCardContent({
  techStackItems,
  projectDetails,
  isAdminSide,
  setIsAdminSide,
  api,
  currentIndex,
  count,
}: ProjectCardContentProps) {
  const { haveAdmin, features, adminFeatures } = projectDetails;

  const isLinkAvailable = projectDetails.projectLink !== "";

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl flex gap-2 items-center justify-between">
          <h2 className="font-headers">Tech Stack</h2>
          {haveAdmin && (
            <div className="flex gap-2 flex-wrap">
              <Label htmlFor="mode" className="font-primary">
                {isAdminSide && haveAdmin
                  ? "Switch to Customer Side"
                  : "Switch to Admin Side"}
              </Label>
              <Switch
                id="mode"
                checked={isAdminSide}
                onCheckedChange={(value) => setIsAdminSide(value)}
              />
            </div>
          )}
        </CardTitle>
        <CardDescription className="flex gap-5 flex-wrap justify-center">
          <AnimatedTooltip items={techStackItems} />
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 mx-2">
        <ul className="list-disc break-words">
          {(isAdminSide && haveAdmin ? adminFeatures : features).map(
            (description, index) => {
              const pendingStatus = description.status === "pending";

              return (
                <li key={index}>
                  <p
                    className={`${pendingStatus ? "line-through" : ""} inline-flex`}
                  >
                    {description.description}
                  </p>
                  {pendingStatus && (
                    <span className="text-blue-500"> - Planned</span>
                  )}
                </li>
              );
            }
          )}
        </ul>
      </CardContent>
      <CardFooter className="flex gap-2 justify-between items-center flex-wrap">
        <>
          <div className="flex gap-4 items-center flex-wrap sm:flex-nowrap">
            <Button
              variant="secondary"
              onClick={() => {
                if (api) {
                  api.scrollPrev();
                }
              }}
            >
              <ArrowLeftCircle />
              Previous
            </Button>

            <Button
              onClick={() => {
                if (api) {
                  api.scrollNext();
                }
              }}
            >
              Next <ArrowRightCircle />
            </Button>
          </div>
          <div className="flex justify-between w-full items-center flex-wrap sm:flex-nowrap">
            <div className="font-primary text-sm block sm:flex gap-4 xl:block">
              <p>
                Total Slides:{" "}
                <span className="font-bold text-teal-500">{count}</span>
              </p>
              <p>
                Current Slide:{" "}
                <span className="font-bold text-teal-500">{currentIndex}</span>
              </p>
            </div>
            {isLinkAvailable ? (
              <Link to={projectDetails.projectLink} target="blank">
                <button className="shadow-[0_0_0_1px_#000000_inset] px-5 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer font-primary disabled:hover:bg-gray-600 disabled:bg-gray-600 dark:disabled:bg-gray-600 dark:disabled:text-white disabled:text-white disabled:cursor-not-allowed inline-flex items-center justify-center gap-1">
                  Check it out!
                  <ArrowUpRight className="w-6 h-6" />
                </button>
              </Link>
            ) : (
              <button
                className="shadow-[0_0_0_1px_#000000_inset] px-5 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer font-primary disabled:hover:bg-red-600 disabled:bg-red-600 dark:disabled:bg-red-600 dark:disabled:text-white disabled:text-white disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                disabled
              >
                <X className="w-6 h-6" />
                Link Not available
              </button>
            )}
          </div>
        </>
      </CardFooter>
    </Card>
  );
}
