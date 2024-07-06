import {NavLink} from "react-router-dom"

export const Navbar = () =>{
    return (
        <div className="d-flex flex-row justify-content-start align-items-center nav  p-0">
            <NavLink  className={( {isActive} ) =>  isActive ? "ref-active p-2"  : "ref p-2"  } to="/">HOME </NavLink>
            <NavLink  className={( {isActive}  ) =>  isActive ? "ref-active p-2" : "ref p-2"  } to="/profile" > profile </NavLink>
            <NavLink className={( {isActive}  ) =>  isActive ? "ref-active p-2" : "ref p-2"  } to="/contact">contact </NavLink>
        </div>
    )
}