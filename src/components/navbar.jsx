
import React, { useState, useEffect } from 'react';
import { GoArrowUp } from "react-icons/go";
import { Link } from 'react-router-dom';
import { RiArrowUpLine, RiArticleLine, RiLightbulbLine, RiContactsFill, RiTimelineView, RiTwitterFill, RiGithubFill } from 'react-icons/ri';


export default function Navbar() {
  return (
  <div>
    <nav className='fixed left-0 right-0 top-7 z-50'>
      <div className="mx-auto flex max-w-lg items-center justify-center rounded-3xl bg-black/20 py-3 backdrop-blur-lg lt-md:hidden">
        <div className="flex justify-between gap-6">
          <ul className="flex items-center gap-8">
            <li className='font-bold'>
              <Link href="/">Yash1th</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/timeline">Timeline</Link>
            </li>
            <li>
              <Link href="/resume">Resume</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            
          </ul>
        </div>
      </div>

    </nav>
  </div>
  );
}


