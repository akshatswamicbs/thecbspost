import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Projects from './pages/Projects'
import Header from './components/Header'
import Footer from './components/Footer'
import Videos from './pages/Videos'
import StudyMaterial from './pages/StudyMaterial'
import BMS from './pages/BMS'
import BFIA from './pages/BFIA'
import Pdfviewer from './pages/Pdfviewer'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/videos' element={<Videos/>}></Route>
      <Route path='/studymaterial' element={<StudyMaterial/>}></Route>
      <Route path='/bmsmaterial' element={<BMS/>}></Route>
      <Route path='/bfiamaterial' element={<BFIA/>}></Route>
      <Route path='/pdfviewer' element={<Pdfviewer/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}
