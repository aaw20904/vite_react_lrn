import { useState } from "react";
import {useReducer, useEffect} from "react"

const initialState={
    loadInProcess:false,
    loadCompleted:false,
    loadError:false,
    loadedText:""
}



function reducer (state, action) {
   switch(action.type){
    case "loading":
      return {...state, loadError:false, loadCompleted:false, loadInProcess:true}
    break;
    case "success":
     return {...state, loadInProcess:false, loadCompleted:true, loadedText:action.data}
    break;
    case "error":
      return {...state, loadInProcess:false, loadCompleted:false,  loadError:true}
    break;
    default:
    throw new Error("Andrew:Unknow state!");
   }
}

function Post () {
   const[ state, dispatch] = useReducer(reducer,initialState);

  async function  getRes(){
      dispatch({type:"loading"});
       await fetch("https://catfact.ninja/fact")
            .then(x=>{
                if (x.ok) {
                  return x.json()  
                } else {
                    dispatch({type:"error"});
                    throw new Error("Error fetching")
                }
            })
            .then(data=>{ dispatch({type:"success", data:data.fact})})
            .catch(e=>{
                dispatch({type:"error"});
                return null;
            })

  }

   return (
     <div className="container d-flex flex-column">
       <button className="btn btn-dark" onClick={()=>getRes()}>update</button>
       {state.loadInProcess && <div className="spinner-border" role="status">
  <span className="visually-hidden">Loading...</span>
</div> }
        {state.loadCompleted && <>
        
        <h2>{state?.loadedText}</h2>
        </>}

        {state.loadError && <h2 className="text-danger">Fetch error!</h2>}
     </div>
   )


}



export {Post}