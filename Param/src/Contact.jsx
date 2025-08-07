import React from 'react'
import { useParams } from 'react-router-dom'

const Contact = () => {
    let pr = useParams()
  return (
  <>

<h1>{pr.name}</h1>
  
  
  
  </>
  )
}

export default Contact
