import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
      let {id,name} = useParams()
  return (
    <>

  

<h1>this is user  {id} amd {name}</h1>





    </>
  )
}

export default User
