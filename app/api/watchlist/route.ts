import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

import type { WatchlistTransaction } from "@/types/watchlist";

const prisma = new PrismaClient();

const mockData:any = [
    
]

export async function GET(req:Request){

    return NextResponse.json({ok:true, data: mockData});
}

export async function POST(request:Request){
    const body = await request.json();
    const { account, value, userId } = body;
    const transaction:WatchlistTransaction = {
        account: account,
        value: value,
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: userId
    }

    prisma.$disconnect();
    return transaction;
}