import Box from '@mui/material/Box'
import React from 'react'
import Typography from '@mui/material/Typography';
import attendance from '../data/attendance.js';
import students from '../data/students.js';
import classDetails from '../data/classdetails.js';
import teachers from '../data/teachers.js';

function OverallAttendancecard() {

    let idx=1;
    const student=students[idx];
    
    const classinfo=classDetails.find((item)=>{
        return (
            item.class==student.class && item.section==student.section
        );
    });

    const classteacher=teachers.find((teacher)=>{
        return (
            teacher.id==classinfo.classTeacherId
        );
    });

    const studentattendance=attendance.filter((att)=>{
    return (
        student.id==att.studentId
    );}
    )

    const presentclasses=studentattendance.filter((att)=>{
        return (
            att.status=="Present"
        );
    })

    const absentclasses=studentattendance.filter((att)=>{
        return (
            att.status=="Absent"
        );
    })

    let totalclasses=studentattendance.length;
    let presents=presentclasses.length;
    let absents=absentclasses.length;


  return (
    <Box sx={{background:"linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  border: "1px solid rgba(255,255,255,0.20)",
  borderRadius: "50px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
    p:4,
    mt:"80px",
    color:"black"}}>
        <Typography variant="h4" sx={{fontWeight:700,color:"white", textAlign:"center",mb:5}} >
          Overall Attendance
       </Typography>
        <hr/>
        <br/>
       <Typography variant='h6' sx={{fontWeight:700,color:"white", textAlign:"center"}}>
         Name : {student.name}<br/>
         Roll no. : {student.id}<br/>
         Class : {classinfo.class} {classinfo.section} <br/>
         class Teacher : {classteacher.name}
       </Typography><br/><hr/>
       <br/>

       <Typography variant='h6' sx={{fontWeight:700,color:"white", textAlign:"center"}}>
        Your Attendance Percentage <br/>
        {(presents/totalclasses)*100}%
       </Typography><br/><hr/>
       <br/>
       <br/>
        <Typography variant="h6" sx={{fontWeight:700,color:"white", textAlign:"center",mb:5}} >
          Total : {totalclasses}<br/>
          Present : {presents} &nbsp;&nbsp; Absent : {absents}
       </Typography>
       
   </Box>
  );
}

export default OverallAttendancecard