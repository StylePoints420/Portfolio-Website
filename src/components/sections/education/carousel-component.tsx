import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import type { EducationData } from "@/types/types";
import { imagePathArray } from "@/utils/imagePathArray";
import { ImageZoom } from "@/components/ui/img-zoom";

interface CarouselComponentProps {
  item: EducationData;
}

export default function CarouselComponent({ item }: CarouselComponentProps) {
  const imgArr = imagePathArray(
    item.imageName,
    item.extension,
    item.indexNumber !== undefined ? item.indexNumber : undefined
  );

  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {imgArr.map((imgSrc, index) => {
          return (
            <CarouselItem key={index}>
              <div className="p-0">
                <Card>
                  <ImageZoom>
                    <CardContent className="flex aspect-square items-center justify-center">
                      <img src={imgSrc} alt={item.alt} className="size-full" />
                    </CardContent>
                  </ImageZoom>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:flex left-48 -top-[-29rem] bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600" />
      <CarouselNext className="hidden lg:flex right-48 -top-[-29rem] bg-teal-500 hover:bg-teal-500 dark:bg-teal-600 dark:hover:bg-teal-600" />
    </Carousel>
  );
}
