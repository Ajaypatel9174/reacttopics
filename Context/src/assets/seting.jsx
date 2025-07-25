import { useContext } from "react"
import { store } from "../App"

function Seting(){
    let user = useContext(store)
    return(
        <>
        <h1>{user.email}</h1>
        <h1>{user.password}</h1>
        
        
        </>
    )
}

export default Seting