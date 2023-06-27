interface DashCardProps {
    children: React.ReactNode;
    height?: string;
}

export default function DashCard({children, height='fit'}:DashCardProps){
    return (<div className={`h-${height} bg-light-200 border rounded-xl p-4 shadow-md text-dark-200
     overflow-auto xl:overflow-hidden`}>
        {children}
    </div>)
}