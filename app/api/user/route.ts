import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

export async function POST(req: NextRequest) {
    // extract the body
    const body = await req.json();
    console.log(body);
    // store the body in the db
    const user = await client.user.create({
        data: {
            username: body.username,
            password: body.password,
        },
    });
    console.log(user.id);
    return Response.json({
        message: "You are logged in.",
    });
}
