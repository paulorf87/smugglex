import { HeadingSM } from "../typography/typography";

interface AvatarProps{
    source?: string;
    name: string;
}


export default function Avatar({source, name="payee"}:AvatarProps){

    const initials = name.split(' ').map((name)=>name[0]).join('');

    return <>
        {source
            ? <img src={source} alt={name} className={`rounded-[50%] h-12
            w-12 object-cover border drop-shadow-md hover:scale-105`} />
            : <div className={`bg-primary rounded-[50%] w-12 p-2
            hover:scale-105`}>
                <HeadingSM className="text-white text-center">{initials}</HeadingSM>
            </div>
        }
    </>
    
}