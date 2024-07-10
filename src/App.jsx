import React, { useCallback, useLayoutEffect, useMemo, useState, useEffect, useContext, createContext, useRef } from 'react'
 
import * as bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import  './App.css'
import { Test } from './Text'
 

 const db = [
    {title:"mytext", id:1234, img:`https://fsymbols.com/thumbs/92.png`},
    {title:"mytext", id:567, img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLHIcIaLPjQJUGH8kSFFlyK1tudziIf8J0GA&s`},
    {title:"mytext", id:63546, img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPdMWsSQvdeClddfzrUX21DDKbKCav_TOLVQ&s`},
    {title:"mytext", id:7864, img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbxbkwZ6YWEemyCcZxN9GWHjkx1_p6JNJA3Q&s`},
 ]




 
function App() {
 

 return (
  <div className='container d-flex flex-column'>
   <Test/>   
  </div>
 )

}
 
 
 
export default App
