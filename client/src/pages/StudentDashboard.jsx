import React,{useState} from 'react'
import StudentNavbar from '../components/Studentnavbar';
import "../css/dashboard.css";
import Studentsidebar from '../components/Studentsidebar';
import Studentwelcomecard from '../components/Studentwelcomecard.jsx';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import announcements from '../data/announcements.js';
import List from '@mui/material/List';
import Announcementcard from '../components/announcementcard.jsx';
import Upcomingeventcard from '../components/upcomingeventcard.jsx';
import TimeTable from '../components/timetablecard.jsx';
import Homeworkcard from '../components/homeworkcard.jsx';
import Toolbar from '@mui/material/Toolbar';
import Drawer from "@mui/material/Drawer";


function StudentDashboard({Sidx}){
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='dashboard'><StudentNavbar   sidebarOpen={sidebarOpen}
    setSidebarOpen={setSidebarOpen}/><br/>


    <Toolbar/>
   
    <Studentsidebar   sidebarOpen={sidebarOpen}
    setSidebarOpen={setSidebarOpen}/>
    
    
    <Box sx={{
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
    xs:10,
    md:3
  }
}}>
    <Studentwelcomecard Sidx={Sidx}/>
    
     
      <Grid container spacing={5} sx={{mt:5,mb:5}}>
        <Grid size={{xs:12,md:7}} sx={{mt:2}}>
           <Announcementcard/>
        </Grid>
      <Grid size={{xs:12, md:5}} sx={{mt:2}}>
        <Upcomingeventcard/>
      </Grid>
      </Grid>
      <Grid container spacing={3} sx={{mt:5,mb:5}}>
        <Grid size={{xs:12,md:5}} sx={{mt:2}}>
           <TimeTable/>
        </Grid>
      <Grid size={{xs:12, md:7}} sx={{mt:2}} >
        <Homeworkcard/>
      </Grid>
      
      </Grid>
    </Box>
    
    
    
    </div>
  )
}

export default StudentDashboard;