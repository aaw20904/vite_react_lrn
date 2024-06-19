import reactLogo from './assets/react.svg'
function Header(){
    return(
        <article className='d-flex justify-content-between align-items-center bg-gray w-100 p-1'>
            <section className="p-2 d-flex flex-row justify-content-start bg-gray align-items-center"> 
                <img src={reactLogo}  className="logo m-0 p-0" alt="Vite logo" />
                <h2 className='h2 m-0 p-0 text-light bg-gray'>ReactFacts</h2>
            </section>
            <section>
            <h4 className='h4 bg-gray text-light'>React cpourse-Proj0001</h4>
            </section>
        
        </article>
    )
}

function MainContent () {
    return (
        <article className='bg-dark text-white d-flex flex-column justify-content-start align-items-start'>
          <h1 className='h1 m-2 bg-dark text-white'>Fun facts about React</h1>
          <nav className='m-2'>
            <ul className='bg-dark text-white m-2 text-start' >
                <li>Was releaed firstly in 2013</li>
                <li>Was originally created by Jordan Walke </li>
                <li>Has over 100K stars on GitHub</li>
                <li>Powers thousand of enterprise apps, including mobile Apps</li>           
            </ul>
          </nav>
        </article>
    )
}

export {Header, MainContent}