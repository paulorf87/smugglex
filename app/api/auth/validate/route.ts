import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { decodeToken } from "@/app/lib/users";
import { JwtPayload } from "jsonwebtoken";
import { UnauthorizedError } from "@/app/lib/errors";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
    const prisma = new PrismaClient();
    const body = await request.json();
    const { token } = body;

    const decoded = decodeToken(token) as JwtPayload;
    const { username } = decoded;

    const user = await prisma.user.findFirst({
        where: {
            username: username,
        }
    })

    if (!user) {
        prisma.$disconnect();
        throw new UnauthorizedError()
    }else {
        const {name, username, avatarUrl, ...rest} = user;
        const userInfo = JSON.stringify({name, username, avatarUrl});

        
        prisma.$disconnect();
        return NextResponse.json({ok: true, message: "success", userInfo})
    }
}