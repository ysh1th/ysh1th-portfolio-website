import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Projects from './pages/projects';
import Resume from './pages/resume';
import Contact from './pages/contact';
import Landing from './pages/landing';
import Experience from './pages/experience';
// import Navbar from './archive/nb_cpy.jsx'

export default function App(){
  console.log("App component rendered")
  return (

    <div className='min-h-screen overflow-x-hidden antialiased bg-background dark:bg-slate-900 selection:bg-yellow-800 selection:text-bg-background'>
      <div className="absolute top-0 z-[-2] bg-background"></div>
      <div className="px-6 py-32 mx-auto max-w-3xl">
        <Router>

            <Navbar />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>

        </Router>
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  
  );
}
