import TechDetails from './TechDetails'
import {
    Navigate,
    Route,
    Routes
} from 'react-router-dom'

function ThirdPageTech(props : { technology : TechData[] } ) {

    const defaultTech = "launch_vehicle";

    return (
        <div>
            <h1>03 space launch 101</h1>
            <Routes>
                <Route index element={<Navigate to={`/technology/${defaultTech}`}/>} />
                <Route path=':name' element={<TechDetails {...props}/>} />
            </Routes>
        </div>

    )
}

export default ThirdPageTech