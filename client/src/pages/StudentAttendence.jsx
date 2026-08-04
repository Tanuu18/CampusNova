import React from 'react'
import StudentNavbar from '../components/Studentnavbar'
import Studentsidebar from '../components/Studentsidebar'
import Box from '@mui/material/Box'
import OverallAttendancecard from '../components/OverallAttendancecard'
import "../css/studentattendance.css"
import Grid from '@mui/material/Grid'
import Attendancehistorycard from '../components/attendancehistorycard'
import Stack from '@mui/material/Stack'
import Toolbar from '@mui/material/Toolbar'

function StudentAttendence({Sidx}) {
  return (
    <div className='studentattendance'>
        <StudentNavbar/><br/>
   
    <Studentsidebar/>
    
    <Toolbar/>
    
     
   <Box
sx={{
    ml:{
        xs:2,
        sm:2,
        md:"320px"
    },

    mr:{
        xs:2,
        sm:2,
        md:4
    },

    mt:{
        xs:5,
        md:5
    }
}}
>
      <OverallAttendancecard Sidx={Sidx}/>
    </Box>
    <Box
sx={{
    ml:{
        xs:2,
        sm:2,
        md:"320px"
    },

    mr:{
        xs:2,
        sm:2,
        md:4
    },

    mt:4,
    mb:4
}}
>
    <Attendancehistorycard Sidx={Sidx}/>
    </Box>
    </div>
  )
}

export default StudentAttendence