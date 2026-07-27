import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import students from '../data/students.js';
import Stack from '@mui/material/Stack';
import announcements from '../data/announcements.js';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import CampaignIcon from '@mui/icons-material/Campaign';
import "../css/cards.css";

function Announcementcard() {
  return (
    <div className='announcementcard' >
         <Box sx={{display:"flex", alignContent:"center", color:"white",
             background:"linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  border: "1px solid rgba(255,255,255,0.20)",
  borderRadius: "50px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.35)"

          , minHeight:"80px",width:"650px",ml:"350px"}} >
  
   
   <Box sx={{mt:1,ml:"30px"}}> <h3 style={{textAlign:"center"}}>Announcements</h3><br/>
   <List sx={{marginTop:0.2}}>
    { announcements.map((announce)=>{
    return <ListItem>
        <ListItemButton>
            <ListItemIcon><CampaignIcon sx={{color:"white"}}/></ListItemIcon>
            <ListItemText primary={announce}/>
        </ListItemButton>
        </ListItem>
    })}
    
    </List>
    </Box>
    </Box>
   
    </div>
  )
}

export default Announcementcard;