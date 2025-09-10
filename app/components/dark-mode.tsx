import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { AiFillSun } from "react-icons/ai";

export default function DarkMode({
  dark,
  setDark,
}: {
  dark: boolean;
  setDark: (dark: boolean) => void;
}) {
  return (
    <button
      className={`${
        dark ? "text-white" : "text-black"
      } text-xs sm:text-lg hover:text-gray-600 cursor-pointer`}
      onClick={() => setDark(!dark)}
    >
      {dark ? <AiFillSun /> : <MdDarkMode />}
    </button>
  );
}
