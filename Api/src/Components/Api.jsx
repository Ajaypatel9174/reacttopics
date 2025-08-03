import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Api =() =>{

    let[apidata,setApidata]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/userdata')
        .then((res)=>setApidata(res.data))

    },[])

       function Del(id){
      axios.delete(`http://localhost:3000/userdata/${id}`)
      .then(()=>alert("delete.."))
      .catch((err)=>alert(err))

    }
    return(
        <>
        <h1>Api try</h1> 
        <Link to="/">Home</Link>
        <table border="2">
            <tr>
                <th>ID</th>
                <th>name</th>
                <th>contact</th>
                <th>city</th>
                <th>email</th>
                <th>update</th>
                <th>Delete</th>


            </tr>
        {
            apidata.map((e)=>(

        <tr>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.contact}</td>
                <td>{e.city}</td>
                <td>{e.email}</td>
                <td>{e.update}</td>
                <td>  <button onClick={()=>Del(e.id)}>Delete</button> </td>


        </tr>


            ))
        
         }


        </table>
        
        
        
        </>


    )
}
export default Api