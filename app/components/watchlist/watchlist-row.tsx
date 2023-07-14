interface WatchlistRowProps {
    description: string;
    date: string ;
    amount: string | number;
}

export default function WatchlistRow({description, amount, date}: WatchlistRowProps){
    return <tr className="hover:bg-orange-300">
                <td className="text-gray-500 text-left px-4">{description}</td>
                <td className="text-gray-500 text-center">{amount}</td>
                <td className="text-gray-500 text-center">{date}</td>
            </tr>   
}