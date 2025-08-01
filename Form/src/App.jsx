 import { Route, Routes } from "react-router-dom"
import Form from "./assets/Form"
import LocalForm from "./assets/Localfrm"
import MultiForm from "./assets/Multiform"
import Localshow from "./assets/Localshow"



function App(){
  return(
    <>
    {/* <Form />
    < MultiForm /> */}
    {/* <LocalForm /> */}
    <Routes>
      < Route index element={ <LocalForm />} />
      < Route path='/localshow' element={<Localshow />} />


    </Routes>
    </>
  )
}
export default App