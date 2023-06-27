import { NextResponse } from "next/server";

const mockData = [
    {
        description: 'Income from weapons trade',
        currentMonth: 10.5,
        currentYear: 120.5,
    },
    {
        description: 'Income from bio-weapons',
        currentMonth: 2.5,
        currentYear: 12.5,
    },
    {
        description: 'Income from Cyberscrimes',
        currentMonth: 5.5,
        currentYear: 15.5,
    },
    {
        description: 'Investments ',
        currentMonth: -8.75,
        currentYear: -16.25,
    },{
        description: 'Money laundry fees',
        currentMonth: 2.87,
        currentYear: 6.25,
    }, 
    {
        description: 'Expenses with assassinations',
        currentMonth: -10.5,
        currentYear: -12.5,
    },
    {
        description: 'Expenses with bribes',
        currentMonth: -5.5,
        currentYear: -15.5,
    }
]

export async function GET(req:Request){

    return NextResponse.json({ok:true, data: mockData});
}