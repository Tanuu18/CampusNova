import React from 'react'
import StudentNavbar from '../components/Studentnavbar';
import "../css/studentdashboard.css";
import Studentsidebar from '../components/Studentsidebar';
import Welcomecard from '../components/Welcomecard';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import announcements from '../data/announcements.js';
import List from '@mui/material/List';
import Announcementcard from '../components/announcementcard.jsx';
import Upcomingeventcard from '../components/upcomingeventcard.jsx';
import TimeTable from '../components/timetablecard.jsx';
import Homeworkcard from '../components/homeworkcard.jsx';


function StudentDashboard() {
  return (
    <div className='studentdashboard'><StudentNavbar/><br/>
   
    <Studentsidebar/>
    
    
    <Box sx={{
      ml:"310px",
      mr:10
    }}>
    <Welcomecard/>
    </Box>
    <Box>
     
      <Grid container spacing={3} sx={{mt:5,mb:5}}>
        <Grid size={{xs:12,md:8}} sx={{mt:2}}>
           <Announcementcard/>
        </Grid>
      <Grid size={{xs:12, md:4}}>
        <Upcomingeventcard/>
      </Grid>
      </Grid>
      <Grid container spacing={3} sx={{mt:5,mb:5}}>
        <Grid size={{xs:12,md:4}} sx={{mt:2}}>
           <TimeTable/>
        </Grid>
      <Grid size={{xs:12, md:8}} >
        <Homeworkcard/>
      </Grid>
      
      </Grid>
    </Box>
    
    
    
    </div>
  )
}

export default StudentDashboard;