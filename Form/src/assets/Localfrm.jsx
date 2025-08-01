import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LocalForm(){
    let[frmdata,setFramdata]=useState({
        username:"",email:"",password:""
    })
    let[showdata,setShowdata]=useState({

    })
    let navigator = useNavigate()
    function takeinput(e){
        let {name,value} = e.target 
        setFramdata({...frmdata,[name]:value})
        
    }
    
    function handleinput(e){
        e.preventDefault()
        console.log(frmdata);
        localStorage.setItem('userdata',JSON.stringify(frmdata))
        // let show = JSON.parse(localStorage.getItem('userdata'))
        // setShowdata(show)
        navigator('./localshow')
        
    }
    
    return(

        <>
        <h1>this is localform</h1>

               <form onSubmit={handleinput}>
            <label htmlFor="">username</label>
            <input type="text" name="username" onChange={takeinput} /> <br /><br />

            <label htmlFor="">email</label>
            <input type="text" name="email" onChange={takeinput} /> <br /><br />

            
            <label htmlFor="">password</label>
            <input type="text" name="password" onChange={takeinput} /> <br /><br />

            <input type="submit" />
        
        </form>
        <hr />

        <h1>username {showdata.username}</h1>
        <h1>username {showdata.password}</h1>
        <h1>username {showdata.email}</h1>
        
        
        </>
    )
}
export default LocalForm