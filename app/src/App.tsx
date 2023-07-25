import './App.sass'
import HomePage from './HomePage'
import data from './data/data.json'
import FirstPageDest from './FirstPageDest'
import SecondPageCrew from './SecondPageCrew'
import ThirdPageTech from './ThirdPageTech'
import DestinationDetails from './DestinationDetails'
import CrewDetails from './CrewDetails'
import TechDetails from './TechDetails'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainNavbar from './MainNavbar'

function App() {
  const planets = data["destinations"] as PlanetData[];
  const crew = data["crew"] as CrewData[];
  const technology = data["technology"] as TechData[];

  return (
    <BrowserRouter>
      <MainNavbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/destinations/*' element={<FirstPageDest planets = {planets}/>} />
        <Route path='/crew/*' element={<SecondPageCrew crew = {crew}/>} />
        <Route path='/technology/*' element={<ThirdPageTech technology = { technology }/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
