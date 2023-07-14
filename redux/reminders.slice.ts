import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Reminder{
    id:number;
    task:string;
    accomplished: boolean
}

const initialState:Reminder[] = [
    {id:1, task:"Pay Tombstone to kill Spiderman", accomplished:false},
    {id:2, task:"Pay Hammerhead to kill Daredevil", accomplished:false},
    {id:3, task:"Finance Norman Ousborn's research", accomplished:true},
]

const remindersSlice = createSlice({
    name:"reminders",
    initialState,
    reducers:{
        getReminders: (state)=>{
            state;
        },
        addReminder: (state, action:PayloadAction<Reminder>)=>{
            [...state, action.payload];
        },
        completeReminder: (state, action:PayloadAction<number>)=>{
            state.map((reminder)=>{
                if(reminder.id === action.payload){
                    if(reminder.accomplished) reminder.accomplished = false;
                    else reminder.accomplished = true;
                }
            })
        }
    }
});

export const {getReminders, addReminder,completeReminder} = remindersSlice.actions;
export default remindersSlice.reducer;
