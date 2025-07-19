// export function Child2(props){


// let {contact,city}=props
//     return(
//         <>

//         <h1 style={{backgroundColor:"red"}}>this is child 2</h1>
//         <h1>my contact - {contact}</h1>
//         <h1>my city - {city}</h1>
        
//         </>
// )
// }
  import Child3 from "./Child3"
    function Child2(props){
        return(
            <>
            <h1>welcome to child2</h1>
            <h1>{props.name}</h1>
            <Child3/>
            </>


        )




    }
    export default Child2
