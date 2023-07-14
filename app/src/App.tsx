import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './HomePage'
import data from './data/data.json'
import DestinationDetails from './DestinationDetails'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Router,
} from "react-router-dom";
import FirstPageDest from './FirstPageDest'

function App() {
  const planets = data["destinations"] as PlanetData[];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/destinations/:name' element={<DestinationDetails planets = {planets}/>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
