import {Route,Routes} from "react-router-dom"
import Api from "./Components/Api"
import Form from "./Components/Form"

function App() {
  

  return (
    <>
    <Routes> 
      
      <Route index element={< Form />} />
      < Route path="/apidata" element={ <Api />} />  

    </Routes>
    
    </>
  )
}

export default App
