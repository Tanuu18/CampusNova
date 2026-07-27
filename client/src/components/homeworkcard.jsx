import Box from '@mui/material/Box'
import React from 'react'
import homework from '../data/homework'
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';

function Homeworkcard() {
  return (
    <div className="homeworkcard">
        <Box sx={{color:"white",
            minHeight:"150px",
            width:"650px",
            mt:2,
            mr:"50px",
            ml:"320px" ,
            mb:"50px",
            borderRadius:"50px",
               background:
    "linear-gradient(135deg, rgba(255,255,255,0.18), rgba(255,255,255,0.08))",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  border: "1px solid rgba(255,255,255,0.20)",
  borderRadius: "50px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.35)"
}}>

                <Box> <h3 style={{marginLeft:"10px",textAlign:"center"}}><br/>HomeWork/Assignments</h3><br/>
    <List sx={{marginTop:0.2}}>
    { homework.map((work)=>{
    return (<ListItem>
        <ListItemButton>
            
                    <ListItemText primary={`Subject: ${work.subject}`}/>
                    <br/>
                    <ListItemText primary={`Task: ${work.task}`}></ListItemText>
                    <br/>
                    <ListItemText primary={`Due-Date: ${work.dueDate}`}></ListItemText>
               
        </ListItemButton>
        </ListItem>)
    })}
    
    </List>
     </Box>
        
        </Box>


    </div>
  )
}

export default Homeworkcard