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

const getData = async (eventId) => {
	const url =
		process.env.NODE_ENV === "production"
			? `https://nexus-pes.vercel.app/api/events/${eventId}`
			: `http://localhost:3000/api/events/${eventId}`;

	const res = await fetch(url);
	return res.json();
};

const EventDetailPage = async ({ params }) => {
	const eventDetail = await getData(params.event);
  console.log(EventDetailPage)

	const parsedDate = new Date("Sep 9, 2023 9:00:00").toDateString();

  // return (<></>)

	return (
		<>
			<div className="mx-4 my-8 md:mx-auto max-w-[800px]">
				<h1 className="mt-12 mb-10 text-3xl md:text-5xl font-bold">
					{eventDetail.eventName}
				</h1>
				<ul className="flex text-xs gap-x-2 ">
					<li>{getLength(eventDetail?.summary?.long)} min read</li>
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
						src={eventDetail?.eventImages[0]}
						width={800}
						height={400}
						alt="blog"
						className="rounded-sm object-cover w-full max-h-96 outline-[1px] outline-slate-400/50"
					/>
					<section className="space-y-5 my-10 text-text-primary text-sm leading-6 md:text-base md:leading-7">
						{/* {eventDetail.summary.long &&
							eventDetail?.summary?.long.map((para, i) => (
								<p key={i}>{para}</p>
							))} */}
						<p>{eventDetail?.summary?.long}</p>
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

export default EventDetailPage;
