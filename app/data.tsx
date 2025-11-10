import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaAngular } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import { SiNestjs } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";

export const titleList = [
  "FRONTEND DEVELOPER",
  "REACT DEVELOPER",
  "REACT NATIVE DEVELOPER",
  "NEXT.JS DEVELOPER",
  "NESTJS DEVELOPER",
  ".NET DEVELOPER",
  "UI/UX DESIGNER",
];

export const skills = [
  { id: 1, icon: <FaReact className="text-4xl sm:text-6xl" />, label: "React" },
  {
    id: 2,
    icon: <FaReact className="text-4xl sm:text-6xl" />,
    label: "React Native",
  },
  {
    id: 3,
    icon: <RiNextjsFill className="text-4xl sm:text-6xl" />,
    label: "Next.js",
  },
  {
    id: 4,
    icon: <RiTailwindCssFill className="text-4xl sm:text-6xl" />,
    label: "Tailwind CSS",
  },
  {
    id: 5,
    icon: <FaAngular className="text-4xl sm:text-6xl" />,
    label: "Angular",
  },
  {
    id: 6,
    icon: <SiNestjs className="text-4xl sm:text-6xl" />,
    label: "Nest.js",
  },
  {
    id: 7,
    icon: <AiOutlineDotNet className="text-4xl sm:text-6xl" />,
    label: ".NET",
  },
  {
    id: 8,
    icon: <FaBootstrap className="text-4xl sm:text-6xl" />,
    label: "Bootstrap",
  },
  { id: 9, icon: <FaSass className="text-4xl sm:text-6xl" />, label: "Sass" },
  { id: 10, icon: <FaHtml5 className="text-4xl sm:text-6xl" />, label: "HTML" },
  { id: 11, icon: <FaCss3 className="text-4xl sm:text-6xl" />, label: "CSS" },
  {
    id: 12,
    icon: <FaJs className="text-4xl sm:text-6xl" />,
    label: "JavaScript",
  },
  {
    id: 13,
    icon: <FaFigma className="text-4xl sm:text-6xl" />,
    label: "Figma",
  },
];

export const projects = [
  {
    id: 1,
    title: "Trinity-one AI (Sparktech Agency)",
    tech: "Expo React Native, TailwindCSS, Redux Toolkit",
    description: `Refactored the Mobile Frontend and Integrated RESTful APIs of an existing project designed to support
personal development and continuous learning for an overseas client with Authentication, Stripe payment for
subscription, Viewing and Creating tasks. Used RTK-Query for API communication State and Data Management using Redux-Toolkit, Async Storage and Expo Secure-Storage {\n}
Chatbot API Integrated, Audio recorder and player created for voice notes using Expo-Audio`,
    repo: "",
    video: "",
  },
  {
    id: 2,
    title: "AirShip Send (Sparktech Agency)",
    tech: "Expo React Native, TailwindCSS, Redux Toolkit",
    description: `Developed the Mobile Frontend a Pathao-like application for an overseas client which provides multiple
services- Food Delivery, Shopping, Errands, Pickup and Delivery, Ride sharing with On-boarding, Auth, Cart and 
Order Management. Used TWRNC for styling with tailwindCSS. State and Data Management using Redux-Toolkit and Async Storage. Used community UI libraries such as Reanimated Carousel, Slider, Picker-Select, OTP-Entry`,
    repo: "",
    video:
      "https://drive.google.com/file/d/1QzkalAiSI3j8JxxFa19w2cb-0cx4qALw/view",
  },
  {
    id: 3,
    title: "ManageResto (ThreeSquare)",
    tech: "Angular, Bootstrap, SASS, .Net Core, Postgres",
    description: `A Multi tenant POS application where you can register orders, customize, put on hold, make payment. A terminal Dashboard to have a clear picture on on-going orders and an overall summary. An admin section to make changes in the menu items, categories, variations etc.`,
    repo: "",
    video: "",
  },
  {
    id: 4,
    title: "Quest Around",
    tech: "Expo React Native, NestJS, Postgres (work in process)",
    description: `A Map application (in development) using React Native Maps, featuring an original UI inspired by Deshi culture with a gaming vibe. Its goal is to connect neighborhood communities, enabling people to communicate, share needs, and offer services. This long-standing vision will expand in the future with money exchange and paid event features.`,
    repo: "",
    video: "",
  },
  {
    id: 5,
    title: "Portfolio Website",
    tech: "Nextjs, Tailwind CSS",
    description: `Frontend Web Application using Nextjs with a modern complete original look, showcasing my career, experience
 and projects.`,
    repo: "https://github.com/RafidRisun/Portfolio-Website",
    video: "",
  },
  {
    id: 6,
    title: "Doctor Appointment Management System",
    tech: "Nextjs, Tailwind CSS, Axios",
    description: `An advanced, full-stack web application for managing doctor appointments, built with Next.js, TypeScript, Tailwind CSS, and Axios. This system provides seamless experiences for both patients and doctors, including authentication, dashboards, appointment booking, notifications, and more.`,
    repo: "https://github.com/RafidRisun/Doctor-Appointment-Management-System-HISHABEE",
    video: "",
  },
];

export const experiences = [
  {
    id: 1,
    company: "Sparktech Agency -- Betopia Group",
    role: "React Native Developer",
    period: "September 2025 - Present",
  },
  {
    id: 2,
    company: "ThreeSquare",
    role: "Software Developer Intern",
    period: "June 2025 - August 2025",
  },
  {
    id: 3,
    company: "Aronnyo Jon",
    role: "Illustrator of the company released comic book Shoronkholar Golpo",
    period: "February 2024 - August 2024",
  },
];
