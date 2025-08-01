// // // import { useState } from "react"

import { useState } from "react"
import State from "./components/state"

// import { useState } from "react"

// import { useState } from "react"

// function App(){
//   let[name,setName]= useState("ajay")
//   let[age,setAge]=useState(20)
//   let[contact,setContact]=useState(7879)

//   function fun(){
//     setName("gurjar")
//   }

//   function fun1(){
//     setAge(24)
//   }
//   return(
//     <>
//      <h1>this is page name {name}- age{age}- contact{contact}</h1>
//      <button onClick={fun}>Tap here</button>
//      <button onClick={fun1}>Tap here2</button>
//      <button onClick={()=>setContact(9090)}>chang contact</button>

//     </>
//   )
// }
// export default App


// import { useState } from "react"
// function App(){
//   let[count,setCount]=useState(0)


//   function add(){
//     setCount(count+1)
//   }



//   function sub(){
//     setCount(count-1)
//   }


//   return(
//     <>
//     <h1>{count}</h1>
//     <button onClick={add}>Add</button>
//     <button onClick={sub}>Sub</button>
//     </>
//   )
// }
// export default App

//  import { useState } from "react"
// function App(){
//   let [count,setcount]=useState(0)

//   function add(){ 
//     setcount(count+1)
//   }
//   function sub(){ 
//     setcount(count-1)
//   }




// return(
//     <>

//     <h1>{count}</h1>
//     <button onClick={add}>add</button>
//     <button onClick={sub}>sub</button>

//     </>
//   )

// }
// export default App


// function App() {

//   let [color, setcolor] = useState("white")

//   function color1(color) {
//     setcolor(color)
//   }

//   return (
//          <>
//       <center><h1>{color}</h1></center>

//       <div  style={{ height: "100vh", backgroundColor: color }}>
//       <button onClick={()=>color1("red")}>red</button>
//       <button onClick={()=>color1("green")}>green</button>
//       <button onClick={()=>color1("yellow")}>yellow</button>
//       <button onClick={()=>color1("blue")}>blue</button>


//     </div>
//     </>
//   )
// }
// export default App

// import { useState } from "react"

// function App(){

//   let[color,setcolor]=useState("blue")
//   function color1(color){
//     setcolor(color)
//   }

//   return(

//     <>
//     <h1>{color}</h1>
//     <div style={{ height:"100vh", backgroundColor: color}}>

//   <button onClick={()=>color1("red")}>red</button>  
//   <button onClick={()=>color1("green")}>green</button>  



//     </div>



//     </>
//   )


// }
// export default App



function App() {
  let [count, setcount] = useState(0)
  // let [color,setcolor] = useState("blue")

  function add() {
    setcount(count + 1)
    
  }
  function sub() {
    setcount(count - 1)
  }
  function res(){
    setcount(0)
  }                  
  
  return (
    <>


      <h1 style={{color:count%2==0?"red":"purple"}}> {count}</h1>
      <button onClick={add}>add </button>
      <button onClick={sub}>sub </button>
      <button onClick={res}>reset</button>
      < State />



    </>

  )
}

export default App