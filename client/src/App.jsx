import { useState } from 'react'

import './App.css'
import RegisterPage from './pages/RegisterPage'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import LoginForm from './components/LoginForm';
import Box from '@mui/material/Box';
import Navbar from './components/navbar';
import Studentlogin from './pages/Studentlogin.jsx';
import StudentDashboard from './pages/StudentDashboard.jsx';
import StudentAttendence from './pages/StudentAttendence.jsx';
import InProgress from './pages/InProgress.jsx';
import FeeDetails from './pages/FeeDetails.jsx';
import TeacherDashboard from './pages/TeacherDashboard.jsx';
import Parentdashboard from './pages/Parentdashboard.jsx';
import HomePage from './pages/home.jsx';
import Teacherlogin from './pages/TeacherLogin.jsx';
import Adminlogin from './pages/Adminlogin.jsx';
import Parentlogin from './pages/parentlogin.jsx';
import TeacherStudents from './pages/TeacherStudents.jsx';
import TeacherAttendance from './pages/TeacherAttendance.jsx';

function App() {

  let Sidx=6;
  let Tidx=1;
 return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/studentlogin' element={<Studentlogin/>}/>
      <Route path='/teacherlogin' element={<Teacherlogin/>}/>
      <Route path='/adminlogin' element={<Adminlogin/>}/>   
      <Route path='/parentlogin' element={<Parentlogin/>}/>   
      <Route path='/studentdashboard' element={<StudentDashboard Sidx={Sidx}/>}/>
      <Route path='/studentattendance' element={<StudentAttendence Sidx={Sidx}/>}/>
      <Route path='/inprogress' element={<InProgress/>}/>
      <Route path='/feedetails' element={<FeeDetails Sidx={Sidx}/>}/>
      <Route path='/teacherdashboard' element={<TeacherDashboard Tidx={Tidx}/>} />
      <Route path='/parentdashboard' element={<Parentdashboard/>}/>
      <Route path='/teacherstudents' element={<TeacherStudents/>}/>
      <Route path='/teacherattendance' element={<TeacherAttendance Tidx={Tidx}/>}/> 
    </Routes> 
    </BrowserRouter>
  )
}

export default App;
