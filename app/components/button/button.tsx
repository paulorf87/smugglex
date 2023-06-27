interface ButtonInterface {
    children: React.ReactNode; 
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

export default function Button({children, onClick, type}: ButtonInterface){
    return <button 
    className="bg-primary text-white rounded-lg py-2 
    my-2
    self-center
    w-full"
    onClick={onClick}
    type={type}
    >
        {children}
    </button>
}