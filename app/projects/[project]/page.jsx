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




import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page