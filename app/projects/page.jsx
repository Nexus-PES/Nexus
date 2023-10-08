"use client";
import React, { useState, useEffect } from "react";
// import { projectData } from "../../data";
import ProjectContainer from "../../components/ProjectContainer";
import { AnimatePresence, motion } from "framer-motion";

const ProjectPage = () => {

	const [allprojects, setallProjects] = useState([]);
	const [filteredProjects, setFilteredProjects] = useState([]);
	const [input, setInput] = useState("");
	

	useEffect(()=>{
		const fetchProjects = async  () => {
			const res = await fetch("/api/projects");
			const data = await res.json();
			// console.log(data.projectData)
			setallProjects(data.projectData);
			setFilteredProjects(data.projectData);
		}
		fetchProjects();
	}, [])
	
	
	useEffect(() => {
		const newProject = allprojects.filter((project) =>
			project.projectName.toLowerCase().includes(input.toLowerCase())
		);
		setFilteredProjects(newProject);
	}, [input]);



	return (
		<main className="mt-16 mx-4 sm:mx-14 md:mx-20 gap-y-10 md:gap-y-14 flex justify-center">
			<div className="flex flex-col gap-4">
				<h1 className="font-semibold text-2xl md:text-3xl mb-4  mt-12">
					All our
					<span className="font-bold ml-2 bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text">
						Projects
					</span>
				</h1>
				<form>
					<label
						className="text-xxs"
						htmlFor="project"
					>
						Search Project
					</label>
					<div className="group flex gap-x-2 items-center justify-center">
						<input
							onChange={(e) => setInput(e.target.value)}
							type="text"
							id="project"
							autoFocus
							placeholder="Search Project"
							className="text-sm w-full border border-white/20 bg-transparent rounded p-2 foucs:outline-none focus:outline-0 focus:ring-2 focus:ring-secondary transition-all duration-300"
						/>
						<button>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={2}
								stroke="#fff"
								className="w-9 p-1.5 rounded bg-secondary h-9"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
								/>
							</svg>
						</button>
					</div>
				</form>
				<motion.div
					layout
					className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
				>
				<AnimatePresence>

					{filteredProjects.map((project) => (
						<motion.div
							layout
							animate={{opacity: 1}}
							initial={{opacity: 0}}
							exit={{opacity: 0}}
							key={project.id}
						>
							<ProjectContainer {...project} />
						</motion.div>
					))}
				</AnimatePresence>
				</motion.div>
			</div>
		</main>
	);
};

export default ProjectPage;
