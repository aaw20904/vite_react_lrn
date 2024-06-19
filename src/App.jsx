import { useState } from 'react'
import * as bootstrap from 'bootstrap'
 
import viteLogo from '/vite.svg'
import {Header, MainContent} from './content'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'


function App() {
 return (
  <div className='container w-100'>
   <Header />
   <MainContent />
  </div>
  )
}

export default App
