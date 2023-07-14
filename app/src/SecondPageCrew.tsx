import './SecondPageCrew.sass'
import CrewDetails from './CrewDetails'
import {
    Route,
    Routes
} from 'react-router-dom'

function SecondPageCrew(props: CrewData[]) {
    const crew = props;

    return (
        <Routes>
            <Route path='/crew/:name' element={<CrewDetails crew = {crew}/>} />
        </Routes>
    )
}

export default SecondPageCrew