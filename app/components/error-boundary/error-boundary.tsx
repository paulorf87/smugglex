"use client"
import React from "react"

interface Props {
    children?: React.ReactNode
}

interface State {
    hasError: boolean
}

class ErrorBoundary extends React.Component<Props, State> {
    public state: State = {
        hasError:false
    }

    public static getDerivedStateFromError(_:Error):State{
        return {hasError:true}
    }

    public componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.log("Caught error", error, errorInfo);
    }

    render(){
        if(this.state.hasError){
            return <h1>Sorry, something went wrong</h1>
        }

        return this.props.children; 
    }
}

export default ErrorBoundary;