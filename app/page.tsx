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

  const navbarHeight = 95; // h-20 in Tailwind = 5rem = 80px

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
          className={`flex bg-[#da754d] items-center justify-center rounded px-10`}
          style={{ height: twoThirdHeight }}
        >
          <div className="flex-2 text-center flex flex-col">
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
        </div>
        <div className="overflow-hidden flex h-40">
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
