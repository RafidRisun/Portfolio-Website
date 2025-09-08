"use client";
import { useState } from "react";
import { dotFont } from "../font/localFonts";
//import { PiHamburger } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const clickOnBurger = () => {
    if (hamburgerOpen) {
      setHamburgerOpen(false);
    } else {
      setHamburgerOpen(true);
    }
  };

  return (
    <>
      <nav className="h-20 p-8 bg-white flex justify-between items-baseline sticky top-0 z-50 text-zinc-950">
        <h1
          className={`text-lg md:text-3xl ${dotFont.className} cursor-default`}
        >
          Hi, I&apos;m Rafid
        </h1>
        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="/RafidRisunCV.pdf" download className="hover:underline">
              Download CV
            </a>
          </li>
          <li>
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
      </nav>
      {hamburgerOpen && (
        <div className="flex flex-col w-full">
          <ul className="flex flex-col space-y-4 p-4 bg-white text-zinc-950 text-right">
            <li>
              <a
                href="/RafidRisunCV.pdf"
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
    </>
  );
}
