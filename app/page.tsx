'use client';
import Image from 'next/image';
import { dotFont } from './font/localFonts';
import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
//data
import { titleList, skills, projects, experiences } from './data';

//components
import ProjectCard from './components/project-card';
import ExperienceCard from './components/experience-card';
import Skills from './modals/skills';
import Navbar from './components/navbar';

export default function Home() {
	const [screenHeight, setScreenHeight] = useState(0);
	const [oneThirdHeight, setOneThirdHeight] = useState(0);
	const [twoThirdHeight, setTwoThirdHeight] = useState(0);
	const [modal, setModal] = useState(false);
	const [dark, setDark] = useState(false);

	const navbarHeight = 130; // h-20 in Tailwind = 5rem = 80px

	useEffect(() => {
		const availableHeight = window.innerHeight - navbarHeight;
		setScreenHeight(availableHeight);
		setOneThirdHeight(availableHeight / 3);
		setTwoThirdHeight((2 * availableHeight) / 3);

		const handleResize = () => {
			const availableHeight = window.innerHeight - navbarHeight;
			setScreenHeight(availableHeight);
			setOneThirdHeight(availableHeight / 3);
			setTwoThirdHeight((2 * availableHeight) / 3);
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<>
			<Navbar dark={dark} setDark={setDark} />
			<main
				className={`flex-1 overflow-auto  bg-white p-2 pt-0 dark:bg-zinc-900 ${
					dark ? 'dark' : ''
				}`}
			>
				<div className="w-full flex flex-col flex-1 overflow-auto gap-2">
					<div
						className="flex flex-col sm:flex-row bg-[#da754d] dark:bg-[#475C46] rounded px-10 relative"
						style={{ height: twoThirdHeight }}
					>
						<div className="flex-1 sm:flex-2 text-center flex flex-col sm:pl-10 items-center justify-center py-10">
							<h1
								className={`text-4xl sm:text-8xl text-white ${dotFont.className} cursor-default`}
							>
								<Typewriter
									words={titleList}
									loop={0}
									cursor
									cursorStyle="|"
									typeSpeed={70}
									deleteSpeed={100}
									delaySpeed={5000}
								/>
							</h1>
							<p className="text-md sm:text-2xl text-white mt-4 cursor-default">
								I build things for the web.
							</p>
						</div>

						<div className="relative hidden lg:flex flex-1 items-end">
							<Image
								src="/rafid.png"
								alt="Picture of the author"
								fill
								style={{ objectFit: 'cover' }}
							/>
						</div>
					</div>
					<div
						className="overflow-hidden flex cursor-pointer relative"
						style={{ height: oneThirdHeight }}
						onClick={() => setModal(true)}
					>
						<ul className="flex gap-5 sm:gap-10 items-center w-max text-zinc-950 dark:text-white infinite-scroll">
							{[...skills, ...skills].map((skill, idx) => (
								<li key={`${skill.id}-${idx}`}>
									<div className="h-20 w-50 sm:w-60 text-center px-2 sm:px-4 flex gap-3 items-center justify-center">
										{skill.icon}
										<p className="text-lg text-start">{skill.label}</p>
									</div>
								</li>
							))}
						</ul>
						<p className="text-zinc-950 dark:text-white text-xs sm:text-sm text-end pr-2 absolute bottom-0 right-0">
							Click to see all skills
						</p>
					</div>
					<h2
						className={`flex w-full items-center justify-center rounded py-2 sm:py-5 gap-10 bg-black dark:bg-gray-800 text-lg sm:text-2xl ${dotFont.className} cursor-default text-white`}
					>
						Projects
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 w-full">
						{projects.map((project, idx) => (
							<ProjectCard
								key={`${project.id}-${idx}`}
								project={project}
								dark={dark}
							/>
						))}
					</div>
					<div className="flex h-40 w-full" />
					<h2
						className={`flex w-full items-center justify-center rounded py-2 sm:py-5 gap-10 bg-[#da754d] dark:bg-[#475C46] text-lg sm:text-2xl ${dotFont.className} cursor-default text-white`}
					>
						Work Experience
					</h2>
					<div className="flex flex-col sm:flex-row bg-[#da754d] dark:bg-[#475C46] rounded relative">
						<div className="relative hidden lg:flex flex-1 items-end">
							<Image
								src="/working.png"
								alt="Picture of the author"
								fill
								style={{ objectFit: 'cover' }}
							/>
						</div>
						<div className="flex-2 w-2/3 min-w-2/3 max-w-2/3 text-start justify-center flex flex-col pl-10 py-10">
							{experiences.map((exp, idx) => (
								<ExperienceCard key={`${exp.id}-${idx}`} exp={exp} />
							))}
						</div>
					</div>
					<div className="flex h-40 w-full" />
					<h2
						id="contact"
						className={`flex w-full items-center justify-center rounded py-2 sm:py-5 gap-10 bg-black dark:bg-gray-800 text-lg sm:text-2xl ${dotFont.className} cursor-default text-white`}
					>
						Contact
					</h2>
					<div className="flex h-80 w-full bg-black dark:bg-gray-800 rounded">
						<div className="flex-1 flex flex-col justify-center items-center">
							<a
								href="mailto:rafidhassanrisun@gmail.com"
								className="text-white text-md sm:text-lg hover:underline"
							>
								rafidhassanrisun@gmail.com
							</a>
							<p className="text-white text-md sm:text-lg">+8801671048227</p>
							<a
								href="https://linkedin.com/in/RafidRisun"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white text-md sm:text-lg hover:underline"
							>
								linkedin.com/in/RafidRisun
							</a>
							<a
								href="https://github.com/RafidRisun"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white text-md sm:text-lg hover:underline"
							>
								github.com/RafidRisun
							</a>
							<p className="text-white text-xs sm:text-xs pt-10 text-wrap text-center p-5">
								Made with Next.js & Tailwind by Rafid Hassan Risun
							</p>
						</div>
					</div>
				</div>
				{modal && <Skills setModal={setModal} />}
			</main>
		</>
	);
}
