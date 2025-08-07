import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Api =() =>{

    let[apidata,setApidata]=useState([])

    let[showfrm,setShowfrm]=useState(false)

    let[editdata,setEditdata]=useState({})

    useEffect(()=>{
        axios.get('http://localhost:3000/userdata') 
        .then((res)=>setApidata(res.data))

    },[handleDelete])

       function handleDelete(id){
      axios.delete(`http://localhost:3000/userdata/${id}`)
      .then(()=>alert("delete..")) 
      .catch((err)=>alert(err))

    }

    function handleedit(e){
        const {name,value} = e.target
        setEditdata({...editdata,[name]:value})
    }

    function finaledit(e){
        e.preventDefault()
        axios.put(`http://localhost:3000/userdata/${editdata.id}`,editdata)
        .then(()=>alert("updated.."))
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
                <th>Edit</th>
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
                <td> <button onClick={()=>(setShowfrm(true),setEditdata(e))}>Edit</button></td>
                <td>  <button onClick={()=>handleDelete(e.id)}>Delete</button> </td>


        </tr>


            ))
        
         }


        </table>
        <hr />

       { showfrm && <form action="" onSubmit={finaledit}>

            <label htmlFor="">id</label>
            <input type="text" name="id" value={editdata.id} onChange={handleedit} /> <br /> <br />

               <label htmlFor="">Name</label>
            <input type="text" name="name"   value={editdata.name}   onChange={handleedit}/> <br /> <br />


               <label htmlFor="">contact</label>
            <input type="text" name="contact" value={editdata.contact}  onChange={handleedit} /> <br /> <br />

               <label htmlFor="">city</label>
            <input type="text" name="city"  value={editdata.city}  onChange={handleedit}  /> <br /> <br />


               <label htmlFor="">email</label>
            <input type="text" name="email"  value={editdata.email} onChange={handleedit}  /> <br /> <br />

            <input type="submit" />










        </form>} 
        
        
        </>


    )
}
export default Api