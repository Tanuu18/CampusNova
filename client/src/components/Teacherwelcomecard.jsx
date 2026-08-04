import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import React from 'react'
import students from '../data/students.js';
import classDetails from '../data/classdetails.js';
import Stack from '@mui/material/Stack';
import announcements from '../data/announcements.js';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import teachers from "../data/teachers.js";
import SchoolIcon from "@mui/icons-material/School";
import BadgeIcon from "@mui/icons-material/Badge";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Divider from '@mui/material/Divider';
import ClassIcon from "@mui/icons-material/Class";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AssignmentIcon from "@mui/icons-material/Assignment";
import FactCheckIcon from "@mui/icons-material/FactCheck";

function Teacherwelcomecard({Tidx}) {
   
   
    let teacher=teachers[Tidx];
   
     const hour = new Date().getHours();

const greeting =
  hour < 12
    ? "Good Morning"
    : hour < 17
    ? "Good Afternoon"
    : "Good Evening";
    
    const today = new Date();

const formattedDate = today.toLocaleDateString("en-IN", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
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
    {greeting}, {teacher.name}
    </Typography>

    <Typography
       sx={{
    mt:1,
    color:"#D1D5DB",
    fontSize:"17px"
       }}>
    Welcome back! Here's your teaching schedule for today.
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
    Subject : {teacher.subject}
</Typography>

   <Typography
   sx={{
    display: "flex",
    alignItems: "center",
    gap: 1,
    fontSize: "18px",
    fontWeight: 600,
    mb:2
}}>
    <BadgeIcon sx={{ color: "#38BDF8" }} />
    Experience : {teacher.experience} Years
</Typography>

<Typography
sx={{
    display:"flex",
    alignItems:"center",
    gap:1,
    fontSize:"18px",
    fontWeight:600,
    
}}
>
<ClassIcon sx={{color:"#F97316"}}/>
Class Teacher : {teacher.classTeacherOf}
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
    Qualification : {teacher.qualification}
     </Typography>

     <Typography
sx={{
    display:"flex",
    alignItems:"center",
    gap:1,
    fontSize:"18px",
    fontWeight:600,
    mb:2
}}
>
<EmailIcon sx={{color:"#EC4899"}}/>
{teacher.email}
</Typography>

     <Typography
       sx={{
    display: "flex",
    alignItems: "center",
    gap: 1,
    fontSize: "18px",
    fontWeight: 600,
    mb:2
   }}>
    <CalendarMonthIcon sx={{ color: "#FACC15" }} />
    Today : {formattedDate}
    </Typography>

    <Typography
sx={{
    display:"flex",
    alignItems:"center",
    gap:1,
    fontSize:"18px",
    fontWeight:600
}}
>
<PhoneIcon sx={{color:"#06B6D4"}}/>
{teacher.phone}
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
          
"Inspiring minds, shaping futures."
         </Typography>


    
   </Box>

   

  );
}

export default Teacherwelcomecard