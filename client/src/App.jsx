import { useState } from 'react'
<<<<<<< HEAD

=======
>>>>>>> a5af4ea (Completed parent module backend)
import './App.css'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import LoginForm from './components/LoginForm';
import Box from '@mui/material/Box';
import Navbar from './components/navbar';
import Studentlogin from './pages/Studentlogin.jsx';
import StudentDashboard from './pages/StudentDashboard.jsx';
import StudentAttendence from './pages/StudentAttendence.jsx';
import InProgress from './pages/InProgress.jsx';
import FeeDetails from './pages/FeeDetails.jsx';
<<<<<<< HEAD
import TeacherDashboard from './pages/TeacherDashboard.jsx';
import Parentdashboard from './pages/Parentdashboard.jsx';
import HomePage from './pages/home.jsx';
import Teacherlogin from './pages/TeacherLogin.jsx';
import Adminlogin from './pages/Adminlogin.jsx';
import Parentlogin from './pages/parentlogin.jsx';
import TeacherStudents from './pages/TeacherStudents.jsx';
import TeacherAttendance from './pages/TeacherAttendance.jsx';
=======
import AdminLayout from './admin/layouts/AdminLayout.jsx';
import Dashboard from './admin/pages/Dashboard.jsx';
import Students from './admin/pages/Students.jsx';
import Teachers from './admin/pages/Teachers.jsx';
//import Parents from './admin/pages/Parents.jsx';
import Fees from './admin/pages/Fees.jsx';
import Attendance from './admin/pages/Attendance.jsx';
import Setting from './admin/pages/Setting.jsx';
import AdminLogin from './admin/pages/AdminLogin.jsx';
import ProtectedRoute from './admin/components/ProtectedRoute.jsx';
import Parent from './admin/pages/Parent.jsx';

>>>>>>> a5af4ea (Completed parent module backend)

function App() {

  let Sidx=6;
  let Tidx=1;
 return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
<<<<<<< HEAD
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
=======
      <Route path='/studentdashboard' element={<StudentDashboard/>}/>
      <Route path='/studentattendance' element={<StudentAttendence/>}/>
      <Route path='/inprogress' element={<InProgress/>}/>
      <Route path='/feedetails' element={<FeeDetails/>}/>
      <Route path="/admin" element={
        <ProtectedRoute>
           <AdminLayout/>
        </ProtectedRoute>
        
        }>
         <Route index element={<Dashboard/>}/>
         <Route path="students" element={<Students/>}/>
         <Route path="teachers" element={<Teachers/>}/>
         <Route path="parents" element={<Parent/>}/>
         <Route path="fees" element={<Fees/>}/>
         <Route path="attendance" element={<Attendance/>}/>
         <Route path="setting" element={<Setting/>}/>
      </Route>
      <Route path="/admin/login" element={<AdminLogin/>}/>
      <Route path="/admin/fees" element={<Fees/>}/>
      
>>>>>>> a5af4ea (Completed parent module backend)
    </Routes> 
    </BrowserRouter>
  )
}

export default App;
