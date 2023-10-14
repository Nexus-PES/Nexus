import { NextResponse } from "next/server";
import { activityData } from "../../../data";

export function GET() {
	return NextResponse.json({ activityData }, { status: 200 });
}

export async function POST(request) {
	console.log("Inside Events Route \n")
	const req = await request.json();
	const { eventId } = req;
	// console.log(eventId);
	// console.log(activityData);

	const eventDetail = activityData.find((event) => event.id == eventId);
	// console.log(eventDetail)
	console.log("Outside")
	return NextResponse.json(eventDetail, { status: 200 });
}
