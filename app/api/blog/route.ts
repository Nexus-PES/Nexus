import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function POST(request: Request) {
    const req = await request.json();

    let blog = null
    let status = "Not Found"

    if (req.type == "Event") {
        blog = await prisma.event.findUnique({
            where: {
                id: req.id,
            },
        });
    }

    if (req.type == "Project") {
        blog = await prisma.project.findUnique({
            where: {
                id: req.id,
            },
        });
    }

    if (blog != null) {
        status = "Found";
    }


    return NextResponse.json({ blog, status: "Found Match" });
}

export async function GET() {
    const events = await prisma.event.findMany({
        select: {
            id: true,
            date: true,
            name: true,
            icon: true,
            domain: true,
            description: true,

        }
    })

    const projects = await prisma.project.findMany({
        select: {
            id: true,
            name: true,
            icon: true,
            domain: true,
            summary: true,
            github_link: true,
            deploymentLink: true
        }
    })

    const res = { events, projects }

    return NextResponse.json(res);


}
