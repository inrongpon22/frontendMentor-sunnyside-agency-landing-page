import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


// Components
import Header from './components/Header'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Clients from './components/Clients'
import BottomPics from './components/BottomPics'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Clients />
      <BottomPics />
      <Footer />
    </div>
  )
}

export default App
