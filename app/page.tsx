"use client";
import Image from "next/image";
import { dotFont } from "./font/localFonts";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
//icons
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

export default function Home() {
  const [screenHeight, setScreenHeight] = useState(0);
  const [oneThirdHeight, setOneThirdHeight] = useState(0);
  const [twoThirdHeight, setTwoThirdHeight] = useState(0);

  const navbarHeight = 130; // h-20 in Tailwind = 5rem = 80px

  useEffect(() => {
    const availableHeight = window.innerHeight - navbarHeight;
    setScreenHeight(availableHeight);
    setOneThirdHeight(availableHeight / 3);
    setTwoThirdHeight((2 * availableHeight) / 3);

    const handleResize = () => {
      const availableHeight = window.innerHeight - navbarHeight;
      setScreenHeight(availableHeight);
      setOneThirdHeight(availableHeight / 3);
      setTwoThirdHeight((2 * availableHeight) / 3);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="flex-1 overflow-auto  bg-white p-2 pt-0">
      <div className="w-full flex flex-col flex-1 overflow-auto gap-2">
        <div
          className={`flex bg-[#da754d] items-center justify-center rounded px-10 relative`}
          style={{ height: twoThirdHeight }}
        >
          <div className="flex-2 w-2/3 min-w-2/3 max-w-2/3 text-center flex flex-col pl-10">
            <h1 className={`text-8xl text-white ${dotFont.className}`}>
              <Typewriter
                words={titleList}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={100}
                delaySpeed={5000}
              />
            </h1>
            <p className="text-2xl text-white mt-4">
              I build things for the web.
            </p>
          </div>

          <div className="relative h-full aspect-square flex-1">
            <Image
              src="/rafid.png"
              alt="Picture of the author"
              fill
              objectFit="contain"
            />
          </div>
          <p className="text-white text-sm absolute bottom-2 left-2">
            Made with Next.js by Rafid Hassan Risun
          </p>
        </div>
        <div
          className="overflow-hidden flex"
          style={{ height: oneThirdHeight }}
        >
          <ul className="flex gap-10 items-center w-max text-zinc-950 infinite-scroll">
            {[...skills, ...skills].map((skill, idx) => (
              <li key={idx}>
                <div className="h-20 w-60 text-center px-4 flex gap-3 items-center">
                  {skill.icon}
                  <p className="text-lg text-start">{skill.label}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <h2
          className={`flex w-full items-center justify-center rounded py-5 gap-10 bg-black text-2xl ${dotFont.className}`}
        >
          Projects
        </h2>
        <div className="grid grid-cols-3 gap-2 w-full">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="p-4 flex flex-col justify-between bg-black rounded h-80"
            >
              <div className="text-white">
                <h2 className={`text-2xl ${dotFont.className}`}>
                  {project.title}
                </h2>
                <h2 className="text-lg">{project.tech}</h2>
                <p className="mt-2 text-sm text-justify">
                  {project.description}
                </p>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  className="text-sm text-white hover:underline"
                >
                  View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="flex h-40 w-full" />
        <h2
          className={`flex w-full items-center justify-center rounded py-5 gap-10 bg-[#da754d] text-2xl ${dotFont.className}`}
        >
          Work Experience
        </h2>
        <div className="flex h-80 w-full bg-[#da754d]">
          <div className="relative h-full aspect-square flex-1">
            <Image
              src="/working.png"
              alt="Picture of the author"
              fill
              objectFit="contain"
            />
          </div>
          <div className="flex-2 w-2/3 min-w-2/3 max-w-2/3 text-start justify-center flex flex-col pl-10">
            {experiences.map((exp, idx) => (
              <div key={idx} className="text-white mb-4">
                <h2 className={`text-2xl ${dotFont.className}`}>
                  {exp.company}
                </h2>
                <h3 className="text-lg">{exp.role}</h3>
                <p className="text-md">{exp.period}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex h-40 w-full" />
        <h2
          id="contact"
          className={`flex w-full items-center justify-center rounded py-5 gap-10 bg-black text-2xl ${dotFont.className}`}
        >
          Contact
        </h2>
        <div className="flex h-80 w-full bg-black">
          <div className="flex-1 flex flex-col justify-center items-center">
            <a
              href="mailto:rafidhassanrisun@gmail.com"
              className="text-white text-lg hover:underline"
            >
              rafidhassanrisun@gmail.com
            </a>
            <p className="text-white text-lg">+8801671048227</p>
            <a
              href="https://linkedin.com/in/RafidRisun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg hover:underline"
            >
              linkedin.com/in/RafidRisun
            </a>
            <a
              href="https://github.com/RafidRisun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg hover:underline"
            >
              github.com/RafidRisun
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

const titleList = [
  "FRONTEND DEVELOPER",
  "REACT DEVELOPER",
  "REACT NATIVE DEVELOPER",
  "NEXT.JS DEVELOPER",
  "NESTJS DEVELOPER",
  "WEB DEVELOPER",
  "DESIGNER",
  "UI/UX ENTHUSIAST",
];

const skills = [
  { icon: <FaReact className="text-6xl" />, label: "React" },
  { icon: <FaReact className="text-6xl" />, label: "React Native" },
  { icon: <RiNextjsFill className="text-6xl" />, label: "Next.js" },
  { icon: <RiTailwindCssFill className="text-6xl" />, label: "Tailwind CSS" },
  { icon: <FaAngular className="text-6xl" />, label: "Angular" },
  { icon: <SiNestjs className="text-6xl" />, label: "Nest.js" },
  { icon: <AiOutlineDotNet className="text-6xl" />, label: ".NET" },
  { icon: <FaBootstrap className="text-6xl" />, label: "Bootstrap" },
  { icon: <FaSass className="text-6xl" />, label: "Sass" },
  { icon: <FaHtml5 className="text-6xl" />, label: "HTML" },
  { icon: <FaCss3 className="text-6xl" />, label: "CSS" },
  { icon: <FaJs className="text-6xl" />, label: "JavaScript" },
  { icon: <FaFigma className="text-6xl" />, label: "Figma" },
];

const projects = [
  {
    title: "Quest Around",
    tech: "Expo React Native, NestJS, Postgres (work in process)",
    description: `A Map application (in development) using React Native Maps, featuring an original UI inspired by Deshi culture with a gaming vibe. Its goal is to connect neighborhood communities, enabling people to communicate, share needs, and offer services. This long-standing vision will expand in the future with money exchange and paid event features.`,
    link: "https://github.com/RafidRisun/QuestAround-ReactNative",
  },
  {
    title: "ManageResto (ThreeSquare)",
    tech: "Angular, Bootstrap, .Net Core, Postgres",
    description: `A Multi tenant POS application where you can register orders, customize, put on hold, make payment. A terminal Dashboard to have a clear picture on on-going orders and an overall summary. An admin section to make changes in the menu items, categories, variations etc.`,
    link: "",
  },
  {
    title: "Doctor Appointment Management System",
    tech: "Nextjs, Tailwind CSS, Axios",
    description: `An advanced, full-stack web application for managing doctor appointments, built with Next.js, TypeScript, Tailwind CSS, and Axios. This system provides seamless experiences for both patients and doctors, including authentication, dashboards, appointment booking, notifications, and more.`,
    link: "https://github.com/RafidRisun/Doctor-Appointment-Management-System-HISHABEE",
  },
  {
    title: "Student Community Platform",
    tech: "NestJS, NextJS, Tailwind CSS, Postgres",
    description: `A Social Media Platform for students to create profile, Newsfeed, Make friends, Join groups, Chat, Job search, Forums, Events, Notifications, Search has a subscriptions system, Admin page and many more.`,
    link: "",
  },
  {
    title: "Digital Art Marketplace",
    tech: "HTML, CSS, PHP, Javascript, AJAX",
    description: `A website to upload your artwork, showcase it in your profile, be featured in newsfeed, sell it to other users, buy from others, chat with others, search other users, notification system, cash in, transaction history, edit or delete profile.`,
    link: "",
  },
];

const experiences = [
  {
    company: "ThreeSquare",
    role: "Software Developer Intern",
    period: "March 2025 - August 2025",
  },
  {
    company: "Aronnyo Jon",
    role: "Illustrator of the company released comic book Shoronkholar Golpo",
    period: "February 2024 - August 2024",
  },
];
