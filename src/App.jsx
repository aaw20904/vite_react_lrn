import { useState } from 'react'
import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import {Header,SocialNetButtons,About,Footer} from "./content.jsx"
function App() {

 return (
  <div style={{maxWidth:"640px"}} className='container w-100 bg-dark text-light py-2 border border-danger d-flex flex-column jusify-content-around m-4'>
    <Header />
    <SocialNetButtons />
    <About />
    <Footer />
  </div>
  )
}


export default App
