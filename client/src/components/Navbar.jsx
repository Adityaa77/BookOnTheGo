import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 z-50 w-full flex items-center
    justify-between px-6 md:px-16 lg:px-36 py-5'>
      <Link>
      <img src={assets.logo} alt=''/>
      </Link>
    </div>
  )
}

export default Navbar
