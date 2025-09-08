import React from "react";
import { dotFont } from "../font/localFonts";
import { IoIosClose } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function Skills({
  setModal,
}: {
  setModal: (value: boolean) => void;
}) {
  const router = useRouter();
  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 text-white">
      <div className="bg-black rounded p-7 shadow-xl w-full max-w-xl border border-gray-300 flex flex-col gap-5 relative">
        <button
          className="text-white text-4xl absolute top-2 right-2 cursor-pointer hover:text-gray-400"
          onClick={closeModal}
        >
          <IoIosClose />
        </button>
        <h2 className={`${dotFont.className} text-2xl mb-4`}>Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className={`${dotFont.className} text-xl mb-4`}>
              Programming Languages:
            </p>
            <ul className="list-disc list-inside space-y-2 text-left">
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>C++</li>
              <li>C#</li>
            </ul>
          </div>
          <div>
            <p className={`${dotFont.className} text-xl mb-4`}>Frameworks:</p>
            <ul className="list-disc list-inside space-y-2 text-left">
              <li>React</li>
              <li>Next.js</li>
              <li>React Native</li>
              <li>Tailwind CSS</li>
              <li>Angular</li>
              <li>SASS</li>
              <li>Bootstrap</li>
              <li>NestJS</li>
              <li>Dot Net</li>
            </ul>
          </div>
          <div>
            <p className={`${dotFont.className} text-xl mb-4`}>
              Database Management:
            </p>
            <ul className="list-disc list-inside space-y-2 text-left">
              <li>Postgres SQL</li>
              <li>Microsoft SQL Management Studio</li>
              <li>Oracle</li>
            </ul>
          </div>
          <div>
            <p className={`${dotFont.className} text-xl mb-4`}>
              UI/UX and Designing:
            </p>
            <ul className="list-disc list-inside space-y-2 text-left">
              <li>Figma</li>
              <li>Adobe Illustrator</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
