import { useState } from "react"

function Form(){
    let[frmdata,setdata]=useState({
        username:"",email:"",password:""

    })
    return(

        <>


        <form  align="center" action="" >

            <label htmlFor="">name</label>
            <input type="text" /><br /><br />
                 <label htmlFor="">email</label>
            <input type="text" /><br /><br />

                 <label htmlFor="">password</label>
            <input type="text" /><br /><br />

            <input type="submit"  />

            



        </form>
        
        
        
        </>



    )
}

export default Form