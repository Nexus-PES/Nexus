"use client";
import React, { useState } from "react";
import Image from "next/image";
import { faqData } from "@/data";

const Faq = () => {
	return (
		<div className="w-full">
			<h1 className="font-bold text-2xl  mb-4 mt-12 bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text">
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
				className="px-4 py-5 flex flex-col border-gray-800 border hover:bg-gray-700 rounded font-poppins text-xs cursor-pointer"
				onClick={() => setToggle((prev) => !prev)}
			>
				<div className="flex justify-between text-md  items-start gap-x-4">
					<p className="text-white text-sm font-medium leading-tight">
						{question}
					</p>

					<button className="w-6 h-6 p-1.5 rounded hover:bg-gray-900/50">
						<Image
							src="/images/icons/cross.svg"
							width={45}
							height={45}
							alt="open description"
							className={`${toggle && "rotate-45"}
							 transition-all transform`}
						/>
					</button>
				</div>
				{toggle && (
					<p className="mt-3 text-sm font-normal text-gray-100 font-inter">
						{answer}
					</p>
				)}
			</div>
		);
	};


	return (
		<div className="space-y-2">
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
