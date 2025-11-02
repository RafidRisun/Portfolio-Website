"use client";
import { useState } from "react";
import { dotFont } from "../font/localFonts";
//import { PiHamburger } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";
import DarkMode from "./dark-mode";

export default function Navbar({
  dark,
  setDark,
}: {
  dark: boolean;
  setDark: (dark: boolean) => void;
}) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const clickOnBurger = () => {
    if (hamburgerOpen) {
      setHamburgerOpen(false);
    } else {
      setHamburgerOpen(true);
    }
  };

  return (
    <nav
      className={`w-full bg-white flex flex-col sticky top-0 z-50 text-zinc-950 ${
        dark ? "dark" : ""
      } dark:bg-zinc-900 dark:text-white`}
    >
      <div className="w-full flex justify-between items-center h-full min-h-20 px-8">
        <h1
          className={`text-lg md:text-3xl ${dotFont.className} cursor-default`}
        >
          Hi, I&apos;m Rafid
        </h1>
        <ul className="hidden md:flex space-x-4">
          <li className="flex items-center">
            <DarkMode dark={dark} setDark={setDark} />
          </li>
          <li className="flex items-center">
            <a href="/Risun_s_Resume.pdf" download className="hover:underline">
              Download CV
            </a>
          </li>
          <li className="flex items-center">
            <a href="#contact" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
        <button
          className="flex md:hidden"
          onClick={() => {
            clickOnBurger();
          }}
        >
          <RxHamburgerMenu className="text-lg" />
        </button>
      </div>
      {hamburgerOpen && (
        <div className="flex flex-col w-screen">
          <ul className="flex flex-col space-y-4 p-4 bg-white text-zinc-950 dark:bg-zinc-900 dark:text-white text-right">
            <li onClick={() => setDark(!dark)}>
              <DarkMode dark={dark} setDark={setDark} />
            </li>
            <li>
              <a
                href="/Risun_s_Resume.pdf"
                download
                className="hover:underline"
                onClick={() => setHamburgerOpen(false)}
              >
                Download CV
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:underline"
                onClick={() => setHamburgerOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
