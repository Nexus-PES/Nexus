import { Button } from "./Button";
import Menu from "./Menu";
import Link from "next/link";

const Navbar = () => {
	return (
		<>
			<div className="py-2 px-4 grid grid-cols-3 w-full items-center content-center justify-between lg:gap-72 border-secondary/40 border-b-[1px] lg:w-full sticky top-0 backdrop-blur-md bg-white/5 z-50">
				<div className="md:hidden justify-self-start">
					<Menu />
				</div>
				<Link
					href="/"
					className="font-bold text-lg justify-self-center md:justify-self-start"
				>
					NEXUS
				</Link>
				<ul className="hidden md:flex md:gap-5  md:justify-between  md:h-full md:items-center md:text-[12px] md:font-bold">
					<li className="uppercase">
						<Link href="/">home</Link>
					</li>
					<li className="uppercase">
						<Link href="/about">about</Link>
					</li>
					<li className="uppercase">
						<Link href="/discover">discover</Link>
					</li>
					<li className="uppercase">
						<Link href="/projects">projects</Link>
					</li>
					<li className="uppercase">
						<Link href="/events">events</Link>
					</li>
				</ul>
				<Button
					size="sm"
					className="text-sm md:text-base font-semibold py-30 px-6 md:px-10 justify-self-end"
				>
					Login
				</Button>
			</div>
		</>
	);
};

export default Navbar;
