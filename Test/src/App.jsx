import State from "./assets/State"
import Color from "./color"
import Form  from "./form"
import './App.css'
import {Route,Routes} from "react-router-dom"
import { Link } from "react-router-dom"

function App(){
  return(

    <>
    
  

    <h1>this is app</h1> 

     <nav className="nav">

      <ul>

         <li> <Link to="/state" >State</Link>  </li>
        <li>< Link to="/form" >Form</Link></li>
        <li><Link  to="/color">Color</Link></li>


      </ul>




    </nav>


    {<Routes >
      
      
      <Route path="/state" element={<State />} />
      < Route path="/Color" element={<Color />}/>
      <Route path="/Form" element={<Form />}/>



 
      </Routes>}

    
    </>
    



  )
}

export default App