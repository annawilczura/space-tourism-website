import './App.css'
import HomePage from './HomePage'
import data from './data/data.json'
import TechDetails from './TechDetails'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const technology = data["technology"] as TechData[];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/technology/:name' element={<TechDetails technology = { technology }/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
