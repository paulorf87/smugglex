interface DashCardProps {
    children: React.ReactNode;
}

export default function DashCard({children}:DashCardProps){
    return (<div className="bg-light-200 border rounded-xl p-4 shadow-md text-dark-200
    h-fit overflow-auto xl:overflow-hidden">
        {children}
    </div>)
}