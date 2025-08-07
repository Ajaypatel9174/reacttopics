import { ToastContainer,toast } from "react-toastify"
import { useRef } from "react"

function App(){
  let myRef = useRef()
  function toshan(){
    toast.error("succesful..")
  }
  function inputfocus(){
    myRef.current.focus()

  }
  function change(){
    myRef.current.innerHTML = "Hello"
    myRef.current.style.backgroundColor="red" 
  }

  return(
    <>
 
     <ToastContainer  position="top-bottom" theme="colored" />
 

     <button onClick={toshan}>click here</button>

     <input type="text" ref={myRef} /> 
     <button onClick={inputfocus}>tap here</button>
     <h1 ref={myRef}>welcome</h1>
    <button onClick={change}>change</button>
    


    </>
  )



}
export default App