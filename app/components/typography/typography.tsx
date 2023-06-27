export function HeadingXL({children, className}:{children:React.ReactNode, className?:string}) {
    return (
      <h1 className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}>
        {children}
      </h1>
    )
}

export function HeadingLG({children, className}:{children:React.ReactNode, className?:string}) {
    return <h2 className={`scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 ${className}`}>
    {children}
  </h2>
}

export function HeadingMD({children, className}:{children:React.ReactNode, className?:string}) {
    return (
        <h3 className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}>
        {children}
        </h3>
      )
}

export function HeadingSM({children, className}:{children:React.ReactNode, className?:string}) {
    return (<h4 className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}>
    {children}
  </h4>)
}

export function Paragraph({children, className}:{children:React.ReactNode, className?:string}) {
    return (<p className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`}>
      {children}
    </p>
  )
}



