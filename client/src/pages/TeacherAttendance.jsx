import React, { useState } from 'react'
import Teachernavbar from '../components/Teachernavbar';
import Teachersidebar from '../components/Teachersidebar';
import Toolbar from '@mui/material/Toolbar';
import TeacherAttendanceheader from '../components/TeacherAttendanceheader';
import Box from '@mui/material/Box';
import teachers from '../data/teachers';
import students from '../data/students';
import TeacherAttendenceMark from '../components/TeacherAttendenceMark';



function TeacherAttendance({Tidx}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const teacher = teachers[Tidx];

  const classStudents = students.filter((student) => {
    return (
        student.class === teacher.class &&
        student.section === teacher.section
    );
});

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

    <TeacherAttendanceheader Tidx={Tidx}/>

    <TeacherAttendenceMark Tidx={Tidx}/>

    </Box>

    </div>

    )
}

export default TeacherAttendance