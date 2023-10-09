// "use client";
import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import { Tooltip as ReactTooltip } from "react-tooltip";
import ProjectContainer from "../../../components/ProjectContainer";
// import More from "../../../components/More";

import { PiSpeakerSimpleNoneFill } from "react-icons/pi";
import { BsShareFill } from "react-icons/bs";

import { projectData } from "../../../data";
import { getLength } from "../../../lib";
// console.log(projectData);

const getData = async (projectId) => {
  const url = process.env.NODE_ENV==='production' ? `https://nexus-pes.vercel.app/api/projects/${projectId}` : `http://localhost:3000/api/projects/${projectId}`;

  const res = await fetch(url);
  return res.json();
}

const ProjectDetailPage = async ({ params }) => {
	// console.log(params.project);


  let projectDetail = await getData(params.project);


	
	const parsedDate = new Date("Sep 9, 2023 9:00:00").toDateString();

	// const timeToRead =;

	return (
		<>
			<div className="mx-4 my-8 md:mx-auto max-w-[800px]">
				<h1 className="mt-12 mb-10 text-3xl md:text-5xl font-bold">
					{projectDetail.projectName}
				</h1>
				<ul className="flex text-xs gap-x-2 ">
					<li>{getLength(projectDetail?.summary?.long)} min read</li>
					<li>•</li>
					<li>{parsedDate}</li>
				</ul>

				{/* <ReactTooltip
					id="my-tooltip-listen"
					place="top"
					className="text-xxs"
					content="Listen"
				/>
				<ReactTooltip
					id="my-tooltip-share"
					place="top"
					className="text-xxs"
					content="Share"
				/>
				<ReactTooltip
					id="my-tooltip-more"
					place="top"
					className="text-xxs"
					content="More"
				/> */}

				<div className="border-y-[1px] my-4 p-2 border-white/20 items-center justify-between gap-x-2 hidden md:flex">
					<div className="flex gap-x-4">
						<button
							data-tooltip-id="my-tooltip-listen"
							className="flex gap-x-2 items-center rounded justify-center"
						>
							<PiSpeakerSimpleNoneFill className="w-6 h-6 rounded p-1 hover:bg-white/5" />
							<span className="text-xxs sr-only">Listen</span>
						</button>
						<button
							data-tooltip-id="my-tooltip-share"
							className="flex gap-x-2 items-center justify-center"
						>
							<BsShareFill className="w-6 h-6 p-1 rounded hover:bg-white/5" />
							<span className="text-xxs sr-only">Share</span>
						</button>
					</div>
					<div className="flex gap-x-4">
						<button
							data-tooltip-id="my-tooltip-more"
							className="flex items-center gap-x-2 justify-center"
						>
							{/* <More /> */}
						</button>
					</div>
				</div>

				<div className="flex gap-x-2 items-center justify-between md:hidden my-4">
					<div className="flex gap-x-2 items-center">
						<button
							// data-tooltip-id="my-tooltip-listen"
							className="rounded-3xl py-1 px-3 border flex items-center gap-x-2 border-white/20  hover:bg-white/10"
						>
							<PiSpeakerSimpleNoneFill className="w-4 h-4" />
							<span className="text-xxs">Listen</span>
						</button>
						<button className="rounded-3xl py-1 px-3 border flex items-center gap-x-2 border-white/20 hover:bg-white/10">
							<BsShareFill
								// data-tooltip-id="my-tooltip-share"
								className="w-3 h-3"
							/>
							<span className="text-xxs">Share</span>
						</button>
					</div>
					<div className="flex gap-x-2 items-center">
						<button className=" border border-white/20 px-2 rounded-3xl  flex items-center gap-x-2   hover:bg-white/10">
							{/* <More /> */}
						</button>
					</div>
				</div>

				<article className="my-10">
					<Image
						src={projectDetail?.projectImage}
						width={800}
						height={400}
						alt="blog"
						className="rounded-sm object-cover w-full max-h-96 outline-[1px] outline-slate-400/50"
					/>
					<section className="space-y-5 my-10 text-text-primary text-sm leading-6 md:text-base md:leading-7">
						<p>
							{projectDetail?.summary?.long}
							nec feugiat in. Eu tincidunt tortor aliquam nulla
							facilisi. Amet mattis vulputate enim nulla aliquet.
							Augue eget arcu dictum varius duis. Amet porttitor
							eget dolor morbi. Quis varius quam quisque id diam
							vel quam. Est velit egestas dui id ornare arcu odio.
							Massa placerat duis ultricies lacus sed turpis
							tincidunt. At risus viverra adipiscing at in tellus
							integer feugiat. Mauris pharetra et ultrices neque
							ornare aenean euismod elementum nisi. Bibendum neque
							egestas congue quisque egestas diam. Adipiscing
							commodo elit at imperdiet dui accumsan sit. Montes
							nascetur ridiculus mus mauris. Vitae aliquet nec
							ullamcorper sit amet risus. Congue quisque egestas
							diam in arcu cursus. Malesuada bibendum arcu vitae
							elementum curabitur vitae nunc sed velit. Gravida
							cum sociis natoque penatibus et magnis dis
							parturient. Imperdiet dui accumsan sit amet.
							Scelerisque eleifend donec pretium vulputate sapien
							nec sagittis aliquam. Varius vel pharetra vel turpis
							nunc eget lorem dolor sed. Mauris commodo quis
							imperdiet massa tincidunt nunc pulvinar sapien.
							Egestas fringilla phasellus faucibus scelerisque
							eleifend donec pretium vulputate sapien. Morbi non
							arcu risus quis varius quam. Adipiscing elit
							pellentesque habitant morbi tristique senectus.
							Cursus eget nunc scelerisque viverra. Ipsum dolor
							sit amet consectetur adipiscing elit pellentesque
							habitant.
						</p>
						<p>
							In this blog post, I would like to explain what are
							function objects and how they can be used to solve
							different problems by giving examples. Overriding
							the call operator in a class, operator (), makes it
							possible to call an object like an ordinary
							function. Function objects (also known as functors)
							are
						</p>
						<p>
							In this blog post, I would like to explain what are
							function objects and how they can be used to solve
							different problems by giving examples. Overriding
							the call operator in a class, operator (), makes it
							possible to call an object like an ordinary
							function. Function objects (also known as functors)
							are
						</p>
						<p>
							In this blog post, I would like to explain what are
							function objects and how they can be used to solve
							different problems by giving examples. Overriding
							the call operator in a class,
						</p>
						<p>
							operator. They are typically defined as classes in
							C++, so they also enjoy the features of classes.
							Using only classes and functions solves many
							problems and it is fine. But sometimes function
							objects are easier to use and save us from the
							burden of complex solutions. STL (Standard Template
							Library) in C++ provides useful built-in function
							obj/ects and makes things easier. Understanding how
							they are implemented under the hood gives insight
							and encourages us to write custom function objects
						</p>
						<p>
							if built-in function objects are not enough. The
							question is in which situations do we prefer
							functions objects? OK, lets go through the examples
							and see how we can use functions objects for the
							problems.
						</p>
					</section>
				</article>
				<ul className="flex gap-x-2 items-center justify-center">
					<li>•</li>
					<li>•</li>
					<li>•</li>
				</ul>
			</div>

			<div className="rounded-sm mx-4 md:mx-auto max-w-[800px] bg-shaded py-8">
				<div className="w-full flex flex-col gap-y-4 my-5">
					<h1 className="text-2xl font-semibold text-white">
						What to read next
					</h1>
					<p className="text-text-primary text-xs md:text-sm">
						We got you.
					</p>
				</div>
				<section className="grid grid-cols-1 gap-4 md:grid-cols-2">
					{projectData.slice(0, 3).map((project) => (
						<ProjectContainer
							key={project.id}
							{...project}
						/>
					))}
				</section>
			</div>
		</>
	);
};

export default ProjectDetailPage;
