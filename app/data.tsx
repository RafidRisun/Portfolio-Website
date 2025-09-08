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
  "WEB DEVELOPER",
  "DESIGNER",
  "UI/UX ENTHUSIAST",
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
    title: "Quest Around",
    tech: "Expo React Native, NestJS, Postgres (work in process)",
    description: `A Map application (in development) using React Native Maps, featuring an original UI inspired by Deshi culture with a gaming vibe. Its goal is to connect neighborhood communities, enabling people to communicate, share needs, and offer services. This long-standing vision will expand in the future with money exchange and paid event features.`,
    link: "https://github.com/RafidRisun/QuestAround-ReactNative",
  },
  {
    id: 2,
    title: "ManageResto (ThreeSquare)",
    tech: "Angular, Bootstrap, .Net Core, Postgres",
    description: `A Multi tenant POS application where you can register orders, customize, put on hold, make payment. A terminal Dashboard to have a clear picture on on-going orders and an overall summary. An admin section to make changes in the menu items, categories, variations etc.`,
    link: "",
  },
  {
    id: 3,
    title: "Doctor Appointment Management System",
    tech: "Nextjs, Tailwind CSS, Axios",
    description: `An advanced, full-stack web application for managing doctor appointments, built with Next.js, TypeScript, Tailwind CSS, and Axios. This system provides seamless experiences for both patients and doctors, including authentication, dashboards, appointment booking, notifications, and more.`,
    link: "https://github.com/RafidRisun/Doctor-Appointment-Management-System-HISHABEE",
  },
  {
    id: 4,
    title: "Student Community Platform",
    tech: "NestJS, NextJS, Tailwind CSS, Postgres",
    description: `A Social Media Platform for students to create profile, Newsfeed, Make friends, Join groups, Chat, Job search, Forums, Events, Notifications, Search has a subscriptions system, Admin page and many more.`,
    link: "",
  },
  {
    id: 5,
    title: "Digital Art Marketplace",
    tech: "HTML, CSS, PHP, Javascript, AJAX",
    description: `A website to upload your artwork, showcase it in your profile, be featured in newsfeed, sell it to other users, buy from others, chat with others, search other users, notification system, cash in, transaction history, edit or delete profile.`,
    link: "",
  },
];

export const experiences = [
  {
    id: 1,
    company: "ThreeSquare",
    role: "Software Developer Intern",
    period: "March 2025 - August 2025",
  },
  {
    id: 2,
    company: "Aronnyo Jon",
    role: "Illustrator of the company released comic book Shoronkholar Golpo",
    period: "February 2024 - August 2024",
  },
];
