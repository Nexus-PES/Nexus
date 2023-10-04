import Carousel from "../components/Carousel";

import Projects from "../components/Projects";
import Activities from "../components/Activities";
import Hero from "../components/Hero";
import FromHeads from "../components/FromHeads";

export default function Home() {
	return (
		<>
			<main className="mt-16 mx-4 sm:mx-14 md:mx-28 gap-y-10 md:gap-y-14 flex justify-center">
				<div className="flex max-w-screen-xl flex-col">
					<Hero />
					{/* <Carousel /> */}
					<Projects />
					<Activities />
					<FromHeads />
				</div>
			</main>
		</>
	);
}
