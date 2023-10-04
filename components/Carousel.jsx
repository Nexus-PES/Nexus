"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";

const Carouseld = () => {
	const images = [
		{
			id: 1,
			src: "/images/events/unsplash_-HIiNFXcbtQ.png",
			alt: "Image 1",
		},
		{
			id: 2,
			src: "/images/events/unsplash_fT49QnFucQ8.png",
			alt: "Image 2 ",
		},
		{
			id: 3,
			src: "/images/events/unsplash_ioJBsYQ-pPM.png",

			alt: "Image 3",
		},
		{
			id: 4,
			src: "/images/events/unsplash_XtUd5SiX464.png",

			alt: "Image 4",
		},
		{
			id: 5,
			src: "/images/events/unsplash_Wa9ilX9XYOI.png",

			alt: "Image 5",
		},
	];

	const autoplay = useRef(Autoplay({ delay: 2000 }));

	return (
		<div className="flex justify-center flex-col items-center">
			<Carousel
				withIndicators
				height={200}
				sx={{ maxWidth: 320 }}
				mx="auto"
				// plugins={[autoplay.current]}
				// onMouseEnter={autoplay.current.stop}
				// onMouseLeave={autoplay.current.reset}
			>
				<Carousel.Slide>1</Carousel.Slide>
				<Carousel.Slide>2</Carousel.Slide>
				<Carousel.Slide>3</Carousel.Slide>
				{/* ...other slides */}
			</Carousel>
		</div>
	);
};

export default Carouseld;
