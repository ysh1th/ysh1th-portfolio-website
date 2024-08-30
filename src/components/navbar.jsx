
import React, { useState, useEffect } from 'react';
import { GoArrowUp } from "react-icons/go";
import { Link } from 'react-router-dom';
import { RiArrowUpLine, RiArticleLine, RiLightbulbLine, RiContactsFill, RiTimelineView, RiTwitterFill, RiGithubFill } from 'react-icons/ri';


export default function Navbar() {

  return (
    <header className="px-5 py-6 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to='/'>
        <h1 className="text-4xl font-extrabold">
          Ysh1th
        </h1>
        </Link>

        <div className="grid gap-[1.2rem] grid-flow-col">
          <Link to="/projects" title="Projects">
            <span className='block lt-md:hidden text-xl'>Projects</span>
            <RiLightbulbLine className="lt-md:block hidden text-xl" />
          </Link>
          
          <Link to="/timeline" title="Timeline">
            <span className='block lt-md:hidden text-xl'>Timeline</span>
            <RiTimelineView className="lt-md:block hidden text-xl"/>
          </Link>

          <Link to="/resume" title="Resume">
            <span className='block lt-md:hidden text-xl'>Resume</span>
            <RiArticleLine className="lt-md:block hidden text-xl" />
          </Link>

          <Link to="/contact" title="Contact">
            <span className='block lt-md:hidden text-xl'>Contact</span>
            <RiContactsFill className="lt-md:block hidden text-xl"/>
          </Link>
        </div>
      </div>


    </header> 
    
  )
};




