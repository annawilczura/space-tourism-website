import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './HomePage'
import FirstPageDest from './FirstPageDest';
import data from './data/data.json';
import './models/PlanetData'

function App() {
  const planetsData = data["destinations"] as PlanetData[];
  return (
    <FirstPageDest {...planetsData[0]}  />
  )
}

export default App
