import { useState } from 'react'
import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import {Header,SocialNetButtons,About,Footer} from "./content.jsx"
function App() {

 return (
  <div className='container w-100 bg-dark text-light py-2 border border-danger d-flex flex-column jusify-content-around'>
    <Header />
    <SocialNetButtons />
    <About />
    <Footer />
  </div>
  )
}


export default App
