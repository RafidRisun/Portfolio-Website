import { dotFont } from "../font/localFonts";
export default function Navbar() {
  return (
    <nav className="h-20 p-8 bg-white flex justify-between items-baseline sticky top-0 z-50 text-zinc-950">
      <h1 className={`text-3xl ${dotFont.className}`}>Hi, I'm a Rafid</h1>
      <ul className="flex space-x-4">
        <li>
          <a href="#" className="hover:underline">
            Download CV
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
