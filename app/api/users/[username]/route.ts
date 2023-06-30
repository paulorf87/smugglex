import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request:Request, {params}:{params:{username:string}}){
    
    const username = params.username;
    
    const user = await prisma.user.findUnique({
        where: {username},
    });

    return NextResponse.json({ok:true, user});
}