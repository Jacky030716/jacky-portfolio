import {
  ai,
  backend,
  cloud,
  frontend,
  project1Logo,
  project2Logo,
  project3Logo,
} from "../../public/assets";
import {
  RiNextjsFill as Nextjs,
  RiTailwindCssFill as Tailwind,
  RiGeminiFill as Gemini,
  RiFileExcel2Fill as Excel,
  RiJavaFill,
  RiReactjsFill,
} from "react-icons/ri";

import { BiLogoPostgresql as PostgreSql } from "react-icons/bi";
import {
  SiTypescript as Typescript,
  SiReactquery as ReactQuery,
  SiUpstash as Upstash,
  SiTrpc as Trpc,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiGit,
  SiAmazon,
  SiPrisma,
  SiNodedotjs,
  SiDotnet,
  SiNextdotjs,
  SiVuedotjs,
  SiSpringboot,
  SiThreedotjs,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

export const services = [
  {
    id: "service-1",
    title: "Frontend Development",
    icon: frontend,
  },
  {
    id: "service-2",
    title: "Backend Development",
    icon: backend,
  },
  {
    id: "service-3",
    title: "Cloud Services & DevOps",
    icon: cloud,
  },
  {
    id: "service-4",
    title: "AI & Machine Learning",
    icon: ai,
  },
];

export const myProjects = [
  {
    title: "Youngtube - Youtube Clone",
    // desc: "Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.",
    desc: "A online video platform that allows users to upload their videos, manage their channel, and engage with their audience. It also provides AI-functionality to generate title and description based on the video transcript. The videos are stored remotely in mux.",
    href: "https://youngtube.vercel.app/",
    texture: "/textures/project/youngtube.png",
    logo: project1Logo,
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        name: "Next.js",
        icon: Nextjs,
        fill: "#ffffff",
      },
      {
        name: "Upstash",
        icon: Upstash,
        fill: "#00E9A3",
      },
      {
        name: "Gemini",
        icon: Gemini,
        fill: "#4796E3",
      },
      {
        name: "Trpc",
        icon: Trpc,
        fill: "#3E90CE",
      },
      {
        name: "PostgreSQL",
        icon: PostgreSql,
        fill: "#336791",
      },
    ],
  },
  {
    title: "Moneymom - Finance Tracker",
    desc: "A finance tracker that allows users to track their income, expenses, and savings. It also provides a budgeting feature that helps users to manage their finances effectively. It also provides visualized charts to help users understand their financial status. Next, it allows users to import csv files to track their budget easily.",
    href: "https://moneymom.vercel.app/",
    texture: "/textures/project/moneymom.png",
    logo: project2Logo,
    logoStyle: {
      backgroundColor: "#0D47A1",
      border: "0.2px solid #1976D2",
      boxShadow: "0px 0px 60px 0px #42A5F54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        name: "Next.js",
        icon: Nextjs,
        fill: "#ffffff",
      },
      {
        name: "React Query",
        icon: ReactQuery,
        fill: "#FF4859",
      },
      {
        name: "TypeScript",
        icon: Typescript,
        fill: "#007ACC",
      },
      {
        name: "Excel",
        icon: Excel,
        fill: "#1d6f42",
      },
    ],
  },
  {
    title: "Nilingo - Language Learning Platform",
    desc: "A language learning platform that allows users to learn new languages through interactive lessons, quizzes, and games. The platform also provides a progress tracker that helps users to track their learning progress. It comes with some gamification features to make learning fun and engaging.",
    href: "https://nilingo.vercel.app/",
    texture: "/textures/project/nilingo.png",
    logo: project3Logo,
    logoStyle: {
      backgroundColor: "#007E33",
      border: "0.2px solid #00C851",
      boxShadow: "0px 0px 60px 0px #33D9B24D",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        name: "Next.js",
        icon: Nextjs,
        fill: "#ffffff",
      },
      {
        name: "TypeScript",
        icon: Typescript,
        fill: "#007ACC",
      },
      {
        name: "Tailwind CSS",
        icon: Tailwind,
        fill: "#38B2AC",
      },
      {
        name: "Gemini",
        icon: Gemini,
        fill: "#4796E3",
      },
    ],
  },
];

