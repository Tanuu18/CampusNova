import React from 'react'
import StudentNavbar from '../components/Studentnavbar'
import Studentsidebar from '../components/Studentsidebar'
import Box from '@mui/material/Box'
import OverallAttendancecard from '../components/OverallAttendancecard'
import "../css/studentattendance.css"
import Grid from '@mui/material/Grid'
import Attendancehistorycard from '../components/attendancehistorycard'
import Stack from '@mui/material/Stack'

function StudentAttendence() {
  return (
    <div className='studentattendance'>
        <StudentNavbar/><br/>
   
    <Studentsidebar/>
    
    
     
    <Box sx={{ml:"320px",mr:"50px"}}>
      <OverallAttendancecard/>
    </Box>
    <Box sx={{ml:"320px",mr:"50px"}}>
    <Attendancehistorycard/>
    </Box>
    </div>
  )
}

export default StudentAttendence