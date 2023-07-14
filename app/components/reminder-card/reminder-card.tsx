"use client"

import { RootState } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";


import DashCard from "../dash-card/dash-card";
import { HeadingSM } from "../typography/typography";
import {AiFillBell} from 'react-icons/ai'
import ReminderItem from "./reminder-item";

export default function ReminderCard(){
    const dispatch = useDispatch();
    const reminders = useSelector((state: RootState) => state.reminders);

    return <DashCard>
        <div className="flex flex-col h-64 overflow-auto">
        <HeadingSM className="text-gray-500 py-2 flex items-center border-b">
                <AiFillBell className="mr-2"/>
                Reminders
            </HeadingSM>
            <ul className="py-4">
                {reminders.map((reminder) => <ReminderItem key={reminder.id} reminder={reminder}/>)}
            </ul>
        </div>
    </DashCard>
}