import axios from "axios"
import { useEffect, useState } from "react"

const Api =() =>{

    let[apidata,setApidata]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/userdata')
        .then((res)=>setApidata(res.data))

    },[])
    return(
        <>
        <h1>Api try</h1> 
        
        <table border="2">
            <tr>
                <th>ID</th>
                <th>name</th>
                <th>contact</th>
                <th>city</th>
                <th>email</th>


            </tr>
        {
            apidata.map((e)=>(

        <tr>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.contact}</td>
                <td>{e.city}</td>
                <td>{e.email}</td>


        </tr>


            ))
        
         }


        </table>
        
        
        
        </>


    )
}
export default Api