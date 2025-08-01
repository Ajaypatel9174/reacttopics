import { useState } from "react"

function State(){
    let  [sting,setSting]=useState("cold drink")
    let [person,setperson]=useState({
        name:"ajay",age:24,city:"bhopal"
    })

    let[a,setA]=useState(false)

    
     
    return(

        <>
        
        <h1>{sting}</h1>
        <h1>{person.city}</h1>
        <h1 className="text-3xl underline bold italic p">{person.name}</h1>


        {a? "":  <h1>hide me</h1>}

                <button className="border p-3 rounded-2xl" onClick={()=>setA(true)}>click here</button>

                <button className="border p-3 rounded-2xl" onClick={()=>setA(false)}>click here</button>
                <button className="border p-3 rounded-2xl" onClick={()=>setA(!a)}>togle here</button>
                <button className="border p-3 rounded-2xl" onClick={()=>setA(!a)}>
                    {a?  "show" : "hide"}
                </button>
        
        </>



    )
}

export default State



// import '../App.css'
// import { useState } from "react"
 
// function App(){
//     return(
//         <>

        

//           <div className="flex justify-around h-100 background">
         
//               <div>
             
//                <h1  className="pt-15 text-4xl" >alexa peterson</h1><br /><br /><br /><br />
//                <h1 className="text-4xl italic">Coming April 2026</h1><br /><br />
//                 <p >Lorem ipsum dolor sit amet  <br />  consectetur adipisicing elit. Accusamus vitae ut mol soluta!</p> <br /><br />


//                  <input  className="border-2  px-3  pl-24 pr-19" type="text" /><br />
//                  <input  className="border-2  px-3 " type="text" /> 


//                   <button className="border-2 px-3 rounded-2xl mt-4 pl-9 pr-8 ml-8 hover:bg-red-300 bg-yellow-400">CLICK</button>
//                 <div className="flex pt-7">

//                   <img  src="insta.png" alt="" width={"40px"}  />

//                   <img  src="facebook.jpg" alt="" width={"40px"} />

//                   <img src="twiteer.png" alt="" width={"40px"} />
//                   </div>
                   
//              </div>
             

           


//            </div>
        
        
        
        
//         </>
//     )
// }                             

// export default App