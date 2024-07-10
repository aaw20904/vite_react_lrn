import { Button } from "bootstrap";
import React, { useState , useEffect, useRef, useReducer,  useCallback, useMemo, useLayoutEffect} from "react";
import {images} from "./data.js" 

          
 const Item =  React.memo(({cb})=>{ 

   console.log(Date.now());
   return(
    <button className="btn btn-dark" onClick={()=>cb()}>push</button>
   )

 })

 function Test({c=1}){
  const [state, setState] = useState(false);
  

  const init={
    content:false,
    loading:false,
    success:false,
    error:false
  }

   const btnHandler = useCallback( ()=>{
      setState(x=>!x);
  },[])

  const reducer = (current, event)=>{
     switch(event.type){
      case "success":
        return { ...current, success:true, loading:false, content:event.data }
      break;
      case "loading":
        return { ...current, success:false, loading:true, content:false }
      break;
      case "error":
        return { ...current, success:false, loading:false, content:false, error:event.error}
      break;
     }      
  }

  const [mainState, dispatcher] = useReducer(reducer,init);

 

  useEffect(()=>{
    const getDataFromInet = async () =>{
      try{
         dispatcher({type:"loading"})
        const resp = await fetch("https://catfact.ninja/fact").then(x=>x.json())
        dispatcher({type:"success",data:resp.fact})
      } catch(e) {
        dispatcher({type:"error",error:e.message})
      }
     
    }

    getDataFromInet();
  },[state])

  

  return(
    <div className="d-flex flex-column algn-items-start justify-content-start">
      {mainState.success && <h2>Cat Facts</h2>}
       <section className={mainState.loading ? "d-none":""}><Item cb={btnHandler} /></section>
       {mainState.content && <h5>{mainState.content}</h5>}
       <section className={mainState.loading ? "centered-element" : "d-none"}>
         <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
       </section>
       {mainState.error && <h5 className="text-danger">{mainState.error}</h5>}

    </div>
  )
}

 export { Test }