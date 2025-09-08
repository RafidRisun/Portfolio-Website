import React from "react";
import { dotFont } from "../font/localFonts";

export default function ExperienceCard({
  exp,
}: {
  exp: { id: number; company: string; role: string; period: string };
}) {
  return (
    <div key={exp.id} className="text-white mb-4">
      <h2 className={`text-lg sm:text-2xl ${dotFont.className}`}>
        {exp.company}
      </h2>
      <h3 className="text-sm sm:text-lg">{exp.role}</h3>
      <p className="text-sm sm:text-md">{exp.period}</p>
    </div>
  );
}
