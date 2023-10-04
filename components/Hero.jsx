import React from "react";
import { Button } from "./Button";

const Hero = () => {
	return (
		<div className="mx-auto relative gap-y-5 py-6 flex max-w-xl flex-col justify-center items-center">
			<span className="gradient"></span>
			<h1 className="text-clamp text-center font-black bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient">
				NEXUS CLUB
			</h1>
			<h2 className="md:text-4xl text-3xl text-white sm:text-balance text-center font-bold">
				&quot;Unlocking Tomorrow&apos;s Technology Today
				<span className="animate-spin -hand">!</span>&quot;
			</h2>
			<p className="mx-5 backdrop:text-text-primary text-sm md:text-base text-center text-balance font-medium leading-5 md:leading-6">
				Charting the Course of Innovation: Spearheading Revolutionary
				Advancements and Transformations in the Dynamic Landscape of
				Technology and Engineering
			</p>
			<div className="gap-x-4 w-full mt-5 items-center justify-center flex gap-y-4 flex-col sm:flex-row">
				<Button
					size="lg"
					className="w-full sm:w-40 bg-background"
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