export const categories = [
  {
    name: "FRONTEND",
    color: "#6366f1",
    position: {
      desktop: [-8.5, 10, 1],
      tablet: [-6.5, 6.5, 1],
      mobile: [-4, 4.5, 1],
    },
    items: [
      {
        name: "React",
        icon: RiReactjsFill,
        color: "#61dafb",
        position: {
          desktop: [-3, 1.25, 0],
          tablet: [-3.25, 2.2, 0],
          mobile: [-2.3, 1.8, 0],
        },
      },
      {
        name: "TypeScript",
        icon: Typescript,
        color: "#3178c6",
        position: {
          desktop: [-8.5, 3.5, 0],
          tablet: [-6.5, 3, 0],
          mobile: [-5.2, 2, 0],
        },
      },
      {
        name: "ThreeJS",
        icon: SiThreedotjs,
        color: "#ffffff",
        position: {
          desktop: [-10.25, 1.5, 0],
          tablet: [-8, 1.2, 0],
          mobile: [-6, 0.8, 0],
        },
      },
      {
        name: "VueJs",
        icon: SiVuedotjs,
        color: "#41b883",
        position: {
          desktop: [-3, 3.5, 0],
          tablet: [-1.5, 2.7, 0],
          mobile: [-1, 2.3, 0],
        },
      },
      {
        name: "Tailwind",
        icon: Tailwind,
        color: "#7952b3",
        position: {
          desktop: [-6, 2, 0],
          tablet: [-5, 1.2, 0],
          mobile: [-3.5, 1, 0],
        },
      },
      {
        name: "NextJS",
        icon: SiNextdotjs,
        color: "#ffffff",
        position: {
          desktop: [-6, 5, 0],
          tablet: [-4.4, 4.2, 0],
          mobile: [-3.6, 2.8, 0],
        },
      },
      {
        name: "React Native",
        icon: TbBrandReactNative,
        color: "#61dbfb",
        position: {
          desktop: [-2.5, 5.75, 0],
          tablet: [-2, 5, 0],
          mobile: [-2, 3.3, 0],
        },
      },
    ],
  },
  {
    name: "BACKEND",
    color: "#22c55e",
    position: {
      desktop: [8.5, 10, 1],
      tablet: [6.5, 6.5, 1],
      mobile: [4, 4.5, 1],
    },
    items: [
      {
        name: "NodeJS",
        icon: SiNodedotjs,
        color: "#68a063",
        position: {
          desktop: [6, 2, 0],
          tablet: [7, 3, 0],
          mobile: [3, 1, 0],
        },
      },
      {
        name: "Java",
        icon: RiJavaFill,
        color: "#007396",
        position: {
          desktop: [8, 4, 0],
          tablet: [5, 2, 0],
          mobile: [4, 2, 0],
        },
      },
      {
        name: "Spring Boot",
        icon: SiSpringboot,
        color: "#6db33f",
        position: {
          desktop: [5, 5.25, 0],
          tablet: [5, 4, 0],
          mobile: [2.5, 2.8, 0],
        },
      },
      {
        name: "ASP.Net",
        icon: SiDotnet,
        color: "#512bd4",
        position: {
          desktop: [3.5, 3.5, 0],
          tablet: [3, 3, 0],
          mobile: [1.5, 1.8, 0],
        },
      },
    ],
  },
  {
    name: "DATABASES",
    color: "#ef4444",
    position: {
      desktop: [-8.5, -6, 1],
      tablet: [-6.5, -6.5, 1],
      mobile: [-4, -4.5, 1],
    },
    items: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "#4db33d",
        position: {
          desktop: [-5.75, -2, 0],
          tablet: [-4.5, -1.25, 0],
          mobile: [-3, -1, 0],
        },
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#00758f",
        position: {
          desktop: [-8.5, -3.5, 0],
          tablet: [-6.5, -2.5, 0],
          mobile: [-4.5, -1.5, 0],
        },
      },
      {
        name: "Prisma",
        icon: SiPrisma,
        color: "#ffffff",
        position: {
          desktop: [-5.5, -5, 0],
          tablet: [-4.5, -4, 0],
          mobile: [-3, -2.5, 0],
        },
      },
      {
        name: "PostgreSQL",
        icon: PostgreSql,
        color: "#336791",
        position: {
          desktop: [-3, -3.35, 0],
          tablet: [-2.5, -2.5, 0],
          mobile: [-1.5, -1.8, 0],
        },
      },
    ],
  },
  {
    name: "DEVOPS & TOOLS",
    color: "#06b6d4",
    position: {
      desktop: [8.5, -6, 1],
      tablet: [6, -6.5, 1],
      mobile: [4, -4.5, 1],
    },
    items: [
      {
        name: "GitHub",
        icon: SiGithub,
        color: "#ffffff",
        position: {
          desktop: [6, -1.5, 0],
          tablet: [5, -1, 0],
          mobile: [2.3, -1.3, 0],
        },
      },
      {
        name: "Git",
        icon: SiGit,
        color: "#f05032",
        position: {
          desktop: [7, -4, 0],
          tablet: [6, -3.5, 0],
          mobile: [1.5, -2.8, 0],
        },
      },
      {
        name: "AWS",
        icon: SiAmazon,
        color: "#ff9900",
        position: {
          desktop: [9, -2, 0],
          tablet: [8, -1.5, 0],
          mobile: [3.8, -2.2, 0],
        },
      },
    ],
  },
];
