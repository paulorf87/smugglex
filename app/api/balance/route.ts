import { NextResponse } from "next/server";

//mock data
const data = [
    {
      "name": "",
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "28 May",
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "11 Jun",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "25 Jun",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Today",
      "pv": 4800,
      "amt": 2181
    },
  ]

export async function GET(req:Request) {
    return NextResponse.json({ok:true, data})
}