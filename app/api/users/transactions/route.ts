import { NextResponse } from "next/server"; 
import type { NextRequest } from "next/server";
import { decodeToken } from "@/app/lib/users";
import { JwtPayload } from "jsonwebtoken";

export async function GET(request:NextRequest){

    const requestHeaders = new Headers(request.headers);
    const token = requestHeaders.get('Authorization')?.split('Bearer ')[1];
    if(!token){
        return NextResponse.json({ok:false, message:"token not found"});
    }

    const decoded = decodeToken(token) as JwtPayload;
    const {username} = decoded;

    // get the username 

    // get the transactions for the user


    return NextResponse.json({ok:true, message:"success", username});
}