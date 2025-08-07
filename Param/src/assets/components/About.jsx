import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {

    let pr = useParams()

  return (
   <>

   <h1>this is about page {pr.id}</h1>
   
   
   </>
  )
}

export default About
