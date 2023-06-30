import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import type { User } from "@/types/user";

const prisma = new PrismaClient();

export async function GET(req:Request){
    const users = await prisma.user.findMany();

    return NextResponse.json({ok:true, users});       
}

export async function POST(request:Request){
    const body = await request.json();
    const { name, username, password, avatarUrl }:User = body;
    if(!name || !username || !password || !avatarUrl) 
        return NextResponse.json({ok:false, error: "Missing required fields"} as any);

    const user = await prisma.user.create({
        data: {
            name: name,
            username: username,
            password: password,
            avatarUrl: avatarUrl
        }
    })

    prisma.$disconnect();
    return NextResponse.json({ok:true, user});
}