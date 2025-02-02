import { Hero } from "./components/Hero";
import { SchoolCard } from "./components/SchoolCard";
import { Timeline } from "@/components/ui/timeline";
import useScreenSize from "./hooks/useScreenSize";

const schools = ["National College Of Science And Technology"];

import ncst1 from "./images/ncst1.jpg";
import ncst2 from "./images/ncst2.jpg";
import ncst3 from "./images/ncst3.jpg";

function App() {
  const isMobile = useScreenSize();

  const ncstArray = [ncst3, ncst1, ncst2];

  const data = [
    {
      title: "2025",
      content: (
        <div>
          <SchoolCard
            cardContainerClass="w-[250px] sm:w-[550px] font-primary h-full lg:h-[41rem]"
            course={"Bachelor of Science in Information Technology"}
            schoolName={schools[0]}
            schoolImages={ncstArray}
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <Hero />
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </>
  );
}

export default App;
