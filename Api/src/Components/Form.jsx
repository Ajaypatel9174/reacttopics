import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Form(){
    let [frmData,setfrmdata]=useState({
        name:"",contact:"",city:"",email:""
    })
    let nav = useNavigate()

    function handleinput(e){
        const {name,value}= e.target
        setfrmdata({...frmData,[name]:value})
    }

    function finalsubmit(e){
        e.preventDefault()
        axios.post('http://localhost:3000/userdata',frmData)
        .then(()=>alert("inserted.."))
        .catch((err)=>alert(err))
        nav('/apidata')
    }
 

    return(
        <>
            <Link to="/apidata">Table</Link>
        <form onSubmit={finalsubmit}>

            <label htmlFor="">Name</label>
            <input type="text" name="name" onChange={(handleinput)} /> <br /> <br />

              <label htmlFor="">contact</label>
            <input type="text" name="contact" onChange={(handleinput)} /> <br /> <br />


              <label htmlFor="">city</label>
            <input type="text" name="city" onChange={(handleinput)} /> <br /> <br />


              <label htmlFor="">email</label>
            <input type="text" name="email" onChange={(handleinput)} /> <br /> <br />

            <input type="submit" />







        </form>


  </>





    )
}

export default Form