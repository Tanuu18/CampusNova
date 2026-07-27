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
import { useLocation, useNavigate } from 'react-router-dom'

function Studentsidebar() {

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
    <Box sx={{
        position:"fixed",
        left:0,
        top:"75.7px",
        width:{
            xs:0,
            md:"300px"
        },
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
  )
}

export default Studentsidebar
