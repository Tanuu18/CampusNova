import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import React from 'react'
import students from '../data/students.js';
import Stack from '@mui/material/Stack';
import announcements from '../data/announcements.js';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import classDetails from "../data/classdetails.js";
import teachers from "../data/teachers.js";
import SchoolIcon from "@mui/icons-material/School";
import BadgeIcon from "@mui/icons-material/Badge";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Divider from '@mui/material/Divider';

function Studentwelcomecard({Sidx}) {
 
    let student=students[Sidx];

    const hour = new Date().getHours();

const greeting =
  hour < 12
    ? "Good Morning"
    : hour < 17
    ? "Good Afternoon"
    : "Good Evening";
    

    const classInfo = classDetails.find((item) => {
    return (
        item.class == student.class &&
        item.section == student.section
    );
});

const classTeacher = teachers.find((teacher) => {
    return teacher.id == classInfo.classTeacherId;
});

    const today = new Date();

    const formattedDate = today.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
});

  return (


    <Box
sx={{
    width:"100%",
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

"&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 30px 60px rgba(0,0,0,.45)",
    border:"1px solid rgba(139,92,246,.6)",
    borderLeft: "4px solid #8B5CF6",
}
}}>
    

        <Typography
       
       sx={{
    fontWeight:700,
    display:"flex",
    alignItems:"center",
    gap:1,
    fontSize: {
    xs: "28px",
    md: "36px"
}
    }}>
    <WavingHandIcon sx={{color:"#FACC15"}}/>
    {greeting}, {student.name}
    </Typography>

    <Typography
       sx={{
    mt:1,
    color:"#D1D5DB",
    fontSize:"17px"
       }}>
    Welcome back to CampusNova. Have a productive learning day!
    </Typography>

    <Divider
    sx={{
    my: 3,
    borderColor: "rgba(255,255,255,0.15)",
    }}/>

      <Grid container spacing={3} sx={{mt:2}}>

        <Grid size={{ xs: 12, md: 6 }}>

          <Typography
           sx={{
    display: "flex",
    alignItems: "center",
    gap: 1,
    fontSize: "18px",
    fontWeight: 600,
    mb: 2
          }}>
    <SchoolIcon sx={{ color: "#A855F7" }} />
    Class : {student.class}-{student.section}
</Typography>

   <Typography
   sx={{
    display: "flex",
    alignItems: "center",
    gap: 1,
    fontSize: "18px",
    fontWeight: 600
}}>
    <BadgeIcon sx={{ color: "#38BDF8" }} />
    Roll No : {student.rollNo}
</Typography>


        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>

          <Typography
          sx={{
    display: "flex",
    alignItems: "center",
    gap: 1,
    fontSize: "18px",
    fontWeight: 600,
    mb: 2
           }}>
    <PersonIcon sx={{ color: "#22C55E" }} />
    Class Teacher : {classTeacher.name}
     </Typography>

     <Typography
       sx={{
    display: "flex",
    alignItems: "center",
    gap: 1,
    fontSize: "18px",
    fontWeight: 600
   }}>
    <CalendarMonthIcon sx={{ color: "#FACC15" }} />
    Today : {formattedDate}
    </Typography>


        </Grid>


      </Grid>

      <Typography
       sx={{
    mt:3,
    textAlign:"center",
    fontStyle:"italic",
    color:"#CBD5E1",

        }}>
          Learning today, Leading tomorrow.
         </Typography>
    
    
   </Box>

   

  );
}

export default Studentwelcomecard