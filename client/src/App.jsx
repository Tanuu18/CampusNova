import { useState } from 'react'
import Attendance from './pages/Attendance'
import './App.css'
import RegisterPage from './pages/RegisterPage'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import LoginForm from './components/LoginForm';
import Box from '@mui/material/Box';
import Navbar from './components/navbar';
import HomePage from './pages/home.jsx';
import StudentDashboard from './pages/StudentDashboard.jsx';
import StudentAttendence from './pages/StudentAttendence.jsx';
import InProgress from './pages/InProgress.jsx';
import FeeDetails from './pages/FeeDetails.jsx';

function App() {
 return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/studentdashboard' element={<StudentDashboard/>}/>
      <Route path='/attendancepage' element={<Attendance/>}/>
      <Route path='/studentattendance' element={<StudentAttendence/>}/>
      <Route path='/inprogress' element={<InProgress/>}/>
      <Route path='/feedetails' element={<FeeDetails/>}/>
    </Routes> 
    </BrowserRouter>
  )
}

export default App;
