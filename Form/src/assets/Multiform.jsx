import { useState } from "react"

function MultiForm(){
    let [frmdata,setFramdata]=useState({
        name:"",age:""
    })
    function handleinput(e){
        const {name,value}=e.target
        setFramdata({...frmdata,[name]:value})
    }
    function finalsubmit(event){
         event.preventDefault()+
         console.log(frmdata)
         
    }
    return(
        <>
        <h1>multiform </h1>

        <form onSubmit={finalsubmit}>
            <label htmlFor="">Name</label>
            <input type="text" name="name" onChange={handleinput} /> <br /><br />

            <label htmlFor="">age</label>
            <input type="text" name="age" onChange={handleinput} /> <br /><br />

            <input type="submit" />


        </form>



        </>
    )
}

export default MultiForm