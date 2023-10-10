import { NextResponse } from "next/server";
import { activityData } from "../../../../data";

export async function GET(request, { params }) {
	const { eventId } = await params;
	// console.log(eventId);
	// console.log(activityData);

	const eventDetail = activityData.find(
		(event) => event.id == eventId
	);
	// console.log(eventDetail)
	return NextResponse.json(eventDetail, { status: 200 });
}
