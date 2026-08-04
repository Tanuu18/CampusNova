import Box from '@mui/material/Box'
import React from 'react'
import Typography from '@mui/material/Typography';
import attendance from '../data/attendance.js';
import students from '../data/students.js';
import classDetails from '../data/classdetails.js';
import teachers from '../data/teachers.js';
import Divider from "@mui/material/Divider";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CircularProgress from "@mui/material/CircularProgress";


function OverallAttendancecard({Sidx}) {

    
    const student=students[Sidx];
    
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
    <Box sx={{
    p: {
    xs: 3,
    md: 4
},
    borderRadius:"30px",

    background:
    "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))",

    backdropFilter:"blur(18px)",

    border:"1px solid rgba(255,255,255,0.20)",

    boxShadow: "0 15px 35px rgba(0,0,0,0.35)",

    color:"white",

    borderLeft: "8px solid #8B5CF6",


    transition: "all 0.3s ease",

    minHeight:"80px",

"&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 30px 60px rgba(0,0,0,.45)",
    border:"1px solid rgba(139,92,246,.6)",
    borderLeft: "10px solid #8B5CF6",
}
}}>

        <Box
sx={{
    display:"flex",
    alignItems:"center",
    gap:1.5,
    justifyContent:"center"
}}
>

        <CalendarMonthIcon
sx={{
    color:"#C084FC",
    fontSize:34
}}
/>


        <Typography variant="h4" sx={{fontWeight:700,color:"white"}} >
          Overall Attendance
       </Typography>

       </Box>

             <Typography
sx={{
  color: "#D1D5DB",
  fontSize: 15,
  mt: 1,
  textAlign: "center"
}}
>
Track your attendance performance
</Typography>


        <Divider
sx={{
    my:3,
    borderColor:"rgba(255,255,255,.12)"
}}
/>
        <br/>
       <Box
sx={{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center"
}}
>

<Box
sx={{
    position:"relative",
    display:"inline-flex"
}}
>

<CircularProgress
variant="determinate"
value={(presents/totalclasses)*100}
size={130}
thickness={4}
sx={{
    color:"#8B5CF6"
}}
/>

<Box
sx={{
    position:"absolute",
    top:0,
    left:0,
    bottom:0,
    right:0,

    display:"flex",
    alignItems:"center",
    justifyContent:"center"
}}
>

<Typography
sx={{
    color:"white",
    fontWeight:700,
    fontSize:28
}}
>
{Math.round((presents/totalclasses)*100)}%
</Typography>

</Box>

</Box>

<Typography
sx={{
    color:"#D1D5DB",
    mt:2,
    fontSize:16
}}
>
Overall Attendance
</Typography>

</Box>

       <Divider
sx={{
    my:3,
    borderColor:"rgba(255,255,255,.12)"
}}
/>
       
    
        <Box
sx={{
  display: "flex",
  gap: 2,
  justifyContent: "space-between",
  flexWrap: "wrap",
  mt: 3
}}
>

<Box
sx={{
  flex: 1,
  minWidth: 120,
  bgcolor: "rgba(34,197,94,.12)",
  borderRadius: "16px",
  p: 2,
  textAlign: "center"
}}
>
  <Typography sx={{ color: "#4ADE80", fontSize: 14 }}>
    Present
  </Typography>

  <Typography sx={{ fontSize: 28, fontWeight: 700 }}>
    {presents}
  </Typography>
</Box>

<Box
sx={{
  flex: 1,
  minWidth: 120,
  bgcolor: "rgba(239,68,68,.12)",
  borderRadius: "16px",
  p: 2,
  textAlign: "center"
}}
>
  <Typography sx={{ color: "#F87171", fontSize: 14 }}>
    Absent
  </Typography>

  <Typography sx={{ fontSize: 28, fontWeight: 700 }}>
    {absents}
  </Typography>
</Box>

<Box
sx={{
  flex: 1,
  minWidth: 120,
  bgcolor: "rgba(168,85,247,.12)",
  borderRadius: "16px",
  p: 2,
  textAlign: "center"
}}
>
  <Typography sx={{ color: "#C084FC", fontSize: 14 }}>
    Total
  </Typography>

  <Typography sx={{ fontSize: 28, fontWeight: 700 }}>
    {totalclasses}
  </Typography>
</Box>

</Box>
       
   </Box>
  );
}

export default OverallAttendancecard