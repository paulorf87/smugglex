import Container from "../components/container/container"
import LoginForm from "../components/login-form/login-form"
import AssistantMessage from "../components/assistant/assistant-message"
import Image from "next/image"
import { FaPiggyBank } from "react-icons/fa"

export default function LoginPage(){
    return <Container>
        <div className="rounded-xl mx-auto grid md:grid-cols-2 overflow-hidden
        h-[600px] max-w-[1200px]">
            <div className="flex flex-col items-center
            px-8 lg:px-24
            justify-center
            bg-light-200">
                <LoginForm/>
                <AssistantMessage>click in the CB button to skip the credentials cracking
                </AssistantMessage>
            </div>
            <div className="bg-primary border-l shadow-lg 
            flex flex-col items-center justify-center
            md:flex gap-4">
                <FaPiggyBank className="text-9xl text-white"/>
                <Image className="border rounded-lg" src="/images/smugglebank.svg" alt="smugglEX Login" width={300} height={300} />
            </div>
        </div>
    </Container>
}