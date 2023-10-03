"use client";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import Link from "next/link";
import { useState } from "react";

const ActivityContainer = ({ id, images, date, summary, eventName, likes }) => {
	const [openDesc, setOpenDesc] = useState(false);
	return (
		<div className="flex flex-col gap-y-2 sm:gap-y-3 justify-center items-center border-white/10 border-[1px] rounded-md p-2 sm:px-3 md:py-3 md:px-5 hover:shadow-lg">
			<div className="flex items-center justify-between w-full mt-1.5 mb-1 sm:mb-1.5">
				<div>
					<h1 className=" bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text font-extrabold text-xl">
						{eventName}
					</h1>
					<p className="text-xxs">
						{date.toLocaleDateString("en-GB")}
					</p>
				</div>
			</div>
			<Carousel
				withIndicators
				className="w-full aspect-video z-30 text-white"
				loop
			>
				{images.map((image, i) => (
					<Carousel.Slide
						key={i}
						className="w-full"
					>
						<Image
							src={image}
							height={400}
							width={600}
							alt={`${eventName}-image-${id}`}
							className="z-20 object-cover rounded-md overflow-hidden w-full aspect-video"
						/>
					</Carousel.Slide>
				))}
			</Carousel>

			<div className="flex items-center justify-between w-full sm:mx-2">
				<span className="border-white/20 border hover:bg-gray-800/50 group rounded-md transition-all py-0.5 px-2">
					<Link
						className="group flex gap-x-3 hover:gap-x-4 items-center"
						href={`/events/${id}`}
					>
						<span className="text-xxs">Learn More</span>
						<Image
							src="/images/icons/right-arrow.svg"
							width={30}
							height={20}
							alt="learn more arrow"
							className="w-3 h-4 sm:w-4 sm:h-5"
						/>
					</Link>
				</span>

				<div className="h-full flex items-center gap-3">
					{/* <span className=" font-medium md:font-semibold text-sm md:text-md">
						{likes}
					</span> */}
					<div className="border-[1px] h-[2rem] w-[2rem] border-white/20 rounded-md flex items-center justify-center">
						<Image
							src="/images/icons/blue-heart.svg"
							height={20}
							width={20}
							alt="blue heart"
							className=""
						/>
					</div>
					<button
						className="p-1.5 border-[1px] border-white/20 hover:bg-gray-900 rounded  text-[10px] font-medium tracking-wider"
						onClick={() => setOpenDesc((prev) => !prev)}
					>
						<Image
							src="/images/icons/cross.svg"
							width={16}
							height={16}
							alt="open description"
							className={`transition-all transform ${openDesc && "-rotate-45"}`}
						/>
					</button>
				</div>
			</div>

			{openDesc && (
				<p
					className={`${
						openDesc ? "text-white/70" : "text-transparent"
					} duration-1000 transition-all text-xs my-1`}
				>
					{summary}
				</p>
			)}
		</div>
	);
};

export default ActivityContainer;
