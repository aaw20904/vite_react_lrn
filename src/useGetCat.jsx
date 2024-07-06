 
import Axios from "axios";
import { useState } from "react";


export const useGetCat = () =>{

    const [cats, setCats] = useState(null);
    const [isLoaded , setIsLoaded] = useState(false)

    const updCats = ()=>{
      setIsLoaded(false)
      setCats( Axios.get("https://catfact.ninja/fact")
      .then((res)=>{
        setIsLoaded(true)
        setCats(res.data) })
       )
    }
     

    return { data:cats,  fetchData:updCats }


}