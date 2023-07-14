import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { createUserToken } from "@/app/lib/users"
import { UnauthorizedError } from "@/app/lib/errors"
import { PrismaClient } from "@prisma/client"



export async function POST(req: Request) {
    const body = await req.json();
    const { username, password } = body;
    
    const prisma = new PrismaClient();

    const user = await prisma.user.findFirst({
        where: {
            username: username,
        }
    });

    if (!user) {
        throw new UnauthorizedError();
    }

    if(user.password !== password) {
        throw new UnauthorizedError();
    }

    const token = createUserToken(username);

    // TODO --> serialize token 
    
    cookies().set({
        name: "next-token",
        value: token,
        path: "/",
        sameSite: "lax",
    });
    console.log('[api login]','success');
    return NextResponse.json({ ok: true, message:"success" });   
}