import EducationCard from "@/components/sections/education/education-card";
import { Timeline } from "@/components/ui/timeline";
import { createFileRoute } from "@tanstack/react-router";

import type { EducationData, SkillData } from "@/types/types";
import { ArrowBigRight, LinkIcon } from "lucide-react";
import CarouselComponent from "@/components/sections/education/carousel-component";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import Hero from "@/components/sections/home/hero";
import ExperienceSection from "@/components/sections/experience/experience-section";
import { getJSONData } from "@/utils/getJSONData";
import SkillsSection from "@/components/sections/skills/skills-section";
import ProjectSection from "@/components/sections/projects/project-section";
import { DotPattern } from "@/components/ui/dot-pattern";
import FooterSection from "@/components/sections/footer/footer-section";
import ScrollToTopButton from "@/components/scroll-to-top-button";

const getEducationData = async () => {
  const educationResult: EducationData[] = await getJSONData(
    "/json/education-details.json"
  );

  const skillResult: SkillData[] = await getJSONData(
    "/json/skill-details.json"
  );

  return { educationResult, skillResult };
};

export const Route = createFileRoute("/")({
  component: App,
  loader: async () => await getEducationData(),
});

function App() {
  const { educationResult, skillResult } = Route.useLoaderData();

  const data = educationResult.map((item, index) => {
    return {
      title: item.year,
      content: (
        <div key={item.title}>
          <EducationCard
            cardDetails={{
              description: item.description,
              title: item.title,
            }}
          >
            <div className="flex flex-col items-center gap-5">
              <CarouselComponent item={item} />
              <div>
                <a href={item.link} target="_blank">
                  <button className="shadow-[0_0_0_1px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black w-48 cursor-pointer font-primary">
                    View the page
                    <ArrowBigRight className="inline w-6 h-6" />
                  </button>
                </a>
              </div>
            </div>
          </EducationCard>
        </div>
      ),
    };
  });

  return (
    <>
      <div className="relative">
        <ScrollToTopButton />

        <section id="home">
          <Hero />
        </section>

        <section id="experience" className="h-svh bg-gray-200 dark:bg-gray-600">
          <ExperienceSection />
        </section>
        <section
          id="education"
          className="relative flex flex-col size-full items-center justify-center overflow-hidden border-y-0 border bg-background"
        >
          <GridPattern
            width={20}
            height={20}
            x={-1}
            y={-1}
            className={cn(
              "[mask-image:linear-gradient(to_bottom_right,white,transparent)] "
            )}
          />
          <Timeline data={data} />
        </section>
        <section id="skills" className="h-full ">
          <SkillsSection data={skillResult} />
        </section>
        <section
          id="projects"
          className="relative border-y-0 border bg-background mb-10"
        >
          <DotPattern
            width={20}
            height={20}
            x={-1}
            y={-1}
            className={cn(
              "[mask-image:linear-gradient(to_bottom_right,white,transparent)]"
            )}
          />
          <div className="max-w-7xl mx-auto pt-20 pb-10 px-4 md:px-8 lg:px-10">
            <h2 className="text-5xl md:text-7xl text-primary max-w-4xl font-headers font-bold">
              <LinkIcon className="inline w-8 h-8 md:w-13 md:h-13 mr-3" />
              Projects
            </h2>
          </div>

          <ProjectSection />
        </section>
        <section>
          <FooterSection />
        </section>
      </div>
    </>
  );
}
