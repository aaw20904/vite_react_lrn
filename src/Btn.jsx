import axios from "axios";
import { useEffect, useState, useMemo } from "react";

  function MemoTutorial ({str="abcd"}) {
  
  const [sw, setSw] = useState(false);

  const [sorted, setSorted] = useState(0);

  console.log("Rendring...") 

  const sorting=(par)=>{
    console.log("DEEP calculations...")
    return    str.split("").sort().join("");
  }
  
  const sortedStr= useMemo(()=>sorting(str),[str])

  return(
  <div className="d-flex flex-column">
  
    <button onClick={ ()=>setSw(!sw) } className={sw ? "btn btn-success" : "btn btn-dark"}>Update</button>
    <h4>{ sortedStr}</h4>
  </div>
  )
}

export {MemoTutorial}