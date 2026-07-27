import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import attendance from "../data/attendance";
import students from "../data/students";

import React from 'react'
import ListItemButton from "@mui/material/ListItemButton";

function Attendancehistorycard() {

    const student = students[0];

       const studentAttendance = attendance.filter((item)=>{
    return item.studentId === student.id;
     });

   return(
       <Box sx={{background:"linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  border: "1px solid rgba(255,255,255,0.20)",
  borderRadius: "50px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
    p:4,
    mt:"80px",
    color:"black",
    minHeight:"200px",
    Width:"100px"}}>

         <Typography variant="h4" sx={{fontWeight:700,color:"white", textAlign:"center",mb:5}} >
          Attendance History
       </Typography>

        <List>
           { studentAttendance.map((item)=>{
              return  <ListItem>
                  
                    <ListItemIcon><CalendarMonthIcon/></ListItemIcon>
                    <ListItemText>{item.date}</ListItemText>
                    <ListItemText>{item.status}</ListItemText>
                    <ListItemButton>{item.status=="Present"?<CheckCircleIcon sx={{color:"greenyellow"}}/>:<CancelIcon color="error"/>}</ListItemButton>
                    
                </ListItem>
            })}
        </List>


       </Box>
   );
}

export default Attendancehistorycard