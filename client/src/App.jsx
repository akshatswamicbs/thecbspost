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
import Jobs from './pages/Jobs'
import JobOfferForm from './pages/JobOfferForm'
import JobSeekerForm from './pages/JobSeekerForm'
import AdminSeekerForm from './pages/AdminSeekerForm'
import AdminVideosForm from './pages/AdminVideosForm'
import AdminGiverForm from './pages/AdminGiverForm'
import SubjectList from './components/SubjectList'
import MaterialList from './components/MaterialList'
import AdminStudyMaterial from './pages/AdminStudyMaterial'


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
      <Route path='/jobsportal' element={<Jobs/>}></Route>
      <Route path="/job-seeker" element={<JobSeekerForm/>} />
      <Route path="/job-offer" element={<JobOfferForm/>} />
      <Route path="/admindashboard/seekerform" element={<AdminSeekerForm/>} />
      <Route path="/admindashboard/giverform" element={<AdminGiverForm/>} />
      <Route path="/admindashboard/videos" element={<AdminVideosForm/>} />
      <Route path="/admindashboard/studymaterial" element={<AdminStudyMaterial/>} />
      <Route path="/subjects/:sectionId" element={<SubjectList sectionId='sectionId' />}/>
      <Route path="/materials/:subjectId" element={<MaterialList/>} />

    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}
