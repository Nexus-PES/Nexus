"use client";
import React, { useState } from "react";
import Image from "next/image";
import { faqData } from "../data";

import { BiChevronDown } from "react-icons/bi";
const Faq = () => {
	return (
		<div className="w-full">
			<h1 className="font-semibold text-2xl md:text-3xl mb-4  mt-12 ml-2 bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text">
				FAQ
			</h1>
			<FaqBox />
		</div>
	);
};

const FaqBox = () => {
	const FaqBox = ({ question, answer }) => {
		const [toggle, setToggle] = useState(false);

		return (
			<div
				className="px-4 py-5 flex flex-col border-gray-800 border-b hover:bg-white/5 transition-colors font-poppins text-xs cursor-pointer"
				onClick={() => setToggle((prev) => !prev)}
			>
				<div className="flex justify-between text-md  items-start gap-x-4">
					<p className="text-white text-sm font-medium leading-tight">
						{question}
					</p>

					<button className="w-7 h-7 p-1.5 rounded hover:bg-gray-900/50 flex justify-center items-center">
						<BiChevronDown
							size={"1.5rem"}
							className={`${toggle && "rotate-180"}
							 transition-all transform`}
						/>
					</button>
				</div>
				<p className={`mt-3 text-xs text-text-primary font-normal transition ${toggle ? 'h-fit' : 'h-0'} `}>
					{toggle &&  answer }
				</p>
			</div>
		);
	};

	return (
		<div className="">
			{faqData.map((item, index) => (
				<FaqBox
					key={index}
					{...item}
				/>
			))}
		</div>
	);
};

export default Faq;
