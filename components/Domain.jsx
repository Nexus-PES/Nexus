import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PiLinkSimpleBold } from "react-icons/pi";
import { DomainData } from "../data";

const Domain = () => {
	return (
		<div>
			<h1 className="text-2xl md:text-3xl font-semibold text-white">
				About{" "}
				<span className="text-primary font-bold bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text ">
					Domains
				</span>
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 w-full rounded-lg gap-4 mb-10 mt-4">
				{DomainData.map(({ id, image, name, description }) => (
					<div
						className="w-full rounded-lg border-[1px] border-white/10 p-4 gap-3 flex flex-col hover:bg-white/5 transition-colors"
						key={id}
					>
						<div className="flex w-full gap-3 flex-col">
							<div className="flex gap-4">
								{/* <Image
									src={image}
									height={12}
									width={12}
									className="h-12 w-12 rounded hidden md:visible"
								/> */}
								<Link
									href="/projects"
									className="font-semibold hover:text-primary flex items-center"
								>
									{" "}
									<span className="md:text-2xl text-xl">
										{name}
									</span>
									<PiLinkSimpleBold className="text-2xl w-7 h-7 p-1" />
								</Link>
							</div>
							<p className="text-text-primary text-sm md:text-base">
								{description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Domain;
