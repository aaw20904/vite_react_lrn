 
 
import airbnbLogo from "./airbnb.svg"

function Navbar(){
  return (
    <nav className='d-flex fles-row justify-content-start align-items-center p-2'>
     <img src="./img/airbnb.svg" style={{height:"35px",}} />
     <h3 className='h3 text-danger no-margin-bottom mx-1'>airbnb</h3>
    </nav>
  )
} 

function Hero (){
  return(
      <section className="d-flex flex-column justify-content-start align-items-start">
      <grid className="parentGrid">
        <img src="./img/1.jpg" alt="1" className="div1 img-fluid rounded p-1" />
        <img src="./img/2.jpg" alt="2" className="div2 img-fluid p-1 rounded" />
        <img src="./img/3.jpg" alt="3" className="div3 img-fluid p-1 rounded" />
        <img src="./img/4.jpg" alt="4" className="div4 img-fluid p-1 rounded" />
        <img src="./img/5.jpg" alt="5" className="div5 img-fluid p-1 rounded" />
        <img src="./img/4.jpg" alt="6" className="div6 img-fluid p-1 rounded" />
        <img src="./img/3.jpg" alt="7" className="div7 img-fluid p-1 rounded" />
      </grid>
      <h2 className="h2">Online expirences</h2>
      <p className="p text-start my-2">&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quos, dicta assumenda itaque consequatur ducimus consectetur dolorem et molestias explicabo non in
       accusamus blanditiis corporis, recusandae expedita deserunt ipsam commodi.
       </p>
    </section>
  )

}

function Card({k}) {
  let status = 'out';
  let statusCnt='';
    switch(k.status){
      case 'new':
       statusCnt= <div className="bage-red">NEW</div>
      break;
      case 'avaliable':
       statusCnt= <div className="bage-green">AVALIABLE</div>
      break;
      case 'out':
       statusCnt= <div className="bage-gray">Sold out</div>
      break;
      default:
    }

    return(
     <section key={k.key} className="d-flex flex-column ustify-content-start mx-2 align-items-start">
        {statusCnt}
      <img src={k.img} className="img-fluid rounded" />
      <div className="d-flex flex-row justify-content-start align-items-start my-0 py-0">
        <i className="text-danger my-1">&#xF588;</i>
        <p className="p my-1">({k.stars})</p>
        <p className="p my-1">{k.country}</p>
      </div>
      <div className="d-flex flex-row justify-content-start align-items-start m-0 p-0">
        <p className="font-weight-bold my-0 p">From ${k.price}</p> <p className="py-0 p"> / person</p>
      </div>

     </section>
    )
  }

  function Joke({text, time}){
    return(
      <div className="border border-danger d0flex flex-column justify-content-start align-items-start" >
            <h2 className="text-start w-50 h2">{text}</h2>
      <p className="p text-start m-1">{time}</p>
      </div>

    )
  }
  

export { Navbar, Hero, Card, Joke }