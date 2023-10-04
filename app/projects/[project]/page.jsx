// "use client";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { projectData } from "../../../data";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
// 	faArrowLeft,
// 	faArrowRight,
// } from "@fortawesome/free-solid-svg-icons";
// import { useRouter } from "next/navigation";
// import Paragraphs from "../../../components/Paragraphs";
// import { Tooltip } from "react-tooltip";

// const ProjectDetail = ({ params }) => {
// 	const router = useRouter();
// 	const projectID = params;
// 	const projectIdValue = Number(
// 		projectID["project"]
// 	);

// 	const project = projectData.find(
// 		(item) =>
// 			item.id === projectIdValue
// 	);

// 	function goFront() {
// 		const nextProjectId =
// 			projectIdValue + 1;

// 		router.push(
// 			`/projects/${nextProjectId}`
// 		);
// 	}

// 	function goBack() {
// 		const prevProjectID =
// 			projectIdValue - 1;
// 		router.push(
// 			`/projects/${prevProjectID}`
// 		);
// 	}

// 	if (!project) {
// 		return (
// 			<div className=" text-3xl h-screen flex justify-center items-center">
// 				Sorry, but the project
// 				you are looking for does
// 				not exist yet
// 			</div>
// 		);
// 	}

// 	return (
// 		<div className="mx-2 md:max-w-xl md:m-auto">
// 			<div className="flex flex-col justify-between items-center max-w-lg sm:max-w-screen-sm">
// 				<div className="sm:text-6xl font-montserrat font-extrabold border-b-2 w-full flex text-4xl justify-between py-4">
// 					{
// 						project.projectName
// 					}
// 				</div>

// 				<div className="flex flex-row justify-between w-full pt-4">
// 					<FontAwesomeIcon
// 						onClick={
// 							projectIdValue ===
// 							1
// 								? null
// 								: goBack
// 						}
// 						className={
// 							" " +
// 							(projectIdValue ===
// 							1
// 								? " hover:cursor-not-allowed border-2 border-slate-600 text-slate-600 rounded-lg p-2"
// 								: " border border-1 border-white rounded-lg p-2 hover:cursor-pointer")
// 						}
// 						icon={
// 							faArrowLeft
// 						}
// 						data-tooltip-id="my-tooltip"
// 						data-tooltip-content={
// 							projectIdValue ===
// 							1
// 								? ""
// 								: "Go to Previous Project"
// 						}
// 						data-tooltip-place="right"
// 						data-tooltip-delay-show="40"
// 						data-tooltip-delay-hide="40"
// 					/>
// 					<Link
// 						href={
// 							project
// 								.links[0]
// 								.link
// 						}
// 						target="_blank"
// 						className="hover:cursor-pointer border border-1 border-white rounded-lg"
// 						data-tooltip-id="my-tooltip"
// 						data-tooltip-content="Star the Repository Here"
// 						data-tooltip-place="right"
// 						data-tooltip-delay-show="40"
// 						data-tooltip-delay-hide="40"
// 					>
// 						<Image
// 							src="/images/icons/social-media/github.svg"
// 							width={30}
// 							height={30}
// 							alt="Github"
// 						/>
// 					</Link>

// 					<Image
// 						src="/images/icons/blue-heart.svg"
// 						width={30}
// 						height={30}
// 						alt="Github"
// 						className="hover:cursor-pointer border border-1 p-0.5 border-white rounded-lg"
// 						data-tooltip-id="my-tooltip"
// 						data-tooltip-content="Leave a heart"
// 						data-tooltip-place="right"
// 						data-tooltip-delay-show="40"
// 						data-tooltip-delay-hide="40"
// 					/>

