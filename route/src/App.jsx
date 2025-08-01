import React from "react"
import { Route,Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/contact"
import Offer from "./components/Offer"
import Layout from "./components/Layout"

function App(){
  return(
    <>
    
    
    {/* <h1>page</h1>

    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/offer" element={<Offer/>}/>

    // </Routes> */}

    {<Routes>
    
        <Route path="/" element={ <Layout />} >
          <Route  index element={<Home />} />
          <Route  path="/about" element={<About />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/contact" element={<Contact />} />



      </Route>

  
    </Routes> }
    
    </>
  )
}
export default App