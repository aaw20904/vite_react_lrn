import reactLogo from './assets/react.svg'
import "./assets/fonts/Inter/inter-v13-cyrillic_latin-regular.woff2"
function Header(){
    return(
        <article className='d-flex justify-content-between align-items-center bg-gray w-100 p-1'>
            <section className="p-2 d-flex flex-row justify-content-start bg-gray align-items-center"> 
                <img src={reactLogo}  className="logo m-0 p-0" alt="Vite logo" />
                <h2 className='h2 m-0 p-0 text-light bg-gray' style={{fontFamily:"Inter"}}>ReactFacts</h2>
            </section>
            <section>
            <h4 className='h4 bg-gray text-light' style={{fontFamily:"Inter"}}>React cpourse-Proj0001</h4>
            </section>
        
        </article>
    )
}

function MainContent () {
    return (
        <article className='bg-dark text-white d-flex flex-column justify-content-start align-items-start'>
          <h1 className='h1 m-2 bg-dark text-white'  style={{fontFamily:"Aclonica"}}>Fun facts about React</h1>
          <nav className='m-2'>
            <ul className='bg-dark text-white m-2 text-start' >
                <li  style={{fontFamily:"Aclonica"}}>Was releaed firstly in 2013</li>
                <li style={{fontFamily:"Aclonica"}}>Was originally created by Jordan Walke </li>
                <li style={{fontFamily:"Aclonica"}}>Has over 100K stars on GitHub</li>
                <li style={{fontFamily:"Aclonica"}}>Powers thousand of enterprise apps, including mobile Apps</li>           
            </ul>
          </nav>
        </article>
    )
}

export {Header, MainContent}