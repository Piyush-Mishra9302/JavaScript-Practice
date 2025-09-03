
import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'
import About from './About'
import OurCources from './OurCources'
import Faculty from './Faculty'
import ContactUs from './ContactUs'

const App = () => {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route to='/' element={<Layout/>}>
          <Route index element = {<Home/>} />
          <Route path='home' element = {<Home/>}/>
          <Route path = 'about' element = {<About/>}/>
          <Route path='cources' element = {<OurCources/>}/>
          <Route path='faculty' element = {<Faculty/>}/>
          <Route path='contact' element = {<ContactUs/>} />
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
