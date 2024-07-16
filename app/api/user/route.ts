import { NextRequest } from "next/server";

export function GET() {
    return Response.json({
        email: "amanjifangeria@gmail.com",
        name: "Aman Fangeria",
    });
}

export async function POST(req: NextRequest) {
    // extract the body
    const body = await req.json();
    console.log(body);
    // store the body in the db
    return Response.json({
        message: "You are logged in.",
    });
}
