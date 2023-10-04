import React from "react";
import Image from "next/image";

const discover_data = [
	{
		title: "History",
		desc: "Let's see what we have here",
	},
	{
		title: "History",
		desc: "Let's see what we have here",
	},
	{
		title: "History",
		desc: "Let's see what we have here",
	},
	{
		title: "History",
		desc: "Let's see what we have here",
	},
];

const Discover = () => {
	return (
		<div className="grid grid-cols-1 place-items-center phone:grid-cols-2 gap-5 lg:grid-cols-4 ">
			{discover_data.map((discover, i) => (
				<div
					key={i}
					className="p-5 border-[1px] rounded-lg border-white/20 h-52 bg-background/20 backdrop-blur w-full flex justify-between flex-col hover:bg-white/10 transition-colors"
				>
					<Image
						src="/images/icons/leaf.svg"
						width={120}
						height={120}
						className="w-12 h-12 p-2 border bg-white/10 border-white/40 rounded-lg"
						alt={discover.title}
					/>
					<div className="top-[70px] left-[20px]">
						<p className="font-bold text-lg">{discover.title}</p>
						<p className="text-sm">{discover.desc}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Discover;
