import React from 'react'
import Profile from '../assets/Profile.png'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';


const Navbar = () => {
  return (
    <nav className="mb-3 lg:mb-28 flex items-center justify-between py-2">
      <div className="flex flex-shrink-0 item-center">
        <img src={Profile} alt="Logo" className="mx-2 w-10 mt-2" />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <FaGithub />
        <FaLinkedin />
        <RiTwitterXLine />
        <FaInstagram />
      </div>
    </nav>
  )
}

export default Navbar
