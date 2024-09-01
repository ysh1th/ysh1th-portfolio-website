import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram,  } from 'react-icons/fa';
import { RiSunLine, RiMoonLine } from "react-icons/ri";


export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);

    if (isDarkMode){
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
  <div>
    <nav className='fixed left-0 right-0 top-4 z-50'>
      <div className="mx-auto flex max-w-md items-center justify-center rounded-lg bg-black/5 dark:bg-white/5 py-1.5 backdrop-blur-lg">
        <div className="flex justify-between gap-6">
          <ul className="flex items-center gap-8">
            <li className='text-lg text-font-logo font-extrabold'>
              <Link to="/">Yash1th</Link>
            </li>
            <li className='dark:text-white'>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <a href="https://github.com/ysh1th" className='text-2xl'>
                <FaGithub className='dark:text-white'></FaGithub>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/yashwanth-karuparthi?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUvoxaJ4WQQ6bTMfk4L7Q8w%3D%3D" className='text-2xl'>
                <FaLinkedin className='dark:text-white'></FaLinkedin>
              </a>
            </li>
            <li>
              <a href="https://github.com/ysh1th" className='text-2xl'>
                <FaInstagram className='dark:text-white'></FaInstagram>
              </a>
            </li>
            <button onClick={toggleDarkMode} title='Toggle Color Scheme' className='text-2xl'>
              <div onClick={toggleDarkMode} className='cursor-pointer text-2xl '>
                {isDarkMode ? (
                  <RiMoonLine className='dark:text-background'> </RiMoonLine>
                ) : (
                  <RiSunLine  />
                )}
              </div>
            </button> 
          </ul>
        </div>
      </div>
    </nav>
  </div>
  );
}