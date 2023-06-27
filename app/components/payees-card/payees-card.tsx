import Avatar from "../avatar/avatar";
import DashCard from "../dash-card/dash-card";
import { HeadingSM } from "../typography/typography";
import {BsFillPersonFill} from 'react-icons/bs'

export default function PayeesCard(){
    return  <DashCard>
        <div className="flex items-center px-2 justify-between border-b">
            <HeadingSM className="text-gray-500 py-2 flex items-center">
                <BsFillPersonFill className="inline-block mr-2" />
                Payees
            </HeadingSM>
            <button className="text-primary font-bold bg-gray-200 px-4 py-1 
            ouline-none focus:outline-none 
            rounded hover:bg-gray-300">Add Payee</button>
        </div>
        <div className='flex items-center justify-start gap-2 py-2'>
            <Avatar source="images/spiderman.svg" name="Peter Parker" />
            <Avatar source="images/hammerhead.svg" name="Hammer Head" />
            <Avatar source="images/tombstone.svg" name="Tomb Stone" />
            <Avatar  name="May Parker" />
            <Avatar  name="Mary Jane" />
        </div>
    </DashCard>
}