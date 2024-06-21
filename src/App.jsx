import { useState } from 'react'
import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { values } from './data'
import './App.css'
import {Navbar, Hero, Card, Joke} from "./assets/content.jsx"
const jokes=[
  {text:"one",time:"11:09"},
  {text:"two",time:"11:11"},
  {text:"three",time:"11:39"},
  {text:"four",time:"11:59"},
];

function App() {
  let cards = values.map(x=><Card k={x}/>)
 return (
  <div style={{maxWidth:"640px"}} className='container w-100  py-2  d-flex flex-column jusify-content-around m-4'>
     <Navbar   />
     <Hero  />
     <div   className='w-100 d-flex flex-row flex-wrap justify-content-center align-itens-between'>
      
     </div>
      
       
  </div>
  )
}


export default App
