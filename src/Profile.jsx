 import {ChangeProfile} from "./CahngeProfile"
 import { useContext } from "react"
import { AppContext } from "./App"

export const Profile = (props) =>{
    const {username} = useContext(AppContext)
    return(
        <div>
         <h1>profile of : {username}</h1>
     <ChangeProfile  />    
        </div>
       
    )

}