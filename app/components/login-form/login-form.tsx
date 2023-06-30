"use client"

import { HeadingMD, Paragraph } from "../typography/typography"
import Button from "../button/button"
import Link from "next/link"
import {z} from "zod"
import { SubmitHandler, set, useForm } from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { redirect, useRouter } from "next/navigation"
import { useState } from "react"


const formSchema = z.object({
    username: z.string().min(3,{
        message: "Username must be at least 3 characters long"
    }),
    password: z.string().min(8,{
        message: "Password must be at least 8 characters long"
    })
});

type FormSchemaType = z.infer<typeof formSchema>;


export default function LoginForm(){
    const [errorMessage, setErrorMessage] = useState<string>("");
    const router = useRouter();

    const {register, handleSubmit, formState: {errors},setValue} = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema)
    })

    const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
        const {username, password} = data;

        try {
            const response = await fetch("http://localhost:3000/api/auth/login",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({username, password}), 
                next:{
                    revalidate:0
                }
            });
            console.log('[login-form]','request sent');
            const data = await response.json();

            if(response.ok){
                return router.push("/");
            } else {
                console.log('[login-form NOK]',data)
                setValue("password","");
                setValue("username","");
                setErrorMessage('Invalid credentials');
            }
        } catch (error) {
            setValue("password","");
            setValue("username","");
            setErrorMessage('Invalid credentials');
            console.log('[login-form error]',error);
        }  
    }

    return <div className="
    w-full
    text-center flex flex-col gap-2">
        <HeadingMD className="text-gray-500">Login</HeadingMD>
        {errorMessage && <div className="text-red-500 text-sm font-bold animate-pulse">{errorMessage}</div>}
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-1 px-4">
                <label className="text-gray-500 text-left" htmlFor="username">username</label>
                <input type="text" id="username" 
                className="text-gray-500 p-2 rounded-md border outline-none"
                {...register("username")}/>
                <div className="text-red-500 text-left text-sm">{errors.username?.message}</div>
            </div>

            <div className="flex flex-col gap-1 px-4">
                <label className="text-gray-500 text-left" htmlFor="password">password</label>
                <input type="password" id="password" 
                className="text-gray-500 p-2 rounded-md border outline-none"
                {...register("password")}/>
                <div className="text-red-500 text-left text-sm">{errors.password?.message}</div>
            </div>
            <div className="px-4">
                <Button type="submit">Login</Button>
            </div>
        </form>
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