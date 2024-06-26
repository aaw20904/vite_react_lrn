
function User (props){
      return (
        <ul>
          <li key={1}>{props.name}</li>
        <li key={2}>{props.age}</li>

        </ul>
     )
  
}

const Planet = ({x})=>{
    console.log(x.name)
    return  x.isGasPlanet ?  <p>{x.name}</p> : '';
    
}

export {User, Planet}