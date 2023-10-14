import { NextResponse } from "next/server";
import { projectData } from "../../../data";

export function GET() {
	return NextResponse.json({ projectData }, { status: 200 });
}

export async function POST(request) {
	const req = await request.json();
	const { projectId } = req;
	// console.log(projectId);
	console.log(projectId);

	const projectDetail = projectData.find(
		(project) => project.id == projectId
	);
	// console.log(projectDetail)
	return NextResponse.json(projectDetail, { status: 200 });
}
