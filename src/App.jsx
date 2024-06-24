import { useState } from 'react'
import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import {MemeHeader,Meme } from './modules'
import './App.css'
 

function App() {
 
  
 return (
   <ul className='container d-flex flex-column justify-content-start align-items-center w-100'>
      <MemeHeader />
      <Meme />
   </ul>
  )
}


export default App
