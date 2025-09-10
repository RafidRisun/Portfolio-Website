import React from "react";
import { dotFont } from "../font/localFonts";

export default function ProjectCard({
  project,
  dark,
}: {
  project: {
    id: number;
    title: string;
    tech: string;
    description: string;
    link?: string;
  };
  dark: boolean;
}) {
  return (
    <div
      key={project.id}
      className={`p-4 flex flex-col justify-between rounded h-90 sm:h-100 lg:h-80 ${
        dark ? "bg-gray-800" : "bg-black"
      }`}
    >
      <div className="text-white">
        <h2 className={`text-lg sm:text-2xl ${dotFont.className}`}>
          {project.title}
        </h2>
        <h2 className="text-sm sm:text-lg">{project.tech}</h2>
        <p className="mt-2 text-sm sm:text-md text-justify">
          {project.description}
        </p>
      </div>
      {project.link && (
        <a href={project.link} className="text-sm text-white hover:underline">
          View on GitHub
        </a>
      )}
    </div>
  );
}
