import { dotFont } from "../font/localFonts";
export default function Navbar() {
  return (
    <nav className="h-20 p-8 bg-white flex justify-between items-baseline sticky top-0 z-50 text-zinc-950">
      <h1 className={`text-3xl ${dotFont.className}`}>Hi, I'm a Rafid</h1>
      <ul className="flex space-x-4">
        <li>
          <a href="#" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
