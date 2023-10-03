import React from "react";
import Link from "next/link";
import { Button } from "./Button";

const Hero = () => {
	return (
		<div className="flex flex-col justify-center items-center mt-32 mb-20">
			<p className="text-4xl md:text-5xl text-balance text-center font-bold">
				&quot;Unlocking Tomorrow&apos;s Technology Today!&quot;
			</p>
			{/* <p className="text-[50px] leading-[65px]  font-black text-primary "> */}
			<p className="text-4xl md:text-5xl lg:text-6xl mt-5 mb-6 text-center font-extrabold bg-gradient-to-r from-primary via-blue-600 to-secondary text-transparent bg-clip-text animate-gradient">
				NEXUS CLUB
			</p>
			<div className="gap-x-4 flex">
				<Button
					size="lg"
					className="min-w-[10rem] md:w-[15rem]"
					variant="outline"
					href="/projects"
				>
					Project
				</Button>
				<Button
					size="lg"
					className="min-w-[10rem] md:w-[15rem]"
					href="/events"
				>
					Events
				</Button>
			</div>
		</div>
	);
};

export default Hero;
