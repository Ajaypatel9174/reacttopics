// import { Gi3dGlasses  } from "react-icons/gi";

// import Child2 from "./Child2"


// const Child1 =()=>{
//     return(
//         <>
//         <h1>this is child1</h1>
//         <h2>{props.name}</h2>
//         <Gi3dGlasses />



//        </>

// )
// }
// export default Child1

import Child2 from "./Child2"
function Child1({name}){

return(
    <>
    <h1>welcome to child1</h1>
    <Child2 name={name} />
    </>
)
    
}
export default Child1