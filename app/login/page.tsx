import Container from "../components/container/container"
import LoginForm from "../components/login-form/login-form"

export default function LoginPage(){
    return <Container>
        <div className="rounded-xl grid grid-cols-2 overflow-hidden
        h-[600px]">
            <div className="flex flex-col items-center
            px-8 lg:px-24
            justify-center
            bg-light-200">
                <LoginForm/>
            </div>
            <div className="bg-primary border-l shadow-lg 
            flex flex-col items-center justify-center
            md:flex">
            </div>
        </div>
    </Container>
}