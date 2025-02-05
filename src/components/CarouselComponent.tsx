import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import AutoScroll from "embla-carousel-auto-scroll";
import useScreenSize from "@/hooks/useScreenSize";

interface Props {
  schoolImages: string[];
}

const CarouselComponent = (props: Props) => {
  const isSmallScreen = useScreenSize({ customWidth: 639 });

  return (
    <Carousel
      className="w-[450px]"
      plugins={isSmallScreen ? [AutoScroll({ speed: 1 })] : undefined}
    >
      <CarouselContent>
        {props.schoolImages.map((img, index) => (
          <CarouselItem key={index}>
            <div>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center">
                  <div className="flex justify-center items-center aspect-square">
                    <img
                      src={img}
                      alt="ncst"
                      className="w-[400px] h-full flex"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {isSmallScreen ? null : (
        <>
          <CarouselNext />
          <CarouselPrevious />
        </>
      )}
    </Carousel>
  );
};

export default CarouselComponent;
