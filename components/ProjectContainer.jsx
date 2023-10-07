// "use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getLength } from "../lib";

const ProjectContainer = ({
	id,
	projectImage,
	projectName,
	projectThumbnail,
	domain,
	summary,
	links,
}) => {
	return (
		<div className="flex flex-col gap-y-2 sm:gap-y-3 justify-start items-center border-white/10 border-[1px] rounded-md p-3">
			<div className="flex justify-between items-center w-full px-0 md:px-1">
				<div className="flex items-center gap-x-2 sm:gap-x-4">
					<Image
						src={projectThumbnail}
						height={150}
						width={150}
						alt="Project 1"
						className="border-[1px] border-white/10 w-10 h-10 md:w-12 md:h-12 object-cover rounded-md"
					/>
					<h1 className=" font-extrabold italic text-xl">
						{projectName}
					</h1>
				</div>
				<div className="flex font-mono gap-x-1">
					<span className="uppercase text-xs">{`<`}</span>
					<span className="text-xs whitespace-nowrap uppercase">
						{domain.short}
					</span>
					<span className="uppercase text-xs">{`>`}</span>
				</div>
			</div>

			<Image
				src={projectImage}
				height={400}
				width={600}
				alt={projectName}
				className="z-20 object-cover rounded-md overflow-hidden w-full aspect-video"
			/>
			<p className="text-white/70 duration-1000 transition-all my-1 text-xs line-clamp-3 leading-5">
				{summary.short}
			</p>
			<div className="flex items-center justify-between w-full sm:mx-2">
				<span className="border-white/20 border hover:bg-gray-800/50 group rounded-md transition-all py-1 md:py-0.5 px-2">
					<Link
						className="group flex gap-x-3 hover:gap-x-4 items-center"
						href={`/projects/${id}`}
					>
						<span className="sr-only">
							Read more about {projectName}
						</span>

						<span className="text-xs text-white">Learn More</span>
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
				<span className="text-xxs text-white ">{getLength(summary.long)} min read</span>
				<span className="text-xxs text-white font-extrabold pl-1">•</span>
					{links.map((link, i) => (
						<Link
							href={link.link}
							key={link.link}
							className="p-1.5 hover:bg-gray-900 rounded text-xs font-medium tracking-wider"
						>
							<Image
								src={link.linkImage}
								width={20}
								height={20}
								alt="github"
							/>
							<span className="sr-only">{link.name} link</span>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectContainer;
