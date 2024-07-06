import {useQuery} from "@tanstack/react-query"
import Axios from "axios"

const Test =()=>{
    const {data,isFetched, refetch } = useQuery({queryKey:["cat"], queryFn: ()=>{
        return Axios.get("https://catfact.ninja/fact").then((res=>res.data))
    }})

    return (
        <div>
          <h2>cat fact</h2>
          <p>{data?.fact}</p>
        <button onClick={refetch} className="btn btn-dark">Update</button>
        </div>
    )
}

export {Test}