import { useEffect } from 'react'
import CrewDetails from './CrewDetails'
import { Navigate } from 'react-router-dom'
import { CrewData } from '../../models/CrewData'
import {
    Route,
    Routes
} from 'react-router-dom'

function SecondPageCrew(props: {heading: string, crew: CrewData[], change: (appContainerClassName : string) => void}) {
    
    useEffect(() => {
        props.change('crew-page');
    });

    const defaultRole = "commander";

    return (
        <div className='flex h-full flex-col w-full'>
            <h1 className='page-heading'><span className='heading-number'>03</span> {props.heading.toUpperCase()}</h1>
            <Routes>
                <Route index element={<Navigate to={`/crew/${defaultRole}`}/>} />
                <Route path=':role' element={<CrewDetails crew={props.crew} heading={props.heading}/>} />
            </Routes>
        </div>
    )


}

export default SecondPageCrew