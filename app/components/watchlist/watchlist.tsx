import { HeadingSM } from "../typography/typography"
import DashCard from "../dash-card/dash-card"
import WatchlistRow from "./watchlist-row"
import {AiOutlineMonitor} from 'react-icons/ai'
import { PrismaClient } from "@prisma/client"
import { cookies } from "next/headers"
import { decodeToken } from "@/app/lib/users"
import { JwtPayload } from "jsonwebtoken"

async function getWatchlistData(){
    try{
        const response = await fetch('http://localhost:3000/api/account/transaction', 
        {
            method: 'GET',
            next:{
                revalidate: 60
            }
        })
        const data = await response.json()
        return data; 

    } catch(err){
        console.error(err);
        return []
    }
}

async function getAllTransactions(){
    const prisma = new PrismaClient();
    
    try{
        const token = cookies().get('next-token')?.value;
        if(!token) return [];
    
        const decoded = decodeToken(token) as JwtPayload;
        const {username}  = decoded;
    
        const user = await prisma.user.findUnique({
            where: {
                username
            }
        })
        if(!user) return [];
    
        const account = await prisma.account.findFirst({
            where: {
                user_id: user.id
            },
            include:{
                transactions: true
            }
        }); 
    
        if(!account) return [];
    
        await prisma.$disconnect();
        return account.transactions.slice(0,10);

    }catch(err:any){
        console.error('Error retrieving transactions', {details:err.message});
        await prisma.$disconnect();
        return [];
    }

}

export default async function Watchlist(){
    const transactions = await getAllTransactions();

    function dateToString(date:Date){
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        return `${day}/${month}/${year}`
    }

    function formatCurrency(amount:number|string){
        const parsed = parseFloat(amount as string);
        if(parsed < 0) return `-$${Math.abs(parsed).toFixed(2)}M`; // negative
        
        return `$${parsed.toFixed(2)}M`;
    }


    return <DashCard>
        <div className="flex items-center justify-between pt-2 border-b">
            <HeadingSM className="text-gray-500 py-2 flex items-center">
                <AiOutlineMonitor className="inline-block mr-2" />
                Watchlist
            </HeadingSM>
        </div>
        <table className="table-auto w-full">
            <thead>
                <tr>
                    <th className="text-gray-500 px-4 text-left">Account</th>
                    <th className="text-gray-500 px-4">Amount (in USD)</th>
                    <th className="text-gray-500 px-4">Date</th>
                </tr>
            </thead>
            <tbody>
                {transactions && transactions.map((item:any, index:number) => <WatchlistRow key={index} description={item.description}
                amount={formatCurrency(item.amount)} date={dateToString(item.date)}/>)}
            </tbody>
        </table>
        <div className="flex items-center justify-between border-t pb-8"></div>
    </DashCard>
}