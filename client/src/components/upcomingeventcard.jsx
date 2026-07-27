import React from 'react'
import Box from '@mui/material/Box'
import upcomingEvents from '../data/upcomingevents.js'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';

function Upcomingeventcard() {
  return (
    <div className='upcomingeventcard' > 
        <Box sx={{color:"white",
            minHeight:"200px",
            mt:2,
            width:"450px",
            ml:"0px",
            borderRadius:"50px",
               background:
    "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  border: "1px solid rgba(255,255,255,0.20)",
  borderRadius: "50px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.35)"

         }}>
         
      <Box> <h3 style={{marginLeft:"10px",textAlign:"center"}}><br/>Upcoming Events</h3><br/>
    <List sx={{marginTop:0.2}}>
    { upcomingEvents.map((Events)=>{
    return (<ListItem>
        <ListItemButton>
            
                    <ListItemText primary={Events.title}/>
                    <ListItemIcon><DateRangeIcon sx={{color:"white"}}/></ListItemIcon>
                    <ListItemText primary={Events.date}></ListItemText>
                    <ListItemIcon><AccessTimeIcon sx={{color:"white"}}/></ListItemIcon>
                    <ListItemText primary={Events.time}></ListItemText>
               
        </ListItemButton>
        </ListItem>)
    })}
    
    </List>
     </Box>
    </Box>
    </div>
  )
}

export default Upcomingeventcard