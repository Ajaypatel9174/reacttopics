// import { useState } from "react"

import Child1 from "./assets/Child1"
import Child2 from "./assets/Child2"

// import { useState } from "react"



// function App(){
//   let[count,setcount]=useState(0)

//   function add(){
//     setcount(count+1)
//   }

//   function sub(){
//     setcount(count-1)
//     if(count<=0){
//       setcount(0)
//     }
    
//   }
//   function res(){
//     setcount(count=0)
//   }
//   return(

//     <>
//   <center><h1 style={{color:count%2==0?"red":"blue"}}>{count}</h1></center>
//     <button onClick={add}>add</button>
//     <button onClick={sub}>sub</button>
//     <button onClick={res}>reset</button>
    
    
//     </>
//   )
// }
// export default App

// function App(){
//   let[color,Setcolor]=useState('yellow')

//   function change(){
//     Setcolor('blue')
//   }
//     function change1(){
//     Setcolor('red')
//   } 
//     function change2(){
//     Setcolor('orange')
//   }
//   return(
//     <>

  
//   <div style={{height:"100vh",backgroundColor:color}}>
//     <h1>{color}</h1>
//   <button onClick={change}>blue</button>
//   <button onClick={change1}>red</button>
//   <button onClick={change2}>orange</button>
//   </div>
  
  
  
//     </>
//   )
// }
// export default App


function App(){

  return(
    <>

    < Child1 name="ajay" />

    < Child2 />
    
    </>
  )
  
}
export default App