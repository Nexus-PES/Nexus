import ActivityContainer from "./ActivityContainer";
import { Button } from "./Button";
import { activityData } from "./data";

const Activities = () => {
	return (
		<div>
			<h1 className="font-bold text-2xl mb-4  mt-12">
				Our
				<span className="font-bold ml-2 bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text">
					Activities
				</span>
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
				{activity_data.map((activity, i) => (
					<ActivityContainer
						key={activity.i}
						{...activity}
					/>
				))}
			</div>
			<div className="flex justify-center items-center">
				<Button
					size="lg"
					// variant="outline"
					className="w-full my-8 md:w-3/4"
					href="/activities"
				>
					Show More
				</Button>
			</div>
		</div>
	);
};

export default Activities;

export const activity_data = [
	{
		id: 1,
		images: [
			"/images/events/unsplash_-HIiNFXcbtQ.png",
			"/images/events/unsplash_fT49QnFucQ8.png",
			"/images/events/unsplash_ioJBsYQ-pPM.png",
			"/images/events/unsplash_l5Tzv1alcps.png",
			"/images/events/unsplash_Wa9ilX9XYOI.png",
			"/images/events/unsplash_XtUd5SiX464.png",
		],
		date: new Date("Sep 9, 2023 9:00:00"),
		summary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur quis",
		likes: 2,
		eventName: "NexHunt",
	},
	{
		id: 2,
		images: [
			"/images/events/unsplash_-HIiNFXcbtQ.png",
			"/images/events/unsplash_fT49QnFucQ8.png",
			"/images/events/unsplash_ioJBsYQ-pPM.png",
			"/images/events/unsplash_l5Tzv1alcps.png",
			"/images/events/unsplash_Wa9ilX9XYOI.png",
			"/images/events/unsplash_XtUd5SiX464.png",
		],
		date: new Date("Sep 9, 2023 9:00:00"),
		summary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur quis",
		likes: 3,
		eventName: "NeuroNex",
	},
	{
		id: 3,
		images: [
			"/images/events/unsplash_-HIiNFXcbtQ.png",
			"/images/events/unsplash_fT49QnFucQ8.png",
			"/images/events/unsplash_ioJBsYQ-pPM.png",
			"/images/events/unsplash_l5Tzv1alcps.png",
			"/images/events/unsplash_Wa9ilX9XYOI.png",
			"/images/events/unsplash_XtUd5SiX464.png",
		],
		date: new Date("Sep 9, 2023 9:00:00"),
		summary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur quis",
		likes: 9,
		eventName: "NexHunt",
	},
	{
		id: 4,
		images: [
			"/images/events/unsplash_-HIiNFXcbtQ.png",
			"/images/events/unsplash_fT49QnFucQ8.png",
			"/images/events/unsplash_ioJBsYQ-pPM.png",
			"/images/events/unsplash_l5Tzv1alcps.png",
			"/images/events/unsplash_Wa9ilX9XYOI.png",
			"/images/events/unsplash_XtUd5SiX464.png",
		],
		date: new Date("Sep 9, 2023 9:00:00"),
		summary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur quis",
		likes: 9,
		eventName: "NeuroNex",
	},
	{
		id: 5,
		images: [
			"/images/events/unsplash_-HIiNFXcbtQ.png",
			"/images/events/unsplash_fT49QnFucQ8.png",
			"/images/events/unsplash_ioJBsYQ-pPM.png",
			"/images/events/unsplash_l5Tzv1alcps.png",
			"/images/events/unsplash_Wa9ilX9XYOI.png",
			"/images/events/unsplash_XtUd5SiX464.png",
		],
		date: new Date("Sep 9, 2023 9:00:00"),
		summary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur quis",
		likes: 4,
		eventName: "NexHunt",
	},
	{
		id: 6,
		images: [
			"/images/events/unsplash_-HIiNFXcbtQ.png",
			"/images/events/unsplash_fT49QnFucQ8.png",
			"/images/events/unsplash_ioJBsYQ-pPM.png",
			"/images/events/unsplash_l5Tzv1alcps.png",
			"/images/events/unsplash_Wa9ilX9XYOI.png",
			"/images/events/unsplash_XtUd5SiX464.png",
		],
		date: new Date("Sep 9, 2023 9:00:00"),
		summary:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sapiente consectetur nemo aliquam nostrum autem vitae, cupiditate quia pariatur quis",
		likes: 2,
		eventName: "NeuroNex",
	},
];
