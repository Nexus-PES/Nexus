import React from "react";
import { goalsData } from "../data";

const Goals = () => {
	
	return (
		<div className="">
			<h1 className="font-semibold text-2xl md:text-3xl mb-4  ">
				Our
				<span className="font-bold ml-2 bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text">
					Goals
				</span>
			</h1>

			<div>
				{goalsData.map((goal, i) => (
					<div
						key={i}
						className="flex gap-y-1 my-2 flex-col"
					>
						<h2 className="font-semibold text-xl  w-auto">
							{goal.heading}
						</h2>
						<p className="text-sm  text-text-secondary mt-1">
							{goal.description}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Goals;

