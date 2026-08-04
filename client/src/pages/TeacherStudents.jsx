import React,{useState} from 'react'
import Teachernavbar from '../components/Teachernavbar'
import Teachersidebar from '../components/Teachersidebar'
import Toolbar from '@mui/material/Toolbar';
import TeacherStudentsHeader from '../components/TeacherStudentsHeader';
import Box from '@mui/material/Box';

function TeacherStudents() {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='dashboard'><Teachernavbar  sidebarOpen={sidebarOpen}
    setSidebarOpen={setSidebarOpen}/><br/>

   <Teachersidebar   sidebarOpen={sidebarOpen}
    setSidebarOpen={setSidebarOpen}/>

    <Toolbar/>

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

    <TeacherStudentsHeader/>




    </Box>
    
    
    </div>
  )
}

export default TeacherStudents