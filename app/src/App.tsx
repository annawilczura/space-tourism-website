import './App.css'
import HomePage from './HomePage'
import data from './data/data.json'
import DestinationDetails from './DestinationDetails'
import CrewDetails from './CrewDetails'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Router,
} from "react-router-dom";

function App() {
  const planets = data["destinations"] as PlanetData[];
  const crew= data["crew"] as CrewData[];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/destinations/:name' element={<DestinationDetails planets = {planets}/>} />
        <Route path='/crew/:role' element={<CrewDetails crew = {crew}/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
