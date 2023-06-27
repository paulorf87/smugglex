interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function Container({children, className}:ContainerProps) {
    return (
        <div className={`container mx-auto h-full p-4 sm:p-6 lg:p-8 bg-transparent ${className}`}>
            {children}
        </div>
    )
}
