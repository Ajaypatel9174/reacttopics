import { Link, Outlet } from "react-router-dom"
import '../App.css'

function Layout(){
    return(

        <>

    <nav className="nav" >
        <ul>
            <li> <Link to="/">home</Link>  </li>
            <li> <Link to="/about">About</Link>  </li>
            <li> <Link to="/offer">Offer</Link>  </li>
            <li> <Link to="/contact">Contact</Link></li>
        </ul>
    </nav>
     
     <Outlet /> 



    <footer>
        <h1>this is footer</h1>
        <h1>this is footer</h1>
        <h1>this is footer</h1>
    </footer>
        
        
        
        
        
        </>



    )
}
export default Layout