import Image from "next/image"
import Avatar from "../avatar/avatar"
import { cookies } from "next/headers"
import {redirect} from "next/navigation"
import { PrismaClient } from "@prisma/client"

async function logout(){
    "use server"
    cookies().set("next-token", "");
    redirect("/login");
}

async function getUserByUsername(username:string){
    const prisma = new PrismaClient();
    const user = await prisma.user.findUnique({
        where: {
            username: username
        }
    });
    return user;
}

export default async function Header(){

    return (
        <header className="w-full bg-dark-100">
            <nav className="container mx-auto py-4 px-2 flex items-center">
                <Image src="/images/smugglex.svg" alt="smugglEX Logo" width={150} height={50} />
                <ul className=" items-center ml-auto hidden sm:flex ">
                    <li className="ml-6 hover:text-primary hover:cursor-pointer">Dashboard</li>
                    <li className="ml-6 text-light-100 cursor-not-allowed">Business</li>
                    <li className="ml-6 text-light-100 cursor-not-allowed">Accounting</li>
                    <li className="ml-6 text-light-100 cursor-not-allowed">Payroll</li>
                </ul>
                <ul className="flex items-center ml-auto">
                    <Avatar source="/images/kingpin.svg" name="Wilson Fisk" />
                    {/* testing server actions (NEXT.js 13) */}
                    <form action={logout}>
                        <button className="ml-6 text-light-100 hover:text-primary">Logout</button>
                    </form>
                </ul>
            </nav>
        </header>
    )
}