import React from 'react'
import './navbar.css'
import { NavLink } from 'react-router'
export default function Navbar() {
  return (
    <nav>
        <NavLink to={'/'} >signup</NavLink><br></br>
        <NavLink to={'/home'} >home</NavLink><br></br>
        <NavLink to={'/login'} >login</NavLink><br></br> 
        <NavLink to={'/about'} >about</NavLink><br></br> 
        <NavLink to={'/profile'} >profile</NavLink><br></br> 
        
    </nav>
  )
}
  