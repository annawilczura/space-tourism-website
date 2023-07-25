import './FirstPageDest.sass'
import DestinationDetails from './DestinationDetails'
import { Navigate, Routes, Route } from 'react-router-dom'

function FirstPageDest(props : { planets : PlanetData[]}) {

    const defaultPlanet = "moon";

    return (
        <div className='page-content'>
            <h1>01 pick your destination</h1>
            <Routes>
                <Route index element={<Navigate to = {`/destinations/${defaultPlanet}`}/>} />
                <Route path=':name' element={<DestinationDetails {...props}/>} />
            </Routes>
        </div>
    )
}

export default FirstPageDest