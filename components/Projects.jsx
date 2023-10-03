import { Button } from "./Button";
import ProjectContainer from "./ProjectContainer";
import { projectData } from "./data";

const Projects = () => {
	const firstThree =
		projectData.slice(0, 3);

	return (
		<div>
			<h1 className="font-bold text-2xl font-montserrat mb-4  mt-12">
				Our
				<span className="font-bold ml-2 bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text">
					Projects
				</span>
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
				{firstThree.map(
					(project) => (
						<ProjectContainer
							key={
								project.id
							}
							{...project}
						/>
					)
				)}
			</div>
			<div className="flex justify-center items-center">
				<Button
					size="lg"
					// variant="outline"
					className="w-full my-8 md:w-1/2 font-medium font-montserrat"
					href="/projects"
				>
					Show More
				</Button>
			</div>
		</div>
	);
};

export default Projects;
