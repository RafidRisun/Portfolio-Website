"use client";
import Image from "next/image";
import { dotFont } from "./font/localFonts";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
//data
import { titleList, skills, projects, experiences } from "./data";

//components
import ProjectCard from "./components/project-card";
import ExperienceCard from "./components/experience-card";

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
              <li key={`${skill.id}-${idx}`}>
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
            <ProjectCard key={`${project.id}-${idx}`} project={project} />
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
              <ExperienceCard key={`${exp.id}-${idx}`} exp={exp} />
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
