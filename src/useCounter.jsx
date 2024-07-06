import { useState, useEffect } from "react";

export const useCounter = () => {

const [flag, setFlag] = useState(true);
  const [res, setRes] = useState(null);
  const [fetching, setFetching] = useState(false);
   
  useEffect(() => {
    const fetchData = async () => {
        setFetching(true);
      let result = await fetch("https://catfact.ninja/fact")
        .then(res => res.json())
        .then(data => data);
        setFetching(false);
      setRes(result);
      console.log(result);
      console.log("effect");
    };

    fetchData();
  }, [flag]);

  const update =()=>{
    setFlag(x=>!x)
  }

  return [res, update, fetching]

}

