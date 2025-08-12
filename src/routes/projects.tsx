import ProjectCarousel from "@/components/sections/projects/project-carousel";

import { GridPattern } from "@/components/ui/grid-pattern";

import { cn } from "@/lib/utils";
import type { ProjectData } from "@/types/types";
import { getJSONData } from "@/utils/getJSONData";
import { createFileRoute } from "@tanstack/react-router";
import { LinkIcon } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/projects")({
  component: RouteComponent,
  loader: async () => {
    const response: ProjectData[] = await getJSONData(
      "/json/project-details.json"
    );

    return response;
  },
});

function RouteComponent() {
  const [isAdminSide, setIsAdminSide] = useState(false);

  const data = Route.useLoaderData();

  return (
    <>
      {data.map((item, index) => (
        <main
          className="relative overflow-hidden pt-20"
          key={index}
          id={item.projectID}
        >
          <GridPattern
            width={30}
            height={30}
            x={-1}
            y={-1}
            strokeDasharray={"4 2"}
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white)]"
            )}
          />

          <div className="flex flex-col justify-center items-center gap-5">
            <section className="z-20">
              <h1 className="text-5xl font-headers font-bold break-words text-center">
                <LinkIcon className="inline w-8 h-8 md:w-10 md:h-10 mr-3" />
                {isAdminSide && item.haveAdmin
                  ? `${item.projectTitle} (Admin)`
                  : item.projectTitle}
              </h1>
              <p className="text-center mt-4">{item.shortDescription}</p>
            </section>
            <section className="grid grid-cols-1 xl:grid-cols-3 items-center gap-5 w-[90%]">
              <ProjectCarousel
                projects={item}
                isAdminSide={isAdminSide}
                setIsAdminSide={setIsAdminSide}
              />
            </section>
          </div>
        </main>
      ))}
    </>
  );
}
