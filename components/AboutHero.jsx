import Link from "next/link";
import React from "react";

const AboutHero = () => {
	return (
		<div className="mx-auto relative gap-y-5 py-6 flex max-w-xl flex-col justify-center items-center">
			<span className="gradient"></span>
			<h1 className="text-clamp capitalize text-center font-black bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient">
				Community
			</h1>
			<h2 className="md:text-4xl text-3xl text-white sm:text-balance text-center font-bold">
				&quot;Our Story: Pioneering Progress in Technology and Innovation&quot;
			</h2>
			<p className="mx-8 mb-8 backdrop:text-text-primary text-sm md:text-base text-center text-balance font-medium leading-5 md:leading-6">
				Welcome to <Link href="/" className="underline">Nexus</Link>, where innovation knows
				no bounds and creativity fuels our passion for making a
				difference in the world of technology and engineering.
			</p>
		</div>
	);
};

export default AboutHero;
