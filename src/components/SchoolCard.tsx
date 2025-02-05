import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CarouselComponent from "./CarouselComponent";
import { ArrowBigRight } from "lucide-react";

interface Props {
  cardContainerClass: string;
  schoolName: string;
  gradeLevel: string;
  course: string;
  schoolImages: string[];
  schoolLink: string;
}

export function SchoolCard(props: Props) {
  return (
    <Card className={props.cardContainerClass}>
      <CardHeader>
        <CardTitle className="text-md md:text-2xl">
          {props.schoolName}
        </CardTitle>
        <CardDescription className="text-sm: md:text-xl">
          {props.gradeLevel}
          <br></br>
          {props.course}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full flex justify-center items-center gap-3">
          <CarouselComponent schoolImages={props.schoolImages} />
        </div>
      </CardContent>
      <CardFooter className="flex justify-center ">
        <a href={props.schoolLink} target="_blank">
          <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black w-48 cursor-pointer">
            View it here
            <ArrowBigRight className="inline w-6 h-6" />
          </button>
        </a>
      </CardFooter>
    </Card>
  );
}
