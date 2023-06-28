import { NextResponse } from "next/server"
import { cookies } from "next/headers"


const mockCredentials = {
    username: "admin",
    password: "administer"
}

export async function POST(req: Request) {
    const body = await req.json();
    const { username, password } = body;
    console.log("username", username);
    if (username === mockCredentials.username && password === mockCredentials.password) {
        cookies().set({
            name: "token",
            value: "iamanaughtytoken",
            path: "/",
            httpOnly: true,
        });
        console.log("cookie set");
        return NextResponse.json({ ok: true, message:"success" });
    }else {
        throw new Error("Invalid credentials");
    }
}