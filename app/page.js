import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Activities from "../components/Activities";
import Hero from "../components/Hero";
import FromHeads from "../components/FromHeads";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="mx-4 sm:mx-14 md:mx-28 gap-y-10 md:gap-y-14 flex justify-center">
			<div className="flex max-w-screen-xl flex-col">
				<Carousel />
				<Hero />
				<Projects />
				<Activities />
				<FromHeads />
			</div>
			</main>
		</>
	);
}
