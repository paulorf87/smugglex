import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export  async function PATCH(request:Request){
    const prisma = new PrismaClient();
    
    const body = await request.json();
    const {account_id, amount} = body;

    try{
        
        const account = await prisma.account.findFirst({
            where: {account_id},
        });
    
        if(!account){
            prisma.$disconnect();
            return NextResponse.json({ok:false, message:'account not found'});
        }
    
        const newBalance  = account.balance + amount;
        const updated = await prisma.account.update({
            where: {account_id},
            data: {balance:newBalance},
            select: {balance:true},
        });
    
        prisma.$disconnect();
        return NextResponse.json({ok:true, balance:updated.balance});

    } catch(error: any){
        prisma.$disconnect();
        return NextResponse.json({ok:false, message:error.message});
    }

}