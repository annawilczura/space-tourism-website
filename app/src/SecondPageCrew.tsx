import './SecondPageCrew.sass'
import CrewDetails from './CrewDetails'
import { Navigate } from 'react-router-dom'
import {
    Route,
    Routes
} from 'react-router-dom'

function SecondPageCrew(props: {crew: CrewData[]}) {

    const defaultRole = "commander";

    return (
        <div>
            <h1>02 meet your crew</h1>
            <Routes>
                <Route index element={<Navigate to={`/crew/${defaultRole}`}/>} />
                <Route path=':role' element={<CrewDetails {...props}/>} />
            </Routes>
        </div>
    )


}

export default SecondPageCrew