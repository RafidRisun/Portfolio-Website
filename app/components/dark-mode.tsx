import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

export default function DarkMode() {
  const [dark, setDark] = useState(() => {
    // Check localStorage on initial load
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((prev) => !prev)}
      className=" text-white dark:text-black text-xs sm:text-sm hover:text-gray-600"
    >
      {dark ? <CiLight /> : <MdDarkMode />}
    </button>
  );
}
