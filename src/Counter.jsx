import {useCounter} from "./useCounter"

function Counter() {
  const [res, y, inProcess] = useCounter();
  console.log("Mount", Date.now());
  return (
  <div>
   {  inProcess &&
    (
        <div className="spinner-border position-fixed" style={{top:"25vh",left:"50vw" }} role="status">
        <span className="visually-hidden">Loading...</span></div> 
    )

   }

      <button onClick={y} className="btn btn-dark">upd</button>
      <h4>{res?.fact}</h4>
    </div>
  );
}

export { Counter };