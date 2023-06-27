import Image from "next/image"
import Avatar from "../avatar/avatar"

export default async function Header(){

    return (
        <header className="w-full bg-dark-100">
            <nav className="container mx-auto py-4 px-2 flex items-center">
                <Image src="/images/smugglex.svg" alt="smugglEX Logo" width={150} height={50} />
                <ul className=" items-center ml-auto hidden sm:flex ">
                    <li className="ml-6 hover:text-primary hover:cursor-pointer">Dashboard</li>
                    <li className="ml-6 text-light-100">Business</li>
                    <li className="ml-6 text-light-100">Accounting</li>
                    <li className="ml-6 text-light-100">Payroll</li>
                </ul>
                <ul className="flex items-center ml-auto">
                    <Avatar source="/images/kingpin.svg" name="Wilson Fisk" />
                    <li className="ml-6 text-light-100">Logout</li>
                </ul>
            </nav>
        </header>
    )
}