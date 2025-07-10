import { useState } from 'react'
import './App.css'
import './css/Home.css'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {

  return (
    <>
      <Navbar />
      <Home movie={{title: "Titanic", release_date: "2024",}}/>
    </>
  )
}

export default App
