import { createContext } from "react"
import Child1 from "./Child1"
import Dasboard from "./assets/dasboard"
import Seting from "./assets/seting"

  let store = createContext()
  
  let name = "from App page "

  let user = {name: "ajay",email:"ajay@gmail.com",password:1234}

function App(){

  return(
    <>
    {/* < store.Provider  value={name} >
    < Child1 />
    
    </store.Provider> */}
    < store.Provider  value={user} >
    < Dasboard />
    < Seting />
    
    </store.Provider>

    </>
  )
}

export default App
export {store}