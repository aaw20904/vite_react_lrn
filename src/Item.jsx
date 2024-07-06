import React, {useState, useEffect} from "react"
////  {title:"text", cb:"function",id:"number",img:"link"}


const  Item = React.memo( ({itemInfo={}})=> {
    const[fact, setFact] = useState("");
    useEffect(()=>{
        const getData = async()=>{
            const data = await fetch("https://catfact.ninja/fact").then(x=>x.json())
            console.log(data)
            setFact(data.fact)
        }

        getData();
   
             
    },[])
return (
    <div className="d-flex flex-column p-1 m-1 border border-success">
     <h4>{itemInfo.title}</h4>
     <p>{fact}</p>
      <img className="img-fluid" src={itemInfo.img} alt="" />
      <button onClick={()=>itemInfo.cb(itemInfo.id)} className="btn btn-primary">Add...</button>
    </div>
 )
})

export {Item}