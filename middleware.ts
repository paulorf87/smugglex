import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    let token = request.cookies.get('next-token')?.value;
    if (token) {
        try{
            const response = await fetch("http://localhost:3000/api/auth/me",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({jwtToken:token}), 
                next:{
                    revalidate:0
                }
            }); 

            if(response.ok){
                return NextResponse.next();
            } else {
                console.log("Invalid token" );
                return NextResponse.redirect(new URL("/login", request.url));
            }
            
        }catch(err:any){
            console.log(err.message);
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }
    
    return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
    matcher: ["/","/dashboard","/home"],
}