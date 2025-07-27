import { useState } from "react"

function State(){
      let[name,setname]=useState("hello")

      function change(){
        setname("")
      }
    return(
      
<>

<h1>{name}</h1>

<button  onClick={(change)} >hide</button >





</>


    )
}

export default State