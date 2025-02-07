const schools = [
  "National College Of Science And Technology",
  "Philippine Christian University",
  "Our Lady of Remedios Montessori School",
];

import ncst1 from "../images/ncst1.jpg";
import ncst2 from "../images/ncst2.jpg";
import ncst3 from "../images/ncst3.jpg";

import pcu1 from "../images/pcu1.jpg";
import pcu2 from "../images/pcu2.jpg";
import pcu3 from "../images/pcu3.png";

import olrms1 from "../images/olrms1.jpg";
import olrms2 from "../images/olrms2.jpg";
import olrms3 from "../images/olrms3.jpg";

import { Timeline } from "@/components/ui/timeline";
import { SchoolCard } from "./SchoolCard";

const TimelineComponent = () => {
  const schoolPictures = {
    ncst: [ncst3, ncst1, ncst2],
    pcu: [pcu3, pcu1, pcu2],
    olrms: [olrms1, olrms2, olrms3],
  };

  const data = [
    {
      title: "2019",
      content: (
        <div>
          <SchoolCard
            cardContainerClass="w-[250px] sm:w-[550px] font-primary h-full lg:h-[41rem]"
            gradeLevel="Junior High School"
            course={""}
            schoolName={schools[2]}
            schoolImages={schoolPictures.olrms}
            schoolLink="https://www.facebook.com/OLRMS"
          />
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <SchoolCard
            cardContainerClass="w-[250px] sm:w-[550px] font-primary h-full lg:h-[43rem]"
            gradeLevel="Senior High School"
            course={"ICT - Computer Programming"}
            schoolName={schools[1]}
            schoolImages={schoolPictures.pcu}
            schoolLink="https://www.facebook.com/PCUDASMASHS"
          />
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <SchoolCard
            cardContainerClass="w-[250px] sm:w-[550px] font-primary h-full lg:h-[43rem]"
            gradeLevel="College"
            course={"Bachelor of Science in Information Technology"}
            schoolName={schools[0]}
            schoolImages={schoolPictures.ncst}
            schoolLink="https://www.facebook.com/NCST.OfficialPage"
          />
        </div>
      ),
    },
  ];

  return <Timeline data={data} />;
};

export default TimelineComponent;
