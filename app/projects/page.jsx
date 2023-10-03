"use client";
import React, { useState } from "react";
import ProjectOfDay from "../../components/ProjectOfDay";
import { projectData } from "../../components/data";
import "@splidejs/react-splide/css";
import ProjectContainer from "../../components/ProjectContainer";

const ProjectPage = () => {
	return (
		<div className="flex flex-col h-full w-full">
			<div>
				<h1 className="font-bold text-5xl font-montserrat pt-8 text-center">
					<span className="font-bold mr-2 bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text">
						Project
					</span>
					of the Day
				</h1>
			</div>

			<ProjectOfDay className="flex h-full p-4" />

			<div className="flex flex-col gap-4">
				<p className="text-2xl font-bold">
					All our{" "}
					<span className="font-bold bg-gradient-to-b from-primary to-secondary inline-block text-transparent bg-clip-text">
						Projects
					</span>
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
					{projectData.map(
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
			</div>
		</div>
	);
};

export default ProjectPage;
