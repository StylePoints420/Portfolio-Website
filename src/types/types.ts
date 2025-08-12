export type EducationData = {
  title: string;
  description: string;
  imageName: "olrms" | "pcu" | "ncst";
  extension: ".jpg" | ".png";
  alt: string;
  link: string;
  indexNumber?: number;
  year: string;
};

export type SkillData = {
  title: string;
  group: string;
  hoverColor: string;
  hoverIconColor: string;
  hoverTitleColor: string;
};

export type ProjectData = {
  projectID: string;
  projectTitle: string;
  projectLink: string;
  shortDescription: string;
  features: {
    description: string;
    status: "done" | "pending";
  }[];
  adminFeatures: {
    description: string;
    status: "done" | "pending";
  }[];
  imageSrc: {
    src: string;
    darkSrc: string;
    alt: string;
  }[];
  adminImageSrc: {
    src: string;
    darkSrc: string;
    alt: string;
  }[];
  haveAdmin: boolean;
  haveDemo: boolean;
  videoSrc: string;
  thumbNailSrc: string;
  thumbnailAlt: string;
};

export type TechStackData = {
  id: number;
  name: string;
  Icon: React.ComponentType<React.SVGAttributes<SVGSVGElement>>;
  color: string;
}[];
