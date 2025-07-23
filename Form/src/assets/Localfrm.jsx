import { useState } from "react";

function LocalForm(){
    let[frmdata,setFramdata]=useState({
        username:"",email:"",password:""
    })
    function takeinput(e){
        let {name,value} = e.target
        setFramdata({...frmdata,[name]:value})
    }
    function handleinput(e){
        e.preventDefault()
        console.log(frmdata);
        localStorage.setItem('userdata',JSON.stringify(frmdata))
        
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
        
        
        </>
    )
}
export default LocalForm