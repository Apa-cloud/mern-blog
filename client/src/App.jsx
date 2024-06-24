import { BrowserRouter, Routes, Route} from 'react-router-dom'
// imported the BrowserRouter for making the pages.
// Now we no longer need the HTML h1, className, etc.
// Everything will come under Routes and BrowserRouter now

import React from 'react'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Projects from './pages/Projects'




export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/sign-up" element={<SignUp />}/>
      <Route path="/sign-in" element={<SignIn />}/>
      <Route path="/dashboard" element={<Dashboard />} /> 
      <Route path="/projects" element={<Projects />} />   
      
      </Routes>
    
    
    </BrowserRouter>
  );
}
