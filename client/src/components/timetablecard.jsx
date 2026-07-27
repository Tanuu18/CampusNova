import React from 'react'
import Box from '@mui/material/Box'
import timetable from '../data/timetable.js'
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import SubjectIcon from '@mui/icons-material/Subject';
import AccessTimeIcon from'@mui/icons-material/AccessTime';

function TimeTable() {
  return (
    <div className='upcomingeventcard' > 
        <Box sx={{color:"white",
            minHeight:"200px",
            width:"450px",
            mt:1,
            ml:"350px",
            borderRadius:"50px",
               background:
    "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  border: "1px solid rgba(255,255,255,0.20)",
  borderRadius: "50px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.35)"

         }}>

          <Box> <h3 style={{marginLeft:"10px",textAlign:"center"}}><br/>Today's TimeTable</h3><br/>
    <List sx={{marginTop:0.2}}>
    { timetable.map((timetable)=>{
    return (<ListItem>
        <ListItemButton>
            
                    <ListItemText primary={`Period :${timetable.period}`}/>
                    <ListItemIcon><SubjectIcon sx={{color:"white"}}/></ListItemIcon>
                    <ListItemText primary={timetable.subject}></ListItemText>
                    <ListItemIcon><AccessTimeIcon sx={{color:"white"}}/></ListItemIcon>
                    <ListItemText primary={timetable.time}></ListItemText>
               
        </ListItemButton>
        </ListItem>)
    })}
    
    </List>
     </Box>
         
    </Box>
    </div>
  )
}

export default TimeTable