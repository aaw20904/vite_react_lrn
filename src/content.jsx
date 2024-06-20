import reactLogo from './assets/react.svg'
import employee from './assets/employe.jpg'
  function Header(){
    return(
        <div className="d-flex flex-column justify-content-start align-items-center p-2">
          <img className='img-fluid' src={employee} alt="employee" />
          <h2 className='h1' style={{fontFamily:"Inter",marginTop:"18px", marginBottom:"8px"}}>Aida Koric</h2>
            <h3 className='h5 my-1'> WEB project Manager</h3>
            <h5 className='h6 my-1'>does job well</h5>
        </div>
    )
  }

  function SocialNetButtons(){
    return(
        <div className='d-flex justify-content-around align-items-between flex-row w-100 py-3 px-2'>
          <a href="#" className='btn btn-light'><i className='mx-2 small-ico'>&#xF32F;</i>Mail</a>
          <a href="#" className='btn btn-primary'><i className='mx-2 small-ico'> &#xF472;</i>LinkedIn</a>
        </div>
    )
  }

  function About(){
    return(
         <div className='d-flex justify-content-around align-items-between flex-column w-100 p-2'>
            <h3 className='h3'>About</h3>
            <p className='p text-start'> &nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet
             consectetur adipisicing elit. Tenetur aspernatur quo 
             perspiciatis beatae explicabo deleniti eum amet
             eos ut iusto laboriosam iure sit sed, porro officiis 
             quaerat repellendus praesentium accusamus?</p>

             <h3 className='h3 '>Interests</h3>
             <p className='p text-start'>&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Totam rerum ipsum voluptates, veritatis,
               nulla veniam pariatur impedit est 
             illum sit possimus quisquam? Necessitatibus adipisci, 
             fugiat modi beatae pariatur labore expedita?</p>
         </div>
    )
  }

  
function Footer () {
  return(
    <div className='d-flex justify-content-around align-items-center flex-row my-3 '>
        <i className='big-ico'>&#xF5EF;</i>
        <i className='big-ico'>&#xF344;</i>
        <i className='big-ico'>&#xF437;</i>
        <i className='big-ico'>&#xF3ED;</i>
    </div>
  )
}
export { Header , SocialNetButtons, About,Footer }