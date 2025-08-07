import React from 'react'


import {Link, Route,Routes} from 'react-router-dom'
import About from './assets/components/about'
import Contact from './Contact'
import User from './assets/components/User'


const App = () => {
  return (
    <>

    <Link to='/user/1/ajay'>User 1</Link>
    <Link to='/user/2/rohit'>User 2</Link>
    <Link to='/user/3/abhishek'>User 3</Link>





        <Routes>
          <Route path='/about/:id' element={<About/>} />
          <Route path='/contact/:name' element={<Contact />} />
          <Route path='/user/:id/:name' element={<User />} />
        </Routes>

    </>
   
  )
}

export default App
