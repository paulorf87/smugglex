import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { createUserToken } from "@/app/lib/users"
import { serialize } from "cookie"


const mockCredentials = {
    username: "admin",
    password: "administer"
}

export async function POST(req: Request) {
    const body = await req.json();
    const { username, password } = body;

    if (username === mockCredentials.username && password === mockCredentials.password) {
        // Serialize cookie 
        const token = createUserToken(username);
        // const serializedToken = serialize("token", token, {
        //     path: "/",
        //     httpOnly: true,
        //     expires: new Date(Date.now() + 60 * 60 * 1000), // 1 hour
        // });

        // Send serialized cookie in the response header
        cookies().set({
            name: "next-token",
            value: token,
            path: "/",
            httpOnly: true,
        });
        return NextResponse.json({ ok: true, message:"success" });
    }else {
        throw new Error("Invalid credentials");
    }
}