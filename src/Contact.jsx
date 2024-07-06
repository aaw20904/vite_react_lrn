  import { useContext } from "react"
import { AppContext } from "./App"
import {useQuery} from "@tanstack/react-query"
import Axios from "axios"

 export const Contact =() =>{
    const {username } = useContext(AppContext)

    const {data:catsData, isLoading, isError, refetch} = useQuery({queryKey:["cat"], queryFn: async()=>{
      return    Axios.get("https://catfact.ninja/fact")
          .then((res)=>res.data)}  }) 

   if(isLoading){
    <p>load...</p>
   }

   if(isError){
    <p>404</p>
   }

    return ( 
      <div>
        <h1>Contact page of {username}</h1> 
        {catsData?.fact}
        <button  className="btn btn-dark" onClick={refetch}>update</button>

      </div>
    
    )
}