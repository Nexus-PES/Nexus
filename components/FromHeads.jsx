import Image from "next/image";
import React from "react";
import { headCommentData } from "../data";

export default function FromHeads() {
	return (
		<div className="my-6">
			<h1 className="font-semibold text-2xl md:text-3xl mb-4  mt-12">
				From Our
				<span className="font-bold ml-2 bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text">
					Heads
				</span>
			</h1>

			<section className="xl:columns-4 lg:columns-3 columns-1 sm:columns-2 gap-4 mx-auto space-y-3 pb-28">
				{headCommentData.map((head) => (
					<Heads
						key={head.domain}
						{...head}
					/>
				))}
			</section>
		</div>
	);
}

const Heads = (props) => {
	let role_icon, tag;

	if (props.role === "head") {
		role_icon = { url: "/images/icons/star.svg", alt: "star" };
		tag = "head";
	} else if (props.role === "domain head") {
		role_icon = { url: "/images/icons/star.svg", alt: "star" };
		tag = "domain head";
	} else if (props.role === "core") {
		role_icon = { url: "/images/icons/thunder.svg", alt: "thunder" };
		tag = "core";
	} else {
		role_icon = { url: "/images/icons/user.svg", alt: "user" };
		tag = "volunteer";
	}
	return (
		<div className="transition-colors break-inside-avoid border-white/10 border-[1px] backdrop-blur-md rounded-md p-4 hover:bg-white/5">
			<div className="flex gap-4">
				<span className="relative ">
					<Image
						height={120}
						width={120}
						src={props.imageUrl}
						alt={`${props.name}-thumbnail`}
						className="h-10 w-10 object-contain flex-1 flex-grow"
					/>
					<Image
						className="absolute -right-1 -translate-y-2 -bottom-1 w-4 h-4 p-1 rounded-full bg-primary text-white"
						src={role_icon.url}
						width={50}
						height={50}
						alt={role_icon.alt}
					/>
				</span>
				<article className="flex flex-col w-full gap-y-0 justify-between">
					<h2 className="text-base font-semibold font-bricolage line-clamp-1">
						{props.name}
					</h2>

					<div className="flex justify-between items-center my-0.5">
						<p className="text-xs font-medium text-white">
							{props.domain}
						</p>
						<p className="text-xxs flex items-center text-white bg-gradient-to-br -mb-1 from-primary to-secondary font-semibold rounded-2xl py-[1px] px-3">
							{tag.toUpperCase()}
						</p>
					</div>
				</article>
			</div>
			<div className="text-xs mt-2.5 font-inter text-white/80 leading-5 ">
				<p>{props.message}</p>
			</div>
		</div>
	);
};
