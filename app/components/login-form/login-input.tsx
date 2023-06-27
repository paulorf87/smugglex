
export default function LoginInput({id, type="text"}:{id:string, type?:string}){
    return <div className="flex flex-col gap-1 px-4">
            <label className="text-gray-500 text-left" htmlFor="username">{id}</label>
            <input type={type} id={id} className="text-gray-500 p-2 rounded-md border outline-none"/>
    </div>
}