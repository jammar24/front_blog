import React from 'react'
import './App.css'
import Home from './pages/Home'
import Footer from './pages/Footer'
import { Route, Routes } from 'react-router-dom'


function App() {
  

  return (
    <div className="App ">
      <Routes>
        <Route path='/'element={<Home/>}/>


     
        
          
      </Routes>
    </div>


  )
}

export default App
