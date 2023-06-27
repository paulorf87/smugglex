import DashCard from "./components/dash-card/dash-card"
import LoadingSpinner from "./components/loading-spinner/loading-spinner"

export default function Loading(){
    return <DashCard>
        <LoadingSpinner/>
    </DashCard>
}