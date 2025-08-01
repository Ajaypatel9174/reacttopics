import { useEffect,  useState } from "react"

const App=()=>{
  let[count,setCount]=useState(0)
  let[name,setName]=useState("samsung")
  useEffect(()=>console.log("working"),[name])
  return(
    <>

<h1>App page</h1>
<h1>{count}</h1>
<button onClick={()=>setCount(count+1)}>+++</button>
<button onClick={()=>setCount(count-1)}>---</button>
<h1>{name}</h1>
<button onClick={()=>setName("lenovo")}>change</button>

    </>
    
  )
}
export default App