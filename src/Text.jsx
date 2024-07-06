import React, { useState , useEffect, useRef, useReducer,  useCallback, useMemo} from "react";


 const AdditionalButton =React.memo( ({handler})=>{
     console.log("chRendering", Date.now())
        return (
        <button  onClick={handler} className="btn btn-success">additional</button>
        )
    } 
 )



 const Test = ({par=123}) =>{

  const initialState={
    process:false,
    error: false,
    success: false,
    content:""
  }

  console.log(Date.now(),"rendered")
 
   const [trigger, setTrigger] = useState(false);
   const tm=useRef(null)
  const [x, setX] = useState(0)

    const deep = useCallback(() => {
    setX((Math.random() * 1000) | 0);
  }, []);

   useMemo(()=>{deep()},[par]);

  function reducer (state, action) {
    switch(action.type){
      case "process":
       return {...state,error:false, success:false, process:true}
      break;
      case "success":
       return {...state,process:false, error:false, success:true, content:action.content}
      break;
      case "error":
       return {...state, error:true}
      break;
      default:
      throw new Error("A:Wrong operation")
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
   
   
  



const handleButtonClick = useCallback(() => {
    setTrigger(x => !x);
  }, []);

   useEffect(()=>{
    const upload=async()=>{
      dispatch({type:"process"});
      let data = await fetch("https://catfact.ninja/fact")
           .then(f=>f.json())
           .catch(e=>{
            dispatch({type:"error"})
           })
      tm.current.innerText=Date.now();
      dispatch({type:"success", content:data})
    }
    upload();
   },[trigger])


  return(
    <div className="d-flex flex-column align-items-center">
      {state.process && <div className="spinner-border position-fixed m-2 top-50 left-50" role="status"><span className="visually-hidden">Loading...</span></div> }
    <button className="btn btn-dark" onClick={ handleButtonClick }>Push</button>
     {state.success && <h6>{state.content?.fact}</h6>}
     <h6 ref={tm}></h6>
     {state.error && <h5 className="text-danger">Unexpected downloading error</h5>}
     <h6>{x}</h6>
     <AdditionalButton handler={handleButtonClick }/>
    </div>
  
    
  )
 }


 export {Test}