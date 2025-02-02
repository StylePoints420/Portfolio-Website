import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";

interface Props {
  schoolImages: string[];
}

const CarouselComponent = (props: Props) => {
  return (
    <Carousel className="w-[450px]">
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
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
};

export default CarouselComponent;
