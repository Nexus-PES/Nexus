"use client";
import Image from "next/image";
import Link from "next/link";
import {
	idOfDay,
	projectData,
} from "../data";

const ProjectOfDay = () => {
	// const [idOfDay, setIdOfDay] =
	// 	useState(null);

	// const pickRandomId = () => {
	// 	const IDs = projects.map(
	// 		(project) => project.id
	// 	);
	// 	const randomIndex = Math.floor(
	// 		Math.random() * IDs.length
	// 	);
	// 	return IDs[randomIndex];
	// };

	// const updateAtMidnight = () => {
	// 	const now = new Date();
	// 	const midnight = new Date(now);

	// 	midnight.setHours(16, 8, 0, 0);
	// 	const timeUntilMidnight =
	// 		midnight - now;

	// 	setTimeout(() => {
	// 		const newIdOfDay =
	// 			pickRandomId();
	// 		setIdOfDay(newIdOfDay);
	// 	}, timeUntilMidnight);
	// };

	// useEffect(() => {
	// 	updateAtMidnight();
	// }, []);

	console.log(idOfDay);

	return (
		<div className="w-full h-full flex flex-col justify-center items-center py-8 phone:px-2 gap-2">
			<Image
				src={
					projectData[
						idOfDay - 1
					].projectImage
				}
				width={2000}
				height={2000}
				alt="Project of the Day"
			/>
			<div className="text-center">
				{
					projectData[
						idOfDay - 1
					].summary.short
				}
			</div>
			<Link
				className="bg-secondary w-max p-2 rounded-lg"
				href={`/projects/${idOfDay}`}
			>
				Learn More
			</Link>
		</div>
	);
};
export default ProjectOfDay;
