import React from "react";
import Link from "next/link";
import { Button } from "./Button";

const Hero = () => {
	return (
		<div className="mx-auto gap-y-5 my-6 flex max-w-xl flex-col justify-center items-center">
			<h1 className="text-clamp md:text-5xl lg:text-6xl text-center font-extrabold bg-gradient-to-r from-primary via-blue-600 to-secondary text-transparent bg-clip-text animate-gradient">
				NEXUS CLUB
			</h1>
			<h2 className="md:text-4xl text-3xl text-white sm:text-balance text-center font-bold">
				&quot;Unlocking Tomorrow&apos;s Technology Today
				<span className="animate-waving-hand">!</span>&quot;
			</h2>
			<p className="text-text-secondary text-sm md:text-base text-center text-balance font-medium">
				Charting the Course of Innovation: Spearheading Revolutionary
				Advancements and Transformations in the Dynamic Landscape of
				Technology and Engineering
			</p>
			<div className="gap-x-4 w-full items-center justify-center flex gap-y-4 flex-col sm:flex-row">
				<Button
					size="lg"
					className="w-full sm:w-40"
					variant="outline"
					href="/projects"
				>
					Project
				</Button>
				<Button
					size="lg"
					className="w-full sm:w-40"
					href="/events"
				>
					Events
				</Button>
			</div>
		</div>
	);
};

export default Hero;
