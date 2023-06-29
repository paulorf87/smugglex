import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { createUserToken } from "@/app/lib/users"
// import { serialize } from "cookie"
import { UnauthorizedError } from "@/app/lib/errors"


const mockCredentials = {
    username: "admin",
    password: "administer"
}

export async function POST(req: Request) {
    const body = await req.json();
    const { username, password } = body;

    if (username !== mockCredentials.username || password !== mockCredentials.password) {
        throw new UnauthorizedError();
    }

    const token = createUserToken(username);

    // TODO --> serialize token 
    
    cookies().set({
        name: "next-token",
        value: token,
        path: "/",
        httpOnly: true,
    });
    console.log('[api login]','success');
    return NextResponse.json({ ok: true, message:"success" });   
}