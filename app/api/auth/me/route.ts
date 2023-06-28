import { NextResponse } from "next/server";
import {verify} from "jsonwebtoken";


export async function POST(request: Request) {
    const body = await request.json();
    const {jwtToken} = body; 
    
    if(jwtToken){
        try{
            const decoded = verify(jwtToken, process.env.JWT_SECRET!);
           return NextResponse.json({ok:true, message:"success", user:decoded});
        }catch(err:any){
            throw new Error("Invalid token");
        }
    }

    return null;
}