import { useState } from 'react'
import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import {User, Planet} from "./User"
import  './App.css'
 
 

function App() {
 const names = ["Anna","Bill","Charlie","Emiliy","George"]
  const users = [
    {name: "PEdro", age:22, key:10},
    {name:"Jake", age:30, key:11},
    {name:"Bill", age:40, key:12,},
    {name:"Katherine", age:35, key:13}
  ]

  const solarsys = [
    {name:"Mars",isGasPlanet: false},
    {name:"Earth", isGasPlanet: false},
    {name:"Jupiter", isGasPlanet: true},
    {name:"Venus", isGasPlanet: false},
    {name:"Neptune", isGasPlanet: true},
    {name:"Uranus", isGasPlanet: true},
  ] 
  
  const content = solarsys.map((value,index)=>{
    return <Planet x={value} key={index} />
  })

 
 return (
  <div  className='App'>
     {content}
  </div>
 )

}
 
 
 
export default App
