import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Build from './Components/Build/Build'
import Companies from './Components/Companies/Companies'
import Branding from './Components/Branding/Branding'
import Custome from './Components/Custome/Custome'
import People from './Components/People/People'
import Compukter from './Components/Compukter/Compukter'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
   <>
   <Header/>
   <Build/>
   <Companies/>
   <Branding/>
   <Custome/>
   <People/>
   <Compukter/>
   <Footer/>
   </>
  )
}

export default App