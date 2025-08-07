import { useState } from "react"

function State(){
      


      let[a,setA]=useState(false)
    return(
      
<>


{ a? "" :<h1>Hello</h1>}


<button onClick={()=>setA(!a)}>{a? "show":"hide"}</button>




</>


    )
}

export default State