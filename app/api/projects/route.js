import { NextResponse } from "next/server";
import { projectData } from "../../../data";

export function GET() {
	return NextResponse.json({ projectData }, { status: 200 });
}
