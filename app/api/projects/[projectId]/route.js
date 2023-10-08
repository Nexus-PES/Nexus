import { NextResponse } from "next/server";
import { projectData } from "../../../../data";

export async function GET(request, { params }) {
	const { projectId } = await params;
	// console.log(projectId);
    console.log(projectId)

	const projectDetail = projectData.find(
		(project) => project.id == projectId
	);
    // console.log(projectDetail)
	return NextResponse.json(projectDetail , { status: 200 });
}
