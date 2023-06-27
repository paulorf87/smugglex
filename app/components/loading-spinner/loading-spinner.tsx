import {FaSpinner} from "react-icons/fa";

export default function LoadingSpinner(){
    return <div className="h-full w-full flex justify-center items-center">
        <FaSpinner className="animate-spin text-4xl text-primary"/>
    </div>
}
