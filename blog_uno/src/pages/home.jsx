import React from 'react'
import Register from '../components/Register'
import './styles/home.css'
const home = () => {
  return (
  <>
  <div className='home'> 
   <div className='home__circle-1'></div>
   <div  className='home__circle-2'></div>
   <div className='home__circle-3'></div>
  </div>
    <Register/>
</>
  )
}

export default home