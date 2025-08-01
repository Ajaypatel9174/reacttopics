import State from "./assets/State"
import Color from "./color"
import Form  from "./form"
import './App.css'
import {Route,Routes} from "react-router-dom"

function App(){
  return(

    <>
    
  

    {/* <h1>this is app</h1> */}

    {/* <nav className="nav">

      <ul>

        <li>State</li>
        <li>form</li>
        <li>Color</li>


      </ul>




    </nav> */}


    {<Routes >
      
      
      <Route path="/state" element={<State />} />
      < Route path="/Color" element={<Color />}/>
      <Route path="/Form" element={<Form />}/>




      </Routes>}

    
    </>
    



  )
}

export default App