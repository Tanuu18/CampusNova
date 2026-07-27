import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import React from 'react'
import students from '../data/students.js';
import Stack from '@mui/material/Stack';
import announcements from '../data/announcements.js';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';

function Welcomecard() {
   
    let idx=1;
    let student=students[idx];

  return (
    

        <Typography variant='h4' sx={{fontWeight:700,color:"white", letterSpacing:2, display:"flex", justifyContent:"center",mb:4,ml:10,mt:9}}>WELCOME&nbsp; {student.name.toUpperCase()}</Typography>
    
   

   

  );
}

export default Welcomecard