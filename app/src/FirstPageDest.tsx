import './FirstPageDest.sass'
import DestinationDetails from './DestinationDetails'
import {
    Route,
    Routes
} from 'react-router-dom'

function FirstPageDest(props: PlanetData[]) {
    const planets = props;

    return (
        <Routes>
            <Route path='/destinations/:name' element={<DestinationDetails planets = {planets}/>} />
        </Routes>
    )
}

export default FirstPageDest