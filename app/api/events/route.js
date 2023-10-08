import { NextResponse } from "next/server";
import { activityData } from "../../../data";

export function GET() {
	return NextResponse.json({ activityData }, {status: 200});
}

