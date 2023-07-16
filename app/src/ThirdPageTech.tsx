import TechDetails from './TechDetails'
import {
    Route,
    Routes
} from 'react-router-dom'

function ThirdPageTech(props : { technology : TechData[] } ) {
    return (
        <Routes>
            <Route path='/technology/:name/*' element={<TechDetails {...props}/>} />
        </Routes>
    )
}

export default ThirdPageTech