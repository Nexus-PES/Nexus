import React from "react";
import Mentors from "../../components/Mentors";
import Goals from "../../components/Goals";
import Faq from "../../components/Faq";
import SubHero from "../../components/SubHero";
import Discover from "../../components/Discover";
import Domain from "../../components/Domain";
import Link from "next/link";

const About = () => {
	return (
		<>
			<main className="mt-16 mx-4 sm:mx-14 md:mx-28 gap-y-10 md:gap-y-14 flex justify-center">
				<div className="flex max-w-screen-xl flex-col gap-16">
					<SubHero
						title="Community"
						subtitle="Our Story: Pioneering Progress in Technology and Innovation"
					>
						Welcome to{" "}
						<Link
							href="/"
							className="underline text-secondary"
						>
							Nexus
						</Link>
						, where innovation knows no bounds and creativity fuels
						our passion for making a difference in the world of
						technology and engineering.
					</SubHero>
					<Discover />
					<Mentors />
					<Goals />
					<Domain />
					<Faq />
				</div>
			</main>
		</>
	);
};

export default About;
