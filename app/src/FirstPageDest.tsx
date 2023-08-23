import { useEffect } from 'react';
import DestinationDetails from './DestinationDetails'
import { Navigate, Routes, Route } from 'react-router-dom'

function FirstPageDest(props : { heading: string, planets : PlanetData[], change: (appContainerClassName : string) => void}) {
    
    useEffect(() => {
        props.change('destination-page');
    });

    const defaultPlanet = "moon";

    return (
        <div className='flex flex-col w-full h-full'>
            <h1 className='page-heading'><span className='heading-number'>01</span> {props.heading.toUpperCase()}</h1>
            <Routes>
                <Route index element={<Navigate to = {`/destinations/${defaultPlanet}`}/>} />
                <Route path=':name' element={<DestinationDetails {...props}/>} />
            </Routes>
        </div>
    )
}

export default FirstPageDest