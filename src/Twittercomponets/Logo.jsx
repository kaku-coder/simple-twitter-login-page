import React from 'react'
import './Logo.css'
import { FaTwitter } from "react-icons/fa";

const Logo = () => {
  return (
    <div className='logo'>
      <FaTwitter size={30} color='skyblue' />
      <h1 className='text'>Sign in to Twitter</h1>
    </div>
  )
}

export default Logo
