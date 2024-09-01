import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Projects from './pages/projects';
import Timeline from './pages/experience';
import Resume from './pages/resume';
import Contact from './pages/contact';
import Landing from './pages/landing';
import Experience from './pages/experience';

export default function App(){
  console.log("App component rendered")
  return (

    <div className='overflow-x-hidden antialiased bg-background selection:bg-yellow-800 selection:text-bg-background'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-background"></div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Landing />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
    // <main className='overflow-x-hidden'>
    // <Router>
    //   <div>
    //     <Navbar />
    //     <Routes>
    //       <Route path="/" element={<Landing />} />
    //       <Route path="/projects" element={<Projects />} />
    //       <Route path="/timeline" element={<Timeline />} />
    //       <Route path="/resume" element={<Resume />} />
    //       <Route path="/contact" element={<Contact />} />
    //     </Routes>
    //   </div>
    // </Router>
    // </main>
  );
}
