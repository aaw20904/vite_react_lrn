import { useState } from "react"
import { useContext } from "react"
import { AppContext } from "./App"


export const ChangeProfile = (props) =>{
    
    const {setUsername} = useContext(AppContext)
   const [newUserName, setNewUserName] = useState("");

   return(
    <div>
        <input onChange={(event)=>{
            setNewUserName(event.target.value);
        }} />

        <button className="btn btn-dark mx-2" onClick={()=>{
            setUsername(newUserName);
        }}>Change user Name</button>
    </div>
   )
}