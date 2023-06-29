import { NextResponse } from "next/server";
import {verify} from "jsonwebtoken";


export async function POST(request: Request) {
    const body = await request.json();
    const {jwtToken} = body; 
    
    if(jwtToken){
        const decoded = verify(jwtToken, process.env.JWT_SECRET!);
        return NextResponse.json({ok:true, message:"success", user:decoded});
    }

    return null;
}