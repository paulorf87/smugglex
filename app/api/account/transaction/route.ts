import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(request:Request){
    const prisma = new PrismaClient();
    
    const body = await request.json();
    const {account_id, amount, description} = body;

    try{
        const account = await prisma.account.findFirst({
            where: {account_id},
        })
        if(!account){
            prisma.$disconnect();
            return NextResponse.json({ok:false, message:'account not found'});
        }
        await prisma.$transaction([
            prisma.account.update({
                where: {account_id},
                data: {balance:account.balance + parseFloat(amount)},
            }), 
            prisma.transactions.create({
                data: {
                    account_id,
                    amount,
                    description,
                }
            })
        ]); 

        prisma.$disconnect();
        return NextResponse.json({ok:true, message:'transaction completed'});

    }catch(error:any){
        prisma.$disconnect();
        return NextResponse.json({ok:false, message:error.message});
    }
}

export async function GET(request:Request){
    const prisma = new PrismaClient();

    const transactions = await prisma.transactions.findMany({

    }); 
    prisma.$disconnect();
    return NextResponse.json(transactions);
}