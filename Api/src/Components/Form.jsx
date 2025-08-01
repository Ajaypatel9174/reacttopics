import { useState } from "react"
import { useNavigate } from "react-router-dom"

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
        e.preeventdefaulty()
        axios.post('http://localhost:3000/userdata')
        .then(()=>alert("inserted.."))
        .catch((err)=>alert(err))
        nav('./apidata')
    }

    return(
        <>

        <form action="" onSubmit={finalsubmit}>

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