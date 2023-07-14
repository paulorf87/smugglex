import {GiDevilMask} from 'react-icons/gi';


interface AssistantMessageProps {
    children: React.ReactNode;
}

export default function AssistantMessage({children}: AssistantMessageProps){
    return <blockquote className="bg-gray-800 text-primary py-1 px-2 rounded w-fit
    text-sm text-justify mt-2 flex items-center">tip: {children}</blockquote>
}

