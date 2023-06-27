"use client"

import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts"
import { useState, useEffect } from "react"


export default function BankAccountChart({data}:{data:any}) {
    const [loadedData, setLoadedData] = useState<any>([]);

    // workaround for hydration error
    useEffect(() => {
        setLoadedData(data);
    }, [data]);

    return <>
    <div className="w-full flex justify-center m-4 overflow-hidden">
        <AreaChart width={500} height={250} data={loadedData}
        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
        <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#F86D38" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#F86D38" stopOpacity={0}/>
            </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="pv" stroke="#F86D38" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
    </div>
    </>
}