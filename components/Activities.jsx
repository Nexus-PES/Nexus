import ActivityContainer from "./ActivityContainer";
import { Button } from "./Button";
import { activityData } from "../data";

const Activities = () => {
	return (
		<div>
			<h1 className="font-semibold text-2xl md:text-3xl mb-4  mt-12">
				Our
				<span className="font-bold ml-2 bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text">
					Activities
				</span>
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
				{activityData.map((activity, i) => (
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
