"use client"
import React from "react";
import { setCookie } from "cookies-next"
import { useRouter } from "next/navigation";
import Avatar from "../avatar/avatar";

export async function HeaderUser({user}:any){
    const router = useRouter();
    
    const handleLogout = () => {
        setCookie('next-token',null);
        router.refresh();
    }

    React.useEffect(()=>{
        router.refresh();
    },[])

   return  <div className="flex items-center gap-4">
            <span>{user.name}</span>
            <Avatar source={user.avatarUrl}  name={user.name}/>
            <button className="border border-primary rounded px-2 py-1 hover:border-gray-500"  onClick={handleLogout}>Logout</button>
    </div> 
}