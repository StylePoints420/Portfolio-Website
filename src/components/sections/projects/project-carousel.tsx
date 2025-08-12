import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { ImageZoom } from "@/components/ui/img-zoom";
import type { ProjectData } from "@/types/types";
import ProjectCardContent from "./project-card-content";
import { TechStackClass } from "@/constants/projects/techStackItems";
import { useTheme } from "@/themes/theme-provider";

interface ProjectCarouselProps {
  projects: ProjectData;
  isAdminSide: boolean;
  setIsAdminSide: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ProjectCarousel({
  projects,
  isAdminSide,
  setIsAdminSide,
}: ProjectCarouselProps) {
  const { haveAdmin, haveDemo, imageSrc, adminImageSrc } = projects;
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const { theme } = useTheme();

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    // listen to slide changes to get the correct slide count/current index
    api.on("slidesChanged", () => {
      const total = api.scrollSnapList().length;
      const selected = api.selectedScrollSnap();

      setCount(total);

      // If current index is greater than the slide length, reset to first slide
      if (selected >= total) {
        setCurrent(1);
      } else {
        setCurrent(selected + 1);
      }
    });
  }, [api]);

  return (
    <>
      <article className="xl:col-span-2">
        <Carousel
          orientation="vertical"
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
        >
          <CarouselContent className="h-svh">
            {haveDemo && (
              <CarouselItem key="hero-video">
                <>
                  <HeroVideoDialog
                    className="block dark:hidden"
                    animationStyle="from-center"
                    videoSrc={projects.videoSrc}
                    thumbnailSrc={projects.thumbNailSrc}
                    thumbnailAlt={projects.thumbnailAlt}
                  />
                  <HeroVideoDialog
                    className="hidden dark:block"
                    animationStyle="from-center"
                    videoSrc={projects.videoSrc}
                    thumbnailSrc={projects.thumbNailSrc}
                    thumbnailAlt={projects.thumbnailAlt}
                  />
                </>
              </CarouselItem>
            )}
            {(isAdminSide && haveAdmin ? adminImageSrc : imageSrc).map(
              (image, index) => (
                <CarouselItem key={index}>
                  <ImageZoom>
                    <img
                      src={theme === "dark" ? image.darkSrc : image.src}
                      alt={image.alt}
                      width={1920}
                      height={1080}
                      className="w-full rounded-md border shadow-lg transition-all duration-200 ease-out group-hover:brightness-[0.8]"
                    />
                  </ImageZoom>
                </CarouselItem>
              )
            )}
          </CarouselContent>
        </Carousel>
      </article>
      <article className="h-full order-first xl:order-none z-10">
        <ProjectCardContent
          count={count}
          currentIndex={current}
          projectDetails={projects}
          techStackItems={
            isAdminSide && projects.haveAdmin
              ? TechStackClass.techStackItems[`${projects.projectID}Admin`] ||
                []
              : TechStackClass.techStackItems[projects.projectID] || []
          }
          isAdminSide={isAdminSide}
          setIsAdminSide={setIsAdminSide}
          api={api}
        />
      </article>
    </>
  );
}
