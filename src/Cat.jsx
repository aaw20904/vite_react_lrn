 
 import {useGetCat} from "./useGetCat"
export const Cat = () =>{
   const {data,   refetchData} = useGetCat()
    
    return (
        <div>
          <h1>{data?.fact}</h1>
          <button onClick={refetchData} className="btn btn-dark">Update cats</button>
        </div>
    )
} 

 