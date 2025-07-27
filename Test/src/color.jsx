import { useState } from "react"

function Color(){
    let[color,setcolor]=useState("")

  function color1(){
    setcolor("red")
  }

    function color2(){
    setcolor("blue")
  }

    function color3(){
    setcolor("green")
  }

      function res(){
    setcolor("")
  }
    return(



<div style={{height:"100vh", background:color}}>
    <h1>{color}</h1>



    <button onClick={(color1)}>red</button>
    <button onClick={(color2)}>blue</button>
    <button onClick={(color3)}>green</button>
    <button onClick={(res)}>reset</button>

</div>
)

}

export default Color