import State from "./assets/State"
import Color from "./color"
import Form from "./form"
import './App.css'

function App(){
  return(

    <>
    
  

    {/* <h1>this is app</h1> */}

    <nav className="nav">

      <ul>

        <li>State</li>
        <li>form</li>
        <li>Color</li>


      </ul>




    </nav>

     < State />
    < Color />
    < Form /> 
    
    </>
    



  )
}

export default App