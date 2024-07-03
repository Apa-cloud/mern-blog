import { BrowserRouter, Routes, Route} from 'react-router-dom'
// imported the BrowserRouter for making the pages.
// Now we no longer need the HTML h1, className, etc.
// Everything will come under Routes and BrowserRouter now

//all functions need to be imported from respective locations
import React from 'react'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Projects from './pages/Projects'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreatePost from './pages/CreatePost';




//Header inside BrowserRouter but outside page routes, so that Header appears in all pages
export default function App() {
  return (
    <BrowserRouter>
    <Header/>  
    <Routes>
      <Route path = "/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/sign-up" element={<SignUp />}/>
      <Route path="/sign-in" element={<SignIn />}/>
      <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
      </Route>
      <Route element={<OnlyAdminPrivateRoute />}>
          <Route path='/create-post' element={<CreatePost />} />
        </Route>
      <Route path="/projects" element={<Projects />} />   
      
      
      </Routes>
    <Footer/>
  </BrowserRouter>
  )
}
