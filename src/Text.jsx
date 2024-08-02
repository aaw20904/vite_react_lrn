import { Button } from "bootstrap";
import React, { useState , useEffect, useRef, useReducer,  useCallback, useMemo, useLayoutEffect } from "react";
 

 function Test(){

  const [trig, setTrig] = useState(true);

  const counter  = useRef(0)
  console.log(Date.now())

   return (
    <div className="d-flex flex-column">
      <button className="btn btn-dark m-1" onClick={()=>counter.current++}>add</button>
      <button className="btn btn-dark m-1" onClick={()=>setTrig(x=>!x)}>show</button>
      <h5>{counter.current}</h5>   
    </div>
   )

 }

 export { Test }