import { Link, Outlet } from "react-router-dom"

function Layout(){
    return(

        <>

    <nav>
        <ul>
            <li> <Link to="/">home</Link>  </li>
            <li> <Link to="/about">About</Link>  </li>
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