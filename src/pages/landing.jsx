import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LAND_CONTENT } from "../Content";
import Profile from '../assets/Profile.png';
import Experience from './experience';
import { div } from 'framer-motion/client';

const TypewriterEffect = () => {
  const texts = [
    'LLM Enthusiast',
    'Web Developer',
    'Designer',
  ];

  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const current = texts[textIndex];
    
    const interval = setInterval(() => {
      if (isDeleting) {
        setCurrentText((prev) => current.substring(0, prev.length - 1));
      } else {
        setCurrentText((prev) => current.substring(0, prev.length + 1));
      }

      if (!isDeleting && currentText === current) {
        // Pause at the end of the text
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        // Move to the next text
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }, 70); // Adjust the typing speed here

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [currentText, isDeleting, textIndex]);

  return (
    <div>
    <div className="pt-10 lg:px-16 lg:py-8">
      <div className="mx-auto px-6 max-w-5xl py-20">
        <div className="border-b border-background pb-4 lg:mb-35">
          <div className="flex flex-wrap justify-between">
            <div className="w-full lg:w-2/3">
              <div className="flex flex-col items-center lg:items-start">
                <h1 className='pb-7 text-6xl font-extrabold tracking-tight lg:text-6xl'>
                  Hi, I'm <br />
                  <span className="text-font-logo">
                    Yashwanth Karuparthi
                  </span>
                </h1>
                {/* <h2 className="pb-7 text-4xl font-extrabold tracking-tight"> */}
                  <motion.h2
                  className="pb-7 text-4xl font-extrabold tracking-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  >
                    <span>{currentText}</span>
                    <motion.span
                      className="text-gray-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        repeat: Infinity,
                        repeatType: 'reverse',
                        duration: 0.5,
                      }}
                      >
                        |
                      </motion.span>
                  </motion.h2>
                {/* </h2> */}
                <span className="font-semibold max-w-xl text-lg lg:text-xl">
                  Final year computer science student with a passion for technology, innovation, and learning.
                </span>
                <p className="my-2 max-w-xl pr-4 pt-6">
                  {LAND_CONTENT}
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center items-center lg:w-1/3">
              <div className="flex w-full lg:w-[230px] lg:h-[410px] ">
                <img src={Profile} alt="Yash1th" className="object-cover hidden lg:block rounded-2xl"/>
              </div>
            </div>
          </div>
        </div>
        {/* Scroll Down Arrow */}
        <div className="flex justify-center mt-20">
          <a href="#next-section" className="text-gray-700 hover:text-gray-500">
            <svg
              className="w-8 h-8 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12l7 7 7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <Experience />
    </div>
    
  );
  
};



export default TypewriterEffect;
