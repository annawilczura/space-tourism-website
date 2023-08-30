import { useState } from 'react';
import HomePage from './HomePage'
import data from './data/data.json'
import FirstPageDest from './FirstPageDest'
import SecondPageCrew from './SecondPageCrew'
import ThirdPageTech from './ThirdPageTech'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainNavbar from './MainNavbar'
import { PlanetData } from './models/PlanetData';
import { CrewData } from './models/CrewData';
import { TechData } from './models/TechData';

function App() {
  const planets = data["destinations"] as PlanetData[];
  const crew = data["crew"] as CrewData[];
  const technology = data["technology"] as TechData[];
  const headings = data["page-heading"]
  const [appContainerClassName, setAppContainerClassName] = useState('home-page');

  return (
    <div className={appContainerClassName}>
      <BrowserRouter basename='/space-tourism-website'>
        <MainNavbar/>
        <div className='flex grow items-center'>
          <Routes>
            <Route path="/" element={<HomePage change = {setAppContainerClassName}/>} />
            <Route path='/destinations/*' element={<FirstPageDest heading = {headings["1"]} planets = {planets} change = {setAppContainerClassName}/>} />
            <Route path='/crew/*' element={<SecondPageCrew heading = {headings["2"]} crew = {crew} change = {setAppContainerClassName}/>} />
            <Route path='/technology/*' element={<ThirdPageTech heading = {headings["3"]} technology = { technology } change = {setAppContainerClassName}/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}
export default App
