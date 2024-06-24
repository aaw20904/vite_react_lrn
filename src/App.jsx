import { useState } from 'react'
import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import {TravelCard, Title } from './modules'
import './App.css'
import {places} from  "./data.js"
 

function App() {
 let content = places.map((x)=><TravelCard tr={x} key={x.key} />)
 console.log(content)
 return (
   <ul className='container d-flex flex-column justify-content-start align-items-start'>
      {content}
   </ul>
  )
}


export default App
