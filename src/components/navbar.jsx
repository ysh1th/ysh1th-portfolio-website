import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaInstagram, FaHome } from 'react-icons/fa';
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import Projects from '../pages/projects';


export default function Navbar() {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);

  //   if (isDarkMode){
  //     document.documentElement.classList.remove('dark');
  //   } else {
  //     document.documentElement.classList.add('dark');
  //   }
  // };

  return (
  <div>
    <nav className='fixed left-0 right-0 z-50 top-[5%]'>
      <div className="mx-auto flex max-w-md items-center justify-center rounded-lg bg-black/5 dark:bg-white/5 py-1.5 lg:py-3 backdrop-blur-lg">
      {/* <div className="mx-auto flex w-full min-h-full items-center justify-center rounded-lg bg-black/5 dark:bg-white/5 py-1.5 backdrop-blur-lg"> */}
        <div className="flex justify-between gap-6">
          <ul className="flex items-center gap-8">
            {/* <li className='dark:text-white'>
              <a href="/pdf/Yashwanth Karuparthi Resume.pdf" target="_blank" rel="noopener noreferrer">
                Experience
              </a>
            </li> */}
            <li className=' lg:text-lg'>
              <Link to="/projects">Projects</Link>
            </li>
            
            <li>
              <a href="/pdf/Yashwanth Karuparthi Resume.pdf" target="_blank" rel="noopener noreferrer" className='lg:text-lg'>
                Resume
              </a>
            </li>
            <li className='text-bold'>
              <a href="/" rel="noopener noreferrer">
              {/* <p className='text-font-logo lg:text-xl'>
                Y
              </p> */}
                <FaHome className='text-font-logo text-xl lg:text-2xl'></FaHome>

              </a>
            </li>
            <li>
              <a href="https://github.com/ysh1th" target="_blank" className='text-xl lg:text-2xl'>
                <FaGithub className='dark:text-white'></FaGithub>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/yashwanth-karuparthi?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BUvoxaJ4WQQ6bTMfk4L7Q8w%3D%3D" target="_blank" className='text-xl lg:text-2xl'>
                <FaLinkedin className='dark:text-white'></FaLinkedin>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/yashwanth_k7/" target="_blank" className='text-xl lg:text-2xl'>
                <FaInstagram className='dark:text-white'></FaInstagram>
              </a>
            </li>
            {/* <button onClick={toggleDarkMode} title='Toggle Color Scheme' className='text-2xl'>
              <div onClick={toggleDarkMode} className='cursor-pointer text-2xl '>
                {isDarkMode ? (
                  <RiMoonLine className='dark:text-background'> </RiMoonLine>
                ) : (
                  <RiSunLine  />
                )}
              </div>
            </button>  */}
          </ul>
        </div>
      </div>
    </nav>
  </div>
  );
}