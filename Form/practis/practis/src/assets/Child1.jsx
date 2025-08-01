import Child2 from "./Child2"

function Child1(props){
    return(
        <>
          <h1>{props.name}</h1>
          <Child2 city="bhopal" />
        </>
    )
}
export default Child1  