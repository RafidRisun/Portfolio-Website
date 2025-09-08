import React from "react";
import { dotFont } from "../font/localFonts";

export default function ProjectCard({
  project,
}: {
  project: {
    id: number;
    title: string;
    tech: string;
    description: string;
    link?: string;
  };
}) {
  return (
    <div
      key={project.id}
      className="p-4 flex flex-col justify-between bg-black rounded h-80"
    >
      <div className="text-white">
        <h2 className={`text-2xl ${dotFont.className}`}>{project.title}</h2>
        <h2 className="text-lg">{project.tech}</h2>
        <p className="mt-2 text-sm text-justify">{project.description}</p>
      </div>
      {project.link && (
        <a href={project.link} className="text-sm text-white hover:underline">
          View on GitHub
        </a>
      )}
    </div>
  );
}
