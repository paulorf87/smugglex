import { Reminder } from "@/redux/reminders.slice"
import { useDispatch } from "react-redux"
import {completeReminder} from "@/redux/reminders.slice"


export default function ReminderItem ({reminder}:{reminder: Reminder}){

    const dispatch = useDispatch();

    function handleChange (e: React.ChangeEvent<HTMLInputElement>){
        dispatch(completeReminder(reminder.id));
    }

    return <li className="flex items-center bg-gray-200 hover:bg-orange-200 p-1 mt-2 rounded">
        <input type="checkbox" className="h-4 w-4 text-gray-500 rounded border-gray-300 border mr-2 accent-orange-400" checked={reminder.accomplished}
        onChange={handleChange}/>
        <div className="text-gray-500 text-left px-4">{reminder.task}</div>
    </li>
}