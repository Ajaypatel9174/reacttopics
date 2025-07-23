import { useState } from "react";

function Form(){
  let[value,setValue]=useState("")
  let [age,setAge] = useState()
  let[color,setColor]=useState()
  function handleinput(e){
    console.log(e.target.value);
    setValue(e.target.value)
    
  }
  return(
    <>
    <h1>this is form page</h1>
    <form action="">
    <label htmlFor="">Name</label>
    <input type="text" onChange={handleinput} />
    <label htmlFor="">age</label>
    <input type="text" onChange={(e)=> setAge(e.target.value)}/>

    <label htmlFor="">color</label>
    <input type="text" onChange={(e)=> setColor(e.target.value)} />



    </form>
    <h1>{value}</h1>
    <h1>{age}</h1>
    <h1>{color}</h1>
    
    
    
    
    </>
  )
}

export default Form