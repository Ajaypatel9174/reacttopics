import { useContext } from "react"
import { store } from "../App"

function Dasboard(){
      let user = useContext(store)
    return(
      
        <>
        
        <h1>{user.name}</h1>
        
        
        </>
    )
}

export default Dasboard