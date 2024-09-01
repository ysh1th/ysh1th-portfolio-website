
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
      <div className="mx-auto flex max-w-xl items-center justify-center rounded-lg bg-black/20 py-1.5 backdrop-blur-lg lt-md:hidden">
        <div className="flex justify-between gap-6">
          <ul className="flex items-center gap-8">
            <li className='text-lg text-font-logo font-extrabold'>
              <Link to="/">Yash1th</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/timeline">Timeline</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
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


