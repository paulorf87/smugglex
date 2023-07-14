import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    let token = request.cookies.get('next-token')?.value;
    if (token) {
        try{

            const response = await fetch("http://localhost:3000/api/auth/validate",{
                headers: {
                    "Content-Type": "application/json",
                }, 
                method: "POST",
                body: JSON.stringify({token}), 
                next:{
                    revalidate:0
                }
            }); 

            const data = await response.json();

            if(response.ok){
                return NextResponse.next();
            } else {
                console.log("[middleware: invalid token]" );
                return NextResponse.redirect(new URL("/login", request.url));
            }
    
        }catch(err:any){
            console.log('[middleware: token validation error]', "malformed or non-existent token");
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }
    console.log('[middleware: no token found]');
    return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
    matcher: ["/","/dashboard","/home"],
}