// 					<Link
// 						href={
// 							project
// 								.links[1]
// 								.link
// 						}
// 						target="_blank"
// 						className="hover:cursor-pointer border border-1 border-white rounded-lg"
// 						data-tooltip-id="my-tooltip"
// 						data-tooltip-content="Check out the website for yourself"
// 						data-tooltip-place="right"
// 						data-tooltip-delay-show="40"
// 						data-tooltip-delay-hide="40"
// 					>
// 						<Image
// 							src="/images/icons/social-media/anchor.svg"
// 							width={30}
// 							height={30}
// 							alt="Github"
// 							className="-rotate-45"
// 						/>
// 					</Link>
// 					<FontAwesomeIcon
// 						onClick={
// 							projectData.length ===
// 							projectIdValue
// 								? null
// 								: goFront
// 						}
// 						className={
// 							" " +
// 							(projectData.length ===
// 							projectIdValue
// 								? " hover:cursor-not-allowed border-1 border border-slate-600 text-slate-600 rounded-lg p-2"
// 								: " border border-1 border-white rounded-lg p-2 hover:cursor-pointer")
// 						}
// 						icon={
// 							faArrowRight
// 						}
// 						data-tooltip-id="my-tooltip"
// 						data-tooltip-content={
// 							projectData.length ===
// 							projectIdValue
// 								? ""
// 								: "Go to the Next Project"
// 						}
// 						data-tooltip-place="right"
// 						data-tooltip-delay-show="40"
// 						data-tooltip-delay-hide="40"
// 					/>
// 				</div>

// 				<div className="m-8">
// 					<Image
// 						src={
// 							project.projectImage
// 						}
// 						alt="project-image"
// 						className="rounded-xl w-full border-double border-2 hover:shadow-lg  "
// 						width={1050}
// 						height={150}
// 					/>
// 				</div>
// 				<div className="m-8 font-montserrat text-lg">
// 					<Paragraphs
// 						text={
// 							project
// 								.summary
// 								.long
// 						}
// 					/>
// 				</div>
// 				<div className="flex gap-4 items-center justify-center pb-4">
// 					Domain:
// 					<div className="border-2 border-white rounded-full hover:bg-secondary hover:text-black hover:border-secondary p-2 hover:cursor-default">
// 						{
// 							project
// 								.domain
// 								.long
// 						}
// 					</div>
// 				</div>
// 			</div>
// 			<Tooltip
// 				id="my-tooltip"
// 				className="bg-blue-500"
// 			/>
// 		</div>
// 	);
// };

// export default ProjectDetail;

import Image from "next/image";
import React from "react";

const page = () => {
	return (
		<div className="m-2 mx-auto max-w-3xl">
			<h1 className="mt-12 mb-10 text-5xl font-bold">
				Finding the Eulerian Cycle with Hierholzers Algorithm
			</h1>
			<Image
				src="/images/events/unsplash_fT49QnFucQ8.png"
				width={800}
				height={400}
				alt="blog"
				className="rounded object-cover h-96"
			/>
			<section className="space-y-5 text-text-primary my-4 text-sm leading-6 md:text-base ">
				<p>
					In this blog post, I would like to explain what are function
					objects and how they can be used to solve different problems
					by giving examples. Overriding the call operator in a class,
					operator (), makes it possible to call an object like an
					ordinary function. Function objects (also known as functors)
					are
				</p>
				<p>
					In this blog post, I would like to explain what are function
					objects and how they can be used to solve different problems
					by giving examples. Overriding the call operator in a class,
					operator (), makes it possible to call an object like an
					ordinary function. Function objects (also known as functors)
					are
				</p>
				<p>
					In this blog post, I would like to explain what are function
					objects and how they can be used to solve different problems
					by giving examples. Overriding the call operator in a class,
				</p>
				<p>
					operator. They are typically defined as classes in C++, so
					they also enjoy the features of classes. Using only classes
					and functions solves many problems and it is fine. But
					sometimes function objects are easier to use and save us
					from the burden of complex solutions. STL (Standard Template
					Library) in C++ provides useful built-in function objects
					and makes things easier. Understanding how they are
					implemented under the hood gives insight and encourages us
					to write custom function objects
				</p>
				<p>
					if built-in function objects are not enough. The question is
					in which situations do we prefer functions objects? OK, lets
					go through the examples and see how we can use functions
					objects for the problems.
				</p>
			</section>
		</div>
	);
};

export default page;
