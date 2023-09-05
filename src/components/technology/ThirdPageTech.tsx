import { useEffect } from 'react';
import TechDetails from './TechDetails'
import { TechData } from '../../models/TechData';
import {
    Navigate,
    Route,
    Routes
} from 'react-router-dom'

function ThirdPageTech(props : { heading: string, technology : TechData[], change: (appContainerClassName : string) => void } ) {

    useEffect(() => {
        props.change('technology-page');
    });

    const defaultTech = "launch_vehicle";

    return (
        <div className='flex h-full flex-col w-full'>
            <h1 className='page-heading'><span className='heading-number'>02</span> {props.heading.toUpperCase()}</h1>
            <Routes>
                <Route index element={<Navigate to={`/technology/${defaultTech}`}/>} />
                <Route path=':name' element={<TechDetails {...props}/>} />
            </Routes>
        </div>

    )
}

export default ThirdPageTech