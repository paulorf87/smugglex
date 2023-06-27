"use client"

import { HeadingMD, Paragraph } from "../typography/typography"
import LoginInput from "./login-input"
import Button from "../button/button"
import Link from "next/link"


export default function LoginForm(){

    function handleClick(){
        console.log("Submitted");
    }

    return <div className="
    w-full
    text-center flex flex-col gap-2">
        <HeadingMD className="text-gray-500">Login</HeadingMD>
        <LoginInput id="username"/>
        <LoginInput id="password" type="password"/>
        <div className="px-4">
            <Button onClick={handleClick} type="submit">Login</Button>
        </div>
        <Paragraph className="text-gray-500">Don't have an account? 
            <span className="text-primary ml-1">
                Register here
            </span>
        </Paragraph>
        <div className="flex flex-row justify-center gap-2">
            <Link href={"/"}
            className="bg-white rounded-full 
            px-4 py-2 border shadow-lg 
            text-gray-500
            flex justify-center items-center gap-2">
                <div className="p-2 rounded-full border border-primary text-primary
                text-center flex items-center justify-center font-bold">CB</div>
                Login with <span className="text-primary ml-1">Crime Boss</span>
            </Link>
        </div>
    </div>
}