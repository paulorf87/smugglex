interface WatchlistRowProps {
    description: string;
    currentMonth: string | number;
}

export default function WatchlistRow({description, currentMonth}: WatchlistRowProps){
    return <tr className="hover:bg-gray-200">
                <td className="text-gray-500 text-left px-4">{description}</td>
                <td className="text-gray-500 text-center">{currentMonth}B</td>
            </tr>   
}