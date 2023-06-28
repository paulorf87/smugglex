import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    let token = request.cookies.get('token');
    const { pathname } = request.nextUrl;

    if (token?.value === "iamanaughtytoken") {
        console.log("token found");
        if(pathname === "/login" || pathname === "/home") {
            return NextResponse.redirect(new URL("/", request.url));
        }
        return NextResponse.next();
    }
    
    return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
    matcher: ["/","/dashboard","/home"],
}