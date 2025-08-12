import type { EducationData, SkillData } from "@/types/types";
import { getJSONData } from "@/utils/getJSONData";
import { test, expect } from "vitest";

const baseURL = import.meta.env.VITE_BASE_URL;

test("return the correct JSON data based on the json file used", async () => {
  // education details JSON data
  expect(
    await getJSONData<Array<EducationData>>(
      `${baseURL}/json/education-details.json`
    )
  ).toStrictEqual([
    {
      title: "Our Lady Of Remedios Montessori School",
      description: "Junior High School",
      imageName: "olrms",
      extension: ".jpg",
      alt: "OLRMS Junior High School",
      link: "https://www.facebook.com/OLRMS",
      year: "2019",
    },
    {
      title: "Philippine Christian University",
      description: "Senior High School \n ICT - Computer Programming",
      imageName: "pcu",
      extension: ".jpg",
      indexNumber: 0,
      alt: "PCU Senior High School",
      link: "https://www.facebook.com/PCUDASMASHS",
      year: "2021",
    },
    {
      title: "National College Of Science And Technology",
      description: "College \n Bachelor of Science in Information Technology",
      imageName: "ncst",
      extension: ".jpg",
      alt: "NCST College",
      link: "https://www.facebook.com/NCST.OfficialPage",
      year: "August 2025",
    },
  ]);

  //   project details JSON data
  expect(
    await getJSONData<Array<EducationData>>(
      `${baseURL}/json/project-details.json`
    )
  ).toStrictEqual([
    {
      projectID: "grynWasabi",
      projectTitle: "Gryn Wasabi Sushi Bar",
      projectLink: "https://gryn-wasabi-sushi-bar-test.onrender.com",
      shortDescription: "Enterprise Resource Planning Capstone Project",
      features: [
        {
          description: "E-commerce customer website with intuitive UI/UX",
          status: "done",
        },
        {
          description: "Add to cart and user-friendly checkout experience",
          status: "done",
        },
        {
          description: "Voucher and discount system",
          status: "done",
        },
        {
          description: "Order history and live delivery tracking",
          status: "done",
        },
        {
          description: "Real-time chat support for customer tickets",
          status: "done",
        },
        {
          description: "Secure online payments with multiple payment options",
          status: "done",
        },
        {
          description: "Fast and reliable authentication system",
          status: "done",
        },
        {
          description: "Automated email notifications for order updates",
          status: "done",
        },
        {
          description: "Location-based services for enhanced user experience",
          status: "done",
        },
        {
          description: "Job postings and online applications",
          status: "done",
        },
      ],
      imageSrc: [
        {
          src: "/images/projects/gryn-wasabi/cart.png",
          darkSrc: "/images/projects/gryn-wasabi/cart.png",
          alt: "cart",
        },
        {
          src: "/images/projects/gryn-wasabi/checkout.png",
          darkSrc: "/images/projects/gryn-wasabi/checkout.png",
          alt: "checkout",
        },
        {
          src: "/images/projects/gryn-wasabi/payment-success.png",
          darkSrc: "/images/projects/gryn-wasabi/payment-success.png",
          alt: "payment success",
        },
        {
          src: "/images/projects/gryn-wasabi/track-order.png",
          darkSrc: "/images/projects/gryn-wasabi/track-order.png",
          alt: "track order",
        },
        {
          src: "/images/projects/gryn-wasabi/order-history.png",
          darkSrc: "/images/projects/gryn-wasabi/order-history.png",
          alt: "order history",
        },
        {
          src: "/images/projects/gryn-wasabi/delivery-tracking.png",
          darkSrc: "/images/projects/gryn-wasabi/delivery-tracking.png",
          alt: "delivery tracking",
        },
        {
          src: "/images/projects/gryn-wasabi/chat-history.png",
          darkSrc: "/images/projects/gryn-wasabi/chat-history.png",
          alt: "chat history",
        },
      ],

      adminFeatures: [
        {
          description: "7 ERP Modules",
          status: "done",
        },
        {
          description:
            "Role Based Access Control (RBAC) for managing employees, roles and permissions",
          status: "done",
        },
        {
          description: "Google Maps Integration for drivers",
          status: "done",
        },
        {
          description: "Action and Login Logs notifications for monitoring",
          status: "done",
        },
        {
          description:
            "Branch Sales/Expenses, Customers, Budget and Overall Summary through charts",
          status: "done",
        },
        {
          description:
            "Automated email notifications for purchase requests, order status and sensitive user actions",
          status: "done",
        },
        {
          description:
            "Approval process workflow across modules to ensure proper business process operations",
          status: "done",
        },
      ],
      adminImageSrc: [
        {
          src: "/images/projects/gryn-wasabi/admin/dashboard.png",
          darkSrc: "/images/projects/gryn-wasabi/admin/dashboard-dark.png",
          alt: "Admin Dashboard",
        },
        {
          src: "/images/projects/gryn-wasabi/admin/dashboard2.png",
          darkSrc: "/images/projects/gryn-wasabi/admin/dashboard2-dark.png",
          alt: "Admin Dashboard Bar Graph",
        },
        {
          src: "/images/projects/gryn-wasabi/admin/orders.png",
          darkSrc: "/images/projects/gryn-wasabi/admin/orders-dark.png",
          alt: "Order Management",
        },
        {
          src: "/images/projects/gryn-wasabi/admin/chat-history.png",
          darkSrc: "/images/projects/gryn-wasabi/admin/chat-history-dark.png",
          alt: "Customer Ticket Chat History",
        },
        {
          src: "/images/projects/gryn-wasabi/admin/customer-stats.png",
          darkSrc: "/images/projects/gryn-wasabi/admin/customer-stats-dark.png",
          alt: "Customer Management System Graph",
        },
        {
          src: "/images/projects/gryn-wasabi/admin/products.png",
          darkSrc: "/images/projects/gryn-wasabi/admin/products-dark.png",
          alt: "Inventory Management - Products Page",
        },
        {
          src: "/images/projects/gryn-wasabi/admin/sales-management.png",
          darkSrc:
            "/images/projects/gryn-wasabi/admin/sales-management-dark.png",
          alt: "Sales Management Graph",
        },
        {
          src: "/images/projects/gryn-wasabi/admin/payroll.png",
          darkSrc: "/images/projects/gryn-wasabi/admin/payroll-dark.png",
          alt: "Human Resource Management - Employee Payroll",
        },
      ],
      haveAdmin: true,
      haveDemo: true,
      videoSrc: "https://www.youtube.com/embed/FivfB8EGkzk?si=UJQhpaDMp0K792Aj",
      thumbNailSrc: "/images/projects/gryn-wasabi/gryn-wasabi-demo.png",
      thumbnailAlt: "Gryn Wasabi Demonstration Video",
    },
    {
      projectID: "shigotoVault",
      projectTitle: "Shigoto Vault (In Progress)",
      projectLink: "https://github.com/StylePoints420/shigoto-vault",
      shortDescription: "Job Application Tracker Side Project",
      features: [
        {
          description: "Maximum import of 5 links at once",
          status: "done",
        },
        {
          description:
            "Table functions - Pinning, hiding, sorting and searching",
          status: "done",
        },
        {
          description: "Import through Jobstreet links",
          status: "done",
        },
        {
          description: "Import through LinkedIn links",
          status: "pending",
        },
        {
          description: "Import through Excel files",
          status: "pending",
        },
        {
          description: "Visual summary of job applications through charts",
          status: "pending",
        },
        {
          description: "Company reviews",
          status: "pending",
        },
        {
          description: "Global/User filters for charts",
          status: "pending",
        },
        {
          description: "Setting interview meetings/schedules in event calendar",
          status: "pending",
        },
        {
          description:
            "Interview meetings reminder through email notifications",
          status: "pending",
        },
      ],
      imageSrc: [
        {
          src: "/images/projects/shigoto-vault/projects-route/job-applications.png",
          darkSrc:
            "/images/projects/shigoto-vault/projects-route/job-applications-dark.png",
          alt: "Job Applications Page",
        },
        {
          src: "/images/projects/shigoto-vault/projects-route/import-links.png",
          darkSrc:
            "/images/projects/shigoto-vault/projects-route/import-links-dark.png",
          alt: "Import Through Links Dialog",
        },
        {
          src: "/images/projects/shigoto-vault/projects-route/add-manual.png",
          darkSrc:
            "/images/projects/shigoto-vault/projects-route/add-manual-dark.png",
          alt: "Job Applications Page",
        },

        {
          src: "/images/projects/shigoto-vault/projects-route/add-manual-step2.png",
          darkSrc:
            "/images/projects/shigoto-vault/projects-route/add-manual-step2-dark.png",
          alt: "Job Applications Page",
        },
        {
          src: "/images/projects/shigoto-vault/projects-route/add-manual-step3.png",
          darkSrc:
            "/images/projects/shigoto-vault/projects-route/add-manual-step3-dark.png",
          alt: "Job Applications Page",
        },
      ],
      adminFeatures: [],
      adminImageSrc: [],
      haveAdmin: false,
      haveDemo: false,
      videoSrc: "",
      thumbNailSrc: "",
      thumbnailAlt: "",
    },
  ]);

  // skill details JSON data
  expect(
    await getJSONData<Array<SkillData>>(`${baseURL}/json/skill-details.json`)
  ).toStrictEqual([
    {
      title: "React",
      group: "Frontend",
      hoverColor: "to-sky-900",
      hoverIconColor:
        "group-hover/feature:text-sky-400 transition duration-200",
      hoverTitleColor: "group-hover/feature:bg-sky-400",
    },
    {
      title: "HTML5",
      group: "Frontend",
      hoverColor: "to-orange-900",
      hoverIconColor:
        "group-hover/feature:text-orange-500 transition duration-200",
      hoverTitleColor: "group-hover/feature:bg-orange-500",
    },
    {
      title: "Tailwind CSS",
      group: "Frontend",
      hoverColor: "to-sky-700",
      hoverIconColor:
        "group-hover/feature:text-sky-500 transition duration-200",
      hoverTitleColor: "group-hover/feature:bg-sky-500",
    },
    {
      title: "CSS3",
      group: "Frontend",
      hoverColor: "to-blue-900",
      hoverIconColor:
        "group-hover/feature:text-blue-500 transition duration-200",
      hoverTitleColor: "group-hover/feature:bg-blue-500",
    },
    {
      title: "Node/Express",
      group: "Backend",
      hoverColor: "to-green-900",
      hoverIconColor:
        "group-hover/feature:text-green-400 transition duration-200",
      hoverTitleColor: "group-hover/feature:bg-green-400",
    },
    {
      title: "MySQL",
      group: "Backend",
      hoverColor: "to-teal-900",
      hoverIconColor:
        "group-hover/feature:text-teal-400 transition duration-200",
      hoverTitleColor: "group-hover/feature:bg-teal-400",
    },
    {
      title: "PostgreSQL",
      group: "Backend",
      hoverColor: "to-[#336791]",
      hoverIconColor:
        "group-hover/feature:text-[#336791] transition duration-200",
      hoverTitleColor: "group-hover/feature:bg-[#336791]",
    },
    {
      title: "Firebase",
      group: "Backend",
      hoverColor: "to-amber-900",
      hoverIconColor:
        "group-hover/feature:text-amber-400 transition duration-200",
      hoverTitleColor: "group-hover/feature:bg-amber-400",
    },
    {
      title: "JavaScript",
      group: "Languages & Tools",
      hoverColor: "to-yellow-600 dark:to-yellow-500",
      hoverIconColor:
        "group-hover/feature:text-yellow-400 transition duration-200",
      hoverTitleColor: "group-hover/feature:bg-yellow-400",
    },
    {
      title: "TypeScript",
      group: "Languages & Tools",
      hoverColor: "to-[#3178C6]",
      hoverIconColor:
        "group-hover/feature:text-[#3178C6] transition duration-200",
      hoverTitleColor: "group-hover/feature:bg-[#3178C6]",
    },
    {
      title: "Git",
      group: "Languages & Tools",
      hoverColor: "to-red-900",
      hoverIconColor:
        "group-hover/feature:text-red-400 transition duration-200",
      hoverTitleColor: "group-hover/feature:bg-red-400",
    },
    {
      title: "GitHub",
      group: "Languages & Tools",
      hoverColor: "to-gray-900",
      hoverIconColor:
        "group-hover/feature:text-gray-400 transition duration-200",
      hoverTitleColor: "group-hover/feature:bg-gray-400",
    },
    {
      title: "Docker",
      group: "Languages & Tools",
      hoverColor: "to-[#0db7ed]",
      hoverIconColor:
        "group-hover/feature:text-[#0db7ed] transition duration-200",
      hoverTitleColor: "group-hover/feature:bg-[#0db7ed]",
    },

    {
      title: "Postman",
      group: "Languages & Tools",
      hoverColor: "to-yellow-800",
      hoverIconColor:
        "group-hover/feature:text-orange-400 transition duration-200",
      hoverTitleColor: "group-hover/feature:bg-orange-400",
    },
    {
      title: "Google Cloud Platform",
      group: "Languages & Tools",
      hoverColor: "to-blue-900",
      hoverIconColor:
        "group-hover/feature:text-blue-400 transition duration-200",
      hoverTitleColor: "group-hover/feature:bg-blue-400",
    },
  ]);
});
