import Box from '@mui/material/Box'
import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SettingsIcon from '@mui/icons-material/Settings';
import { useLocation, useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography'
import logo2 from "../assets/logo2.png";

function Studentsidebar({ sidebarOpen, setSidebarOpen }) {

    const location=useLocation();

    let navigate=useNavigate();

    const menuItems=[{
        name:"DashBoard",
        icon:<DashboardIcon/>,
        path:'/studentdashboard'
    },{
        name:"Attendance",
        icon:<CalendarMonthIcon/>,
         path:'/studentattendance'
    },{
        name:"Fee Details",
        icon:<CreditCardIcon/>,
         path:'/feedetails'
    },
    {
        name:"Report Card",
        icon:<AssessmentIcon/>,
        path:'/inprogress'
    },{
        name:"Settings",
        icon:<SettingsIcon/>,
          path:'/inprogress'
    }];


  return (

    <>
    <Box sx={{
        position:"fixed",
        left:0,
        top:"75.7px",
        width:{
    xs:"0px",
    md:"300px"
},
display:{
    xs:"none",
    md:"block"
},
overflow:"hidden",
transition:"all .3s ease",
        height:"100vh",
        backgroundColor:"#192237"
    }}>
       
        <List>
            
            { menuItems.map((item)=>{
                return(
                    <ListItem  >
                <ListItemButton  onClick={()=>{navigate(item.path)}}
                sx={{
    borderRadius: "12px",
    mx: 1,
    my: 0.5,

    backgroundColor:
      location.pathname === item.path ? "#8B5CF620" : "transparent",

    borderLeft:
      location.pathname === item.path
        ? "4px solid #C084FC"
        : "4px solid transparent",

    "&:hover": {
      backgroundColor: "#25304D",
    },
  }}>

                    
                    <ListItemIcon sx={{color:"white",height:"50px",width:"50px",mt:2}}>{item.icon}</ListItemIcon>
                    <ListItemText slotProps={{primary:{sx:{
                        color:"white",fontSize:"18px",fontWeight:600
                    }}}} primary={item.name} />
                    
                </ListItemButton>
            </ListItem>
                );
            })}
        </List>

    </Box>

    <Drawer
  anchor="left"
  open={sidebarOpen}
  onClose={() => setSidebarOpen(false)}
  sx={{
    display: {
      xs: "block",
      md: "none",
    },

    "& .MuiDrawer-paper": {
      width: 290,
      background: "linear-gradient(180deg,#111827,#1E293B)",
      color: "white",
      borderRight: "1px solid rgba(255,255,255,.12)",
      boxShadow: "0 0 40px rgba(0,0,0,.5)",
      pt: 2
    }
  }}
>

    <Box
  sx={{
    display: "flex",
    alignItems: "center",
    gap: 2,
    px: 3,
    pb: 2,
    borderBottom: "1px solid rgba(255,255,255,.08)"
  }}
>
  <img
    src={logo2}
    alt="CampusNova"
    style={{
      width: 45,
      height: 45
    }}
  />

  <Typography
    sx={{
      fontSize: 24,
      fontWeight: 700
    }}
  >
    Campus
    <span style={{ color: "#C084FC" }}>
      Nova
    </span>
  </Typography>
</Box>

<List sx={{mt:2}}>

    {menuItems.map((item) => (

        <ListItem key={item.name} disablePadding sx={{
  borderRadius: "14px",
  mx: 2,
  my: 0.7,

  transition: "all .3s ease",

  "&:hover": {
    bgcolor: "#25304D",
    transform: "translateX(6px)"
  }
}}>

            <ListItemButton
                onClick={()=>{
                    navigate(item.path);
                    setSidebarOpen(false);
                }}
            >

                <ListItemIcon
  sx={{
    color: "#C084FC",
    minWidth: 42
  }}
>
  {item.icon}
</ListItemIcon>

               <ListItemText
  primary={item.name}
  primaryTypographyProps={{
    fontSize: 17,
    fontWeight: 600
  }}
/>

            </ListItemButton>

        </ListItem>

    ))}

</List>

</Drawer>

</>
  )
}

export default Studentsidebar
