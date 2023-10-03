import React from "react";
import Mentors from "../../components/Mentors";
import Goals from "../../components/Goals";
import Faq from "../../components/Faq";
import AboutHero from "../../components/AboutHero";
import Discover from "../../components/Discover";
import Navbar from "../../components/Navbar";

const About = () => {
	return (
		<>
			<main className="mt-16 mx-4 sm:mx-14 md:mx-28 gap-y-10 md:gap-y-14 flex justify-center">
				<div className="flex max-w-screen-xl flex-col">
					<AboutHero />
					<Discover />
					{/* <Button size="sm">Sarang</Button>
			<Button>Sarang</Button>
			<Button size="lg">Sarang</Button>
			<Button size="lg" variant="outline" className='w-full' href="www.google.com">Sarang</Button>
			<Button size="lg" variant="ghost" className='w-full' href="www.google.com">Sarang</Button> */}

					<Mentors />
					<Goals />
					<Faq />
				</div>
			</main>
		</>
	);
};

export default About;
