import React from "react";

const Paragraphs = ({ text }) => {
	const sentences = text
		.split(".")
		.filter(Boolean);

	const paragraphs = [];
	let currentParagraph = "";

	for (
		let i = 0;
		i < sentences.length;
		i++
	) {
		currentParagraph +=
			sentences[i] + ".";
		if (
			(i + 1) % 3 === 0 ||
			i === sentences.length - 1
		) {
			paragraphs.push(
				currentParagraph
			);
			currentParagraph = "";
		}
	}

	return (
		<div className="gap-2 flex flex-col text-justify">
			{paragraphs.map(
				(paragraph, index) => (
					<p key={index}>
						{paragraph}
					</p>
				)
			)}
		</div>
	);
};

export default Paragraphs;
