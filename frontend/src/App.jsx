import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router'
import Signup from './components/signup/signup'
import Login from './components/login/login'
import About from './components/about'
import Navbar from './components/navbar/navbar'
import Home from './components/home/Home'
function App() {


  return (
    <>
     <Navbar />
      <Routes>
       <Route path='/' element={<Signup />} />
       <Route path='/login' element={<Login />} />
       <Route path='/home' element={<Home />} />
       <Route path='/about' element={<About />} /> 
      </Routes>


     
    </>

  )
}

export default App
