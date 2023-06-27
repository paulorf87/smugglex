import DashCard from "../dash-card/dash-card";
import { HeadingSM, Paragraph } from "../typography/typography";
import {AiFillBell} from 'react-icons/ai'

export default function ReminderCard(){
    return <DashCard>
        <div className="flex items-center justify-between border-b">
            <HeadingSM className="text-gray-500 py-2 items-center flex gap-1">
                <AiFillBell className="inline-block mr-2" />
                Reminders
            </HeadingSM>
        </div>
        <div className="flex items-center justify-between py-2">
            <Paragraph className="text-gray-500">
                Set up the emmergency data destruction protocol and feel safe 
                in case of authrorities raiding your financil information. It's quick and easy, just 
                click in the link below to start the process.
            </Paragraph>
        </div>
        <div className="flex items-center justify-between py-2">
            <Paragraph className="text-primary font-bold">
                Setup now 
            </Paragraph>
        </div>
    </DashCard>
}