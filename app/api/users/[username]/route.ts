import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request:Request, {params}:{params:{username:string}}){
    
    const username = params.username;
    
    const user = await prisma.user.findUnique({
        where: {username}, 
        select:{
            username:true,
            name:true,
            avatarUrl:true,
            account:{
                select:{
                    account_id:true,
                    balance:true,
                }
            }
        }
    });

    prisma.$disconnect();
    return NextResponse.json({ok:true, user});
}

export async function DELETE(request:Request, {params}:{params:{username:string}}){
    const username = params.username;
    
    const user = await prisma.user.delete({
        where: {username},
    });

    prisma.$disconnect();
    return NextResponse.json({ok:true, message:'user deleted', user});
}