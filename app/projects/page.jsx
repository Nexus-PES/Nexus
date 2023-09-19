"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ProjectPage = () => {
	return (
		<div>
			<h1 className="font-bold text-4xl font-montserrat my-3">
				Explore our
				<span className="font-bold ml-2 bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text">
					Projects
				</span>
			</h1>
      <br></br>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
				{project_data.map((project) => (
					<ProjectContainer
						key={project.id}
						{...project}
					/>
				))}
			</div>
		</div>
	);
};

export default ProjectPage;

const ProjectContainer = ({
	id,
	projectImage,
	projectName,
	projectThumbnail,
	domain,
	summary,
	links,
}) => {
	const [openDesc, setOpenDesc] = useState(false);
	return (
		<div className="flex flex-col gap-y-2 sm:gap-y-3 justify-start items-center border-white/10 border-[1px] rounded-md p-3">
			<div className="flex justify-between items-center w-full px-0 md:px-1">
				<div className="flex items-center gap-x-2 sm:gap-x-4">
					<Image
						src={projectThumbnail}
						height={150}
						width={150}
						alt="Project 1"
						className="border-[1px] border-white/20 w-10 h-10 md:w-12 md:h-12 object-cover rounded-md"
					/>
					<h1 className="font-montserrat font-extrabold italic text-xl">
						{projectName}
					</h1>
				</div>
				<div className="flex font-montserrat gap-x-2">
					<span className="uppercase text-[10px]">{`<`}</span>
					<span className="text-[10px] whitespace-nowrap uppercase">
						{domain.short}
					</span>
					<span className="uppercase text-[10px]">{`>`}</span>
				</div>
			</div>

			<Image
				src={projectImage}
				height={400}
				width={600}
				alt={projectName}
				className="z-20 object-cover rounded-md overflow-hidden w-full aspect-video"
			/>
			<div className="flex items-center justify-between w-full sm:mx-2">
				<span className="border-white/10 border-[1px] font-montserrat hover:bg-gray-800/50 group rounded-md transition-all py-1 px-2">
					<Link
						className="group flex gap-x-3 hover:gap-x-4 items-center"
						href={`/projects/${id}`}
					>
						<span className="text-xs">Learn More</span>
						<Image
							src="/images/icons/right-arrow.svg"
							width={30}
							height={20}
							alt="learn more arrow"
							className="w-3 h-4 sm:w-4 sm:h-5"
						/>
					</Link>
				</span>
				<div className="flex gap-x-1.5 items-center">
					{links.map((link, i) => (
						<a
							href="/"
							key={link.link}
							className="p-1.5 hover:bg-gray-900 rounded font-montserrat text-[10px] font-medium tracking-wider"
						>
							<Image
								src={link.linkImage}
								width={20}
								height={20}
								alt="github"
							/>
							<span className="sr-only">{link.name} link</span>
						</a>
					))}
					<button
						className="p-1.5  border-[1px] border-white/20 hover:bg-gray-900 rounded font-montserrat text-[10px] font-medium tracking-wider"
						onClick={() => setOpenDesc((prev) => !prev)}
					>
						<Image
							src="/images/icons/cross.svg"
							width={16}
							height={16}
							alt="open description"
							className={`transition-all ${
								openDesc ? "rotate-45" : ""
							} transform `}
						/>
					</button>
				</div>
			</div>
			{openDesc && (
				<p
					className={`${
						openDesc ? "text-white/70" : "text-transparent"
					} duration-1000 transition-all font-montserrat my-1 text-xs sm:text-sm md:text-sm line-clamp-3`}
				>
					{summary}
				</p>
			)}
		</div>
	);
};

const project_data = [
	{
		id: 1,
		projectThumbnail: "/images/project-icon/notevault-thumbnail.png",
		projectName: "NoteVault",
		domain: { short: "Web dev", long: "Web Development" },
		projectImage: "/images/projects/note-vault-preview.png",
		summary:
			"NoteVault is a versatile note-taking platform designed to enhance organization and idea connectivity. It empowers users to create, link, and manage notes efficiently, fostering better understanding and exploration of their thoughts.",
		links: [
			{
				name: "Github",
				link: "https://github.com/Nexus-PES/NoteVault",
				linkImage: "/images/icons/social-media/github.svg",
			},
			{
				name: "Deployed Site",
				link: "https://notevault.vercel.app/",
				linkImage: "/images/icons/social-media/anchor.svg",
			},
		],
	},
	{
		id: 2,
		projectThumbnail: "/images/project-icon/nexus-website-thumbnail.png",
		projectName: "Nexus Website",
		domain: { short: "Web dev", long: "Web Development" },
		projectImage: "/images/projects/nexus-website-preview.png",
		summary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur qui",
		links: [
			{
				name: "Github",
				link: "https://github.com/Nexus-PES/Nexus",
				linkImage: "/images/icons/social-media/github.svg",
			},
			{
				name: "Deployed Site",
				link: "https://nexus-pes.vercel.app/",
				linkImage: "/images/icons/social-media/anchor.svg",
			},
		],
	},
	{
		id: 3,
		projectThumbnail: "/images/project-icon/OFAAX40 12.png",
		projectName: "Project name",
		domain: { short: "Web dev", long: "Web Development" },
		projectImage: "/images/events/unsplash_-HIiNFXcbtQ.png",
		summary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur qui",
		links: [
			{
				name: "Github",
				link: "https://github.com/Nexus-PES/NoteVault",
				linkImage: "/images/icons/social-media/github.svg",
			},
			{
				name: "Deployed Site",
				link: "https://notevault.vercel.app/",
				linkImage: "/images/icons/social-media/anchor.svg",
			},
		],
	},
	{
		id: 4,
		projectThumbnail: "/images/project-icon/OFAAX40 1.png",
		projectName: "Project name",
		domain: { short: "Web dev", long: "Web Development" },
		projectImage: "/images/events/unsplash_-HIiNFXcbtQ.png",
		summary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur qui",
		links: [
			{
				name: "Github",
				link: "https://github.com/Nexus-PES/NoteVault",
				linkImage: "/images/icons/social-media/github.svg",
			},
			{
				name: "Deployed Site",
				link: "https://notevault.vercel.app/",
				linkImage: "/images/icons/social-media/anchor.svg",
			},
		],
	},
];
