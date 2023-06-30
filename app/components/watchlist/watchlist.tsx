import { HeadingSM } from "../typography/typography"
import DashCard from "../dash-card/dash-card"
import WatchlistRow from "./watchlist-row"
import {AiOutlineMonitor} from 'react-icons/ai'

async function getWatchlistData(){
    try{
        const response = await fetch('http://localhost:3000/api/watchlist')
        const {data} = await response.json()
        return data; 

    } catch(err){
        console.error(err);
        return []
    }
}

export default async function Watchlist(){
    const data = await getWatchlistData(); 

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
                    <th className="text-gray-500 px-4">This Month($)</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((item:any, index:number) => <WatchlistRow key={index} description={item.description}
                currentMonth={item.currentMonth} />)}
            </tbody>
        </table>
        <div className="flex items-center justify-between border-t pb-8"></div>
    </DashCard>
}