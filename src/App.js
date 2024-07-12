import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Navbar'
import About from './pages/About'
import Project from './pages/Projects'
import Contact from './pages/Contect'
import Skills from './pages/Skills'

function App() {
  return (
   <>
   <div className='container-fluid background' >
   <Header/>
    <Routes>
      
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/project' element={<Project/>} />
      <Route path='/connectwithsaksham' element={<Contact/>} />
      <Route path='/myskills' element={<Skills/>} />
    </Routes>
   </div>
   </>
  )
}

export default App