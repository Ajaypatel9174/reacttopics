import { Link } from "react-router-dom"

function  Home(){
    return(

             <>
        
        <h1>this is home page</h1>
        <ul>
            <li>  <Link to="/about">About</Link>      </li>
        </ul>
        
        
        </>




    )
   
    
}
export default Home