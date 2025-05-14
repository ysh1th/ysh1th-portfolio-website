import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Projects from './pages/projects';
import Resume from './pages/resume';
// import Contact from './pages/contact';
import Landing from './pages/landing';
// import Experience from './pages/experience';
// import Navbar from './archive/nb_cpy.jsx'

export default function App(){
  console.log("App component rendered")
  return (

    <div className='w-screen min-h-screen overflow-x-hidden antialiased bg-background dark:bg-slate-900 selection:bg-yellow-500 selection:text-bg-background'>
      <div className="absolute top-0 left-0 right-0 z-[-2]  h-full"></div>
      <div className=" lg:py-24">
        <Router>

            <Navbar />v
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              {/* <Route path="/experience" element={<Experience />} /> */}
            </Routes>

        </Router>
        {/* <Experience /> */}
        {/* <Projects /> */}
        {/* <Contact /> */}
      </div>
    </div>
  
  );
}
