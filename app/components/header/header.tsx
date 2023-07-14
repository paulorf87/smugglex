import Image from "next/image"
import { PrismaClient } from "@prisma/client"
import { decodeToken } from "@/app/lib/users"
import { cookies } from "next/headers";
import { HeaderUser } from "./header-user";
import { Suspense } from "react";
import Link from "next/link";

async function getCurrentUser(){
    const token = cookies().get('next-token')?.value!;
    const prisma = new PrismaClient();
    
    try{
        
        const {username}:any = decodeToken(token);
        const user = await prisma.user.findUnique({
            where: {
                username
            }
        });
        
        prisma.$disconnect();
        return user;

    }catch(error){
        console.log('[auth error]',"Invalid token");

        prisma.$disconnect();
        return null;
    }
}


export default async function Header(){

    const user = await getCurrentUser();
    
    return (
        <header className="w-full bg-dark-100">
            <nav className="container mx-auto py-4 px-2 flex items-center">
                <Image src="/images/smugglex.svg" alt="smugglEX Logo" width={150} height={50} />
                <ul className=" items-center ml-auto hidden sm:flex ">
                    <li className="ml-6 hover:text-primary hover:cursor-pointer">
                        <Link href="/">Dashboard</Link>
                    </li>
                    <li className="ml-6 text-light-100 cursor-not-allowed">Business</li>
                    <li className="ml-6 text-light-100 cursor-not-allowed">Accounting</li>
                    <li className="ml-6 text-light-100 cursor-not-allowed">Payroll</li>
                </ul>
                <div className="flex items-center ml-auto">
                    {user ?
                    <Suspense fallback={<p>loading...</p>}>
                        <HeaderUser user={user}/>
                    </Suspense>
                    : 'Not logged in'}
                </div>
            </nav>
        </header>
    )
}